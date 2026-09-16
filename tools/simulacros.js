#!/usr/bin/env node
/**
 * simulacros.js — ¿cuántos simulacros DISTINTOS ofrece la app, y cuántos puede
 * llenar el banco de verdad sin repetir una sola pregunta?
 *
 *     node tools/simulacros.js
 *
 * No es lo mismo. La app ofrece N tarjetas; el banco llena M formas realmente
 * distintas. Si N > M, algunas tarjetas comparten preguntas con otras — no son
 * exámenes iguales (cada uno se siembra con su número), pero se pisan.
 *
 * Desde que `assembleModule` reparte por cuota oficial de dominio, M lo decide
 * el DOMINIO MÁS ESCASO de cada pozo, no el total. Esta herramienta no reimplementa
 * nada: saca `formasQueLlena` y `cuantosExamenes` de `index.html`, y lee el piso y
 * el techo de cada familia del propio código, así que no puede desincronizarse.
 *
 * Sale con código 1 si alguna familia ofrece más del DESFASE tolerado por encima
 * de lo que el banco llena.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { archivosDeSets, RAIZ } = require(path.join(__dirname, 'lib-banco'));

/* Cuánto se tolera que la oferta pase a la capacidad. No es cero: el piso de cada
   familia es un trinquete a propósito (una tarjeta que desaparece puede llevarse
   el resultado de alguien), así que mientras el banco crece la oferta va por
   delante. Por encima de esto, la mitad de un simulacro serían preguntas que el
   estudiante ya vio en otro. */
const DESFASE = 0.35;

const html = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
function trozo(desde, hasta) {
  const i = html.indexOf(desde), j = html.indexOf(hasta, i);
  if (i < 0 || j < 0) { console.error(`✗ no se encontró "${desde}" en index.html`); process.exit(1); }
  return html.slice(i, j);
}
const evalGlobal = eval;
const g = { SAT_SETS: [], SAT_DESMOS: {} };
global.window = g;
archivosDeSets(RAIZ).forEach(rel => {
  try { eval(fs.readFileSync(path.join(RAIZ, rel), 'utf8')); }
  catch (e) { console.error(`✗ ${rel}: ${e.message}`); process.exit(1); }
});
globalThis.__SETS__ = g.SAT_SETS;
evalGlobal(trozo('var PLAN_DOMW', '/* ================= LA TAXONOMÍA'));
evalGlobal('var SETS = globalThis.__SETS__;');
evalGlobal(trozo('var MOCK_RW', '// College Board question order'));

/* Las llamadas reales, leídas de index.html. Si alguien cambia un piso o un
   techo allá, esta herramienta lo ve sin que nadie la toque. */
const LLAMADAS = [...html.matchAll(
  /var\s+(N_[A-Z]+)\s*=\s*cuantosExamenes\(formasQueLlena\(\s*'([^']+)'\s*,\s*([^,]+),\s*(\{[^}]*\})\s*\)\s*,\s*1\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/g)];
if (!LLAMADAS.length) { console.error('✗ no se encontró ninguna llamada a cuantosExamenes(formasQueLlena(...)) en index.html'); process.exit(1); }

const NOMBRES = { N_ENG: 'English Mocks', N_MATH: 'Math Mocks', N_REAL: 'Realistic Hard',
  N_EXTREME: 'Extreme Mocks', N_HARD: 'Hard Mocks', N_MOCKS: 'Full Mocks' };

console.log('SIMULACROS: LO QUE LA APP OFRECE CONTRA LO QUE EL BANCO LLENA\n');
console.log('  familia            ofrece   el banco llena   piso   techo');
let malos = 0, totalOferta = 0, totalReal = 0;
for (const [, sigla, clave, filtroSrc, modulosSrc, pisoS, techoS] of LLAMADAS) {
  const piso = +pisoS, techo = +techoS;
  const filtro = evalGlobal('(' + filtroSrc.trim() + ')');
  const modulos = evalGlobal('(' + modulosSrc + ')');
  const llena = formasQueLlena(clave + '|' + sigla, filtro, modulos);
  const ofrece = cuantosExamenes(llena, 1, piso, techo);
  totalOferta += ofrece; totalReal += llena;
  const mal = ofrece > llena * (1 + DESFASE) && ofrece > llena;
  if (mal) malos++;
  console.log('  ' + (mal ? '✗ ' : '  ') + (NOMBRES[sigla] || sigla).padEnd(17) +
    String(ofrece).padStart(6) + String(llena).padStart(17) + String(piso).padStart(7) + String(techo).padStart(8) +
    (ofrece === techo ? '   ← el techo recorta' : ofrece === piso && piso > llena ? '   ← lo sostiene el piso' : ''));
}
console.log(`\n  ${totalOferta} tarjetas de simulacro · ${totalReal} formas sin una sola pregunta repetida`);
if (malos) {
  console.error(`\n✗ ${malos} familia(s) ofrecen más del ${Math.round(DESFASE * 100)} % por encima de lo que el banco llena.`);
  console.error('  Se arregla escribiendo preguntas del tier y del DOMINIO que escasea, no subiendo el piso.');
  process.exit(1);
}
console.log(`\n✓ ninguna familia se pasa más del ${Math.round(DESFASE * 100)} % de lo que el banco llena`);

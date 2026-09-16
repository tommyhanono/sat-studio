#!/usr/bin/env node
/**
 * auditar-longitud.js — ¿se puede contestar este set sin leerlo?
 *
 *     node tools/auditar-longitud.js sets/rw-data1.js [...más]
 *     node tools/auditar-longitud.js --todos          # todo el banco vivo, peor primero
 *
 * Mide cuántas veces la respuesta correcta es la opción MÁS LARGA **y cuántas es
 * la MÁS CORTA**. Las dos, porque arreglar solo la primera crea la segunda: si
 * nadie revisa, "nunca marques la más larga" pasa a ser la estrategia ganadora.
 * Al azar cada una debería rondar el 25 %.
 *
 * Muy por encima significa que el estudiante puede acertar midiendo con la vista,
 * y eso hace daño dos veces: le enseña una estrategia que en el examen real no
 * funciona, y le infla el porcentaje que el plan de mejora usa para decidir qué
 * practicar.
 *
 * Los sets de opciones CORTAS se saltan: cuando las cuatro son «4 · 6 · 12 · 18»,
 * "la más larga" es ruido y no una pista. El corte está en 14 caracteres de
 * promedio, que separa limpiamente la matemática numérica de la prosa.
 *
 * Funciona sobre sets que ya están vivos (a diferencia de `validar-set.js`, que
 * es la puerta de entrada y rechaza lo que ya está en el banco).
 *
 * Sale con código 1 si algún archivo pasa del 45 %.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { archivosDeSets, RAIZ } = require('./lib-banco');
const { medir } = require('./lib-largo');   // la misma medida que usa la puerta

const TOPE = 45;   // por encima de esto, el largo delata la respuesta

/* Margen mínimo para que una diferencia CUENTE.
   Sin esto la medida es ciega al margen y miente: un set con la correcta más
   corta por UN carácter (81 contra 82/82/82) salía marcado igual que uno donde
   la correcta mide la mitad que las otras. Nadie ordena cuatro renglones de
   ochenta caracteres por un carácter de diferencia. Se pide la mayor de dos
   cosas: 6 caracteres, o el 10 % del largo de la opción correcta. */
const MARGEN = lc => Math.max(6, Math.round(lc * 0.10));

const args = process.argv.slice(2);
const detalle = args.includes('--detalle');
const archivos = args.includes('--todos')
  ? archivosDeSets(RAIZ)
  : args.filter(a => !a.startsWith('--'));
if (!archivos.length) { console.error('Uso: node tools/auditar-longitud.js sets/archivo.js | --todos [--detalle]'); process.exit(1); }

function leer(rel) {
  const g = { SAT_SETS: [], SAT_DESMOS: {} };
  global.window = g;
  eval(fs.readFileSync(path.isAbsolute(rel) ? rel : path.join(RAIZ, rel), 'utf8'));
  return g.SAT_SETS[0] || null;
}

const filas = [];
for (const rel of archivos) {
  let s;
  try { s = leer(rel); } catch (e) { console.error(`✗ ${rel}: ${e.message}`); continue; }
  if (!s) continue;
  const L = medir(s.questions);
  if (!L.n) continue;
  filas.push({ rel, id: s.id, sec: s.section, larga: L.larga, corta: L.corta, n: L.n,
    pctL: L.pctL, pctC: L.pctC, prosa: L.prosa, promMax: L.promMax, casos: L.casos });
}

const peor = f => Math.max(f.pctL, f.pctC);
filas.sort((a, b) => peor(b) - peor(a));
console.log('¿EL LARGO DELATA LA RESPUESTA?  (al azar ~25 % cada columna, tope ' + TOPE + ' %)');
console.log('Se miden las dos direcciones: arreglar solo "la más larga" crea "la más corta".');
console.log('Solo cuenta si la diferencia SE VE: 6 caracteres, o el 10 % de la opción correcta.');
console.log('Los sets marcados con ~ tienen opciones cortas (números, una palabra, un signo):');
console.log('ahí el largo es ruido y no una pista, así que no se juzgan.\n');
let malos = 0;
console.log('  +larga  -corta   set');
for (const f of filas) {
  const alerta = f.prosa && peor(f) > TOPE;
  if (alerta) malos++;
  const marca = alerta ? '✗' : (f.prosa ? '·' : '~');
  console.log(`${marca} ${String(Math.round(f.pctL)).padStart(5)} % ${String(Math.round(f.pctC)).padStart(6)} %   ` +
    `${f.id} (${f.sec}, ${f.n})${f.prosa ? '' : '  opciones cortas: el largo es ruido'}`);
  if (detalle && f.casos.length) {
    f.casos.forEach(c => console.log(`        ${c.id}: la correcta es la más ${c.tipo} por ${c.ventaja} caracteres`));
  }
}

const prosa = filas.filter(f => f.prosa);
const tL = prosa.reduce((a, f) => a + f.larga, 0);
const tC = prosa.reduce((a, f) => a + f.corta, 0);
const tN = prosa.reduce((a, f) => a + f.n, 0) || 1;
console.log(`\nsolo los de prosa: más larga ${tL}/${tN} (${(100 * tL / tN).toFixed(1)} %) · ` +
  `más corta ${tC}/${tN} (${(100 * tC / tN).toFixed(1)} %)`);
console.log('al azar, cada una debería rondar el 25 %');
if (!malos) { console.log(`✓ ningún set de prosa pasa del ${TOPE} % en ninguna de las dos direcciones`); process.exit(0); }
console.error(`✗ ${malos} set(s) por encima del ${TOPE} %`);
process.exit(1);

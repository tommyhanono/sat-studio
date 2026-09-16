#!/usr/bin/env node
/**
 * test-plano.js — ¿el simulacro se parece al EXAMEN, o se parece al BANCO?
 *
 *     node tools/test-plano.js            # los seis tipos de módulo
 *     node tools/test-plano.js --detalle  # además, cada tier por separado
 *
 * El College Board publica cuánto pesa cada dominio: Algebra 35 %, Advanced 35 %,
 * Problem-Solving 15 %, Geometry 15 % · Craft 28 %, Information 26 %,
 * Conventions 26 %, Expression 20 %. Un simulacro que no respete eso no es un
 * simulacro: es una tanda de práctica con cronómetro.
 *
 * Hasta el 16-sep-2026 `assembleModule` filtraba por DIFICULTAD y barajaba, sin
 * mirar el dominio — así que la mezcla de cada simulacro era la mezcla del
 * banco. Con el banco de 2.620 eso daba Geometría al 20,8 % (1,39x de su peso
 * oficial) y Conventions al 23,3 % (0,90x). Y lo peor no era el desvío: era que
 * dejaba el banco SOLDADO al examen — cada pregunta agregada a una destreza
 * flaca deformaba los simulacros, o sea que el banco no podía crecer donde de
 * verdad hacía falta sin romper otra cosa.
 *
 * Esta prueba mide el código de verdad: saca `assembleModule` de `index.html` y
 * lo corre contra el banco vivo. No hay una segunda copia que se desincronice.
 *
 * Sale con código 1 si algún dominio se desvía más del TOPE de su peso oficial.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { archivosDeSets, RAIZ } = require(path.join(__dirname, 'lib-banco'));

/* Tolerancia relativa. No puede ser cero y no es por descuido: las cuotas se
   reparten sobre 22 y 27 preguntas, así que redondear ya cuesta. Un dominio del
   15 % en un módulo de 22 preguntas es round(3,3) = 3, o sea 13,6 % = 0,91x —
   y no hay forma de hacerlo mejor sin partir una pregunta por la mitad. */
const TOPE = 0.18;
const VUELTAS = 400;

const html = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
function trozo(desde, hasta) {
  const i = html.indexOf(desde);
  const j = html.indexOf(hasta, i);
  if (i < 0 || j < 0) { console.error(`✗ no se encontró "${desde}" en index.html`); process.exit(1); }
  return html.slice(i, j);
}
/* eval INDIRECTO: este archivo es 'use strict' y ahí un eval directo se queda
   con sus `var` en su propio scope. Misma razón que en auditar-destrezas.js. */
const evalGlobal = eval;

const g = { SAT_SETS: [], SAT_DESMOS: {} };
global.window = g;
archivosDeSets(RAIZ).forEach(rel => {
  try { eval(fs.readFileSync(path.join(RAIZ, rel), 'utf8')); }
  catch (e) { console.error(`✗ ${rel}: ${e.message}`); process.exit(1); }
});

evalGlobal(trozo('var PLAN_DOMW', '/* ================= LA TAXONOMÍA'));
/* `mockPool` lee el global `SETS`, que en la app lo llena `indexSets()`. Acá se
   le pasa el banco ya cargado por el mismo camino que usan las demás herramientas. */
globalThis.__SETS__ = g.SAT_SETS;
evalGlobal('var SETS = globalThis.__SETS__;');
evalGlobal(trozo('var _mockPool = {};', '// College Board question order'));

/* Los seis módulos que la app arma de verdad, con su tamaño real. */
const MODULOS = [
  ['math', 'mixed',    22, 'Full Mock · Módulo 1 de matemática'],
  ['rw',   'mixed',    27, 'Full Mock · Módulo 1 de verbal'],
  ['math', 'realhard', 22, 'Realistic Hard · Módulo 2 de matemática'],
  ['rw',   'realhard', 27, 'Realistic Hard · Módulo 2 de verbal'],
  ['math', 'extreme',  22, 'Extreme Mock · matemática'],
  ['rw',   'extreme',  27, 'Extreme Mock · verbal'],
  ['math', 'tough',    22, 'Daily Mini / tough · matemática'],
  ['rw',   'tough',    27, 'Daily Mini / tough · verbal'],
  ['math', 'hard',     22, 'Hard Mock · matemática'],
  ['rw',   'hard',     27, 'Hard Mock · verbal'],
];

const MATH = ['Algebra', 'Advanced Math', 'Problem-Solving & Data Analysis', 'Geometry & Trigonometry'];
const RW = ['Craft and Structure', 'Information and Ideas', 'Standard English Conventions', 'Expression of Ideas'];

console.log('¿EL SIMULACRO RESPETA EL PLANO OFICIAL?');
console.log(`Promedio de ${VUELTAS} módulos armados con el código real de index.html.`);
console.log(`Tope de desvío: ${Math.round(TOPE * 100)} % del peso oficial.\n`);

let malos = 0;
for (const [sec, tier, n, label] of MODULOS) {
  const cuenta = {}, doms = sec === 'math' ? MATH : RW;
  let tot = 0;
  for (let s = 0; s < VUELTAS; s++) {
    // `used` vacío en cada vuelta: cada simulacro numerado arma su módulo desde el pozo entero.
    assembleModule(sec, tier, n, {}, mulberry32(7000 + s)).forEach(q => {
      const d = domPrincipal(q);
      cuenta[d] = (cuenta[d] || 0) + 1; tot++;
    });
  }
  console.log('  ' + label);
  doms.forEach(d => {
    const pct = 100 * (cuenta[d] || 0) / tot, of = PLAN_DOMW[d], x = pct / of;
    const mal = Math.abs(x - 1) > TOPE;
    if (mal) malos++;
    console.log('    ' + (mal ? '✗' : '·') + ' ' + d.padEnd(34) +
      (pct.toFixed(1) + ' %').padStart(7) + '   oficial ' + (of + ' %').padStart(4) + '   ' + x.toFixed(2) + 'x');
  });
  const fuera = Object.keys(cuenta).filter(d => doms.indexOf(d) < 0);
  if (fuera.length) console.log('    ⚠︎ dominios que no son de esta sección: ' + fuera.join(', '));
  console.log('');
}

if (malos) { console.error(`✗ ${malos} dominio(s) fuera del ${Math.round(TOPE * 100)} %`); process.exit(1); }
console.log(`✓ los ${MODULOS.length} tipos de módulo respetan el plano oficial dentro del ${Math.round(TOPE * 100)} %`);

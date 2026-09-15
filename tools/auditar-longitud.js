#!/usr/bin/env node
/**
 * auditar-longitud.js — ¿se puede contestar este set sin leerlo?
 *
 *     node tools/auditar-longitud.js sets/rw-data1.js [...más]
 *     node tools/auditar-longitud.js --todos          # todo el banco vivo, peor primero
 *
 * Mide una sola cosa: cuántas veces la respuesta correcta es la opción MÁS LARGA.
 * Al azar sería ~25 %. Muy por encima significa que el estudiante puede acertar
 * midiendo con la vista — y eso hace daño dos veces: le enseña una estrategia que
 * en el examen real no funciona, y le infla el porcentaje que el plan de mejora
 * usa para decidir qué practicar.
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

const TOPE = 45;   // por encima de esto, el largo delata la respuesta

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
  const mc = (s.questions || []).filter(q => (q.type || 'mc') === 'mc' && q.choices && q.correct);
  if (!mc.length) continue;

  let larga = 0;
  const casos = [];
  mc.forEach(q => {
    const lc = String(q.choices[q.correct]).length;
    const otras = Object.keys(q.choices).filter(k => k !== q.correct).map(k => String(q.choices[k]).length);
    const max = Math.max.apply(null, otras);
    const min = Math.min.apply(null, otras);
    if (lc > max) { larga++; casos.push({ id: q.id, lc, max, min, ventaja: lc - max }); }
  });
  filas.push({ rel, id: s.id, sec: s.section, larga, n: mc.length, pct: 100 * larga / mc.length, casos });
}

filas.sort((a, b) => b.pct - a.pct);
console.log('¿la correcta es la opción MÁS LARGA?  (al azar ~25 %, tope aceptable ' + TOPE + ' %)');
console.log('En matemática el número no significa nada: cuando las cuatro opciones son «4 · 6 · 12 · 18»,');
console.log('«la más larga» es ruido, no una pista. El punto vive en Reading, donde las opciones son prosa.\n');
let malos = 0;
for (const f of filas) {
  const alerta = f.pct > TOPE;
  if (alerta) malos++;
  console.log(`${alerta ? '✗' : '·'} ${String(Math.round(f.pct)).padStart(3)} %  ${String(f.larga + '/' + f.n).padStart(6)}  ${f.id} (${f.sec})`);
  if (detalle && f.casos.length) {
    f.casos.forEach(c => console.log(`        ${c.id}: la correcta mide ${c.lc}, la más larga de las otras ${c.max} (+${c.ventaja})`));
  }
}

const totalL = filas.reduce((a, f) => a + f.larga, 0);
const totalN = filas.reduce((a, f) => a + f.n, 0);
console.log(`\ntotal: ${totalL} de ${totalN} (${(100 * totalL / totalN).toFixed(1)} %)`);
if (!malos) { console.log(`✓ ningún archivo pasa del ${TOPE} %`); process.exit(0); }
console.error(`✗ ${malos} archivo(s) por encima del ${TOPE} %`);
process.exit(1);

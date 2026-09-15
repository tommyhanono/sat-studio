#!/usr/bin/env node
/**
 * test-idioma.js — comprueba que el BANCO está en inglés.
 *
 *     node tools/test-idioma.js
 *
 * El banco se escribió originalmente en español y se tradujo el 14-sep-2026.
 * Esto revisa los 8.928 campos que lee un estudiante en las 786 preguntas:
 * enunciado, pasaje, figura (su aria-label), opciones, explicación de la
 * correcta, explicación de cada incorrecta, tip y pista de Desmos.
 *
 * La INTERFAZ no se revisa aquí. Se revisaba leyendo las cadenas del código
 * fuente y eso no servía: marcaba nombres de variable (banco, hechas, medido)
 * y se le escapaba el texto que se arma concatenando. Ahora la revisa
 * `test-pantallas.js`, que abre la app de verdad y lee lo que se ve.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const RAIZ = path.resolve(__dirname, '..');

const { esEspanol } = require('./detector-espanol');

/* ---------- 1. el banco ---------- */
const g = { SAT_SETS: [], SAT_DESMOS: {} };
global.window = g;
const html = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
const sin = html.replace(/<!--[\s\S]*?-->/g, '');
const archivos = [...sin.matchAll(/<script(?:\s+defer)?\s+src="(sets\/[a-z0-9-]+\.js)">/g)].map(m => m[1]);
if (!archivos.length) { console.error('No se encontró ningún set vivo en index.html.'); process.exit(1); }
for (const rel of archivos) {
  const abs = path.join(RAIZ, rel);
  if (fs.existsSync(abs)) { try { eval(fs.readFileSync(abs, 'utf8')); } catch (e) { console.error(rel + ': ' + e.message); process.exit(1); } }
}

const fallos = [];
let nPreguntas = 0, nCampos = 0;
g.SAT_SETS.forEach(s => {
  [['title', s.title], ['description', s.description]].forEach(([c, v]) => {
    if (!v) return; nCampos++;
    if (esEspanol(v)) fallos.push(`${s.id} · ${c}: ${String(v).slice(0, 70)}`);
  });
  (s.questions || []).forEach(q => {
    nPreguntas++;
    // desmos y figure también los lee el estudiante: `desmos` sale en la pantalla
    // de resultados bajo "📈 In Desmos", y `figure` es un SVG cuyo aria-label es lo
    // único que oye quien usa lector de pantalla. Faltaban en la primera versión y
    // ahí se había quedado escondido el bolsón más grande de español del banco.
    const campos = [['skill', q.skill], ['stem', q.stem], ['passage', q.passage],
      ['expCorrect', q.expCorrect], ['tip', q.tip],
      ['desmos', q.desmos], ['figure', q.figure]];
    Object.entries(q.expWrong || {}).forEach(([k, v]) => campos.push(['expWrong.' + k, v]));
    Object.entries(q.choices || {}).forEach(([k, v]) => campos.push(['choices.' + k, v]));
    campos.forEach(([c, v]) => {
      if (typeof v !== 'string' || !v) return;
      nCampos++;
      if (esEspanol(v)) fallos.push(`${q.id} · ${c}: ${v.slice(0, 70)}`);
    });
  });
});

/* Las pistas de Desmos viven en sets/desmos-*.js y se mezclan en q.desmos al
   arrancar la app, así que hay que mirarlas en su propio archivo. */
Object.keys(g.SAT_DESMOS || {}).forEach(qid => {
  const h = g.SAT_DESMOS[qid];
  const nota = h && h.note;
  if (typeof nota !== 'string' || !nota) return;
  nCampos++;
  if (esEspanol(nota)) fallos.push(`${qid} · desmos.note: ${nota.slice(0, 70)}`);
});

/* ---------- veredicto ---------- */
console.log(`banco      : ${nPreguntas} preguntas · ${nCampos} campos de texto revisados`);
if (!fallos.length) {
  console.log('\nBanco entero en inglés. ✓  (la interfaz la revisa test-pantallas.js)');
  process.exit(0);
}
if (fallos.length) {
  console.error(`\n✗ ${fallos.length} campo(s) del banco siguen en español:`);
  fallos.slice(0, 20).forEach(f => console.error('   ' + f));
  if (fallos.length > 20) console.error(`   …y ${fallos.length - 20} más`);
}
process.exit(1);

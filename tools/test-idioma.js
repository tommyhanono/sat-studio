#!/usr/bin/env node
/**
 * test-idioma.js — comprueba que la app está EN INGLÉS.
 *
 *     node tools/test-idioma.js
 *
 * El banco se escribió originalmente en español y se tradujo el 14-sep-2026.
 * Esto existe para que no vuelva a entrar español sin que nadie se dé cuenta:
 * revisa las 786 preguntas (explicaciones, pistas, opciones, pasajes) y la
 * interfaz de index.html, y sale con código 1 si encuentra algo.
 *
 * Detecta español por ACENTOS (á é í ó ú ñ ¿ ¡) y por palabras funcionales que
 * no existen en inglés. No basta una sola marca: "sale", "no" y "con" también
 * son palabras inglesas, así que se exigen dos señales o un acento en una
 * palabra que no sea un nombre propio conocido.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const RAIZ = path.resolve(__dirname, '..');

/* Nombres propios y términos que llevan acento y son correctos en inglés. */
const PERMITIDOS = /Inés|Ibáñez|Bogotá|café|Perú|México|Nicolás|Ada Rourke|naïve|résumé|Zaha|José|García|Amara|Petrova|\b(?:sin|cos|tan|sec|csc|cot)\s*[²³]?\s*[(\u03b8A-Za-z0-9]|\b(?:sin|cos|tan)\s*[²³]|\bet\s+al\b|SOHCAHTOA/g;

/* Palabras que, en inglés, no existen o no aparecen jamás en este contenido. */
const SOLO_ES = /\b(el|los|las|una|unos|unas|que|para|por|con|del|como|cuando|donde|porque|entre|sobre|desde|hasta|este|esta|cada|puede|tiene|son|pero|así|queda|hacia|aunque|mismo|misma|otro|otra|toda|todos|sin|más|ya|muy|bien|aquí|ahí|solo|también|siempre|nunca|entonces|ese|esa|esos|esas|era|fue|ser|estar|hacer|decir|dice|dijo|tanto|mientras|según|además|luego|antes|después)\b/gi;

function esEspanol(t) {
  const limpio = String(t).replace(PERMITIDOS, '');
  const acento = /[áéíóúñ¿¡]/i.test(limpio);
  const marcas = (limpio.match(SOLO_ES) || []).length;
  return acento || marcas >= 2;
}

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
    const campos = [['skill', q.skill], ['stem', q.stem], ['passage', q.passage],
      ['expCorrect', q.expCorrect], ['tip', q.tip]];
    Object.entries(q.expWrong || {}).forEach(([k, v]) => campos.push(['expWrong.' + k, v]));
    Object.entries(q.choices || {}).forEach(([k, v]) => campos.push(['choices.' + k, v]));
    campos.forEach(([c, v]) => {
      if (typeof v !== 'string' || !v) return;
      nCampos++;
      if (esEspanol(v)) fallos.push(`${q.id} · ${c}: ${v.slice(0, 70)}`);
    });
  });
});

/* ---------- 2. la interfaz ---------- */
const soloJS = html.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
const cadenas = [...soloJS.matchAll(/'((?:[^'\\\n]|\\.)*)'/g)].map(m => m[1])
  .concat([...soloJS.matchAll(/>([^<>{}]{12,})</g)].map(m => m[1].trim()));
const uiFallos = [...new Set(cadenas.filter(t => t.length > 8 && esEspanol(t)))];

/* ---------- veredicto ---------- */
console.log(`banco      : ${nPreguntas} preguntas · ${nCampos} campos de texto revisados`);
console.log(`interfaz   : ${cadenas.length} cadenas revisadas en index.html`);
if (!fallos.length && !uiFallos.length) {
  console.log('\nTodo en inglés. ✓');
  process.exit(0);
}
if (fallos.length) {
  console.error(`\n✗ ${fallos.length} campo(s) del banco siguen en español:`);
  fallos.slice(0, 20).forEach(f => console.error('   ' + f));
  if (fallos.length > 20) console.error(`   …y ${fallos.length - 20} más`);
}
if (uiFallos.length) {
  console.error(`\n✗ ${uiFallos.length} cadena(s) de la interfaz siguen en español:`);
  uiFallos.slice(0, 20).forEach(f => console.error('   ' + f.slice(0, 90)));
}
process.exit(1);

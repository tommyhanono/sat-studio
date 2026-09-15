#!/usr/bin/env node
/**
 * huella-banco.js — imprime la huella estructural del banco.
 *
 *     node tools/huella-banco.js            # md5 + conteos
 *     node tools/huella-banco.js --detalle  # una línea por pregunta
 *
 * Lo que imprime es exactamente lo que NO puede cambiar cuando se edita texto:
 * ids, tipo, respuesta correcta, dominio, dificultad y las claves de opciones y
 * explicaciones. Sirve para comparar antes y después de una tanda de ediciones
 * (traducción, arreglo de redacción) y demostrar que no se movió el contenido.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const RAIZ = path.resolve(__dirname, '..');

const g = { SAT_SETS: [], SAT_DESMOS: {} };
global.window = g;
const html = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8').replace(/<!--[\s\S]*?-->/g, '');
const archivos = [...html.matchAll(/<script(?:\s+defer)?\s+src="(sets\/[a-z0-9-]+\.js)">/g)].map(m => m[1]);
if (!archivos.length) { console.error('No se encontró ningún set vivo en index.html.'); process.exit(1); }
for (const rel of archivos) {
  const abs = path.join(RAIZ, rel);
  if (!fs.existsSync(abs)) { console.error('Falta ' + rel); process.exit(1); }
  try { eval(fs.readFileSync(abs, 'utf8')); }
  catch (e) { console.error('✗ ' + rel + ': ' + e.message); process.exit(1); }
}

const lineas = [];
g.SAT_SETS.forEach(s => (s.questions || []).forEach(q => {
  lineas.push([
    q.id, q.type || 'mc', q.correct || '', q.answer || '',
    q.domain || '', q.difficulty || '',
    Object.keys(q.choices || {}).sort().join(''),
    Object.keys(q.expWrong || {}).sort().join(''),
  ].join('|'));
}));
lineas.sort();

if (process.argv.includes('--detalle')) { lineas.forEach(l => console.log(l)); process.exit(0); }
console.log('sets      : ' + g.SAT_SETS.length);
console.log('preguntas : ' + lineas.length);
console.log('huella    : ' + crypto.createHash('md5').update(lineas.join('\n')).digest('hex'));

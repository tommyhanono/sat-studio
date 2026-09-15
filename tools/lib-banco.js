#!/usr/bin/env node
/**
 * lib-banco.js — de dónde salen los sets vivos, en un solo lugar.
 *
 *     const { archivosDeSets, cargarBanco } = require('./lib-banco');
 *
 * Seis herramientas tenían copiado el mismo regex para sacar la lista de sets de
 * `index.html`. Cuando la app cambió cómo los carga, las seis se rompieron a la
 * vez y una de ellas —`auditar-banco.js`— siguió diciendo "Banco íntegro" sobre
 * cero preguntas. Por eso vive acá y una sola vez.
 *
 * Entiende las dos formas, la vieja y la nueva:
 *   · `<script defer src="sets/x.js"></script>`  (hasta el 15-sep-2026)
 *   · `var SAT_SET_FILES = ['sets/x.js', ...]`   (desde que el banco se carga
 *     después del primer pintado, para que la pantalla de cuenta no espere 1,5 MB)
 *
 * Los comentarios se quitan antes de mirar: hay dos sets retirados a propósito
 * que siguen en disco y no tienen que contar.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const RAIZ = path.resolve(__dirname, '..');

/** Rutas relativas de los sets que la app carga de verdad, en orden. */
function archivosDeSets(raiz) {
  raiz = raiz || RAIZ;
  const html = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8')
    .replace(/<!--[\s\S]*?-->/g, '');

  const out = [];
  const m = html.match(/var\s+SAT_SET_FILES\s*=\s*\[([\s\S]*?)\]\s*;/);
  if (m) {
    // Dentro de la lista hay comentarios `//` que documentan los sets RETIRADOS,
    // y esos comentarios nombran archivos .js. Sin quitarlos se cuelan como vivos.
    const cuerpo = m[1].replace(/^[ \t]*\/\/.*$/gm, '');
    for (const s of cuerpo.matchAll(/'([^']+\.js)'|"([^"]+\.js)"/g)) out.push(s[1] || s[2]);
  }
  // La forma vieja, SOLO si no existe la lista. No se mezclan: los comentarios
  // que documentan los sets retirados conservan el <script> original como texto,
  // y buscarlo en todo el HTML los revivía (rw-set3 y rw-set10 volvieron así).
  if (!out.length) {
    for (const s of html.matchAll(/<script(?:\s+defer)?\s+src="(sets\/[a-z0-9-]+\.js)">/g)) {
      if (!out.includes(s[1])) out.push(s[1]);
    }
  }

  if (!out.length) {
    throw new Error('No se encontró ningún set vivo en index.html. ' +
      'Si cambió cómo se declaran, hay que arreglarlo acá (tools/lib-banco.js), no en cada herramienta.');
  }
  return out;
}

/**
 * Carga el banco igual que el navegador y devuelve { SAT_SETS, SAT_DESMOS }.
 * Falla fuerte si un archivo no existe o no parsea: un banco a medias que no
 * avisa es peor que uno que no carga.
 */
function cargarBanco(raiz) {
  raiz = raiz || RAIZ;
  const g = { SAT_SETS: [], SAT_DESMOS: {} };
  global.window = g;
  for (const rel of archivosDeSets(raiz)) {
    const abs = path.join(raiz, rel);
    if (!fs.existsSync(abs)) throw new Error('Falta ' + rel + ', pero index.html lo carga.');
    try { eval(fs.readFileSync(abs, 'utf8')); }
    catch (e) { throw new Error(rel + ': ' + e.message); }
  }
  return g;
}

module.exports = { archivosDeSets, cargarBanco, RAIZ };

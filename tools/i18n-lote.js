#!/usr/bin/env node
/**
 * i18n-lote.js — saca el siguiente lote a traducir, o mete las traducciones.
 *
 *     node tools/i18n-lote.js sacar  [caracteres]   # imprime el lote como JSON
 *     node tools/i18n-lote.js meter  traducciones.json
 *
 * El formato del lote es {indice: "texto"} y las traducciones vuelven igual,
 * {indice: "text"}. El índice es la posición en `i18n/pendiente.json`, así que
 * no hace falta mandar de vuelta el archivo ni el offset: no se puede
 * desalinear.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const RAIZ = path.resolve(__dirname, '..');
const LISTA = path.join(RAIZ, 'i18n', 'pendiente.json');

const items = JSON.parse(fs.readFileSync(LISTA, 'utf8'));
const modo = process.argv[2];

if (modo === 'sacar') {
  const tope = parseInt(process.argv[3] || '20000', 10);
  const out = {};
  let chars = 0, n = 0;
  for (let i = 0; i < items.length; i++) {
    const it = items[i];
    if (it.hecho || (typeof it.en === 'string' && it.en.length)) continue;
    if (chars && chars + it.es.length > tope) break;
    out[i] = it.es;
    chars += it.es.length; n++;
  }
  process.stdout.write(JSON.stringify(out, null, 1));
  process.stderr.write(`\n[lote: ${n} textos · ${chars} caracteres · quedan ${items.filter(x => !x.hecho && !x.en).length - n}]\n`);
  process.exit(0);
}

if (modo === 'meter') {
  const f = process.argv[3];
  if (!f || !fs.existsSync(f)) { console.error('Falta el archivo de traducciones.'); process.exit(1); }
  const tr = JSON.parse(fs.readFileSync(f, 'utf8'));
  let n = 0, malos = [];
  for (const k of Object.keys(tr)) {
    const i = parseInt(k, 10);
    if (!items[i]) { malos.push(k + ': índice fuera de rango'); continue; }
    const en = tr[k];
    if (typeof en !== 'string' || !en.length) { malos.push(k + ': traducción vacía'); continue; }
    // Una comilla simple sin escapar rompe la cadena del archivo destino.
    // Ni ' ni " sin escapar: los archivos de sets usan las dos formas de comilla,
    // así que una comilla recta puede cerrar la cadena destino y romper el archivo.
    const sueltas = (en.match(/(^|[^\\])'/g) || []).length;
    if (sueltas) { malos.push(k + ': comilla simple sin escapar (usa \u2019)'); continue; }
    const dobles = (en.match(/(^|[^\\])"/g) || []).length;
    if (dobles) { malos.push(k + ': comilla doble sin escapar (usa \u201c \u201d o \\")'); continue; }
    items[i].en = en; n++;
  }
  fs.writeFileSync(LISTA, JSON.stringify(items, null, 1));
  console.log(`metidas ${n} traducción(es)`);
  if (malos.length) { console.error('RECHAZADAS (' + malos.length + '):'); malos.slice(0, 10).forEach(m => console.error('  ' + m)); process.exit(1); }
  process.exit(0);
}

const pend = items.filter(x => !x.hecho && !x.en);
console.log(`total ${items.length} · traducidos ${items.length - pend.length} · pendientes ${pend.length}`);
console.log(`caracteres pendientes: ${Math.round(pend.reduce((a, b) => a + b.es.length, 0) / 1000)}k`);

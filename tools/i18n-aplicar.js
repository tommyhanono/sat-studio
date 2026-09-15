#!/usr/bin/env node
/**
 * i18n-aplicar.js — devuelve las traducciones a los archivos, por posición exacta.
 *
 *     node tools/i18n-aplicar.js [entrada.json]
 *
 * Solo toca los rangos [ini, fin) que anotó `i18n-extraer.js`. Antes de escribir
 * nada compara la estructura del banco ANTES y DESPUÉS: mismos ids, mismas
 * respuestas correctas, mismas opciones, mismo dominio y misma dificultad. Si
 * algo de eso se movió un milímetro, no escribe y se queja.
 *
 * Es deliberado que no sepa traducir: traducir es el trabajo del modelo, y esto
 * es la parte que no puede equivocarse.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const RAIZ = path.resolve(__dirname, '..');
const ENTRADA = process.argv[2] || path.join(RAIZ, 'i18n', 'pendiente.json');

/** Carga el banco completo evaluando los sets, igual que hace el navegador. */
function leerBanco() {
  const g = { SAT_SETS: [], SAT_DESMOS: {} };
  global.window = g;
  const html = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
  const sin = html.replace(/<!--[\s\S]*?-->/g, '');
  const archivos = [...sin.matchAll(/<script(?:\s+defer)?\s+src="(sets\/[a-z0-9-]+\.js)">/g)].map(m => m[1]);
  for (const rel of archivos) {
    const abs = path.join(RAIZ, rel);
    if (!fs.existsSync(abs)) continue;
    try { eval(fs.readFileSync(abs, 'utf8')); } catch (e) { throw new Error(rel + ': ' + e.message); }
  }
  return g.SAT_SETS;
}

/** Huella de lo que NO puede cambiar al traducir. */
function huella(sets) {
  const out = [];
  sets.forEach(s => (s.questions || []).forEach(q => {
    out.push([
      q.id, q.type || 'mc', q.correct || '', q.answer || '',
      q.domain || '', q.difficulty || '',
      Object.keys(q.choices || {}).sort().join(''),
      Object.keys(q.expWrong || {}).sort().join(''),
    ].join('|'));
  }));
  return out.sort();
}

const items = JSON.parse(fs.readFileSync(ENTRADA, 'utf8'));
// `hecho` = ya escrito en el archivo en una corrida anterior. Sin este filtro se
// intentaría traducir de nuevo un texto que ya está en inglés.
const listos = items.filter(i => !i.hecho && typeof i.en === 'string' && i.en.length);
if (!listos.length) { console.log('No hay nada traducido todavía en ' + ENTRADA); process.exit(0); }

// --- estructura ANTES ---
const antes = huella(leerBanco());

// --- respaldo en memoria, por si hay que revertir ---
const porArchivo = {};
listos.forEach(i => (porArchivo[i.archivo] = porArchivo[i.archivo] || []).push(i));
const original = {};
Object.keys(porArchivo).forEach(f => { original[f] = fs.readFileSync(path.join(RAIZ, f), 'utf8'); });

let escritos = 0, aplicados = 0;
for (const f of Object.keys(porArchivo)) {
  let src = original[f];
  // de atrás hacia adelante: así los offsets de los de más arriba siguen valiendo
  const lista = porArchivo[f].slice().sort((a, b) => b.ini - a.ini);
  for (const it of lista) {
    let ini = it.ini, fin = it.fin;
    if (src.slice(ini, fin) !== it.es) {
      // El offset se corrió porque otra traducción del mismo archivo entró antes.
      // Se busca el texto tal cual: si aparece UNA sola vez, no hay ambigüedad.
      // Todas las apariciones, y se elige la MÁS CERCANA al offset original.
      // Hay textos idénticos repetidos en un mismo archivo (la misma pista en dos
      // preguntas), así que "que aparezca una sola vez" no alcanza como criterio.
      const posiciones = [];
      for (let k = src.indexOf(it.es); k >= 0; k = src.indexOf(it.es, k + 1)) posiciones.push(k);
      if (!posiciones.length) {
        console.error(`\n✗ ${f} · ${it.qid} · ${it.campo}`);
        console.error('  Ese texto ya no está en el archivo (¿se tradujo dos veces?).');
        console.error('  esperaba: ' + JSON.stringify(it.es.slice(0, 70)));
        process.exit(1);
      }
      posiciones.sort((a, b) => Math.abs(a - it.ini) - Math.abs(b - it.ini));
      ini = posiciones[0]; fin = ini + it.es.length;
    }
    src = src.slice(0, ini) + it.en + src.slice(fin);
    aplicados++;
  }
  fs.writeFileSync(path.join(RAIZ, f), src);
  escritos++;
}

// --- estructura DESPUÉS ---
let despues;
try { despues = huella(leerBanco()); }
catch (e) {
  Object.keys(original).forEach(f => fs.writeFileSync(path.join(RAIZ, f), original[f]));
  console.error('\n✗ Un archivo quedó roto al aplicar: ' + e.message);
  console.error('  Se revirtió todo. No se cambió nada.');
  process.exit(1);
}

if (antes.length !== despues.length || antes.some((v, i) => v !== despues[i])) {
  Object.keys(original).forEach(f => fs.writeFileSync(path.join(RAIZ, f), original[f]));
  const rotas = despues.filter((v, i) => v !== antes[i]).slice(0, 5);
  console.error('\n✗ La estructura del banco cambió (ids, respuestas, opciones, dominio o dificultad).');
  console.error('  Se revirtió todo. Primeras diferencias:');
  rotas.forEach(r => console.error('   ' + r));
  process.exit(1);
}

// marca lo aplicado para no repetirlo
items.forEach(i => { if (typeof i.en === 'string' && i.en.length) i.hecho = true; });
fs.writeFileSync(ENTRADA, JSON.stringify(items, null, 1));

console.log(`aplicadas   : ${aplicados} traducciones en ${escritos} archivo(s)`);
console.log(`estructura  : intacta (${antes.length} preguntas, mismos ids, respuestas y opciones)`);
console.log(`pendientes  : ${items.filter(i => !i.hecho).length}`);

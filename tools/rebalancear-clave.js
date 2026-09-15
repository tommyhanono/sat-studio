#!/usr/bin/env node
/**
 * rebalancear-clave.js — reparte las respuestas correctas entre A, B, C y D.
 *
 *     node tools/rebalancear-clave.js sets/math-brutal-adv1.js
 *     node tools/rebalancear-clave.js --ver sets/*.js        # solo mira, no toca
 *
 * Existe porque un set generado de una sentada tiende a poner la correcta
 * siempre en la misma letra: el primero que se escribió así tenía las nueve
 * en la A. Eso no es un detalle estético — un estudiante que practica con ese
 * set aprende a marcar A, que es exactamente lo contrario de lo que queremos.
 *
 * Lo que hace es un RENOMBRADO de letras dentro de cada pregunta: intercambia el
 * texto de dos opciones y sus explicaciones, y mueve `correct` con ellas. La
 * pregunta no cambia; cambia dónde está la respuesta.
 *
 * Después de escribir, vuelve a cargar el archivo y COMPRUEBA que:
 *   · el conjunto de textos de las opciones es el mismo de antes,
 *   · el conjunto de textos de expWrong es el mismo de antes,
 *   · `choices[correct]` sigue siendo la MISMA cadena que era la correcta.
 * Si algo de eso falla, revierte el archivo y sale con código 1.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const VER = process.argv.includes('--ver');
const archivos = process.argv.slice(2).filter(a => a !== '--ver');
if (!archivos.length) { console.error('Uso: node tools/rebalancear-clave.js [--ver] sets/archivo.js [...]'); process.exit(1); }

const LETRAS = ['A', 'B', 'C', 'D'];

function cargar(src) {
  const g = { SAT_SETS: [], SAT_DESMOS: {} };
  global.window = g;
  eval(src);
  return g.SAT_SETS[0];
}

/** Del `{` de apertura al `}` que lo cierra, respetando comillas y escapes. */
function cierre(src, abre) {
  let prof = 0, comilla = null;
  for (let i = abre; i < src.length; i++) {
    const c = src[i];
    if (comilla) {
      if (c === '\\') { i++; continue; }
      if (c === comilla) comilla = null;
      continue;
    }
    if (c === "'" || c === '"' || c === '`') { comilla = c; continue; }
    if (c === '{') prof++;
    else if (c === '}') { prof--; if (!prof) return i; }
  }
  return -1;
}

/** Bloque [ini, fin) de la pregunta cuyo id es `id`. */
function bloquePregunta(src, id) {
  const marca = src.indexOf("id:'" + id + "'");
  if (marca < 0) return null;
  const abre = src.lastIndexOf('{', marca);
  const fin = cierre(src, abre);
  return fin < 0 ? null : { ini: abre, fin: fin + 1 };
}

/** Reescribe un objeto literal `campo:{...}` con nuevas claves y textos. */
function reescribirObjeto(bloque, campo, pares, sangria) {
  const marca = bloque.indexOf(campo + ':');
  if (marca < 0) return null;
  const abre = bloque.indexOf('{', marca);
  const fin = cierre(bloque, abre);
  if (abre < 0 || fin < 0) return null;
  const cuerpo = pares.map(([k, v]) => `\n${sangria}  ${k}:${JSON.stringify(v).replace(/^"|"$/g, "'").replace(/\\"/g, '"')}`).join(',');
  return { ini: abre, fin: fin + 1, texto: '{' + cuerpo + '\n' + sangria + '}' };
}

let cambiados = 0, fallos = 0;

for (const rel of archivos) {
  const abs = path.isAbsolute(rel) ? rel : path.resolve(__dirname, '..', rel);
  if (!fs.existsSync(abs)) { console.error(`✗ ${rel}: no existe`); fallos++; continue; }
  const original = fs.readFileSync(abs, 'utf8');
  let set;
  try { set = cargar(original); } catch (e) { console.error(`✗ ${rel}: ${e.message}`); fallos++; continue; }
  if (!set) { console.error(`✗ ${rel}: no empuja ningún set`); fallos++; continue; }

  const mc = (set.questions || []).filter(q => (q.type || 'mc') === 'mc');
  const antes = {};
  mc.forEach(q => { antes[q.correct] = (antes[q.correct] || 0) + 1; });
  const reparto = l => (antes[l] || 0);
  console.log(`\n── ${rel}  ${mc.length} MC · ` + LETRAS.map(l => `${l}:${reparto(l)}`).join(' '));

  if (mc.length < 4) { console.log('   muy pocas MC para repartir; se deja como está'); continue; }
  const tope = Math.ceil(mc.length * 0.45);
  const distintas = LETRAS.filter(l => antes[l]).length;
  const desbalanceado = LETRAS.some(l => (antes[l] || 0) > tope) || distintas < 3;
  if (!desbalanceado) { console.log('   ya está repartido'); continue; }
  if (VER) { console.log('   DESBALANCEADO (solo se está mirando)'); cambiados++; continue; }

  // Destino: A,B,C,D,A,B,C,D… en el orden en que aparecen las preguntas. Es
  // determinista a propósito: correrlo dos veces da el mismo archivo.
  let src = original, i = 0, movidas = 0;
  // de atrás hacia adelante, para que los offsets de arriba sigan valiendo
  const orden = mc.map((q, idx) => ({ q, destino: LETRAS[idx % 4] })).reverse();
  for (const { q, destino } of orden) {
    if (q.correct === destino) continue;
    const bl = bloquePregunta(src, q.id);
    if (!bl) { console.error(`   ✗ no encontré el bloque de ${q.id}`); fallos++; src = original; break; }
    let bloque = src.slice(bl.ini, bl.fin);
    const sangria = (bloque.match(/\n(\s*)id:/) || [, '        '])[1];

    // intercambio simple: la correcta y la que ocupa el destino cambian de lugar
    const desde = q.correct;
    const mapa = l => (l === desde ? destino : l === destino ? desde : l);
    const choices = LETRAS.map(l => [l, q.choices[mapa(l)]]);
    const malas = LETRAS.filter(l => l !== destino);
    const expW = malas.map(l => [l, q.expWrong[mapa(l)]]);

    const rc = reescribirObjeto(bloque, 'choices', choices, sangria);
    const re = reescribirObjeto(bloque, 'expWrong', expW, sangria);
    if (!rc || !re) { console.error(`   ✗ no pude reescribir ${q.id}`); fallos++; src = original; break; }
    // de atrás hacia adelante dentro del bloque
    const partes = [rc, re].sort((a, b) => b.ini - a.ini);
    for (const p of partes) bloque = bloque.slice(0, p.ini) + p.texto + bloque.slice(p.fin);
    bloque = bloque.replace(new RegExp("correct:'" + desde + "'"), "correct:'" + destino + "'");

    src = src.slice(0, bl.ini) + bloque + src.slice(bl.fin);
    movidas++;
    i++;
  }
  if (src === original) { console.log('   sin cambios'); continue; }

  fs.writeFileSync(abs, src);

  // --- comprobación: esto tiene que ser un RENOMBRADO, nada más ---
  let despues;
  try { despues = cargar(fs.readFileSync(abs, 'utf8')); }
  catch (e) { fs.writeFileSync(abs, original); console.error(`   ✗ quedó roto (${e.message}); revertido`); fallos++; continue; }

  const conj = o => Object.values(o || {}).slice().sort().join('␟');
  let ok = despues.questions.length === set.questions.length;
  for (let k = 0; ok && k < set.questions.length; k++) {
    const a = set.questions[k], b = despues.questions[k];
    if (a.id !== b.id) { ok = false; break; }
    if ((a.type || 'mc') !== 'mc') continue;
    if (conj(a.choices) !== conj(b.choices)) { ok = false; break; }
    if (conj(a.expWrong) !== conj(b.expWrong)) { ok = false; break; }
    if (a.choices[a.correct] !== b.choices[b.correct]) { ok = false; break; }
    if (Object.keys(b.choices || {}).sort().join('') !== 'ABCD') { ok = false; break; }
    if (Object.keys(b.expWrong || {}).sort().join('') !== LETRAS.filter(l => l !== b.correct).join('')) { ok = false; break; }
  }
  if (!ok) {
    fs.writeFileSync(abs, original);
    console.error('   ✗ la comprobación falló: el contenido cambió, no solo la letra. Revertido.');
    fallos++; continue;
  }

  const ahora = {};
  despues.questions.filter(q => (q.type || 'mc') === 'mc').forEach(q => { ahora[q.correct] = (ahora[q.correct] || 0) + 1; });
  console.log(`   ✓ ${movidas} pregunta(s) movidas · ahora ` + LETRAS.map(l => `${l}:${ahora[l] || 0}`).join(' '));
  cambiados++;
}

console.log('');
if (fallos) { console.error(`✗ ${fallos} archivo(s) con problemas`); process.exit(1); }
console.log(VER ? `${cambiados} archivo(s) desbalanceado(s)` : `${cambiados} archivo(s) rebalanceado(s)`);
process.exit(0);

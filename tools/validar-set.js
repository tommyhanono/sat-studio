#!/usr/bin/env node
/**
 * validar-set.js — revisa un archivo de set NUEVO antes de enchufarlo a la app.
 *
 *     node tools/validar-set.js sets/math-brutal-alg.js [...más archivos]
 *
 * `auditar-banco.js` audita el banco entero una vez que ya está cargado. Esto es
 * la puerta de entrada: se corre sobre un archivo que todavía NO está en
 * index.html, para que nada roto llegue a estar vivo ni un commit.
 *
 * Revisa, por cada archivo:
 *   · que sea JavaScript válido y empuje exactamente un set
 *   · que el set traiga id, title, section, level, description, minutes
 *   · que el id del set y TODOS los ids de pregunta sean nuevos (no choquen con
 *     el banco vivo ni entre sí)
 *   · que cada pregunta tenga los campos que la app usa para pintarla
 *   · MC: 4 opciones A–D, `correct` dentro de ellas, y una explicación para cada
 *     una de las tres incorrectas — ni de más ni de menos
 *   · SPR: `answer` presente y sin opciones
 *   · que `domain` sea uno de los ocho oficiales y `difficulty` una de las cuatro
 *     claves internas
 *   · que no haya enunciados repetidos dentro del archivo ni contra el banco
 *   · que todo el texto que lee el estudiante esté en inglés
 *   · matemática: que traiga pista de Desmos (es lo que le faltaba al 14 % del
 *     banco viejo, y un set nuevo no tiene por qué nacer con esa deuda)
 *
 * Sale con código 1 si algo falla.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { esEspanol } = require('./detector-espanol');
const { cargarBanco } = require('./lib-banco');

const RAIZ = path.resolve(__dirname, '..');
/* Los ocho oficiales. El banco además usa dominios CRUZADOS ("Algebra + Functions",
   "Advanced Math + Data") para preguntas que tocan dos: el auditor las cuenta en
   los dos lados a propósito. Un set nuevo debería usar uno de los ocho, así que
   los cruzados pasan pero con aviso. */
const DOMINIOS = new Set([
  'Algebra', 'Advanced Math', 'Problem-Solving & Data Analysis', 'Geometry & Trigonometry',
  'Craft and Structure', 'Information and Ideas', 'Standard English Conventions', 'Expression of Ideas',
]);
const CRUZADO = /^(Algebra|Advanced Math|Problem-Solving & Data Analysis|Geometry & Trigonometry|Functions|Data)( \+ (Algebra|Advanced Math|Problem-Solving|Functions|Data))+$/;
/* En una PREGUNTA la dificultad son tres, y el tier brutal se marca aparte con
   extreme:true. El motor entero (hrank, cbDiff, assembleModule, weightOf,
   LVLORD) compara contra esas tres cadenas: un difficulty:'Extreme' cae al
   rango 0 y el mock adaptativo lo manda al módulo FÁCIL. En el SET, en
   cambio, level:'Extreme' sí es válido: es la etiqueta que se muestra. */
const DIF_PREGUNTA = new Set(['Fácil', 'Media', 'Difícil']);
const DIF_SET = new Set(['Fácil', 'Media', 'Difícil', 'Extreme']);
const SECCIONES = new Set(['math', 'rw', 'mixed']);

const archivos = process.argv.slice(2);
if (!archivos.length) { console.error('Uso: node tools/validar-set.js sets/archivo.js [...]'); process.exit(1); }

/* ---------- el banco que ya está vivo, para detectar choques ---------- */
function bancoVivo() {
  const g = cargarBanco(RAIZ);
  const ids = new Set(), setIds = new Set(), enunciados = new Map();
  g.SAT_SETS.forEach(s => {
    setIds.add(s.id);
    (s.questions || []).forEach(q => {
      ids.add(q.id);
      const k = norm(q.stem) + '|' + norm(q.passage || '');
      if (!enunciados.has(k)) enunciados.set(k, s.id + '/' + q.id);
    });
  });
  return { ids, setIds, enunciados };
}
const norm = t => String(t || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();

const VIVO = bancoVivo();
let errores = 0, avisos = 0, totalQ = 0;
const err = (f, m) => { console.error(`  ✗ ${f}: ${m}`); errores++; };
const avi = (f, m) => { console.warn(`  ⚠︎ ${f}: ${m}`); avisos++; };

for (const rel of archivos) {
  const abs = path.isAbsolute(rel) ? rel : path.join(RAIZ, rel);
  console.log(`\n── ${rel}`);
  if (!fs.existsSync(abs)) { err(rel, 'no existe'); continue; }

  const g = { SAT_SETS: [], SAT_DESMOS: {} };
  global.window = g;
  try { eval(fs.readFileSync(abs, 'utf8')); }
  catch (e) { err(rel, 'no es JavaScript válido → ' + e.message); continue; }

  if (g.SAT_SETS.length !== 1) { err(rel, `empuja ${g.SAT_SETS.length} sets; tiene que empujar exactamente 1`); continue; }
  const s = g.SAT_SETS[0];

  ['id', 'title', 'section', 'level', 'description', 'minutes'].forEach(c => {
    if (s[c] === undefined || s[c] === '') err(rel, `al set le falta "${c}"`);
  });
  if (!SECCIONES.has(s.section)) err(rel, `section "${s.section}" no es math/rw/mixed`);
  if (s.level && !DIF_SET.has(s.level)) err(rel, `level "${s.level}" no es una de las cuatro claves internas`);
  if (VIVO.setIds.has(s.id)) err(rel, `el id de set "${s.id}" ya existe en el banco`);
  if (typeof s.minutes !== 'number' || s.minutes <= 0) err(rel, 'minutes tiene que ser un número mayor que cero');

  const qs = s.questions || [];
  if (!qs.length) { err(rel, 'el set no trae preguntas'); continue; }

  const vistosAqui = new Set(), enunciadosAqui = new Map();
  qs.forEach((q, i) => {
    totalQ++;
    const d = `${s.id}/${q.id || '#' + i}`;

    if (!q.id) return err(rel, `pregunta ${i} sin id`);
    if (vistosAqui.has(q.id)) err(rel, `${d}: id repetido dentro del archivo`);
    vistosAqui.add(q.id);
    if (VIVO.ids.has(q.id)) err(rel, `${d}: ese id ya existe en el banco vivo`);

    if (!DOMINIOS.has(q.domain)) {
      if (CRUZADO.test(q.domain || '')) avi(rel, `${d}: domain cruzado "${q.domain}"; en un set nuevo conviene uno de los ocho oficiales`);
      else err(rel, `${d}: domain "${q.domain}" no es uno de los ocho oficiales`);
    }
    if (!DIF_PREGUNTA.has(q.difficulty)) {
      if (q.difficulty === 'Extreme') err(rel, `${d}: en una pregunta el tier brutal va como difficulty:'Difícil' + extreme:true. Con difficulty:'Extreme' el mock adaptativo la manda al módulo FÁCIL.`);
      else err(rel, `${d}: difficulty "${q.difficulty}" no es Fácil/Media/Difícil`);
    }
    ['skill', 'stem', 'expCorrect', 'tip'].forEach(c => {
      if (typeof q[c] !== 'string' || !q[c].trim()) err(rel, `${d}: le falta "${c}"`);
    });

    const tipo = q.type || 'mc';
    if (tipo === 'mc') {
      const ks = Object.keys(q.choices || {}).sort();
      if (ks.join('') !== 'ABCD') err(rel, `${d}: las opciones tienen que ser A, B, C y D (trae ${ks.join('') || 'ninguna'})`);
      ks.forEach(k => { if (typeof q.choices[k] !== 'string' || !q.choices[k].trim()) err(rel, `${d}: la opción ${k} está vacía`); });
      if (!q.correct) err(rel, `${d}: MC sin "correct"`);
      else if (!q.choices || q.choices[q.correct] === undefined) err(rel, `${d}: correct "${q.correct}" no está entre las opciones`);
      const malas = ks.filter(k => k !== q.correct);
      const exp = Object.keys(q.expWrong || {}).sort();
      if (exp.join('') !== malas.join('')) {
        err(rel, `${d}: expWrong tiene que explicar exactamente las incorrectas ${malas.join(',')} (trae ${exp.join(',') || 'ninguna'})`);
      }
      exp.forEach(k => { if (typeof q.expWrong[k] !== 'string' || !q.expWrong[k].trim()) err(rel, `${d}: expWrong.${k} vacía`); });
      if (q.answer) avi(rel, `${d}: es MC pero trae "answer"; se ignora`);
    } else if (tipo === 'spr') {
      if (q.answer === undefined || q.answer === '') err(rel, `${d}: SPR sin "answer"`);
      if (q.choices) err(rel, `${d}: SPR con opciones; una grid-in no las lleva`);
      if (q.correct) avi(rel, `${d}: SPR con "correct"; se ignora`);
    } else {
      err(rel, `${d}: type "${tipo}" desconocido (usa mc o spr)`);
    }

    // enunciado repetido
    const k = norm(q.stem) + '|' + norm(q.passage || '');
    if (enunciadosAqui.has(k)) err(rel, `${d}: mismo enunciado y pasaje que ${enunciadosAqui.get(k)}`);
    else enunciadosAqui.set(k, q.id);
    if (VIVO.enunciados.has(k)) err(rel, `${d}: repite el enunciado de ${VIVO.enunciados.get(k)}, que ya está en el banco`);

    // inglés
    const campos = [['skill', q.skill], ['stem', q.stem], ['passage', q.passage],
      ['expCorrect', q.expCorrect], ['tip', q.tip], ['desmos', q.desmos], ['figure', q.figure]];
    Object.entries(q.expWrong || {}).forEach(([kk, v]) => campos.push(['expWrong.' + kk, v]));
    Object.entries(q.choices || {}).forEach(([kk, v]) => campos.push(['choices.' + kk, v]));
    campos.forEach(([c, v]) => {
      if (typeof v === 'string' && v && esEspanol(v)) err(rel, `${d}: ${c} parece estar en español → ${v.slice(0, 60)}`);
    });

    // matemática sin pista de calculadora: se avisa, no se bloquea (hay preguntas
    // donde Desmos no aporta nada, como las de geometría de papel y lápiz)
    if (s.section === 'math' && !q.desmos) avi(rel, `${d}: sin pista de Desmos`);
  });

  [['title', s.title], ['description', s.description]].forEach(([c, v]) => {
    if (typeof v === 'string' && v && esEspanol(v)) err(rel, `el ${c} del set parece estar en español → ${v.slice(0, 60)}`);
  });

  /* Reparto de la clave. Un set escrito de una sentada tiende a poner la correcta
     siempre en la misma letra —el primero generado así tenía las nueve en la A—,
     y con eso el estudiante aprende a marcar A. Se arregla con
     `node tools/rebalancear-clave.js <archivo>`, que solo renombra letras. */
  const mcQs = qs.filter(q => (q.type || 'mc') === 'mc');
  if (mcQs.length >= 8) {
    const cuenta = {};
    mcQs.forEach(q => { cuenta[q.correct] = (cuenta[q.correct] || 0) + 1; });
    const tope = Math.ceil(mcQs.length * 0.45);
    const peor = Object.entries(cuenta).sort((a, b) => b[1] - a[1])[0];
    const distintas = Object.keys(cuenta).length;
    if (peor && peor[1] > tope) {
      err(rel, `la clave está desbalanceada: ${peor[1]} de ${mcQs.length} respuestas son "${peor[0]}" (tope ${tope}). Corré: node tools/rebalancear-clave.js ${rel}`);
    } else if (distintas < 3) {
      err(rel, `la clave usa solo ${distintas} letra(s) distinta(s). Corré: node tools/rebalancear-clave.js ${rel}`);
    }
  }

  const mc = mcQs.length;
  const spr = qs.length - mc;
  const dif = {};
  qs.forEach(q => { dif[q.difficulty] = (dif[q.difficulty] || 0) + 1; });
  console.log(`  ${qs.length} preguntas · ${mc} MC · ${spr} SPR · ` +
    Object.entries(dif).map(([k, v]) => `${k} ${v}`).join(' · '));
}

console.log('');
if (!errores) {
  console.log(`✓ ${archivos.length} archivo(s) · ${totalQ} preguntas listas para enchufar` +
    (avisos ? ` (${avisos} aviso(s))` : ''));
  process.exit(0);
}
console.error(`✗ ${errores} error(es)` + (avisos ? ` y ${avisos} aviso(s)` : '') + '. No enchufar así.');
process.exit(1);

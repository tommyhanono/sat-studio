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
const { medir: medirLargo } = require('./lib-largo');


const RAIZ = path.resolve(__dirname, '..');
/* ---------- la destreza oficial en la que cae cada pregunta ----------
   Un set puede pasar todas las puertas de arriba y quedar MAL CLASIFICADO en
   silencio. `skillOf()` decide mirando el campo `skill` más los primeros 160
   caracteres del enunciado, y gana el PRIMER matcher del dominio, no el más
   específico: escribir "Inferences (date the evidence to…)" manda la pregunta a
   *Command of Evidence*, no a *Inferences*.
   Eso no rompe nada visible — rompe los números que el estudiante ve en la
   pestaña de temas y lo que el plan de mejora le recomienda practicar. Por eso
   se reporta acá, en la puerta, y no cuando alguien lo note meses después. */
const _html = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
const _trozo = (a, b) => { const i = _html.indexOf(a), j = _html.indexOf(b, i); return _html.slice(i, j); };
const _evalGlobal = eval;   // indirecto: este archivo es 'use strict'
_evalGlobal(_trozo('var SAT_SKILLS', 'function skillByKey'));
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
/* Todo este texto se inyecta con innerHTML. Un `<` seguido de letra abre una
   etiqueta: si no es una de estas, el navegador se come el texto hasta el `>`
   sin decir nada. `y < 2x` es seguro porque el `<` va seguido de espacio. */
const ETIQUETAS_OK = new Set([
  'b', 'i', 'em', 'strong', 'br', 'ul', 'ol', 'li', 'p', 'span', 'div', 'sub', 'sup',
  'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption', 'code', 'small', 'u', 'a',
  'svg', 'polygon', 'polyline', 'line', 'text', 'circle', 'ellipse', 'rect', 'path', 'g',
  'tspan', 'defs', 'marker', 'title', 'desc', 'use',
]);

const archivos = process.argv.slice(2);
if (!archivos.length) { console.error('Uso: node tools/validar-set.js sets/archivo.js [...]'); process.exit(1); }

/* ---------- el banco que ya está vivo, para detectar choques ---------- */
function bancoVivo(excluir) {
  // se excluyen los archivos que se están validando: si uno ya está enchufado,
  // compararlo contra el banco lo hace chocar CONSIGO MISMO
  const g = cargarBanco(RAIZ, excluir);
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

const VIVO = bancoVivo(archivos);
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

      /* Dos opciones con el MISMO texto hacen la pregunta imposible: el estudiante
         que razona bien puede marcar la que no está en `correct`. */
      const textos = ks.map(k => String(q.choices[k] || '').trim());
      const repes = textos.filter((t, i) => t && textos.indexOf(t) !== i);
      if (repes.length) err(rel, `${d}: hay opciones con el mismo texto (${repes[0].slice(0, 40)})`);

      /* Si la correcta es SIEMPRE la más larga, se contesta sin leer la pregunta.
         Se avisa por pregunta solo cuando saca mucha ventaja; el patrón de todo el
         set se mira abajo. */
      const largoCorrecta = String(q.choices[q.correct] || '').length;
      const largoOtras = malas.map(k => String(q.choices[k] || '').length);
      if (largoOtras.length && largoCorrecta > Math.max.apply(null, largoOtras) * 1.8 && largoCorrecta > 25) {
        avi(rel, `${d}: la correcta es bastante más larga que las tres incorrectas; se adivina por la forma`);
      }
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
      if (typeof v !== 'string' || !v) return;
      if (esEspanol(v)) err(rel, `${d}: ${c} parece estar en español → ${v.slice(0, 60)}`);
      for (const m of v.matchAll(/<([a-zA-Z][a-zA-Z0-9]*)/g)) {
        if (!ETIQUETAS_OK.has(m[1].toLowerCase())) {
          err(rel, `${d}: ${c} tiene "<${m[1]}", que el navegador va a leer como una etiqueta y se va a comer el texto. ` +
            `Si es un menor-que, escribí "&lt;" o dejá un espacio después.`);
        }
      }
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

  /* Y el patrón del set entero: si la correcta se distingue por el largo, el set
     se puede contestar midiendo con la vista.
     La medida vive en `lib-largo.js`, compartida con `auditar-longitud.js`:
     antes cada una contaba distinto y el mismo set salía "28 de 34" en una y
     "3 %" en la otra. El tope acá es más bajo (35 % contra 45 %) porque esto es
     la PUERTA: lo que no entra no hay que arreglarlo después. */
  const L = medirLargo(mcQs);
  if (L.prosa && L.n >= 8) {
    if (L.pctL > 35) {
      err(rel, `la correcta es visiblemente la más LARGA en ${L.larga} de ${L.n} ` +
        `(${L.pctL.toFixed(0)} %): el set se contesta sin leerlo`);
    }
    if (L.pctC > 35) {
      err(rel, `la correcta es visiblemente la más CORTA en ${L.corta} de ${L.n} ` +
        `(${L.pctC.toFixed(0)} %): "nunca marques la más larga" lo resuelve`);
    }
  }

  /* La palabra pegada al blanco, repetida dentro de la opción.
     Si el pasaje dice "…Kumasi, Ghana %BLANK% the dam…" y una opción es
     "Ghana; the", el estudiante lee "Kumasi, Ghana Ghana; the". No lo atrapaba
     nada: el JavaScript es válido, los conteos cuadran, la respuesta es correcta
     — solo está impresa dos veces. Lo encontró un agente imprimiendo cada pasaje
     con su respuesta sustituida, que es algo que ninguna herramienta hacía. */
  const pegadas = [];
  qs.forEach(q => {
    const pas = String(q.passage || '');
    const i = pas.indexOf('%BLANK%');
    if (i < 0) return;
    const antes = (pas.slice(0, i).trim().match(/([A-Za-z][\w'-]*)\s*$/) || [])[1];
    if (!antes) return;
    Object.keys(q.choices || {}).forEach(k => {
      const primera = (String(q.choices[k]).trim().match(/^([A-Za-z][\w'-]*)/) || [])[1];
      if (primera && primera.toLowerCase() === antes.toLowerCase()) {
        pegadas.push(`${q.id}/${k}: "${antes} ${primera}…"`);
      }
    });
  });
  if (pegadas.length) {
    err(rel, `la palabra anterior al blanco se repite dentro de la opción ` +
      `(se lee dos veces): ${pegadas.slice(0, 4).join(' · ')}`);
  }

  /* Dónde cayó cada pregunta, y si alguna la recogió el cajón de sastre. */
  const porSkill = {};
  let enCajon = 0, fueraDeDominio = 0;
  qs.forEach(q => {
    const sk = (typeof skillOf === 'function') ? skillOf(q) : null;
    if (!sk) { fueraDeDominio++; return; }
    porSkill[sk.t] = (porSkill[sk.t] || 0) + 1;
    const texto = String(q.skill || '') + ' ' + String(q.stem || '').slice(0, 160);
    if (!sk.m.test(texto)) enCajon++;
  });
  const destrezas = Object.keys(porSkill).sort((a, b) => porSkill[b] - porSkill[a]);
  if (destrezas.length) {
    console.log('  destrezas: ' + destrezas.map(t => `${t} ${porSkill[t]}`).join(' · '));
  }
  if (fueraDeDominio) {
    err(rel, `${fueraDeDominio} pregunta(s) no caen en ninguna destreza oficial: revisá su "domain"`);
  }
  if (enCajon) {
    avi(rel, `${enCajon} pregunta(s) las recogió el cajón de sastre de su dominio — ` +
      `su texto de "skill" no coincide con ninguna regla, así que la destreza es una suposición`);
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

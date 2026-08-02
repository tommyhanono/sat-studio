#!/usr/bin/env node
/**
 * auditar-banco.js — mide el banco de preguntas contra la distribución OFICIAL
 * del Digital SAT y verifica su integridad.
 *
 *     node tools/auditar-banco.js
 *
 * Por qué existe: EXPANSION_PLAN.md explicaba cómo reproducir la medición pero
 * había que rehacerla a mano cada vez, y una medición que cuesta trabajo no se
 * repite — por eso el plan anterior quedó describiendo un banco que ya no
 * existía. Esto la vuelve un comando.
 *
 * Dos trampas que este script evita a propósito, porque las dos ya dieron
 * números equivocados:
 *
 *   1. Cuenta los sets que la app CARGA, no los archivos de la carpeta. En
 *      `sets/` hay archivos que no son sets (los diccionarios `desmos-*.js`) y
 *      sets RETIRADOS, cuyo <script> está comentado en index.html. Un set
 *      retirado no es práctica: sigue en disco y nunca se juega.
 *
 *   2. Las pistas de Desmos se guardan de DOS formas —en el diccionario
 *      SAT_DESMOS y como propiedad `desmos` en la propia pregunta— y hay que
 *      mirar las dos. Contar solo el diccionario daba 55 % cuando la cobertura
 *      real era 85 %.
 *
 * Fuente de los pesos: Assessment Framework for the Digital SAT Suite,
 * College Board (PDF, 227 pp.), tabla 19 p. 85 para matemática y pp. 68, 74,
 * 81 y 84 para Reading and Writing.
 * OJO: las tablas 17 y 18 de ese PDF son del PSAT, con pesos distintos.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const RAIZ = path.resolve(__dirname, '..');
const OFICIAL_MATH = {
  'Algebra': 35, 'Advanced Math': 35,
  'Problem-Solving and Data Analysis': 15, 'Geometry and Trigonometry': 15,
};
const OFICIAL_RW = {
  'Craft and Structure': 28, 'Information and Ideas': 26,
  'Standard English Conventions': 26, 'Expression of Ideas': 20,
};
// Los sets escriben el dominio de varias formas ("Geometry & Trig",
// "Algebra + Functions"). Se normaliza a los cuatro nombres oficiales.
const CANON = {
  'Algebra': 'Algebra', 'Functions': 'Advanced Math', 'Advanced Math': 'Advanced Math',
  'Problem-Solving': 'Problem-Solving and Data Analysis', 'Data': 'Problem-Solving and Data Analysis',
  'Geometry': 'Geometry and Trigonometry',
};

function cargar() {
  const html = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
  const sinComentarios = html.replace(/<!--[\s\S]*?-->/g, '');
  const vivos = [...sinComentarios.matchAll(/<script src="(sets\/[a-z0-9-]+\.js)">/g)].map(m => m[1]);
  const retirados = [...html.matchAll(/<!--\s*<script src="(sets\/[a-z0-9-]+\.js)">[\s\S]*?-->/g)].map(m => m[1]);
  const ctx = { window: { SAT_SETS: [], SAT_DESMOS: {} }, console };
  vm.createContext(ctx);
  const rotos = [];
  for (const rel of vivos) {
    try { vm.runInContext(fs.readFileSync(path.join(RAIZ, rel), 'utf8'), ctx, { filename: rel }); }
    catch (e) { rotos.push([rel, e.message]); }
  }
  return { sets: ctx.window.SAT_SETS, desmos: ctx.window.SAT_DESMOS || {}, vivos, retirados, rotos };
}

function dominios(q) {
  const out = new Set();
  for (const parte of String(q.domain || '').split('+').map(s => s.trim())) {
    let hit = null;
    for (const k in CANON) if (parte.includes(k)) { hit = CANON[k]; break; }
    out.add(hit || parte);
  }
  return out;
}

const pct = (n, d) => d ? (n / d * 100) : 0;
const fmt = (n) => n.toFixed(1).padStart(5) + ' %';

function tabla(titulo, cuentas, total, oficial) {
  console.log(`\n${titulo}`);
  for (const dom of Object.keys(oficial)) {
    const n = cuentas[dom] || 0, p = pct(n, total), rel = p / oficial[dom];
    const señal = rel < 0.8 ? ' ← corto' : rel > 1.3 ? ' ← de más' : '';
    console.log(`  ${dom.padEnd(34)}${String(n).padStart(4)}  ${fmt(p)}   oficial ${String(oficial[dom]).padStart(2)} %   ${rel.toFixed(2)}x${señal}`);
  }
}

const { sets, desmos, vivos, retirados, rotos } = cargar();
const qs = sets.flatMap(s => (s.questions || []).map(q => ({ ...q, set: s.id, section: s.section })));
const M = qs.filter(q => q.section === 'math'), R = qs.filter(q => q.section === 'rw');

console.log('SAT Studio — auditoría del banco');
console.log('='.repeat(72));
console.log(`  archivos <script> vivos : ${vivos.length}`);
console.log(`  retirados (comentados)  : ${retirados.length}${retirados.length ? '  ' + retirados.join(', ') : ''}`);
console.log(`  SETS QUE LA APP CARGA   : ${sets.length}`);
console.log(`  PREGUNTAS JUGABLES      : ${qs.length}   (math ${M.length} · R&W ${R.length})`);
if (rotos.length) console.log('  ⚠️  ARCHIVOS QUE NO CARGAN:', rotos);

const accM = {};
for (const q of M) for (const d of dominios(q)) accM[d] = (accM[d] || 0) + 1;
tabla('MATEMÁTICA  (las preguntas cruzadas cuentan en cada dominio que tocan)', accM, M.length, OFICIAL_MATH);

const accR = R.reduce((a, q) => { a[q.domain] = (a[q.domain] || 0) + 1; return a; }, {});
tabla('READING AND WRITING', accR, R.length, OFICIAL_RW);

const dif = arr => arr.reduce((a, q) => { a[q.difficulty] = (a[q.difficulty] || 0) + 1; return a; }, {});
console.log('\nDIFICULTAD');
for (const [nombre, arr] of [['matemática', M], ['reading', R], ['TOTAL', qs]]) {
  const d = dif(arr);
  console.log('  ' + nombre.padEnd(12) + ['Fácil', 'Media', 'Difícil']
    .map(k => `${k} ${String(d[k] || 0).padStart(3)} (${pct(d[k] || 0, arr.length).toFixed(1)} %)`).join(' · '));
}

const tipos = M.reduce((a, q) => { a[q.type] = (a[q.type] || 0) + 1; return a; }, {});
console.log('\nFORMATO (matemática)');
console.log(`  opción múltiple ${fmt(pct(tipos.mc || 0, M.length))}   oficial ≈75 %`);
console.log(`  SPR             ${fmt(pct(tipos.spr || 0, M.length))}   oficial ≈25 %`);

const conPista = M.filter(q => desmos[q.id] || q.desmos).length;
console.log(`\nPISTAS DE DESMOS  ${conPista} de ${M.length} (${pct(conPista, M.length).toFixed(1)} %) · faltan ${M.length - conPista}`);

// ---- integridad ----
const sinExp = qs.filter(q => !q.expCorrect);
const sinTip = qs.filter(q => !q.tip);
const mcMal = qs.filter(q => q.type === 'mc' && (!q.choices || !(q.correct in (q.choices || {}))));
const mcSinWrong = qs.filter(q => q.type === 'mc' && Object.keys(q.expWrong || {}).length !== 3);
const sprSinResp = qs.filter(q => q.type === 'spr' && !q.answer);
const ids = qs.map(q => q.id), dupQ = [...new Set(ids.filter((x, i) => ids.indexOf(x) !== i))];
const sids = sets.map(s => s.id), dupS = [...new Set(sids.filter((x, i) => sids.indexOf(x) !== i))];

const checks = [
  ['sin explicación de la correcta', sinExp],
  ['sin tip de estrategia', sinTip],
  ['MC con clave fuera de las opciones', mcMal],
  ['MC sin explicar las 3 incorrectas', mcSinWrong],
  ['SPR sin respuesta', sprSinResp],
  ['IDs de pregunta duplicados', dupQ],
  ['IDs de set duplicados', dupS],
];
console.log('\nINTEGRIDAD');
let fallos = 0;
for (const [nombre, arr] of checks) {
  const n = arr.length; if (n) fallos += n;
  const muestra = n ? '  → ' + arr.slice(0, 6).map(x => x.id || x).join(', ') + (n > 6 ? '…' : '') : '';
  console.log(`  ${n ? '❌' : '✅'} ${nombre.padEnd(38)} ${n}${muestra}`);
}

console.log('\n' + '='.repeat(72));
if (fallos || rotos.length) { console.log(`FALLA: ${fallos} problemas de integridad, ${rotos.length} archivos rotos`); process.exit(1); }
console.log('Banco íntegro.');

#!/usr/bin/env node
/**
 * auditar-destrezas.js — el banco contra las 30 destrezas oficiales del College Board.
 *
 *     node tools/auditar-destrezas.js            # el reparto, lo más flaco primero
 *     node tools/auditar-destrezas.js --huecos   # solo lo que falta para el piso
 *
 * `domain` dice en cuál de los ocho dominios cae una pregunta, y eso alcanza para
 * armar un examen con los pesos oficiales. No alcanza para lo otro: el reporte que
 * College Board le manda al estudiante habla de DESTREZAS con nombre propio, y si
 * la app no habla ese idioma, "practicá lo que fallaste" no se puede contestar.
 *
 * Las 30 destrezas y el clasificador (`SAT_SKILLS` / `skillOf`) viven en `index.html`,
 * que es la app entera; acá se leen de ahí para que NO haya una segunda copia que se
 * desincronice en silencio. Es la misma razón por la que `lib-banco.js` existe.
 *
 * Sale con código 1 si alguna pregunta queda SIN clasificar: una destreza sin matcher
 * es una pestaña de temas que muestra un número mentiroso.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { archivosDeSets, RAIZ } = require(path.join(__dirname, 'lib-banco'));

/* Piso por destreza: por debajo de esto, "practicá esta destreza" no da para una
   tanda decente sin repetir. 10 preguntas = dos drills de 5 sin ver la misma dos veces. */
const PISO = 10;

const html = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
function trozo(desde, hasta) {
  const i = html.indexOf(desde);
  const j = html.indexOf(hasta, i);
  if (i < 0 || j < 0) { console.error(`✗ no se encontró "${desde}" en index.html`); process.exit(1); }
  return html.slice(i, j);
}
/* eval INDIRECTO a propósito: este archivo es 'use strict', y ahí un eval directo
   se queda con sus `var` en su propio scope — SAT_SKILLS quedaría invisible. */
const evalGlobal = eval;
evalGlobal(trozo('var SAT_SKILLS', 'function skillByKey'));

const g = { SAT_SETS: [], SAT_DESMOS: {} };
global.window = g;
archivosDeSets(RAIZ).forEach(rel => {
  try { eval(fs.readFileSync(path.join(RAIZ, rel), 'utf8')); }
  catch (e) { console.error(`✗ ${rel}: ${e.message}`); }
});

const preguntas = [];
g.SAT_SETS.forEach(s => (s.questions || []).forEach(q => preguntas.push({ q, set: s })));

const cuenta = {};
SAT_SKILLS.forEach(s => { cuenta[s.k] = { s, n: 0, F: 0, M: 0, D: 0, X: 0, cajon: 0 }; });
const huerfanas = [];
preguntas.forEach(({ q, set }) => {
  const sk = skillOf(q);
  if (!sk) return huerfanas.push(`${set.id}/${q.id} (${q.domain || 'sin dominio'})`);
  const c = cuenta[sk.k];
  c.n++;
  // ¿entró por su propia regla o la recogió el cajón de sastre del dominio?
  if (!sk.m.test(String(q.skill || '') + ' ' + String(q.stem || '').slice(0, 160))) c.cajon++;
  if (q.extreme) c.X++;
  else if (q.difficulty === 'Fácil') c.F++;
  else if (q.difficulty === 'Media') c.M++;
  else c.D++;
});

const filas = Object.values(cuenta).sort((a, b) => a.n - b.n);
console.log('EL BANCO CONTRA LAS 30 DESTREZAS OFICIALES');
console.log(`${preguntas.length} preguntas · piso por destreza: ${PISO}\n`);
console.log('   n  warm  test  hard  brutal  destreza   (~ = la recogió el cajón del dominio)');
let flacas = 0;
filas.forEach(f => {
  const bajo = f.n < PISO;
  if (bajo) flacas++;
  console.log(`${bajo ? '✗' : ' '}${String(f.n).padStart(4)} ${String(f.F).padStart(5)} ${String(f.M).padStart(5)} ` +
    `${String(f.D).padStart(5)} ${String(f.X).padStart(7)}  ${f.s.t}${f.cajon ? ' ~' : ''}  ${bajo ? `← faltan ${PISO - f.n}` : ''}`);
});

const porDom = {};
filas.forEach(f => { porDom[f.s.dom] = (porDom[f.s.dom] || 0) + f.n; });
console.log('\nPOR DOMINIO');
Object.keys(porDom).sort((a, b) => porDom[b] - porDom[a])
  .forEach(d => console.log(`${String(porDom[d]).padStart(5)}  ${d}`));

console.log('');
if (huerfanas.length) {
  console.error(`✗ ${huerfanas.length} pregunta(s) SIN destreza oficial:`);
  huerfanas.slice(0, 20).forEach(h => console.error('   ' + h));
  if (huerfanas.length > 20) console.error(`   …y ${huerfanas.length - 20} más`);
  process.exit(1);
}
/* ---------- La red POSITIVA: casos canonicos que tienen que caer donde caen ----------
   S18 en test-shell.js vigila lo contrario — que ningun matcher muerda una palabra
   inglesa que no le toca. Eso no alcanza: un matcher tambien falla cuando NO reconoce
   algo suyo, y entonces la pregunta cae en el cajon de sastre del dominio sin que nada
   se ponga en rojo, porque "todas clasificadas" sigue siendo verdad.

   Cada caso de aqui salio de un error real encontrado en el banco. */
const CANONICOS = [
  // 16-sep-2026: el matcher buscaba "sine"/"cosine" y el examen escribe sin/cos/tan,
  // asi que una identidad de cofuncion caia en Lines, angles and triangles.
  { skill: 'Cofunction identity (sin = cos)', domain: 'Geometry & Trigonometry',
    stem: 'In the equation sin(3x - 17) = cos(2x + 42), the measures are those of acute angles. What is x?',
    espera: 'Right triangles and trigonometry' },
  // Y al reves: que dos angulos sumen 90 grados es geometria pura, no trigonometria.
  { skill: 'Complementary angles inside a figure', domain: 'Geometry & Trigonometry',
    stem: 'In the figure, angle AOC is a right angle and ray OB lies inside it, splitting it into two angles.',
    espera: 'Lines, angles and triangles' },
  // 16-sep-2026: `counting` sin \b se comia "discounting", y Probabilidad se prueba
  // antes que Percentages dentro de Problem-Solving.
  { skill: 'Discounting a price twice', domain: 'Problem-Solving & Data Analysis',
    stem: 'A store is discounting a jacket by 20 percent and then by another 10 percent.',
    espera: 'Percentages' },
  // `spread` sin \b se comia "spreadsheet", que sale en cualquier pregunta de datos.
  { skill: 'Unit rate from a spreadsheet of deliveries', domain: 'Problem-Solving & Data Analysis',
    stem: 'A spreadsheet lists the liters of fuel used per route.', espera: 'Ratios, rates and units' },
  // `unit` suelto se comia "community".
  { skill: 'Percent change in a community garden', domain: 'Problem-Solving & Data Analysis',
    stem: 'A community garden increased its plots by 15 percent.', espera: 'Percentages' },
  // La linea fina entre las dos destrezas de inferencia estadistica: "randomly selected"
  // habilita generalizar (claims); estimar un total con su margen es la otra.
  { skill: 'Margin of error around a sample proportion', domain: 'Problem-Solving & Data Analysis',
    stem: 'A random sample of 200 residents was surveyed; the estimate was 38 percent with a margin of error of 3 percent.',
    espera: 'Inference from samples and margin of error' },
];
const fallados = CANONICOS.filter(c => {
  const sk = skillOf({ id: '__canon_' + c.skill, skill: c.skill, domain: c.domain, stem: c.stem });
  c.cayo = sk ? sk.t : 'SIN CLASIFICAR';
  return c.cayo !== c.espera;
});
if (fallados.length) {
  console.error(`\n✗ ${fallados.length} caso(s) canonico(s) cayeron en la destreza equivocada:`);
  fallados.forEach(c => console.error(`   "${c.skill}"\n     esperado: ${c.espera}\n     cayo en : ${c.cayo}`));
  process.exit(1);
}
console.log(`· los ${CANONICOS.length} casos canonicos caen donde deben`);

const enCajon = filas.reduce((a, f) => a + f.cajon, 0);
console.log(`✓ las ${preguntas.length} preguntas están clasificadas en una destreza oficial`);
console.log(`· ${preguntas.length - enCajon} entraron por su propia regla · ${enCajon} ` +
  `(${(100 * enCajon / preguntas.length).toFixed(1)} %) las recogió el cajón de su dominio`);
if (flacas) console.log(`· ${flacas} destreza(s) por debajo de ${PISO}: son los huecos a llenar`);
process.exit(0);

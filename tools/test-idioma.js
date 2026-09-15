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

/* Detector de español. Dos reglas y las dos son DEFINITIVAS: un solo acierto
   basta. La versión anterior era "sensible a propósito" y eso resultó ser un
   error de diseño: metía en la lista palabras que también son inglesas (son,
   era, solo, area, radio, coma, error, divide, sale, dice, valor) y sufijos que
   chocan con el inglés (-arse en "parse", -erse en "universe", -ando en
   "commando", -endo en "crescendo", -anza en "bonanza"). Con el banco ya
   traducido marcaba 228 campos que estaban perfectos en inglés, así que como
   compuerta permanente no servía: nunca iba a poder quedar en verde.

   Ahora la lista es SOLO palabras que no existen en inglés. Lo que un regex no
   puede ver —una frase corta en español sin ninguna de estas palabras— lo cubre
   la revisión semántica que se hizo sobre las 786 preguntas; esto es la red que
   evita que vuelva a entrar español sin que nadie se dé cuenta. */

/* Nombres propios y notación que llevan acento o parecen españoles y no lo son. */
/* OJO con esto: la lista se APLICA BORRANDO, así que un patrón que muerda media
   palabra inventa una palabra que no estaba. Pasó de verdad: `tan` seguido de
   cualquier letra se comía el "tang" de "tangles" y dejaba "les", que sí es
   español. Por eso todo va con \\b a los dos lados y la notación trigonométrica
   exige que después venga un paréntesis, un dígito, θ, o una letra MAYÚSCULA
   suelta (sin A, cos B). Y se reemplaza por un espacio, no por nada, para no
   pegar dos trozos y formar otra palabra. */
const PERMITIDOS = /(?<![A-Za-zÀ-ÿ])(?:Inés|Ibáñez|Bogotá|café|Perú|México|Nicolás|naïve|résumé|Zaha|José|García|Amara|Petrova|Ada Rourke|Los Angeles|Las Vegas|La Niña|El Niño)(?![A-Za-zÀ-ÿ])|\bLos\b(?=\s+[A-Z])|\bLas\b(?=\s+[A-Z])|\b(?:sin|cos|tan|sec|csc|cot)\s*[²³]?\s*(?:[(θ0-9]|[A-Z]\b)|\b(?:sin|cos|tan)\s*[²³]|\bet\s+al\b|SOHCAHTOA/g;

/* Palabras que NO existen en inglés. Cada una se verificó una por una: las que
   son homógrafas del inglés están fuera a propósito y se listan arriba. */
const ES_PALABRAS = /\b(los|las|una|unos|unas|del|que|por|para|como|cuando|donde|porque|entre|desde|hasta|hacia|durante|mientras|aunque|tampoco|siempre|nunca|toda|todo|todos|todas|otra|otro|otros|otras|mismo|misma|tanto|tiene|tienen|puede|pueden|hace|hacen|dicen|queda|quedan|salen|fue|pero|esto|eso|este|esta|ese|esa|estos|estas|esos|esas|sus|les|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|primero|primera|segundo|segunda|tercero|tercera|alguien|nadie|ninguno|ninguna|cual|cuyo|cuya|ambos|ambas|varios|varias|mucho|mucha|muchos|muchas|poco|poca|pocos|pocas|menos|muy|cada|nada|hay|siguiente|siguientes)\b/i;

/* Vocabulario del banco en español, sin acentos (con acento ya cae por la otra regla). */
const ES_VOCAB = /\b(ecuacion\w*|ecuaciones|exponencial\w*|iguales|cuadratic\w*|raices|despeje|pendiente|recta|rectas|circunferencia|triangul\w*|volumen|posesiv\w*|verbo|verbos|oraciones|palabra|palabras|pregunta|preguntas|respuesta|respuestas|nivel|niveles|facil|dificil|dificultad|simulacro|nucleo|banco|sujeto|sujetos|signo|signos|valores|numeros|suma|resta|multiplica|elevar|elevado|entero|enteros|cateto|catetos|hipotenusa|angulo|angulos|lado|lados|altura|diametro|grafica|graficas|tabla|texto|opcion|opciones|dominio|correcto|correcta|correctas|incorrect[ao]|resuelve|resolver|calcula|calcular|sustituye|sustituir|factoriza|simplifica|verifica|ejemplo|ejemplos|cuenta|cuentas|errores|servidor|correo|guardar|cargar|secciones|seccion|estudiante|estudiantes|puntaje|examen|prueba|pruebas|semana|semanas|fecha|fechas|repaso|practica|practicar)\b/i;

/* Terminaciones que no chocan con ninguna palabra inglesa. */
const ES_SUFIJOS = /\b\w{2,}(ciones|idad|edad|miento|mientos|encia|ancia)\b|\b\w{3,}mente\b|\b\w{3,}aje\b/i;

function esEspanol(t) {
  const limpio = String(t).replace(PERMITIDOS, ' ');
  if (/[áéíóúñ¿¡]/i.test(limpio)) return true;
  return ES_PALABRAS.test(limpio) || ES_VOCAB.test(limpio) || ES_SUFIJOS.test(limpio);
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
    // desmos y figure también los lee el estudiante: `desmos` sale en la pantalla
    // de resultados bajo "📈 In Desmos", y `figure` es un SVG cuyo aria-label es lo
    // único que oye quien usa lector de pantalla. Faltaban en la primera versión y
    // ahí se había quedado escondido el bolsón más grande de español del banco.
    const campos = [['skill', q.skill], ['stem', q.stem], ['passage', q.passage],
      ['expCorrect', q.expCorrect], ['tip', q.tip],
      ['desmos', q.desmos], ['figure', q.figure]];
    Object.entries(q.expWrong || {}).forEach(([k, v]) => campos.push(['expWrong.' + k, v]));
    Object.entries(q.choices || {}).forEach(([k, v]) => campos.push(['choices.' + k, v]));
    campos.forEach(([c, v]) => {
      if (typeof v !== 'string' || !v) return;
      nCampos++;
      if (esEspanol(v)) fallos.push(`${q.id} · ${c}: ${v.slice(0, 70)}`);
    });
  });
});

/* Las pistas de Desmos viven en sets/desmos-*.js y se mezclan en q.desmos al
   arrancar la app, así que hay que mirarlas en su propio archivo. */
Object.keys(g.SAT_DESMOS || {}).forEach(qid => {
  const h = g.SAT_DESMOS[qid];
  const nota = h && h.note;
  if (typeof nota !== 'string' || !nota) return;
  nCampos++;
  if (esEspanol(nota)) fallos.push(`${qid} · desmos.note: ${nota.slice(0, 70)}`);
});

/* ---------- 2. la interfaz ---------- */
const soloJS = html.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
/* Los nombres de clase e id no son texto que alguien lea (.set-meta, #res-meta,
   .home-nav): se quitan antes de mirar, o cada clase con una palabra parecida al
   español sale como falso positivo. aria-label y placeholder SÍ se miran: eso lo
   lee el estudiante o su lector de pantalla. */
const limpiar = t => String(t)
  .replace(/\b(?:class|id|data-[\w-]+)\s*=\s*(?:"[^"]*"|'[^']*')/g, '')
  .replace(/^[#.][\w-]+$/, '');
const cadenas = [...soloJS.matchAll(/'((?:[^'\\\n]|\\.)*)'/g)].map(m => m[1])
  .concat([...soloJS.matchAll(/>([^<>{}]{12,})</g)].map(m => m[1].trim()));
const uiFallos = [...new Set(cadenas.filter(t => t.length > 8 && esEspanol(limpiar(t))))];

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

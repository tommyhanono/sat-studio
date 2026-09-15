#!/usr/bin/env node
/**
 * i18n-extraer.js — saca a un JSON todo el texto en español que ve el estudiante.
 *
 *     node tools/i18n-extraer.js [salida.json]
 *
 * Por qué así y no editando los archivos a mano: son 66 archivos y ~3.600 campos.
 * Editar a mano es garantía de romper una comilla, un `correct`, o una pregunta
 * entera sin que nadie lo note. Acá se extrae con OFFSETS exactos, se traduce
 * solo el texto, y `i18n-aplicar.js` lo devuelve por posición — así es imposible
 * que se mueva una coma de sitio o que cambie una respuesta correcta.
 *
 * Campos que salen: skill · expCorrect · tip · expWrong.* · title y description
 * del set · y, marcados aparte, los `passage` y `choices` que quedaron en
 * español (esos son CONTENIDO del examen: traducirlos cambia la pregunta).
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { archivosDeSets } = require('./lib-banco');

const RAIZ = path.resolve(__dirname, '..');
const SALIDA = process.argv[2] || path.join(RAIZ, 'i18n', 'pendiente.json');

/* El detector vive en tools/detector-espanol.js y NO se copia acá. Tenerlo
   duplicado ya costó caro: la copia de este archivo se quedó atrás, marcó de más
   y de menos, y 499 campos del banco se dieron por traducidos cuando no lo
   estaban. Una sola definición, importada. */
const { esEspanol } = require('./detector-espanol');
const ES = { test: esEspanol };

/** Lee un literal de cadena que empieza en `i` (comilla) y devuelve {texto, fin}. */
function leerCadena(src, i) {
  const q = src[i];
  if (q !== "'" && q !== '"' && q !== '`') return null;
  let j = i + 1, out = '';
  while (j < src.length) {
    const c = src[j];
    if (c === '\\') { out += c + src[j + 1]; j += 2; continue; }
    if (c === q) return { crudo: out, ini: i + 1, fin: j };
    if (c === '\n' && q !== '`') return null;      // cadena sin cerrar en la línea
    out += c; j++;
  }
  return null;
}

/** Encuentra `campo:` seguido de una cadena, y devuelve todas las apariciones. */
function buscarCampo(src, campo) {
  const re = new RegExp('(^|[\\s{,])' + campo + '\\s*:\\s*', 'g');
  const found = [];
  let m;
  while ((m = re.exec(src))) {
    const i = m.index + m[0].length;
    const s = leerCadena(src, i);
    if (s) found.push({ campo, ini: s.ini, fin: s.fin, texto: s.crudo });
  }
  return found;
}

/** El id de pregunta más cercano hacia atrás — para saber a quién pertenece el texto. */
function idCercano(src, pos) {
  const trozo = src.slice(0, pos);
  const m = [...trozo.matchAll(/\bid\s*:\s*'([^']+)'/g)];
  return m.length ? m[m.length - 1][1] : '(set)';
}

const html = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
const sinComentarios = html.replace(/<!--[\s\S]*?-->/g, '');
const archivos = archivosDeSets(RAIZ);
if (!archivos.length) { console.error('No se encontró ningún set vivo en index.html.'); process.exit(1); }

const CAMPOS = ['skill', 'expCorrect', 'tip', 'title', 'description'];
const items = [];
let nArchivos = 0;

for (const rel of archivos) {
  const abs = path.join(RAIZ, rel);
  if (!fs.existsSync(abs)) continue;
  const src = fs.readFileSync(abs, 'utf8');
  nArchivos++;
  const encontrados = [];

  for (const c of CAMPOS) encontrados.push(...buscarCampo(src, c));

  // expWrong: { A: '…', B: '…', … } — las letras son el campo
  const reEW = /expWrong\s*:\s*\{/g;
  let m;
  while ((m = reEW.exec(src))) {
    let j = m.index + m[0].length, prof = 1;
    while (j < src.length && prof > 0) {
      const c = src[j];
      if (c === '{') prof++;
      else if (c === '}') { prof--; if (!prof) break; }
      else if (c === "'" || c === '"' || c === '`') {
        const s = leerCadena(src, j);
        if (s) {
          const letra = (src.slice(Math.max(0, j - 12), j).match(/([A-Z])\s*:\s*$/) || [])[1] || '?';
          encontrados.push({ campo: 'expWrong.' + letra, ini: s.ini, fin: s.fin, texto: s.crudo });
          j = s.fin;
        }
      }
      j++;
    }
  }

  // passage y choices: CONTENIDO del examen. Se extraen aparte y marcados.
  for (const c of ['passage', 'stem']) {
    for (const f of buscarCampo(src, c)) { f.contenido = true; encontrados.push(f); }
  }
  const reCh = /choices\s*:\s*\{/g;
  while ((m = reCh.exec(src))) {
    let j = m.index + m[0].length, prof = 1;
    while (j < src.length && prof > 0) {
      const c = src[j];
      if (c === '{') prof++;
      else if (c === '}') { prof--; if (!prof) break; }
      else if (c === "'" || c === '"' || c === '`') {
        const s = leerCadena(src, j);
        if (s) {
          const letra = (src.slice(Math.max(0, j - 12), j).match(/([A-Z])\s*:\s*$/) || [])[1] || '?';
          encontrados.push({ campo: 'choices.' + letra, ini: s.ini, fin: s.fin, texto: s.crudo, contenido: true });
          j = s.fin;
        }
      }
      j++;
    }
  }

  for (const f of encontrados) {
    if (!ES.test(f.texto)) continue;                       // ya está en inglés
    if (!/[a-záéíóúñ]{3}/i.test(f.texto)) continue;        // fórmulas sueltas
    items.push({
      archivo: rel, qid: idCercano(src, f.ini), campo: f.campo,
      ini: f.ini, fin: f.fin, contenido: !!f.contenido, es: f.texto, en: null,
    });
  }
}

fs.mkdirSync(path.dirname(SALIDA), { recursive: true });
/* Este archivo es el REGISTRO de la traducción, no un archivo temporal: guarda
   qué se tradujo y a qué. Sobrescribirlo cuando ya tiene trabajo adentro lo
   borra sin aviso, y pasó. Ahora hay que pedirlo explícitamente. */
if (fs.existsSync(SALIDA) && !process.argv.includes('--forzar')) {
  let previo = [];
  try { previo = JSON.parse(fs.readFileSync(SALIDA, 'utf8')); } catch (e) { previo = []; }
  const hechos = previo.filter(i => i && (i.hecho || (typeof i.en === 'string' && i.en.length))).length;
  if (hechos) {
    console.error(`\n✗ ${SALIDA} ya tiene ${hechos} traducción(es) registradas.`);
    console.error('  Sobrescribirlo las borra. Si de verdad querés empezar de cero: --forzar');
    console.error('  (o pasá otra ruta de salida como primer argumento).\n');
    process.exit(1);
  }
}
fs.writeFileSync(SALIDA, JSON.stringify(items, null, 1));

const porCampo = {};
items.forEach(i => { const k = i.campo.split('.')[0]; porCampo[k] = (porCampo[k] || 0) + 1; });
const chars = items.reduce((a, i) => a + i.es.length, 0);
console.log(`archivos revisados : ${nArchivos}`);
console.log(`textos en español  : ${items.length}  (${Math.round(chars / 1000)}k caracteres)`);
Object.entries(porCampo).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`  ${k.padEnd(14)} ${v}`));
console.log(`  de los cuales CONTENIDO del examen (pasaje/opciones): ${items.filter(i => i.contenido).length}`);
console.log(`\n-> ${SALIDA}`);

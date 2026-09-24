#!/usr/bin/env node
/**
 * auditar-originalidad.js — busca texto compartido entre el banco y el material
 * publicado de College Board.
 *
 *     node tools/auditar-originalidad.js referencias/*.txt
 *
 * El pie de la app dice "All questions are original" y `docs/COMO-ESCRIBIR-PREGUNTAS.md`
 * lo pone como regla cero. Esto es lo que lo COMPRUEBA por máquina en vez de
 * pedir que se crea: parte los dos textos en cadenas de N palabras seguidas y
 * busca una sola cadena que esté en los dos lados. Ocho palabras seguidas
 * iguales no pasan por casualidad en prosa; pasan cuando alguien copió.
 *
 * La excepción legítima son las FÓRMULAS: las instrucciones del examen ("Which
 * choice completes the text so that it conforms to the conventions of Standard
 * English?") y las definiciones de matemática son iguales para todo el mundo por
 * diseño. Se reconocen solas sin lista que mantener: una fórmula se repite en
 * VARIAS preguntas nuestras, mientras que un pasaje copiado aparecería en UNA.
 * Por eso lo que hay que mirar a mano son las coincidencias únicas, y el informe
 * las imprime todas.
 *
 * Las referencias son archivos .txt. Para sacarlos de los PDF oficiales:
 *
 *     python3 -c "import fitz,sys; d=fitz.open(sys.argv[1]); \
 *       open(sys.argv[2],'w').write(chr(10).join(p.get_text() for p in d))" a.pdf a.txt
 *
 * Opciones:
 *   --con-explicaciones   compara también las explicaciones, no solo la pregunta
 *   --n=8,10,12,15        los largos de cadena a probar (por defecto esos cuatro)
 *
 * Sale con código 1 si aparece una coincidencia única, que es la que pide ojo
 * humano. No va en `verificar.sh` porque necesita los PDF oficiales descargados.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { cargarBanco } = require('./lib-banco');

/* Un texto se compara por sus palabras, no por su formato: fuera etiquetas,
   fuera comillas tipográficas, fuera puntuación, todo en minúscula. Así una
   copia con la coma movida sigue saliendo. */
function normalizar(s) {
  return String(s == null ? '' : s)
    .replace(/<[^>]*>/g, ' ')
    .replace(/[‘’‛]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[‐-―]/g, '-')
    .toLowerCase()
    .replace(/[^a-z0-9\s]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function cadenas(texto, n) {
  const p = normalizar(texto).split(' ').filter(Boolean);
  const out = [];
  for (let i = 0; i + n <= p.length; i++) out.push(p.slice(i, i + n).join(' '));
  return out;
}

/** Lo que el estudiante lee de una pregunta. */
function textoDePregunta(q, conExplicaciones) {
  const partes = [q.passage, q.stem];
  if (q.choices) for (const k of Object.keys(q.choices)) partes.push(q.choices[k]);
  if (q.answer != null) partes.push(q.answer);
  if (conExplicaciones) {
    partes.push(q.expCorrect, q.tip, q.trap);
    if (q.expWrong) for (const k of Object.keys(q.expWrong)) partes.push(q.expWrong[k]);
  }
  return partes.filter(Boolean).join(' \n ');
}

function main() {
  const args = process.argv.slice(2);
  const refs = args.filter(a => !a.startsWith('--'));
  const conExp = args.includes('--con-explicaciones');
  const argN = args.filter(a => a.startsWith('--n='))[0];
  const NS = (argN ? argN.slice(4).split(',').map(Number) : [8, 10, 12, 15]).filter(n => n >= 3);

  if (!refs.length) {
    console.error('Uso: node tools/auditar-originalidad.js <referencia.txt> [...]\n' +
      'Las referencias son el material publicado contra el que se compara.');
    process.exit(2);
  }

  let refTxt = '';
  const infoRef = [];
  for (const r of refs) {
    if (!fs.existsSync(r)) { console.error('No existe: ' + r); process.exit(2); }
    const txt = fs.readFileSync(r, 'utf8');
    refTxt += '\n' + txt;
    infoRef.push({ archivo: path.basename(r), palabras: normalizar(txt).split(' ').filter(Boolean).length });
  }

  const { SAT_SETS } = cargarBanco();
  const preguntas = [];
  for (const s of SAT_SETS) for (const q of (s.questions || [])) preguntas.push({ set: s.id, q });

  console.log('SAT Studio — auditoría de originalidad');
  console.log('='.repeat(72));
  console.log('  fecha                : ' + new Date().toISOString().slice(0, 10));
  console.log('  preguntas del banco  : ' + preguntas.length);
  console.log('  alcance              : ' + (conExp
    ? 'la pregunta + las explicaciones'
    : 'lo que se lee de la pregunta (pasaje, enunciado, opciones, respuesta)'));
  for (const i of infoRef) {
    console.log('  referencia           : ' + i.archivo + ' — ' + i.palabras.toLocaleString('es') + ' palabras');
  }
  console.log('');

  let unicasFinales = [];
  console.log('  cadena      fórmulas compartidas     coincidencias ÚNICAS');
  console.log('  ' + '-'.repeat(60));
  for (const N of NS) {
    const ref = new Set(cadenas(refTxt, N));
    const cuantas = new Map(), porQ = [];
    for (const { set, q } of preguntas) {
      const propias = new Set(cadenas(textoDePregunta(q, conExp), N));
      porQ.push({ set, id: q.id, propias });
      for (const c of propias) cuantas.set(c, (cuantas.get(c) || 0) + 1);
    }
    let formulas = 0; const unicas = [];
    for (const { set, id, propias } of porQ) {
      for (const c of propias) {
        if (!ref.has(c)) continue;
        if (cuantas.get(c) >= 2) formulas++; else unicas.push({ set, id, cadena: c });
      }
    }
    console.log('  ' + String(N + ' palabras').padEnd(12) + String(formulas).padStart(10) +
      String(unicas.length).padStart(25));
    unicasFinales = unicas;   // se conserva la del N más grande, la más exigente
    if (N === NS[0]) unicasFinales = unicas;
  }
  console.log('');

  /* El detalle se imprime del N más chico —el más sensible—, que es el que hay
     que revisar a mano una por una. */
  const Nmin = Math.min.apply(null, NS);
  const refMin = new Set(cadenas(refTxt, Nmin));
  const cuantasMin = new Map(), porQMin = [];
  for (const { set, q } of preguntas) {
    const propias = new Set(cadenas(textoDePregunta(q, conExp), Nmin));
    porQMin.push({ set, id: q.id, propias });
    for (const c of propias) cuantasMin.set(c, (cuantasMin.get(c) || 0) + 1);
  }
  const detalle = [];
  for (const { set, id, propias } of porQMin) {
    for (const c of propias) if (refMin.has(c) && cuantasMin.get(c) < 2) detalle.push({ set, id, cadena: c });
  }

  if (!detalle.length) {
    console.log('\x1b[32m✓ Ninguna coincidencia única.\x1b[0m Todo lo compartido con el material de');
    console.log('  College Board se repite en varias preguntas nuestras: son fórmulas del examen.');
    process.exit(0);
  }

  console.log('COINCIDENCIAS ÚNICAS a ' + Nmin + ' palabras — cada una se mira a mano:');
  for (const m of detalle) {
    console.log('  ' + (m.set + '/' + m.id).padEnd(34) + '"' + m.cadena + '"');
  }
  console.log('');
  console.log('Una coincidencia única no es por sí sola una copia: una definición de');
  console.log('matemática o una instrucción poco usada cae acá. Lo que no puede pasar es');
  console.log('que una de ellas sea un pedazo de pasaje, de escenario o de opción.');
  process.exit(1);
}

main();

#!/usr/bin/env node
/**
 * test-shell.js — la integridad ESTRUCTURAL de index.html, sin navegador.
 *
 *     node tools/test-shell.js
 *
 * La app entera es un solo archivo, y su peor clase de falla no es lógica: es
 * estructural. Un carácter de más y un bloque se traga al siguiente **en
 * silencio** — sin error de consola, sin excepción, sin nada que mirar.
 *
 * Tres veces ya:
 *   · un `</script>` dentro de un comentario cerró el bloque de scripts y la
 *     app cargó con CERO preguntas;
 *   · un `.class-list{` duplicado dejó una llave abierta y se comió los 340
 *     renglones de CSS que venían después — la navegación del inicio quedó sin
 *     estilo en todos los aparatos y ninguna prueba lo vio, porque el HTML
 *     seguía ahí y el JavaScript seguía andando;
 *   · un `homeSection` duplicado pintó la taxonomía de matemática dos veces.
 *
 * Los tests con Chrome miran comportamiento y por eso no ven nada de esto. Esta
 * prueba mira el archivo: es de segundos, no necesita Chrome, y va PRIMERA en
 * `verificar.sh` porque si el shell está roto lo demás miente.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const RAIZ = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
const res = [];
const check = (n, ok, extra) => res.push([n, !!ok, ok ? '' : (extra === undefined ? '' : ' → ' + String(extra).slice(0, 300))]);
const lineaDe = i => html.slice(0, i).split('\n').length;

/* ---------- 1. el CSS cierra todo lo que abre ---------- */
{
  const i = html.indexOf('<style>'), j = html.indexOf('</style>', i);
  check('S1 hay un bloque <style>', i >= 0 && j > i);
  if (i >= 0 && j > i) {
    const base = lineaDe(i);
    // los comentarios se vacían conservando los saltos, para no contar llaves
    // que viven dentro de ellos y para que el número de línea siga sirviendo
    const css = html.slice(i + 7, j).replace(/\/\*[\s\S]*?\*\//g, m => '\n'.repeat((m.match(/\n/g) || []).length));
    let bal = 0, ult0 = 0, sobra = null;
    css.split('\n').forEach((ln, n) => {
      bal += (ln.match(/\{/g) || []).length - (ln.match(/\}/g) || []).length;
      if (bal === 0) ult0 = n + 1;
      if (bal < 0 && sobra === null) sobra = base + n;
    });
    check('S2 el CSS no deja ninguna llave abierta', bal === 0,
      bal > 0 ? `${bal} sin cerrar; la última línea sana es la ${base + ult0}, mirá la siguiente` : `${-bal} cierre(s) de más`);
    check('S3 el CSS no cierra una llave de más', sobra === null, sobra && `línea ${sobra}`);
    // un selector repetido dentro de su propia declaración es el síntoma exacto
    // del pegado mal hecho que causó S2 la vez pasada
    const pegado = css.split('\n').map((ln, n) => [n, ln])
      // una at-rule (@media, @supports) lleva selectores adentro por diseño:
      // lo que no puede pasar es que un selector NORMAL abra otro selector
      .filter(([, ln]) => !/^\s*@/.test(ln) && /\{\s*\.[a-z][\w-]*\{/.test(ln))
      .map(([n, ln]) => `línea ${base + n + 1}: ${ln.trim().slice(0, 70)}`);
    check('S4 ningún selector quedó pegado dentro de otro', pegado.length === 0, pegado.join(' · '));
  }
}

/* ---------- 2. los bloques de script ---------- */
{
  const bloques = html.match(/<script>[\s\S]*?<\/script>/g) || [];
  check(`S5 hay bloques <script> inline (${bloques.length})`, bloques.length > 0);
  let malos = 0;
  bloques.forEach((b, n) => {
    const src = b.replace(/^<script>/, '').replace(/<\/script>$/, '');
    try { new Function(src); }
    catch (e) { malos++; check(`S6 bloque ${n + 1} compila`, false, e.message); }
  });
  if (!malos) check(`S6 los ${bloques.length} bloques de script compilan`, true);
  // un </script> suelto adentro de un bloque lo cierra aunque esté comentado
  const suelto = /<\/script\s*>/i.test(
    (html.match(/<script>[\s\S]*?<\/script>/g) || []).map(b => b.slice(8, -9)).join('\n'));
  check('S7 ningún </script> quedó suelto dentro de un bloque', !suelto);
}

/* ---------- 3. la lista de sets y las pestañas ---------- */
{
  const m = html.match(/var SAT_SET_FILES\s*=\s*\[([\s\S]*?)\];/);
  check('S8 SAT_SET_FILES existe y es un arreglo', !!m);
  if (m) {
    const vivos = (m[1].split('\n').filter(l => !l.trim().startsWith('//'))
      .join('\n').match(/'([^']+\.js)'/g) || []).map(x => x.slice(1, -1));
    const faltan = vivos.filter(f => !fs.existsSync(path.join(RAIZ, f)));
    check(`S9 los ${vivos.length} sets de la lista existen en disco`, faltan.length === 0, faltan.join(', '));
    const rep = vivos.filter((f, i) => vivos.indexOf(f) !== i);
    check('S10 ningún set está listado dos veces', rep.length === 0, rep.join(', '));
  }
  // cada pestaña del inicio se arma UNA vez: dos `homeSection` iguales pintan
  // la misma sección dos veces y nadie lo nota leyendo el código
  /* Un mismo título puede vivir en DOS pestañas distintas a propósito: el
     método está tanto en Math Topics como en Verbal Topics. Lo que nunca puede
     pasar es que la misma pestaña lo pinte dos veces — así fue como la
     taxonomía de matemática se duplicó. Se agrupa por pestaña. */
  const porTab = {};
  (html.match(/G\.(\w+)\s*\+=\s*homeSection\('([^']{3,70})'/g) || []).forEach(m => {
    const p = m.match(/G\.(\w+)\s*\+=\s*homeSection\('([^']+)'/);
    (porTab[p[1]] = porTab[p[1]] || []).push(p[2]);
  });
  const dobles = [];
  Object.keys(porTab).forEach(t => {
    porTab[t].forEach((n, i) => { if (porTab[t].indexOf(n) !== i) dobles.push(t + ' → ' + n); });
  });
  check('S11 ninguna pestaña pinta la misma sección dos veces', dobles.length === 0, [...new Set(dobles)].join(' · '));
}

/* ---------- 4. las claves internas que no se traducen ---------- */
{
  /* `difficulty:'Extreme'` no existe: el motor compara contra tres cadenas y
     una pregunta marcada así cae al rango 0, o sea al módulo FÁCIL del mock
     adaptativo. Se busca en los sets, que es donde hace daño; en index.html la
     cadena aparece a propósito (el comentario que lo explica y la línea que lo
     normaliza al cargar). */
  const conExtreme = fs.readdirSync(path.join(RAIZ, 'sets')).filter(f => /\.js$/.test(f))
    .filter(f => /difficulty\s*:\s*'Extreme'/.test(fs.readFileSync(path.join(RAIZ, 'sets', f), 'utf8')));
  check("S12 ningún set usa difficulty:'Extreme' (caería al módulo fácil)",
    conExtreme.length === 0, conExtreme.join(', '));
  const anon = /supabase\.co[\s\S]{0,400}?service_role/.test(html);
  check('S13 la clave embebida no es una service_role', !anon);
}

res.forEach(([n, ok, ex]) => console.log(`${ok ? '✅' : '❌'} ${n}${ex}`));
const fallos = res.filter(r => !r[1]).length;
console.log('');
if (!fallos) { console.log(`El archivo está sano: ${res.length}/${res.length} ✓`); process.exit(0); }
console.error(`✗ ${fallos} de ${res.length} en rojo`);
process.exit(1);

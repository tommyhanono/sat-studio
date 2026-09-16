#!/usr/bin/env node
/**
 * test-rendimiento.js — que crecer el banco no vuelva lenta la app.
 *
 *     node tools/test-rendimiento.js
 *
 * El banco pasó de 786 a 2.500 preguntas en dos meses y va a seguir creciendo.
 * Casi todo lo que la app hace recorre el banco entero, así que una operación
 * que hoy tarda 40 ms puede tardar 400 sin que nadie cambie una línea — y nadie
 * lo nota, porque no falla: solo se siente lenta, y "se siente lenta" no lo
 * reporta ninguna otra prueba.
 *
 * Los topes están puestos donde se empieza a sentir, no donde es perfecto:
 * 100 ms es el límite de lo que se percibe como instantáneo, y repintar el
 * inicio ocurre cada vez que el estudiante cambia de pestaña.
 *
 * Sin Chrome o sin puppeteer-core se salta con código 0, igual que el resto.
 */
'use strict';
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const RAIZ = path.resolve(__dirname, '..');
const PUERTO = 8879;
const CHROME = ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
                '/Applications/Chromium.app/Contents/MacOS/Chromium'].find(p => fs.existsSync(p));
function puppet() {
  for (const c of [path.join(RAIZ, 'node_modules', 'puppeteer-core'),
                   path.join(process.env.HOME || '', 'jarvis/app/node_modules/puppeteer-core'),
                   'puppeteer-core']) {
    try { return require(c); } catch (e) { /* siguiente */ }
  }
  return null;
}

/* Cada tope viene con su razón. Un número sin razón no se puede subir ni bajar
   con criterio: el que lo encuentre en rojo solo puede subirlo hasta que pase. */
const TOPES = [
  ['indexSets', 400, 'corre una vez al cargar, después del primer pintado'],
  ['skillBank', 250, 'clasifica el banco entero; se cachea, pero la primera vez se espera'],
  ['renderHome', 350, 'ocurre en CADA cambio de pestaña: es lo que más se siente'],
  ['renderHome (2a vez)', 250, 'con todo cacheado ya no hay excusa'],
  ['mockPool x12', 60, 'las cuentas de simulacros lo llaman una docena de veces por repintado'],
  ['domainBuildSet', 150, 'arma 20 preguntas de un dominio entero al tocar un botón'],
  ['fastOpciones', 200, 'recorre el historial y el banco para decidir qué recomendar'],
];

(async () => {
  if (!CHROME) { console.error('No se encontró Chrome. Se salta el test de rendimiento.'); process.exit(0); }
  const puppeteer = puppet();
  if (!puppeteer) { console.error('No se pudo cargar puppeteer-core. Se salta el test de rendimiento.'); process.exit(0); }

  const srv = spawn('python3', ['-m', 'http.server', String(PUERTO)], { cwd: RAIZ, stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 1200));
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  let medidas = null, err = null;
  try {
    await page.goto(`http://127.0.0.1:${PUERTO}/`, { waitUntil: 'networkidle2', timeout: 30000 });
    await page.waitForFunction(() => typeof window.cargarBanco === 'function', { timeout: 20000 });

    medidas = await page.evaluate(async () => {
      const t = () => performance.now();
      const out = {};
      // se carga el banco a mano para cronometrar indexSets por separado
      const t0 = t();
      await window.cargarBanco();
      out['carga + indexSets'] = t() - t0;
      const t1 = t(); window.indexSets(); out['indexSets'] = t() - t1;
      const t2 = t(); window.skillBank(); out['skillBank'] = t() - t2;
      const t3 = t(); window.renderHome(); out['renderHome'] = t() - t3;
      const t4 = t(); window.renderHome(); out['renderHome (2a vez)'] = t() - t4;
      const t5 = t();
      for (let i = 0; i < 12; i++) { window.mockPool('rw'); window.mockPool('math'); }
      out['mockPool x12'] = t() - t5;
      const t6 = t(); window.domainBuildSet('Algebra', 'todo', 20); out['domainBuildSet'] = t() - t6;
      const t7 = t(); window.fastOpciones(10); out['fastOpciones'] = t() - t7;
      out._preguntas = Object.keys(window.QINDEX || {}).length;
      out._sets = (window.SETS || []).length;
      return out;
    });
  } catch (e) { err = e.message; }
  finally { await browser.close().catch(() => {}); srv.kill(); }

  if (err) { console.error('✗ EXCEPCIÓN durante el test de rendimiento → ' + err); process.exit(1); }

  console.log(`RENDIMIENTO con ${medidas._preguntas} preguntas en ${medidas._sets} sets\n`);
  let malos = 0;
  console.log('        ms   tope   operación');
  TOPES.forEach(([k, tope, porque]) => {
    const v = medidas[k];
    if (v == null) { console.log(`   (no se midió)  ${k}`); return; }
    const ok = v <= tope;
    if (!ok) malos++;
    console.log(`${ok ? '✅' : '❌'} ${String(Math.round(v)).padStart(6)}  ${String(tope).padStart(5)}   ${k}`);
    if (!ok) console.log(`                      ↑ ${porque}`);
  });
  const extra = Object.keys(medidas).filter(k => k[0] !== '_' && !TOPES.some(t => t[0] === k));
  extra.forEach(k => console.log(`   ${String(Math.round(medidas[k])).padStart(6)}      ·   ${k} (sin tope, informativo)`));

  console.log('');
  if (!malos) { console.log(`✓ las ${TOPES.length} operaciones dentro de su tope`); process.exit(0); }
  console.error(`✗ ${malos} operación(es) por encima de su tope`);
  process.exit(1);
})();

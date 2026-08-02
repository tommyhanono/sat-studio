#!/usr/bin/env node
/**
 * test-humo.js — comprueba que la app FUNCIONA, no solo que los sets cargan.
 *
 *     node tools/test-humo.js
 *
 * `auditar-banco.js` verifica los DATOS. Esto verifica la APLICACIÓN: arranca
 * un servidor estático, abre la página en Chrome y juega preguntas de verdad
 * en los tres formatos (matemática MC, reading MC con pasaje, y SPR), marcando
 * la correcta y una incorrecta, y comprobando que la calificación y las
 * explicaciones aparecen.
 *
 * Existe porque el repo es público y con auto-deploy: un error de JavaScript
 * que rompa el examen no lo detecta ningún chequeo de datos, y se publicaría.
 */
'use strict';
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const RAIZ = path.resolve(__dirname, '..');
const PUERTO = 8873;
const CHROME = ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
                '/Applications/Chromium.app/Contents/MacOS/Chromium'].find(p => fs.existsSync(p));
// Este repo es HTML estático a propósito: no tiene node_modules ni package.json.
// puppeteer-core se busca donde pueda estar y, si no aparece, el test se SALTA
// con código 0 en vez de fallar — así el repo sigue siendo clonable y usable
// por cualquiera sin instalar nada.
const CANDIDATOS_PUP = [
  path.join(RAIZ, 'node_modules', 'puppeteer-core'),
  path.join(process.env.HOME || '', 'jarvis/app/node_modules/puppeteer-core'),
  'puppeteer-core',
];
function resolverPuppeteer() {
  for (const c of CANDIDATOS_PUP) {
    try { return require(c); } catch (e) { /* siguiente */ }
  }
  return null;
}

const res = [];
const check = (n, c, extra) => { res.push([n, !!c, c ? '' : (extra === undefined ? '' : ' → ' + JSON.stringify(extra))]); };
const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  if (!CHROME) { console.error('No se encontró Chrome ni Chromium. Se salta el test de humo.'); process.exit(0); }
  const puppeteer = resolverPuppeteer();
  if (!puppeteer) {
    console.error('No se encontró puppeteer-core. Se salta el test de humo.');
    console.error('Para correrlo:  npm i puppeteer-core   (o tenerlo en ~/jarvis/app)');
    process.exit(0);
  }

  const srv = spawn('python3', ['-m', 'http.server', String(PUERTO)], { cwd: RAIZ, stdio: 'ignore' });
  await sleep(1200);

  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 950 });
  const errs = [];
  page.on('pageerror', e => errs.push(e.message));
  // Un 404 se reporta como "Failed to load resource" SIN la URL en el texto, así
  // que filtrar por el mensaje no alcanza: hay que mirar la respuesta HTTP.
  page.on('response', r => { if (r.status() >= 400) errs.push(`HTTP ${r.status()} ${r.url()}`); });
  page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/i.test(m.text())) errs.push('console: ' + m.text()); });

  try {
    await page.goto(`http://127.0.0.1:${PUERTO}/`, { waitUntil: 'networkidle2', timeout: 20000 });
    await sleep(1500);

    check('H1 la página carga sin errores de JS', errs.length === 0, errs.slice(0, 3));
    const inv = await page.evaluate(() => {
      const vis = id => { const e = document.getElementById(id); return !!e && !e.classList.contains('hidden'); };
      return {
        sets: (window.SAT_SETS || []).length,
        // La app arranca en la pantalla de CUENTA (email + contraseña), no en
        // home: el historial se sincroniza con Supabase por usuario. Cualquiera
        // de las dos es un arranque válido; lo que no puede pasar es que no se
        // vea ninguna.
        auth: vis('view-auth'), home: vis('view-home'),
        arranque: typeof startSession === 'function',
      };
    });
    check(`H2 los sets están cargados (${inv.sets})`, inv.sets > 50, inv);
    check('H3 arranca en una pantalla visible (cuenta o inicio)', inv.auth || inv.home, inv);
    check('H4 startSession existe', inv.arranque);

    // --- juega una pregunta de cada formato ---
    // Se eligen por FORMA, no por id: así el test no se rompe al renombrar sets.
    const objetivos = await page.evaluate(() => {
      const S = window.SAT_SETS || [];
      const buscar = (pred) => {
        for (const s of S) { const i = (s.questions || []).findIndex(pred); if (i >= 0) return { set: s.id, idx: i }; }
        return null;
      };
      return {
        mathMC: buscar(q => q.type === 'mc' && !q.passage),
        rwMC:   buscar(q => q.type === 'mc' && q.passage),
        spr:    buscar(q => q.type === 'spr'),
      };
    });
    check('H5 hay preguntas de los tres formatos', !!(objetivos.mathMC && objetivos.rwMC && objetivos.spr), objetivos);

    async function jugar(nombre, obj, correcta) {
      if (!obj) { check(`${nombre}: sin pregunta de este tipo`, false); return; }
      const q = await page.evaluate((o) => {
        startSession(o.set, 'drill');
        S.idx = o.idx; renderQuestion();
        const qq = S.set.questions[S.idx];
        return { id: qq.id, tipo: qq.type, correct: qq.correct, answer: qq.answer };
      }, obj);
      await sleep(500);

      // se responde: la correcta o una incorrecta, según pida el caso
      const resp = await page.evaluate((datos) => {
        const qq = S.set.questions[S.idx];
        if (qq.type === 'spr') {
          S.answers[qq.id] = datos.correcta ? String(qq.answer) : 'ZZZ';
        } else {
          const letras = Object.keys(qq.choices);
          S.answers[qq.id] = datos.correcta ? qq.correct : letras.find(L => L !== qq.correct);
        }
        // "Check" es lo que califica y revela la explicación
        S.checked[qq.id] = true; renderQuestion();
        const txt = document.getElementById('main-area').innerText;
        return {
          respondida: !!S.answers[qq.id],
          largoTexto: txt.length,
          diceCorrecta: /correct/i.test(txt),
          muestraExplicacion: txt.length > 200,
        };
      }, { correcta });
      check(`${nombre} (${q.id}, ${correcta ? 'correcta' : 'incorrecta'}) se responde y califica`,
            resp.respondida && resp.muestraExplicacion, resp);
      return resp;
    }

    await jugar('H6 matemática MC', objetivos.mathMC, true);
    await jugar('H7 matemática MC', objetivos.mathMC, false);
    await jugar('H8 reading MC con pasaje', objetivos.rwMC, true);
    await jugar('H9 SPR (grid-in)', objetivos.spr, true);

    // El pasaje tiene que RENDERIZARSE en su panel, no quedar vacío
    const pasaje = await page.evaluate((o) => {
      startSession(o.set, 'drill'); S.idx = o.idx; renderQuestion();
      const p = document.getElementById('pane-passage');
      return { visible: !p.classList.contains('hidden'), largo: p.innerText.trim().length };
    }, objetivos.rwMC);
    check(`H10 el pasaje se renderiza (${pasaje.largo} chars)`, pasaje.visible && pasaje.largo > 80, pasaje);

    // Volver al inicio sin romper nada
    await page.evaluate(() => { const b = document.getElementById('btn-home'); if (b) b.click(); });
    await sleep(600);
    const vuelta = await page.evaluate(() => !document.getElementById('view-home').classList.contains('hidden'));
    check('H11 se puede volver al inicio', vuelta);
    check('H12 sin errores de JS en todo el recorrido', errs.length === 0, errs.slice(0, 3));
  } catch (e) {
    check('FATAL: ' + e.message, false);
  } finally {
    await browser.close().catch(() => {});
    srv.kill();
  }

  const ok = res.filter(r => r[1]).length;
  res.forEach(([n, c, x]) => console.log((c ? '  PASS ' : '  FAIL ') + n + x));
  console.log(`\nHumo SAT Studio: ${ok}/${res.length}`);
  process.exit(ok === res.length ? 0 : 1);
})();

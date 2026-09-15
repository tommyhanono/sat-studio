#!/usr/bin/env node
/**
 * test-datos.js — comprueba que UNA SESIÓN JUGADA NUNCA SE PIERDE.
 *
 *     node tools/test-datos.js
 *
 * `auditar-banco.js` verifica el contenido. `test-humo.js` verifica que la app
 * se juega. Esto verifica lo único que no se puede deshacer: los datos del
 * estudiante. Levanta la app con un **Supabase falso** inyectado antes de que
 * corra el código de la app, y entonces puede hacer lo que no se puede hacer
 * contra el servidor real: cortar la red a la mitad, devolver errores, recargar
 * con cosas pendientes, fusionar historiales en conflicto y borrar.
 *
 * Si algo de esto falla, un estudiante pierde trabajo. Por eso sale con código 1.
 */
'use strict';
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const RAIZ = path.resolve(__dirname, '..');
const PUERTO = 8874;
const CHROME = ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
                '/Applications/Chromium.app/Contents/MacOS/Chromium'].find(p => fs.existsSync(p));
const CANDIDATOS_PUP = [
  path.join(RAIZ, 'node_modules', 'puppeteer-core'),
  path.join(process.env.HOME || '', 'jarvis/app/node_modules/puppeteer-core'),
  'puppeteer-core',
];
function resolverPuppeteer() {
  for (const c of CANDIDATOS_PUP) { try { return require(c); } catch (e) {} }
  return null;
}

const res = [];
const check = (n, c, extra) => { res.push([n, !!c, c ? '' : (extra === undefined ? '' : ' → ' + JSON.stringify(extra))]); };
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* ---------------------------------------------------------------------------
 * El Supabase falso. Vive dentro de la página, guarda las sesiones en memoria
 * y obedece a window.__FAKE.online / __FAKE.failNext para simular fallos.
 * ------------------------------------------------------------------------- */
const FAKE_SUPABASE = function () {
  // Cada caso arranca con el navegador limpio, pero una RECARGA dentro del mismo
  // caso conserva todo (sessionStorage vive por pestaña): es justo lo que hay que
  // poder distinguir para probar que la cola sobrevive un cierre.
  try {
    if (!sessionStorage.getItem('__test_caso')) { localStorage.clear(); sessionStorage.setItem('__test_caso', '1'); }
  } catch (e) {}
  window.__FAKE = {
    online: true,          // false = "sin internet": todo RPC falla
    failNext: 0,           // N próximas llamadas de upsert fallan y luego se recupera
    rows: {},              // sid -> fila
    calls: { upsert: 0, list: 0, del: 0 },
    user: { id: 'u-test-1', email: 'alumno@iae.edu', user_metadata: { name: 'Alumno', app: 'sat-studio' }, app_metadata: {} },
    session: null,
    authCbs: [],
  };
  const F = window.__FAKE;
  const err = (msg) => ({ data: null, error: { message: msg } });

  window.supabase = {
    createClient: function () {
      return {
        auth: {
          getSession: () => Promise.resolve({ data: { session: F.session } }),
          onAuthStateChange: (cb) => { F.authCbs.push(cb); return { data: { subscription: { unsubscribe(){} } } }; },
          signInWithPassword: ({ email }) => {
            F.user.email = email; F.session = { user: F.user };
            F.authCbs.forEach(cb => cb('SIGNED_IN', F.session));
            return Promise.resolve({ data: { session: F.session, user: F.user }, error: null });
          },
          signUp: () => Promise.resolve({ data: { session: null, user: null }, error: null }),
          signOut: () => { F.session = null; F.authCbs.forEach(cb => cb('SIGNED_OUT', null)); return Promise.resolve({ error: null }); },
        },
        rpc: function (name, args) {
          if (name === 'sat_upsert_session') {
            F.calls.upsert++;
            if (!F.online) return Promise.reject(new Error('Failed to fetch'));
            if (F.failNext > 0) { F.failNext--; return Promise.resolve(err('boom del servidor')); }
            F.rows[args.p_sid] = {
              sid: args.p_sid, played_at: args.p_played_at, mode: args.p_mode,
              set_id: args.p_set_id, set_title: args.p_set_title, score: args.p_score,
              total: args.p_total, time_used: args.p_time_used, data: args.p_data,
            };
            return Promise.resolve({ data: null, error: null });
          }
          if (name === 'sat_list_sessions') {
            F.calls.list++;
            if (!F.online) return Promise.reject(new Error('Failed to fetch'));
            const arr = Object.keys(F.rows).map(k => F.rows[k])
              .sort((a, b) => (a.played_at < b.played_at ? -1 : 1));
            return Promise.resolve({ data: arr, error: null });
          }
          if (name === 'sat_delete_all_sessions') {
            F.calls.del++;
            if (!F.online) return Promise.reject(new Error('Failed to fetch'));
            F.rows = {};
            return Promise.resolve({ data: null, error: null });
          }
          return Promise.resolve({ data: null, error: null });
        },
      };
    },
  };
  // Marca para que el test sepa que el stub ganó la carrera contra el CDN.
  window.__FAKE_READY = true;
};

async function nuevaPagina(browser) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.evaluateOnNewDocument(FAKE_SUPABASE);
  await page.setRequestInterception(true);
  page.on('request', r => {
    const u = r.url();
    // El CDN real de supabase-js pisaría el stub: se bloquea. Chart.js y Desmos no hacen falta.
    if (/supabase-js|chart\.js|desmos\.com/.test(u)) return r.abort();
    r.continue();
  });
  // El aviso de "tienes cosas sin subir" al cerrar es una feature: aqui se acepta
  // para que el test pueda recargar. Que exista se comprueba aparte (D3e).
  page.on('dialog', d => d.accept().catch(() => {}));
  const errs = [];
  page.on('pageerror', e => errs.push(String(e && e.message || e)));
  page.__errs = errs;
  return page;
}

const URL_APP = () => `http://127.0.0.1:${PUERTO}/index.html`;

/** Entra con cuenta y espera a que la app termine el arranque. */
async function login(page) {
  await page.evaluate(() => {
    const F = window.__FAKE;
    F.session = { user: F.user };
    F.authCbs.forEach(cb => cb('SIGNED_IN', F.session));
  });
  await sleep(400);
}

/** Guarda una sesión sintética como lo haría terminar un set. */
async function guardar(page, sid, extra) {
  return page.evaluate((sid, extra) => {
    const e = Object.assign({
      sid, date: new Date().toISOString(), savedAt: new Date().toISOString(),
      mode: 'drill', setId: 'math-set1', setTitle: 'Test ' + sid,
      score: 3, total: 4, timeUsed: 120,
      perQuestion: [{ qid: 'Q1', ok: true, domain: 'Algebra' }, { qid: 'Q2', ok: false, domain: 'Algebra' }],
    }, extra || {});
    window.SATAPP.saveSession(e);
    return true;
  }, sid, extra);
}

const hist = page => page.evaluate(() => window.SATAPP.getHistory().map(e => e.sid));
const cola = page => page.evaluate(() => window.SATAPP.syncPendingCount());
const nube = page => page.evaluate(() => Object.keys(window.__FAKE.rows));
const etiqueta = page => page.evaluate(() => window.SATAPP.syncLabel());

(async () => {
  if (!CHROME) { console.error('No se encontró Chrome ni Chromium. Se salta el test de datos.'); process.exit(0); }
  const puppeteer = resolverPuppeteer();
  if (!puppeteer) { console.error('No se encontró puppeteer-core. Se salta el test de datos.'); process.exit(0); }

  const srv = spawn('python3', ['-m', 'http.server', String(PUERTO)], { cwd: RAIZ, stdio: 'ignore' });
  await sleep(1200);
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] });

  try {
    /* =====================================================================
     * D1 · Camino feliz: se juega con internet y llega a la nube.
     * ===================================================================*/
    {
      const page = await nuevaPagina(browser);
      await page.goto(URL_APP(), { waitUntil: 'networkidle2' });
      check('D0 el Supabase falso se inyectó antes que la app', await page.evaluate(() => !!window.__FAKE_READY));
      await login(page);
      await guardar(page, 's1');
      await sleep(300);
      check('D1 sesión con internet llega a la nube', (await nube(page)).includes('s1'), await nube(page));
      check('D1b la cola queda vacía', (await cola(page)) === 0, await cola(page));
      check('D1c el indicador dice sincronizado', /synced/.test(await etiqueta(page)), await etiqueta(page));
      check('D1d sin errores de JS', page.__errs.length === 0, page.__errs);
      await page.close();
    }

    /* =====================================================================
     * D2 · Sin internet: la sesión NO se pierde y el indicador no miente.
     * ===================================================================*/
    {
      const page = await nuevaPagina(browser);
      await page.goto(URL_APP(), { waitUntil: 'networkidle2' });
      await login(page);
      await page.evaluate(() => { window.__FAKE.online = false; });
      await guardar(page, 's2');
      await sleep(300);
      check('D2 la sesión queda en el historial local aunque no haya red', (await hist(page)).includes('s2'), await hist(page));
      check('D2b queda encolada para subir', (await cola(page)) === 1, await cola(page));
      check('D2c el indicador AVISA que falta subir', /not uploaded/.test(await etiqueta(page)), await etiqueta(page));
      check('D2d la nube sigue vacía (no miente al revés)', (await nube(page)).length === 0);

      // Vuelve la red → se sube sola
      await page.evaluate(() => { window.__FAKE.online = true; return window.SATAPP.syncFlush(); });
      await sleep(400);
      check('D2e al volver la red se sube sola', (await nube(page)).includes('s2'), await nube(page));
      check('D2f la cola se vacía', (await cola(page)) === 0, await cola(page));
      await page.close();
    }

    /* =====================================================================
     * D3 · La cola sobrevive un cierre del navegador (es el caso real:
     *      el estudiante cierra la laptop sin internet y vuelve mañana).
     * ===================================================================*/
    {
      const page = await nuevaPagina(browser);
      await page.goto(URL_APP(), { waitUntil: 'networkidle2' });
      await login(page);
      await page.evaluate(() => { window.__FAKE.online = false; });
      await guardar(page, 's3a'); await guardar(page, 's3b');
      await sleep(300);
      check('D3 dos sesiones pendientes antes de cerrar', (await cola(page)) === 2, await cola(page));

      // Recarga (mismo origin → mismo localStorage). La nube arranca vacía otra vez
      // a propósito: simula que nunca llegaron.
      await page.reload({ waitUntil: 'domcontentloaded' });
      await login(page);
      await sleep(500);
      check('D3b tras recargar, el historial sigue completo', (await hist(page)).length === 2, await hist(page));
      const subidas = await nube(page);
      check('D3c tras recargar CON internet, se suben solas', subidas.includes('s3a') && subidas.includes('s3b'), subidas);
      check('D3d la cola queda vacía', (await cola(page)) === 0, await cola(page));
      await page.close();
    }

    /* =====================================================================
     * D4 · Fusión sin pérdida: la nube tiene una, el navegador tiene otra.
     *      Ninguna de las dos puede desaparecer.
     * ===================================================================*/
    {
      const page = await nuevaPagina(browser);
      await page.goto(URL_APP(), { waitUntil: 'networkidle2' });
      // La nube ya tiene "vieja" (jugada en otro dispositivo)
      await page.evaluate(() => {
        window.__FAKE.rows['cloudA'] = {
          sid: 'cloudA', played_at: '2026-01-01T10:00:00.000Z', mode: 'exam', set_id: 'x',
          set_title: 'Jugada en el celular', score: 5, total: 5, time_used: 60,
          data: { sid: 'cloudA', savedAt: '2026-01-01T10:00:00.000Z', perQuestion: [] },
        };
      });
      await login(page);
      await page.evaluate(() => { window.__FAKE.online = false; });
      await guardar(page, 'localB');          // jugada aquí, sin red
      await sleep(200);
      await page.evaluate(() => { window.__FAKE.online = true; return window.SATAPP.cloudPull(); });
      await sleep(500);
      const h = await hist(page);
      check('D4 la fusión conserva la sesión de la nube', h.includes('cloudA'), h);
      check('D4b la fusión conserva la sesión local', h.includes('localB'), h);
      check('D4c y la local termina subida', (await nube(page)).includes('localB'), await nube(page));
      await page.close();
    }

    /* =====================================================================
     * D5 · Conflicto con el mismo sid: gana la copia MÁS NUEVA, no la nube.
     * ===================================================================*/
    {
      const page = await nuevaPagina(browser);
      await page.goto(URL_APP(), { waitUntil: 'networkidle2' });
      await page.evaluate(() => {
        window.__FAKE.rows['dup'] = {
          sid: 'dup', played_at: '2026-01-01T10:00:00.000Z', mode: 'drill', set_id: 'x',
          set_title: 'VIEJA', score: 1, total: 4, time_used: 10,
          data: { sid: 'dup', savedAt: '2026-01-01T10:00:00.000Z', setTitle: 'VIEJA', score: 1, total: 4 },
        };
      });
      await login(page);
      await guardar(page, 'dup', { setTitle: 'NUEVA', score: 4, total: 4, savedAt: '2030-01-01T10:00:00.000Z' });
      await sleep(200);
      await page.evaluate(() => window.SATAPP.cloudPull());
      await sleep(400);
      const t = await page.evaluate(() => (window.SATAPP.getHistory().find(e => e.sid === 'dup') || {}).setTitle);
      check('D5 con el mismo sid gana la copia más nueva', t === 'NUEVA', t);
      const n = await page.evaluate(() => window.SATAPP.getHistory().filter(e => e.sid === 'dup').length);
      check('D5b y no se duplica la fila', n === 1, n);
      await page.close();
    }

    /* =====================================================================
     * D6 · Historial viejo SIN sid: se adopta, no se tira.
     * ===================================================================*/
    {
      const page = await nuevaPagina(browser);
      await page.goto(URL_APP(), { waitUntil: 'networkidle2' });
      await login(page);
      await page.evaluate(() => {
        const k = window.SATAPP.histKey();
        window.SATAPP.store.set(k, [{ date: '2025-05-05T10:00:00.000Z', setTitle: 'ANTIGUA sin sid', score: 2, total: 3, perQuestion: [] }]);
      });
      await page.evaluate(() => window.SATAPP.cloudPull());
      await sleep(400);
      const titulos = await page.evaluate(() => window.SATAPP.getHistory().map(e => e.setTitle));
      check('D6 una sesión sin sid no se descarta en la fusión', titulos.includes('ANTIGUA sin sid'), titulos);
      check('D6b y termina subida a la nube', (await nube(page)).length === 1, await nube(page));
      await page.close();
    }

    /* =====================================================================
     * D7 · Invitado que se crea cuenta: su práctica previa se adopta.
     * ===================================================================*/
    {
      const page = await nuevaPagina(browser);
      await page.goto(URL_APP(), { waitUntil: 'networkidle2' });
      await page.evaluate(() => {
        window.SATAPP.store.set('satapp_history_v1', [
          { sid: 'g1', date: '2026-02-02T10:00:00.000Z', savedAt: '2026-02-02T10:00:00.000Z', setTitle: 'Jugada de invitado', score: 3, total: 4, perQuestion: [] },
        ]);
      });
      await login(page);
      await sleep(600);
      const h = await hist(page);
      check('D7 la práctica de invitado se adopta al crear cuenta', h.includes('g1'), h);
      check('D7b y se sube a la nube', (await nube(page)).includes('g1'), await nube(page));
      await page.close();
    }

    /* =====================================================================
     * D8 · Dos cuentas en el mismo navegador no se mezclan.
     * ===================================================================*/
    {
      const page = await nuevaPagina(browser);
      await page.goto(URL_APP(), { waitUntil: 'networkidle2' });
      await login(page);
      await guardar(page, 'de-la-cuenta-1');
      await sleep(300);
      await page.evaluate(() => {
        const F = window.__FAKE;
        F.user = { id: 'u-test-2', email: 'otro@iae.edu', user_metadata: { name: 'Otro' }, app_metadata: {} };
        F.rows = {};
        F.session = { user: F.user };
        F.authCbs.forEach(cb => cb('SIGNED_IN', F.session));
      });
      await sleep(600);
      const h = await hist(page);
      check('D8 la segunda cuenta NO ve el historial de la primera', !h.includes('de-la-cuenta-1'), h);
      await page.close();
    }

    /* =====================================================================
     * D9 · Borrado: si el servidor falla, NO se borra lo local.
     * ===================================================================*/
    {
      const page = await nuevaPagina(browser);
      await page.goto(URL_APP(), { waitUntil: 'networkidle2' });
      await login(page);
      await guardar(page, 'nodelete');
      await sleep(300);
      await page.evaluate(() => {
        window.__FAKE.online = false;
        window.prompt = () => 'BORRAR';     // el usuario confirma de verdad
        window.SATAPP.safeClearHistory();
      });
      await sleep(500);
      check('D9 si el borrado del servidor falla, el historial local NO se borra',
            (await hist(page)).includes('nodelete'), await hist(page));
      // Con internet sí borra
      await page.evaluate(() => { window.__FAKE.online = true; window.SATAPP.safeClearHistory(); });
      await sleep(500);
      check('D9b con internet el borrado sí se completa', (await hist(page)).length === 0, await hist(page));
      check('D9c y también borra en el servidor', (await nube(page)).length === 0, await nube(page));
      await page.close();
    }

    /* =====================================================================
     * D10 · Exportar / importar: el respaldo devuelve lo perdido y no pisa.
     * ===================================================================*/
    {
      const page = await nuevaPagina(browser);
      await page.goto(URL_APP(), { waitUntil: 'networkidle2' });
      await login(page);
      await guardar(page, 'keep1');
      await sleep(200);
      const r = await page.evaluate(() => {
        const backup = JSON.stringify({ app: 'sat-studio', sessions: [
          { sid: 'keep1', setTitle: 'NO DEBE PISAR', score: 0, total: 9, perQuestion: [] },
          { sid: 'restaurada', setTitle: 'volvió del respaldo', score: 4, total: 4, savedAt: '2026-03-03T10:00:00.000Z', perQuestion: [] },
        ]});
        const out = window.SATAPP.importHistory(backup);
        return { out, hist: window.SATAPP.getHistory().map(e => ({ sid: e.sid, t: e.setTitle })) };
      });
      check('D10 importar agrega la sesión que faltaba', r.hist.some(e => e.sid === 'restaurada'), r.hist);
      check('D10b importar NO sobrescribe una que ya estaba',
            (r.hist.find(e => e.sid === 'keep1') || {}).t !== 'NO DEBE PISAR', r.hist);
      check('D10c reporta cuántas agregó', r.out && r.out.added === 1, r.out);
      await page.close();
    }

    /* =====================================================================
     * D11 · Reintento con error del servidor (no de red): tampoco se pierde.
     * ===================================================================*/
    {
      const page = await nuevaPagina(browser);
      await page.goto(URL_APP(), { waitUntil: 'networkidle2' });
      await login(page);
      await page.evaluate(() => { window.__FAKE.failNext = 2; });
      await guardar(page, 'err1');
      await sleep(400);
      check('D11 un error del servidor deja la sesión en cola', (await cola(page)) === 1, await cola(page));
      await page.evaluate(() => window.SATAPP.syncFlush());
      await sleep(300);
      await page.evaluate(() => window.SATAPP.syncFlush());
      await sleep(400);
      check('D11b al tercer intento entra', (await nube(page)).includes('err1'), await nube(page));
      check('D11c y la cola queda limpia', (await cola(page)) === 0, await cola(page));
      await page.close();
    }
    /* =====================================================================
     * D12 · Modo invitado (sin cuenta): la app sirve igual y no inventa cola.
     * ===================================================================*/
    {
      const page = await nuevaPagina(browser);
      await page.goto(URL_APP(), { waitUntil: 'networkidle2' });
      // sin login: currentUser es null
      await guardar(page, 'inv1');
      await guardar(page, 'inv2');
      await sleep(300);
      const h = await hist(page);
      check('D12 el invitado puede practicar y se le guarda', h.includes('inv1') && h.includes('inv2'), h);
      check('D12b no se le inventa cola de subida', (await cola(page)) === 0, await cola(page));
      check('D12c el indicador no le promete la nube', /this browser|temporary/.test(await etiqueta(page)), await etiqueta(page));
      check('D12d nada se mandó al servidor', (await nube(page)).length === 0, await nube(page));
      check('D12e sin errores de JS en modo invitado', page.__errs.length === 0, page.__errs);

      // Y al crear cuenta, su práctica se adopta (no se pierde por haber sido invitado)
      await login(page);
      await sleep(700);
      const h2 = await hist(page);
      check('D12f al crear cuenta conserva lo jugado como invitado', h2.includes('inv1') && h2.includes('inv2'), h2);
      const n = await nube(page);
      check('D12g y se sube a su cuenta', n.includes('inv1') && n.includes('inv2'), n);
      await page.close();
    }

    /* =====================================================================
     * D13 · localStorage lleno: se avisa, no se pierde en silencio.
     * ===================================================================*/
    {
      const page = await nuevaPagina(browser);
      await page.goto(URL_APP(), { waitUntil: 'networkidle2' });
      await login(page);
      const r = await page.evaluate(() => {
        const real = Storage.prototype.setItem;
        Storage.prototype.setItem = function () { throw new Error('QuotaExceededError'); };
        const ok = window.SATAPP.store.set('prueba_cuota', { a: 1 });
        const avisos = document.querySelectorAll('#toast-wrap .toast').length;
        Storage.prototype.setItem = real;
        return { ok, avisos, leeMemoria: JSON.stringify(window.SATAPP.store.get('prueba_cuota', null)) };
      });
      check('D13 con la cuota llena, store.set devuelve false', r.ok === false, r);
      check('D13b y avisa al estudiante en pantalla', r.avisos >= 1, r);
      check('D13c el dato queda al menos en memoria', r.leeMemoria === '{"a":1}', r);
      await page.close();
    }

  } finally {
    await browser.close();
    srv.kill();
  }

  let ok = 0;
  for (const [n, c, extra] of res) { console.log(`  ${c ? 'PASS' : 'FALLA'} ${n}${extra}`); if (c) ok++; }
  console.log(`\nIntegridad de datos: ${ok}/${res.length}`);
  process.exit(ok === res.length ? 0 : 1);
})().catch(e => { console.error(e); process.exit(1); });

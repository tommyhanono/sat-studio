#!/usr/bin/env node
/**
 * test-pantallas.js — recorre la app de verdad y revisa LO QUE SE VE.
 *
 *     node tools/test-pantallas.js
 *     node tools/test-pantallas.js --volcado   # imprime el texto de cada pantalla
 *
 * Reemplaza al barrido de cadenas que hacía test-idioma.js sobre index.html.
 * Aquel leía el código fuente y por eso marcaba nombres de variable (banco,
 * hechas, medido, practicar) y, peor, se le escapaba todo el texto que la app
 * arma concatenando pedazos. Esto abre Chrome, entra con un Supabase falso,
 * visita cada pantalla y lee el innerText más los aria-label, placeholder,
 * title y alt: exactamente lo que lee un estudiante o su lector de pantalla.
 *
 * De paso comprueba tres cosas que solo se ven con el navegador abierto:
 *   · ninguna pantalla lanza un error de JavaScript,
 *   · ningún botón visible se queda sin acción (el punto de TOMMY-WEB-LAUNCH),
 *   · no hay scroll horizontal a 320, 375 y 414 px.
 *
 * Sin Chrome o sin puppeteer-core se SALTA con código 0, igual que los otros.
 */
'use strict';
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const { esEspanol } = require('./detector-espanol');

const RAIZ = path.resolve(__dirname, '..');
const PUERTO = 8876;
const VOLCADO = process.argv.includes('--volcado');
const CHROME = ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
                '/Applications/Chromium.app/Contents/MacOS/Chromium'].find(p => fs.existsSync(p));
const CANDIDATOS_PUP = [
  path.join(RAIZ, 'node_modules', 'puppeteer-core'),
  path.join(process.env.HOME || '', 'jarvis/app/node_modules/puppeteer-core'),
  'puppeteer-core',
];
function resolverPuppeteer() {
  const porQue = [];
  for (const c of CANDIDATOS_PUP) {
    try { return require(c); }
    catch (e) { porQue.push(c + ': ' + (e && e.code === 'MODULE_NOT_FOUND' ? 'no está ahí' : e.message)); }
  }
  console.error('No se pudo cargar puppeteer-core. Se buscó en:\n  ' + porQue.join('\n  '));
  return null;
}

const res = [];
const check = (n, c, extra) => { res.push([n, !!c, c ? '' : (extra === undefined ? '' : ' → ' + JSON.stringify(extra).slice(0, 400))]); };
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* El banco ya no se carga con `defer`: se inyecta después del primer pintado, así
   que estar "cargado" no basta. Y la bandera tampoco alcanza sola: el cargador la
   pone ANTES de que conBanco() llame a renderHome(), así que había una ventana en
   la que window.SAT_SETS ya tenía todo y el inicio todavía estaba vacío. Se espera
   a las dos cosas: el banco, y —si el inicio es la pantalla visible— que esté pintado. */
async function esperarBanco(page, ms) {
  await page.waitForFunction('window.BANCO_LISTO === true', { timeout: ms || 30000 });
  await page.waitForFunction(() => {
    const home = document.getElementById('view-home');
    if (!home || home.classList.contains('hidden')) return true;   // estamos en cuenta: nada que pintar
    const secciones = document.getElementById('set-sections');
    return !!(secciones && secciones.children.length);
  }, { timeout: ms || 30000 });
}


/* ---------------------------------------------------------------------------
 * Supabase falso, versión mínima: solo hace falta que haya alguien con la
 * sesión iniciada y con historial, para que todas las pantallas tengan qué
 * mostrar. Los fallos de red los prueba test-datos.js, no esto.
 * ------------------------------------------------------------------------- */
const FAKE = function () {
  // Si el navegador bloquea el almacenamiento, el test deja de medir lo que dice
  // medir. Se lanza: el arnés recoge el pageerror y P9 se pone en rojo. Avisar
  // por consola y seguir daría una corrida verde que no probó nada.
  try { localStorage.clear(); }
  catch (e) { throw new Error('el navegador tiene bloqueado el almacenamiento, el recorrido no mide nada: ' + e.message); }
  const user = {
    id: 'u-pantallas', email: 'profe@iae.edu',
    user_metadata: { name: 'Screen Test', app: 'sat-studio', target_score: '1500', exam_date: '2027-05-01' },
    app_metadata: { role: 'admin' },
  };
  const session = { user: user };
  window.__FAKE = { user: user, session: session, authCbs: [] };
  const F = window.__FAKE;

  window.supabase = {
    createClient: function () {
      return {
        auth: {
          getSession: () => Promise.resolve({ data: { session: F.session } }),
          onAuthStateChange: (cb) => { F.authCbs.push(cb); return { data: { subscription: { unsubscribe() {} } } }; },
          signInWithPassword: () => Promise.resolve({ data: { session: F.session, user: F.user }, error: null }),
          signUp: () => Promise.resolve({ data: { session: null, user: null }, error: null }),
          signOut: () => { F.session = null; return Promise.resolve({ error: null }); },
          resetPasswordForEmail: () => Promise.resolve({ data: {}, error: null }),
          updateUser: () => Promise.resolve({ data: { user: F.user }, error: null }),
        },
        rpc: function (name) {
          if (name === 'sat_list_sessions') return Promise.resolve({ data: [], error: null });
          if (name === 'sat_upsert_session') return Promise.resolve({ data: null, error: null });
          if (name === 'sat_delete_all_sessions') return Promise.resolve({ data: null, error: null });
          if (name === 'sat_admin_overview') return Promise.resolve({ data: {
            total_accounts: 3, active_students: 2, total_sessions: 29, total_questions: 255,
            global_accuracy: 71.4, sessions_7d: 4,
            by_domain: [{ domain: 'Algebra', total: 80, correct: 61 }, { domain: 'Information and Ideas', total: 44, correct: 30 }],
            by_set: [{ label: 'Algebra Drill', sessions: 9 }],
            by_day: [{ day: '2026-09-10', sessions: 3 }],
            by_group: [{ group: 'iae.edu', students: 2, active: 2, sessions: 21, accuracy: 70.2 }],
          }, error: null });
          if (name === 'sat_admin_students') return Promise.resolve({ data: [
            { email: 'ana@iae.edu', name: 'Ana', group: 'iae.edu', target: '1450', exam_date: '2027-03-13',
              joined: '2026-08-01', role: 'student', sessions: 12, last_active: '2026-09-12', questions: 140, accuracy: 72.1 },
          ], error: null });
          if (name === 'sat_teacher_overview') return Promise.resolve({ data: {
            group: 'iae.edu', is_admin: true,
            students: [{ name: 'Ana', email: 'ana@iae.edu', target: '1450', exam_date: '2027-03-13',
              sessions: 12, questions: 140, accuracy: 72.1, last_active: '2026-09-12' }],
            by_domain: [{ domain: 'Algebra', total: 80, correct: 61 }],
          }, error: null });
          return Promise.resolve({ data: null, error: null });
        },
      };
    },
  };
};

/* Historial de mentira, para que el plan, el progreso y el repaso tengan datos. */
const SEMBRAR = function () {
  const sets = window.SAT_SETS || [];
  const h = [];
  let n = 0;
  for (const s of sets) {
    if (n >= 6) break;
    const qs = (s.questions || []).slice(0, 8);
    if (qs.length < 4) continue;
    h.push({
      sid: 'seed-' + n, savedAt: new Date(Date.now() - n * 86400000).toISOString(),
      date: new Date(Date.now() - n * 86400000).toISOString(),
      setId: s.id, setTitle: s.title, mode: n % 2 ? 'exam' : 'drill',
      score: Math.max(1, qs.length - 3), total: qs.length, timeUsed: 420,
      perQuestion: qs.map((q, i) => ({ id: q.id, ok: i % 3 !== 0, domain: q.domain,
        difficulty: q.difficulty, skill: q.skill, picked: q.correct || '', setId: s.id })),
    });
    n++;
  }
  localStorage.setItem('satapp_history_v1__u-pantallas', JSON.stringify(h));
  return h.length;
};

/* Lo que ve un estudiante: texto visible + los atributos que lee un lector de
   pantalla. Se ignoran los nodos ocultos y el contenido de <script>/<style>. */
const LEER_PANTALLA = function () {
  const visible = el => {
    if (!el) return false;
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  };
  const trozos = [];
  const raiz = document.body;
  const it = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT, {
    acceptNode(n) {
      const p = n.parentElement;
      if (!p) return NodeFilter.FILTER_REJECT;
      if (/^(SCRIPT|STYLE|NOSCRIPT)$/.test(p.tagName)) return NodeFilter.FILTER_REJECT;
      if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (p.closest('.hidden')) return NodeFilter.FILTER_REJECT;
      if (!visible(p)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  for (let n = it.nextNode(); n; n = it.nextNode()) trozos.push(n.nodeValue.trim());
  document.querySelectorAll('[aria-label],[placeholder],[title],[alt]').forEach(el => {
    if (el.closest('.hidden')) return;
    ['aria-label', 'placeholder', 'title', 'alt'].forEach(a => {
      const v = el.getAttribute(a);
      if (v && v.trim()) trozos.push(v.trim());
    });
  });
  return trozos;
};

/* Un botón visible que no hace nada es un callejón sin salida. Se cuentan los
   que no tienen onclick, ni listener propio, ni un id/clase que la app delegue.
   La app usa delegación en document para .btn-desmos, .plan-op y varias más,
   así que solo se marca lo que además no tiene NINGÚN atributo de enganche. */
const BOTONES_MUERTOS = function () {
  const malos = [];
  document.querySelectorAll('button').forEach(b => {
    if (b.closest('.hidden')) return;
    const r = b.getBoundingClientRect();
    if (!(r.width > 0 && r.height > 0)) return;
    const tiene = b.onclick || b.getAttribute('onclick') || b.id ||
      b.getAttribute('data-plan-set') || b.getAttribute('data-hl') ||
      b.getAttribute('data-desmos') || b.getAttribute('data-set') ||
      b.getAttribute('data-act') || b.getAttribute('data-go') ||
      b.className.split(/\s+/).some(c => /^(btn-|mini|plan-op|an-|hist-review|set-)/.test(c));
    if (!tiene) malos.push((b.textContent || '').trim().slice(0, 40) + ' · ' + b.className);
  });
  return malos;
};

(async () => {
  if (!CHROME) { console.error('No se encontró Chrome ni Chromium. Se salta el recorrido de pantallas.'); process.exit(0); }
  const puppeteer = resolverPuppeteer();
  if (!puppeteer) { console.error('No se encontró puppeteer-core. Se salta el recorrido de pantallas.'); process.exit(0); }

  const srv = spawn('python3', ['-m', 'http.server', String(PUERTO)], { cwd: RAIZ, stdio: 'ignore' });
  await sleep(1200);

  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 950 });
  page.on('dialog', d => d.accept().catch(() => {}));
  // El CDN real de supabase-js pisa el falso si se deja cargar: window.supabase
  // se reasigna y la app termina hablando con el Supabase de verdad, que
  // responde "permission denied" y deja todas las pantallas vacías. Chart.js y
  // Desmos se bloquean porque no aportan texto y tardan.
  await page.setRequestInterception(true);
  page.on('request', r => {
    if (/supabase-js|chart\.js|desmos\.com/.test(r.url())) return r.abort();
    r.continue();
  });

  const errs = [];
  page.on('pageerror', e => errs.push(e.message));
  page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/i.test(m.text())) errs.push('console: ' + m.text()); });

  const español = [];   // [pantalla, texto]
  const vistas = [];    // [pantalla, nTextos]
  const volcados = {};

  async function mirar(nombre) {
    const trozos = await page.evaluate(LEER_PANTALLA);
    vistas.push([nombre, trozos.length]);
    if (VOLCADO) volcados[nombre] = trozos;
    const yaVisto = new Set();
    for (const t of trozos) {
      if (t.length < 3 || yaVisto.has(t)) continue;
      yaVisto.add(t);
      if (esEspanol(t)) español.push([nombre, t]);
    }
  }

  try {
    await page.evaluateOnNewDocument(FAKE);
    await page.goto(`http://127.0.0.1:${PUERTO}/`, { waitUntil: 'networkidle2', timeout: 25000 });
    await esperarBanco(page);
    await sleep(600);

    // --- 1. pantalla de cuenta, antes de entrar ---
    await page.evaluate(() => {
      document.getElementById('view-home').classList.add('hidden');
      document.getElementById('view-auth').classList.remove('hidden');
    });
    await mirar('cuenta · entrar');

    // --- 2. segundo paso del alta (meta y fecha) ---
    await page.evaluate(() => { const b = document.getElementById('auth-signup-btn'); if (b) b.click(); });
    await sleep(200);
    await mirar('cuenta · crear (paso 2)');

    // --- 3. dentro: sembrar historial y renderizar inicio ---
    const nSem = await page.evaluate(function (semilla) {
      // eslint-disable-next-line no-eval
      const n = eval('(' + semilla + ')')();
      window.currentUser = window.__FAKE.user;
      if (typeof afterLogin === 'function') afterLogin();
      return n;
    }, SEMBRAR.toString());
    check(`P0 se sembró historial de prueba (${nSem} sesiones)`, nSem >= 4, nSem);
    await sleep(900);

    // todo abierto: los <details> cerrados esconden la mitad del texto
    await page.evaluate(() => { document.querySelectorAll('details').forEach(d => { d.open = true; }); });
    await sleep(500);
    await mirar('inicio');

    check('P1 el inicio se ve', await page.evaluate(() =>
      !document.getElementById('view-home').classList.contains('hidden')));

    const botonesMuertos = await page.evaluate(BOTONES_MUERTOS);
    check(`P2 ningún botón del inicio sin acción (${botonesMuertos.length})`, botonesMuertos.length === 0, botonesMuertos.slice(0, 5));

    // --- 4. progreso ---
    const hayProgreso = await page.evaluate(() => {
      if (typeof openProgress !== 'function') return false;
      openProgress(); return true;
    });
    check('P3 existe la pestaña de progreso', hayProgreso);
    if (hayProgreso) { await sleep(600); await mirar('progreso'); }

    // --- 5. panel de admin ---
    const hayAdmin = await page.evaluate(() => {
      if (typeof openAdmin !== 'function') return false;
      openAdmin(); return true;
    });
    check('P4 existe el panel de admin', hayAdmin);
    if (hayAdmin) { await sleep(900); await mirar('admin'); }

    // --- 6. vista de profesor (borrador) ---
    const hayProfe = await page.evaluate(() => {
      if (typeof openTeacher !== 'function') return false;
      openTeacher(); return true;
    });
    if (hayProfe) { await sleep(900); await mirar('profesor (borrador)'); }
    check('P5 existe la vista de profesor', hayProfe);

    // --- 7. una sesión de práctica: pregunta, explicación y resultados ---
    await page.evaluate(() => {
      if (typeof showHome === 'function') showHome();
      else { document.getElementById('view-home').classList.remove('hidden'); }
    });
    await sleep(400);
    const arrancó = await page.evaluate(() => {
      const s = (window.SAT_SETS || []).find(x => (x.questions || []).length >= 3);
      if (!s || typeof startSession !== 'function') return false;
      startSession(s.id, 'drill');
      return true;
    });
    check('P6 arranca una sesión de práctica', arrancó);
    if (arrancó) {
      await sleep(700);
      await mirar('examen · pregunta');

      // panel de calculadora, hoja de referencia y chuleta
      for (const [id, nombre] of [['btn-calc', 'calculadora'], ['btn-ref', 'hoja de referencia'], ['btn-cheat', 'chuleta']]) {
        const abrió = await page.evaluate(i => { const b = document.getElementById(i); if (!b) return false; b.click(); return true; }, id);
        if (abrió) { await sleep(700); await mirar('examen · ' + nombre); await page.evaluate(i => { const b = document.getElementById(i); if (b) b.click(); }, id); await sleep(250); }
      }

      // menú "más"
      const abrióMas = await page.evaluate(() => { const b = document.getElementById('btn-more'); if (!b) return false; b.click(); return true; });
      if (abrióMas) { await sleep(300); await mirar('examen · menú más'); await page.evaluate(() => { const m = document.getElementById('more-menu'); if (m) m.classList.add('hidden'); }); }

      // responder y ver la explicación
      const respondió = await page.evaluate(() => {
        const op = document.querySelector('#view-app .choice');
        if (op) { op.click(); return 'mc'; }
        const inp = document.querySelector('#view-app input[type="text"], #view-app .spr-input');
        if (inp) { inp.value = '1'; inp.dispatchEvent(new Event('input', { bubbles: true })); return 'spr'; }
        return '';
      });
      check('P7 se puede contestar una pregunta', !!respondió, respondió);
      await sleep(500);
      await mirar('examen · contestada');

      // terminar y ver resultados
      const terminó = await page.evaluate(() => {
        if (typeof finishSession === 'function') { finishSession(); return true; }
        const b = document.getElementById('btn-finish') || document.getElementById('btn-end');
        if (b) { b.click(); return true; }
        return false;
      });
      if (terminó) { await sleep(1100); await mirar('resultados'); }
      check('P8 se llega a la pantalla de resultados', terminó);
    }

    // --- P11. un nombre con HTML no puede ejecutarse en el panel del profesor ---
    // El nombre lo escribe el estudiante al registrarse. Si el panel lo mete
    // crudo en innerHTML, quien lo ejecuta es el PROFESOR o el admin.
    const xss = await page.evaluate(() => {
      window.__XSS = 0;
      const veneno = '<img src=x onerror="window.__XSS=1">';
      window.currentUser = Object.assign({}, window.__FAKE.user, {
        user_metadata: Object.assign({}, window.__FAKE.user.user_metadata, { name: veneno }),
      });
      if (typeof setUserChip === 'function') setUserChip();
      if (typeof renderTeacher === 'function') renderTeacher({
        group: 'iae.edu',
        students: [{ name: veneno, email: veneno, target: veneno, exam_date: veneno,
          sessions: 1, questions: 2, accuracy: 50, last_active: '2026-09-01' }],
        by_domain: [{ domain: veneno, total: 2, correct: 1 }],
      });
      if (typeof renderAdminGroups === 'function') renderAdminGroups([{ group: veneno, students: 1, active: 1, sessions: 1, accuracy: 50 }]);
      if (typeof renderAdminTable === 'function') renderAdminTable([{ name: veneno, email: veneno, group: veneno, role: 'student', sessions: 1 }]);
      const chip = document.getElementById('user-chip');
      const tt = document.getElementById('teacher-table');
      return {
        ejecutado: window.__XSS,
        imgs: document.querySelectorAll('#user-chip img, #teacher-table img, #teacher-domains img, #admin-table img, #admin-groups img').length,
        textoLiteral: !!(chip && chip.textContent.indexOf('onerror') >= 0) && !!(tt && tt.textContent.indexOf('onerror') >= 0),
      };
    });
    check('P11 un nombre con HTML no se ejecuta (XSS)', xss.ejecutado === 0 && xss.imgs === 0, xss);
    check('P11b y se muestra como texto literal', xss.textoLiteral, xss);
    await page.evaluate(() => { window.currentUser = window.__FAKE.user; if (typeof setUserChip === 'function') setUserChip(); });

    check('P9 ninguna pantalla lanzó un error de JavaScript', errs.length === 0, errs.slice(0, 4));

    // --- 8. móvil: nada de scroll horizontal ---
    await page.evaluate(() => { if (typeof showHome === 'function') showHome(); });
    await sleep(400);
    for (const w of [320, 375, 414]) {
      await page.setViewport({ width: w, height: 780 });
      await sleep(450);
      const desborde = await page.evaluate(() => ({
        scroll: document.documentElement.scrollWidth,
        ancho: window.innerWidth,
        culpables: [...document.querySelectorAll('body *')]
          .filter(e => e.getBoundingClientRect().right > window.innerWidth + 1 && !e.closest('.hidden'))
          .slice(0, 4).map(e => e.tagName + '.' + (e.className || '').toString().split(' ')[0]),
      }));
      check(`P10 sin scroll horizontal a ${w}px`, desborde.scroll <= desborde.ancho + 1, desborde);
    }
    await page.setViewport({ width: 1440, height: 950 });

  } catch (e) {
    check('EXCEPCIÓN durante el recorrido', false, e.message);
  } finally {
    await browser.close().catch(() => {});
    srv.kill();
  }

  /* ---------------- veredicto ---------------- */
  if (VOLCADO) {
    Object.keys(volcados).forEach(k => {
      console.log('\n===== ' + k + ' =====');
      console.log([...new Set(volcados[k])].join(' | '));
    });
  }

  console.log('\nPantallas recorridas:');
  vistas.forEach(([n, c]) => console.log(`  ${String(c).padStart(4)} textos  ${n}`));

  const fallos = res.filter(r => !r[1]);
  res.forEach(([n, ok, ex]) => console.log(`${ok ? '✅' : '❌'} ${n}${ex}`));

  if (español.length) {
    console.error(`\n✗ ${español.length} texto(s) en español en pantalla:`);
    const yaVisto = new Set();
    español.forEach(([p, t]) => {
      const k = p + '|' + t;
      if (yaVisto.has(k)) return;
      yaVisto.add(k);
      console.error(`   [${p}] ${t.slice(0, 110)}`);
    });
  }

  const total = fallos.length + (español.length ? 1 : 0);
  if (!total) { console.log(`\n${res.length} comprobaciones en verde · todas las pantallas en inglés ✓`); process.exit(0); }
  console.error(`\n✗ ${fallos.length} comprobación(es) en rojo` + (español.length ? ` y ${español.length} texto(s) en español` : ''));
  process.exit(1);
})();

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
          if (name === 'sat_class_mine') return Promise.resolve({ data: [
            { id: 'c1', nombre: 'SAT Prep 11.º', periodo: 'Period 3', archivada: false,
              codigo: 'QK7T2M', mia: true, profe: 'Ms. Reyes', alumnos: 3, trabajos: 4 },
          ], error: null });
          if (name === 'sat_class_create') return Promise.resolve({ data: { id: 'c2', codigo: 'ZZ9P4R' }, error: null });
          if (name === 'sat_class_join') return Promise.resolve({ data: { id: 'c1', nombre: 'SAT Prep 11.º' }, error: null });
          if (name === 'sat_class_feed') return Promise.resolve({ data: [
            { id: 'w1', kind: 'warmup', titulo: 'Circles warm-up', cuerpo: 'Five to start the class.',
              spec: { skills: ['gt-circles'], nivel: 'Media', n: 5, modo: 'drill' },
              vence: null, fecha: '2026-09-15', mis_intentos: 0, mi_mejor: null },
            { id: 'w2', kind: 'assignment', titulo: 'Linear systems — repeat until 80%', cuerpo: 'New questions every time.',
              spec: { skills: ['al-sys', 'al-func'], nivel: 'todo', n: 12, modo: 'drill' },
              vence: '2027-01-30', fecha: '2026-09-14', mis_intentos: 2, mi_mejor: 75 },
            { id: 'w3', kind: 'final', titulo: 'Unit 2 final — part A', cuerpo: 'One attempt.',
              spec: { skills: ['am-nonlin-eq'], nivel: 'Difícil', n: 20, modo: 'exam' },
              vence: '2027-02-10', fecha: '2026-09-13', mis_intentos: 0, mi_mejor: null },
            /* El Example completo: pregunta del banco + pasos + Desmos. `qid` se
               resuelve contra el banco REAL en el navegador, así que esto también
               comprueba que una pregunta de verdad se puede pintar acá. */
            { id: 'w4', kind: 'material', titulo: 'How I want you to set up a system', cuerpo: 'Write both equations first.',
              spec: { latex: ['y=2x+1', 'y=-x+7'],
                      pasos: ['Name the two unknowns', 'Write one equation per sentence', 'Now solve'],
                      qid: (window.__QID_EJEMPLO || null) },
              vence: null, fecha: '2026-09-12', mis_intentos: 0, mi_mejor: null },
          ], error: null });
          if (name === 'sat_classwork_save') return Promise.resolve({ data: 'w5', error: null });
          if (name === 'sat_classwork_delete') return Promise.resolve({ data: null, error: null });
          if (name === 'sat_classwork_report') return Promise.resolve({ data: {
            kind: 'assignment',
            alumnos: [
              { nombre: 'Ana', email: 'ana@iae.edu', intentos: 3, mejor: 83, ultimo: '2026-09-15' },
              { nombre: 'Beto', email: 'beto@iae.edu', intentos: 1, mejor: 58, ultimo: '2026-09-14' },
              { nombre: 'Cami', email: 'cami@iae.edu', intentos: 0, mejor: null, ultimo: null },
            ],
            skills: [
              { sk: 'gt-circles', total: 24, ok: 9 },
              { sk: 'al-sys', total: 30, ok: 24 },
            ],
          }, error: null });
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
      b.getAttribute('data-act') || b.getAttribute('data-go') || b.getAttribute('data-tab') ||
      b.className.split(/\s+/).some(c => /^(btn-|mini|plan-op|an-|hist-review|set-|hnav-a|hs-)/.test(c));
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

    /* El inicio ahora son PESTAÑAS: se ve un grupo a la vez. Hay que recorrerlas
       todas o el chequeo de idioma solo mira una quinta parte de la pantalla. */
    const pestanas = await page.evaluate(() =>
      [...document.querySelectorAll('#set-sections .hnav-a')].map(b => b.getAttribute('data-tab')));
    check(`P1b el inicio tiene pestañas (${pestanas.length})`, pestanas.length >= 4, pestanas);
    for (const t of (pestanas.length ? pestanas : [null])) {
      if (t) {
        await page.evaluate(tab => {
          const b = document.querySelector('#set-sections .hnav-a[data-tab="' + tab + '"]');
          if (b) b.click();
        }, t);
        await sleep(450);
      }
      await page.evaluate(() => { document.querySelectorAll('details').forEach(d => { d.open = true; }); });
      await sleep(350);
      await mirar('inicio · ' + (t || 'todo'));
    }
    // se vuelve a la primera para el resto del recorrido
    await page.evaluate(() => {
      const b = document.querySelector('#set-sections .hnav-a');
      if (b) b.click();
    });
    await sleep(400);

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

    // se elige una pregunta REAL del banco para el ejemplo de la profesora
    await page.evaluate(() => {
      const q = Object.keys(window.SATAPP.QINDEX)
        .map(k => window.SATAPP.QINDEX[k])
        .filter(q => q.choices && q.expCorrect)[0];
      window.__QID_EJEMPLO = q ? q.id : null;
    });

    /* --- P13. Classroom: clases, trabajo tipado y el reporte --- */
    const aula = await page.evaluate(async () => {
      const esperar = ms => new Promise(r => setTimeout(r, ms));
      const b = document.querySelector('#set-sections .hnav-a[data-tab="clase"]');
      if (!b) return { sinPestana: true };
      b.click();
      await esperar(700);
      const r = {};

      // --- la lista de clases ---
      r.hayCrear = !!document.getElementById('cl-crear');       // solo profe
      r.hayUnirse = !!document.getElementById('cl-unirse');     // todos
      r.tarjetas = document.querySelectorAll('[data-clase]').length;
      r.muestraCodigo = !!document.querySelector('.cl-code');

      // --- entrar a la clase ---
      document.querySelector('[data-clase]').click();
      await esperar(700);
      r.trabajos = document.querySelectorAll('.cw-card').length;
      r.tipos = [...document.querySelectorAll('.cw-tag')].map(x => x.textContent);
      r.hayCompositor = !!document.getElementById('cw-guardar');
      r.chipsDeDestreza = document.querySelectorAll('[data-cw-skill]').length;
      r.cuatroTipos = document.querySelectorAll('.cw-kind').length;

      // el final que no se ha hecho ofrece Start; el ya hecho diría "one attempt"
      r.botonesStart = document.querySelectorAll('[data-cw-start]').length;
      r.materialConDesmos = !!document.querySelector('[data-cw-desmos]');

      // --- arrancar un warm-up ---
      const w1 = document.querySelector('[data-cw-start]');
      w1.click();
      await esperar(900);
      const st = window.SATAPP.getS();
      r.arranca = !!st;
      r.setId = st && st.set.id;
      r.n = st ? st.set.questions.length : 0;
      r.modo = st && st.mode;
      goHome();
      await esperar(400);
      return r;
    });
    check('P13 Classroom: la lista de clases se pinta', !aula.sinPestana && aula.tarjetas > 0, aula);
    check('P13b el profesor ve crear y todos ven unirse', aula.hayCrear && aula.hayUnirse, aula);
    check('P13c la clase del profesor muestra su código', aula.muestraCodigo, aula);
    check(`P13d el feed trae los cuatro tipos de trabajo (${aula.trabajos})`,
      aula.trabajos === 4 && ['Warm-up', 'Assignment', 'Final', 'Example'].every(t => (aula.tipos || []).indexOf(t) >= 0), aula);
    check('P13e el compositor ofrece los 4 tipos y las 30 destrezas oficiales',
      aula.cuatroTipos === 4 && aula.chipsDeDestreza === 30, aula);
    check('P13f un material con Desmos trae su botón', aula.materialConDesmos, aula);
    check('P13g arrancar un trabajo queda atado a él (cw-…)',
      aula.arranca && /^cw-/.test(aula.setId || '') && aula.n > 0, aula);

    /* --- P13h-k. lo que la profesora usa para ENSEÑAR --- */
    const ensena = await page.evaluate(async () => {
      const esperar = ms => new Promise(r => setTimeout(r, ms));
      document.querySelector('#set-sections .hnav-a[data-tab="clase"]').click();
      await esperar(600);
      // Classroom recuerda dónde estabas: si ya quedó DENTRO de la clase, la
      // lista no se repinta y no hay tarjeta que tocar. Se entra solo si hace falta.
      const tarjeta = document.querySelector('[data-clase]');
      if (tarjeta) { tarjeta.click(); await esperar(700); }
      const r = {
        hayPregunta: !!document.querySelector('.cw-ej-stem'),
        opciones: document.querySelectorAll('.cw-ej-ch li').length,
        // la respuesta NO puede verse antes de que la descubran
        tapada: (document.querySelector('.cw-ej-hide') || {}).hidden === true,
        pasos: document.querySelectorAll('.cw-pasos li').length,
        pasosVisibles: [...document.querySelectorAll('.cw-pasos li')].filter(x => !x.hidden).length,
      };
      const rev = document.querySelector('[data-cw-reveal]');
      if (rev) rev.click();
      await esperar(200);
      r.destapada = (document.querySelector('.cw-ej-hide') || {}).hidden === false;
      r.dice = ((document.querySelector('.cw-ej-key') || {}).textContent || '').trim();
      const bp = document.querySelector('[data-cw-paso]');
      if (bp) bp.click();
      await esperar(200);
      r.pasosTrasUnClic = [...document.querySelectorAll('.cw-pasos li')].filter(x => !x.hidden).length;
      r.botonCuenta = bp ? bp.textContent : '';
      // y el compositor le deja elegir la pregunta y escribir los pasos
      r.picker = !!document.getElementById('cw-ej-skill') && !!document.getElementById('cw-ej-q');
      r.cajaPasos = !!document.getElementById('cw-pasos');
      goHome();
      await esperar(300);
      return r;
    });
    check('P13h un Example pone una pregunta de verdad en el tablero',
      ensena.hayPregunta && ensena.opciones === 4, ensena);
    check('P13i la respuesta llega TAPADA y se descubre al pedirla',
      ensena.tapada && ensena.destapada && /Answer:/.test(ensena.dice), ensena);
    check('P13j los pasos salen de a uno, no todos de golpe',
      ensena.pasos === 3 && ensena.pasosVisibles === 1 && ensena.pasosTrasUnClic === 2, ensena);
    check('P13k y el compositor le deja elegir la pregunta y escribir los pasos',
      ensena.picker && ensena.cajaPasos, ensena);

    /* --- P15. el reporte: en qué falló la clase --- */
    const reporte = await page.evaluate(async () => {
      const esperar = ms => new Promise(r => setTimeout(r, ms));
      const b = document.querySelector('#set-sections .hnav-a[data-tab="clase"]');
      if (b) { b.click(); await esperar(600); }
      const c = document.querySelector('[data-clase]');
      if (c) { c.click(); await esperar(700); }
      const rep = document.querySelector('[data-cw-report]');
      if (!rep) return { sinBoton: true };
      rep.click();
      await esperar(800);
      // OJO: acotado a la zona del salón. Las otras vistas siguen en el DOM
      // (ocultas), así que un querySelectorAll global cuenta sus KPI y sus filas.
      const z = document.getElementById('class-body-zone');
      if (!z) return { sinZona: true };
      const txt = z.textContent || '';
      return {
        kpis: z.querySelectorAll('.akpi').length,
        barras: z.querySelectorAll('.bar-row').length,
        filas: z.querySelectorAll('.prog-table tbody tr').length,
        sinEntregar: z.querySelectorAll('tr.sin-entregar').length,
        nombraDestreza: /Circles/.test(txt),
        entregados: /2\/3/.test(txt),
        volver: !!document.getElementById('cl-volver'),
      };
    });
    check('P15 el reporte se pinta con sus KPI', !reporte.sinBoton && reporte.kpis === 2, reporte);
    check('P15b dice en qué destrezas falló la clase, por su nombre oficial',
      reporte.barras === 2 && reporte.nombraDestreza, reporte);
    check('P15c lista a los estudiantes, incluidos los que NO entregaron',
      reporte.filas === 3 && reporte.sinEntregar === 1, reporte);
    check('P15d cuenta bien cuántos entregaron', reporte.entregados, reporte);

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

    // --- P12. una barra con width puesto que mide 0 no se ve, y nada falla ---
    // Pasó en la vista de profesor: la barra estaba armada con <span>, y un
    // elemento en línea ignora width. El porcentaje salía al lado, correcto,
    // mientras la barra se veía vacía.
    const barras = [];
    for (const [abrir, sel, donde] of [
      ['openTeacher', '#teacher-domains', 'profesor'],
      ['openProgress', '#prog-body', 'progreso'],
    ]) {
      // hay que ENSEÑAR la vista antes de medir: un elemento oculto mide 0 y
      // daría un falso positivo en todas sus barras
      const abierta = await page.evaluate((fn, s) => {
        if (typeof window[fn] !== 'function') return false;
        window[fn]();
        return !!document.querySelector(s);
      }, abrir, sel);
      if (!abierta) continue;
      await sleep(500);
      const malas = await page.evaluate((s, d) => {
        const out = [];
        const raiz = document.querySelector(s);
        if (!raiz || raiz.closest('.hidden')) return out;
        raiz.querySelectorAll('.bar-fill').forEach(f => {
          const m = (f.getAttribute('style') || '').match(/width:\s*([\d.]+)%/);
          const pedido = m ? parseFloat(m[1]) : 0;
          if (!(pedido > 0)) return;
          if (f.getBoundingClientRect().width < 1) out.push(d + ' · pedía ' + pedido + '% y mide 0');
        });
        return out;
      }, sel, donde);
      barras.push(...malas);
    }
    check(`P12 ninguna barra de progreso se pinta vacía (${barras.length})`, barras.length === 0, barras.slice(0, 4));

    /* --- P14. la pregunta de confianza ---
       Cuatro promesas: se pregunta ANTES de revelar, solo en Drill, se guarda en
       el historial, y una acertada por adivinanza vuelve a la bolsa de repaso.
       La última es la que el estudiante lee en pantalla, así que tiene que ser
       verdad y no una frase bonita. */
    const conf = await page.evaluate(async () => {
      const r = {};
      const set = (window.SAT_SETS || []).find(s => (s.questions || []).length >= 3 && s.questions[0].type !== 'spr');
      if (!set) return { sinSet: true };

      // --- drill: pregunta antes de revelar ---
      startSession(set.id, 'drill');
      await new Promise(x => setTimeout(x, 250));
      document.querySelector('#view-app .choice').click();
      document.getElementById('btn-next').click();
      r.tiraAntesDeRevelar = !!document.querySelector('.conf-box');
      r.explicacionTodaviaNo = !document.querySelector('.drill-card');
      r.botonBloqueado = document.getElementById('btn-next').disabled;

      document.querySelector('[data-conf="guess"]').click();
      await new Promise(x => setTimeout(x, 200));
      r.explicacionTrasElegir = !!document.querySelector('.drill-card');
      const st = window.SATAPP.getS();
      const q0 = st.set.questions[0];
      r.confGuardada = st.conf[q0.id];
      r.tiempoMedido = (st.tiempos[q0.id] || 0) > 0;

      // se contesta el resto bien y se termina, para mirar el historial
      st.set.questions.forEach((q, i) => {
        if (i === 0) return;
        st.answers[q.id] = q.type === 'spr' ? String(q.answer) : q.correct;
        st.conf[q.id] = 'sure';
        st.checked[q.id] = true;
      });
      // la primera se deja ACERTADA pero adivinada
      st.answers[q0.id] = q0.type === 'spr' ? String(q0.answer) : q0.correct;
      finishSession(false);
      await new Promise(x => setTimeout(x, 400));

      const h = window.SATAPP.store.get('satapp_history_v1__u-pantallas', []);
      const ult = h[h.length - 1] || {};
      const pq = (ult.perQuestion || []).find(p => p.qid === q0.id) || {};
      r.confEnHistorial = pq.conf;
      r.msEnHistorial = (pq.ms || 0) > 0;
      r.acertoAdivinando = pq.ok === true && pq.conf === 'guess';
      r.vuelveAlRepaso = (window.SATAPP.missedPool() || []).some(q => q.id === q0.id);
      r.cajaResultados = !!document.querySelector('#res-conf .res-conf-box');

      // --- examen: NO se pregunta, no se rompe la simulación ---
      goHome();
      await new Promise(x => setTimeout(x, 200));
      startSession(set.id, 'exam');
      await new Promise(x => setTimeout(x, 250));
      document.querySelector('#view-app .choice').click();
      document.getElementById('btn-next').click();
      await new Promise(x => setTimeout(x, 200));
      r.examenNoPregunta = !document.querySelector('.conf-box');
      goHome();
      return r;
    });
    check('P14 en Drill se pregunta la confianza ANTES de revelar',
      conf.tiraAntesDeRevelar && conf.explicacionTodaviaNo && conf.botonBloqueado, conf);
    check('P14b al elegirla aparece la explicación', conf.explicacionTrasElegir && conf.confGuardada === 'guess', conf);
    check('P14c se mide el tiempo de la pregunta', conf.tiempoMedido, conf);
    check('P14d confianza y tiempo quedan en el historial',
      conf.confEnHistorial === 'guess' && conf.msEnHistorial, conf);
    check('P14e una acertada por adivinanza VUELVE a la bolsa de repaso',
      conf.acertoAdivinando && conf.vuelveAlRepaso, conf);
    check('P14f los resultados dicen lo que el porcentaje esconde', conf.cajaResultados, conf);
    check('P14g en Examen NO se pregunta (no rompe la simulación)', conf.examenNoPregunta, conf);

    /* --- P16. Fast Pace: la pregunta es cuánto tiempo hay, no cuántas preguntas --- */
    const fp = await page.evaluate(async () => {
      const esperar = ms => new Promise(r => setTimeout(r, ms));
      const b = document.querySelector('#set-sections .hnav-a[data-tab="fast"]');
      if (!b) return { sinPestana: true };
      b.click();
      await esperar(600);
      const z = () => document.querySelector('.fp-wrap');
      const r = {
        pregunta: !!document.querySelector('.fp-ask'),
        chips: document.querySelectorAll('[data-fastmin]').length,
        minPorDefecto: window.SATAPP.fastMin(),
        reco: document.querySelectorAll('.fp-reco').length,
        // toda tarjeta explica POR QUÉ está ahí: una recomendación sin motivo
        // no se distingue de un botón cualquiera
        conMotivo: [...document.querySelectorAll('.fp-card')].every(c => (c.querySelector('.fp-por') || {}).textContent),
        tarjetas: document.querySelectorAll('.fp-card').length,
        pace: !!document.querySelector('[data-fastpace="math"]'),
      };
      // cambiar los minutos repinta SOLO la caja y vuelve a atar los handlers
      const antes = z().outerHTML.length;
      document.querySelector('[data-fastmin="3"]').click();
      await esperar(300);
      r.cambia = window.SATAPP.fastMin() === 3;
      r.reatado = !!z() && z().querySelector('[data-fastmin="3"]').classList.contains('on');
      r.siguePintado = !!antes && !!z();
      // y arrancar el Pace Trainer deja el presupuesto por pregunta en la sesión
      document.querySelector('[data-fastpace="math"]').click();
      await esperar(900);
      const st = window.SATAPP.getS();
      r.paceArranca = !!st;
      r.paceSeg = st && st.set.paceSeg;
      r.paceSec = st && st.set.section;
      const chip = document.getElementById('pace-chip');
      r.chipVisible = !!chip && !chip.classList.contains('hidden');
      r.chipDice = chip ? chip.textContent : '';
      goHome();
      await esperar(400);
      return r;
    });
    check('P16 Fast Pace pregunta cuánto tiempo hay', !fp.sinPestana && fp.pregunta && fp.chips === 4, fp);
    check('P16b recomienda UNA sola cosa y explica por qué', fp.reco === 1 && fp.conMotivo && fp.tarjetas >= 4, fp);
    check('P16c cambiar los minutos repinta y deja los botones vivos',
      fp.cambia && fp.reatado && fp.siguePintado, fp);
    check('P16d el Pace Trainer corre al ritmo real del examen (95 s en math)',
      fp.paceArranca && fp.paceSeg === 95 && fp.paceSec === 'math', fp);
    check('P16e y muestra el reloj de ESA pregunta', fp.chipVisible && /left on this one|over/.test(fp.chipDice || ''), fp);

    /* --- P17. cada pestaña muestra lo suyo, ni de más ni de menos --- */
    const tabs = await page.evaluate(async () => {
      const esperar = ms => new Promise(r => setTimeout(r, ms));
      const ir = async t => {
        document.querySelector(`#set-sections .hnav-a[data-tab="${t}"]`).click();
        await esperar(600);
        return document.getElementById('set-sections');
      };
      const cuenta = el => ({
        destrezas: el.querySelectorAll('.tx-row').length,
        dominios: el.querySelectorAll('.tx-dom').length,
        temasCamino: el.querySelectorAll('[data-study-topic], .study-card').length,
      });
      const m = cuenta(await ir('math'));
      const v = cuenta(await ir('verbal'));
      const d = cuenta(await ir('daily'));
      const S = window.SATAPP.SAT_SKILLS;
      goHome();
      await esperar(300);
      return { m, v, d,
        oficialesMath: S.filter(x => x.sec === 'math').length,
        oficialesRw: S.filter(x => x.sec === 'rw').length };
    });
    check(`P17 Math Topics muestra las ${tabs.oficialesMath} destrezas oficiales de math, en sus 4 dominios`,
      tabs.m.destrezas === tabs.oficialesMath && tabs.m.dominios === 4, tabs);
    check(`P17b Verbal Topics muestra las ${tabs.oficialesRw} de verbal, en sus 4 dominios`,
      tabs.v.destrezas === tabs.oficialesRw && tabs.v.dominios === 4, tabs);
    check('P17c Daily ya NO arrastra el camino de dominio entero',
      tabs.d.destrezas === 0 && tabs.d.temasCamino === 0, tabs);
    check('P17d y ese camino sí está, repartido en las dos pestañas de temas',
      tabs.m.temasCamino > 0 && tabs.v.temasCamino > 0, tabs);

    check('P9 ninguna pantalla lanzó un error de JavaScript', errs.length === 0, errs.slice(0, 4));

    /* --- 8. los tres aparatos con los que se va a usar esto ---
       Celular, iPad y computadora, y el iPad en las DOS orientaciones: un
       colegio que reparte tabletas las reparte con teclado y la gente las gira.
       En cada ancho se mira lo mismo —que nada se salga de la pantalla— y
       además que lo que hay que tocar se pueda tocar: 44 px es el mínimo que
       Apple y Google piden, y debajo de eso el dedo falla y el estudiante
       culpa a la app. */
    const APARATOS = [
      [320, 780, 'celular chico'], [375, 812, 'iPhone'], [414, 896, 'iPhone grande'],
      [768, 1024, 'iPad vertical'], [1024, 768, 'iPad horizontal'],
      [1180, 820, 'iPad Pro'], [1440, 950, 'computadora'],
    ];
    for (const [w, h, nombre] of APARATOS) {
      await page.setViewport({ width: w, height: h });
      await page.evaluate(() => { if (typeof showHome === 'function') showHome(); });
      await sleep(500);
      const vista = await page.evaluate(() => {
        const visible = e => {
          const r = e.getBoundingClientRect();
          return r.width > 0 && r.height > 0 && !e.closest('.hidden');
        };
        const chicos = [...document.querySelectorAll('#set-sections button, #set-sections a[href], #set-sections input')]
          .filter(visible)
          .filter(e => { const r = e.getBoundingClientRect(); return r.height < 30 || (r.width < 30 && r.height < 44); })
          .slice(0, 5).map(e => { const r = e.getBoundingClientRect();
            return (e.textContent || e.getAttribute('aria-label') || e.tagName).trim().slice(0, 22) +
              ' [' + Math.round(r.width) + '×' + Math.round(r.height) + ' ' + (e.className||'').toString().split(' ')[0] + ']'; });
        return {
          scroll: document.documentElement.scrollWidth,
          ancho: window.innerWidth,
          culpables: [...document.querySelectorAll('body *')]
            .filter(e => e.getBoundingClientRect().right > window.innerWidth + 1 && !e.closest('.hidden'))
            .slice(0, 4).map(e => e.tagName + '.' + (e.className || '').toString().split(' ')[0]),
          chicos,
          nav: document.querySelectorAll('#set-sections .hnav-a').length,
        };
      });
      check(`P10 ${nombre} (${w}×${h}): nada se sale de la pantalla`,
        vista.scroll <= vista.ancho + 1, vista);
      check(`P10b ${nombre}: las ocho pestañas siguen alcanzables`, vista.nav === 8, vista);
      check(`P10c ${nombre}: nada que tocar es más chico que el dedo`,
        vista.chicos.length === 0, vista);
    }
    /* --- 8b. la pantalla donde se CONTESTA, en los mismos aparatos ---
       El inicio se mira unos segundos; la pantalla de la pregunta es donde el
       estudiante pasa el 90 % del tiempo. Si una opción de respuesta es difícil
       de tocar en el teléfono, no es una molestia: es una respuesta mal marcada
       en una práctica que después miente sobre lo que sabe. */
    const APARATOS_Q = [[375, 812, 'iPhone'], [768, 1024, 'iPad vertical'], [1440, 950, 'computadora']];
    for (const [w, h, nombre] of APARATOS_Q) {
      await page.setViewport({ width: w, height: h });
      const pantalla = await page.evaluate(async () => {
        const esperar = ms => new Promise(r => setTimeout(r, ms));
        goHome();
        await esperar(300);
        const set = window.SATAPP.SETS()[0];
        window.SATAPP.startSession(set.id, 'drill');
        await esperar(700);
        const vis = e => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
        const ops = [...document.querySelectorAll('#pane-question .choice, #pane-question label, .choice')].filter(vis);
        const chicos = ops.filter(e => e.getBoundingClientRect().height < 44)
          .slice(0, 3).map(e => (e.textContent || '').trim().slice(0, 20) + ' [' +
            Math.round(e.getBoundingClientRect().height) + 'px]');
        const r = {
          enPregunta: !document.getElementById('view-app').classList.contains('hidden'),
          opciones: ops.length,
          chicos,
          scroll: document.documentElement.scrollWidth,
          ancho: window.innerWidth,
          // el reloj y el botón de siguiente tienen que estar a la vista sin buscar
          reloj: !!document.getElementById('timer'),
        };
        goHome();
        await esperar(300);
        return r;
      });
      check(`P18 ${nombre}: la pantalla de la pregunta no desborda`,
        pantalla.enPregunta && pantalla.scroll <= pantalla.ancho + 1, pantalla);
      check(`P18b ${nombre}: las opciones de respuesta se pueden tocar (44px)`,
        pantalla.opciones > 0 && pantalla.chicos.length === 0, pantalla);
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

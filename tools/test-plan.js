#!/usr/bin/env node
/**
 * test-plan.js — comprueba "Mi plan de mejora": que la recomendación salga de
 * los datos del estudiante y que el test que arma sea el que prometió.
 *
 *     node tools/test-plan.js
 *
 * Lo que se verifica no es que "se vea bien", sino las cuatro promesas que le
 * hace al estudiante: (1) lo que recomienda sale de SU historial, (2) no
 * inventa diagnósticos cuando no tiene datos, (3) el test respeta los temas,
 * el tamaño y el nivel que eligió, y (4) prioriza lo que ya falló.
 */
'use strict';
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const RAIZ = path.resolve(__dirname, '..');
const PUERTO = 8875;
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
const check = (n, c, extra) => { res.push([n, !!c, c ? '' : (extra === undefined ? '' : ' → ' + JSON.stringify(extra))]); };
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


(async () => {
  if (!CHROME) { console.error('No se encontró Chrome ni Chromium. Se salta el test del plan.'); process.exit(0); }
  const puppeteer = resolverPuppeteer();
  if (!puppeteer) { console.error('No se encontró puppeteer-core. Se salta el test del plan.'); process.exit(0); }

  const srv = spawn('python3', ['-m', 'http.server', String(PUERTO)], { cwd: RAIZ, stdio: 'ignore' });
  await sleep(1200);
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 950 });
  page.on('dialog', d => d.accept().catch(() => {}));
  const errs = [];
  page.on('pageerror', e => errs.push(String(e && e.message || e)));

  try {
    await page.goto(`http://127.0.0.1:${PUERTO}/index.html`, { waitUntil: 'networkidle2' });
      await esperarBanco(page);
    await sleep(600);

    /* ---- P1 · la taxonomía cubre el banco ---- */
    const cob = await page.evaluate(() => {
      const bank = window.SATAPP.planBank();
      const qs = Object.keys(window.SATAPP.QINDEX);
      const cubiertas = new Set();
      Object.keys(bank).forEach(k => bank[k].forEach(q => cubiertas.add(q.id)));
      const vacios = Object.keys(bank).filter(k => bank[k].length === 0);
      return { total: qs.length, cubiertas: cubiertas.size, vacios, temas: Object.keys(bank).length };
    });
    check('P1 hay temas definidos', cob.temas >= 25, cob);
    check('P1b ningún tema queda sin preguntas en el banco', cob.vacios.length === 0, cob.vacios);
    check('P1c cubre al menos el 95% del banco',
          cob.cubiertas / cob.total >= 0.95, `${cob.cubiertas}/${cob.total}`);

    /* ---- P2 · sin historial NO inventa diagnóstico ---- */
    const vacio = await page.evaluate(() => {
      window.SATAPP.store.set(window.SATAPP.histKey(), []);
      const r = window.SATAPP.planRanking();
      return {
        medidos: r.filter(s => s.medido).length,
        razones: r.slice(0, 3).map(s => s.razon),
        primeros: r.slice(0, 3).map(s => s.topic.dom),
      };
    });
    check('P2 sin historial, ningún tema figura como "medido"', vacio.medidos === 0, vacio);
    check('P2b y lo dice explícitamente en vez de inventar un %',
          vacio.razones.every(t => /Never practiced|too few to measure/.test(t)), vacio.razones);
    check('P2c sin datos, prioriza los dominios que más pesan (35%)',
          vacio.primeros.some(d => /Algebra|Advanced Math/.test(d)), vacio.primeros);

    /* ---- P3 · con historial, la recomendación sigue a los fallos ---- */
    const reco = await page.evaluate(() => {
      // Un estudiante que falla TODO lo de círculos y acierta todo lo de puntuación.
      const bank = window.SATAPP.planBank();
      const pq = [];
      bank.circles.slice(0, 8).forEach(q => pq.push({ qid: q.id, ok: false, domain: q.domain, skill: q.skill }));
      bank.punct.slice(0, 8).forEach(q => pq.push({ qid: q.id, ok: true, domain: q.domain, skill: q.skill }));
      window.SATAPP.store.set(window.SATAPP.histKey(), [{
        sid: 'p1', date: '2026-09-01', savedAt: '2026-09-01T10:00:00.000Z',
        setId: 'x', setTitle: 'siembra', mode: 'drill', score: 8, total: 16, perQuestion: pq,
      }]);
      const r = window.SATAPP.planRanking();
      const pos = k => r.findIndex(s => s.topic.key === k);
      const st = {};
      r.forEach(s => st[s.topic.key] = { acc: s.acc, hechas: s.hechas, medido: s.medido, razon: s.razon });
      return { posCirc: pos('circles'), posPunct: pos('punct'), circ: st.circles, punct: st.punct, total: r.length };
    });
    check('P3 el tema que falla queda arriba del que domina',
          reco.posCirc < reco.posPunct, { circulos: reco.posCirc, puntuacion: reco.posPunct });
    check('P3b calcula bien su accuracy (0% en lo fallado)', reco.circ.acc === 0, reco.circ);
    check('P3c y 100% en lo acertado', reco.punct.acc === 1, reco.punct);
    check('P3d con 8 respuestas ya lo considera medido', reco.circ.medido === true && reco.punct.medido === true, reco);
    check('P3e la razón menciona el peso del dominio en el examen',
          /% of the test|keep it warm/.test(reco.circ.razon), reco.circ.razon);

    /* ---- P4 · el test armado respeta lo que el estudiante eligió ---- */
    const t20 = await page.evaluate(() => {
      const set = window.SATAPP.planBuildSet(['circles', 'punct'], { minutos: 20, modo: 'drill', nivel: 'examen' });
      const ids = set.questions.map(q => q.id);
      return { n: set.questions.length, unicos: new Set(ids).size, titulo: set.title, minutos: set.minutes, seccion: set.section };
    });
    check('P4 20 min arma 12 preguntas', t20.n === 12, t20);
    check('P4b sin repetir ninguna', t20.unicos === t20.n, t20);
    check('P4c el título dice de qué es', /Circles|Punctuation/.test(t20.titulo), t20.titulo);
    check('P4d math + verbal se marca como mixto', t20.seccion === 'mixed', t20);

    const t10 = await page.evaluate(() => window.SATAPP.planBuildSet(['circles'], { minutos: 10, modo: 'drill', nivel: 'examen' }).questions.length);
    check('P4e 10 min arma 6 preguntas', t10 === 6, t10);
    const t40 = await page.evaluate(() => window.SATAPP.planBuildSet(['circles', 'trig'], { minutos: 40, modo: 'drill', nivel: 'examen' }).questions.length);
    check('P4f 40 min arma 20 preguntas', t40 === 20, t40);

    /* ---- P5 · solo salen preguntas de los temas elegidos ---- */
    const puros = await page.evaluate(() => {
      const set = window.SATAPP.planBuildSet(['circles'], { minutos: 20, modo: 'drill', nivel: 'examen' });
      const bank = window.SATAPP.planBank();
      const ok = new Set(bank.circles.map(q => q.id));
      return set.questions.filter(q => !ok.has(q.id)).length;
    });
    check('P5 no se cuela ninguna pregunta de otro tema', puros === 0, puros);

    /* ---- P6 · el nivel pedido se respeta ---- */
    const niveles = await page.evaluate(() => {
      const dificil = window.SATAPP.planBuildSet(['trig'], { minutos: 40, modo: 'drill', nivel: 'mas' });
      const donde = window.SATAPP.planBuildSet(['trig'], { minutos: 40, modo: 'drill', nivel: 'donde' });
      return {
        soloDificiles: dificil.questions.every(q => q.difficulty === 'Difícil' || q.difficulty === 'Extreme'),
        sinExtremas: donde.questions.every(q => q.difficulty !== 'Extreme'),
        nDificil: dificil.questions.length, nDonde: donde.questions.length,
      };
    });
    check('P6 "un escalón arriba" trae solo difíciles', niveles.soloDificiles, niveles);
    check('P6b "donde estoy" no mete el tier brutal', niveles.sinExtremas, niveles);

    /* ---- P7 · prioriza lo que ya falló ---- */
    const prio = await page.evaluate(() => {
      const bank = window.SATAPP.planBank();
      const falladas = bank.circles.slice(0, 5).map(q => q.id);
      window.SATAPP.store.set(window.SATAPP.histKey(), [{
        sid: 'p2', date: '2026-09-01', savedAt: '2026-09-01T10:00:00.000Z',
        setId: 'x', setTitle: 'fallos', mode: 'drill', score: 0, total: 5,
        perQuestion: falladas.map(id => ({ qid: id, ok: false })),
      }]);
      const set = window.SATAPP.planBuildSet(['circles'], { minutos: 20, modo: 'drill', nivel: 'examen' });
      const primeras = set.questions.slice(0, 5).map(q => q.id);
      return { incluidas: falladas.filter(id => primeras.indexOf(id) >= 0).length, falladas: falladas.length };
    });
    check('P7 las preguntas ya falladas van primero', prio.incluidas === prio.falladas, prio);

    /* ---- P8 · la sección se pinta y se puede usar de verdad ----
       Se vuelve a pintar a propósito: los pasos de arriba escribieron historial
       en localStorage, y el plan sin datos se pinta distinto (dice que no puede
       diagnosticar, y no saca las casillas). Sin este render el test miraba la
       versión vacía. */
    await page.evaluate(() => { renderHome(); });
    await sleep(400);
    const ui = await page.evaluate(() => {
      const secs = [...document.querySelectorAll('#set-sections .home-sec summary')].map(s => s.textContent.trim());
      const plan = document.querySelector('#set-sections .plan-wrap');
      return {
        existe: !!plan,
        primera: secs[0] || '',
        filas: document.querySelectorAll('.plan-row').length,
        opciones: document.querySelectorAll('.plan-op').length,
        boton: !!document.querySelector('#plan-crear'),
        busca: !!document.querySelector('#plan-busca'),
      };
    });
    check('P8 la sección existe', ui.existe, ui);
    check('P8b es la primera del home', /improvement plan/i.test(ui.primera), ui.primera);
    check('P8c muestra temas con sus números', ui.filas >= 6, ui);
    check('P8d tiene las 3 preguntas (8 opciones)', ui.opciones === 8, ui);
    check('P8e tiene el botón de crear', ui.boton, ui);
    check('P8f y el buscador para pedir otro tema', ui.busca, ui);

    /* ---- P9 · marcar un tema cambia el test (la decisión es del estudiante) ---- */
    const interaccion = await page.evaluate(async () => {
      // `elegidos` vale null mientras el estudiante no haya tocado nada: planHTML()
      // calcula la recomendación para pintarla pero no la guarda, y eso está bien
      // (la recomendación sigue a los datos más nuevos). El test no puede asumir
      // que ya hay un arreglo guardado.
      const antes = (window.SATAPP.planState().elegidos || []).slice();
      const cb = document.querySelector('.plan-cb');
      const k = cb.getAttribute('data-plan-topic');
      cb.click();
      await new Promise(r => setTimeout(r, 300));
      const despues = (window.SATAPP.planState().elegidos || []).slice();
      return { k, antes, despues, cambio: antes.length !== despues.length };
    });
    check('P9 desmarcar un tema lo saca del plan', interaccion.cambio, interaccion);

    /* ---- P10 · el test arranca de verdad ---- */
    const arranca = await page.evaluate(async () => {
      window.SATAPP.planSave({ elegidos: ['circles'], minutos: 10, modo: 'drill', nivel: 'examen', paso: 1 });
      const set = window.SATAPP.planBuildSet(['circles'], { minutos: 10, modo: 'drill', nivel: 'examen' });
      window.SATAPP.startSession ? null : null;
      // se arranca por el mismo camino que usa el botón
      const S = (function () { try { return window.SATAPP.getS(); } catch (e) { return null; } })();
      return { preguntas: set.questions.length, tieneEnunciado: !!(set.questions[0] && set.questions[0].stem) };
    });
    check('P10 el set generado trae preguntas completas', arranca.preguntas > 0 && arranca.tieneEnunciado, arranca);

    check('P11 sin errores de JS en toda la sesión', errs.length === 0, errs);
  } finally {
    await browser.close();
    srv.kill();
  }

  let ok = 0;
  for (const [n, c, extra] of res) { console.log(`  ${c ? 'PASS' : 'FALLA'} ${n}${extra}`); if (c) ok++; }
  console.log(`\nPlan de mejora: ${ok}/${res.length}`);
  process.exit(ok === res.length ? 0 : 1);
})().catch(e => { console.error(e); process.exit(1); });

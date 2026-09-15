#!/usr/bin/env node
/**
 * test-pwa.js — que se pueda instalar en el teléfono y que abra sin internet.
 *
 *     node tools/test-pwa.js
 *
 * Esto lo va a usar un colegio desde el celular, y el wifi de un colegio se cae.
 * Dos promesas que hay que poder sostener:
 *   1. "Agregar a pantalla de inicio" produce una app de verdad — nombre, icono,
 *      color, pantalla completa — y no un acceso directo al navegador.
 *   2. Abrirla sin señal muestra la app, no la pantalla del dinosaurio.
 *
 * Se comprueban las dos de verdad: se lee el manifest y sus iconos byte a byte,
 * se espera a que el service worker tome el control, y después se CORTA la red
 * y se recarga.
 *
 * Sin Chrome o sin puppeteer-core se salta con código 0, igual que el resto.
 */
'use strict';
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const RAIZ = path.resolve(__dirname, '..');
const PUERTO = 8877;
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
const check = (n, c, extra) => { res.push([n, !!c, c ? '' : (extra === undefined ? '' : ' → ' + JSON.stringify(extra).slice(0, 300))]); };
const sleep = ms => new Promise(r => setTimeout(r, ms));

/** Las dimensiones reales de un PNG, leídas de su cabecera IHDR. */
function tamPNG(abs) {
  const b = fs.readFileSync(abs);
  if (b.length < 24 || b.readUInt32BE(0) !== 0x89504e47) return null;
  return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
}

(async () => {
  if (!CHROME) { console.error('No se encontró Chrome ni Chromium. Se salta el test de PWA.'); process.exit(0); }
  const puppeteer = resolverPuppeteer();
  if (!puppeteer) { console.error('Se salta el test de PWA.'); process.exit(0); }

  /* ---------- 1. el manifest y sus iconos, en disco ---------- */
  const mfPath = path.join(RAIZ, 'manifest.webmanifest');
  check('W1 existe manifest.webmanifest', fs.existsSync(mfPath));
  let mf = null;
  if (fs.existsSync(mfPath)) {
    try { mf = JSON.parse(fs.readFileSync(mfPath, 'utf8')); }
    catch (e) { check('W2 el manifest es JSON válido', false, e.message); }
  }
  if (mf) {
    check('W2 el manifest es JSON válido', true);
    check('W3 tiene name y short_name', !!mf.name && !!mf.short_name, { name: mf.name, short: mf.short_name });
    check('W3b short_name entra en la pantalla de inicio (≤12)', (mf.short_name || '').length <= 12, mf.short_name);
    check('W4 display standalone (app, no pestaña)', mf.display === 'standalone', mf.display);
    check('W5 start_url y scope relativos', /^\.?\//.test(mf.start_url || '') && /^\.?\//.test(mf.scope || ''),
      { start: mf.start_url, scope: mf.scope });
    check('W6 theme_color y background_color', /^#[0-9a-f]{6}$/i.test(mf.theme_color || '') && /^#[0-9a-f]{6}$/i.test(mf.background_color || ''),
      { theme: mf.theme_color, bg: mf.background_color });

    const iconos = mf.icons || [];
    const faltan = [], malos = [];
    iconos.forEach(i => {
      const abs = path.join(RAIZ, i.src);
      if (!fs.existsSync(abs)) return faltan.push(i.src);
      if (!/\.png$/i.test(i.src)) return;
      const t = tamPNG(abs);
      const [w, h] = (i.sizes || '').split('x').map(Number);
      if (!t || t.w !== w || t.h !== h) malos.push(i.src + ': dice ' + i.sizes + ' y mide ' + (t ? t.w + 'x' + t.h : '?'));
    });
    check('W7 todos los iconos del manifest existen', faltan.length === 0, faltan);
    check('W8 y miden lo que dicen medir', malos.length === 0, malos);
    const tiene = t => iconos.some(i => (i.sizes || '').indexOf(t) === 0);
    check('W9 hay icono de 192 y de 512', tiene('192') && tiene('512'), iconos.map(i => i.sizes));
    check('W10 hay un maskable (Android lo recorta en círculo)',
      iconos.some(i => /maskable/.test(i.purpose || '')), iconos.map(i => i.purpose || 'any'));
  }
  check('W11 existe apple-touch-icon.png de 180', (function () {
    const a = path.join(RAIZ, 'apple-touch-icon.png');
    if (!fs.existsSync(a)) return false;
    const t = tamPNG(a);
    return t && t.w === 180 && t.h === 180;
  })());

  /* ---------- 2. la app, en el navegador ---------- */
  const srv = spawn('python3', ['-m', 'http.server', String(PUERTO)], { cwd: RAIZ, stdio: 'ignore' });
  await sleep(1200);
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  page.on('dialog', d => d.accept().catch(() => {}));

  try {
    await page.goto(`http://127.0.0.1:${PUERTO}/`, { waitUntil: 'networkidle2', timeout: 25000 });

    const cabeza = await page.evaluate(() => ({
      manifest: !!document.querySelector('link[rel="manifest"]'),
      apple: !!document.querySelector('link[rel="apple-touch-icon"]'),
      icono: !!document.querySelector('link[rel="icon"]'),
      theme: (document.querySelector('meta[name="theme-color"]') || {}).content || '',
      appleCapable: (document.querySelector('meta[name="apple-mobile-web-app-capable"]') || {}).content || '',
      viewportFit: /viewport-fit=cover/.test((document.querySelector('meta[name=viewport]') || {}).content || ''),
    }));
    check('W12 el HTML enlaza el manifest', cabeza.manifest, cabeza);
    check('W13 y el apple-touch-icon', cabeza.apple, cabeza);
    check('W14 theme-color puesto', /^#[0-9a-f]{6}$/i.test(cabeza.theme), cabeza.theme);
    check('W15 iOS lo abre en pantalla completa', cabeza.appleCapable === 'yes', cabeza.appleCapable);
    check('W16 viewport-fit=cover (no se corta bajo el notch)', cabeza.viewportFit, cabeza);

    // el service worker toma el control
    await page.waitForFunction(
      () => navigator.serviceWorker && navigator.serviceWorker.controller,
      { timeout: 20000 }
    ).then(() => check('W17 el service worker toma el control', true))
     .catch(e => check('W17 el service worker toma el control', false, e.message));

    const cacheado = await page.evaluate(async () => {
      const ns = await caches.keys();
      if (!ns.length) return { claves: [], n: 0 };
      const c = await caches.open(ns[0]);
      const k = await c.keys();
      return { claves: ns, n: k.length, urls: k.slice(0, 4).map(r => new URL(r.url).pathname) };
    });
    check(`W18 hay algo en caché (${cacheado.n} recurso(s))`, cacheado.n > 0, cacheado);

    /* ---------- 3. sin internet ---------- */
    // Se corta la red DE VERDAD y se recarga: es la promesa que importa.
    await page.setOfflineMode(true);
    await page.reload({ waitUntil: 'domcontentloaded', timeout: 20000 }).catch(() => {});
    await sleep(1200);
    const sinRed = await page.evaluate(() => ({
      titulo: document.title,
      hayApp: !!document.getElementById('view-auth') || !!document.getElementById('view-home'),
      marca: !!document.querySelector('.brand-h, .brand h1'),
    }));
    check('W19 sin internet, la app sigue abriendo', sinRed.hayApp && /SAT Studio/.test(sinRed.titulo || ''), sinRed);
    await page.setOfflineMode(false);

  } catch (e) {
    check('EXCEPCIÓN durante el test de PWA', false, e.message);
  } finally {
    await browser.close().catch(() => {});
    srv.kill();
  }

  const fallos = res.filter(r => !r[1]);
  res.forEach(([n, ok, ex]) => console.log(`${ok ? '✅' : '❌'} ${n}${ex}`));
  console.log('');
  if (!fallos.length) { console.log(`Instalable y offline: ${res.length}/${res.length} ✓`); process.exit(0); }
  console.error(`✗ ${fallos.length} de ${res.length} en rojo`);
  process.exit(1);
})();

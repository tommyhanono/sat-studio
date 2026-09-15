/* sw.js — que la app abra sin internet.
 *
 * Por qué existe: esto lo va a usar un colegio entero desde el celular, y el
 * wifi de un colegio se cae. Sin service worker, quedarse sin señal en mitad de
 * un simulacro y recargar sin querer significa una pantalla en blanco. Con él,
 * la app abre igual y lo jugado sigue guardándose local (la cola durable ya
 * existía y sube sola al volver la conexión).
 *
 * Dos estrategias, a propósito distintas:
 *   · index.html  → RED PRIMERO. Si se cachea primero, el estudiante se queda
 *     congelado en una versión vieja y no hay forma de sacarlo de ahí.
 *   · sets/*.js e iconos → CACHÉ PRIMERO. Son inmutables en la práctica y son
 *     el 90 % del peso; pedirlos por red cada vez no aporta nada.
 *
 * Lo que NUNCA se toca: Supabase y los CDN. Esas van directo a la red siempre;
 * cachear respuestas de la API sería servirle a alguien el historial de otro.
 */
'use strict';

const VERSION = 'sat-studio-v1';
const NUCLEO = [
  './', './index.html', './manifest.webmanifest',
  './icon.svg', './icon-192.png', './icon-512.png', './apple-touch-icon.png',
];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(VERSION);
    // addAll falla entero si UN archivo falla; se piden de a uno para que un
    // 404 suelto no deje la app sin caché.
    await Promise.all(NUCLEO.map(u => c.add(u).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const viejas = (await caches.keys()).filter(k => k !== VERSION);
    await Promise.all(viejas.map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

const ES_BANCO = u => /\/sets\/[a-z0-9-]+\.js$/.test(u.pathname);
const ES_ICONO = u => /\.(png|svg|webmanifest)$/.test(u.pathname);

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // Supabase, Desmos, Chart.js: directo a la red

  if (ES_BANCO(url) || ES_ICONO(url)) {
    e.respondWith((async () => {
      const hit = await caches.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res && res.ok) (await caches.open(VERSION)).put(req, res.clone());
      return res;
    })());
    return;
  }

  // el resto (index.html sobre todo): red primero, caché como red de seguridad
  e.respondWith((async () => {
    try {
      const res = await fetch(req);
      if (res && res.ok) (await caches.open(VERSION)).put(req, res.clone());
      return res;
    } catch (err) {
      const hit = await caches.match(req) || await caches.match('./index.html');
      if (hit) return hit;
      throw err;
    }
  })());
});

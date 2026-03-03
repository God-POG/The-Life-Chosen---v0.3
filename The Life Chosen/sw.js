// sw.js — dynamic caching, no manual asset list
// Strategy:
//  - HTML navigations: network-first (fresh updates), fallback to cache
//  - Static assets (js/css/images/fonts): cache-first, fallback to network
//  - Any successful GET response gets cached automatically

const VERSION = "v1";
const CACHE_NAME = `tlc-dynamic-${VERSION}`;

// OPTIONAL: allow instant activation on update
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    // Clean up old caches
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => (k === CACHE_NAME ? null : caches.delete(k))));
    await self.clients.claim();
  })());
});

function isHtmlNavigation(request) {
  return request.mode === "navigate" ||
    (request.headers.get("accept") || "").includes("text/html");
}

function isCacheable(request) {
  // Only cache GET
  if (request.method !== "GET") return false;

  const url = new URL(request.url);

  // Only cache same-origin (your site). Avoid caching analytics, CDNs, etc.
  if (url.origin !== self.location.origin) return false;

  // Avoid caching service worker itself in weird states
  if (url.pathname.endsWith("/sw.js")) return false;

  return true;
}

async function cachePut(request, response) {
  if (!isCacheable(request)) return;
  if (!response || response.status !== 200) return;

  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response);
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const fresh = await fetch(request);
    // Cache a copy for offline
    cachePut(request, fresh.clone());
    return fresh;
  } catch (err) {
    const cached = await cache.match(request);
    if (cached) return cached;

    // Last resort: if navigation and nothing cached, show cached index.html if present
    if (isHtmlNavigation(request)) {
      const fallback = await cache.match("/index.html") || await cache.match("./index.html");
      if (fallback) return fallback;
    }
    throw err;
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if (cached) return cached;

  const fresh = await fetch(request);
  cachePut(request, fresh.clone());
  return fresh;
}

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Only handle same-origin GET requests
  if (!isCacheable(req)) return;

  // If user is navigating, prefer fresh HTML so you don't get "stuck" on old builds
  if (isHtmlNavigation(req)) {
    event.respondWith(networkFirst(req));
    return;
  }

  // For everything else (JS/CSS/images/data), prefer cached for speed/offline
  event.respondWith(cacheFirst(req));
});
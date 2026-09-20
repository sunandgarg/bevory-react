// Bevory Service Worker v10 - 2026
const CACHE_VERSION = 'bevory-v10';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const API_CACHE = `${CACHE_VERSION}-api`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;
const MEDIA_PASSTHROUGH_HEADERS = [
  'range',
  'if-range',
  'if-match',
  'if-none-match',
  'if-modified-since',
  'if-unmodified-since',
];

// Static assets to precache on install
const PRECACHE_URLS = [
  '/',
  '/favicon.ico',
  '/favicon-light.png',
  '/favicon-dark.png',
  '/favicon-32x32.png',
  '/favicon.png',
  '/apple-touch-icon.png',
  '/icon-192.png',
  '/icon-512.png',
  '/site.webmanifest',
  '/og-image.png',
  '/fonts/dm-sans-latin.woff2',
  '/fonts/bricolage-grotesque-latin.woff2',
  '/fonts/instrument-serif-latin.woff2',
  '/fonts/instrument-serif-italic-latin.woff2',
];

// Install — precache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith('bevory-') && key !== STATIC_CACHE && key !== API_CACHE && key !== IMAGE_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET
  if (request.method !== 'GET') return;

  // Let the browser perform conditional and partial media requests directly.
  // Cache Storage rejects 206 responses, and a cached 200 must never replace a
  // requested byte range or bypass an origin precondition.
  if (
    url.origin === self.location.origin &&
    (url.pathname.startsWith('/media/') || url.pathname.startsWith('/uploads/')) &&
    MEDIA_PASSTHROUGH_HEADERS.some((name) => request.headers.has(name))
  ) return;

  // Skip chrome-extension, analytics, auth endpoints
  if (
    url.protocol === 'chrome-extension:' ||
    url.hostname.includes('googletagmanager') ||
    url.hostname.includes('google-analytics') ||
    url.pathname.includes('/auth/') ||
    url.pathname.includes('token')
  ) return;

  // Strategy 1: cache only the anonymous public catalogue. Never cache account,
  // admin, upload, function, or future authenticated API responses.
  if (
    url.origin === self.location.origin &&
    url.pathname.startsWith('/api/catalog/') &&
    !request.headers.has('authorization')
  ) {
    event.respondWith(networkFirstWithCache(request, API_CACHE, 5 * 60 * 1000));
    return;
  }

  // Strategy 2: Content-addressed migrated media — Cache first
  if (
    url.origin === self.location.origin &&
    url.pathname.startsWith('/media/migrated-images/')
  ) {
    event.respondWith(cacheFirstWithNetwork(request, IMAGE_CACHE, 250, querylessCacheKey(request), event));
    return;
  }

  // Strategy 3: Mutable uploads — serve cached content while refreshing it.
  if (
    url.origin === self.location.origin && (
      url.pathname.startsWith('/media/images/') ||
      url.pathname.startsWith('/uploads/')
    )
  ) {
    const cacheKey = url.pathname.startsWith('/media/images/') ? querylessCacheKey(request) : request;
    event.respondWith(staleWhileRevalidate(request, IMAGE_CACHE, event, cacheKey));
    return;
  }

  // Strategy 4: Self-hosted fonts — Cache first (long-lived)
  if (url.origin === self.location.origin && url.pathname.startsWith('/fonts/')) {
    event.respondWith(cacheFirstWithNetwork(request, STATIC_CACHE, 40, request, event));
    return;
  }

  // Strategy 5: Documents — network first so policy and compliance changes are immediate
  if (url.origin === self.location.origin && request.destination === 'document') {
    event.respondWith(networkFirstDocument(request, STATIC_CACHE));
    return;
  }

  // Strategy 6: Hashed JS and CSS — stale while revalidate
  if (
    url.origin === self.location.origin &&
    (request.destination === 'script' || request.destination === 'style')
  ) {
    event.respondWith(staleWhileRevalidate(request, STATIC_CACHE, event));
    return;
  }
});

// --- Strategies ---

function querylessCacheKey(request) {
  const url = new URL(request.url);
  url.search = '';
  return new Request(url.toString(), { method: 'GET' });
}

async function networkFirstWithCache(request, cacheName, maxAge) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response.ok) {
      const clone = response.clone();
      // Store with timestamp header
      const headers = new Headers(clone.headers);
      headers.set('sw-cached-at', Date.now().toString());
      const body = await clone.blob();
      cache.put(request, new Response(body, { status: clone.status, statusText: clone.statusText, headers }));
    }
    return response;
  } catch {
    const cached = await cache.match(request);
    if (cached) {
      const cachedAt = parseInt(cached.headers.get('sw-cached-at') || '0');
      if (Date.now() - cachedAt < maxAge) return cached;
    }
    return new Response(JSON.stringify({ error: 'offline' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

async function networkFirstDocument(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request, { cache: 'no-cache' });
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return (await cache.match(request))
      || (await cache.match('/'))
      || new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
  }
}

async function trimCache(cache, maxEntries) {
  const keys = await cache.keys();
  if (keys.length <= maxEntries) return;
  await Promise.all(keys.slice(0, keys.length - maxEntries).map((key) => cache.delete(key)));
}

async function cacheFirstWithNetwork(request, cacheName, maxEntries, cacheKey = request, event) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(cacheKey);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok || response.type === 'opaque') {
      const cacheWrite = cache.put(cacheKey, response.clone())
        .then(() => trimCache(cache, maxEntries))
        .catch(() => undefined);
      if (event) event.waitUntil(cacheWrite);
      else await cacheWrite;
    }
    return response;
  } catch {
    return new Response('', { status: 503 });
  }
}

function staleWhileRevalidate(request, cacheName, event, cacheKey = request) {
  const statePromise = caches.open(cacheName).then(async (cache) => {
    const cached = await cache.match(cacheKey);
    const networkPromise = fetch(request);
    const cacheWritePromise = networkPromise
      .then((response) => response.ok ? cache.put(cacheKey, response.clone()) : undefined)
      .catch(() => undefined);
    const responsePromise = networkPromise.catch(() => cached);
    return { cached, cacheWritePromise, responsePromise };
  });

  const lifetimePromise = statePromise
    .then(({ cacheWritePromise }) => cacheWritePromise)
    .catch(() => undefined);
  event.waitUntil(lifetimePromise);

  return statePromise.then(({ cached, responsePromise }) => cached || responsePromise);
}

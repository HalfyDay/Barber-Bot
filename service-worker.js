const CACHE_VERSION = "v4";
const CACHE_PREFIX = "barber-bot-cache";
const CACHE_NAME = `${CACHE_PREFIX}-${CACHE_VERSION}`;
const OFFLINE_URL = "/panel/";
const STATIC_ASSETS = [
  OFFLINE_URL,
  "/panel/index.html",
  "/panel/styles.css",
  "/panel/manifest.webmanifest"
];
const BUNDLE_ASSET = "/panel/script.bundle.js";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

const isSameOrigin = (url) => url.origin === self.location.origin;
const shouldBypass = (url) => url.pathname.startsWith("/api");
const isAssetDestination = (destination) =>
  ["script", "style", "font", "image"].includes(destination);

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (!isSameOrigin(url) || shouldBypass(url)) return;

  if (url.pathname === BUNDLE_ASSET) {
    event.respondWith(networkFirst(request));
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request));
    return;
  }

  if (url.pathname === "/panel/styles.css") {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  if (isAssetDestination(request.destination)) {
    event.respondWith(staleWhileRevalidate(request));
  }
});

const networkFirst = async (request) => {
  try {
    const response = await fetch(request);
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cached = await caches.match(request, { ignoreSearch: true });
    return cached || caches.match(OFFLINE_URL);
  }
};

const cacheFirst = async (request) => {
  const cached = await caches.match(request, { ignoreSearch: true });
  if (cached) return cached;

  const response = await fetch(request);
  const cache = await caches.open(CACHE_NAME);
  cache.put(request, response.clone());
  return response;
};

const staleWhileRevalidate = async (request) => {
  const cachePromise = caches.open(CACHE_NAME);
  const cachedResponse = await caches.match(request);

  const networkPromise = fetch(request)
    .then((response) => {
      if (response && response.ok) {
        cachePromise.then((cache) => cache.put(request, response.clone()));
      }
      return response;
    })
    .catch(() => cachedResponse);

  return cachedResponse || networkPromise;
};

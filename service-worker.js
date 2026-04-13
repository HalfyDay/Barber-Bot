const CACHE_VERSION = "v10";
const CACHE_PREFIX = "brothershop-cache";
const CACHE_NAME = `${CACHE_PREFIX}-${CACHE_VERSION}`;
const SCOPE_PATH = new URL(self.registration.scope).pathname;
const normalizeScopePath = (pathname) =>
  pathname.endsWith("/") ? pathname : `${pathname}/`;
const APP_SCOPE = normalizeScopePath(SCOPE_PATH);
const resolveScopedPath = (assetPath = "") => new URL(assetPath, self.registration.scope).pathname;
const OFFLINE_URL = APP_SCOPE;
const STATIC_ASSETS = [
  OFFLINE_URL,
  resolveScopedPath("index.html"),
  resolveScopedPath("styles.css"),
  resolveScopedPath("manifest.webmanifest")
];
const BUNDLE_ASSET = resolveScopedPath("script.bundle.js");

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await Promise.all(
        STATIC_ASSETS.map(async (assetPath) => {
          try {
            const response = await fetch(assetPath, { cache: "no-cache" });
            if (!response || !response.ok) {
              throw new Error(`Failed to precache ${assetPath}: ${response?.status || "no-response"}`);
            }
            await cache.put(assetPath, response.clone());
          } catch (error) {
            console.warn("[service-worker] precache skipped:", assetPath, error);
          }
        })
      );
    })()
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
const isLoginAsset = (url) => url.pathname.startsWith("/login/");
const isPanelScope = (url) =>
  APP_SCOPE === "/" ? true : url.pathname === APP_SCOPE.slice(0, -1) || url.pathname.startsWith(APP_SCOPE);
const isAssetDestination = (destination) =>
  ["script", "style", "font", "image"].includes(destination);

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (!isSameOrigin(url) || shouldBypass(url) || !isPanelScope(url)) return;

  if (url.pathname === BUNDLE_ASSET) {
    event.respondWith(networkFirst(request));
    return;
  }

  if (isLoginAsset(url)) {
    event.respondWith(networkFirst(request));
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request));
    return;
  }

  if (url.pathname === resolveScopedPath("styles.css")) {
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


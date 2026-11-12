/* ==========================================================================
   sw.js — Service Worker PWA para La Odisea de la .IA
   Permite instalar la web como App y lectura offline básica del libro
   ========================================================================== */

const CACHE_NAME = "odisea-pwa-v6";
const PRECACHE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./homero-bundle.js",
  "./manifest.json",
  "./img/icon-192.png",
  "./img/icon-512.png",
  "./img/apple-touch-icon.png",
  "./img/portada-la-odisea-de-la-ia.webp",
  "./img/anticitera.webp"
];

// Instalación: precachear recursos estáticos esenciales
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activación: limpiar caches antiguas si hubiera
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: estrategia Network-First para páginas y scripts (siempre frescos), con fallback a caché
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Ignorar peticiones que no sean GET (como analítica o formularios)
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // No interceptar peticiones de audio por streaming con range headers si da problemas
  if (url.pathname.endsWith(".mp3")) {
    return;
  }

  // Para peticiones del mismo origen:
  if (url.origin === self.location.origin) {
    const isCodeOrDoc = req.mode === "navigate" || /\.(html|js|css)$/.test(url.pathname);
    event.respondWith(
      fetch(req, isCodeOrDoc ? { cache: "no-cache" } : undefined)
        .then((networkResp) => {
          if (networkResp && networkResp.status === 200) {
            const respClone = networkResp.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, respClone));
          }
          return networkResp;
        })
        .catch(() => {
          return caches.match(req).then((cachedResp) => {
            if (cachedResp) return cachedResp;
            if (req.mode === "navigate") {
              return caches.match("./index.html");
            }
            return new Response("Sin conexión", { status: 503, statusText: "Offline" });
          });
        })
    );
  }
});


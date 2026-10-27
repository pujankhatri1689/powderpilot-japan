// PowderPilot Japan Service Worker (Offline Mountain PWA)
// Enables offline access to resort trail maps, slope guides, and navigation when cell signal drops on chairlifts.

const CACHE_VERSION = "v1.1.0";
const CORE_CACHE = `powderpilot-core-${CACHE_VERSION}`;
const IMAGE_CACHE = `powderpilot-images-${CACHE_VERSION}`;
const RUNTIME_CACHE = `powderpilot-runtime-${CACHE_VERSION}`;

const PRECACHE_ASSETS = [
  "/",
  "/resorts",
  "/manifest.webmanifest",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable-512.png",
];

// Pre-cache core shell assets on install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CORE_CACHE)
      .then((cache) => {
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
      .catch((err) => {
        console.warn("[PowderPilot SW] Pre-cache warning:", err);
      })
  );
});

// Clear outdated caches on activation
self.addEventListener("activate", (event) => {
  const allowedCaches = [CORE_CACHE, IMAGE_CACHE, RUNTIME_CACHE];
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((name) => {
            if (!allowedCaches.includes(name)) {
              return caches.delete(name);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

/**
 * Image requests: cache-first with a background revalidation
 * ("stale-while-revalidate"). Served instantly from cache, then refreshed in
 * the background so updated resort photos / trail maps reach returning users.
 *
 * Note: `event.waitUntil` must be called synchronously during dispatch, so the
 * background refresh promise is created and registered before any await.
 */
function handleImageRequest(event) {
  const networkUpdate = fetch(event.request)
    .then((response) => {
      if (response && response.status === 200) {
        return caches
          .open(IMAGE_CACHE)
          .then((cache) => cache.put(event.request, response.clone()))
          .then(() => response);
      }
      return response;
    })
    .catch(() => null);

  // Keep the worker alive while the background refresh completes.
  event.waitUntil(networkUpdate.then(() => undefined));

  event.respondWith(
    caches.open(IMAGE_CACHE).then(async (cache) => {
      const cached = await cache.match(event.request);
      if (cached) return cached;
      const fresh = await networkUpdate;
      return fresh || Response.error();
    })
  );
}

// Fetch routing strategies
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only handle HTTP/HTTPS GET requests
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // 1. Trail maps, resort photos, icons AND Next.js optimized images -> Cache First + revalidate
  //    `/_next/image` must be handled here: it has no file extension in the path,
  //    so previously the optimized hero/card images were never cached and broke offline.
  if (
    url.pathname === "/_next/image" ||
    url.pathname.startsWith("/trail-maps/") ||
    url.pathname.startsWith("/icons/") ||
    /\.(jpg|jpeg|png|webp|avif|svg|ico)$/i.test(url.pathname)
  ) {
    event.respondWith(handleImageRequest(event));
    return;
  }

  // 2. Next.js static bundles (_next/static/) -> Cache First, fallback to Network
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(
      caches.open(CORE_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;

        try {
          const networkResponse = await fetch(request);
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch {
          return Response.error();
        }
      })
    );
    return;
  }

  // 3. Web app manifest -> serve precached copy (install precaches it), else network
  if (url.pathname === "/manifest.webmanifest") {
    event.respondWith(
      caches
        .match(request)
        .then((cached) => cached || fetch(request))
        .catch(() => Response.error())
    );
    return;
  }

  // 4. Open-Meteo Weather API -> Network First, fallback to cached weather data
  if (url.hostname.includes("open-meteo.com")) {
    event.respondWith(
      caches.open(RUNTIME_CACHE).then(async (cache) => {
        try {
          const networkResponse = await fetch(request);
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch {
          const cached = await cache.match(request);
          if (cached) return cached;
          throw new Error("Offline and no cached forecast available");
        }
      })
    );
    return;
  }

  // 5. HTML Navigation requests -> Network First with Cache fallback
  if (request.mode === "navigate" || request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      caches.open(RUNTIME_CACHE).then(async (cache) => {
        try {
          const networkResponse = await fetch(request);
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch {
          // Offline on mountain chairlift: attempt to match exact page
          const cachedPage = await cache.match(request);
          if (cachedPage) return cachedPage;

          // Fallback to cached resorts directory or home shell
          const resortsFallback = await caches.match("/resorts");
          if (resortsFallback) return resortsFallback;

          const homeFallback = await caches.match("/");
          if (homeFallback) return homeFallback;

          return new Response(
            `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <title>PowderPilot Japan · Offline Mode</title>
              <style>
                body { background: #0f172a; color: #f8fafc; font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; text-align: center; }
                .card { max-width: 420px; padding: 28px; background: #1e293b; border-radius: 16px; border: 1px solid #334155; }
                h1 { font-size: 20px; margin: 0 0 10px; color: #38bdf8; }
                p { font-size: 14px; color: #94a3b8; line-height: 1.5; margin: 0 0 18px; }
                a { display: inline-block; padding: 10px 20px; background: #38bdf8; color: #0f172a; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 13px; }
              </style>
            </head>
            <body>
              <div class="card">
                <h1>❄️ PowderPilot Offline Mode</h1>
                <p>You are currently offline (e.g. on a mountain chairlift). Open previously viewed resorts or return to the directory once your signal reconnects.</p>
                <a href="/resorts">Go to Cached Resorts</a>
              </div>
            </body>
            </html>`,
            {
              headers: { "Content-Type": "text/html; charset=utf-8" },
            }
          );
        }
      })
    );
    return;
  }
});

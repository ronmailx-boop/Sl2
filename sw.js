self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('shopping-list-v1').then((cache) => cache.addAll([
      '/Sl2/',
      '/Sl2/index.html',
      '/Sl2/manifest.json'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});


// Simple service worker generated by Julius AI
const CACHE = 'app-v1';
const ASSETS = [
  '/',
  '/index_login_user_prefix.html',
  '/manifest.json',
  '/styles.css',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', function (evt) {
  evt.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', function (evt) {
  evt.respondWith(
    caches.match(evt.request).then(function (resp) {
      return resp || fetch(evt.request);
    })
  );
});

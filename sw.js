const CACHE_NAME = 'yt-lite-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Standard fetch logic to keep the PWA valid
    event.respondWith(fetch(event.request));
});

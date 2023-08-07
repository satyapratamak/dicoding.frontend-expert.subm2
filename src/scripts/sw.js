// import {precacheAndRoute} from 'workbox-precaching';
// import {registerRoute} from 'workbox-routing';
// import {NetworkFirst} from 'workbox-strategies';

// precacheAndRoute(self.__WB_MANIFEST);
// registerRoute(
//     ({request}) => request.cache === 'reload',
//     new NetworkFirst({
//       cacheName: 'reload-cache',
//     }),
// );

// const version = '1.0.0';
// const CACHE_NAME = `restaurantpwa-${version}`;

// const assetsToCache = [
//   '/',
//   './templates/index.html',
//   '/index.js',
// ];

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');
  // TODO: Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');
  // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);
  event.respondWith(fetch(event.request));
  // TODO: Add/get fetch request to/from caches
});

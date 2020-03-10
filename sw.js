var currentCacheName = 'briansquest-cache-v1';
var arrayOfFilesToCache = [
  '/',
  '/index.md',
  '/404.md',
  '/favicon.ico',
  '/_layouts/default.html',
  '/assets/css/style.css',
  '/assets/css/mobile.css',
  '/assets/fonts/opensans-bolditalic-webfont.eot',
  '/assets/fonts/opensans-bolditalic-webfont.svg',
  '/assets/fonts/opensans-bolditalic-webfont.ttf',
  '/assets/fonts/opensans-bolditalic-webfont.woff',
  '/assets/fonts/opensans-bold-webfont.eot',
  '/assets/fonts/opensans-bold-webfont.svg',
  '/assets/fonts/opensans-bold-webfont.ttf',
  '/assets/fonts/opensans-bold-webfont.woff',
  '/assets/fonts/opensans-extrabold-webfont.eot',
  '/assets/fonts/opensans-extrabold-webfont.svg',
  '/assets/fonts/opensans-extrabold-webfont.ttf',
  '/assets/fonts/opensans-extrabold-webfont.woff',
  '/assets/fonts/opensans-italic-webfont.eot',
  '/assets/fonts/opensans-italic-webfont.svg',
  '/assets/fonts/opensans-italic-webfont.ttf',
  '/assets/fonts/opensans-italic-webfont.woff',
  '/assets/fonts/opensans-regular-webfont.eot',
  '/assets/fonts/opensans-regular-webfont.svg',
  '/assets/fonts/opensans-regular-webfont.ttf',
  '/assets/fonts/opensans-regular-webfont.woff',
  '/assets/js/headsmart.min.js',
  '/assets/js/modernizr.js',
  '/assets/js/scale.fix.js',
  '/assets/js/styleswitcher.js',
  '/assets/images/bg-ramp.jpg',
  '/assets/images/blockquote-gfx.png',
  '/assets/images/blockquote-gfx-2x.png',
  '/assets/images/chevron.png',
  '/assets/images/chevron-2x.png',
  '/assets/images/download-fallback-bg.png',
  '/assets/images/download-fallback-bg2.png',
  '/assets/images/download-sprite.png',
  '/assets/images/footer-ramp.jpg',
  '/assets/images/fork-sprite.png',
  '/assets/images/hr.jpg',
  '/assets/images/hr-2px.jpg',
  '/assets/images/icon144.png',
  '/assets/images/icon512.png',
  '/assets/images/octocat.png',
  '/assets/images/octocat-2px.png',
  '/assets/images/ribbon-tail-sprite.png',
  '/assets/images/ribbon-tail-sprite-2x.png',
  '/assets/images/shield.png',
  '/assets/images/shield-fallback.png',
  '/assets/images/site-2.png',
  '/assets/images/small-ribbon-tail-sprite.png',
  '/assets/images/small-ribbon-tail-sprite-2x.png'
]


  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(currentCacheName).then(function(cache) {
        return cache.addAll(arrayOfFilesToCache);
      })
    );
  });

  self.addEventListener('activate', function(event) {
    event.waitUntil(
      // Get all the cache names
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          // Get all the items that are stored under a different cache name than the current one
          cacheNames.filter(function(cacheName) {
            return cacheName != currentCacheName;
          }).map(function(cacheName) {
            // Delete the items
            return caches.delete(cacheName);
          })
        ); // end Promise.all()
      }) // end caches.keys()
    ); // end event.waitUntil()
  });

  self.addEventListener('fetch', function(event) {
  // Do stuff with fetch events
});

self.addEventListener('message', function(event) {
  // Do stuff with postMessages received from document
});

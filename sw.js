var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
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
];


self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

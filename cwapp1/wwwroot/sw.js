self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '/home',
                '/lib/bootstrap/dist/css/bootstrap.css',
                '/css/site.css',
                '/lib/jquery/dist/jquery.js',
                '/lib/bootstrap/dist/js/bootstrap.js',
                '/js/site.js',
            ]);
        })
    );
});
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        }))
});

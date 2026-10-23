// cache-first for images so repeat visits don't re-download them
// ponytail: no eviction/versioning; bump 'img1' if an image is replaced under the same filename
self.addEventListener('fetch',function(e){var r=e.request;if(r.method!=='GET'||!/\.(jpe?g|png|jfif|webp|gif)$/i.test(new URL(r.url).pathname)){return;}
e.respondWith(caches.open('img1').then(function(c){return c.match(r).then(function(h){return h||fetch(r).then(function(n){if(n.ok){c.put(r,n.clone());}return n;});});}));});

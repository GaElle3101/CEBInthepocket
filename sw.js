const CACHE='infinitif-v1';
const FILES=['./','index.html','manifest.webmanifest',
 'icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/apple-touch-icon.png',
 'fonts/andika-latin-400-normal.woff2','fonts/andika-latin-700-normal.woff2',
 'fonts/fredoka-latin-500-normal.woff2','fonts/fredoka-latin-600-normal.woff2','fonts/fredoka-latin-700-normal.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)))});

const CACHE_NAME="shipping-management-pwa-v6";
const APP_SHELL=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./icon.svg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET") return;
 const url=new URL(e.request.url);
 if(e.request.mode==="navigate" || url.pathname.endsWith("/index.html") || url.pathname==="/"){
   e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{const c=r.clone();caches.open(CACHE_NAME).then(x=>x.put("./index.html",c)).catch(()=>{});return r}).catch(()=>caches.match("./index.html")));
   return;
 }
 e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{const x=r.clone();caches.open(CACHE_NAME).then(ca=>ca.put(e.request,x)).catch(()=>{});return r}).catch(()=>caches.match("./index.html"))));
});
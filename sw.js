if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const d=e=>s(e,o),t={module:{uri:o},exports:c,require:d};i[o]=Promise.all(n.map((e=>t[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-2aa111a1.css",revision:null},{url:"assets/index-e1418308.js",revision:null},{url:"icons/icons.css",revision:"86e79ca4ec3c93d453b11f18b19fa8c5"},{url:"icons/icons.html",revision:"0b97b2461c74085a2150c6b1687119d0"},{url:"index.html",revision:"b4dd1db27fb617a440b7893e6cbe6683"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"pwa-192x192.png",revision:"b6b75916087b77b8738ea84e5a812cac"},{url:"pwa-512x512.png",revision:"72063bf056756b716d3e3cc9070b5bf2"},{url:"pwa-maskable-192x192.png",revision:"f7db2345eacd6c388cb09dbdd1220147"},{url:"pwa-maskable-512x512.png",revision:"75a086b2d8e618948bf896101dfd869d"},{url:"manifest.webmanifest",revision:"85206f55571ebb49793af28290664adf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
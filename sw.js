if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const l=e=>i(e,c),t={module:{uri:c},exports:o,require:l};s[c]=Promise.all(n.map((e=>t[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-a23ac172.css",revision:null},{url:"assets/index-d0d2b892.js",revision:null},{url:"assets/pwa-install.es-b1956253.js",revision:null},{url:"icons/icons.css",revision:"86e79ca4ec3c93d453b11f18b19fa8c5"},{url:"icons/icons.html",revision:"0b97b2461c74085a2150c6b1687119d0"},{url:"index.html",revision:"09a07d36705b3f1730c4167d11c65cb9"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"pwa-192x192.png",revision:"86bc78238e7849fffedd51bc57163ace"},{url:"pwa-512x512.png",revision:"073409d732c4b0aa3f4698b1b99f8b32"},{url:"pwa-maskable-192x192.png",revision:"e56cdddc47926075db97470d8d9f397c"},{url:"pwa-maskable-512x512.png",revision:"b807c12670af56c3bc9ec610f4a7a09e"},{url:"manifest.webmanifest",revision:"1ee3c5298eff9e4f2a78c719814c5147"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map

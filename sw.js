if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const a=e=>i(e,c),d={module:{uri:c},exports:o,require:a};s[c]=Promise.all(n.map((e=>d[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-2b6e0b62.js",revision:null},{url:"assets/index-f201a02f.css",revision:null},{url:"assets/pwa-install.es-b1956253.js",revision:null},{url:"icons/icons.css",revision:"f5ad3678064808fcf4a8a765392ab626"},{url:"icons/icons.html",revision:"29d62b13725797cebc8412a94deda0fe"},{url:"index.html",revision:"481e0c80dcb8e928ed5a43a2c5ab09d9"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/pwa-192x192.png",revision:"86bc78238e7849fffedd51bc57163ace"},{url:"images/pwa-512x512.png",revision:"073409d732c4b0aa3f4698b1b99f8b32"},{url:"images/pwa-maskable-192x192.png",revision:"e56cdddc47926075db97470d8d9f397c"},{url:"images/pwa-maskable-512x512.png",revision:"b807c12670af56c3bc9ec610f4a7a09e"},{url:"manifest.webmanifest",revision:"b3af45db6f607d42e43ae6d480f36858"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

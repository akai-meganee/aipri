if(!self.define){let e,s={};const t=(t,i)=>(t=new URL(t+".js",i).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const c=e=>t(e,r),f={module:{uri:r},exports:o,require:c};s[r]=Promise.all(i.map((e=>f[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-84611bfe"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"main.js",revision:"a556f74a8ef4bdad9cf7814399a753f6"},{url:"main.js.LICENSE.txt",revision:"0bea76cbfc7e35bb8fcbca5edce3a7c2"}],{}),e.registerRoute(/https:\/\/aipri.jp\/.*/,new e.CacheFirst({cacheName:"aipri",plugins:[new e.ExpirationPlugin({maxEntries:6e4,maxAgeSeconds:1296e4}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map

if(!self.define){let n,e={};const r=(r,u)=>(r=new URL(r+".js",u).href,e[r]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=r,n.onload=e,document.head.appendChild(n)}else n=r,importScripts(r),e()})).then((()=>{let n=e[r];if(!n)throw new Error(`Module ${r} didn’t register its module`);return n})));self.define=(u,l)=>{const i=n||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let s={};const o=n=>r(n,i),t={module:{uri:i},exports:s,require:o};e[i]=Promise.all(u.map((n=>t[n]||o(n)))).then((n=>(l(...n),s)))}}define(["./workbox-5ffe50d4"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_nuxt/B9K5rw8f.js",revision:null},{url:"_nuxt/BcUEY63A.js",revision:null},{url:"_nuxt/BRAaVDYj.js",revision:null},{url:"_nuxt/CPmwP0is.js",revision:null},{url:"_nuxt/CzDEHtem.js",revision:null},{url:"_nuxt/D5Bi8AHA.js",revision:null},{url:"_nuxt/DlAUqK2U.js",revision:null},{url:"_nuxt/DSSragoZ.js",revision:null},{url:"_nuxt/entry.DSVZI3bN.css",revision:null},{url:"_nuxt/error-404.C3V-3Mc4.css",revision:null},{url:"_nuxt/error-500.dGVH929u.css",revision:null},{url:"_nuxt/FG7KWDEj.js",revision:null},{url:"_nuxt/kHNkdcQh.js",revision:null},{url:"_nuxt/logo-drk.CVTG40rG.png",revision:null},{url:"_nuxt/nuxt-icon.BdpeBhx2.css",revision:null},{url:"_nuxt/ZfHDrvKs.js",revision:null},{url:"200",revision:"98c8ae543da00bb47a48c84aaeab9d99"},{url:"404",revision:"8dc3413800eb57ebda3057249f64df45"},{url:"_nuxt/builds/latest.json",revision:"3679ddfeb2a3b05a39e282cf407dd80b"},{url:"_nuxt/builds/meta/db2303a6-765f-4836-919a-eda4497e809c.json",revision:null},{url:"manifest.webmanifest",revision:"35f1f200dbadd6ec3ad03e90913ea9f3"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));

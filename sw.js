if(!self.define){let s,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(i,l)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let o={};const u=s=>r(s,n),a={module:{uri:n},exports:o,require:u};e[n]=Promise.all(i.map((s=>a[s]||u(s)))).then((s=>(l(...s),o)))}}define(["./workbox-5ffe50d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"e24b4658edca06a04a95c1e1aba02286"},{url:"404",revision:"e24b4658edca06a04a95c1e1aba02286"},{url:"assets/B9K5rw8f.js",revision:null},{url:"assets/Ba0rbs1I.js",revision:null},{url:"assets/BiNo_y7s.js",revision:null},{url:"assets/CGnEuyVz.js",revision:null},{url:"assets/ChzIJJUR.js",revision:null},{url:"assets/cyhyVqLO.js",revision:null},{url:"assets/D6HHWaAk.js",revision:null},{url:"assets/DlAUqK2U.js",revision:null},{url:"assets/DOoZ_Aaj.js",revision:null},{url:"assets/entry.CYJYGXWL.css",revision:null},{url:"assets/error-404.C3V-3Mc4.css",revision:null},{url:"assets/error-500.dGVH929u.css",revision:null},{url:"assets/index.DCBbfgGx.css",revision:null},{url:"assets/logo-drk.CVTG40rG.png",revision:null},{url:"assets/nuxt-icon.BdpeBhx2.css",revision:null},{url:"assets/o1oVxJWU.js",revision:null},{url:"assets/Q1-Mb8gs.js",revision:null},{url:"favicon.ico",revision:"cc04b0a404afe329cdeaaca11c83d2b7"},{url:"icon.png",revision:"c381ccfc2e9f2222017d7a4a016c2e1e"},{url:"/test-pages/",revision:"08fd9f365adab6c5824e2e6a015d1e09"},{url:"_payload.json",revision:"cb5641ca3b559e6c86dfbfa6478b60f8"},{url:"assets/builds/latest.json",revision:"a5fc8a5c95ee1d181bd16b55ef6d1c32"},{url:"assets/builds/meta/4218666b-2087-4d91-8a0d-a2101fd10e9f.json",revision:null},{url:"manifest.webmanifest",revision:"2b4457df9e49d9ce28919d7c68d42bb5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));

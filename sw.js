if(!self.define){let s,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(i,l)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const o=s=>r(s,n),t={module:{uri:n},exports:u,require:o};e[n]=Promise.all(i.map((s=>t[s]||o(s)))).then((s=>(l(...s),u)))}}define(["./workbox-5ffe50d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"b1711d89bc9eff0381f2215ed4b6cf8c"},{url:"404",revision:"b1711d89bc9eff0381f2215ed4b6cf8c"},{url:"assets/1Oexgan8.js",revision:null},{url:"assets/B9K5rw8f.js",revision:null},{url:"assets/BIaIYiYe.js",revision:null},{url:"assets/BZbvOYPg.js",revision:null},{url:"assets/C1L_Y65_.js",revision:null},{url:"assets/CENRokfV.js",revision:null},{url:"assets/DlAUqK2U.js",revision:null},{url:"assets/DmfQ3WQE.js",revision:null},{url:"assets/DtJvCVMk.js",revision:null},{url:"assets/entry.eYRracWA.css",revision:null},{url:"assets/error-404.C3V-3Mc4.css",revision:null},{url:"assets/error-500.dGVH929u.css",revision:null},{url:"assets/FO7o0R7M.js",revision:null},{url:"assets/gSvycarH.js",revision:null},{url:"assets/index.DCBbfgGx.css",revision:null},{url:"assets/logo-drk.CVTG40rG.png",revision:null},{url:"assets/nuxt-icon.BdpeBhx2.css",revision:null},{url:"favicon.ico",revision:"cc04b0a404afe329cdeaaca11c83d2b7"},{url:"icon.png",revision:"c381ccfc2e9f2222017d7a4a016c2e1e"},{url:"/test-pages/",revision:"d525ef3375d2f63d2b1b2281559e797e"},{url:"assets/builds/latest.json",revision:"ce8f05f97b973e696d3ad66fe6387e8e"},{url:"assets/builds/meta/22800993-3537-417a-bd4b-b33ad2eefad6.json",revision:null},{url:"manifest.webmanifest",revision:"2b4457df9e49d9ce28919d7c68d42bb5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));

if(!self.define){let s,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(i,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let u={};const o=s=>r(s,l),t={module:{uri:l},exports:u,require:o};e[l]=Promise.all(i.map((s=>t[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-5ffe50d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"a9395eda7da0808d98dbe462f81d4467"},{url:"404",revision:"90af5ca10b65c959f833e65deb62cf5a"},{url:"assets/30LKIoMu.js",revision:null},{url:"assets/B9K5rw8f.js",revision:null},{url:"assets/BKM2PkhO.js",revision:null},{url:"assets/Bkttwn9y.js",revision:null},{url:"assets/Br1ssTiv.js",revision:null},{url:"assets/BwnOtkta.js",revision:null},{url:"assets/BXy_GdgM.js",revision:null},{url:"assets/C_DGKgOo.js",revision:null},{url:"assets/DlAUqK2U.js",revision:null},{url:"assets/DNuZuJ2s.js",revision:null},{url:"assets/entry.Bs8UIG3V.css",revision:null},{url:"assets/error-404.C3V-3Mc4.css",revision:null},{url:"assets/error-500.dGVH929u.css",revision:null},{url:"assets/index.BQPOL00b.css",revision:null},{url:"assets/logo-drk.CVTG40rG.png",revision:null},{url:"assets/nuxt-icon.BdpeBhx2.css",revision:null},{url:"assets/Ppggs-Kn.js",revision:null},{url:"favicon.ico",revision:"cc04b0a404afe329cdeaaca11c83d2b7"},{url:"icon.png",revision:"c381ccfc2e9f2222017d7a4a016c2e1e"},{url:"/test-pages/",revision:"90af5ca10b65c959f833e65deb62cf5a"},{url:"assets/builds/latest.json",revision:"f4807f8866bdbeabbe05f82577734222"},{url:"assets/builds/meta/714b2ae4-586c-429e-b1cc-ee2f4e90e51e.json",revision:null},{url:"manifest.webmanifest",revision:"2b4457df9e49d9ce28919d7c68d42bb5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));

if(!self.define){let n,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=r,n.onload=e,document.head.appendChild(n)}else n=r,importScripts(r),e()})).then((()=>{let n=e[r];if(!n)throw new Error(`Module ${r} didn’t register its module`);return n})));self.define=(i,u)=>{const l=n||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let s={};const o=n=>r(n,l),t={module:{uri:l},exports:s,require:o};e[l]=Promise.all(i.map((n=>t[n]||o(n)))).then((n=>(u(...n),s)))}}define(["./workbox-5ffe50d4"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_nuxt/B9K5rw8f.js",revision:null},{url:"_nuxt/C-mmpwkt.js",revision:null},{url:"_nuxt/C76ketXQ.js",revision:null},{url:"_nuxt/CaSkw8r1.js",revision:null},{url:"_nuxt/DjrqLmJu.js",revision:null},{url:"_nuxt/entry.Dm3gDdDV.css",revision:null},{url:"_nuxt/error-404.C3V-3Mc4.css",revision:null},{url:"_nuxt/error-500.dGVH929u.css",revision:null},{url:"_nuxt/logo-drk.CVTG40rG.png",revision:null},{url:"_nuxt/NDBxJW-Z.js",revision:null},{url:"_nuxt/RjewTI8D.js",revision:null},{url:"200",revision:"82657b18f3a5fb1df277c262c032b6b3"},{url:"404",revision:"82657b18f3a5fb1df277c262c032b6b3"},{url:"/apipie-dashboard/",revision:"82657b18f3a5fb1df277c262c032b6b3"},{url:"_nuxt/builds/latest.json",revision:"f1fa35fd82de0402b2728ec8d62c82dc"},{url:"_nuxt/builds/meta/a70bb4a9-1b57-4ac6-b8bd-a19e90d0d680.json",revision:null},{url:"manifest.webmanifest",revision:"8fc9fef5560c327fbf8902f8c8e4a8eb"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));

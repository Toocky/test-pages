if(!self.define){let s,e={};const r=(r,l)=>(r=new URL(r+".js",l).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(l,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const o=s=>r(s,n),t={module:{uri:n},exports:u,require:o};e[n]=Promise.all(l.map((s=>t[s]||o(s)))).then((s=>(i(...s),u)))}}define(["./workbox-5ffe50d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"4f50376a8d60a71c89029492f5da557d"},{url:"404",revision:"4f50376a8d60a71c89029492f5da557d"},{url:"assets/B9K5rw8f.js",revision:null},{url:"assets/BCCr5iIV.js",revision:null},{url:"assets/BVrUlUs7.js",revision:null},{url:"assets/BxZtBCcw.js",revision:null},{url:"assets/Cezxil9c.js",revision:null},{url:"assets/Dj8258zS.js",revision:null},{url:"assets/DlAUqK2U.js",revision:null},{url:"assets/DZvxFBCr.js",revision:null},{url:"assets/entry.DXkMAXx6.css",revision:null},{url:"assets/error-404.C3V-3Mc4.css",revision:null},{url:"assets/error-500.dGVH929u.css",revision:null},{url:"assets/H-6pKdwr.js",revision:null},{url:"assets/index.CsjUdmOC.css",revision:null},{url:"assets/logo-drk.CVTG40rG.png",revision:null},{url:"assets/nuxt-icon.BdpeBhx2.css",revision:null},{url:"assets/qbT6Ol-T.js",revision:null},{url:"assets/vIcTG0Jv.js",revision:null},{url:"favicon.ico",revision:"cc04b0a404afe329cdeaaca11c83d2b7"},{url:"icon.png",revision:"c381ccfc2e9f2222017d7a4a016c2e1e"},{url:"/test-pages/",revision:"c054439d77004a111e3b7bec813edf91"},{url:"assets/builds/latest.json",revision:"66ea3b0259d0f0f9e3de174c6086bbc1"},{url:"assets/builds/meta/be7b25b3-24ac-4cef-bb1e-4c8b4920df91.json",revision:null},{url:"manifest.webmanifest",revision:"2b4457df9e49d9ce28919d7c68d42bb5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));

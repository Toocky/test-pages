if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,l)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let o={};const u=s=>i(s,n),t={module:{uri:n},exports:o,require:u};e[n]=Promise.all(r.map((s=>t[s]||u(s)))).then((s=>(l(...s),o)))}}define(["./workbox-5ffe50d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"cd908444e849fadfdf1089b9a38b84e2"},{url:"404",revision:"0ab70137b0f1c2b2a69773783cd4512b"},{url:"assets/An2o0cum.js",revision:null},{url:"assets/B3ksAPZ1.js",revision:null},{url:"assets/B9K5rw8f.js",revision:null},{url:"assets/BS62f_Kp.js",revision:null},{url:"assets/BV-iUZby.js",revision:null},{url:"assets/CdkOYNZ7.js",revision:null},{url:"assets/CpQc3qit.js",revision:null},{url:"assets/CsXPXLIc.js",revision:null},{url:"assets/DIQOgXmM.js",revision:null},{url:"assets/DlAUqK2U.js",revision:null},{url:"assets/DWTV2o_D.js",revision:null},{url:"assets/entry.CYJYGXWL.css",revision:null},{url:"assets/error-404.C3V-3Mc4.css",revision:null},{url:"assets/error-500.dGVH929u.css",revision:null},{url:"assets/index.C5f9DY26.css",revision:null},{url:"assets/logo-drk.CVTG40rG.png",revision:null},{url:"assets/nuxt-icon.BdpeBhx2.css",revision:null},{url:"favicon.ico",revision:"cc04b0a404afe329cdeaaca11c83d2b7"},{url:"icon.png",revision:"c381ccfc2e9f2222017d7a4a016c2e1e"},{url:"/test-pages/",revision:"0104fafdbffd8a0b33f9a46a04c79045"},{url:"_payload.json",revision:"4a7f3c7433efc144b3584c4e078f5147"},{url:"assets/builds/latest.json",revision:"3b2474572072788bc45104973b5b34d2"},{url:"assets/builds/meta/dbf492ac-bc07-4ec9-8ced-e8df0965d382.json",revision:null},{url:"manifest.webmanifest",revision:"2b4457df9e49d9ce28919d7c68d42bb5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));

if(!self.define){let s,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(i,l)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const o=s=>r(s,n),t={module:{uri:n},exports:u,require:o};e[n]=Promise.all(i.map((s=>t[s]||o(s)))).then((s=>(l(...s),u)))}}define(["./workbox-5ffe50d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"8afed974160acf37bb00083cd00e79cd"},{url:"404",revision:"8afed974160acf37bb00083cd00e79cd"},{url:"assets/B9K5rw8f.js",revision:null},{url:"assets/C4SQUz9l.js",revision:null},{url:"assets/Cj6TL2AA.js",revision:null},{url:"assets/CL34MUMk.js",revision:null},{url:"assets/DBFfANkE.js",revision:null},{url:"assets/DcBJEETj.js",revision:null},{url:"assets/DCZ7LQNn.js",revision:null},{url:"assets/DGB_YgZ4.js",revision:null},{url:"assets/DKIzytAf.js",revision:null},{url:"assets/DlAUqK2U.js",revision:null},{url:"assets/DvwSncV4.js",revision:null},{url:"assets/entry.eijcFKIK.css",revision:null},{url:"assets/error-404.C3V-3Mc4.css",revision:null},{url:"assets/error-500.dGVH929u.css",revision:null},{url:"assets/index.CsjUdmOC.css",revision:null},{url:"assets/logo-drk.CVTG40rG.png",revision:null},{url:"assets/nuxt-icon.BdpeBhx2.css",revision:null},{url:"favicon.ico",revision:"cc04b0a404afe329cdeaaca11c83d2b7"},{url:"icon.png",revision:"c381ccfc2e9f2222017d7a4a016c2e1e"},{url:"/test-pages/",revision:"51965de01c8ece1c1088b67538be9069"},{url:"assets/builds/latest.json",revision:"8fee179b50d98f67fb4e1efe84d969dd"},{url:"assets/builds/meta/906818b0-d525-4698-9a28-1f4a871a791a.json",revision:null},{url:"manifest.webmanifest",revision:"2b4457df9e49d9ce28919d7c68d42bb5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));

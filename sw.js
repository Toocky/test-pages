if(!self.define){let e,n={};const r=(r,i)=>(r=new URL(r+".js",i).href,n[r]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=n,document.head.appendChild(e)}else e=r,importScripts(r),n()})).then((()=>{let e=n[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,l)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(n[u])return;let s={};const o=e=>r(e,u),t={module:{uri:u},exports:s,require:o};n[u]=Promise.all(i.map((e=>t[e]||o(e)))).then((e=>(l(...e),s)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_nuxt/0TGqlDD1.js",revision:null},{url:"_nuxt/4NZY3N9X.js",revision:null},{url:"_nuxt/B9K5rw8f.js",revision:null},{url:"_nuxt/BBMa90v0.js",revision:null},{url:"_nuxt/CI7R357K.js",revision:null},{url:"_nuxt/CNQux7jF.js",revision:null},{url:"_nuxt/DilcR2KR.js",revision:null},{url:"_nuxt/entry.Dm3gDdDV.css",revision:null},{url:"_nuxt/error-404.C3V-3Mc4.css",revision:null},{url:"_nuxt/error-500.dGVH929u.css",revision:null},{url:"_nuxt/logo-drk.CVTG40rG.png",revision:null},{url:"200",revision:"438deda27bf31293a15e8da92df782aa"},{url:"404",revision:"438deda27bf31293a15e8da92df782aa"},{url:"/apipie-dashboard/",revision:"438deda27bf31293a15e8da92df782aa"},{url:"_nuxt/builds/latest.json",revision:"fe12e3afb7423b69eea52194951b3d60"},{url:"_nuxt/builds/meta/369e5c2d-e5f8-480c-884f-3c89d5bd9de1.json",revision:null},{url:"manifest.webmanifest",revision:"8fc9fef5560c327fbf8902f8c8e4a8eb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));

import{G as f,r as u,ac as p,f as m,c as _,y as r,K as d,o as x}from"./CvvinOL3.js";const h=["innerHTML"],k=f({__name:"nuxt-icon",props:{name:{},filled:{type:Boolean,default:!1}},async setup(l){let s,t;const o=l,a=u("");let c=!1;async function i(){try{const e=await Object.assign({})[`/assets/icons/${o.name}.svg`]();e.includes("stroke")&&(c=!0),a.value=e}catch{console.error(`[nuxt-icons] Icon '${o.name}' doesn't exist in 'assets/icons'`)}}return[s,t]=p(()=>i()),await s,t(),m(i),(n,e)=>(x(),_("span",{class:d(["nuxt-icon",{"nuxt-icon--fill":!n.filled,"nuxt-icon--stroke":r(c)&&!n.filled}]),innerHTML:r(a)},null,10,h))}});export{k as default};

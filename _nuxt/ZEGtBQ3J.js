import{d as f,g as x,t as p,v as r,z as t,x as e,A as o,B as i,y as _,$ as b,a0 as w,V as k,X as T}from"./bjUBZNV7.js";const y=""+new URL("logo-drk.CVTG40rG.png",import.meta.url).href,A={class:"w-full px-5 md:px-[30px] pt-4 pb-2 flex justify-between shadow border-b border-gray-800"},D={class:"flex gap-[30px] pb-2"},P={class:"flex gap-2 font-500 items-center"},u="https://apipie.ai",S=f({__name:"nav-bar",setup(g){return(d,s)=>{const a=x("u-link");return r(),p("div",A,[t(a,{to:u,class:"flex gap-2 font-bold font-primary text-2xl md:text-[30px]",external:""},{default:o(()=>s[0]||(s[0]=[e("img",{class:"h-8",src:y,alt:"logo"},null,-1),i(" APIpie.ai ")])),_:1}),e("div",D,[e("div",P,[t(a,{class:"py-[6px] px-3",to:"/"},{default:o(()=>s[1]||(s[1]=[i("Dashboard")])),_:1}),t(a,{class:"py-[6px] px-3",to:`${u}/docs`,external:""},{default:o(()=>s[2]||(s[2]=[i(" Documentation ")])),_:1},8,["to"]),t(a,{class:"py-[6px] px-3",to:`${u}/profile/subscribe`,external:""},{default:o(()=>s[3]||(s[3]=[i("Subscribe")])),_:1},8,["to"])])])])}}}),B={class:"w-full pt-8 pb-10 flex shadow border-t border-gray-800 justify-center"},j={class:"flex flex-col md:flex-row gap-10 md:justify-between px-10 w-full xl:px-0 xl:w-[1150px]"},C={class:"flex flex-col justify-between"},I={class:"flex flex-col gap-[26px]"},V={class:"flex gap-6"},N={class:"text-slate-500 text-sm font-normal font-secondary"},U={class:"grid grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-20"},L={class:"text-slate-500 text-sm font-normal font-secondary"},E={class:"flex flex-col gap-3.5 items-start"},l="https://apipie.ai",F=f({__name:"footer",setup(g){const d=[["Product",[{name:"Dashboard",to:"/",external:!1},{name:"Documentation",to:`${l}/docs`,external:!0},{name:"Subscribe",to:`${l}/profile/subscribe`,external:!0},{name:"Blog",to:`${l}/docs/blog`,external:!0}]],["Support",[{name:"Discord",to:"https://discord.gg/hs82THc9Tw",external:!0},{name:"Email",to:"mailto:support@neuronicai.com",external:!0}]],["Legal",[{name:"Privacy Policy",to:`${l}/docs/Terms/privacy`,external:!0},{name:"User Agreement",to:`${l}/docs/Terms/user-agreement`,external:!0},{name:"API Agreement",to:`${l}/docs/Terms/api-agree`,external:!0}]]];return(s,a)=>{const n=x("u-link"),c=x("u-icon");return r(),p("div",B,[e("div",j,[e("div",C,[e("div",I,[t(n,{to:l,class:"flex gap-2 font-bold font-primary text-2xl md:text-[30px]",external:""},{default:o(()=>a[0]||(a[0]=[e("img",{class:"h-8",src:y,alt:"logo"},null,-1),i(" APIpie.ai ")])),_:1}),e("div",V,[t(n,{to:"https://discord.gg/hs82THc9Tw",external:""},{default:o(()=>[t(c,{class:"h-6 w-6 text-slate-500",name:"i-simple-icons-discord"})]),_:1}),t(n,{to:"https://x.com/APIpie_ai",external:""},{default:o(()=>[t(c,{class:"h-6 w-6 text-slate-500",name:"i-simple-icons-twitter"})]),_:1}),t(n,{to:"https://www.linkedin.com/company/neuronicaiinc",external:""},{default:o(()=>[t(c,{class:"h-6 w-6 text-slate-500",name:"i-simple-icons-linkedin"})]),_:1})])]),e("div",N," Copyright © "+_(new Date().getFullYear())+" Neuronic AI. ",1)]),e("div",U,[(r(),p(b,null,w(d,(h,v)=>e("div",{key:v,class:"flex flex-col gap-4"},[e("div",L,_(h[0]),1),e("div",E,[(r(!0),p(b,null,w(h[1],(m,$)=>(r(),k(n,{key:$,to:m.to,external:m.external,class:"text-slate-200 text-sm font-medium"},{default:o(()=>[i(_(m.name),1)]),_:2},1032,["to","external"]))),128))])])),64))])])])}}}),G={class:"flex flex-col min-h-screen"},H={class:"flex-grow"},R=f({__name:"default",setup(g){return(d,s)=>{const a=S,n=x("u-container"),c=F;return r(),p("div",G,[t(a),e("main",H,[t(n,{class:"flex justify-center mt-10 mb-16"},{default:o(()=>[T(d.$slots,"default")]),_:3})]),t(c)])}}});export{R as default};

var ue=Object.defineProperty;var Wt=n=>{throw TypeError(n)};var ce=(n,t,a)=>t in n?ue(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a;var at=(n,t,a)=>ce(n,typeof t!="symbol"?t+"":t,a),de=(n,t,a)=>t.has(n)||Wt("Cannot "+a);var bt=(n,t,a)=>(de(n,t,"read from private field"),a?a.call(n):t.get(n)),Qt=(n,t,a)=>t.has(n)?Wt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,a);import{a as me,H as it,r as G,I as fe,J as be,K as pe,L as ge,M as ae,N as Ct,O as Xt,P as he,Q as ye,R as f,j as N,S as nt,T as ve,U as _e,d as qt,V as T,v as p,W as xe,o as se,g as J,A as j,x as r,X as we,t as B,Y as L,B as Ut,y as A,z as H,Z as kt,$ as W,a0 as pt,a1 as $e,a2 as De,a3 as ke,a4 as Me,a5 as Ce,a6 as Ae,a7 as Be,a8 as Le,a9 as Te,aa as Se,ab as Ee}from"./PaSoA_Gx.js";function Oe(n){return typeof n=="string"?`'${n}'`:new je().serialize(n)}const je=function(){var t;class n{constructor(){Qt(this,t,new Map)}compare(e,s){const l=typeof e,o=typeof s;return l==="string"&&o==="string"?e.localeCompare(s):l==="number"&&o==="number"?e-s:String.prototype.localeCompare.call(this.serialize(e,!0),this.serialize(s,!0))}serialize(e,s){if(e===null)return"null";switch(typeof e){case"string":return s?e:`'${e}'`;case"bigint":return`${e}n`;case"object":return this.$object(e);case"function":return this.$function(e)}return String(e)}serializeObject(e){const s=Object.prototype.toString.call(e);if(s!=="[object Object]")return this.serializeBuiltInType(s.length<10?`unknown:${s}`:s.slice(8,-1),e);const l=e.constructor,o=l===Object||l===void 0?"":l.name;if(o!==""&&globalThis[o]===l)return this.serializeBuiltInType(o,e);if(typeof e.toJSON=="function"){const b=e.toJSON();return o+(b!==null&&typeof b=="object"?this.$object(b):`(${this.serialize(b)})`)}return this.serializeObjectEntries(o,Object.entries(e))}serializeBuiltInType(e,s){const l=this["$"+e];if(l)return l.call(this,s);if(typeof(s==null?void 0:s.entries)=="function")return this.serializeObjectEntries(e,s.entries());throw new Error(`Cannot serialize ${e}`)}serializeObjectEntries(e,s){const l=Array.from(s).sort((b,d)=>this.compare(b[0],d[0]));let o=`${e}{`;for(let b=0;b<l.length;b++){const[d,c]=l[b];o+=`${this.serialize(d,!0)}:${this.serialize(c)}`,b<l.length-1&&(o+=",")}return o+"}"}$object(e){let s=bt(this,t).get(e);return s===void 0&&(bt(this,t).set(e,`#${bt(this,t).size}`),s=this.serializeObject(e),bt(this,t).set(e,s)),s}$function(e){const s=Function.prototype.toString.call(e);return s.slice(-15)==="[native code] }"?`${e.name||""}()[native]`:`${e.name}(${e.length})${s.replace(/\s*\n\s*/g,"")}`}$Array(e){let s="[";for(let l=0;l<e.length;l++)s+=this.serialize(e[l]),l<e.length-1&&(s+=",");return s+"]"}$Date(e){try{return`Date(${e.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(e){return`ArrayBuffer[${new Uint8Array(e).join(",")}]`}$Set(e){return`Set${this.$Array(Array.from(e).sort((s,l)=>this.compare(s,l)))}`}$Map(e){return this.serializeObjectEntries("Map",e.entries())}}t=new WeakMap;for(const a of["Error","RegExp","URL"])n.prototype["$"+a]=function(e){return`${a}(${e})`};for(const a of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])n.prototype["$"+a]=function(e){return`${a}[${e.join(",")}]`};for(const a of["BigInt64Array","BigUint64Array"])n.prototype["$"+a]=function(e){return`${a}[${e.join("n,")}${e.length>0?"n":""}]`};return n}(),ze=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Pe=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],Ie="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",st=[];class Ve{constructor(){at(this,"_data",new ut);at(this,"_hash",new ut([...ze]));at(this,"_nDataBytes",0);at(this,"_minBufferSize",0)}finalize(t){t&&this._append(t);const a=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(a/4294967296),this._data.words[(e+64>>>9<<4)+15]=a,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}_doProcessBlock(t,a){const e=this._hash.words;let s=e[0],l=e[1],o=e[2],b=e[3],d=e[4],c=e[5],g=e[6],m=e[7];for(let y=0;y<64;y++){if(y<16)st[y]=t[a+y]|0;else{const h=st[y-15],U=(h<<25|h>>>7)^(h<<14|h>>>18)^h>>>3,M=st[y-2],ct=(M<<15|M>>>17)^(M<<13|M>>>19)^M>>>10;st[y]=U+st[y-7]+ct+st[y-16]}const v=d&c^~d&g,z=s&l^s&o^l&o,F=(s<<30|s>>>2)^(s<<19|s>>>13)^(s<<10|s>>>22),$=(d<<26|d>>>6)^(d<<21|d>>>11)^(d<<7|d>>>25),P=m+$+v+Pe[y]+st[y],S=F+z;m=g,g=c,c=d,d=b+P|0,b=o,o=l,l=s,s=P+S|0}e[0]=e[0]+s|0,e[1]=e[1]+l|0,e[2]=e[2]+o|0,e[3]=e[3]+b|0,e[4]=e[4]+d|0,e[5]=e[5]+c|0,e[6]=e[6]+g|0,e[7]=e[7]+m|0}_append(t){typeof t=="string"&&(t=ut.fromUtf8(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes}_process(t){let a,e=this._data.sigBytes/64;t?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const s=e*16,l=Math.min(s*4,this._data.sigBytes);if(s){for(let o=0;o<s;o+=16)this._doProcessBlock(this._data.words,o);a=this._data.words.splice(0,s),this._data.sigBytes-=l}return new ut(a,l)}}class ut{constructor(t,a){at(this,"words");at(this,"sigBytes");t=this.words=t||[],this.sigBytes=a===void 0?t.length*4:a}static fromUtf8(t){const a=unescape(encodeURIComponent(t)),e=a.length,s=[];for(let l=0;l<e;l++)s[l>>>2]|=(a.charCodeAt(l)&255)<<24-l%4*8;return new ut(s,e)}toBase64(){const t=[];for(let a=0;a<this.sigBytes;a+=3){const e=this.words[a>>>2]>>>24-a%4*8&255,s=this.words[a+1>>>2]>>>24-(a+1)%4*8&255,l=this.words[a+2>>>2]>>>24-(a+2)%4*8&255,o=e<<16|s<<8|l;for(let b=0;b<4&&a*8+b*6<this.sigBytes*8;b++)t.push(Ie.charAt(o>>>6*(3-b)&63))}return t.join("")}concat(t){if(this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4),this.sigBytes%4)for(let a=0;a<t.sigBytes;a++){const e=t.words[a>>>2]>>>24-a%4*8&255;this.words[this.sigBytes+a>>>2]|=e<<24-(this.sigBytes+a)%4*8}else for(let a=0;a<t.sigBytes;a+=4)this.words[this.sigBytes+a>>>2]=t.words[a>>>2];this.sigBytes+=t.sigBytes}}function Re(n){return new Ve().finalize(n).toBase64()}function Ne(n){return Re(Oe(n))}const Fe=n=>n==="defer"||n===!1;function Ue(...n){var F;const t=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(t);let[a,e,s={}]=n;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const l=me(),o=e,b=()=>it.value,d=()=>l.isHydrating?l.payload.data[a]:l.static.data[a];s.server??(s.server=!0),s.default??(s.default=b),s.getCachedData??(s.getCachedData=d),s.lazy??(s.lazy=!1),s.immediate??(s.immediate=!0),s.deep??(s.deep=it.deep),s.dedupe??(s.dedupe="cancel");const c=s.getCachedData(a,l),g=c!=null;if(!l._asyncData[a]||!s.immediate){(F=l.payload._errors)[a]??(F[a]=it.errorValue);const $=s.deep?G:fe;l._asyncData[a]={data:$(g?c:s.default()),pending:G(!g),error:be(l.payload._errors,a),status:G("idle"),_default:s.default}}const m={...l._asyncData[a]};delete m._default,m.refresh=m.execute=($={})=>{if(l._asyncDataPromises[a]){if(Fe($.dedupe??s.dedupe))return l._asyncDataPromises[a];l._asyncDataPromises[a].cancelled=!0}if($._initial||l.isHydrating&&$._initial!==!1){const S=$._initial?c:s.getCachedData(a,l);if(S!=null)return Promise.resolve(S)}m.pending.value=!0,m.status.value="pending";const P=new Promise((S,h)=>{try{S(o(l))}catch(U){h(U)}}).then(async S=>{if(P.cancelled)return l._asyncDataPromises[a];let h=S;s.transform&&(h=await s.transform(S)),s.pick&&(h=Ge(h,s.pick)),l.payload.data[a]=h,m.data.value=h,m.error.value=it.errorValue,m.status.value="success"}).catch(S=>{if(P.cancelled)return l._asyncDataPromises[a];m.error.value=ye(S),m.data.value=f(s.default()),m.status.value="error"}).finally(()=>{P.cancelled||(m.pending.value=!1,delete l._asyncDataPromises[a])});return l._asyncDataPromises[a]=P,l._asyncDataPromises[a]},m.clear=()=>qe(l,a);const y=()=>m.refresh({_initial:!0}),v=s.server!==!1&&l.payload.serverRendered;{const $=pe();if($&&v&&s.immediate&&!$.sp&&($.sp=[]),$&&!$._nuxtOnBeforeMountCbs){$._nuxtOnBeforeMountCbs=[];const h=$._nuxtOnBeforeMountCbs;ge(()=>{h.forEach(U=>{U()}),h.splice(0,h.length)}),ae(()=>h.splice(0,h.length))}v&&l.isHydrating&&(m.error.value||c!=null)?(m.pending.value=!1,m.status.value=m.error.value?"error":"success"):$&&(l.payload.serverRendered&&l.isHydrating||s.lazy)&&s.immediate?$._nuxtOnBeforeMountCbs.push(y):s.immediate&&y();const P=he();if(s.watch){const h=Ct(s.watch,()=>m.refresh());P&&Xt(h)}const S=l.hook("app:data:refresh",async h=>{(!h||h.includes(a))&&await m.refresh()});P&&Xt(S)}const z=Promise.resolve(l._asyncDataPromises[a]).then(()=>m);return Object.assign(z,m),z}function qe(n,t){t in n.payload.data&&(n.payload.data[t]=void 0),t in n.payload._errors&&(n.payload._errors[t]=it.errorValue),n._asyncData[t]&&(n._asyncData[t].data.value=void 0,n._asyncData[t].error.value=it.errorValue,n._asyncData[t].pending.value=!1,n._asyncData[t].status.value="idle"),t in n._asyncDataPromises&&(n._asyncDataPromises[t]&&(n._asyncDataPromises[t].cancelled=!0),n._asyncDataPromises[t]=void 0)}function Ge(n,t){const a={};for(const e of t)a[e]=n[e];return a}function Ke(n,t,a){const[e={},s]=typeof t=="string"?[{},t]:[t,a],l=N(()=>nt(n)),o=e.key||Ne([s,typeof l.value=="string"?l.value:"",...He(e)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const b=o===s?"$f"+o:o;if(!e.baseURL&&typeof l.value=="string"&&l.value[0]==="/"&&l.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:d,lazy:c,default:g,transform:m,pick:y,watch:v,immediate:z,getCachedData:F,deep:$,dedupe:P,...S}=e,h=ve({..._e,...S,cache:typeof e.cache=="boolean"?void 0:e.cache}),U={server:d,lazy:c,default:g,transform:m,pick:y,immediate:z,getCachedData:F,deep:$,dedupe:P,watch:v===!1?[]:[h,l,...v||[]]};let M;return Ue(b,()=>{var ht;(ht=M==null?void 0:M.abort)==null||ht.call(M,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),M=typeof AbortController<"u"?new AbortController:{};const dt=nt(e.timeout);let mt;return dt&&(mt=setTimeout(()=>M.abort(new DOMException("Request aborted due to timeout.","AbortError")),dt),M.signal.onabort=()=>clearTimeout(mt)),(e.$fetch||globalThis.$fetch)(l.value,{signal:M.signal,...h}).finally(()=>{clearTimeout(mt)})},U)}function He(n){var a;const t=[((a=nt(n.method))==null?void 0:a.toUpperCase())||"GET",nt(n.baseURL)];for(const e of[n.params||n.query]){const s=nt(e);if(!s)continue;const l={};for(const[o,b]of Object.entries(s))l[nt(o)]=nt(b);t.push(l)}return t}const Ye=qt({__name:"pie",props:{name:{},data:{},legendPosition:{default:"bottom"}},setup(n){const t=G(null),a=n,e=N(()=>{switch(a.legendPosition){case"right":return{radius:["55%","50%"],center:["25%","50%"]};case"bottom":return{radius:["65%","70%"],center:["50%","30%"]}}}),s=N(()=>{switch(a.legendPosition){case"right":return{height:"100%",left:"40%",top:"15%"};case"bottom":return{height:"50%",top:"60%",left:"left"}}}),l=()=>({legend:{icon:"square",orient:"vertical",type:"scroll",textStyle:{color:"#E5E7EBFF"},...s.value},series:[{name:a.name,type:"pie",avoidLabelOverlap:!1,label:{show:!0,formatter:()=>a.name,position:"center",color:"#94A3B8",fontSize:"12px"},labelLine:{show:!1},data:a.data,...e.value}]}),o=G(l());return Ct(()=>[a.data,a.name,a.legendPosition],()=>{o.value=l()}),(b,d)=>(p(),T(f(xe),{ref_key:"chartRef",ref:t,option:f(o),autoresize:""},null,8,["option"]))}}),Zt=function(n){return n==null?"":typeof n=="string"?parseFloat(n).toLocaleString("en-US"):n.toLocaleString("en-US")},lt=function(n){return n==null||n===""?"":`$${n}`},ot=function(n,t=2){return n==null?n:(typeof n=="string"&&(n=parseFloat(n)),n.toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t}))},ne=function(){const n=G(0),t={xs:320,sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function a(){n.value=window.innerWidth}se(()=>{a(),window.addEventListener("resize",a)}),ae(()=>{window.removeEventListener("resize",a)});function e(l){return n.value>=t[l]}function s(l){return n.value<t[l]}return{width:n,isGreaterOrEquals:e,isLessThan:s}},Je={class:"flex flex-col gap-5"},We={class:"flex justify-between"},Qe={class:"flex flex-col md:flex-row gap-4 md:gap-3"},Xe={class:"flex gap-1 md:justify-center md:items-center"},Ze={class:"text-lg"},ta={key:0,class:"text-slate-500 font-medium"},ea={class:"font-semibold"},aa={key:1,class:"text-slate-500 font-medium"},sa={class:"text-lg font-medium"},na={key:0,class:"flex gap-3"},la={class:"text-sm font-semibold"},oa={class:"text-sm font-semibold"},ra={class:"flex justify-center items-center gap-1.5"},ia={class:"text-sm font-semibold"},ua={class:"text-slate-400 text-sm font-medium"},ca={class:"flex justify-between"},da={class:"flex gap-4 flex-col xl:flex-row xl:justify-between"},ma={key:0,class:"flex gap-3 flex-wrap"},fa={class:"flex justify-center items-center gap-1.5"},ba={class:"text-slate-400 text-sm font-medium"},pa={class:"text-sm font-semibold"},ga={class:"flex gap-3 flex-wrap"},ha={class:"flex justify-center items-center gap-1.5"},ya={class:"text-sm font-semibold"},va={class:"flex justify-center items-center gap-1.5"},_a={class:"text-sm font-semibold"},xa={class:"text-sm font-semibold"},wa={class:"text-sm font-semibold"},$a={class:"flex justify-center items-center gap-1.5"},Da={class:"text-sm font-semibold"},ka=qt({__name:"model-availability-card",props:{model:{},secondary:{type:Boolean},groupKey:{}},setup(n){const t=n,a=N(()=>{if(!t.groupKey||!t.model.model)return{before:"",match:t.model.model,after:""};const d=t.model.model.toLowerCase(),c=t.groupKey.toLowerCase(),g=d.indexOf(c);return g===-1?{before:"",match:t.model.model,after:""}:{before:t.model.model.slice(0,g),match:t.model.model.slice(g,g+t.groupKey.length),after:t.model.model.slice(g+t.groupKey.length)}}),e=ne(),s=N(()=>t.model.lastStatus?t.model.lastStatus.status==="AVAILABLE"?"bg-emerald-500":"bg-red-500":"bg-gray-700"),l=N(()=>{const d=t.model.upTimePercentage;return d!==null?d>=80?"emerald":d>=50?"amber":"red":""}),o=N(()=>[{label:"TtFC",index:6},{label:"2k",index:0},{label:"4k",index:1},{label:"8k",index:2},{label:"16k",index:3},{label:"32k",index:4}]),b=N(()=>t.model.inputCost!=null&&t.model.outputCost!=null);return(d,c)=>{const g=J("u-badge"),m=J("u-icon"),y=J("u-card");return p(),T(y,{class:kt(d.secondary?"":"border border-gray-700 rounded-md"),ui:{background:d.secondary?"bg-white dark:bg-gray-900":""}},{default:j(()=>[r("div",Je,[r("div",We,[r("div",Qe,[r("div",null,[d.model.upTimePercentage!==null?(p(),T(g,{key:0,size:"lg",variant:"subtle",ui:{variant:{subtle:`bg-${f(l)}-50 dark:bg-${f(l)}-400 dark:bg-opacity-10 text-${f(l)}-500 dark:text-${f(l)}-400 ring-1 ring-inset ring-${f(l)}-500 dark:ring-${f(l)}-400 ring-opacity-25 dark:ring-opacity-25`}}},{default:j(()=>[Ut(A(d.model.upTimePercentage.toFixed(2))+"% ",1)]),_:1},8,["ui"])):L("",!0)]),r("div",Xe,[H(m,{class:kt(["h-6 w-6",f(s)]),name:"i-heroicons-check-circle"},null,8,["class"]),r("span",Ze,[f(a).before?(p(),B("span",ta,A(f(a).before),1)):L("",!0),r("span",ea,A(f(a).match),1),f(a).after?(p(),B("span",aa,A(f(a).after),1)):L("",!0)]),r("span",sa,"("+A(d.model.provider)+")",1)])]),f(e).isGreaterOrEquals("xl")?(p(),B("div",na,[f(b)?(p(),T(g,{key:0,size:"lg",color:"gray",variant:"solid"},{default:j(()=>[c[0]||(c[0]=r("span",{class:"text-slate-400 text-sm font-medium"},"Input:",-1)),r("span",la,A(f(lt)(f(ot)(t.model.inputCost,2))),1),c[1]||(c[1]=r("span",{class:"text-slate-400 text-sm font-medium"},"/M",-1))]),_:1})):L("",!0),f(b)?(p(),T(g,{key:1,size:"lg",color:"gray",variant:"solid"},{default:j(()=>[c[2]||(c[2]=r("span",{class:"text-slate-400 text-sm font-medium"},"Output:",-1)),r("span",oa,A(f(lt)(f(ot)(t.model.outputCost,2))),1),c[3]||(c[3]=r("span",{class:"text-slate-400 text-sm font-medium"},"/M",-1))]),_:1})):t.model.avgCost?(p(),T(g,{key:2,size:"lg",color:"gray",variant:"solid"},{default:j(()=>[r("div",ra,[r("span",ia,A(f(lt)(f(ot)(t.model.avgCost,5))),1),r("span",ua,A(["image","embedding"].includes(t.model.type)?"avg":"1000/char"),1)])]),_:1})):L("",!0)])):L("",!0)]),r("div",ca,[(p(!0),B(W,null,pt(d.model.states,v=>(p(),B("div",{class:kt({"md:w-[3px]":!0,"w-[1px]":!0,"xl:w-1.5":!0,"h-1.5":!0,"bg-emerald-500":v===100,"bg-red-500":v===0,"bg-gray-700":v===null,"bg-amber-500":v!==null&&v>0&&v<100,"rounded-md":!0})},null,2))),256))]),r("div",da,[f(e).isGreaterOrEquals("md")?(p(),B("div",ma,[(p(!0),B(W,null,pt(f(o),v=>(p(),B(W,{key:v.label},[t.model.latenciesFormatted.length>v.index?(p(),T(g,{key:0,size:"lg",color:"gray",variant:"solid"},{default:j(()=>[r("div",fa,[r("div",{class:kt(["w-2 h-2 rounded-md",{"bg-emerald-500":t.model.latenciesRating[v.index]>=80,"bg-amber-500":t.model.latenciesRating[v.index]>=30&&t.model.latenciesRating[v.index]<80,"bg-red-500":t.model.latencies[v.index]!==null&&t.model.latenciesRating[v.index]<30,"bg-gray-700":t.model.latencies[v.index]===null}])},null,2),r("span",ba,A(v.label),1),r("span",pa,A(t.model.latenciesFormatted[v.index]),1)])]),_:2},1024)):L("",!0)],64))),128))])):L("",!0),r("div",ga,[t.model.maxTokens&&f(e).isGreaterOrEquals("md")?(p(),T(g,{key:0,size:"lg",color:"gray",variant:"solid"},{default:j(()=>[r("div",ha,[r("span",ya,A(f(Zt)(t.model.maxTokens)),1),c[4]||(c[4]=r("span",{class:"text-slate-400 text-sm font-medium"},"MaxTokens",-1))])]),_:1})):L("",!0),t.model.maxResponseTokens&&f(e).isGreaterOrEquals("md")?(p(),T(g,{key:1,size:"lg",color:"gray",variant:"solid"},{default:j(()=>[r("div",va,[r("span",_a,A(f(Zt)(t.model.maxResponseTokens)),1),c[5]||(c[5]=r("span",{class:"text-slate-400 text-sm font-medium"},"MaxResponse",-1))])]),_:1})):L("",!0),f(e).isLessThan("xl")?(p(),B(W,{key:2},[f(b)?(p(),T(g,{key:0,size:"lg",color:"gray",variant:"solid"},{default:j(()=>[c[6]||(c[6]=r("span",{class:"text-slate-400 text-sm font-medium"},"Input:",-1)),r("span",xa,A(f(lt)(f(ot)(t.model.inputCost,2))),1),c[7]||(c[7]=r("span",{class:"text-slate-400 text-sm font-medium"},"/M",-1))]),_:1})):L("",!0),f(b)?(p(),T(g,{key:1,size:"lg",color:"gray",variant:"solid"},{default:j(()=>[c[8]||(c[8]=r("span",{class:"text-slate-400 text-sm font-medium"},"Output:",-1)),r("span",wa,A(f(lt)(f(ot)(t.model.outputCost,2))),1),c[9]||(c[9]=r("span",{class:"text-slate-400 text-sm font-medium"},"/M",-1))]),_:1})):t.model.avgCost?(p(),T(g,{key:2,size:"lg",color:"gray",variant:"solid"},{default:j(()=>[r("div",$a,[r("span",Da,A(f(lt)(f(ot)(t.model.avgCost,5))),1),c[10]||(c[10]=r("span",{class:"text-slate-400 text-sm font-medium"},"1000/char",-1))])]),_:1})):L("",!0)],64)):L("",!0)])]),we(d.$slots,"default")])]),_:3},8,["class","ui"])}}}),Ma=36e5,te=Symbol.for("constructDateFrom");function tt(n,t){return typeof n=="function"?n(t):n&&typeof n=="object"&&te in n?n[te](t):n instanceof Date?new n.constructor(t):new Date(t)}function gt(n,t){return tt(t||n,n)}function Ca(n,t,a){const e=gt(n,a==null?void 0:a.in);return isNaN(t)?tt(n,NaN):(t&&e.setDate(e.getDate()+t),e)}function Aa(n,t,a){const e=gt(n,a==null?void 0:a.in);if(isNaN(t))return tt(n,NaN);if(!t)return e;const s=e.getDate(),l=tt(n,e.getTime());l.setMonth(e.getMonth()+t+1,0);const o=l.getDate();return s>=o?l:(e.setFullYear(l.getFullYear(),l.getMonth(),s),e)}function Ba(n,...t){const a=tt.bind(null,t.find(e=>typeof e=="object"));return t.map(a)}function La(n,t){let a,e=t==null?void 0:t.in;return n.forEach(s=>{!e&&typeof s=="object"&&(e=tt.bind(null,s));const l=gt(s,e);(!a||a>l||isNaN(+l))&&(a=l)}),tt(e,a||NaN)}function le(n){return t=>{const e=(n?Math[n]:Math.trunc)(t);return e===0?0:e}}function Rt(n,t,a){const[e,s]=Ba(a==null?void 0:a.in,n,t),l=(+e-+s)/Ma;return le(a==null?void 0:a.roundingMethod)(l)}function Ta(n,t){return+gt(n)-+gt(t)}function Mt(n,t,a){const e=Ta(n,t)/1e3;return le(a==null?void 0:a.roundingMethod)(e)}function Sa(n,t,a){return Ca(n,-t,a)}function Ea(n,t,a){return Aa(n,-t,a)}function Oa(n,t,a){const{years:e=0,months:s=0,weeks:l=0,days:o=0,hours:b=0,minutes:d=0,seconds:c=0}=t,g=Ea(n,s+e*12,a),m=Sa(g,o+l*7,a),y=d+b*60,z=(c+y*60)*1e3;return tt(n,+m-z)}function ja(n){const t=Math.floor(n/1e3),a=Math.floor(t/60),e=t%60;return{milliseconds:n%1e3,seconds:e,minutes:a}}const za=function(n){const t=new Headers;function a(s,l){const o=(l==null?void 0:l.headers)??t;return $fetch(`${n}/${s}`,{...l,headers:o})}function e(s,l){const o=(l==null?void 0:l.headers)??t;return Ke(`${n}/${s}`,{...l,headers:o},"$1r6Gs2DGtN")}return{fetch:a,request:e}},Pa="https://api.apipie.ai",Ia=function(n,t){return za(Pa).request(n,t)};function Va(){return{toPairs:function(s){return Object.entries(s)},orderBy:function(s,l,o="asc"){const b=Array.isArray(l)?l:[l],d=Array.isArray(o)?o:[o];for(;d.length<b.length;)d.push(d[d.length-1]||"asc");return[...s].sort((c,g)=>{for(let m=0;m<b.length;m++){const y=b[m],v=d[m]||"asc",z=typeof y=="function"?y(c):c[y],F=typeof y=="function"?y(g):g[y];if(z!==F)return v==="asc"?z<F?-1:1:z>F?-1:1}return 0})},min:function(s){if(s.length!==0)return s.reduce((l,o)=>o<l?o:l,s[0])},max:function(s){if(s.length!==0)return s.reduce((l,o)=>o>l?o:l,s[0])}}}const Ra={class:"flex flex-col gap-5 w-full"},Na={class:"flex flex-col gap-4 md:flex-row md:gap-0 justify-between"},Fa={class:"grid gap grid-cols-1 xl:grid-cols-2 gap-5"},Ua={class:"flex flex-col md:flex-row gap-5 md:h-full"},qa={class:"grid grid-cols-2 md:grid-cols-4 xl:grid-cols-2 gap-4"},Ga={class:"flex flex-col gap-0.5"},Ka={class:"text-gray-400 text-sm font-medium"},Ha={class:"text-2xl md:text-3xl font-semibold"},Ya={key:0,class:"col-span-2 h-0px border dark:border-gray-700"},Ja={key:0,class:"col-span-4 h-0px border dark:border-gray-700"},Wa={class:"flex flex-col gap-5"},Qa={class:"flex flex-col gap-4 md:flex-row justify-between"},Xa={class:"flex justify-between gap-4"},Za={class:"flex flex-col gap-5"},ts={class:"flex flex-col gap-2"},es={class:"flex justify-between"},ee=30,Nt=8,rt=90,Ft=20,ns=qt({__name:"index",async setup(n){let t,a;$e([De,ke,Me,Ce,Ae,Be,Le]);const e=ne(),s=Ia(),{toPairs:l,orderBy:o,min:b,max:d}=Va(),c=[{name:"Language Models",type:"llm"},{name:"Voice Models",type:"voice"},{name:"Vision Models",type:"vision"},{name:"Moderation Models",type:"moderation"},{name:"Image Models",type:"image"},{name:"Embedding Models",type:"embedding"},{name:"Coding Models",type:"code"},{name:"Video Models",type:"video"}],g=[{key:"all",label:"All"},{key:"llm",label:"Language"},{key:"voice",label:"Voice"},{key:"image",label:"Image"},{key:"vision",label:"Vision"},{key:"embedding",label:"Embedding"},{key:"code",label:"Coding"},{key:"video",label:"Video"}],m=G("all"),y=G(!0),v=(_,i)=>i===0?0:_/i*100,{data:z}=([t,a]=Te(()=>s("/models",{})),t=await t,a(),t),F=N(()=>{const _=new Map;for(const i of z.value||[])_.set(`${i.provider}_${i.route}`,i);return _}),$=N(()=>{const _={llm:0,voice:0,vision:0,moderation:0,image:0,embedding:0,code:0,video:0};let i=0;const D={},E={};for(const k of z.value||[]){if(_[k.type]++,m.value!=="all"&&k.type!==m.value)continue;const C=parseInt(k.query_count);i+=C,k.provider in D||(D[k.provider]=0),D[k.provider]+=C,k.model in E||(E[k.model]=0),E[k.model]+=C}for(const[k,C]of Object.entries(D))D[k]=v(C,i);for(const[k,C]of Object.entries(E))E[k]=v(C,i);return{byType:_,byProvider:D,byModel:E}}),P=N(()=>o(l($.value.byProvider),_=>_[1],"desc").slice(0,5).map(([_,i])=>({name:`${_} (${i.toFixed(0)}%)`,value:i}))),S=N(()=>o(l($.value.byModel),_=>_[1],"desc").slice(0,5).map(([_,i])=>({name:`${_} (${i.toFixed(0)}%)`,value:i}))),h=G(""),U=G("desc"),M=G(1),ct=G(new Map),dt=N(()=>{const _=h.value?h.value.toLowerCase():"";return new Map(o(Array.from(ct.value.entries()).filter(([i,D])=>{if(!_)return!0;const E=typeof i=="string"&&i.toLowerCase().includes(_),k=D.some(C=>typeof C.provider=="string"&&C.provider.toLowerCase().includes(_));return E||k}),[([i,D])=>$.value.byModel[i]||0,([i,D])=>D[0].upTimePercentage||0],["desc",U.value]))}),mt=N(()=>{const _=Array.from(dt.value.entries());if(_.length===0)return new Map;const i=(M.value-1)*Ft,D=Math.min(i+Ft,_.length);return new Map(_.slice(i,D))}),At=async _=>{y.value=!0;const{data:i}=await s("/models/availability",{params:{type:_!=="all"?_:void 0,period:ee},server:!1}),D=new Date,E=Oa(D,{days:ee}),k=Mt(D,E),C=new Map,q=[];for(let u=0;u<7;u++)q.push({min:1/0,max:-1/0});const Bt={"mistral-large":["mistral-large","large-latest"],"gemini-flash-1.5":["gemini-flash-1.5","gemini-1.5-flash"],"gemini-pro-1.5":["gemini-pro-1.5","gemini-1.5-pro"],"llama-2-13b-chat":["llama-2-13b-chat","llama2-13b-chat"],"llama-2-7b-chat":["llama-2-7b-chat","llama2-7b-chat"],"llama-3.1-405b-instruct-turbo":["llama-3.1-405b-instruct-turbo","llama3.1-405b-instruct-turbo"],"llama-3.1-8b-instruct-turbo":["llama-3.1-8b-instruct-turbo","llama3.1-8b-instruct-turbo"],"llama-3.1-lumimaid-70b":["llama-3.1-lumimaid-70b","llama3.1-lumimaid-70b"],"llama-3.1-lumimaid-8b":["llama-3.1-lumimaid-8b","llama3.1-lumimaid-8b"],"llama-3.1-nemotron-70b-instruct":["llama-3.1-nemotron-70b-instruct","llama3.1-nemotron-70b-instruct"],"llama-3.2-11b-vision-instruct":["llama-3.2-11b-vision-instruct","llama3.2-11b-vision-instruct"],"llama-3.2-1b-instruct":["llama-3.2-1b-instruct","llama3.2-1b-instruct"],"llama-3.2-3b-instruct":["llama-3.2-3b-instruct","llama3.2-3b-instruct"],"llama-3.2-3b-instruct-turbo":["llama-3.2-3b-instruct-turbo","llama3.2-3b-instruct-turbo"],"llama-3.2-90b-vision-instruct":["llama-3.2-90b-vision-instruct","llama3.2-90b-vision-instruct"],"llama-3.2-90b-vision-instruct-turbo":["llama-3.2-90b-vision-instruct-turbo","llama3.2-90b-vision-instruct-turbo"],"llama-3.3-70b-instruct":["llama-3.3-70b-instruct","llama3.3-70b-instruct"],"llama-3.3-70b-instruct-turbo":["llama-3.3-70b-instruct-turbo","llama3.3-70b-instruct-turbo"],"llama-3-1-405b-instruct":["llama-3-1-405b-instruct","llama3-1-405b-instruct"],"llama-3-1-70b-instruct":["llama-3-1-70b-instruct","llama3-1-70b-instruct"],"llama-3-1-8b-instruct":["llama-3-1-8b-instruct","llama3-1-8b-instruct"],"llama-3-70b":["llama-3-70b","llama3-70b"],"llama-3-70b-chat":["llama-3-70b-chat","llama3-70b-chat"],"llama-3-70b-instruct":["llama-3-70b-instruct","llama3-70b-instruct"],"llama-3-70b-instruct-lite":["llama-3-70b-instruct-lite","llama3-70b-instruct-lite"],"llama-3-70b-instruct-turbo":["llama-3-70b-instruct-turbo","llama3-70b-instruct-turbo"],"llama-3-8b":["llama-3-8b","llama3-8b"],"llama-3-8b-chat":["llama-3-8b-chat","llama3-8b-chat"],"llama-3-8b-instruct":["llama-3-8b-instruct","llama3-8b-instruct"],"llama-3-8b-instruct-lite":["llama-3-8b-instruct-lite","llama3-8b-instruct-lite"],"llama-3-8b-instruct-turbo":["llama-3-8b-instruct-turbo","llama3-8b-instruct-turbo"]},Lt=["claude-3-haiku","claude-3-sonnet","claude-3-5-sonnet","claude-1","claude-instant-1","claude-2","mistral-7b-openorca","claude-3","claude-3-5","claude-3-5-haiku","claude-3-opus","clip-vit-b","clip-vit-large","codellama-13b-instruct","CodeLlama-34b-Instruct","CodeLlama-70b-Instruct","codestral","command","command-light","command-r","command-r-plus","embed-english-light-v2.0","embed-english-light-v3.0","embed-english-v2.0","embed-english-v3","embed-multilingual-v2.0","embed-multilingual-v3.0","gemini-flash","gemini-flash-8b","gemini-pro","gemini-pro-8k","gemini-pro-vision","gemma-2-27b","gemma-2-9b","gpt-3.5-turbo","gpt-3.5-turbo-instruct","gpt-4","gpt-4o","gpt-4o-mini","gpt-4-turbo","jamba-1-5-large","jamba-1-5-mini","jamba-instruct","nous-hermes-2-mixtral-8x7b","llama-guard-2-8b","llama-guard-3-11B-vision-turbo","Llama-Guard-3-8B","Llama-Rank","mistral-7b-instruct","mistral-nemo","mistral-small","mistral-tiny","mixtral-8x22B","mixtral-8x22b-instruct","mixtral-8x7b","mixtral-8x7b-instruct","mythomax-l2-13b","o1","o1-mini","o1-mini","o1-preview","stable-diffusion-2-1","stable-diffusion-v1-5","stable-diffusion-v2","stable-diffusion-xl","text-embedding-ada-002","mistral-large","large-latest","gemini-flash-1.5","gemini-1.5-flash","gemini-pro-1.5","gemini-1.5-pro","llama-2-13b-chat","llama2-13b-chat","llama-2-7b-chat","llama2-7b-chat","llama-3.1-405b-instruct-turbo","llama3.1-405b-instruct-turbo","llama-3.1-8b-instruct-turbo","llama3.1-8b-instruct-turbo","llama-3.1-lumimaid-70b","llama3.1-lumimaid-70b","llama-3.1-lumimaid-8b","llama3.1-lumimaid-8b","llama-3.1-nemotron-70b-instruct","llama3.1-nemotron-70b-instruct","llama-3.2-11b-vision-instruct","llama3.2-11b-vision-instruct","llama-3.2-1b-instruct","llama3.2-1b-instruct","llama-3.2-3b-instruct","llama3.2-3b-instruct","llama-3.2-3b-instruct-turbo","llama3.2-3b-instruct-turbo","llama-3.2-90b-vision-instruct","llama3.2-90b-vision-instruct","llama-3.2-90b-vision-instruct-turbo","llama3.2-90b-vision-instruct-turbo","llama-3.3-70b-instruct","llama3.3-70b-instruct","llama-3.3-70b-instruct-turbo","llama3.3-70b-instruct-turbo","llama-3-1-405b-instruct","llama3-1-405b-instruct","llama-3-1-70b-instruct","llama3-1-70b-instruct","llama-3-1-8b-instruct","llama3-1-8b-instruct","llama-3-70b","llama3-70b","llama-3-70b-chat","llama3-70b-chat","llama-3-70b-instruct","llama3-70b-instruct","llama-3-70b-instruct-lite","llama3-70b-instruct-lite","llama-3-70b-instruct-turbo","llama3-70b-instruct-turbo","llama-3-8b","llama3-8b","llama-3-8b-chat","llama3-8b-chat","llama-3-8b-instruct","llama3-8b-instruct","llama-3-8b-instruct-lite","llama3-8b-instruct-lite","llama-3-8b-instruct-turbo","llama3-8b-instruct-turbo"].map(u=>u.toLowerCase()).sort((u,x)=>x.length-u.length),yt=Object.entries(Bt).reduce((u,[x,w])=>(u[x.toLowerCase()]=w.map(O=>O.toLowerCase()),u),{}),Tt=Object.entries(yt).sort(([u],[x])=>x.length-u.length);for(const u of i.value||[]){const x=u.model.toLowerCase(),w=`${u.provider}_${u.model}`;let O=x;const Q=Lt.find(V=>O.includes(V));Q&&(O=Q);const St=Tt.find(([V,X])=>X.some(K=>K===O||O.includes(K)));if(St){const V=St[0],X=St[1].find(K=>x.includes(K.toLowerCase()));if(X){const K=X.toLowerCase(),R=u.model.toLowerCase().indexOf(K);if(R!==-1){const Y=R>0?u.model.slice(0,R):"",zt=R+K.length<u.model.length?u.model.slice(R+K.length):"";u.model=Y+V+zt}}O=V.toLowerCase()}C.has(O)||C.set(O,new Map);const Et=C.get(O),vt=new Date(u.last_previous_status_dt||u.created_dt);if(!Et.has(w)){const V=F.value.get(`${u.provider}_${u.route}`);if(!V){console.log(`Model ${u.provider}/${u.route} is not presented in models!`);continue}let X=new Date(u.created_dt);X=La([X,vt]);const K=Rt(X,E),jt=Rt(vt,E);let R,Y=0;K>0?R=Math.floor(K/Nt):R=0,jt>0?Y=Math.floor(jt/Nt):(Y=rt,R=0),R+Y>rt?R=rt-Y:R+Y<rt&&(Y=Y+(rt-R));const zt=[...Array(R).fill(null),...Array(Y).fill(u.last_previous_status==="AVAILABLE"?100:u.last_previous_status==="UNAVAILABLE"?0:null)];let[xt,wt,Pt,Jt]=[0,null,null,void 0];u.last_previous_status_dt&&u.last_previous_status&&(xt=b([Mt(D,vt),k]),u.last_previous_status==="AVAILABLE"?(wt=xt,Pt=wt/xt*100):(wt=0,Pt=0),Jt={dt:vt,status:u.last_previous_status});const It=[],Vt=[],re=[];V.latency.split("/").forEach((ie,$t)=>{const et=parseFloat(ie);if(Number.isNaN(et)){It.push(null),Vt.push("n/a");return}It.push(et),et<q[$t].min&&(q[$t].min=et),et>q[$t].max&&(q[$t].max=et);const Z=ja(et),Dt=[];Z.minutes&&Dt.push(`${Z.minutes}m`),Z.seconds&&!Z.minutes&&Dt.push(`${Z.seconds}s`),Z.milliseconds&&!Z.seconds&&Dt.push(`${Z.milliseconds}ms`),Vt.push(Dt.join(""))}),Et.set(w,{model:u.model,provider:u.provider,type:V.type,avgCost:V.avg_cost??null,inputCost:V.input_cost??null,outputCost:V.output_cost??null,maxTokens:V.max_tokens??null,maxResponseTokens:V.max_response_tokens??null,latencies:It,latenciesFormatted:Vt,latenciesRating:re,states:zt,isExpanded:!1,totalTracked:xt,upTime:wt,upTimePercentage:Pt,lastStatus:Jt})}if(!u.status||!u.status_dt)continue;const I=Et.get(w),_t=new Date(u.status_dt),Gt=b([Mt(D,_t),k]);let ft=I.upTime||0;I.lastStatus&&I.lastStatus.status!==u.status?u.status==="UNAVAILABLE"?ft-=Gt:u.status==="AVAILABLE"&&(ft+=Gt):I.lastStatus||(I.totalTracked=d([Mt(D,_t),I.totalTracked]),u.status==="AVAILABLE"&&(ft=I.totalTracked)),I.lastStatus={dt:_t,status:u.status},I.upTime=ft,I.upTimePercentage=ft/I.totalTracked*100;const Kt=Math.floor(Rt(D,_t)/Nt)+1,Ot=rt-Kt,Ht=u.status==="AVAILABLE"?100:0,oe=I.states[Ot];let Yt=Ht;oe!==null&&(Yt=50),I.states=[...Ot>0?I.states.slice(0,Ot-1):[],Yt,...Array(Kt).fill(Ht)]}ct.value=new Map(Array.from(C).filter(([u,x])=>x.size>0).map(([u,x])=>[u,o(Array.from(x.values()).map(w=>(w.latenciesRating=w.latencies.map((O,Q)=>O===null?0:q[Q].min===q[Q].max?100:100-(O-q[Q].min)/(q[Q].max-q[Q].min)*100),w)),({upTimePercentage:w})=>w||0,"desc")])),y.value=!1},ht=()=>{window.location="mailto:support@neuronicai.com?subject=Please add my aggregator to APIpie, here are the details"};return Ct(m,async _=>{await At(_)}),Ct(h,()=>{M.value=1}),se(async()=>{await Promise.resolve(),await At()}),(_,i)=>{const D=J("u-icon"),E=J("u-button"),k=Ye,C=J("u-card"),q=J("u-progress"),Bt=J("u-select-menu"),Lt=J("u-input"),yt=ka,Tt=J("u-pagination"),u=Se("auto-animate");return p(),B("div",Ra,[r("div",Na,[i[6]||(i[6]=r("div",{class:"text-2xl md:text-3xl font-semibold"},"Global AI Overview",-1)),r("div",null,[H(E,{color:"gray",variant:"solid",onClick:ht},{default:j(()=>[H(D,{name:"i-heroicons-outline-plus"}),i[5]||(i[5]=Ut(" Add Your Aggregator "))]),_:1})])]),r("div",Fa,[H(C,{class:"md:h-[192px] xl:h-[368px]",ui:{body:{base:"h-full"}}},{default:j(()=>[r("div",Ua,[H(k,{class:"h-[190px] md:h-full",name:"Top Providers",data:P.value,"legend-position":f(e).isGreaterOrEquals("xl")?"bottom":"right"},null,8,["data","legend-position"]),i[7]||(i[7]=r("div",{class:"md:rotate-180 h-0.5 md:h-0 w-full md:w-[4px] dark:bg-gray-700"},null,-1)),H(k,{class:"h-[190px] md:h-full",name:"Top Models",data:S.value,"legend-position":f(e).isGreaterOrEquals("xl")?"bottom":"right"},null,8,["data","legend-position"])])]),_:1}),H(C,{class:"md:h-[192px] xl:h-[368px]"},{default:j(()=>[r("div",qa,[(p(),B(W,null,pt(c,(x,w)=>(p(),B(W,null,[r("div",Ga,[r("div",Ka,A(x.name),1),r("div",Ha,A($.value.byType[x.type]),1)]),f(e).isGreaterOrEquals("xl")||f(e).isLessThan("md")?(p(),B(W,{key:0},[(w+1)%2===0&&w<c.length-1?(p(),B("div",Ya)):L("",!0)],64)):(p(),B(W,{key:1},[(w+1)%4===0&&w<c.length-1?(p(),B("div",Ja)):L("",!0)],64))],64))),64))])]),_:1}),H(C,{class:"xl:col-span-2"},{default:j(()=>[r("div",Wa,[y.value?(p(),T(q,{key:0,animation:"carousel"})):L("",!0),i[10]||(i[10]=r("div",{class:"text-sm font-semibold"},"Availability last 30 days",-1)),r("div",Qa,[H(Bt,{modelValue:m.value,"onUpdate:modelValue":i[0]||(i[0]=x=>m.value=x),color:"gray",class:"w-full md:w-96",size:"lg",options:g,"value-attribute":"key","option-attribute":"label"},null,8,["modelValue"]),r("div",Xa,[U.value==="asc"?(p(),T(E,{key:0,icon:"i-heroicons-bars-arrow-up",size:"lg",color:"gray",variant:"solid",square:"",onClick:i[1]||(i[1]=x=>U.value="desc")})):(p(),T(E,{key:1,icon:"i-heroicons-bars-arrow-down",size:"lg",color:"gray",variant:"solid",square:"",onClick:i[2]||(i[2]=x=>U.value="asc")})),H(Lt,{modelValue:h.value,"onUpdate:modelValue":i[3]||(i[3]=x=>h.value=x),class:"w-full md:w-auto",icon:"i-heroicons-magnifying-glass-20-solid",size:"lg",color:"gray",trailing:!1,placeholder:"Search..."},null,8,["modelValue"])])]),r("div",Za,[(p(!0),B(W,null,pt(mt.value.entries(),([x,w])=>(p(),T(yt,{model:{...w[0],model:w[0].model},"group-key":x},{default:j(()=>[i[9]||(i[9]=r("div",{class:"h-[0px] border border-gray-700"},null,-1)),Ee((p(),B("div",ts,[w[0].isExpanded?(p(!0),B(W,{key:0},pt(w.slice(1),O=>(p(),T(yt,{model:{...O,model:O.model},"group-key":x,secondary:""},null,8,["model","group-key"]))),256)):L("",!0)])),[[u]]),r("div",es,[i[8]||(i[8]=r("div",null,null,-1)),w.length>1?(p(),T(E,{key:0,size:"2xs",icon:w[0].isExpanded?"i-heroicons-chevron-up":"i-heroicons-chevron-down",color:"white",variant:"solid",trailing:"",onClick:O=>w[0].isExpanded=!w[0].isExpanded},{default:j(()=>[Ut(A(w[0].isExpanded?"Collapse":"Expand"),1)]),_:2},1032,["icon","onClick"])):L("",!0)])]),_:2},1032,["model","group-key"]))),256)),H(Tt,{modelValue:M.value,"onUpdate:modelValue":i[4]||(i[4]=x=>M.value=x),"page-count":Ft,total:dt.value.size},null,8,["modelValue","total"])])])]),_:1})])])}}});export{ns as default};

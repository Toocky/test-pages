var M=e=>{throw TypeError(e)};var X=(e,i,a)=>i.has(e)||M("Cannot "+a);var v=(e,i,a)=>(X(e,i,"read from private field"),a?a.call(e):i.get(e)),D=(e,i,a)=>i.has(e)?M("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(e):i.set(e,a);import Y from"./Ba7cf2dn.js";import{_ as N}from"./DlAUqK2U.js";import{z as P,G as b,o as f,R as I,a7 as O,w as j,L as m,M as x,N as Z,a as ee,a8 as re,a9 as te,aa as ae,g as d,e as $,H as V,a1 as ie,ab as ne,B as F,l as oe,D as se,n as le,W as de,k as ue,O as ce,P as z,I as B,J as S,K as C,c as ge,t as fe}from"./njpIRUE1.js";import{_ as pe}from"./COYHafkP.js";const E={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},be=e=>Object.keys(E).reduce((a,r)=>(e[r]!==void 0&&(a[r]=e[r]),a),{}),ye=P({props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1,default:null}}});function he(e,i,a,r,t,n){const o=Y;return f(),b(o,I(O(e.$props)),null,16)}const _=N(ye,[["render",he]]);function q(e){return typeof e=="string"?`'${e}'`:new ve().serialize(e)}const ve=function(){var i;class e{constructor(){D(this,i,new Map)}compare(r,t){const n=typeof r,o=typeof t;return n==="string"&&o==="string"?r.localeCompare(t):n==="number"&&o==="number"?r-t:String.prototype.localeCompare.call(this.serialize(r,!0),this.serialize(t,!0))}serialize(r,t){if(r===null)return"null";switch(typeof r){case"string":return t?r:`'${r}'`;case"bigint":return`${r}n`;case"object":return this.$object(r);case"function":return this.$function(r)}return String(r)}serializeObject(r){const t=Object.prototype.toString.call(r);if(t!=="[object Object]")return this.serializeBuiltInType(t.length<10?`unknown:${t}`:t.slice(8,-1),r);const n=r.constructor,o=n===Object||n===void 0?"":n.name;if(o!==""&&globalThis[o]===n)return this.serializeBuiltInType(o,r);if(typeof r.toJSON=="function"){const s=r.toJSON();return o+(s!==null&&typeof s=="object"?this.$object(s):`(${this.serialize(s)})`)}return this.serializeObjectEntries(o,Object.entries(r))}serializeBuiltInType(r,t){const n=this["$"+r];if(n)return n.call(this,t);if(typeof(t==null?void 0:t.entries)=="function")return this.serializeObjectEntries(r,t.entries());throw new Error(`Cannot serialize ${r}`)}serializeObjectEntries(r,t){const n=Array.from(t).sort((s,l)=>this.compare(s[0],l[0]));let o=`${r}{`;for(let s=0;s<n.length;s++){const[l,u]=n[s];o+=`${this.serialize(l,!0)}:${this.serialize(u)}`,s<n.length-1&&(o+=",")}return o+"}"}$object(r){let t=v(this,i).get(r);return t===void 0&&(v(this,i).set(r,`#${v(this,i).size}`),t=this.serializeObject(r),v(this,i).set(r,t)),t}$function(r){const t=Function.prototype.toString.call(r);return t.slice(-15)==="[native code] }"?`${r.name||""}()[native]`:`${r.name}(${r.length})${t.replace(/\s*\n\s*/g,"")}`}$Array(r){let t="[";for(let n=0;n<r.length;n++)t+=this.serialize(r[n]),n<r.length-1&&(t+=",");return t+"]"}$Date(r){try{return`Date(${r.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(r){return`ArrayBuffer[${new Uint8Array(r).join(",")}]`}$Set(r){return`Set${this.$Array(Array.from(r).sort((t,n)=>this.compare(t,n)))}`}$Map(r){return this.serializeObjectEntries("Map",r.entries())}}i=new WeakMap;for(const a of["Error","RegExp","URL"])e.prototype["$"+a]=function(r){return`${a}(${r})`};for(const a of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])e.prototype["$"+a]=function(r){return`${a}[${r.join(",")}]`};for(const a of["BigInt64Array","BigUint64Array"])e.prototype["$"+a]=function(r){return`${a}[${r.join("n,")}${r.length>0?"n":""}]`};return e}();function G(e,i){return e===i||q(e)===q(i)}function me(e,i){const a=A(e),r=A(i);return H(a,r)}function H(e,i){var t,n;const a=[],r=new Set([...Object.keys(e.props||{}),...Object.keys(i.props||{})]);if(e.props&&i.props)for(const o of r){const s=e.props[o],l=i.props[o];s&&l?a.push(...H((t=e.props)==null?void 0:t[o],(n=i.props)==null?void 0:n[o])):(s||l)&&a.push(new J((l||s).key,s?"removed":"added",l,s))}return r.size===0&&e.hash!==i.hash&&a.push(new J((i||e).key,"changed",i,e)),a}function A(e,i=""){if(e&&typeof e!="object")return new R(i,e,q(e));const a={},r=[];for(const t in e)a[t]=A(e[t],i?`${i}.${t}`:t),r.push(a[t].hash);return new R(i,e,`{${r.join(":")}}`,a)}class J{constructor(i,a,r,t){this.key=i,this.type=a,this.newValue=r,this.oldValue=t}toString(){return this.toJSON()}toJSON(){var i;switch(this.type){case"added":return`Added   \`${this.key}\``;case"removed":return`Removed \`${this.key}\``;case"changed":return`Changed \`${this.key}\` from \`${((i=this.oldValue)==null?void 0:i.toString())||"-"}\` to \`${this.newValue.toString()}\``}}}class R{constructor(i,a,r,t){this.key=i,this.value=a,this.hash=r,this.props=t}toString(){return this.props?`{${Object.keys(this.props).join(",")}}`:JSON.stringify(this.value)}toJSON(){const i=this.key||".";return this.props?`${i}({${Object.keys(this.props).join(",")}})`:`${i}(${this.value})`}}const ke=P({inheritAttrs:!1,props:{...E,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:[Boolean,String],default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function i(r,t){const n=me(r,t).reduce((l,u)=>(u.type==="added"&&l.add(u.key),l),new Set),o=Object.fromEntries(Object.entries(r).filter(([l])=>!n.has(l))),s=Object.fromEntries(Object.entries(t).filter(([l])=>!n.has(l)));return G(o,s)}function a(r,t,{isActive:n,isExactActive:o}){if(e.exactQuery==="partial"){if(!i(r.query,t.query))return e.inactiveClass}else if(e.exactQuery===!0&&!G(r.query,t.query))return e.inactiveClass;return e.exactHash&&r.hash!==t.hash?e.inactiveClass:e.exact&&o||!e.exact&&n?e.activeClass:e.inactiveClass}return{resolveLinkClass:a}}}),xe=["href","aria-disabled","role","rel","target","tabindex","onClick"];function we(e,i,a,r,t,n){const o=pe;return e.to?(f(),b(o,x({key:1},e.$props,{custom:""}),{default:j(({route:s,href:l,target:u,rel:y,navigate:p,isActive:g,isExactActive:k,isExternal:w})=>[ee("a",x(e.$attrs,{href:e.disabled?void 0:l,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:y,target:u,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(s,e._.provides[re]||e.$route,{isActive:g,isExactActive:k}),tabindex:e.disabled?-1:void 0,onClick:h=>!w&&!e.disabled&&p(h)}),[m(e.$slots,"default",I(O({isActive:e.active!==void 0?e.active:e.exact?k:g})))],16,xe)]),_:3},16)):(f(),b(Z(e.as),x({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:j(()=>[m(e.$slots,"default",I(O({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const Q=N(ke,[["render",we]]),$e=(e,i,a,r,t=!1)=>{const n=te(),o=ae(),s=d(()=>{var g;const u=$(i),y=$(a),p=$(r);return V((u==null?void 0:u.strategy)||((g=o.ui)==null?void 0:g.strategy),p?{wrapper:p}:{},u||{},t?ie(o.ui,e,{}):{},y||{})}),l=d(()=>ne(n,["class"]));return{ui:s,attrs:l}};function ze({ui:e,props:i}){const a=oe();if(de("ButtonGroupContextConsumer",!0),F("ButtonGroupContextConsumer",!1))return{size:d(()=>i.size),rounded:d(()=>e.value.rounded)};let t=a.parent,n;for(;t&&!n;){if(t.type.name==="ButtonGroup"){n=F(`group-${t.uid}`);break}t=t.parent}const o=d(()=>n==null?void 0:n.value.children.indexOf(a));return se(()=>{n==null||n.value.register(a)}),le(()=>{n==null||n.value.unregister(a)}),{size:d(()=>n!=null&&n.value?(n==null?void 0:n.value.size)??e.value.default.size:i.size),rounded:d(()=>!n||o.value===-1?e.value.rounded:n.value.children.length===1?n.value.ui.rounded:o.value===0?n.value.rounded.start:o.value===n.value.children.length-1?n.value.rounded.end:"rounded-none")}}const Se={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 aria-disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 dark:aria-disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},K={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},W={wrapper:"relative",base:"relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",form:"form-input",rounded:"rounded-md",placeholder:"placeholder-gray-400 dark:placeholder-gray-500",file:{base:"file:mr-1.5 file:font-medium file:text-gray-500 dark:file:text-gray-400 file:bg-transparent file:border-0 file:p-0 file:outline-none"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},leading:{padding:{"2xs":"ps-7",xs:"ps-8",sm:"ps-9",md:"ps-10",lg:"ps-11",xl:"ps-12"}},trailing:{padding:{"2xs":"pe-7",xs:"pe-8",sm:"pe-9",md:"pe-10",lg:"pe-11",xl:"pe-12"}},color:{white:{outline:"shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"},gray:{outline:"shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"}},variant:{outline:"shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",none:"bg-transparent focus:ring-0 focus:shadow-none"},icon:{base:"flex-shrink-0 text-gray-400 dark:text-gray-500",color:"text-{color}-500 dark:text-{color}-400",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"},leading:{wrapper:"absolute inset-y-0 start-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}},trailing:{wrapper:"absolute inset-y-0 end-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}}},default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid"}},T={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid",empty:{label:"No options."},optionEmpty:{label:'No results for "{query}".'}},arrow:{...K,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...W});const Ne={...W,form:"form-select",placeholder:"text-gray-400 dark:text-gray-500",default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"}},Pe={...T,select:"inline-flex items-center text-left cursor-default",input:"block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none",required:"absolute inset-0 w-px opacity-0 cursor-default",label:"block truncate",option:{...T.option,create:"block truncate"},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",clearSearchOnClose:!1,showCreateOptionWhen:"empty",searchablePlaceholder:{label:"Search..."},empty:{label:"No options."},optionEmpty:{label:'No results for "{query}".'}},arrow:{...K,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}},c=V(B.ui.strategy,B.ui.button,Se),Ce=P({components:{UIcon:_,ULink:Q},inheritAttrs:!1,props:{...E,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>c.default.size,validator(e){return Object.keys(c.size).includes(e)}},color:{type:String,default:()=>c.default.color,validator(e){return[...B.ui.colors,...Object.keys(c.color)].includes(e)}},variant:{type:String,default:()=>c.default.variant,validator(e){return[...Object.keys(c.variant),...Object.values(c.color).flatMap(i=>Object.keys(i))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>c.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:i}){const{ui:a,attrs:r}=$e("button",ue(e,"ui"),c),{size:t,rounded:n}=ze({ui:a,props:e}),o=d(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),s=d(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),l=d(()=>e.square||!i.default&&!e.label),u=d(()=>{var U,L;const h=((L=(U=a.value.color)==null?void 0:U[e.color])==null?void 0:L[e.variant])||a.value.variant[e.variant];return ce(z(a.value.base,a.value.font,n.value,a.value.size[t.value],a.value.gap[t.value],e.padded&&a.value[l.value?"square":"padding"][t.value],h==null?void 0:h.replaceAll("{color}",e.color),e.block?a.value.block:a.value.inline),e.class)}),y=d(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),p=d(()=>e.loading&&!o.value?e.loadingIcon:e.trailingIcon||e.icon),g=d(()=>z(a.value.icon.base,a.value.icon.size[t.value],e.loading&&a.value.icon.loading)),k=d(()=>z(a.value.icon.base,a.value.icon.size[t.value],e.loading&&!o.value&&a.value.icon.loading)),w=d(()=>be(e));return{ui:a,attrs:r,isLeading:o,isTrailing:s,isSquare:l,buttonClass:u,leadingIconName:y,trailingIconName:p,leadingIconClass:g,trailingIconClass:k,linkProps:w}}});function Ie(e,i,a,r,t,n){const o=_,s=Q;return f(),b(s,x({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:j(()=>[m(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(f(),b(o,{key:0,name:e.leadingIconName,class:C(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):S("",!0)]),m(e.$slots,"default",{},()=>[e.label?(f(),ge("span",{key:0,class:C([e.truncate?e.ui.truncate:""])},fe(e.label),3)):S("",!0)]),m(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(f(),b(o,{key:0,name:e.trailingIconName,class:C(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):S("",!0)])]),_:3},16,["type","disabled","class"])}const Ee=N(Ce,[["render",Ie]]);export{_,Pe as a,ze as b,W as c,Se as d,Ee as e,q as f,Q as g,G as i,Ne as s,$e as u};

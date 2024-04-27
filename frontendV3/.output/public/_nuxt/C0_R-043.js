import{ai as R,r as b,aj as j,O as B,z as F,J as O,A as T,af as z,ak as M,h as U,al as $,I as H,am as L,an as q,ao as x,ap as h}from"./C79j48wv.js";const K=s=>s==="defer"||s===!1;function I(...s){var v;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[t,i,a={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=z(),u=i,y=()=>null,g=()=>e.isHydrating?e.payload.data[t]:e.static.data[t];a.server=a.server??!0,a.default=a.default??y,a.getCachedData=a.getCachedData??g,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??R.deep,a.dedupe=a.dedupe??"cancel";const m=()=>a.getCachedData(t,e)!=null;if(!e._asyncData[t]||!a.immediate){(v=e.payload._errors)[t]??(v[t]=null);const c=a.deep?b:j;e._asyncData[t]={data:c(a.getCachedData(t,e)??a.default()),pending:b(!m()),error:B(e.payload._errors,t),status:b("idle")}}const r={...e._asyncData[t]};r.refresh=r.execute=(c={})=>{if(e._asyncDataPromises[t]){if(K(c.dedupe??a.dedupe))return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if((c._initial||e.isHydrating&&c._initial!==!1)&&m())return Promise.resolve(a.getCachedData(t,e));r.pending.value=!0,r.status.value="pending";const f=new Promise((o,l)=>{try{o(u(e))}catch(_){l(_)}}).then(async o=>{if(f.cancelled)return e._asyncDataPromises[t];let l=o;a.transform&&(l=await a.transform(o)),a.pick&&(l=S(l,a.pick)),e.payload.data[t]=l,r.data.value=l,r.error.value=null,r.status.value="success"}).catch(o=>{if(f.cancelled)return e._asyncDataPromises[t];r.error.value=M(o),r.data.value=U(a.default()),r.status.value="error"}).finally(()=>{f.cancelled||(r.pending.value=!1,delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=f,e._asyncDataPromises[t]},r.clear=()=>N(e,t);const D=()=>r.refresh({_initial:!0}),w=a.server!==!1&&e.payload.serverRendered;{const c=$();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const o=c._nuxtOnBeforeMountCbs;c&&(F(()=>{o.forEach(l=>{l()}),o.splice(0,o.length)}),O(()=>o.splice(0,o.length)))}w&&e.isHydrating&&(r.error.value||m())?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):c&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?c._nuxtOnBeforeMountCbs.push(D):a.immediate&&D(),a.watch&&T(a.watch,()=>r.refresh());const f=e.hook("app:data:refresh",async o=>{(!o||o.includes(t))&&await r.refresh()});c&&O(f)}const p=Promise.resolve(e._asyncDataPromises[t]).then(()=>r);return Object.assign(p,r),p}function N(s,n){n in s.payload.data&&(s.payload.data[n]=void 0),n in s.payload._errors&&(s.payload._errors[n]=null),s._asyncData[n]&&(s._asyncData[n].data.value=void 0,s._asyncData[n].error.value=null,s._asyncData[n].pending.value=!1,s._asyncData[n].status.value="idle"),n in s._asyncDataPromises&&(s._asyncDataPromises[n].cancelled=!0,s._asyncDataPromises[n]=void 0)}function S(s,n){const t={};for(const i of n)t[i]=s[i];return t}function Q(s,n,t){const[i={},a]=typeof n=="string"?[{},n]:[n,t],e=H(()=>h(s)),u=i.key||L([a,typeof e.value=="string"?e.value:"",...G(i)]);if(!u||typeof u!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+u);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const y=u===a?"$f"+u:u;if(!i.baseURL&&typeof e.value=="string"&&e.value[0]==="/"&&e.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:g,lazy:m,default:r,transform:D,pick:w,watch:p,immediate:v,getCachedData:c,deep:f,dedupe:o,...l}=i,_=q({...x,...l,cache:typeof i.cache=="boolean"?void 0:i.cache}),E={server:g,lazy:m,default:r,transform:D,pick:w,immediate:v,getCachedData:c,deep:f,dedupe:o,watch:p===!1?[]:[_,e,...p||[]]};let d;return I(y,()=>{var P;(P=d==null?void 0:d.abort)==null||P.call(d),d=typeof AbortController<"u"?new AbortController:{};const C=h(i.timeout);return C&&setTimeout(()=>d.abort(),C),(i.$fetch||globalThis.$fetch)(e.value,{signal:d.signal,..._})},E)}function G(s){var t;const n=[((t=h(s.method))==null?void 0:t.toUpperCase())||"GET",h(s.baseURL)];for(const i of[s.params||s.query]){const a=h(i);if(!a)continue;const e={};for(const[u,y]of Object.entries(a))e[h(u)]=h(y);n.push(e)}return n}export{Q as u};
//# sourceMappingURL=C0_R-043.js.map

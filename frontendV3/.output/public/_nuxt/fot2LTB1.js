import B from"./DMxTXIy3.js";import C from"./BbMdD1GC.js";import{_ as h,M as P,N as v,G as U,o as u,i as d,w as q,R as c,D as g,j as f,c as w,t as A,V as M,O as D,I as n,X as G,Y as m}from"./C79j48wv.js";import{u as R}from"./DdJAE_fm.js";import{a as T}from"./1ywJQXx5.js";import{b as V}from"./blSOxsGD.js";import{n as p,g as E}from"./aPxrJPp6.js";import"./D6pSI3Cj.js";import"./qsMMcMsd.js";import"./DnKWDGcn.js";const l=P(v.ui.strategy,v.ui.button,V),J=U({components:{UIcon:B,ULink:C},inheritAttrs:!1,props:{...p,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>l.default.size,validator(e){return Object.keys(l.size).includes(e)}},color:{type:String,default:()=>l.default.color,validator(e){return[...v.ui.colors,...Object.keys(l.color)].includes(e)}},variant:{type:String,default:()=>l.default.variant,validator(e){return[...Object.keys(l.variant),...Object.values(l.color).flatMap(o=>Object.keys(o))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>l.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:o}){const{ui:a,attrs:y}=R("button",D(e,"ui"),l),{size:t,rounded:b}=T({ui:a,props:e}),i=n(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),s=n(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),I=n(()=>e.square||!o.default&&!e.label),j=n(()=>{var k,S;const r=((S=(k=a.value.color)==null?void 0:k[e.color])==null?void 0:S[e.variant])||a.value.variant[e.variant];return G(m(a.value.base,a.value.font,b.value,a.value.size[t.value],a.value.gap[t.value],e.padded&&a.value[I.value?"square":"padding"][t.value],r==null?void 0:r.replaceAll("{color}",e.color),e.block?a.value.block:a.value.inline),e.class)}),N=n(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),z=n(()=>e.loading&&!i.value?e.loadingIcon:e.trailingIcon||e.icon),O=n(()=>m(a.value.icon.base,a.value.icon.size[t.value],e.loading&&a.value.icon.loading)),$=n(()=>m(a.value.icon.base,a.value.icon.size[t.value],e.loading&&!i.value&&a.value.icon.loading)),L=n(()=>E(e));return{ui:a,attrs:y,isLeading:i,isTrailing:s,isSquare:I,buttonClass:j,leadingIconName:N,trailingIconName:z,leadingIconClass:O,trailingIconClass:$,linkProps:L}}});function X(e,o,a,y,t,b){const i=B,s=C;return u(),d(s,M({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:q(()=>[c(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(u(),d(i,{key:0,name:e.leadingIconName,class:g(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):f("",!0)]),c(e.$slots,"default",{},()=>[e.label?(u(),w("span",{key:0,class:g([e.truncate?e.ui.truncate:""])},A(e.label),3)):f("",!0)]),c(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(u(),d(i,{key:0,name:e.trailingIconName,class:g(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):f("",!0)])]),_:3},16,["type","disabled","class"])}const ae=h(J,[["render",X]]);export{ae as default};
//# sourceMappingURL=fot2LTB1.js.map

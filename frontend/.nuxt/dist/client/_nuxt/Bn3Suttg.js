import{_ as oe}from"./DnKWDGcn.js";import ue from"./DMxTXIy3.js";import{_ as le}from"./BjmXGlrl.js";import re from"./CWIfGKTl.js";import{u as me}from"./BVfGos88.js";import{G as N,r as w,I as P,H as fe,g as se,J as ge,K as be,a2 as A,L as Me,_ as Ie,M as ye,N as Y,O as Z,a3 as he,A as x,X as Se,Y as ke,P as E,o as S,i as O,w as T,b as L,D as R,R as ee,a as _,c as D,a4 as we,U as Pe,V as H,j as F,F as z,m as J,a5 as Re,t as te,d as Te}from"./C79j48wv.js";import{o as M,u as De,A as U,I as q,N as ae,a as g,l as $e}from"./1DmPJJeo.js";import{w as Ce}from"./BwFfse_O.js";import{s as Oe}from"./BkGD_4l5.js";import{p as Ae}from"./CMV_7gpD.js";import{i as Ne,u as Be,f as Ee,c as k}from"./DVQPbV6P.js";import{t as Le,i as j,l as He}from"./CUwOD5JQ.js";import{w as Fe,h as je,v as Ue,N as ne,_ as ie,O as Ke}from"./CxY9nUXs.js";import{d as _e,u as ze}from"./DdJAE_fm.js";import{u as Je}from"./zbyaCEtW.js";import{g as Ve}from"./aPxrJPp6.js";import"./D6pSI3Cj.js";import"./qsMMcMsd.js";import"./CjtFFtQm.js";var qe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(qe||{}),Qe=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Qe||{});function Ge(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let de=Symbol("MenuContext");function K(e){let I=Me(de,null);if(I===null){let f=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,K),f}return I}let We=N({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:I,attrs:f}){let b=w(1),v=w(null),m=w(null),t=w([]),o=w(""),s=w(null),p=w(1);function y(a=r=>r){let r=s.value!==null?t.value[s.value]:null,u=Ke(a(t.value.slice()),l=>M(l.dataRef.domRef)),d=r?u.indexOf(r):null;return d===-1&&(d=null),{items:u,activeItemIndex:d}}let i={menuState:b,buttonRef:v,itemsRef:m,items:t,searchQuery:o,activeItemIndex:s,activationTrigger:p,closeMenu:()=>{b.value=1,s.value=null},openMenu:()=>b.value=0,goToItem(a,r,u){let d=y(),l=Ee(a===k.Specific?{focus:k.Specific,id:r}:{focus:a},{resolveItems:()=>d.items,resolveActiveIndex:()=>d.activeItemIndex,resolveId:n=>n.id,resolveDisabled:n=>n.dataRef.disabled});o.value="",s.value=l,p.value=u??1,t.value=d.items},search(a){let r=o.value!==""?0:1;o.value+=a.toLowerCase();let u=(s.value!==null?t.value.slice(s.value+r).concat(t.value.slice(0,s.value+r)):t.value).find(l=>l.dataRef.textValue.startsWith(o.value)&&!l.dataRef.disabled),d=u?t.value.indexOf(u):-1;d===-1||d===s.value||(s.value=d,p.value=1)},clearSearch(){o.value=""},registerItem(a,r){let u=y(d=>[...d,{id:a,dataRef:r}]);t.value=u.items,s.value=u.activeItemIndex,p.value=1},unregisterItem(a){let r=y(u=>{let d=u.findIndex(l=>l.id===a);return d!==-1&&u.splice(d,1),u});t.value=r.items,s.value=r.activeItemIndex,p.value=1}};return Ce([v,m],(a,r)=>{var u;i.closeMenu(),Fe(r,je.Loose)||(a.preventDefault(),(u=M(v))==null||u.focus())},P(()=>b.value===0)),fe(de,i),Le(P(()=>De(b.value,{0:j.Open,1:j.Closed}))),()=>{let a={open:b.value===0,close:i.closeMenu};return U({ourProps:{},theirProps:e,slot:a,slots:I,attrs:f,name:"Menu"})}}}),Xe=N({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:I,slots:f,expose:b}){var v;let m=(v=e.id)!=null?v:`headlessui-menu-button-${q()}`,t=K("MenuButton");b({el:t.buttonRef,$el:t.buttonRef});function o(i){switch(i.key){case g.Space:case g.Enter:case g.ArrowDown:i.preventDefault(),i.stopPropagation(),t.openMenu(),A(()=>{var a;(a=M(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(k.First)});break;case g.ArrowUp:i.preventDefault(),i.stopPropagation(),t.openMenu(),A(()=>{var a;(a=M(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(k.Last)});break}}function s(i){switch(i.key){case g.Space:i.preventDefault();break}}function p(i){e.disabled||(t.menuState.value===0?(t.closeMenu(),A(()=>{var a;return(a=M(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(i.preventDefault(),t.openMenu(),Ge(()=>{var a;return(a=M(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let y=Oe(P(()=>({as:e.as,type:I.type})),t.buttonRef);return()=>{var i;let a={open:t.menuState.value===0},{...r}=e,u={ref:t.buttonRef,id:m,type:y.value,"aria-haspopup":"menu","aria-controls":(i=M(t.itemsRef))==null?void 0:i.id,"aria-expanded":t.menuState.value===0,onKeydown:o,onKeyup:s,onClick:p};return U({ourProps:u,theirProps:r,slot:a,attrs:I,slots:f,name:"MenuButton"})}}}),Ye=N({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:I,slots:f,expose:b}){var v;let m=(v=e.id)!=null?v:`headlessui-menu-items-${q()}`,t=K("MenuItems"),o=w(null);b({el:t.itemsRef,$el:t.itemsRef}),Ne({container:P(()=>M(t.itemsRef)),enabled:P(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function s(a){var r;switch(o.value&&clearTimeout(o.value),a.key){case g.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case g.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let u=t.items.value[t.activeItemIndex.value];(r=M(u.dataRef.domRef))==null||r.click()}t.closeMenu(),ie(M(t.buttonRef));break;case g.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.Next);case g.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.Previous);case g.Home:case g.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.First);case g.End:case g.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.Last);case g.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),A(()=>{var u;return(u=M(t.buttonRef))==null?void 0:u.focus({preventScroll:!0})});break;case g.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),A(()=>Ue(M(t.buttonRef),a.shiftKey?ne.Previous:ne.Next));break;default:a.key.length===1&&(t.search(a.key),o.value=setTimeout(()=>t.clearSearch(),350));break}}function p(a){switch(a.key){case g.Space:a.preventDefault();break}}let y=He(),i=P(()=>y!==null?(y.value&j.Open)===j.Open:t.menuState.value===0);return()=>{var a,r;let u={open:t.menuState.value===0},{...d}=e,l={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(r=M(t.buttonRef))==null?void 0:r.id,id:m,onKeydown:s,onKeyup:p,role:"menu",tabIndex:0,ref:t.itemsRef};return U({ourProps:l,theirProps:d,slot:u,attrs:I,slots:f,features:ae.RenderStrategy|ae.Static,visible:i.value,name:"MenuItems"})}}}),Ze=N({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:I,attrs:f,expose:b}){var v;let m=(v=e.id)!=null?v:`headlessui-menu-item-${q()}`,t=K("MenuItem"),o=w(null);b({el:o,$el:o});let s=P(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===m:!1),p=Ae(o),y=P(()=>({disabled:e.disabled,get textValue(){return p()},domRef:o}));se(()=>t.registerItem(m,y)),ge(()=>t.unregisterItem(m)),be(()=>{t.menuState.value===0&&s.value&&t.activationTrigger.value!==0&&A(()=>{var n,c;return(c=(n=M(o))==null?void 0:n.scrollIntoView)==null?void 0:c.call(n,{block:"nearest"})})});function i(n){if(e.disabled)return n.preventDefault();t.closeMenu(),ie(M(t.buttonRef))}function a(){if(e.disabled)return t.goToItem(k.Nothing);t.goToItem(k.Specific,m)}let r=Be();function u(n){r.update(n)}function d(n){r.wasMoved(n)&&(e.disabled||s.value||t.goToItem(k.Specific,m,0))}function l(n){r.wasMoved(n)&&(e.disabled||s.value&&t.goToItem(k.Nothing))}return()=>{let{disabled:n}=e,c={active:s.value,disabled:n,close:t.closeMenu},{...h}=e;return U({ourProps:{id:m,ref:o,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,disabled:void 0,onClick:i,onFocus:a,onPointerenter:u,onMouseenter:u,onPointermove:d,onMousemove:d,onPointerleave:l,onMouseleave:l},theirProps:{...f,...h},slot:c,attrs:f,slots:I,name:"MenuItem"})}}});const V=ye(Y.ui.strategy,Y.ui.dropdown,_e),xe=N({components:{HMenu:We,HMenuButton:Xe,HMenuItems:Ye,HMenuItem:Ze,UIcon:ue,UAvatar:le,UKbd:re},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},openDelay:{type:Number,default:()=>V.default.openDelay},closeDelay:{type:Number,default:()=>V.default.closeDelay},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:I}){const{ui:f,attrs:b}=ze("dropdown",Z(e,"ui"),V,Z(e,"class")),v=P(()=>he(e.mode==="hover"?{offsetDistance:0}:{},e.popper,f.value.popper)),[m,t]=Je(v.value),o=w(null);let s=null,p=null;se(()=>{var c,h;const l=(c=m.value)==null?void 0:c.$.provides;if(!l)return;const n=Object.getOwnPropertySymbols(l);o.value=n.length&&l[n[0]],e.open&&((h=o.value)==null||h.openMenu())});const y=P(()=>{var h,$,C;if(e.mode!=="hover")return{};const l=((h=e.popper)==null?void 0:h.offsetDistance)||(($=f.value.popper)==null?void 0:$.offsetDistance)||8,n=(C=v.value.placement)==null?void 0:C.split("-")[0],c=`${l}px`;return n==="top"||n==="bottom"?{paddingTop:c,paddingBottom:c}:n==="left"||n==="right"?{paddingLeft:c,paddingRight:c}:{paddingTop:c,paddingBottom:c,paddingLeft:c,paddingRight:c}});function i(){o.value&&(o.value.menuState===0?o.value.closeMenu():o.value.openMenu())}function a(){e.mode!=="hover"||!o.value||(p&&(clearTimeout(p),p=null),o.value.menuState!==0&&(s=s||setTimeout(()=>{o.value.openMenu&&o.value.openMenu(),s=null},e.openDelay)))}function r(){e.mode!=="hover"||!o.value||(s&&(clearTimeout(s),s=null),o.value.menuState!==1&&(p=p||setTimeout(()=>{o.value.closeMenu&&o.value.closeMenu(),p=null},e.closeDelay)))}function u(l,n,{href:c,navigate:h,close:$,isExternal:C}){n.click&&n.click(l),c&&!C&&(h(l),$())}x(()=>e.open,(l,n)=>{o.value&&(n===void 0||l===n||(l?o.value.openMenu():o.value.closeMenu()))}),x(()=>{var l;return(l=o.value)==null?void 0:l.menuState},(l,n)=>{n===void 0||l===n||I("update:open",l===0)});const d=oe;return $e(()=>me("$ctlRmIk4j0")),{ui:f,attrs:b,popper:v,trigger:m,container:t,containerStyle:y,onTouchStart:i,onMouseEnter:a,onMouseLeave:r,onClick:u,getNuxtLinkProps:Ve,twMerge:Se,twJoin:ke,NuxtLink:d}}}),et=["disabled"];function tt(e,I,f,b,v,m){const t=E("HMenuButton"),o=ue,s=le,p=re,y=E("HMenuItem"),i=oe,a=E("HMenuItems"),r=E("HMenu");return S(),O(r,H({as:"div",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:T(({open:u})=>[L(t,{ref:"trigger",as:"div",disabled:e.disabled,class:R(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstartPassive:e.onTouchStart},{default:T(()=>[ee(e.$slots,"default",{open:u,disabled:e.disabled},()=>[_("button",{disabled:e.disabled}," Open ",8,et)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstartPassive"]),u&&e.items.length?(S(),D("div",{key:0,ref:"container",class:R([e.ui.container,e.ui.width]),style:we(e.containerStyle)},[L(Pe,H({appear:""},e.ui.transition),{default:T(()=>[_("div",null,[e.popper.arrow?(S(),D("div",{key:0,"data-popper-arrow":"",class:R(Object.values(e.ui.arrow))},null,2)):F("",!0),L(a,{class:R([e.ui.base,e.ui.divide,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background,e.ui.height]),static:""},{default:T(()=>[(S(!0),D(z,null,J(e.items,(d,l)=>(S(),D("div",{key:l,class:R(e.ui.padding)},[(S(!0),D(z,null,J(d,(n,c)=>(S(),O(i,H({key:c},e.getNuxtLinkProps(n),{custom:""}),{default:T(({href:h,target:$,rel:C,navigate:pe,isExternal:ce,isActive:Q})=>[L(y,{disabled:n.disabled},{default:T(({active:G,disabled:W,close:ve})=>[(S(),O(Re(h?"a":"button"),{href:W?void 0:h,rel:C,target:$,class:R(e.twMerge(e.twJoin(e.ui.item.base,e.ui.item.padding,e.ui.item.size,e.ui.item.rounded,G||Q?e.ui.item.active:e.ui.item.inactive,W&&e.ui.item.disabled),n.class)),onClick:B=>e.onClick(B,n,{href:h,navigate:pe,close:ve,isExternal:ce})},{default:T(()=>[ee(e.$slots,n.slot||"item",{item:n},()=>{var B;return[n.icon?(S(),O(o,{key:0,name:n.icon,class:R(e.twMerge(e.twJoin(e.ui.item.icon.base,G||Q?e.ui.item.icon.active:e.ui.item.icon.inactive),n.iconClass))},null,8,["name","class"])):n.avatar?(S(),O(s,H({key:1},{size:e.ui.item.avatar.size,...n.avatar},{class:e.ui.item.avatar.base}),null,16,["class"])):F("",!0),_("span",{class:R(e.twMerge(e.ui.item.label,n.labelClass))},te(n.label),3),(B=n.shortcuts)!=null&&B.length?(S(),D("span",{key:2,class:R(e.ui.item.shortcuts)},[(S(!0),D(z,null,J(n.shortcuts,X=>(S(),O(p,{key:X},{default:T(()=>[Te(te(X),1)]),_:2},1024))),128))],2)):F("",!0)]})]),_:2},1032,["href","rel","target","class","onClick"]))]),_:2},1032,["disabled"])]),_:2},1040))),128))],2))),128))]),_:3},8,["class"])])]),_:3},16)],6)):F("",!0)]),_:3},16,["class","onMouseleave"])}const ht=Ie(xe,[["render",tt]]);export{ht as default};
//# sourceMappingURL=Bn3Suttg.js.map
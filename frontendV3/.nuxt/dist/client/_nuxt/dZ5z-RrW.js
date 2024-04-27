import{_ as N,M as A,N as m,G as M,O as $,I as l,X as c,Y as n,o as B,c as I,s as O,v as j,a as k,V as D,D as p,a4 as F}from"./C79j48wv.js";import{u as G}from"./DdJAE_fm.js";import{u as R}from"./CbDhBW09.js";const U={wrapper:"relative w-full flex items-center",base:"w-full absolute appearance-none cursor-pointer disabled:cursor-not-allowed disabled:bg-opacity-50 focus:outline-none peer group",rounded:"rounded-lg",background:"bg-transparent",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",progress:{base:"absolute pointer-events-none peer-disabled:bg-opacity-50",rounded:"rounded-s-lg",background:"bg-{color}-500 dark:bg-{color}-400",size:{"2xs":"h-px",xs:"h-0.5",sm:"h-1",md:"h-2",lg:"h-3",xl:"h-4","2xl":"h-5"}},thumb:{base:"[&::-webkit-slider-thumb]:relative [&::-moz-range-thumb]:relative [&::-webkit-slider-thumb]:z-[1] [&::-moz-range-thumb]:z-[1] [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0",color:"text-{color}-500 dark:text-{color}-400",background:"[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:dark:bg-gray-900 [&::-moz-range-thumb]:bg-current",ring:"[&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-current",size:{"2xs":"[&::-webkit-slider-thumb]:h-1.5 [&::-moz-range-thumb]:h-1.5 [&::-webkit-slider-thumb]:w-1.5 [&::-moz-range-thumb]:w-1.5 [&::-webkit-slider-thumb]:mt-[-2.5px] [&::-moz-range-thumb]:mt-[-2.5px]",xs:"[&::-webkit-slider-thumb]:h-2 [&::-moz-range-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 [&::-moz-range-thumb]:w-2 [&::-webkit-slider-thumb]:mt-[-3px] [&::-moz-range-thumb]:mt-[-3px]",sm:"[&::-webkit-slider-thumb]:h-3 [&::-moz-range-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-moz-range-thumb]:w-3 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1",md:"[&::-webkit-slider-thumb]:h-4 [&::-moz-range-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-moz-range-thumb]:w-4 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1",lg:"[&::-webkit-slider-thumb]:h-5 [&::-moz-range-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-moz-range-thumb]:w-5 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1",xl:"[&::-webkit-slider-thumb]:h-6 [&::-moz-range-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-moz-range-thumb]:w-6 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1","2xl":"[&::-webkit-slider-thumb]:h-7 [&::-moz-range-thumb]:h-7 [&::-webkit-slider-thumb]:w-7 [&::-moz-range-thumb]:w-7 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1"}},track:{base:"[&::-webkit-slider-runnable-track]:group-disabled:bg-opacity-50 [&::-moz-range-track]:group-disabled:bg-opacity-50",background:"[&::-webkit-slider-runnable-track]:bg-gray-200 [&::-moz-range-track]:bg-gray-200 [&::-webkit-slider-runnable-track]:dark:bg-gray-700 [&::-moz-range-track]:dark:bg-gray-700",rounded:"[&::-webkit-slider-runnable-track]:rounded-lg [&::-moz-range-track]:rounded-lg",size:{"2xs":"[&::-webkit-slider-runnable-track]:h-px [&::-moz-range-track]:h-px",xs:"[&::-webkit-slider-runnable-track]:h-0.5 [&::-moz-range-track]:h-0.5",sm:"[&::-webkit-slider-runnable-track]:h-1 [&::-moz-range-track]:h-1",md:"[&::-webkit-slider-runnable-track]:h-2 [&::-moz-range-track]:h-2",lg:"[&::-webkit-slider-runnable-track]:h-3 [&::-moz-range-track]:h-3",xl:"[&::-webkit-slider-runnable-track]:h-4 [&::-moz-range-track]:h-4","2xl":"[&::-webkit-slider-runnable-track]:h-5 [&::-moz-range-track]:h-5"}},size:{"2xs":"h-1.5",xs:"h-2",sm:"h-3",md:"h-4",lg:"h-5",xl:"h-6","2xl":"h-7"},default:{size:"md",color:"primary"}},i=A(m.ui.strategy,m.ui.range,U),E=M({inheritAttrs:!1,props:{modelValue:{type:Number,default:0},id:{type:String,default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},size:{type:String,default:null,validator(e){return Object.keys(i.size).includes(e)}},color:{type:String,default:()=>i.default.color,validator(e){return m.ui.colors.includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:t}){const{ui:r,attrs:b}=G("range",$(e,"ui"),i),{emitFormChange:d,inputId:g,color:a,size:u,name:w}=R(e,i),z=l({get(){return e.modelValue},set(s){t("update:modelValue",s)}}),v=s=>{t("change",s.target.value),d()},f=l(()=>c(n(r.value.wrapper,r.value.size[u.value]),e.class)),y=l(()=>c(n(r.value.base,r.value.background,r.value.rounded,a.value&&r.value.ring.replaceAll("{color}",a.value),r.value.size[u.value]),e.inputClass)),C=l(()=>n(r.value.thumb.base,a.value&&r.value.thumb.color.replaceAll("{color}",a.value),r.value.thumb.ring,r.value.thumb.background,r.value.thumb.size[u.value])),x=l(()=>n(r.value.track.base,r.value.track.background,r.value.track.rounded,r.value.track.size[u.value])),V=l(()=>n(r.value.progress.base,r.value.progress.rounded,a.value&&r.value.progress.background.replaceAll("{color}",a.value),r.value.progress.size[u.value])),S=l(()=>{const{modelValue:s,min:o,max:h}=e;return{width:`${(Math.max(o,Math.min(s,h))-o)/(h-o)*100}%`}});return{ui:r,attrs:b,name:w,inputId:g,value:z,wrapperClass:f,inputClass:y,thumbClass:C,trackClass:x,progressClass:V,progressStyle:S,onChange:v}}}),J=["id","name","min","max","disabled","step"];function P(e,t,r,b,d,g){return B(),I("div",{class:p(e.wrapperClass)},[O(k("input",D({id:e.inputId,ref:"input","onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),name:e.name,min:e.min,max:e.max,disabled:e.disabled,step:e.step,type:"range",class:[e.inputClass,e.thumbClass,e.trackClass]},e.attrs,{onChange:t[1]||(t[1]=(...a)=>e.onChange&&e.onChange(...a))}),null,16,J),[[j,e.value,void 0,{number:!0}]]),k("span",{class:p(e.progressClass),style:F(e.progressStyle)},null,6)],2)}const K=N(E,[["render",P]]);export{K as default};
//# sourceMappingURL=dZ5z-RrW.js.map

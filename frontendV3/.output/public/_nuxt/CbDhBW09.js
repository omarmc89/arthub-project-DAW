import{L as z,r as i,ax as x,I as c}from"./C79j48wv.js";const j=(a,v)=>{const I=z("form-events",void 0),e=z("form-group",void 0),F=z("form-inputs",void 0);e&&(a!=null&&a.id&&(e.inputId.value=a==null?void 0:a.id),F&&(F.value[e.name.value]=e.inputId.value));const n=i(!1);function m(l,d){I&&I.emit({type:l,path:d})}function t(){m("blur",e==null?void 0:e.name.value),n.value=!0}function b(){m("change",e==null?void 0:e.name.value)}const h=x(()=>{(n.value||e!=null&&e.eagerValidation.value)&&m("input",e==null?void 0:e.name.value)},300);return{inputId:c(()=>(a==null?void 0:a.id)??(e==null?void 0:e.inputId.value)),name:c(()=>(a==null?void 0:a.name)??(e==null?void 0:e.name.value)),size:c(()=>{var d;const l=v.size[e==null?void 0:e.size.value]?e==null?void 0:e.size.value:null;return(a==null?void 0:a.size)??l??((d=v==null?void 0:v.default)==null?void 0:d.size)}),color:c(()=>{var l;return(l=e==null?void 0:e.error)!=null&&l.value?"red":a==null?void 0:a.color}),emitFormBlur:t,emitFormInput:h,emitFormChange:b}};export{j as u};
//# sourceMappingURL=CbDhBW09.js.map

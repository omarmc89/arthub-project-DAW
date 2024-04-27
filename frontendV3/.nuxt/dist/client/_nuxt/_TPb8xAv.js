import R from"./sKitCyr3.js";import q from"./BHQ3l2YK.js";import{u as I}from"./WkucPJ3U.js";import{_ as B,r as l,n as D,i as E,w as j,o as r,a as e,b as L,q as O,s as n,v as i,h as a,B as d,c as u,j as y,t as V,p as P,e as M}from"./C79j48wv.js";import{u as z}from"./C0_R-043.js";import"./DMxTXIy3.js";import"./D6pSI3Cj.js";import"./qsMMcMsd.js";import"./DdJAE_fm.js";import"./CbDhBW09.js";import"./1ywJQXx5.js";const s=x=>(P("data-v-3aaef070"),x=x(),M(),x),J={class:"form-wrapper flex flex-col items-center justify-center"},Q={class:"flex flex-row items-center gap-12"},G={class:"form-label h-full my-4 flex flex-col items-start justify-center gap-4"},H={class:"form-label"},K=s(()=>e("label",{for:"username"},"Username",-1)),W={class:"form-label"},X=s(()=>e("label",{for:"email"},"Email",-1)),Y={class:"form-label"},Z=s(()=>e("label",{for:"password"},"Password",-1)),$={class:"form-label my-4 flex flex-col items-start gap-4"},ee={class:"form-label"},te=s(()=>e("label",{for:"first_name"},"First Name",-1)),oe={class:"form-label"},le=s(()=>e("label",{for:"last_name"},"Last Name",-1)),ae={class:"form-label"},se=s(()=>e("label",{for:"avatar"},"Avatar Url",-1)),re={key:0,class:"form-label"},ne=s(()=>e("label",{for:"nickname"},"Nickname:",-1)),ie={key:1,class:"form-label"},de=s(()=>e("label",{for:"clientField1"},"Client Field 1:",-1)),ue=s(()=>e("input",{type:"text",id:"clientField1",name:"clientField1",class:"form-control rounded-full bg-white"},null,-1)),ce=[de,ue],me=["disabled"],pe={key:0},fe={key:1},_e={key:0,class:"text-xl text-red uppercase"},he={key:1},ve={key:2},be={__name:"index",setup(x){let m=l(""),p=l(""),f=l(""),_=l(""),h=l(""),v=l(""),b=l(""),U=l("");const g=l(null),w=l("Artist"),F=I(),N=D(),S=[{name:"Artist",value:"Artist"}],A=()=>{},C=async()=>{const{data:c,pending:o,error:k}=await z("https://arthub-api.fly.dev/api/v1/artists/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:m.value,email:_.value,first_name:p.value,last_name:f.value,password:h.value,avatar:v.value,nickname:b.value})},"$RRr4dDQ7Ex");k&&(U.value=k.value),c&&(g.value=c.value,console.log(g.value),F.add({title:"Artist created! Redirecting to your Dashboard...",timeout:2e3,callback:()=>N.push("/dashboard")}))};return(c,o)=>{const k=R,T=q;return r(),E(T,null,{default:j(()=>[e("section",J,[L(k,{class:"mb-4",onChange:A,color:"violet",variant:"outline",size:"xl",icon:"i-carbon-user",modelValue:w.value,"onUpdate:modelValue":o[0]||(o[0]=t=>w.value=t),placeholder:"Select if you want to register an ARTIST or CLIENT",padded:!0,options:S},null,8,["modelValue"]),e("form",{class:"form space-y-4 text-slate-900 flex flex-col items-center",onSubmit:O(C,["prevent"])},[e("section",Q,[e("article",G,[e("div",H,[K,n(e("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>d(m)?m.value=t:m=t),type:"text",placeholder:"Username",required:"",class:"form-control rounded-full bg-white"},null,512),[[i,a(m)]])]),e("div",W,[X,n(e("input",{"onUpdate:modelValue":o[2]||(o[2]=t=>d(_)?_.value=t:_=t),type:"email",placeholder:"Email",required:"",class:"form-control rounded-full bg-white"},null,512),[[i,a(_)]])]),e("div",Y,[Z,n(e("input",{type:"password","onUpdate:modelValue":o[3]||(o[3]=t=>d(h)?h.value=t:h=t),placeholder:"Password",required:"",class:"form-control rounded-full bg-white"},null,512),[[i,a(h)]])])]),e("article",$,[e("div",ee,[te,n(e("input",{"onUpdate:modelValue":o[4]||(o[4]=t=>d(p)?p.value=t:p=t),type:"text",placeholder:"First Name",required:"",class:"form-control rounded-full bg-white"},null,512),[[i,a(p)]])]),e("div",oe,[le,n(e("input",{"onUpdate:modelValue":o[5]||(o[5]=t=>d(f)?f.value=t:f=t),type:"text",placeholder:"Last Name",required:"",class:"form-control rounded-full bg-white"},null,512),[[i,a(f)]])]),e("div",ae,[se,n(e("input",{"onUpdate:modelValue":o[6]||(o[6]=t=>d(v)?v.value=t:v=t),type:"text",placeholder:"Avatar url",class:"form-control rounded-full bg-white"},null,512),[[i,a(v)]])])])]),w.value==="Artist"?(r(),u("div",re,[ne,n(e("input",{"onUpdate:modelValue":o[7]||(o[7]=t=>d(b)?b.value=t:b=t),type:"text",id:"nickname",name:"nickname",placeholder:"Nickname",class:"form-control rounded-full bg-white"},null,512),[[i,a(b)]])])):y("",!0),w.value==="Client"?(r(),u("div",ie,ce)):y("",!0),e("button",{type:"submit",disabled:c.pendingFetch,class:"btn"},[c.pendingFetch?(r(),u("span",pe,"Submitting...")):(r(),u("span",fe,"Register"))],8,me)],32),a(U)?(r(),u("div",_e,V(a(U).data.error),1)):y("",!0),c.pending?(r(),u("div",he,"Loading...")):y("",!0),g.value?(r(),u("div",ve,"Data: "+V(g.value.value),1)):y("",!0)])]),_:1})}}},Ce=B(be,[["__scopeId","data-v-3aaef070"]]);export{Ce as default};
//# sourceMappingURL=_TPb8xAv.js.map

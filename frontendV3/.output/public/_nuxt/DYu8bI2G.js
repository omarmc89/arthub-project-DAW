import I from"./fot2LTB1.js";import D from"./D9GmcPDL.js";import{_ as E,f as L,y as M,r,z as R,g as j,A as z,c as h,a as t,b as U,w as V,D as i,h as e,j as T,i as O,q as $,s as c,v as d,F as q,o as _,d as B,p as H,e as J,x as P}from"./C79j48wv.js";import{u as G}from"./WkucPJ3U.js";import{u as K}from"./C0_R-043.js";import{u as N}from"./Bc04BqWs.js";import{u as Q}from"./6iK2AHlT.js";import"./DMxTXIy3.js";import"./D6pSI3Cj.js";import"./qsMMcMsd.js";import"./BbMdD1GC.js";import"./DnKWDGcn.js";import"./aPxrJPp6.js";import"./DdJAE_fm.js";import"./1ywJQXx5.js";import"./blSOxsGD.js";const u=f=>(H("data-v-595ccc27"),f=f(),J(),f),W={class:"flex flex-row gap-8 mb-12"},X={class:"main-container flex flex-row"},Y={class:"image-container"},Z=["src","alt"],ee={class:"form-container flex flex-col justify-center items-center"},ae={class:"form-label text-center text-center"},te=u(()=>t("label",{for:"first_name"},"First Name",-1)),oe=["readonly"],se={class:"form-label text-center"},ne=u(()=>t("label",{for:"last_name"},"Last Name",-1)),le=["readonly"],re={class:"form-label text-center"},ie=u(()=>t("label",{for:"username"},"Username",-1)),ce=["readonly"],de={class:"form-label text-center"},ue=u(()=>t("label",{for:"avatar"},"Image URL",-1)),me=["readonly"],pe={class:"form-label text-center"},_e=u(()=>t("label",{for:"nickname"},"Nickname",-1)),fe=["readonly"],ve={class:"form-label text-center"},he=u(()=>t("label",{for:"email"},"email",-1)),be=["readonly"],ke=["disabled"],ge={key:0},ye={key:1},xe={__name:"index",setup(f){L();const C=G(),{userLogged:S}=M(Q()),g=r(!1),b=r(""),o=r(!0),v=r({nickname:""}),a=r({first_name:"",last_name:"",username:"",email:"",password:"",avatar:""}),y=r({}),k=r(!1),n=r({});R(async()=>{n.value=await N()}),j(async()=>{try{n.value=await N(),n.value&&(a.value.username=n.value.user.username,a.value.first_name=n.value.user.first_name,a.value.last_name=n.value.user.last_name,a.value.email=n.value.user.email,a.value.avatar=n.value.user.avatar,a.value.password=n.value.user.password,v.value.nickname=n.value.nickname),x(),k.value=!0}catch(m){console.error("Error fetching user artworks:",m)}}),z(a.value,()=>{x(),console.log("Avatar changed")});function x(){a.value.avatar.includes("http")?b.value=a.value.avatar:b.value="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"}const F=async()=>{const{data:m,pending:s,error:p}=await K(`https://arthub-api-polished-breeze-902.fly.dev/api/v1/artists/${n.value.id}/`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:S.value.pk,username:a.value.username,email:a.value.email,first_name:a.value.first_name,last_name:a.value.last_name,password:a.value.password,avatar:a.value.avatar,nickname:v.value.nickname})},"$9s2sm8iETc");p&&console.log(p.value),m&&(y.value=m.value,console.log(y.value),C.add({title:"Artist created! Redirecting to Home...",timeout:2e3,callback:()=>P("/home")}))};function w(){o.value=!o.value}return(m,s)=>{const p=I,A=D;return _(),h(q,null,[t("section",W,[U(p,{class:i({"btn-clicked":!e(o),btn:e(o)}),onClick:w},{default:V(()=>[B("Edit profile")]),_:1},8,["class"]),U(p,{class:"btn",onClick:w},{default:V(()=>[B("Change password")]),_:1})]),t("section",X,[t("article",Y,[e(k)?(_(),h("img",{key:0,src:e(b),alt:e(a).avatar},null,8,Z)):T("",!0),e(k)?T("",!0):(_(),O(A,{key:1,class:"h-[350px] w-[350px]"}))]),t("article",ee,[t("form",{class:"artwork-form space-y-4 text-slate-900",onSubmit:$(F,["prevent"])},[t("div",null,[t("div",ae,[te,c(t("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>e(a).first_name=l),class:i([{"input-blocked":e(o)},"form-control rounded-full bg-white"]),readonly:e(o),id:"first_name",name:"first_name",type:"text"},null,10,oe),[[d,e(a).first_name]])]),t("div",se,[ne,c(t("input",{"onUpdate:modelValue":s[1]||(s[1]=l=>e(a).last_name=l),class:i([{"input-blocked":e(o)},"form-control rounded-full bg-white"]),readonly:e(o),id:"last_name",name:"last_name",type:"text"},null,10,le),[[d,e(a).last_name]])]),t("div",re,[ie,c(t("input",{"onUpdate:modelValue":s[2]||(s[2]=l=>e(a).username=l),class:i([{"input-blocked":e(o)},"form-control rounded-full bg-white"]),readonly:e(o),id:"username",name:"username",type:"text"},null,10,ce),[[d,e(a).username]])]),t("div",de,[ue,c(t("input",{"onUpdate:modelValue":s[3]||(s[3]=l=>e(a).avatar=l),class:i([{"input-blocked":e(o)},"form-control rounded-full bg-white"]),readonly:e(o),id:"avatar",name:"avatar",type:"text"},null,10,me),[[d,e(a).avatar]])]),t("div",pe,[_e,c(t("input",{"onUpdate:modelValue":s[4]||(s[4]=l=>e(v).nickname=l),class:i([{"input-blocked":e(o)},"form-control rounded-full bg-white"]),readonly:e(o),id:"nickname",name:"nickname",type:"text"},null,10,fe),[[d,e(v).nickname]])]),t("div",ve,[he,c(t("input",{"onUpdate:modelValue":s[5]||(s[5]=l=>e(a).email=l),class:i([{"input-blocked":e(o)},"form-control rounded-full bg-white"]),readonly:e(o),id:"email",name:"email",type:"email"},null,10,be),[[d,e(a).email]])])]),t("button",{type:"submit",disabled:e(g),class:"btn btn-primary"},[e(g)?(_(),h("span",ge,"Updating...")):(_(),h("span",ye,"Update"))],8,ke)],32)])])],64)}}},je=E(xe,[["__scopeId","data-v-595ccc27"]]);export{je as default};
//# sourceMappingURL=DYu8bI2G.js.map

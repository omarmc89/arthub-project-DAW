import{_ as m}from"./DnKWDGcn.js";import{r as u,l as f,o as n,c as r,F as h,m as x,b as g,w as y,a as s,t as o,h as v}from"./C79j48wv.js";import{u as b}from"./C0_R-043.js";async function w(){const{data:c,error:e,pending:a}=await b("https://arthub-api-polished-breeze-902.fly.dev/api/v1/artworks/",{lazy:!1},"$qUd4Mib2wK");return{data:c,error:e,pending:a}}const k={class:"container"},A=["src","alt"],B={class:"text-card p-1 text-center"},F={class:"text-xl font-bold tracking-tight text-gray-900"},L={class:"font-normal text-gray-700"},N={__name:"ArtworksGrid",async setup(c){let e,a;const i=u({}),l=u(!1),{data:_,error:z,loading:d}=([e,a]=f(()=>w()),e=await e,a(),e);return d&&(l.value=!0),_&&(i.value=_.value,l.value=!1),(C,V)=>{const p=m;return n(),r("section",k,[(n(!0),r(h,null,x(v(i),t=>(n(),r("article",{key:t.id,class:"card"},[g(p,{class:"image-container",href:"/artworks/"+t.id},{default:y(()=>[s("img",{src:t.image_url,alt:t.title},null,8,A),s("p",null,o(t.artist.user.username),1)]),_:2},1032,["href"]),s("div",B,[s("h5",F,o(t.title),1),s("p",L,o(t.description),1)])]))),128))])}}},E=N;export{E as _};
//# sourceMappingURL=BzEq4tJp.js.map
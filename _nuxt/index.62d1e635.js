import $ from"./Nav.a9894631.js";import q from"./Discount.1ed43ce4.js";import{O as D,r as L,a2 as S,a as p,l as B,e as F,o as r,H as a,P as g,Q as e,W as T,U as x,R as u,S as y,u as h,a3 as U,Y as f,X as d,c as V,N as z,K as P}from"./entry.b765b060.js";import{u as R}from"./asyncData.fdffccb2.js";import{q as j}from"./query.06cfdcfc.js";import"./utils.f8939d9e.js";const A={class:"lg:px-[15%] px-[5%] pt-20"},H=e("h1",{class:"lg:text-5xl text-2xl leading-normal font-semibold text-center"}," Stay Up To Date With The ",-1),M=e("h1",{class:"lg:text-6xl text-4xl text-center leading-normal font-bold rainbow-text"}," Latest Fashion Trends ",-1),W={class:"lg:mt-20 mt-10"},E={class:"lg:text-lg font-medium mb-5"},I={class:"flex flex-wrap l items-center lg:space-x-5 mb-5"},K=["onClick"],O={class:"grid grid-cols-1 lg:grid-cols-4 gap-10 lg:mt-20"},Q=["src","alt"],X={class:"p-3"},Y={class:"text-xs"},G={class:"font-bold text-sm mt-2"},nt={__name:"index",async setup(J){let c,m;const{data:i}=([c,m]=D(()=>R("products",()=>j("merch").find())),c=await c,m(),c),v=i.value[0].body.reduce((o,n)=>(o.includes(n.category)||o.push(n.category),o),[]),s=L(null),_=o=>{s.value=o,U().push({query:{category:o}})};S(()=>{p().query.category&&(s.value=p().query.category)});const b=o=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(o),C=B(()=>s.value?i.value[0].body.filter(o=>o.category.toLowerCase()==s.value.toLowerCase()):i.value[0].body);return F({title:"Content Merch"}),(o,n)=>{const k=$,w=q,N=P;return r(),a("div",null,[g(k),e("main",null,[e("section",A,[H,M,e("div",W,[e("h1",E,[T(" Filter Category "),s.value?(r(),a("button",{key:0,onClick:n[0]||(n[0]=t=>_(null)),class:"px-3 rounded-sm text-[13px] capitalize bg-gray-200 ml-5"}," Clear \xD7 ")):x("",!0)]),e("div",I,[(r(!0),a(u,null,y(h(v),(t,l)=>(r(),a("button",{key:`categroy-${l}`,onClick:Z=>_(t),class:f([{"bg-primary-100 text-primary":t==s.value," bg-gray-200":t!==s.value},"px-3 py-2 rounded-sm text-[13px] capitalize shrink-0 mr-4 mb-4 lg:mr-0 lg:mb-0"])},d(t),11,K))),128))]),e("div",O,[(r(!0),a(u,null,y(h(C),(t,l)=>(r(),a(u,{key:`product-${l}-${t.id}`},[l===0&&!s.value?(r(),V(w,{key:0,class:"lg:col-span-2 rounded bg-slate-900 text-white p-10"})):x("",!0),g(N,{to:`/merch/${t.id}`,class:f([{"lg:col-start-3":l===0&&!s.value},"rounded-md bg-white hover:shadow-lg transition-all hover:cursor-pointer"])},{default:z(()=>[e("img",{src:t.image,alt:t.title,class:"w-full h-[300px] object-contain object-center"},null,8,Q),e("div",X,[e("h2",Y,d(t.title),1),e("p",G,d(b(t.price)),1)])]),_:2},1032,["to","class"])],64))),128))])])])])])}}};export{nt as default};

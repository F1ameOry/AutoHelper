import{d as k,i as o,c as n,a as s,b as r,w as u,u as c,F as m,g as x,j as w,o as l,S as f,m as S,e as y,t as v,k as B,l as V,n as A,p as b,q as F,s as N,v as T,x as $}from"./index-_1cbn2FT.js";import{c as I,b as h,d as L}from"./invoice-B434NZW4.js";import{B as j}from"./Button-D4KqthyY.js";const M="/AutoHelper/TY.png",R={class:"p-6"},W=w('<div class="carView flex flex-col mt-12 gap-2"><img src="'+M+'"><div class="flex flex-col gap-2"><span class="text-xl text-white font-semibold">Toyota Land Cruiser 200</span><span> Пробег 115 575 км</span><div class="flex flex-row gap-2 items-center"><div class="h-2 w-2 rounded-full bg-[#FFAC0A]"></div><span> Последнее ТО - 6 285 км назад (25.05.2024)</span></div></div></div>',1),q={class:"instrumentsView mt-8 p-2 bg-[#282828] min-h-24 w-full rounded-lg"},D={class:"text-sm font-semibold"},E={class:"grid grid-cols-4 gap-2 w-full justify-items-center"},G=["onClick"],H={class:"text-xs"},O=k({__name:"CarView3",setup(P){const{demo:_}=I(),d=_?h().demoCars3.find(t=>t.id===o.currentRoute.value.params.id):h().cars3.find(t=>t.id===o.currentRoute.value.params.id);function e(t){L().title=t,o.push("/invoice")}function C(){d&&o.push(`/car/${d.id}/mileage`)}const g=[{title:"Быстрые действия",actions:[{icon:B,text:"Автомойка",onClick:t=>{e(t)}},{icon:V,text:"Заправка",onClick:t=>{e(t)}},{icon:A,text:"Парковка",onClick:t=>{e(t)}},{icon:b,text:"Тех. обслуживание",onClick:t=>{e(t)}}]},{title:"Главное меню",actions:[{icon:F,text:"Финансы",onClick:t=>{e(t)}},{icon:N,text:"Пробег",onClick:t=>{C()}},{icon:T,text:"Гараж",onClick:t=>{e(t)}},{icon:$,text:"Прочее",onClick:t=>{e(t)}}]}];return(t,p)=>(l(),n("div",R,[s("div",null,[r(c(j),{text:"",onClick:p[0]||(p[0]=a=>t.$router.push("/cars"))},{icon:u(()=>[r(c(f),{path:c(S),type:"mdi"},null,8,["path"])]),default:u(()=>[y(" Мои автомобили ")]),_:1}),W,s("div",q,[(l(),n(m,null,x(g,a=>s("div",{class:"fastActions flex flex-col gap-2",key:a.title},[s("span",D,v(a.title),1),s("div",E,[(l(!0),n(m,null,x(a.actions,i=>(l(),n("button",{class:"flex flex-col gap-2 w-16 active:scale-95 duration-75 items-center",key:i.text,onClick:Y=>i.onClick(i.text)},[r(c(f),{type:"mdi",path:i.icon,class:"h-12 w-12"},null,8,["path"]),s("span",H,v(i.text),1)],8,G))),128))])])),64))])])]))}});export{O as default};

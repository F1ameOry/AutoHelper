import{e as h,c as S}from"./invoice-1hwTbWsI.js";import{_ as $}from"./CAppBar.vue_vue_type_script_setup_true_lang-B2zu2s5B.js";import{d as g,o,c,a as t,t as a,e as u,f as y,b as r,w as f,u as p,F as C,g as M,h as b}from"./index-B0PKo6bv.js";import{B as _}from"./Button-DEiISDlk.js";const k="/unA.png",w={class:"flex flex-row gap-2 items-center text-left active:scale-95 duration-75"},N=t("img",{src:k,class:"h-16"},null,-1),B={class:"flex flex-col gap-1"},Y={class:"text-white text-lg font-semibold"},D={class:"flex flex-col"},E={class:"text-md"},V={class:"text-white"},A={class:"text-sm"},F=g({__name:"CCarElementNew",props:{title:{type:String,default:null},mileage:{type:Number,default:155555},lastService:{type:String,default:null},lastServiceMileage:{type:Number,default:null}},setup(l){return(i,d)=>(o(),c("button",w,[N,t("div",B,[t("span",Y,a(l.title),1),t("div",D,[t("span",E,[u("Пробег "),t("span",V,a(l.mileage)+" км",1)]),t("span",A,"Последнее Т/О - "+a(l.lastServiceMileage)+" км назад ("+a(l.lastService)+")",1)])])]))}}),H={class:"px-6"},L={class:"flex flex-col gap-4"},T={class:"list flex flex-col gap-4 mb-6"},J=g({__name:"MyCarsEmpty",setup(l){console.log("cars");const{cars4:i,demoCars4:d}=h(),{demo:x}=S();console.log(i);const v=y(()=>x?d:i);return(n,s)=>(o(),c("div",H,[r($,{tertiary:"","screen-name":"Мои автомобили"}),t("div",L,[r(p(_),{text:"",class:"self-center",onClick:s[0]||(s[0]=e=>n.$router.push("/cars/add"))},{default:f(()=>[u(" Добавить автомобиль ")]),_:1}),t("div",T,[(o(!0),c(C,null,M(v.value,e=>{var m;return o(),b(F,{title:`${e.brand} ${e.model}`,mileage:(m=e.mileageHistory[e.mileageHistory.length])==null?void 0:m.mileage,lastService:e.lastService.locale("ru").format("DD.MM.YYYY"),lastServiceMileage:e.lastServiceMileage,key:e.id,onClick:s[1]||(s[1]=j=>n.$router.push("/car/idNew"))},null,8,["title","mileage","lastService","lastServiceMileage"])}),128))]),r(p(_),{text:"",class:"self-center",onClick:s[2]||(s[2]=e=>n.$router.push("/"))},{default:f(()=>[u(" Выйти из аккаунта ")]),_:1})])]))}});export{J as default};
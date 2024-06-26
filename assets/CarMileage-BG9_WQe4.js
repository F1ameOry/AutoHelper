import{c as G,u as $}from"./invoice-B434NZW4.js";import{_ as J}from"./CAppBar.vue_vue_type_script_setup_true_lang-BsAjlGXy.js";import{y as q,z as Q,A as o,B as p,C as f,D as s,d as C,E as I,G as V,H as U,I as a,J as X,K as Y,L as Z,f as y,M as g,i as S,c as _,b as v,u,a as ee,w as z,o as b,F as te,g as ie,h as ne,e as w}from"./index-_1cbn2FT.js";import{i as re,u as oe,r as T,a as B,B as k}from"./Button-D4KqthyY.js";const le=/^(\d|\.)+$/,P=/(\d|\.)+/;function se(e,{c:n=1,offset:i=0,attachPx:r=!0}={}){if(typeof e=="number"){const t=(e+i)*n;return t===0?"0":`${t}px`}else if(typeof e=="string")if(le.test(e)){const t=(Number(e)+i)*n;return r?t===0?"0":`${t}px`:`${t}`}else{const t=P.exec(e);return t?e.replace(P,String((Number(t[0])+i)*n)):e}return e}let R=!1;function ae(){if(re&&window.CSS&&!R&&(R=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const ce=e=>{const{textColor3:n,infoColor:i,errorColor:r,successColor:t,warningColor:l,textColor1:d,textColor2:c,railColor:m,fontWeightStrong:x,fontSize:h}=e;return Object.assign(Object.assign({},Q),{contentFontSize:h,titleFontWeight:x,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${i}`,circleBorderError:`2px solid ${r}`,circleBorderSuccess:`2px solid ${t}`,circleBorderWarning:`2px solid ${l}`,iconColor:n,iconColorInfo:i,iconColorError:r,iconColorSuccess:t,iconColorWarning:l,titleTextColor:d,contentTextColor:c,metaTextColor:n,lineColor:m})},me={name:"Timeline",common:q,self:ce},N=1.25,de=o("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${N};
`,[p("horizontal",`
 flex-direction: row;
 `,[f(">",[o("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[p("dashed-line-type",[f(">",[o("timeline-item-timeline",[s("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),f(">",[o("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[f(">",[s("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),o("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[s("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),p("right-placement",[o("timeline-item",[o("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),o("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),p("left-placement",[o("timeline-item",[o("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),o("timeline-item-timeline",`
 left: 0;
 `)])]),o("timeline-item",`
 position: relative;
 `,[f("&:last-child",[o("timeline-item-timeline",[s("line",`
 display: none;
 `)]),o("timeline-item-content",[s("meta",`
 margin-bottom: 0;
 `)])]),o("timeline-item-content",[s("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),s("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),s("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),p("dashed-line-type",[o("timeline-item-timeline",[s("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),o("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${N} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[s("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),s("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),s("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),ue=Object.assign(Object.assign({},V.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),j=X("n-timeline"),pe=C({name:"Timeline",props:ue,setup(e,{slots:n}){const{mergedClsPrefixRef:i}=I(e),r=V("Timeline","-timeline",de,me,e,i);return U(j,{props:e,mergedThemeRef:r,mergedClsPrefixRef:i}),()=>{const{value:t}=i;return a("div",{class:[`${t}-timeline`,e.horizontal&&`${t}-timeline--horizontal`,`${t}-timeline--${e.size}-size`,!e.horizontal&&`${t}-timeline--${e.itemPlacement}-placement`]},n)}}}),fe={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},ge=C({name:"TimelineItem",props:fe,setup(e){const n=Y(j);n||Z("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),ae();const{inlineThemeDisabled:i}=I(),r=y(()=>{const{props:{size:l,iconSize:d},mergedThemeRef:c}=n,{type:m}=e,{self:{titleTextColor:x,contentTextColor:h,metaTextColor:F,lineColor:E,titleFontWeight:W,contentFontSize:H,[g("iconSize",l)]:M,[g("titleMargin",l)]:O,[g("titleFontSize",l)]:K,[g("circleBorder",m)]:L,[g("iconColor",m)]:A},common:{cubicBezierEaseInOut:D}}=c.value;return{"--n-bezier":D,"--n-circle-border":L,"--n-icon-color":A,"--n-content-font-size":H,"--n-content-text-color":h,"--n-line-color":E,"--n-meta-text-color":F,"--n-title-font-size":K,"--n-title-font-weight":W,"--n-title-margin":O,"--n-title-text-color":x,"--n-icon-size":se(d)||M}}),t=i?oe("timeline-item",y(()=>{const{props:{size:l,iconSize:d}}=n,{type:c}=e;return`${l[0]}${d||"a"}${c[0]}`}),r,n.props):void 0;return{mergedClsPrefix:n.mergedClsPrefixRef,cssVars:i?void 0:r,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){const{mergedClsPrefix:e,color:n,onRender:i,$slots:r}=this;return i==null||i(),a("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},a("div",{class:`${e}-timeline-item-timeline`},a("div",{class:`${e}-timeline-item-timeline__line`}),T(r.icon,t=>t?a("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:n}},t):a("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:n}}))),a("div",{class:`${e}-timeline-item-content`},T(r.header,t=>t||this.title?a("div",{class:`${e}-timeline-item-content__title`},t||this.title):null),a("div",{class:`${e}-timeline-item-content__content`},B(r.default,()=>[this.content])),a("div",{class:`${e}-timeline-item-content__meta`},B(r.footer,()=>[this.time]))))}}),ve={class:"px-6"},xe={class:"flex flex-col gap-4"},$e=C({__name:"CarMileage",setup(e){const{demo:n}=G(),i=n?$().demoCars1.find(r=>r.id===S.currentRoute.value.params.id):$().cars1.find(r=>r.id===S.currentRoute.value.params.id);return(r,t)=>{var l,d;return b(),_("div",ve,[v(J,{"screen-name":`${(l=u(i))==null?void 0:l.brand} ${(d=u(i))==null?void 0:d.model}`},null,8,["screen-name"]),ee("div",xe,[v(u(pe),{class:"mb-4"},{default:z(()=>{var c;return[(b(!0),_(te,null,ie((c=u(i))==null?void 0:c.mileageHistory,m=>(b(),ne(u(ge),{key:`${m.mileage}`,type:"info",title:`${m.mileage} км`,content:m.reason,time:m.date,"line-type":"dashed"},null,8,["title","content","time"]))),128))]}),_:1}),v(u(k),{text:"",class:"self-center"},{default:z(()=>[w(" Добавить запись ")]),_:1}),v(u(k),{text:"",class:"self-center mb-8",onClick:t[0]||(t[0]=c=>r.$router.back())},{default:z(()=>[w(" Вернуться в меню ")]),_:1})])])}}});export{$e as default};

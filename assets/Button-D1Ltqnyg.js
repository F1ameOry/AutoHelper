import{ar as Le,Z as Ve,F as Ke,as as Ge,N,V as qe,R as Qe,K as Y,H as Xe,f as k,W as pe,J as ye,a2 as de,X as xe,ap as we,at as se,au as Ye,L as Je,ac as Ce,av as he,C as p,d as M,I as f,aa as $e,aw as Ue,a7 as Se,A,D as b,a0 as Be,a3 as Ze,ax as ze,B as $,a8 as be,G as Te,Y as eo,E as oo,ai as to,M as a,ay as Q}from"./index-BX_r9lZ7.js";function ke(e,...t){if(Array.isArray(e))e.forEach(i=>ke(i,...t));else return e(...t)}function j(e){return e.some(t=>Le(t)?!(t.type===Ve||t.type===Ke&&!j(t.children)):!0)?e:null}function Bo(e,t){return e&&j(e())||t()}function zo(e,t,i){return e&&j(e(t))||i(t)}function ve(e,t){const i=e&&j(e());return t(i||null)}function ro(e){return!(e&&j(e()))}function me(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}function no(e,t){if(e===void 0)return!1;if(t){const{context:{ids:i}}=t;return i.has(e)}return Ge(e)!==null}const J=typeof document<"u"&&typeof window<"u";function io(){const e=N(!1);return qe(()=>{e.value=!0}),Qe(e)}const ge=ye("n-form-item");function ao(e,{defaultSize:t="medium",mergedSize:i,mergedDisabled:l}={}){const n=Y(ge,null);Xe(ge,null);const c=k(i?()=>i(n):()=>{const{size:s}=e;if(s)return s;if(n){const{mergedSize:B}=n;if(B.value!==void 0)return B.value}return t}),h=k(l?()=>l(n):()=>{const{disabled:s}=e;return s!==void 0?s:n?n.disabled.value:!1}),r=k(()=>{const{status:s}=e;return s||(n==null?void 0:n.mergedValidationStatus.value)});return pe(()=>{n&&n.restoreValidation()}),{mergedSizeRef:c,mergedDisabledRef:h,mergedStatusRef:r,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}function Pe(e,t,i){if(!t)return;const l=de(),n=Y(we,null),c=()=>{const h=i.value;t.mount({id:h===void 0?e:h+e,head:!0,anchorMetaName:se,props:{bPrefix:h?`.${h}-`:void 0},ssr:l}),n!=null&&n.preflightStyleDisabled||Ye.mount({id:"n-global",head:!0,anchorMetaName:se,ssr:l})};l?c():xe(c)}function so(e,t,i,l){var n;i||Je("useThemeClass","cssVarsRef is not passed");const c=(n=Y(we,null))===null||n===void 0?void 0:n.mergedThemeHashRef,h=N(""),r=de();let s;const B=`__${e}`,_=()=>{let w=B;const P=t?t.value:void 0,W=c==null?void 0:c.value;W&&(w+="-"+W),P&&(w+="-"+P);const{themeOverrides:F,builtinThemeOverrides:D}=l;F&&(w+="-"+he(JSON.stringify(F))),D&&(w+="-"+he(JSON.stringify(D))),h.value=w,s=()=>{const L=i.value;let V="";for(const O in L)V+=`${O}: ${L[O]};`;p(`.${w}`,V).mount({id:w,ssr:r}),s=void 0}};return Ce(()=>{_()}),{themeClass:h,onRender:()=>{s==null||s()}}}function lo(e,t,i){if(!t)return;const l=de(),n=k(()=>{const{value:h}=t;if(!h)return;const r=h[e];if(r)return r}),c=()=>{Ce(()=>{const{value:h}=i,r=`${h}${e}Rtl`;if(no(r,l))return;const{value:s}=n;s&&s.style.mount({id:r,head:!0,anchorMetaName:se,props:{bPrefix:h?`.${h}-`:void 0},ssr:l})})};return l?c():xe(c),n}const Re=M({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const i=io();return()=>f($e,{name:"icon-switch-transition",appear:i.value},t)}}),co=M({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:t}){function i(r){e.width?r.style.maxWidth=`${r.offsetWidth}px`:r.style.maxHeight=`${r.offsetHeight}px`,r.offsetWidth}function l(r){e.width?r.style.maxWidth="0":r.style.maxHeight="0",r.offsetWidth;const{onLeave:s}=e;s&&s()}function n(r){e.width?r.style.maxWidth="":r.style.maxHeight="";const{onAfterLeave:s}=e;s&&s()}function c(r){if(r.style.transition="none",e.width){const s=r.offsetWidth;r.style.maxWidth="0",r.offsetWidth,r.style.transition="",r.style.maxWidth=`${s}px`}else if(e.reverse)r.style.maxHeight=`${r.offsetHeight}px`,r.offsetHeight,r.style.transition="",r.style.maxHeight="0";else{const s=r.offsetHeight;r.style.maxHeight="0",r.offsetWidth,r.style.transition="",r.style.maxHeight=`${s}px`}r.offsetWidth}function h(r){var s;e.width?r.style.maxWidth="":e.reverse||(r.style.maxHeight=""),(s=e.onAfterEnter)===null||s===void 0||s.call(e)}return()=>{const{group:r,width:s,appear:B,mode:_}=e,w=r?Ue:$e,P={name:s?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:B,onEnter:c,onAfterEnter:h,onBeforeLeave:i,onLeave:l,onAfterLeave:n};return r||(P.mode=_),f(w,P,t)}}}),{cubicBezierEaseInOut:uo}=Se;function le({originalTransform:e="",left:t=0,top:i=0,transition:l=`all .3s ${uo} !important`}={}){return[p("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:t,top:i,opacity:0}),p("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:i,opacity:1}),p("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:i,transition:l})]}const fo=p([p("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),A("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[b("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[le()]),b("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[le({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),b("container",`
 animation: rotator 3s linear infinite both;
 `,[b("icon",`
 height: 1em;
 width: 1em;
 `)])])]),ae="1.6s",ho={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},bo=M({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},ho),setup(e){Pe("-base-loading",fo,Be(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:i,stroke:l,scale:n}=this,c=t/n;return f("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},f(Re,null,{default:()=>this.show?f("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},f("div",{class:`${e}-base-loading__container`},f("svg",{class:`${e}-base-loading__icon`,viewBox:`0 0 ${2*c} ${2*c}`,xmlns:"http://www.w3.org/2000/svg",style:{color:l}},f("g",null,f("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${c} ${c};270 ${c} ${c}`,begin:"0s",dur:ae,fill:"freeze",repeatCount:"indefinite"}),f("circle",{class:`${e}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":i,"stroke-linecap":"round",cx:c,cy:c,r:t-i/2,"stroke-dasharray":5.67*t,"stroke-dashoffset":18.48*t},f("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${c} ${c};135 ${c} ${c};450 ${c} ${c}`,begin:"0s",dur:ae,fill:"freeze",repeatCount:"indefinite"}),f("animate",{attributeName:"stroke-dashoffset",values:`${5.67*t};${1.42*t};${5.67*t}`,begin:"0s",dur:ae,fill:"freeze",repeatCount:"indefinite"})))))):f("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),vo=A("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),mo=M({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Pe("-base-wave",vo,Be(e,"clsPrefix"));const t=N(null),i=N(!1);let l=null;return pe(()=>{l!==null&&window.clearTimeout(l)}),{active:i,selfRef:t,play(){l!==null&&(window.clearTimeout(l),i.value=!1,l=null),Ze(()=>{var n;(n=t.value)===null||n===void 0||n.offsetHeight,i.value=!0,l=window.setTimeout(()=>{i.value=!1,l=null},1e3)})}}},render(){const{clsPrefix:e}=this;return f("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:T}=Se;function go({duration:e=".2s",delay:t=".1s"}={}){return[p("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),p("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),p("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${T},
 max-width ${e} ${T} ${t},
 margin-left ${e} ${T} ${t},
 margin-right ${e} ${T} ${t};
 `),p("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${T} ${t},
 max-width ${e} ${T},
 margin-left ${e} ${T},
 margin-right ${e} ${T};
 `)]}const po=J&&"chrome"in window;J&&navigator.userAgent.includes("Firefox");const yo=J&&navigator.userAgent.includes("Safari")&&!po;function E(e){return ze(e,[255,255,255,.16])}function X(e){return ze(e,[0,0,0,.12])}const xo=ye("n-button-group"),wo=p([A("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[$("color",[b("border",{borderColor:"var(--n-border-color)"}),$("disabled",[b("border",{borderColor:"var(--n-border-color-disabled)"})]),be("disabled",[p("&:focus",[b("state-border",{borderColor:"var(--n-border-color-focus)"})]),p("&:hover",[b("state-border",{borderColor:"var(--n-border-color-hover)"})]),p("&:active",[b("state-border",{borderColor:"var(--n-border-color-pressed)"})]),$("pressed",[b("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),$("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[b("border",{border:"var(--n-border-disabled)"})]),be("disabled",[p("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[b("state-border",{border:"var(--n-border-focus)"})]),p("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[b("state-border",{border:"var(--n-border-hover)"})]),p("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[b("state-border",{border:"var(--n-border-pressed)"})]),$("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[b("state-border",{border:"var(--n-border-pressed)"})])]),$("loading","cursor: wait;"),A("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[$("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),J&&"MozBoxSizing"in document.createElement("div").style?p("&::moz-focus-inner",{border:0}):null,b("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),b("border",{border:"var(--n-border)"}),b("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),b("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[A("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[le({top:"50%",originalTransform:"translateY(-50%)"})]),go()]),b("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[p("~",[b("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),$("block",`
 display: flex;
 width: 100%;
 `),$("dashed",[b("border, state-border",{borderStyle:"dashed !important"})]),$("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),p("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),p("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),Co=Object.assign(Object.assign({},Te.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!yo}}),$o=M({name:"Button",props:Co,setup(e){const t=N(null),i=N(null),l=N(!1),n=eo(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),c=Y(xo,{}),{mergedSizeRef:h}=ao({},{defaultSize:"medium",mergedSize:d=>{const{size:y}=e;if(y)return y;const{size:S}=c;if(S)return S;const{mergedSize:o}=d||{};return o?o.value:"medium"}}),r=k(()=>e.focusable&&!e.disabled),s=d=>{var y;r.value||d.preventDefault(),!e.nativeFocusBehavior&&(d.preventDefault(),!e.disabled&&r.value&&((y=t.value)===null||y===void 0||y.focus({preventScroll:!0})))},B=d=>{var y;if(!e.disabled&&!e.loading){const{onClick:S}=e;S&&ke(S,d),e.text||(y=i.value)===null||y===void 0||y.play()}},_=d=>{switch(d.key){case"Enter":if(!e.keyboard)return;l.value=!1}},w=d=>{switch(d.key){case"Enter":if(!e.keyboard||e.loading){d.preventDefault();return}l.value=!0}},P=()=>{l.value=!1},{inlineThemeDisabled:W,mergedClsPrefixRef:F,mergedRtlRef:D}=oo(e),L=Te("Button","-button",wo,to,e,F),V=lo("Button",D,F),O=k(()=>{const d=L.value,{common:{cubicBezierEaseInOut:y,cubicBezierEaseOut:S},self:o}=d,{rippleDuration:U,opacityDisabled:K,fontWeight:Z,fontWeightStrong:ee}=o,C=h.value,{dashed:oe,type:R,ghost:te,text:z,color:v,round:ce,circle:re,textColor:H,secondary:He,tertiary:ue,quaternary:Ee,strong:Ne}=e,Fe={"font-weight":Ne?ee:Z};let m={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const G=R==="tertiary",fe=R==="default",u=G?"default":R;if(z){const g=H||v;m={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":g||o[a("textColorText",u)],"--n-text-color-hover":g?E(g):o[a("textColorTextHover",u)],"--n-text-color-pressed":g?X(g):o[a("textColorTextPressed",u)],"--n-text-color-focus":g?E(g):o[a("textColorTextHover",u)],"--n-text-color-disabled":g||o[a("textColorTextDisabled",u)]}}else if(te||oe){const g=H||v;m={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":v||o[a("rippleColor",u)],"--n-text-color":g||o[a("textColorGhost",u)],"--n-text-color-hover":g?E(g):o[a("textColorGhostHover",u)],"--n-text-color-pressed":g?X(g):o[a("textColorGhostPressed",u)],"--n-text-color-focus":g?E(g):o[a("textColorGhostHover",u)],"--n-text-color-disabled":g||o[a("textColorGhostDisabled",u)]}}else if(He){const g=fe?o.textColor:G?o.textColorTertiary:o[a("color",u)],x=v||g,q=R!=="default"&&R!=="tertiary";m={"--n-color":q?Q(x,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":q?Q(x,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":q?Q(x,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":q?Q(x,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":x,"--n-text-color-hover":x,"--n-text-color-pressed":x,"--n-text-color-focus":x,"--n-text-color-disabled":x}}else if(ue||Ee){const g=fe?o.textColor:G?o.textColorTertiary:o[a("color",u)],x=v||g;ue?(m["--n-color"]=o.colorTertiary,m["--n-color-hover"]=o.colorTertiaryHover,m["--n-color-pressed"]=o.colorTertiaryPressed,m["--n-color-focus"]=o.colorSecondaryHover,m["--n-color-disabled"]=o.colorTertiary):(m["--n-color"]=o.colorQuaternary,m["--n-color-hover"]=o.colorQuaternaryHover,m["--n-color-pressed"]=o.colorQuaternaryPressed,m["--n-color-focus"]=o.colorQuaternaryHover,m["--n-color-disabled"]=o.colorQuaternary),m["--n-ripple-color"]="#0000",m["--n-text-color"]=x,m["--n-text-color-hover"]=x,m["--n-text-color-pressed"]=x,m["--n-text-color-focus"]=x,m["--n-text-color-disabled"]=x}else m={"--n-color":v||o[a("color",u)],"--n-color-hover":v?E(v):o[a("colorHover",u)],"--n-color-pressed":v?X(v):o[a("colorPressed",u)],"--n-color-focus":v?E(v):o[a("colorFocus",u)],"--n-color-disabled":v||o[a("colorDisabled",u)],"--n-ripple-color":v||o[a("rippleColor",u)],"--n-text-color":H||(v?o.textColorPrimary:G?o.textColorTertiary:o[a("textColor",u)]),"--n-text-color-hover":H||(v?o.textColorHoverPrimary:o[a("textColorHover",u)]),"--n-text-color-pressed":H||(v?o.textColorPressedPrimary:o[a("textColorPressed",u)]),"--n-text-color-focus":H||(v?o.textColorFocusPrimary:o[a("textColorFocus",u)]),"--n-text-color-disabled":H||(v?o.textColorDisabledPrimary:o[a("textColorDisabled",u)])};let ne={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};z?ne={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:ne={"--n-border":o[a("border",u)],"--n-border-hover":o[a("borderHover",u)],"--n-border-pressed":o[a("borderPressed",u)],"--n-border-focus":o[a("borderFocus",u)],"--n-border-disabled":o[a("borderDisabled",u)]};const{[a("height",C)]:ie,[a("fontSize",C)]:Ie,[a("padding",C)]:_e,[a("paddingRound",C)]:We,[a("iconSize",C)]:Oe,[a("borderRadius",C)]:Ae,[a("iconMargin",C)]:Me,waveOpacity:je}=o,De={"--n-width":re&&!z?ie:"initial","--n-height":z?"initial":ie,"--n-font-size":Ie,"--n-padding":re||z?"initial":ce?We:_e,"--n-icon-size":Oe,"--n-icon-margin":Me,"--n-border-radius":z?"initial":re||ce?ie:Ae};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":y,"--n-bezier-ease-out":S,"--n-ripple-duration":U,"--n-opacity-disabled":K,"--n-wave-opacity":je},Fe),m),ne),De)}),I=W?so("button",k(()=>{let d="";const{dashed:y,type:S,ghost:o,text:U,color:K,round:Z,circle:ee,textColor:C,secondary:oe,tertiary:R,quaternary:te,strong:z}=e;y&&(d+="a"),o&&(d+="b"),U&&(d+="c"),Z&&(d+="d"),ee&&(d+="e"),oe&&(d+="f"),R&&(d+="g"),te&&(d+="h"),z&&(d+="i"),K&&(d+="j"+me(K)),C&&(d+="k"+me(C));const{value:v}=h;return d+="l"+v[0],d+="m"+S[0],d}),O,e):void 0;return{selfElRef:t,waveElRef:i,mergedClsPrefix:F,mergedFocusable:r,mergedSize:h,showBorder:n,enterPressed:l,rtlEnabled:V,handleMousedown:s,handleKeydown:w,handleBlur:P,handleKeyup:_,handleClick:B,customColorCssVars:k(()=>{const{color:d}=e;if(!d)return null;const y=E(d);return{"--n-border-color":d,"--n-border-color-hover":y,"--n-border-color-pressed":X(d),"--n-border-color-focus":y,"--n-border-color-disabled":d}}),cssVars:W?void 0:O,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){const{mergedClsPrefix:e,tag:t,onRender:i}=this;i==null||i();const l=ve(this.$slots.default,n=>n&&f("span",{class:`${e}-button__content`},n));return f(t,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&l,f(co,{width:!0},{default:()=>ve(this.$slots.icon,n=>(this.loading||this.renderIcon||n)&&f("span",{class:`${e}-button__icon`,style:{margin:ro(this.$slots.default)?"0":""}},f(Re,null,{default:()=>this.loading?f(bo,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):f("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():n)})))}),this.iconPlacement==="left"&&l,this.text?null:f(mo,{ref:"waveElRef",clsPrefix:e}),this.showBorder?f("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?f("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),To=$o;export{$o as B,Re as N,To as X,Bo as a,io as b,ao as c,ke as d,lo as e,Pe as f,le as g,bo as h,J as i,zo as j,yo as k,ve as r,so as u};

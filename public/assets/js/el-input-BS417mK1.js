import{g as p,I as Fe,r as V,C as q,G,a7 as je,L as ae,a as ke,az as We,M as _e,H as P,o as Ue,ad as Ye,e as v,c as S,i as m,F as oe,n as y,u as t,h as U,p as N,R as I,w as A,a5 as Y,a2 as ne,b as Xe,a6 as qe,a0 as Ge,z as X,j as Ze,Y as we}from"./index-Dk6oAfKH.js";import{K as Pe,aq as Je,aj as Qe,n as Se,b as et,y as tt,d as se,t as Ce,m as at,u as Ie,a4 as ot,av as nt,aw as st,C as lt,a as it,f as L,a5 as rt,_ as ut,w as dt}from"./request-FGLSB9uO.js";import{U as le,d as Ee}from"./base-BmRrU_aT.js";import{a as ct,c as pt,u as ft,b as vt}from"./use-form-item-Da74mal4.js";const mt=()=>Pe&&/firefox/i.test(window.navigator.userAgent),ht=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),yt=["class","style"],gt=/^on[A-Z]/,bt=(o={})=>{const{excludeListeners:f=!1,excludeKeys:u}=o,a=p(()=>((u==null?void 0:u.value)||[]).concat(yt)),i=Fe();return i?p(()=>{var r;return Je(Object.entries((r=i.proxy)==null?void 0:r.$attrs).filter(([d])=>!a.value.includes(d)&&!(f&&gt.test(d))))}):p(()=>({}))};function xt(o){const f=V();function u(){if(o.value==null)return;const{selectionStart:i,selectionEnd:r,value:d}=o.value;if(i==null||r==null)return;const g=d.slice(0,Math.max(0,i)),c=d.slice(Math.max(0,r));f.value={selectionStart:i,selectionEnd:r,value:d,beforeTxt:g,afterTxt:c}}function a(){if(o.value==null||f.value==null)return;const{value:i}=o.value,{beforeTxt:r,afterTxt:d,selectionStart:g}=f.value;if(r==null||d==null||g==null)return;let c=i.length;if(i.endsWith(d))c=i.length-d.length;else if(i.startsWith(r))c=r.length;else{const x=r[g-1],w=i.indexOf(x,g-1);w!==-1&&(c=w+1)}o.value.setSelectionRange(c,c)}return[u,a]}function wt(o,{afterFocus:f,beforeBlur:u,afterBlur:a}={}){const i=Fe(),{emit:r}=i,d=q(),g=V(!1),c=l=>{g.value||(g.value=!0,r("focus",l),f==null||f())},x=l=>{var T;je(u)&&u(l)||l.relatedTarget&&((T=d.value)!=null&&T.contains(l.relatedTarget))||(g.value=!1,r("blur",l),a==null||a())},w=()=>{var l;(l=o.value)==null||l.focus()};return G(d,l=>{l&&l.setAttribute("tabindex","-1")}),Qe(d,"click",w),{wrapperRef:d,isFocused:g,handleFocus:c,handleBlur:x}}let b;const St=`
  height:0 !important;
  visibility:hidden !important;
  ${mt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Ct=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function It(o){const f=window.getComputedStyle(o),u=f.getPropertyValue("box-sizing"),a=Number.parseFloat(f.getPropertyValue("padding-bottom"))+Number.parseFloat(f.getPropertyValue("padding-top")),i=Number.parseFloat(f.getPropertyValue("border-bottom-width"))+Number.parseFloat(f.getPropertyValue("border-top-width"));return{contextStyle:Ct.map(d=>`${d}:${f.getPropertyValue(d)}`).join(";"),paddingSize:a,borderSize:i,boxSizing:u}}function ze(o,f=1,u){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:i,borderSize:r,boxSizing:d,contextStyle:g}=It(o);b.setAttribute("style",`${g};${St}`),b.value=o.value||o.placeholder||"";let c=b.scrollHeight;const x={};d==="border-box"?c=c+r:d==="content-box"&&(c=c-i),b.value="";const w=b.scrollHeight-i;if(Se(f)){let l=w*f;d==="border-box"&&(l=l+i+r),c=Math.max(l,c),x.minHeight=`${l}px`}if(Se(u)){let l=w*u;d==="border-box"&&(l=l+i+r),c=Math.min(l,c)}return x.height=`${c}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,x}const Et=et({id:{type:String,default:void 0},size:tt,disabled:Boolean,modelValue:{type:se([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:se([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ce},prefixIcon:{type:Ce},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:se([Object,Array,String]),default:()=>at({})},autofocus:{type:Boolean,default:!1}}),zt={[le]:o=>ae(o),input:o=>ae(o),change:o=>ae(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Ft=["role"],kt=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Pt=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Nt=ke({name:"ElInput",inheritAttrs:!1}),Vt=ke({...Nt,props:Et,emits:zt,setup(o,{expose:f,emit:u}){const a=o,i=We(),r=_e(),d=p(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=i["aria-haspopup"],e["aria-owns"]=i["aria-owns"],e["aria-expanded"]=i["aria-expanded"]),e}),g=p(()=>[a.type==="textarea"?re.b():s.b(),s.m(ie.value),s.is("disabled",z.value),s.is("exceed",Re.value),{[s.b("group")]:r.prepend||r.append,[s.bm("group","append")]:r.append,[s.bm("group","prepend")]:r.prepend,[s.m("prefix")]:r.prefix||a.prefixIcon,[s.m("suffix")]:r.suffix||a.suffixIcon||a.clearable||a.showPassword,[s.bm("suffix","password-clear")]:W.value&&Q.value,[s.b("hidden")]:a.type==="hidden"},i.class]),c=p(()=>[s.e("wrapper"),s.is("focus",J.value)]),x=bt({excludeKeys:p(()=>Object.keys(d.value))}),{form:w,formItem:l}=ct(),{inputId:T}=pt(a,{formItemContext:l}),ie=ft(),z=vt(),s=Ie("input"),re=Ie("textarea"),H=q(),C=q(),Z=V(!1),R=V(!1),O=V(!1),ue=V(),D=q(a.inputStyle),F=p(()=>H.value||C.value),{wrapperRef:Ne,isFocused:J,handleFocus:K,handleBlur:j}=wt(F,{afterBlur(){var e;a.validateEvent&&((e=l==null?void 0:l.validate)==null||e.call(l,"blur").catch(n=>Ee()))}}),de=p(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),B=p(()=>(l==null?void 0:l.validateState)||""),ce=p(()=>B.value&&ot[B.value]),Ve=p(()=>O.value?nt:st),Te=p(()=>[i.style]),pe=p(()=>[a.inputStyle,D.value,{resize:a.resize}]),E=p(()=>lt(a.modelValue)?"":String(a.modelValue)),W=p(()=>a.clearable&&!z.value&&!a.readonly&&!!E.value&&(J.value||Z.value)),Q=p(()=>a.showPassword&&!z.value&&!a.readonly&&!!E.value&&(!!E.value||J.value)),k=p(()=>a.showWordLimit&&!!a.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),ee=p(()=>E.value.length),Re=p(()=>!!k.value&&ee.value>Number(a.maxlength)),Be=p(()=>!!r.suffix||!!a.suffixIcon||W.value||a.showPassword||k.value||!!B.value&&de.value),[Me,$e]=xt(H);it(C,e=>{if(Ae(),!k.value||a.resize!=="both")return;const n=e[0],{width:h}=n.contentRect;ue.value={right:`calc(100% - ${h+15+6}px)`}});const M=()=>{const{type:e,autosize:n}=a;if(!(!Pe||e!=="textarea"||!C.value))if(n){const h=we(n)?n.minRows:void 0,_=we(n)?n.maxRows:void 0,xe=ze(C.value,h,_);D.value={overflowY:"hidden",...xe},P(()=>{C.value.offsetHeight,D.value=xe})}else D.value={minHeight:ze(C.value).minHeight}},Ae=(e=>{let n=!1;return()=>{var h;if(n||!a.autosize)return;((h=C.value)==null?void 0:h.offsetParent)===null||(e(),n=!0)}})(M),$=()=>{const e=F.value,n=a.formatter?a.formatter(E.value):E.value;!e||e.value===n||(e.value=n)},te=async e=>{Me();let{value:n}=e.target;if(a.formatter&&(n=a.parser?a.parser(n):n),!R.value){if(n===E.value){$();return}u(le,n),u("input",n),await P(),$(),$e()}},fe=e=>{u("change",e.target.value)},ve=e=>{u("compositionstart",e),R.value=!0},me=e=>{var n;u("compositionupdate",e);const h=(n=e.target)==null?void 0:n.value,_=h[h.length-1]||"";R.value=!ht(_)},he=e=>{u("compositionend",e),R.value&&(R.value=!1,te(e))},Le=()=>{O.value=!O.value,ye()},ye=async()=>{var e;await P(),(e=F.value)==null||e.focus()},He=()=>{var e;return(e=F.value)==null?void 0:e.blur()},Oe=e=>{Z.value=!1,u("mouseleave",e)},De=e=>{Z.value=!0,u("mouseenter",e)},ge=e=>{u("keydown",e)},Ke=()=>{var e;(e=F.value)==null||e.select()},be=()=>{u(le,""),u("change",""),u("clear"),u("input","")};return G(()=>a.modelValue,()=>{var e;P(()=>M()),a.validateEvent&&((e=l==null?void 0:l.validate)==null||e.call(l,"change").catch(n=>Ee()))}),G(E,()=>$()),G(()=>a.type,async()=>{await P(),$(),M()}),Ue(()=>{!a.formatter&&a.parser,$(),P(M)}),f({input:H,textarea:C,ref:F,textareaStyle:pe,autosize:Ye(a,"autosize"),focus:ye,blur:He,select:Ke,clear:be,resizeTextarea:M}),(e,n)=>(v(),S("div",ne(t(d),{class:t(g),style:t(Te),role:e.containerRole,onMouseenter:De,onMouseleave:Oe}),[m(" input "),e.type!=="textarea"?(v(),S(oe,{key:0},[m(" prepend slot "),e.$slots.prepend?(v(),S("div",{key:0,class:y(t(s).be("group","prepend"))},[U(e.$slots,"prepend")],2)):m("v-if",!0),N("div",{ref_key:"wrapperRef",ref:Ne,class:y(t(c))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),S("span",{key:0,class:y(t(s).e("prefix"))},[N("span",{class:y(t(s).e("prefix-inner"))},[U(e.$slots,"prefix"),e.prefixIcon?(v(),I(t(L),{key:0,class:y(t(s).e("icon"))},{default:A(()=>[(v(),I(Y(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),N("input",ne({id:t(T),ref_key:"input",ref:H,class:t(s).e("inner")},t(x),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?O.value?"text":"password":e.type,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[0]||(n[0]=(...h)=>t(K)&&t(K)(...h)),onBlur:n[1]||(n[1]=(...h)=>t(j)&&t(j)(...h)),onChange:fe,onKeydown:ge}),null,16,kt),m(" suffix slot "),t(Be)?(v(),S("span",{key:1,class:y(t(s).e("suffix"))},[N("span",{class:y(t(s).e("suffix-inner"))},[!t(W)||!t(Q)||!t(k)?(v(),S(oe,{key:0},[U(e.$slots,"suffix"),e.suffixIcon?(v(),I(t(L),{key:0,class:y(t(s).e("icon"))},{default:A(()=>[(v(),I(Y(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(W)?(v(),I(t(L),{key:1,class:y([t(s).e("icon"),t(s).e("clear")]),onMousedown:qe(t(Ge),["prevent"]),onClick:be},{default:A(()=>[Xe(t(rt))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(Q)?(v(),I(t(L),{key:2,class:y([t(s).e("icon"),t(s).e("password")]),onClick:Le},{default:A(()=>[(v(),I(Y(t(Ve))))]),_:1},8,["class"])):m("v-if",!0),t(k)?(v(),S("span",{key:3,class:y(t(s).e("count"))},[N("span",{class:y(t(s).e("count-inner"))},X(t(ee))+" / "+X(e.maxlength),3)],2)):m("v-if",!0),t(B)&&t(ce)&&t(de)?(v(),I(t(L),{key:4,class:y([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t(B)==="validating")])},{default:A(()=>[(v(),I(Y(t(ce))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(v(),S("div",{key:1,class:y(t(s).be("group","append"))},[U(e.$slots,"append")],2)):m("v-if",!0)],64)):(v(),S(oe,{key:1},[m(" textarea "),N("textarea",ne({id:t(T),ref_key:"textarea",ref:C,class:t(re).e("inner")},t(x),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(pe),"aria-label":e.label,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[2]||(n[2]=(...h)=>t(K)&&t(K)(...h)),onBlur:n[3]||(n[3]=(...h)=>t(j)&&t(j)(...h)),onChange:fe,onKeydown:ge}),null,16,Pt),t(k)?(v(),S("span",{key:0,style:Ze(ue.value),class:y(t(s).e("count"))},X(t(ee))+" / "+X(e.maxlength),7)):m("v-if",!0)],64))],16,Ft))}});var Tt=ut(Vt,[["__file","input.vue"]]);const Lt=dt(Tt);export{Lt as E,ht as i,wt as u};

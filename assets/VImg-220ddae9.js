import{bO as j,bP as C,cg as H,cr as M,bR as P,j as n,c as y,d5 as W,r as _,w as z,A as q,aJ as x,bH as O,b4 as U,I as L,bU as J,bz as G}from"./index-dfeb318d.js";import{m as K,M as h}from"./transition-e500b3bf.js";function Q(e){return{aspectStyles:y(()=>{const u=Number(e.aspectRatio);return u?{paddingBottom:String(1/u*100)+"%"}:void 0})}}const X=j()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...C(),...H()},setup(e,u){let{slots:i}=u;const{aspectStyles:r}=Q(e),{dimensionStyles:m}=M(e);return P(()=>{var a;return n("div",{class:["v-responsive",e.class],style:[m.value,e.style]},[n("div",{class:"v-responsive__sizer",style:r.value},null),(a=i.additional)==null?void 0:a.call(i),i.default&&n("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}});function Y(e,u){if(!W)return;const i=u.modifiers||{},r=u.value,{handler:m,options:a}=typeof r=="object"?r:{handler:r,options:{}},l=new IntersectionObserver(function(){var f;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const s=(f=e._observe)==null?void 0:f[u.instance.$.uid];if(!s)return;const o=v.some(S=>S.isIntersecting);m&&(!i.quiet||s.init)&&(!i.once||o||s.init)&&m(o,v,g),o&&i.once?k(e,u):s.init=!0},a);e._observe=Object(e._observe),e._observe[u.instance.$.uid]={init:!1,observer:l},l.observe(e)}function k(e,u){var r;const i=(r=e._observe)==null?void 0:r[u.instance.$.uid];i&&(i.observer.unobserve(e),delete e._observe[u.instance.$.uid])}const Z={mounted:Y,unmounted:k},p=Z,ne=j()({name:"VImg",directives:{intersect:p},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...C(),...K()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,u){let{emit:i,slots:r}=u;const m=_(""),a=_(),l=_(e.eager?"loading":"idle"),v=_(),g=_(),s=y(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),o=y(()=>s.value.aspect||v.value/g.value||0);z(()=>e.src,()=>{f(l.value!=="idle")}),z(o,(t,c)=>{!t&&c&&a.value&&b(a.value)}),q(()=>f());function f(t){if(!(e.eager&&t)&&!(W&&!t&&!e.eager)){if(l.value="loading",s.value.lazySrc){const c=new Image;c.src=s.value.lazySrc,b(c,null)}s.value.src&&x(()=>{var c,d;if(i("loadstart",((c=a.value)==null?void 0:c.currentSrc)||s.value.src),(d=a.value)!=null&&d.complete){if(a.value.naturalWidth||I(),l.value==="error")return;o.value||b(a.value,null),S()}else o.value||b(a.value),R()})}}function S(){var t;R(),l.value="loaded",i("load",((t=a.value)==null?void 0:t.currentSrc)||s.value.src)}function I(){var t;l.value="error",i("error",((t=a.value)==null?void 0:t.currentSrc)||s.value.src)}function R(){const t=a.value;t&&(m.value=t.currentSrc||t.src)}let w=-1;function b(t){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const d=()=>{clearTimeout(w);const{naturalHeight:V,naturalWidth:$}=t;V||$?(v.value=$,g.value=V):!t.complete&&l.value==="loading"&&c!=null?w=window.setTimeout(d,c):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,g.value=1)};d()}const N=y(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),B=()=>{var d;if(!s.value.src||l.value==="idle")return null;const t=n("img",{class:["v-img__img",N.value],src:s.value.src,srcset:s.value.srcset,alt:e.alt,sizes:e.sizes,ref:a,onLoad:S,onError:I},null),c=(d=r.sources)==null?void 0:d.call(r);return n(h,{transition:e.transition,appear:!0},{default:()=>[O(c?n("picture",{class:"v-img__picture"},[c,t]):t,[[G,l.value==="loaded"]])]})},A=()=>n(h,{transition:e.transition},{default:()=>[s.value.lazySrc&&l.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",N.value],src:s.value.lazySrc,alt:e.alt},null)]}),D=()=>r.placeholder?n(h,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!r.error)&&n("div",{class:"v-img__placeholder"},[r.placeholder()])]}):null,E=()=>r.error?n(h,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&n("div",{class:"v-img__error"},[r.error()])]}):null,F=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,T=_(!1);{const t=z(o,c=>{c&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{T.value=!0})}),t())})}return P(()=>O(n(X,{class:["v-img",{"v-img--booting":!T.value},e.class],style:[{width:J(e.width==="auto"?v.value:e.width)},e.style],aspectRatio:o.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>n(L,null,[n(B,null,null),n(A,null,null),n(F,null,null),n(D,null,null),n(E,null,null)]),default:r.default}),[[U("intersect"),{handler:f,options:e.options},null,{once:!0}]])),{currentSrc:m,image:a,state:l,naturalWidth:v,naturalHeight:g}}});export{p as I,ne as V};
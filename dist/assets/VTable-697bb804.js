import{bO as r,bP as h,cf as d,bQ as m,ck as v,cn as c,cq as f,bR as u,j as t,bU as g}from"./index-dfeb318d.js";const T=r()({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...h(),...d(),...m(),...v()},setup(a,n){let{slots:e}=n;const{themeClasses:b}=c(a),{densityClasses:i}=f(a);return u(()=>t(a.tag,{class:["v-table",{"v-table--fixed-height":!!a.height,"v-table--fixed-header":a.fixedHeader,"v-table--fixed-footer":a.fixedFooter,"v-table--has-top":!!e.top,"v-table--has-bottom":!!e.bottom,"v-table--hover":a.hover},b.value,i.value,a.class],style:a.style},{default:()=>{var o,l,s;return[(o=e.top)==null?void 0:o.call(e),e.default?t("div",{class:"v-table__wrapper",style:{height:g(a.height)}},[t("table",null,[e.default()])]):(l=e.wrapper)==null?void 0:l.call(e),(s=e.bottom)==null?void 0:s.call(e)]}})),{}}});export{T as V};

import{bO as c,bP as v,ck as d,cn as h,cv as m,bi as u,c as b,bU as r,bR as g,j as C}from"./index-dfeb318d.js";const x=c()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v(),...d()},setup(e,a){let{attrs:t}=a;const{themeClasses:s}=h(e),{textColorClasses:l,textColorStyles:n}=m(u(e,"color")),o=b(()=>{const i={};return e.length&&(i[e.vertical?"maxHeight":"maxWidth"]=r(e.length)),e.thickness&&(i[e.vertical?"borderRightWidth":"borderTopWidth"]=r(e.thickness)),i});return g(()=>C("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,l.value,e.class],style:[o.value,n.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{x as V};
import{d as m,h as e,T as i,j as u,e as d,k as p,l as c,m as v,r as n,n as f,p as g}from"./app.2478724d.js";import{S as b}from"./SkipLink.97f81319.js";var y=m({name:"FadeSlideY",setup(l,{slots:a}){const r=u(),s=r.resolve,t=r.pending;return()=>e(i,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:s,onBeforeLeave:t},()=>{var o;return(o=a.default)==null?void 0:o.call(a)})}}),S=m({name:"Layout",setup(){const l=g(),a=d(),r=f(),s=p(),t=c(),o=v(()=>a.value.blog.sidebarDisplay||l.value.blog.sidebarDisplay||"mobile");return()=>[e(b),e(n("CommonWrapper"),{},{default:()=>s.value.home?e(n("HomePage")):e(y,()=>e(n("NormalPage"),{key:r.value.path})),...o.value!=="none"?{navScreenBottom:()=>e(n("BloggerInfo"))}:{},...!t.value&&o.value==="always"?{sidebar:()=>e(n("BloggerInfo"))}:{}})]}});export{S as default};

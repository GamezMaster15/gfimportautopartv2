import{b as f,c as p,a as _}from"./firebase-da6e628f.js";import{_ as V}from"./CardSolid-07b1e509.js";import{V as n}from"./VRow-bf744c0d.js";import{V as v}from"./VCol-be91beef.js";import{a as h}from"./VCard-f2d7cbd6.js";import{r as c,a$ as b,o,c as u,i as e,f as r,R as d,bd as g,e as k}from"./index-ba7efa84.js";import"./VAvatar-f72d3f84.js";import"./VImg-86c86b93.js";const y={__name:"vendedores",setup(w){const s=c([]),l=c(null);b(async()=>{await f(p(_,"vendedores")).then(a=>{a.forEach(t=>{s.value.push({...t.data(),id:t.id})})})});const i=a=>{l.value=a,console.log(l.value)};return(a,t)=>(o(),u(d,null,[e(n,null,{default:r(()=>[e(v,{cols:"12"},{default:r(()=>[e(h,{title:"Vendedores"})]),_:1})]),_:1}),e(n,null,{default:r(()=>[(o(!0),u(d,null,g(s.value,m=>(o(),k(V,{data:m,onDataS:i},null,8,["data"]))),256))]),_:1})],64))}};export{y as default};
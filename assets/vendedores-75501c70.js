import{g as f,c as p,d as _}from"./firebase-27c2c523.js";import{_ as V}from"./CardSolid-81a016c7.js";import{V as n}from"./VRow-5a9c5f6f.js";import{V as v}from"./VCol-cb069812.js";import{a as h}from"./VCard-b97afb51.js";import{r as c,a$ as g,o,c as d,i as e,f as r,R as u,bd as k,e as w}from"./index-23ca07dd.js";import"./VAvatar-00cd55c2.js";import"./VImg-c22b4359.js";const y={__name:"vendedores",setup(x){const s=c([]),l=c(null);g(async()=>{await f(p(_,"vendedores")).then(a=>{a.forEach(t=>{s.value.push({...t.data(),id:t.id})})})});const i=a=>{l.value=a,console.log(l.value)};return(a,t)=>(o(),d(u,null,[e(n,null,{default:r(()=>[e(v,{cols:"12"},{default:r(()=>[e(h,{title:"Vendedores"})]),_:1})]),_:1}),e(n,null,{default:r(()=>[(o(!0),d(u,null,k(s.value,m=>(o(),w(V,{data:m,onDataS:i},null,8,["data"]))),256))]),_:1})],64))}};export{y as default};
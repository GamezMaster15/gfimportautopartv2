import{g as f,c as p,d as _}from"./firebase-27c2c523.js";import{_ as V}from"./CardSolid-8ccf2f18.js";import{V as n}from"./VRow-0d87a710.js";import{V as v}from"./VCol-ad427ed1.js";import{a as h}from"./VCard-d5960204.js";import{r as c,a$ as g,o,c as d,i as e,f as r,R as u,bd as k,e as w}from"./index-a3a041e5.js";import"./VAvatar-8b72b2c7.js";import"./VImg-b9f8bb6a.js";const y={__name:"vendedores",setup(x){const s=c([]),l=c(null);g(async()=>{await f(p(_,"vendedores")).then(a=>{a.forEach(t=>{s.value.push({...t.data(),id:t.id})})})});const i=a=>{l.value=a,console.log(l.value)};return(a,t)=>(o(),d(u,null,[e(n,null,{default:r(()=>[e(v,{cols:"12"},{default:r(()=>[e(h,{title:"Vendedores"})]),_:1})]),_:1}),e(n,null,{default:r(()=>[(o(!0),d(u,null,k(s.value,m=>(o(),w(V,{data:m,onDataS:i},null,8,["data"]))),256))]),_:1})],64))}};export{y as default};
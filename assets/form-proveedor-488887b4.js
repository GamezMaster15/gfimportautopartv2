import{_ as v}from"./DemoFormLayoutMultipleColumn-0bb8d921.js";import{_}from"./BarcodeScanner-2ae68278.js";import{V}from"./VRow-5a9c5f6f.js";import{V as k}from"./VCol-cb069812.js";import{V as C,a as b}from"./VCard-b97afb51.js";import{r as e,o as r,c as x,i as a,f as t,e as s,P as l,p as y,bS as B}from"./index-23ca07dd.js";import"./firebase-27c2c523.js";import"./VAlert-0b935baf.js";import"./VAvatar-00cd55c2.js";import"./VImg-c22b4359.js";import"./VTextField-0188063d.js";import"./index-6f18d817.js";import"./forwardRefs-9d31fcaa.js";import"./VSelect-16df0914.js";import"./VMenu-b65371a0.js";import"./VDivider-04bbdd0b.js";import"./VOverlay-7705dc66.js";import"./dialog-transition-c8e075fe.js";import"./VCheckboxBtn-75c328c0.js";import"./VChip-aad60885.js";import"./VForm-1db4ed8a.js";import"./verifySession-f711a3c3.js";import"./side-effects-16dd37a6.js";const U={__name:"form-proveedor",setup(w){const o=e(!1),p=e(""),c=e(!1),n=e(!1),u=e(!0),d=e(!1),m=()=>{o.value=!o.value},f=i=>{p.value=i,m()};return(i,h)=>(r(),x("div",null,[a(V,null,{default:t(()=>[a(k,{cols:"12"},{default:t(()=>[o.value===!1?(r(),s(b,{key:0,title:"Registrar Proveedor"},{default:t(()=>[a(C,null,{default:t(()=>[a(v,{form:{typeForm:!0,databarcode:p.value,client:c.value,product:n.value,proveedor:u.value,vendedor:d.value},onBarCode:m},null,8,["form"])]),_:1})]),_:1})):l("",!0),o.value?(r(),s(_,{key:1,onData:f})):l("",!0),o.value?(r(),s(B,{key:2,type:"submit",class:"w-100",onClick:m},{default:t(()=>[y(" Regresar ")]),_:1})):l("",!0)]),_:1})]),_:1})]))}};export{U as default};
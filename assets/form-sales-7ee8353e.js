import{_}from"./DemoFormLayoutMultipleColumn-0bb8d921.js";import{_ as v}from"./BarcodeScanner-2ae68278.js";import{V}from"./VRow-5a9c5f6f.js";import{V as k}from"./VCol-cb069812.js";import{V as C,a as b}from"./VCard-b97afb51.js";import{r as e,o as r,c as x,i as a,f as t,e as m,P as l,p as y,bS as B}from"./index-23ca07dd.js";import"./firebase-27c2c523.js";import"./VAlert-0b935baf.js";import"./VAvatar-00cd55c2.js";import"./VImg-c22b4359.js";import"./VTextField-0188063d.js";import"./index-6f18d817.js";import"./forwardRefs-9d31fcaa.js";import"./VSelect-16df0914.js";import"./VMenu-b65371a0.js";import"./VDivider-04bbdd0b.js";import"./VOverlay-7705dc66.js";import"./dialog-transition-c8e075fe.js";import"./VCheckboxBtn-75c328c0.js";import"./VChip-aad60885.js";import"./VForm-1db4ed8a.js";import"./verifySession-f711a3c3.js";import"./side-effects-16dd37a6.js";const U={__name:"form-sales",setup(w){const o=e(!1),i=e(""),c=e(!1),n=e(!1),u=e(!1),d=e(!0),s=()=>{o.value=!o.value},f=p=>{i.value=p,s()};return(p,h)=>(r(),x("div",null,[a(V,null,{default:t(()=>[a(k,{cols:"12"},{default:t(()=>[o.value===!1?(r(),m(b,{key:0,title:"Registrar Vendedor"},{default:t(()=>[a(C,null,{default:t(()=>[a(_,{form:{typeForm:!0,databarcode:i.value,client:c.value,product:n.value,proveedor:u.value,vendedor:d.value},onBarCode:s},null,8,["form"])]),_:1})]),_:1})):l("",!0),o.value?(r(),m(v,{key:1,onData:f})):l("",!0),o.value?(r(),m(B,{key:2,type:"submit",class:"w-100",onClick:s},{default:t(()=>[y(" Regresar ")]),_:1})):l("",!0)]),_:1})]),_:1})]))}};export{U as default};
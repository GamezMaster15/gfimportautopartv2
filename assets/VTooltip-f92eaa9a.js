import{v as p,ci as O,C as S,bV as h,cm as x,l as e,r as T,K as C,i as k,O as u}from"./index-e9195293.js";import{a as w,b as A,V as d}from"./VOverlay-4bd54bc1.js";import{f as I}from"./forwardRefs-9d31fcaa.js";const R=p({id:String,text:String,...O(w({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"v-tooltip"),F=S()({name:"VTooltip",props:R(),emits:{"update:modelValue":t=>!0},setup(t,v){let{slots:o}=v;const n=h(t,"modelValue"),{scopeId:m}=A(),f=x(),r=e(()=>t.id||`v-tooltip-${f}`),l=T(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),b=e(()=>u({"aria-describedby":r.value},t.activatorProps));return C(()=>{const[y]=d.filterProps(t);return k(d,u({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},y,{modelValue:n.value,"onUpdate:modelValue":a=>n.value=a,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:b.value,_disableGlobalStack:!0},m),{activator:o.activator,default:function(){var c;for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return((c=o.default)==null?void 0:c.call(o,...s))??t.text}})}),I({},l)}});export{F as V};

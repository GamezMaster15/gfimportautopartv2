import"./VCol-4f5032ea.js";import{v as p,x as S,A as k,C as w,l as V,h as b,cY as A,aa as L}from"./index-86c94f78.js";const o=["start","end","center"],g=["space-between","space-around","space-evenly"];function i(t,s){return A.reduce((e,a)=>{const n=t+L(a);return e[n]=s(),e},{})}const N=[...o,"baseline","stretch"],d=t=>N.includes(t),f=i("align",()=>({type:String,default:null,validator:d})),P=[...o,...g],y=t=>P.includes(t),C=i("justify",()=>({type:String,default:null,validator:y})),E=[...o,...g,"stretch"],j=t=>E.includes(t),m=i("alignContent",()=>({type:String,default:null,validator:j})),u={align:Object.keys(f),justify:Object.keys(C),alignContent:Object.keys(m)},h={align:"align",justify:"justify",alignContent:"align-content"};function G(t,s,e){let a=h[t];if(e!=null){if(s){const n=s.replace(t,"");a+=`-${n}`}return a+=`-${e}`,a.toLowerCase()}}const T=p({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...f,justify:{type:String,default:null,validator:y},...C,alignContent:{type:String,default:null,validator:j},...m,...S(),...k()},"v-row"),O=w()({name:"VRow",props:T(),setup(t,s){let{slots:e}=s;const a=V(()=>{const n=[];let l;for(l in u)u[l].forEach(c=>{const v=t[c],r=G(l,c,v);r&&n.push(r)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return b(t.tag,{class:["v-row",a.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}});export{O as V};
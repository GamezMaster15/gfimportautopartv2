import{C as g,x as f,c7 as J,K as b,i as n,v as h,I as u,ck as P,cn as y,cu as K,cF as N,cv as O,c0 as U,y as $,cU as j,z as q,cw as Q,A as W,B as X,cs as Y,cy as Z,c9 as ee,cz as ae,cA as te,cl as ne,cG as de,cB as ie,c1 as se,J as le,cV as ce,F as re,cD as ue,l as V,M as ve,be as oe,c2 as me,cE as ke}from"./index-e9195293.js";import{c as C,V as I}from"./VAvatar-793d927b.js";import{V as ye}from"./VImg-02447d84.js";const ge=g()({name:"VCardActions",props:f(),setup(e,i){let{slots:t}=i;return J({VBtn:{variant:"text"}}),b(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),fe=C("v-card-subtitle"),be=C("v-card-title"),Ce=h({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:String,title:String,...f(),...P()},"v-card-item"),pe=g()({name:"VCardItem",props:Ce(),setup(e,i){let{slots:t}=i;return b(()=>{var l;const a=!!(e.prependAvatar||e.prependIcon),v=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),o=!!(s||t.append),m=!!(e.title||t.title),k=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(y,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(I,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[m&&n(be,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),k&&n(fe,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(l=t.default)==null?void 0:l.call(t)]),o&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(y,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&n(I,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ae=C("v-card-text"),Ve=h({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...K(),...f(),...P(),...N(),...O(),...U(),...$(),...j(),...q(),...Q(),...W(),...X(),...Y({variant:"elevated"})},"v-card"),Se=g()({name:"VCard",directives:{Ripple:Z},props:Ve(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:v}=ee(e),{borderClasses:s}=ae(e),{colorClasses:o,colorStyles:m,variantClasses:k}=te(e),{densityClasses:l}=ne(e),{dimensionStyles:d}=de(e),{elevationClasses:S}=ie(e),{loaderClasses:x}=se(e),{locationStyles:B}=le(e),{positionClasses:D}=ce(e),{roundedClasses:T}=re(e),c=ue(e,t),L=V(()=>e.link!==!1&&c.isLink.value),r=V(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return b(()=>{const _=L.value?"a":e.tag,R=!!(a.title||e.title),F=!!(a.subtitle||e.subtitle),E=R||F,M=!!(a.append||e.appendAvatar||e.appendIcon),w=!!(a.prepend||e.prependAvatar||e.prependIcon),z=!!(a.image||e.image),G=E||w||M,H=!!(a.text||e.text);return ve(n(_,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},v.value,s.value,o.value,l.value,S.value,x.value,D.value,T.value,k.value,e.class],style:[m.value,d.value,B.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var p;return[z&&n("div",{key:"image",class:"v-card__image"},[a.image?n(y,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ye,{key:"image-img",cover:!0,src:e.image},null)]),n(me,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),G&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),H&&n(Ae,{key:"text"},{default:()=>{var A;return[((A=a.text)==null?void 0:A.call(a))??e.text]}}),(p=a.default)==null?void 0:p.call(a),a.actions&&n(ge,null,{default:a.actions}),ke(r.value,"v-card")]}}),[[oe("ripple"),r.value&&e.ripple]])}),{}}});export{Ae as V,Se as a,pe as b,be as c,fe as d,ge as e};

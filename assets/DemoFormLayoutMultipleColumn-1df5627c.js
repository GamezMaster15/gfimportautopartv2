import{v as Tt,b_ as wt,C as kt,G as Ut,bV as Et,l as G,co as Be,r as B,w as Ct,K as Vt,cp as St,i as r,O as Ue,R as Re,aS as At,cq as It,a$ as Pt,d as Nt,o as ne,c as Ot,e as ie,f as h,p as I,V as xt,cr as ue,bS as M,bQ as ce,P as de,a as $}from"./index-e9195293.js";import{_ as Dt,C as Bt,r as Fe,S as Ft,a as we,b as Lt,e as Mt,f as qt,h as zt,F as Ht,g as Le,c as q,d as z,i as $t,j as K}from"./firebase-27c2c523.js";import{V as he}from"./VRow-37168606.js";import{V as m}from"./VCol-d872af14.js";import{V as fe}from"./VAlert-663f9ea6.js";import{m as jt,a as Gt,u as Xt,b as Me,f as Wt,c as Kt,d as Zt,V as y}from"./VTextField-6a4aa31a.js";import{V as Jt}from"./VSelect-1c878feb.js";import{f as Yt}from"./forwardRefs-9d31fcaa.js";import{V as Qt}from"./VChip-2b15aeec.js";import{V as pe}from"./VForm-90dcef76.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="firebasestorage.googleapis.com",We="storageBucket",en=2*60*1e3,tn=10*60*1e3,nn=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V extends Ht{constructor(e,n,s=0){super(Ee(e),`Firebase Storage: ${n} (${Ee(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,V.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ee(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var w;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(w||(w={}));function Ee(t){return"storage/"+t}function Ae(){const t="An unknown error occurred, please check the error payload for server response.";return new V(w.UNKNOWN,t)}function sn(t){return new V(w.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function on(t){return new V(w.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function rn(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new V(w.UNAUTHENTICATED,t)}function an(){return new V(w.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ln(t){return new V(w.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Ke(){return new V(w.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ze(){return new V(w.CANCELED,"User canceled the upload/download.")}function un(t){return new V(w.INVALID_URL,"Invalid URL '"+t+"'.")}function cn(t){return new V(w.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function dn(){return new V(w.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+We+"' property when initializing the app?")}function Je(){return new V(w.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function hn(){return new V(w.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function fn(){return new V(w.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function pn(t){return new V(w.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Se(t){return new V(w.INVALID_ARGUMENT,t)}function Ye(){return new V(w.APP_DELETED,"The Firebase app was deleted.")}function mn(t){return new V(w.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function oe(t,e){return new V(w.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function se(t){throw new V(w.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=D.makeFromUrl(e,n)}catch{return new D(e,"")}if(s.path==="")return s;throw cn(e)}static makeFromUrl(e,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function a(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const i="(/(.*))?$",c=new RegExp("^gs://"+o+i,"i"),d={bucket:1,path:3};function p(E){E.path_=decodeURIComponent(E.path)}const _="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),k="(/([^?#]*).*)?$",R=new RegExp(`^https?://${g}/${_}/b/${o}/o${k}`,"i"),f={bucket:1,path:3},A=n===Xe?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",S=new RegExp(`^https?://${A}/${o}/${T}`,"i"),U=[{regex:c,indices:d,postModify:a},{regex:R,indices:f,postModify:p},{regex:S,indices:{bucket:1,path:2},postModify:p}];for(let E=0;E<U.length;E++){const C=U[E],l=C.regex.exec(e);if(l){const b=l[C.indices.bucket];let u=l[C.indices.path];u||(u=""),s=new D(b,u),C.postModify(s);break}}if(s==null)throw un(e);return s}}class _n{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,e,n){let s=1,o=null,a=null,i=!1,c=0;function d(){return c===2}let p=!1;function _(...T){p||(p=!0,e.apply(null,T))}function g(T){o=setTimeout(()=>{o=null,t(R,d())},T)}function k(){a&&clearTimeout(a)}function R(T,...S){if(p){k();return}if(T){k(),_.call(null,T,...S);return}if(d()||i){k(),_.call(null,T,...S);return}s<64&&(s*=2);let U;c===1?(c=2,U=0):U=(s+Math.random())*1e3,g(U)}let f=!1;function A(T){f||(f=!0,k(),!p&&(o!==null?(T||(c=2),clearTimeout(o),g(0)):T||(c=1)))}return g(0),a=setTimeout(()=>{i=!0,A(!0)},n),A}function bn(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t){return t!==void 0}function yn(t){return typeof t=="function"}function Rn(t){return typeof t=="object"&&!Array.isArray(t)}function ke(t){return typeof t=="string"||t instanceof String}function qe(t){return Ie()&&t instanceof Blob}function Ie(){return typeof Blob<"u"}function ze(t,e,n,s){if(s<e)throw Se(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Se(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Qe(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const o=e(s)+"="+e(t[s]);n=n+o+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(X||(X={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,e){const n=t>=500&&t<600,o=[408,429].indexOf(t)!==-1,a=e.indexOf(t)!==-1;return n||o||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n,s,o,a,i,c,d,p,_,g,k=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=i,this.callback_=c,this.errorCallback_=d,this.timeout_=p,this.progressCallback_=_,this.connectionFactory_=g,this.retry=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,f)=>{this.resolve_=R,this.reject_=f,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new me(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const i=c=>{const d=c.loaded,p=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,p)};this.progressCallback_!==null&&a.addUploadProgressListener(i),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(i),this.pendingConnection_=null;const c=a.getErrorCode()===X.NO_ERROR,d=a.getStatus();if(!c||et(d,this.additionalRetryCodes_)&&this.retry){const _=a.getErrorCode()===X.ABORT;s(!1,new me(!1,null,_));return}const p=this.successCodes_.indexOf(d)!==-1;s(!0,new me(p,a))})},n=(s,o)=>{const a=this.resolve_,i=this.reject_,c=o.connection;if(o.wasSuccessCode)try{const d=this.callback_(c,c.getResponse());vn(d)?a(d):a()}catch(d){i(d)}else if(c!==null){const d=Ae();d.serverResponse=c.getErrorText(),this.errorCallback_?i(this.errorCallback_(c,d)):i(d)}else if(o.canceled){const d=this.appDelete_?Ye():Ze();i(d)}else{const d=Ke();i(d)}};this.canceled_?n(!1,new me(!1,null,!0)):this.backoffId_=gn(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bn(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class me{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function wn(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function kn(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Un(t,e){e&&(t["X-Firebase-GMPID"]=e)}function En(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Cn(t,e,n,s,o,a,i=!0){const c=Qe(t.urlParams),d=t.url+c,p=Object.assign({},t.headers);return Un(p,e),wn(p,n),kn(p,a),En(p,s),new Tn(d,t.method,p,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,o,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Sn(...t){const e=Vn();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Ie())return new Blob(t);throw new V(w.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function An(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t){if(typeof atob>"u")throw pn("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ce{constructor(e,n){this.data=e,this.contentType=n||null}}function Pn(t,e){switch(t){case F.RAW:return new Ce(tt(e));case F.BASE64:case F.BASE64URL:return new Ce(nt(t,e));case F.DATA_URL:return new Ce(On(e),xn(e))}throw Ae()}function tt(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const a=s,i=t.charCodeAt(++n);s=65536|(a&1023)<<10|i&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Nn(t){let e;try{e=decodeURIComponent(t)}catch{throw oe(F.DATA_URL,"Malformed data URL.")}return tt(e)}function nt(t,e){switch(t){case F.BASE64:{const o=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(o||a)throw oe(t,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case F.BASE64URL:{const o=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(o||a)throw oe(t,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=In(e)}catch(o){throw o.message.includes("polyfill")?o:oe(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}class st{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw oe(F.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Dn(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function On(t){const e=new st(t);return e.base64?nt(F.BASE64,e.rest):Nn(e.rest)}function xn(t){return new st(t).contentType}function Dn(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){let s=0,o="";qe(e)?(this.data_=e,s=e.size,o=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,n){if(qe(this.data_)){const s=this.data_,o=An(s,e,n);return o===null?null:new H(o)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new H(s,!0)}}static getBlob(...e){if(Ie()){const n=e.map(s=>s instanceof H?s.data_:s);return new H(Sn.apply(null,n))}else{const n=e.map(i=>ke(i)?Pn(F.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const o=new Uint8Array(s);let a=0;return n.forEach(i=>{for(let c=0;c<i.length;c++)o[a++]=i[c]}),new H(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){let e;try{e=JSON.parse(t)}catch{return null}return Rn(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Fn(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function rt(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){return e}class P{constructor(e,n,s,o){this.server=e,this.local=n||e,this.writable=!!s,this.xform=o||Ln}}let _e=null;function Mn(t){return!ke(t)||t.length<2?t:rt(t)}function at(){if(_e)return _e;const t=[];t.push(new P("bucket")),t.push(new P("generation")),t.push(new P("metageneration")),t.push(new P("name","fullPath",!0));function e(a,i){return Mn(i)}const n=new P("name");n.xform=e,t.push(n);function s(a,i){return i!==void 0?Number(i):i}const o=new P("size");return o.xform=s,t.push(o),t.push(new P("timeCreated")),t.push(new P("updated")),t.push(new P("md5Hash",null,!0)),t.push(new P("cacheControl",null,!0)),t.push(new P("contentDisposition",null,!0)),t.push(new P("contentEncoding",null,!0)),t.push(new P("contentLanguage",null,!0)),t.push(new P("contentType",null,!0)),t.push(new P("metadata","customMetadata",!0)),_e=t,_e}function qn(t,e){function n(){const s=t.bucket,o=t.fullPath,a=new D(s,o);return e._makeStorageReference(a)}Object.defineProperty(t,"ref",{get:n})}function zn(t,e,n){const s={};s.type="file";const o=n.length;for(let a=0;a<o;a++){const i=n[a];s[i.local]=i.xform(s,e[i.server])}return qn(s,t),s}function lt(t,e,n){const s=ot(e);return s===null?null:zn(t,s,n)}function Hn(t,e,n,s){const o=ot(e);if(o===null||!ke(o.downloadTokens))return null;const a=o.downloadTokens;if(a.length===0)return null;const i=encodeURIComponent;return a.split(",").map(p=>{const _=t.bucket,g=t.fullPath,k="/b/"+i(_)+"/o/"+i(g),R=re(k,n,s),f=Qe({alt:"media",token:p});return R+f})[0]}function it(t,e){const n={},s=e.length;for(let o=0;o<s;o++){const a=e[o];a.writable&&(n[a.server]=t[a.local])}return JSON.stringify(n)}class Y{constructor(e,n,s,o){this.url=e,this.method=n,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){if(!t)throw Ae()}function Pe(t,e){function n(s,o){const a=lt(t,o,e);return L(a!==null),a}return n}function $n(t,e){function n(s,o){const a=lt(t,o,e);return L(a!==null),Hn(a,o,t.host,t._protocol)}return n}function ae(t){function e(n,s){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=an():o=rn():n.getStatus()===402?o=on(t.bucket):n.getStatus()===403?o=ln(t.path):o=s,o.status=n.getStatus(),o.serverResponse=s.serverResponse,o}return e}function ut(t){const e=ae(t);function n(s,o){let a=e(s,o);return s.getStatus()===404&&(a=sn(t.path)),a.serverResponse=o.serverResponse,a}return n}function jn(t,e,n){const s=e.fullServerUrl(),o=re(s,t.host,t._protocol),a="GET",i=t.maxOperationRetryTime,c=new Y(o,a,Pe(t,n),i);return c.errorHandler=ut(e),c}function Gn(t,e,n){const s=e.fullServerUrl(),o=re(s,t.host,t._protocol),a="GET",i=t.maxOperationRetryTime,c=new Y(o,a,$n(t,n),i);return c.errorHandler=ut(e),c}function Xn(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function ct(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Xn(null,e)),s}function Wn(t,e,n,s,o){const a=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function c(){let U="";for(let E=0;E<2;E++)U=U+Math.random().toString().slice(2);return U}const d=c();i["Content-Type"]="multipart/related; boundary="+d;const p=ct(e,s,o),_=it(p,n),g="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+_+`\r
--`+d+`\r
Content-Type: `+p.contentType+`\r
\r
`,k=`\r
--`+d+"--",R=H.getBlob(g,s,k);if(R===null)throw Je();const f={name:p.fullPath},A=re(a,t.host,t._protocol),T="POST",S=t.maxUploadRetryTime,O=new Y(A,T,Pe(t,n),S);return O.urlParams=f,O.headers=i,O.body=R.uploadData(),O.errorHandler=ae(e),O}class Te{constructor(e,n,s,o){this.current=e,this.total=n,this.finalized=!!s,this.metadata=o||null}}function Ne(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{L(!1)}return L(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Kn(t,e,n,s,o){const a=e.bucketOnlyServerUrl(),i=ct(e,s,o),c={name:i.fullPath},d=re(a,t.host,t._protocol),p="POST",_={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":i.contentType,"Content-Type":"application/json; charset=utf-8"},g=it(i,n),k=t.maxUploadRetryTime;function R(A){Ne(A);let T;try{T=A.getResponseHeader("X-Goog-Upload-URL")}catch{L(!1)}return L(ke(T)),T}const f=new Y(d,p,R,k);return f.urlParams=c,f.headers=_,f.body=g,f.errorHandler=ae(e),f}function Zn(t,e,n,s){const o={"X-Goog-Upload-Command":"query"};function a(p){const _=Ne(p,["active","final"]);let g=null;try{g=p.getResponseHeader("X-Goog-Upload-Size-Received")}catch{L(!1)}g||L(!1);const k=Number(g);return L(!isNaN(k)),new Te(k,s.size(),_==="final")}const i="POST",c=t.maxUploadRetryTime,d=new Y(n,i,a,c);return d.headers=o,d.errorHandler=ae(e),d}const He=256*1024;function Jn(t,e,n,s,o,a,i,c){const d=new Te(0,0);if(i?(d.current=i.current,d.total=i.total):(d.current=0,d.total=s.size()),s.size()!==d.total)throw hn();const p=d.total-d.current;let _=p;o>0&&(_=Math.min(_,o));const g=d.current,k=g+_;let R="";_===0?R="finalize":p===_?R="upload, finalize":R="upload";const f={"X-Goog-Upload-Command":R,"X-Goog-Upload-Offset":`${d.current}`},A=s.slice(g,k);if(A===null)throw Je();function T(E,C){const l=Ne(E,["active","final"]),b=d.current+_,u=s.size();let v;return l==="final"?v=Pe(e,a)(E,C):v=null,new Te(b,u,l==="final",v)}const S="POST",O=e.maxUploadRetryTime,U=new Y(n,S,T,O);return U.headers=f,U.body=A.uploadData(),U.progressCallback=c||null,U.errorHandler=ae(t),U}const N={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ve(t){switch(t){case"running":case"pausing":case"canceling":return N.RUNNING;case"paused":return N.PAUSED;case"success":return N.SUCCESS;case"canceled":return N.CANCELED;case"error":return N.ERROR;default:return N.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,s){if(yn(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const a=e;this.next=a.next,this.error=a.error,this.complete=a.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Qn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=X.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=X.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=X.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,o){if(this.sent_)throw se("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw se("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw se("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw se("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw se("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class es extends Qn{initXhr(){this.xhr_.responseType="text"}}function J(){return new es}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=at(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=o=>{if(this._request=void 0,this._chunkMultiplier=1,o._codeEquals(w.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const a=this.isExponentialBackoffExpired();if(et(o.status,[]))if(a)o=Ke();else{this.sleepTime=Math.max(this.sleepTime*2,nn),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=o,this._transition("error")}},this._metadataErrorHandler=o=>{this._request=void 0,o._codeEquals(w.CANCELED)?this.completeTransitions_():(this._error=o,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((o,a)=>{this._resolve=o,this._reject=a,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=Kn(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(s,J,e,n);this._request=o,o.getPromise().then(a=>{this._request=void 0,this._uploadUrl=a,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const o=Zn(this._ref.storage,this._ref._location,e,this._blob),a=this._ref.storage._makeRequest(o,J,n,s);this._request=a,a.getPromise().then(i=>{i=i,this._request=void 0,this._updateProgress(i.current),this._needToFetchStatus=!1,i.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=He*this._chunkMultiplier,n=new Te(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((o,a)=>{let i;try{i=Jn(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(d){this._error=d,this._transition("error");return}const c=this._ref.storage._makeRequest(i,J,o,a,!1);this._request=c,c.getPromise().then(d=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(d.current),d.finalized?(this._metadata=d.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){He*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=jn(this._ref.storage,this._ref._location,this._mappings),o=this._ref.storage._makeRequest(s,J,e,n);this._request=o,o.getPromise().then(a=>{this._request=void 0,this._metadata=a,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=Wn(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(s,J,e,n);this._request=o,o.getPromise().then(a=>{this._request=void 0,this._metadata=a,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Ze(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Ve(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,o){const a=new Yn(n||void 0,s||void 0,o||void 0);return this._addObserver(a),()=>{this._removeObserver(a)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Ve(this._state)){case N.SUCCESS:Z(this._resolve.bind(null,this.snapshot))();break;case N.CANCELED:case N.ERROR:const n=this._reject;Z(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Ve(this._state)){case N.RUNNING:case N.PAUSED:e.next&&Z(e.next.bind(e,this.snapshot))();break;case N.SUCCESS:e.complete&&Z(e.complete.bind(e))();break;case N.CANCELED:case N.ERROR:e.error&&Z(e.error.bind(e,this._error))();break;default:e.error&&Z(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,n){this._service=e,n instanceof D?this._location=n:this._location=D.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new W(e,n)}get root(){const e=new D(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rt(this._location.path)}get storage(){return this._service}get parent(){const e=Bn(this._location.path);if(e===null)return null;const n=new D(this._location.bucket,e);return new W(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw mn(e)}}function ns(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new ts(t,new H(e),n)}function ss(t){t._throwIfRoot("getDownloadURL");const e=Gn(t.storage,t._location,at());return t.storage.makeRequestWithTokens(e,J).then(n=>{if(n===null)throw fn();return n})}function os(t,e){const n=Fn(t._location.path,e),s=new D(t._location.bucket,n);return new W(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t){return/^[A-Za-z]+:\/\//.test(t)}function as(t,e){return new W(t,e)}function dt(t,e){if(t instanceof Oe){const n=t;if(n._bucket==null)throw dn();const s=new W(n,n._bucket);return e!=null?dt(s,e):s}else return e!==void 0?os(t,e):t}function ls(t,e){if(e&&rs(e)){if(t instanceof Oe)return as(t,e);throw Se("To use ref(service, url), the first argument must be a Storage instance.")}else return dt(t,e)}function $e(t,e){const n=e==null?void 0:e[We];return n==null?null:D.makeFromBucketSpec(n,t)}function is(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:o}=s;o&&(t._overrideAuthToken=typeof o=="string"?o:zt(o,t.app.options.projectId))}class Oe{constructor(e,n,s,o,a){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=a,this._bucket=null,this._host=Xe,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=en,this._maxUploadRetryTime=tn,this._requests=new Set,o!=null?this._bucket=D.makeFromBucketSpec(o,this._host):this._bucket=$e(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=D.makeFromBucketSpec(this._url,e):this._bucket=$e(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ze("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ze("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new W(this,e)}_makeRequest(e,n,s,o,a=!0){if(this._deleted)return new _n(Ye());{const i=Cn(e,this._appId,s,o,n,this._firebaseVersion,a);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,o).getPromise()}}const je="@firebase/storage",Ge="0.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="storage";function ge(t,e,n){return t=we(t),ns(t,e,n)}function be(t){return t=we(t),ss(t)}function ve(t,e){return t=we(t),ls(t,e)}function us(t=qt(),e){t=we(t);const s=Lt(t,ht).getImmediate({identifier:e}),o=Mt("storage");return o&&cs(s,...o),s}function cs(t,e,n,s={}){is(t,e,n,s)}function ds(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new Oe(n,s,o,e,Ft)}function hs(){Dt(new Bt(ht,ds,"PUBLIC").setMultipleInstances(!0)),Fe(je,Ge,""),Fe(je,Ge,"esm2017")}hs();const fs=Tt({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:t=>typeof t=="boolean"||[1e3,1024].includes(t)},...jt({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:t=>wt(t).every(e=>e!=null&&typeof e=="object")},...Gt({clearable:!0})},"v-file-input"),ye=kt()({name:"VFileInput",inheritAttrs:!1,props:fs(),emits:{"click:control":t=>!0,"mousedown:control":t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:s,slots:o}=e;const{t:a}=Ut(),i=Et(t,"modelValue"),{isFocused:c,focus:d,blur:p}=Xt(t),_=G(()=>typeof t.showSize!="boolean"?t.showSize:void 0),g=G(()=>(i.value??[]).reduce((v,x)=>{let{size:Q=0}=x;return v+Q},0)),k=G(()=>Be(g.value,_.value)),R=G(()=>(i.value??[]).map(v=>{const{name:x="",size:Q=0}=v;return t.showSize?`${x} (${Be(Q,_.value)})`:x})),f=G(()=>{var x;const v=((x=i.value)==null?void 0:x.length)??0;return t.showSize?a(t.counterSizeString,v,k.value):a(t.counterString,v)}),A=B(),T=B(),S=B(),O=G(()=>c.value||t.active),U=G(()=>["plain","underlined"].includes(t.variant));function E(){var v;S.value!==document.activeElement&&((v=S.value)==null||v.focus()),c.value||d()}function C(v){b(v)}function l(v){s("mousedown:control",v)}function b(v){var x;(x=S.value)==null||x.click(),s("click:control",v)}function u(v){v.stopPropagation(),E(),At(()=>{i.value=[],It(t["onClick:clear"],v)})}return Ct(i,v=>{(!Array.isArray(v)||!v.length)&&S.value&&(S.value.value="")}),Vt(()=>{const v=!!(o.counter||t.counter),x=!!(v||o.details),[Q,ft]=St(n),[{modelValue:Ts,...pt}]=Me.filterProps(t),[mt]=Wt(t);return r(Me,Ue({ref:A,modelValue:i.value,"onUpdate:modelValue":ee=>i.value=ee,class:["v-file-input",{"v-file-input--chips":!!t.chips,"v-file-input--selection-slot":!!o.selection,"v-text-field--plain-underlined":U.value},t.class],style:t.style,"onClick:prepend":C},Q,pt,{centerAffix:!U.value,focused:c.value}),{...o,default:ee=>{let{id:le,isDisabled:te,isDirty:xe,isReadonly:_t,isValid:gt}=ee;return r(Kt,Ue({ref:T,"prepend-icon":t.prependIcon,onMousedown:l,onClick:b,"onClick:clear":u,"onClick:prependInner":t["onClick:prependInner"],"onClick:appendInner":t["onClick:appendInner"]},mt,{id:le.value,active:O.value||xe.value,dirty:xe.value,disabled:te.value,focused:c.value,error:gt.value===!1}),{...o,default:bt=>{var De;let{props:{class:vt,...yt}}=bt;return r(Re,null,[r("input",Ue({ref:S,type:"file",readonly:_t.value,disabled:te.value,multiple:t.multiple,name:t.name,onClick:j=>{j.stopPropagation(),E()},onChange:j=>{if(!j.target)return;const Rt=j.target;i.value=[...Rt.files??[]]},onFocus:E,onBlur:p},yt,ft),null),r("div",{class:vt},[!!((De=i.value)!=null&&De.length)&&(o.selection?o.selection({fileNames:R.value,totalBytes:g.value,totalBytesReadable:k.value}):t.chips?R.value.map(j=>r(Qt,{key:j,size:"small",color:t.color},{default:()=>[j]})):R.value.join(", "))])])}})},details:x?ee=>{var le,te;return r(Re,null,[(le=o.details)==null?void 0:le.call(o,ee),v&&r(Re,null,[r("span",null,null),r(Zt,{active:!!((te=i.value)!=null&&te.length),value:f.value},o.counter)])])}:void 0})}),Yt({},A,T,S)}}),ps=$("b",null,"Aviso:",-1),ms=$("b",null,"escanear",-1),_s=$("b",null,"Aviso:",-1),gs=$("b",null,"tomar la foto",-1),bs=$("b",null,"Aviso:",-1),vs=$("b",null,"tomar la foto",-1),ys=$("b",null,"Aviso:",-1),Rs=$("b",null,"tomar la foto",-1),Ns={__name:"DemoFormLayoutMultipleColumn",props:{form:{type:null,required:!0}},emits:["barCode"],setup(t,{emit:e}){const n=t,s=B(null),o=us($t),a=B(!1),i=B(0),c=B({name:"",description:"",price:"",priceSale:"",count:"",proveedor:"",barcode:"",codepart:"",image:""}),d=B({cardBg:"#16B1FF",name:"",document:"",phone:"",direction:"",email:"",avatarImg:""}),p=B({cardBg:"#12B4FF",name:"",document:"",phone:"",direction:"",email:"",avatarImg:""}),_=B({cardBg:"#12B4FF",name:"",lastname:"",document:"",phone:"",direction:"",email:"",avatarImg:""}),g=B({username:"",password:"",typeuser:"",avatarImg:""}),k=()=>{e("barCode",c.barcode)};Pt(async()=>{c.value.barcode=n.form.databarcode,(await Le(q(z,"proveedores"))).forEach(l=>{R.value.push({...l.data(),title:l.data().name,value:l.id})})});const R=B([]),f=C=>!!C||"Este campo es requerido",A=async()=>{const C=ve(o,"images/"+s.value.name),l=ge(C,s.value);l.on("state_changed",b=>{var u=b.bytesTransferred/b.totalBytes*100;i.value=u},b=>{console.log(b)},()=>{be(l.snapshot.ref).then(async b=>{c.value.image=b,await K(q(z,"inventario"),c.value).then(()=>{window.location.href="/inventory"}).catch(u=>{console.error("Error al agregar el producto: ",u)})})})},T=async()=>{const C=ve(o,"images/"+s.value.name),l=ge(C,s.value);l.on("state_changed",b=>{var u=b.bytesTransferred/b.totalBytes*100;i.value=u},b=>{console.log(b)},()=>{be(l.snapshot.ref).then(async b=>{d.value.avatarImg=b,g.value.avatarImg=b,g.value.typeuser="cliente",await K(q(z,"clientes"),d.value),await K(q(z,"users"),g.value).then(()=>{window.location.href="/"})})})},S=async()=>{const C=ve(o,"images/"+s.value.name),l=ge(C,s.value);l.on("state_changed",b=>{var u=b.bytesTransferred/b.totalBytes*100;i.value=u},b=>{console.log(b)},()=>{be(l.snapshot.ref).then(async b=>{p.value.avatarImg=b,await K(q(z,"proveedores"),p.value).then(()=>{window.location.href="/"})})})},O=async()=>{const C=ve(o,"images/"+s.value.name),l=ge(C,s.value);l.on("state_changed",b=>{var u=b.bytesTransferred/b.totalBytes*100;i.value=u},b=>{console.log(b)},()=>{be(l.snapshot.ref).then(async b=>{_.value.avatarImg=b,g.value.avatarImg=b,g.value.typeuser="vendedor",await K(q(z,"vendedores"),_.value),await K(q(z,"users"),g.value).then(()=>{window.location.href="/"})})})},U=C=>{s.value=C.target.files[0],console.log(s.value.name)},E=async()=>{(await Le(q(z,"users"))).forEach(l=>{l.data().username.indexOf(g.value.username)===-1?a.value=!1:a.value=!0})};return(C,l)=>{const b=Nt("IconBtn");return ne(),Ot(Re,null,[t.form.product?(ne(),ie(pe,{key:0,onSubmit:l[10]||(l[10]=ce(()=>A(),["prevent"]))},{default:h(()=>[r(he,null,{default:h(()=>[r(m,{cols:"12"},{default:h(()=>[r(fe,null,{default:h(()=>[ps,I(" Si vas a "),ms,I(" debes hacerlo primero antes de rellenar el formulario ")]),_:1})]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:c.value.name,"onUpdate:modelValue":l[0]||(l[0]=u=>c.value.name=u),label:"Nombre",placeholder:"Aceite de Motor",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:c.value.description,"onUpdate:modelValue":l[1]||(l[1]=u=>c.value.description=u),label:"Descripcion",placeholder:"Este Aceite de motor es de la maxima...",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:c.value.price,"onUpdate:modelValue":l[2]||(l[2]=u=>c.value.price=u),label:"Precio Costo",placeholder:"2$",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:c.value.priceSale,"onUpdate:modelValue":l[3]||(l[3]=u=>c.value.priceSale=u),label:"Precio de Venta",placeholder:"8$",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:c.value.count,"onUpdate:modelValue":l[4]||(l[4]=u=>c.value.count=u),label:"Unidades Disponibles",placeholder:"20",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(Jt,{modelValue:c.value.proveedor,"onUpdate:modelValue":l[5]||(l[5]=u=>c.value.proveedor=u),label:"Selecciona un proveedor",items:R.value,"item-value":"value",rules:[f]},null,8,["modelValue","items","rules"])]),_:1}),r(m,{cols:"10",md:"5"},{default:h(()=>[r(y,{modelValue:c.value.barcode,"onUpdate:modelValue":l[6]||(l[6]=u=>c.value.barcode=u),label:"Codigo de Barra",placeholder:"5781A73",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"2",md:"1",class:"my-auto"},{default:h(()=>[r(b,{class:"border",onClick:l[7]||(l[7]=u=>k())},{default:h(()=>[r(xt,{icon:"bx-barcode"})]),_:1})]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:c.value.codepart,"onUpdate:modelValue":l[8]||(l[8]=u=>c.value.codepart=u),label:"Codigo de Parte",placeholder:"534718",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12"},{default:h(()=>[r(ye,{label:"Imagen",rules:[f],onChange:U},null,8,["rules"])]),_:1}),r(m,null,{default:h(()=>[r(ue,{modelValue:i.value,"onUpdate:modelValue":l[9]||(l[9]=u=>i.value=u)},null,8,["modelValue"])]),_:1}),r(m,{cols:"12",class:"d-flex gap-4"},{default:h(()=>[r(M,{type:"submit"},{default:h(()=>[I(" Registrar ")]),_:1}),r(M,{type:"reset",color:"secondary",variant:"tonal"},{default:h(()=>[I(" Borrar todo ")]),_:1})]),_:1})]),_:1})]),_:1})):de("",!0),t.form.client?(ne(),ie(pe,{key:1,onSubmit:l[19]||(l[19]=ce(()=>T(),["prevent"]))},{default:h(()=>[r(he,null,{default:h(()=>[r(m,{cols:"12"},{default:h(()=>[r(fe,null,{default:h(()=>[_s,I(" Si vas a "),gs,I(" pon la camara en 1:1 ")]),_:1})]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:d.value.name,"onUpdate:modelValue":l[11]||(l[11]=u=>d.value.name=u),label:"Nombre de la Empresa",placeholder:"GF Import AutoPart",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:d.value.document,"onUpdate:modelValue":l[12]||(l[12]=u=>d.value.document=u),label:"RIF de la Empresa",placeholder:"J-50679888",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{type:"email",modelValue:d.value.email,"onUpdate:modelValue":l[13]||(l[13]=u=>d.value.email=u),label:"Correo Electronico",placeholder:"ejemplo@gmail.com",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:d.value.phone,"onUpdate:modelValue":l[14]||(l[14]=u=>d.value.phone=u),label:"Numero de telefono",placeholder:"+584126794857",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12"},{default:h(()=>[r(y,{modelValue:d.value.direction,"onUpdate:modelValue":l[15]||(l[15]=u=>d.value.direction=u),label:"Direccion",placeholder:"Centro, Av. Soco, La Victoria, Aragua",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12"},{default:h(()=>[r(ye,{label:"Imagen para el perfil",rules:[f],onChange:U},null,8,["rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:g.value.username,"onUpdate:modelValue":l[16]||(l[16]=u=>g.value.username=u),label:"Nombre de Usuario",placeholder:"Ejemplo02",rules:[f],onInput:E,error:a.value},null,8,["modelValue","rules","error"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:g.value.password,"onUpdate:modelValue":l[17]||(l[17]=u=>g.value.password=u),label:"Contraseña",placeholder:"NombreEmpresa.02 ",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,null,{default:h(()=>[r(ue,{modelValue:i.value,"onUpdate:modelValue":l[18]||(l[18]=u=>i.value=u)},null,8,["modelValue"])]),_:1}),r(m,{cols:"12",class:"d-flex gap-4"},{default:h(()=>[r(M,{type:"submit"},{default:h(()=>[I(" Registrar ")]),_:1}),r(M,{type:"reset",color:"secondary",variant:"tonal"},{default:h(()=>[I(" Borrar todo ")]),_:1})]),_:1})]),_:1})]),_:1})):de("",!0),t.form.proveedor?(ne(),ie(pe,{key:2,onSubmit:l[26]||(l[26]=ce(()=>S(),["prevent"]))},{default:h(()=>[r(he,null,{default:h(()=>[r(m,{cols:"12"},{default:h(()=>[r(fe,null,{default:h(()=>[bs,I(" Si vas a "),vs,I(" pon la camara en 1:1 ")]),_:1})]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:p.value.name,"onUpdate:modelValue":l[20]||(l[20]=u=>p.value.name=u),label:"Nombre de la Empresa",placeholder:"GF Import AutoPart",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:p.value.document,"onUpdate:modelValue":l[21]||(l[21]=u=>p.value.document=u),label:"RIF de la Empresa",placeholder:"J-50679888",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{type:"email",modelValue:p.value.email,"onUpdate:modelValue":l[22]||(l[22]=u=>p.value.email=u),label:"Correo Electronico",placeholder:"ejemplo@gmail.com",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:p.value.phone,"onUpdate:modelValue":l[23]||(l[23]=u=>p.value.phone=u),label:"Numero de telefono",placeholder:"+584126794857",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12"},{default:h(()=>[r(y,{modelValue:p.value.direction,"onUpdate:modelValue":l[24]||(l[24]=u=>p.value.direction=u),label:"Direccion",placeholder:"Centro, Av. Soco, La Victoria, Aragua",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12"},{default:h(()=>[r(ye,{label:"Imagen para el perfil",rules:[f],onChange:U},null,8,["rules"])]),_:1}),r(m,null,{default:h(()=>[r(ue,{modelValue:i.value,"onUpdate:modelValue":l[25]||(l[25]=u=>i.value=u)},null,8,["modelValue"])]),_:1}),r(m,{cols:"12",class:"d-flex gap-4"},{default:h(()=>[r(M,{type:"submit"},{default:h(()=>[I(" Registrar ")]),_:1}),r(M,{type:"reset",color:"secondary",variant:"tonal"},{default:h(()=>[I(" Borrar todo ")]),_:1})]),_:1})]),_:1})]),_:1})):de("",!0),t.form.vendedor?(ne(),ie(pe,{key:3,onSubmit:l[36]||(l[36]=ce(()=>O(),["prevent"]))},{default:h(()=>[r(he,null,{default:h(()=>[r(m,{cols:"12"},{default:h(()=>[r(fe,null,{default:h(()=>[ys,I(" Si vas a "),Rs,I(" pon la camara en 1:1 ")]),_:1})]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:_.value.name,"onUpdate:modelValue":l[27]||(l[27]=u=>_.value.name=u),label:"Nombres",placeholder:"Rafael Jose",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:_.value.lastname,"onUpdate:modelValue":l[28]||(l[28]=u=>_.value.lastname=u),label:"Apellidos",placeholder:"Perez Hernandez",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:_.value.document,"onUpdate:modelValue":l[29]||(l[29]=u=>_.value.document=u),label:"Cedula de Identidad",placeholder:"V-30789999",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{type:"email",modelValue:_.value.email,"onUpdate:modelValue":l[30]||(l[30]=u=>_.value.email=u),label:"Correo Electronico",placeholder:"example@gmail.com",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:_.value.phone,"onUpdate:modelValue":l[31]||(l[31]=u=>_.value.phone=u),label:"Numero de telefono",placeholder:"04126794857",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:_.value.direction,"onUpdate:modelValue":l[32]||(l[32]=u=>_.value.direction=u),label:"Direccion",placeholder:"La Victoria, Aragua, Venezuela",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12"},{default:h(()=>[r(ye,{label:"Imagen",rules:[f],onChange:U},null,8,["rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{modelValue:g.value.username,"onUpdate:modelValue":l[33]||(l[33]=u=>g.value.username=u),label:"Nombre de Usuario",placeholder:"nombre20",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,{cols:"12",md:"6"},{default:h(()=>[r(y,{type:"password",modelValue:g.value.password,"onUpdate:modelValue":l[34]||(l[34]=u=>g.value.password=u),label:"Contraseña",placeholder:"534718",rules:[f]},null,8,["modelValue","rules"])]),_:1}),r(m,null,{default:h(()=>[r(ue,{modelValue:i.value,"onUpdate:modelValue":l[35]||(l[35]=u=>i.value=u)},null,8,["modelValue"])]),_:1}),r(m,{cols:"12",class:"d-flex gap-4"},{default:h(()=>[r(M,{type:"submit"},{default:h(()=>[I(" Registrar ")]),_:1}),r(M,{type:"reset",color:"secondary",variant:"tonal"},{default:h(()=>[I(" Borrar todo ")]),_:1})]),_:1})]),_:1})]),_:1})):de("",!0)],64)}}};export{Ns as _};

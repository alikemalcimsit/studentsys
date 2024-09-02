"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{5002:function(e,t,n){n.d(t,{$q:function(){return lj},AK:function(){return ua},Ab:function(){return uu},B$:function(){return oC},Bt:function(){return uo},Cf:function(){return oI},EK:function(){return B},ET:function(){return l3},Eo:function(){return ok},F8:function(){return o0},Fc:function(){return oG},GL:function(){return l7},IO:function(){return lE},IX:function(){return oM},Ix:function(){return oQ},JU:function(){return oA},Jj:function(){return oY},K9:function(){return x},Ky:function(){return j},L$:function(){return oH},Lx:function(){return lM},Lz:function(){return oX},Me:function(){return e8},Mx:function(){return oK},PL:function(){return l0},PU:function(){return un},Pb:function(){return oW},QT:function(){return lJ},ST:function(){return oB},TF:function(){return oj},TQ:function(){return lV},UQ:function(){return l1},Ub:function(){return I},W:function(){return lW},WA:function(){return N},Wi:function(){return op},Wu:function(){return lO},Xb:function(){return Q},Xk:function(){return lZ},Xo:function(){return lN},ad:function(){return oP},ar:function(){return lS},at:function(){return oT},b9:function(){return lA},cf:function(){return l6},e0:function(){return lF},fH:function(){return oz},hJ:function(){return oN},i3:function(){return us},iE:function(){return oR},kl:function(){return lX},l7:function(){return ts},my:function(){return ox},nP:function(){return uc},oe:function(){return l8},pl:function(){return l5},qK:function(){return lH},qY:function(){return oq},r7:function(){return l4},sc:function(){return l9},u7:function(){return lz},vh:function(){return lk},vr:function(){return ul},xU:function(){return lQ},yq:function(){return E},zN:function(){return l2}});var r,i,s,a,o=n(9279),l=n(2680),u=n(9053),c=n(3943),h=n(6552),d=n(4575),f=n(357),m=n(6300).Buffer;let g="@firebase/firestore";/**
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
 */class p{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}p.UNAUTHENTICATED=new p(null),p.GOOGLE_CREDENTIALS=new p("google-credentials-uid"),p.FIRST_PARTY=new p("first-party-uid"),p.MOCK_USER=new p("mock-user");/**
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
 */let y="10.12.5",w=new u.Yd("@firebase/firestore");function v(){return w.logLevel}function I(e){w.setLogLevel(e)}function _(e,...t){if(w.logLevel<=u.in.DEBUG){let n=t.map(T);w.debug(`Firestore (${y}): ${e}`,...n)}}function b(e,...t){if(w.logLevel<=u.in.ERROR){let n=t.map(T);w.error(`Firestore (${y}): ${e}`,...n)}}function E(e,...t){if(w.logLevel<=u.in.WARN){let n=t.map(T);w.warn(`Firestore (${y}): ${e}`,...n)}}function T(e){if("string"==typeof e)return e;try{/**
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
 */return JSON.stringify(e)}catch(t){return e}}/**
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
 */function S(e="Unexpected state"){let t=`FIRESTORE (${y}) INTERNAL ASSERTION FAILED: `+e;throw b(t),Error(t)}function x(e,t){e||S()}/**
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
 */let D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends c.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class C{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class A{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(p.UNAUTHENTICATED))}shutdown(){}}class R{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class F{constructor(e){this.t=e,this.currentUser=p.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new C;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new C,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new C)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||S(),new A(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||S(),new p(e)}}class V{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=p.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class L{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new V(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(p.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class M{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,_("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||S(),this.R=e.token,new M(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class P{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function q(e,t){return e<t?-1:e>t?1:0}function U(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
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
 */class B{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new N(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new N(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return B.fromMillis(Date.now())}static fromDate(e){return B.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new B(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new B(0,0))}static max(){return new z(new B(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ${constructor(e,t,n){void 0===t?t=0:t>e.length&&S(),void 0===n?n=e.length-t:n>e.length-t&&S(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===$.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof $?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class G extends ${construct(e,t,n){return new G(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new N(D.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new G(t)}static emptyPath(){return new G([])}}let K=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Q extends ${construct(e,t,n){return new Q(e,t,n)}static isValidIdentifier(e){return K.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Q.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Q(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new N(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new N(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new N(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new N(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Q(t)}static emptyPath(){return new Q([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(G.fromString(e))}static fromName(e){return new j(G.fromString(e).popFirst(5))}static empty(){return new j(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===G.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return G.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new G(e.slice()))}}/**
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
 */class W{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function H(e){return e.fields.find(e=>2===e.kind)}function J(e){return e.fields.filter(e=>2!==e.kind)}W.UNKNOWN_ID=-1;class Y{constructor(e,t){this.fieldPath=e,this.kind=t}}class X{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new X(0,et.min())}}function Z(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new et(z.fromTimestamp(1e9===r?new B(n+1,0):new B(n,r)),j.empty(),t)}function ee(e){return new et(e.readTime,e.key,-1)}class et{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new et(z.min(),j.empty(),-1)}static max(){return new et(z.max(),j.empty(),-1)}}function en(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=j.comparator(e.documentKey,t.documentKey))?n:q(e.largestBatchId,t.largestBatchId)}/**
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
 */let er="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ei{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function es(e){if(e.code!==D.FAILED_PRECONDITION||e.message!==er)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ea{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ea((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof ea?t:ea.resolve(t)}catch(e){return ea.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ea.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ea.reject(t)}static resolve(e){return new ea((t,n)=>{t(e)})}static reject(e){return new ea((t,n)=>{n(e)})}static waitFor(e){return new ea((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=ea.resolve(!1);for(let n of e)t=t.next(e=>e?ea.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new ea((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new ea((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}/**
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
 */class eo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new C,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new eh(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{let n=ep(t.target.error);this.V.reject(new eh(e,n))}}static open(e,t,n,r){try{return new eo(t,e.transaction(r,n))}catch(e){throw new eh(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(_("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){return new ef(this.transaction.objectStore(e))}}class el{constructor(e,t,n){this.name=e,this.version=t,this.p=n,12.2===el.S((0,c.z$)())&&b("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return _("SimpleDb","Removing database:",e),em(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,c.hl)())return!1;if(el.C())return!0;let e=(0,c.z$)(),t=el.S(e),n=eu(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static C(){var e;return void 0!==f&&"YES"===(null===(e=f.__PRIVATE_env)||void 0===e?void 0:e.v)}static F(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i);return Number(t?t[1].split("_").slice(0,2).join("."):"-1")}async M(e){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{let r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{t(e.target.result)},r.onblocked=()=>{n(new eh(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{let r=t.target.error;"VersionError"===r.name?n(new N(D.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new N(D.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new eh(e,r))},r.onupgradeneeded=e=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.p.O(t,r.transaction,e.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=e=>this.N(e)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.M(e);let t=eo.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.g(),e)).catch(e=>(t.abort(e),ea.reject(e))).toPromise();return s.catch(()=>{}),await t.m,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(_("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}function eu(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}class ec{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return em(this.B.delete())}}class eh extends N{constructor(e,t){super(D.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ed(e){return"IndexedDbTransactionError"===e.name}class ef{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(_("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),em(n)}add(e){return _("SimpleDb","ADD",this.store.name,e,e),em(this.store.add(e))}get(e){return em(this.store.get(e)).next(t=>(void 0===t&&(t=null),_("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return _("SimpleDb","DELETE",this.store.name,e),em(this.store.delete(e))}count(){return _("SimpleDb","COUNT",this.store.name),em(this.store.count())}U(e,t){let n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){let e=r.getAll(n.range);return new ea((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{let e=this.cursor(n),t=[];return this.W(e,(e,n)=>{t.push(n)}).next(()=>t)}}G(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new ea((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}j(e,t){_("SimpleDb","DELETE ALL",this.store.name);let n=this.options(e,t);n.H=!1;let r=this.cursor(n);return this.W(r,(e,t,n)=>n.delete())}J(e,t){let n;t?n=e:(n={},t=e);let r=this.cursor(n);return this.W(r,t)}Y(e){let t=this.cursor({});return new ea((n,r)=>{t.onerror=e=>{r(ep(e.target.error))},t.onsuccess=t=>{let r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}W(e,t){let n=[];return new ea((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void r();let s=new ec(i),a=t(i.primaryKey,i.value,s);if(a instanceof ea){let e=a.catch(e=>(s.done(),ea.reject(e)));n.push(e)}s.isDone?r():null===s.K?i.continue():i.continue(s.K)}}).next(()=>ea.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function em(e){return new ea((t,n)=>{e.onsuccess=e=>{t(e.target.result)},e.onerror=e=>{n(ep(e.target.error))}})}let eg=!1;function ep(e){let t=el.S((0,c.z$)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new N("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return eg||(eg=!0,setTimeout(()=>{throw e},0)),e}}return e}class ey{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}X(e){_("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{_("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(e){ed(e)?_("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",e):await es(e)}await this.X(6e4)})}}class ew{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){let n=new Set,r=t,i=!0;return ea.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return _("IndexBackfiller",`Processing collection: ${t}`),this.ne(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{let i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.re(r,n)).next(n=>(_("IndexBackfiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}re(e,t){let n=e;return t.changes.forEach((e,t)=>{let r=ee(t);en(r,n)>0&&(n=r)}),new et(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ev{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}}function eI(e){return null==e}function e_(e){return 0===e&&1/e==-1/0}function eb(e){return"number"==typeof e&&Number.isInteger(e)&&!e_(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function eE(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\0":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(n),t);return t+"\x01\x01"}function eT(e){let t=e.length;if(t>=2||S(),2===t)return"\x01"===e.charAt(0)&&"\x01"===e.charAt(1)||S(),G.emptyPath();let n=t-2,r=[],i="";for(let s=0;s<t;){let t=e.indexOf("\x01",s);switch((t<0||t>n)&&S(),e.charAt(t+1)){case"\x01":let a;let o=e.substring(s,t);0===i.length?a=o:(i+=o,a=i,i=""),r.push(a);break;case"\x10":i+=e.substring(s,t)+"\0";break;case"\x11":i+=e.substring(s,t+1);break;default:S()}s=t+2}return new G(r)}ev.oe=-1;/**
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
 */let eS=["userId","batchId"],ex={},eD=["prefixPath","collectionGroup","readTime","documentId"],eN=["prefixPath","collectionGroup","documentId"],eC=["collectionGroup","readTime","prefixPath","documentId"],eA=["canonicalId","targetId"],ek=["targetId","path"],eR=["path","targetId"],eF=["collectionId","parent"],eV=["indexId","uid"],eL=["uid","sequenceNumber"],eM=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],eO=["indexId","uid","orderedDocumentKey"],eP=["userId","collectionPath","documentId"],eq=["userId","collectionPath","largestBatchId"],eU=["userId","collectionGroup","largestBatchId"],eB=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ez=[...eB,"documentOverlays"],e$=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],eG=[...e$,"indexConfiguration","indexState","indexEntries"],eK=[...eG,"globals"];/**
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
 */class eQ extends ei{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function ej(e,t){return el.F(e._e,t)}/**
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
 */function eW(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function eH(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function eJ(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class eY{constructor(e,t){this.comparator=e,this.root=t||eZ.EMPTY}insert(e,t){return new eY(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,eZ.BLACK,null,null))}remove(e){return new eY(this.comparator,this.root.remove(e,this.comparator).copy(null,null,eZ.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eX(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eX(this.root,e,this.comparator,!1)}getReverseIterator(){return new eX(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eX(this.root,e,this.comparator,!0)}}class eX{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class eZ{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:eZ.RED,this.left=null!=r?r:eZ.EMPTY,this.right=null!=i?i:eZ.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new eZ(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return eZ.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return eZ.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,eZ.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,eZ.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();let e=this.left.check();if(e!==this.right.check())throw S();return e+(this.isRed()?0:1)}}eZ.EMPTY=null,eZ.RED=!0,eZ.BLACK=!1,eZ.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(e,t,n,r,i){return this}insert(e,t,n){return new eZ(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class e0{constructor(e){this.comparator=e,this.data=new eY(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new e1(this.data.getIterator())}getIteratorFrom(e){return new e1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof e0)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new e0(this.comparator);return t.data=e,t}}class e1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function e2(e){return e.hasNext()?e.getNext():void 0}/**
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
 */class e5{constructor(e){this.fields=e,e.sort(Q.comparator)}static empty(){return new e5([])}unionWith(e){let t=new e0(Q.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new e5(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return U(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class e4 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function e8(){return"undefined"!=typeof atob}/**
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
 */class e3{constructor(e){this.binaryString=e}static fromBase64String(e){return new e3(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new e4("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new e3(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}e3.EMPTY_BYTE_STRING=new e3("");let e6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function e9(e){if(e||S(),"string"==typeof e){let t=0,n=e6.exec(e);if(n||S(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:e7(e.seconds),nanos:e7(e.nanos)}}function e7(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function te(e){return"string"==typeof e?e3.fromBase64String(e):e3.fromUint8Array(e)}/**
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
 */function tt(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function tn(e){let t=e.mapValue.fields.__previous_value__;return tt(t)?tn(t):t}function tr(e){let t=e9(e.mapValue.fields.__local_write_time__.timestampValue);return new B(t.seconds,t.nanos)}/**
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
 */class ti{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class ts{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ts("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ts&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */let ta={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},to={nullValue:"NULL_VALUE"};function tl(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?tt(e)?4:t_(e)?9007199254740991:10:S()}function tu(e,t){if(e===t)return!0;let n=tl(e);if(n!==tl(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return tr(e).isEqual(tr(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=e9(e.timestampValue),r=e9(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return te(e.bytesValue).isEqual(te(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return e7(e.geoPointValue.latitude)===e7(t.geoPointValue.latitude)&&e7(e.geoPointValue.longitude)===e7(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return e7(e.integerValue)===e7(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=e7(e.doubleValue),r=e7(t.doubleValue);return n===r?e_(n)===e_(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return U(e.arrayValue.values||[],t.arrayValue.values||[],tu);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(eW(n)!==eW(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!tu(n[e],r[e])))return!1;return!0}(e,t);default:return S()}}function tc(e,t){return void 0!==(e.values||[]).find(e=>tu(e,t))}function th(e,t){if(e===t)return 0;let n=tl(e),r=tl(t);if(n!==r)return q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return q(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=e7(e.integerValue||e.doubleValue),r=e7(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return td(e.timestampValue,t.timestampValue);case 4:return td(tr(e),tr(t));case 5:return q(e.stringValue,t.stringValue);case 6:return function(e,t){let n=te(e),r=te(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=q(n[e],r[e]);if(0!==t)return t}return q(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=q(e7(e.latitude),e7(t.latitude));return 0!==n?n:q(e7(e.longitude),e7(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=th(n[e],r[e]);if(t)return t}return q(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ta.mapValue&&t===ta.mapValue)return 0;if(e===ta.mapValue)return 1;if(t===ta.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=q(r[e],s[e]);if(0!==t)return t;let a=th(n[r[e]],i[s[e]]);if(0!==a)return a}return q(r.length,s.length)}(e.mapValue,t.mapValue);default:throw S()}}function td(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return q(e,t);let n=e9(e),r=e9(t),i=q(n.seconds,r.seconds);return 0!==i?i:q(n.nanos,r.nanos)}function tf(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=e9(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?te(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,j.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=tf(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${tf(e.fields[i])}`;return n+"}"}(e.mapValue):S()}function tm(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function tg(e){return!!e&&"integerValue"in e}function tp(e){return!!e&&"arrayValue"in e}function ty(e){return!!e&&"nullValue"in e}function tw(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function tv(e){return!!e&&"mapValue"in e}function tI(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return eH(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=tI(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=tI(e.arrayValue.values[n]);return t}return Object.assign({},e)}function t_(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function tb(e,t){let n=th(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function tE(e,t){let n=th(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}/**
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
 */class tT{constructor(e){this.value=e}static empty(){return new tT({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!tv(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tI(t)}setAll(e){let t=Q.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=tI(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());tv(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tu(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];tv(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(eH(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new tT(tI(this.value))}}/**
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
 */class tS{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new tS(e,0,z.min(),z.min(),z.min(),tT.empty(),0)}static newFoundDocument(e,t,n,r){return new tS(e,1,t,z.min(),n,r,0)}static newNoDocument(e,t){return new tS(e,2,t,z.min(),z.min(),tT.empty(),0)}static newUnknownDocument(e,t){return new tS(e,3,t,z.min(),z.min(),tT.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(z.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tT.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tT.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof tS&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tS(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class tx{constructor(e,t){this.position=e,this.inclusive=t}}function tD(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?j.comparator(j.fromName(a.referenceValue),n.key):th(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function tN(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!tu(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class tC{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class tA{}class tk extends tA{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new tP(e,t,n):"array-contains"===t?new tz(e,n):"in"===t?new t$(e,n):"not-in"===t?new tG(e,n):"array-contains-any"===t?new tK(e,n):new tk(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new tq(e,n):new tU(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(th(t,this.value)):null!==t&&tl(this.value)===tl(t)&&this.matchesComparison(th(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tR extends tA{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new tR(e,t)}matches(e){return tF(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function tF(e){return"and"===e.op}function tV(e){return"or"===e.op}function tL(e){return tM(e)&&tF(e)}function tM(e){for(let t of e.filters)if(t instanceof tR)return!1;return!0}function tO(e,t){let n=e.filters.concat(t);return tR.create(n,e.op)}class tP extends tk{constructor(e,t,n){super(e,t,n),this.key=j.fromName(n.referenceValue)}matches(e){let t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class tq extends tk{constructor(e,t){super(e,"in",t),this.keys=tB("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tU extends tk{constructor(e,t){super(e,"not-in",t),this.keys=tB("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function tB(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>j.fromName(e.referenceValue))}class tz extends tk{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return tp(t)&&tc(t.arrayValue,this.value)}}class t$ extends tk{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&tc(this.value.arrayValue,t)}}class tG extends tk{constructor(e,t){super(e,"not-in",t)}matches(e){if(tc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!tc(this.value.arrayValue,t)}}class tK extends tk{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!tp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>tc(this.value.arrayValue,e))}}/**
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
 */class tQ{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ue=null}}function tj(e,t=null,n=[],r=[],i=null,s=null,a=null){return new tQ(e,t,n,r,i,s,a)}function tW(e){if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof tk)return t.field.canonicalString()+t.op.toString()+tf(t.value);if(tL(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),eI(e.limit)||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>tf(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>tf(e)).join(",")),e.ue=t}return e.ue}function tH(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof tk?n instanceof tk&&t.op===n.op&&t.field.isEqual(n.field)&&tu(t.value,n.value):t instanceof tR?n instanceof tR&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void S()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!tN(e.startAt,t.startAt)&&tN(e.endAt,t.endAt)}function tJ(e){return j.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function tY(e,t){return e.filters.filter(e=>e instanceof tk&&e.field.isEqual(t))}function tX(e,t,n){let r=to,i=!0;for(let n of tY(e,t)){let e=to,t=!0;switch(n.op){case"<":case"<=":var s;e="nullValue"in(s=n.value)?to:"booleanValue"in s?{booleanValue:!1}:"integerValue"in s||"doubleValue"in s?{doubleValue:NaN}:"timestampValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in s?{stringValue:""}:"bytesValue"in s?{bytesValue:""}:"referenceValue"in s?tm(ts.empty(),j.empty()):"geoPointValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in s?{arrayValue:{}}:"mapValue"in s?{mapValue:{}}:S();break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=to}0>tb({value:r,inclusive:i},{value:e,inclusive:t})&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];0>tb({value:r,inclusive:i},{value:e,inclusive:n.inclusive})&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}function tZ(e,t,n){let r=ta,i=!0;for(let n of tY(e,t)){let e=ta,t=!0;switch(n.op){case">=":case">":var s;e="nullValue"in(s=n.value)?{booleanValue:!1}:"booleanValue"in s?{doubleValue:NaN}:"integerValue"in s||"doubleValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in s?{stringValue:""}:"stringValue"in s?{bytesValue:""}:"bytesValue"in s?tm(ts.empty(),j.empty()):"referenceValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in s?{arrayValue:{}}:"arrayValue"in s?{mapValue:{}}:"mapValue"in s?ta:S(),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=ta}tE({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];tE({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class t0{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function t1(e){return new t0(e)}function t2(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function t5(e){return null!==e.collectionGroup}function t4(e){if(null===e.ce){let t;e.ce=[];let n=new Set;for(let t of e.explicitOrderBy)e.ce.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new e0(Q.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.ce.push(new tC(t,r))}),n.has(Q.keyField().canonicalString())||e.ce.push(new tC(Q.keyField(),r))}return e.ce}function t8(e){return e.le||(e.le=function(e,t){if("F"===e.limitType)return tj(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new tC(e.field,t)});let n=e.endAt?new tx(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new tx(e.startAt.position,e.startAt.inclusive):null;return tj(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,t4(e))),e.le}function t3(e,t){let n=e.filters.concat([t]);return new t0(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function t6(e,t,n){return new t0(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function t9(e,t){return tH(t8(e),t8(t))&&e.limitType===t.limitType}function t7(e){return`${tW(t8(e))}|lt:${e.limitType}`}function ne(e){var t;let n;return`Query(target=${n=(t=t8(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof tk?`${t.field.canonicalString()} ${t.op} ${tf(t.value)}`:t instanceof tR?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),eI(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>tf(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>tf(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function nt(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):j.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of t4(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=tD(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,t4(e),t))&&(!e.endAt||!!function(e,t,n){let r=tD(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,t4(e),t))}function nn(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function nr(e){return(t,n)=>{let r=!1;for(let i of t4(e)){let e=function(e,t,n){let r=e.field.isKeyField()?j.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?th(r,i):S()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return S()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
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
 */class ni{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){eH(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return eJ(this.inner)}size(){return this.innerSize}}/**
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
 */let ns=new eY(j.comparator),na=new eY(j.comparator);function no(...e){let t=na;for(let n of e)t=t.insert(n.key,n);return t}function nl(e){let t=na;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function nu(){return new ni(e=>e.toString(),(e,t)=>e.isEqual(t))}let nc=new eY(j.comparator),nh=new e0(j.comparator);function nd(...e){let t=nh;for(let n of e)t=t.add(n);return t}let nf=new e0(q);/**
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
 */function nm(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:e_(t)?"-0":t}}function ng(e){return{integerValue:""+e}}function np(e,t){return eb(t)?ng(t):nm(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ny{constructor(){this._=void 0}}function nw(e,t){return e instanceof nT?tg(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class nv extends ny{}class nI extends ny{constructor(e){super(),this.elements=e}}function n_(e,t){let n=nx(t);for(let t of e.elements)n.some(e=>tu(e,t))||n.push(t);return{arrayValue:{values:n}}}class nb extends ny{constructor(e){super(),this.elements=e}}function nE(e,t){let n=nx(t);for(let t of e.elements)n=n.filter(e=>!tu(e,t));return{arrayValue:{values:n}}}class nT extends ny{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function nS(e){return e7(e.integerValue||e.doubleValue)}function nx(e){return tp(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class nD{constructor(e,t){this.field=e,this.transform=t}}class nN{constructor(e,t){this.version=e,this.transformResults=t}}class nC{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nC}static exists(e){return new nC(void 0,e)}static updateTime(e){return new nC(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nA(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class nk{}function nR(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new nU(e.key,nC.none()):new nL(e.key,e.data,nC.none());{let n=e.data,r=tT.empty(),i=new e0(Q.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new nM(e.key,r,new e5(i.toArray()),nC.none())}}function nF(e,t,n,r){return e instanceof nL?function(e,t,n,r){if(!nA(e.precondition,t))return n;let i=e.value.clone(),s=nq(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof nM?function(e,t,n,r){if(!nA(e.precondition,t))return n;let i=nq(e.fieldTransforms,r,t),s=t.data;return(s.setAll(nO(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):nA(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function nV(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&U(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof nI&&r instanceof nI||n instanceof nb&&r instanceof nb?U(n.elements,r.elements,tu):n instanceof nT&&r instanceof nT?tu(n.Pe,r.Pe):n instanceof nv&&r instanceof nv)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class nL extends nk{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class nM extends nk{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nO(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function nP(e,t,n){var r;let i=new Map;e.length===n.length||S();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof nI?n_(o,l):o instanceof nb?nE(o,l):r))}return i}function nq(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof nv?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&tt(t)&&(t=tn(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof nI?n_(e,s):e instanceof nb?nE(e,s):function(e,t){let n=nw(e,t),r=nS(n)+nS(e.Pe);return tg(n)&&tg(e.Pe)?ng(r):nm(e.serializer,r)}(e,s))}return r}class nU extends nk{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nB extends nk{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nz{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof nL?function(e,t,n){let r=e.value.clone(),i=nP(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof nM?function(e,t,n){if(!nA(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=nP(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(nO(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=nF(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=nF(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=nu();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=nR(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(z.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),nd())}isEqual(e){return this.batchId===e.batchId&&U(this.mutations,e.mutations,(e,t)=>nV(e,t))&&U(this.baseMutations,e.baseMutations,(e,t)=>nV(e,t))}}class n${constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||S();let r=nc,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new n$(e,t,n,r)}}/**
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
 */class nG{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class nK{constructor(e,t){this.count=e,this.unchangedNames=t}}function nQ(e){switch(e){default:return S();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function nj(e){if(void 0===e)return b("GRPC error has no .code"),D.UNKNOWN;switch(e){case r.OK:return D.OK;case r.CANCELLED:return D.CANCELLED;case r.UNKNOWN:return D.UNKNOWN;case r.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case r.INTERNAL:return D.INTERNAL;case r.UNAVAILABLE:return D.UNAVAILABLE;case r.UNAUTHENTICATED:return D.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case r.NOT_FOUND:return D.NOT_FOUND;case r.ALREADY_EXISTS:return D.ALREADY_EXISTS;case r.PERMISSION_DENIED:return D.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case r.ABORTED:return D.ABORTED;case r.OUT_OF_RANGE:return D.OUT_OF_RANGE;case r.UNIMPLEMENTED:return D.UNIMPLEMENTED;case r.DATA_LOSS:return D.DATA_LOSS;default:return S()}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function nW(){return new TextEncoder}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let nH=new h.z8([4294967295,4294967295],0);function nJ(e){let t=nW().encode(e),n=new h.V8;return n.update(t),new Uint8Array(n.digest())}function nY(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new h.z8([n,r],0),new h.z8([i,s],0)]}class nX{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new nZ(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new nZ(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new nZ(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=h.z8.fromNumber(this.Ie)}Ee(e,t,n){let r=e.add(t.multiply(h.z8.fromNumber(n)));return 1===r.compare(nH)&&(r=new h.z8([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;let[t,n]=nY(nJ(e));for(let e=0;e<this.hashCount;e++){let r=this.Ee(t,n,e);if(!this.de(r))return!1}return!0}static create(e,t,n){let r=new nX(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Ie)return;let[t,n]=nY(nJ(e));for(let e=0;e<this.hashCount;e++){let r=this.Ee(t,n,e);this.Ae(r)}}Ae(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class nZ extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class n0{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,n1.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new n0(z.min(),r,new eY(q),ns,nd())}}class n1{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new n1(n,t,nd(),nd(),nd())}}/**
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
 */class n2{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class n5{constructor(e,t){this.targetId=e,this.me=t}}class n4{constructor(e,t,n=e3.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class n8{constructor(){this.fe=0,this.ge=n9(),this.pe=e3.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=nd(),t=nd(),n=nd();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:S()}}),new n1(this.pe,this.ye,e,t,n)}ve(){this.we=!1,this.ge=n9()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,this.fe>=0||S()}Ne(){this.we=!0,this.ye=!0}}class n3{constructor(e){this.Le=e,this.Be=new Map,this.ke=ns,this.qe=n6(),this.Qe=new eY(q)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:S()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((e,n)=>{this.ze(n)&&t(n)})}He(e){let t=e.targetId,n=e.me.count,r=this.Je(t);if(r){let i=r.target;if(tJ(i)){if(0===n){let e=new j(i.path);this.Ue(t,e,tS.newNoDocument(e,z.min()))}else 1===n||S()}else{let r=this.Ye(t);if(r!==n){let n=this.Ze(e),i=n?this.Xe(n,e,r):1;0!==i&&(this.je(t),this.Qe=this.Qe.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Ze(e){let t,n;let r=e.me.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=te(i).toUint8Array()}catch(e){if(e instanceof e4)return E("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new nX(t,s,a)}catch(e){return E(e instanceof nZ?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Ie?null:n}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){let n=this.Le.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Le.tt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,n,null),r++)}),r}rt(e){let t=new Map;this.Be.forEach((n,r)=>{let i=this.Je(r);if(i){if(n.current&&tJ(i.target)){let t=new j(i.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,tS.newNoDocument(t,e))}n.be&&(t.set(r,n.Ce()),n.ve())}});let n=nd();this.qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.ke.forEach((t,n)=>n.setReadTime(e));let r=new n0(e,t,this.Qe,this.ke,n);return this.ke=ns,this.qe=n6(),this.Qe=new eY(q),r}$e(e,t){if(!this.ze(e))return;let n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;let r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new n8,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new e0(q),this.qe=this.qe.insert(e,t)),t}ze(e){let t=null!==this.Je(e);return t||_("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new n8),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function n6(){return new eY(j.comparator)}function n9(){return new eY(j.comparator)}let n7={asc:"ASCENDING",desc:"DESCENDING"},re={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rt={and:"AND",or:"OR"};class rn{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rr(e,t){return e.useProto3Json||eI(t)?t:{value:t}}function ri(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rs(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ra(e){return e||S(),z.fromTimestamp(function(e){let t=e9(e);return new B(t.seconds,t.nanos)}(e))}function ro(e,t){return rl(e,t).canonicalString()}function rl(e,t){let n=new G(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function ru(e){let t=G.fromString(e);return rS(t)||S(),t}function rc(e,t){return ro(e.databaseId,t.path)}function rh(e,t){let n=ru(t);if(n.get(1)!==e.databaseId.projectId)throw new N(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new N(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new j(rg(n))}function rd(e,t){return ro(e.databaseId,t)}function rf(e){let t=ru(e);return 4===t.length?G.emptyPath():rg(t)}function rm(e){return new G(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rg(e){return e.length>4&&"documents"===e.get(4)||S(),e.popFirst(5)}function rp(e,t,n){return{name:rc(e,t),fields:n.value.mapValue.fields}}function ry(e,t,n){let r=rh(e,t.name),i=ra(t.updateTime),s=t.createTime?ra(t.createTime):z.min(),a=new tT({mapValue:{fields:t.fields}}),o=tS.newFoundDocument(r,i,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function rw(e,t){var n;let r;if(t instanceof nL)r={update:rp(e,t.key,t.value)};else if(t instanceof nU)r={delete:rc(e,t.key)};else if(t instanceof nM)r={update:rp(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof nB))return S();r={verify:rc(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof nv)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof nI)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof nb)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof nT)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw S()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:ri(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:S()),r}function rv(e,t){var n;let r=t.currentDocument?void 0!==(n=t.currentDocument).updateTime?nC.updateTime(ra(n.updateTime)):void 0!==n.exists?nC.exists(n.exists):nC.none():nC.none(),i=t.updateTransforms?t.updateTransforms.map(t=>{let n;return n=null,"setToServerValue"in t?("REQUEST_TIME"===t.setToServerValue||S(),n=new nv):"appendMissingElements"in t?n=new nI(t.appendMissingElements.values||[]):"removeAllFromArray"in t?n=new nb(t.removeAllFromArray.values||[]):"increment"in t?n=new nT(e,t.increment):S(),new nD(Q.fromServerFormat(t.fieldPath),n)}):[];if(t.update){t.update.name;let n=rh(e,t.update.name),s=new tT({mapValue:{fields:t.update.fields}});return t.updateMask?new nM(n,s,new e5((t.updateMask.fieldPaths||[]).map(e=>Q.fromServerFormat(e))),r,i):new nL(n,s,r,i)}return t.delete?new nU(rh(e,t.delete),r):t.verify?new nB(rh(e,t.verify),r):S()}function rI(e,t){return{documents:[rd(e,t.path)]}}function r_(e,t){var n,r;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=rd(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof tk?function(e){if("=="===e.op){if(tw(e.value))return{unaryFilter:{field:rE(e.field),op:"IS_NAN"}};if(ty(e.value))return{unaryFilter:{field:rE(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(tw(e.value))return{unaryFilter:{field:rE(e.field),op:"IS_NOT_NAN"}};if(ty(e.value))return{unaryFilter:{field:rE(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rE(e.field),op:re[e.op],value:e.value}}}(t):t instanceof tR?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:rt[t.op],filters:n}}}(t):S()}(tR.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:rE(e.field),direction:n7[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=rr(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{_t:s,parent:i}}function rb(e){var t;let n,r=rf(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||S();let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){let t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=rT(e.unaryFilter.field);return tk.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=rT(e.unaryFilter.field);return tk.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=rT(e.unaryFilter.field);return tk.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=rT(e.unaryFilter.field);return tk.create(i,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(t):void 0!==t.fieldFilter?tk.create(rT(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?tR.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return S()}}(t.compositeFilter.op)):S()}(e);return t instanceof tR&&tL(t)?t.getFilters():[t]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new tC(rT(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=eI(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let c=null;i.startAt&&(c=function(e){let t=!!e.before;return new tx(e.values||[],t)}(i.startAt));let h=null;return i.endAt&&(h=function(e){let t=!e.before;return new tx(e.values||[],t)}(i.endAt)),new t0(r,a,l,o,u,"F",c,h)}function rE(e){return{fieldPath:e.canonicalString()}}function rT(e){return Q.fromServerFormat(e.fieldPath)}function rS(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
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
 */class rx{constructor(e,t,n,r,i=z.min(),s=z.min(),a=e3.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new rx(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rx(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rx(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rx(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class rD{constructor(e){this.ct=e}}function rN(e,t){let n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:rC(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument()){var i;r.document={name:rc(i=e.ct,t.key),fields:t.data.value.mapValue.fields,updateTime:ri(i,t.version.toTimestamp()),createTime:ri(i,t.createTime.toTimestamp())}}else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:rA(t.version)};else{if(!t.isUnknownDocument())return S();r.unknownDocument={path:n.path.toArray(),version:rA(t.version)}}return r}function rC(e){let t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function rA(e){let t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function rk(e){let t=new B(e.seconds,e.nanoseconds);return z.fromTimestamp(t)}function rR(e,t){let n=(t.baseMutations||[]).map(t=>rv(e.ct,t));for(let e=0;e<t.mutations.length-1;++e){let n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){let r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}let r=t.mutations.map(t=>rv(e.ct,t)),i=B.fromMillis(t.localWriteTimeMs);return new nz(t.batchId,i,n,r)}function rF(e){var t;let n=rk(e.readTime),r=void 0!==e.lastLimboFreeSnapshotVersion?rk(e.lastLimboFreeSnapshotVersion):z.min();return new rx(void 0!==e.query.documents?(1===(t=e.query).documents.length||S(),t8(t1(rf(t.documents[0])))):t8(rb(e.query)),e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,n,r,e3.fromBase64String(e.resumeToken))}function rV(e,t){let n;let r=rA(t.snapshotVersion),i=rA(t.lastLimboFreeSnapshotVersion);n=tJ(t.target)?rI(e.ct,t.target):r_(e.ct,t.target)._t;let s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:tW(t.target),readTime:r,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:n}}function rL(e){let t=rb({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?t6(t,t.limit,"L"):t}function rM(e,t){return new nG(t.largestBatchId,rv(e.ct,t.overlayMutation))}function rO(e,t){let n=t.path.lastSegment();return[e,eE(t.path.popLast()),n]}function rP(e,t,n,r){return{indexId:e,uid:t,sequenceNumber:n,readTime:rA(r.readTime),documentKey:eE(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class rq{getBundleMetadata(e,t){return rU(e).get(t).next(e=>{if(e)return{id:e.bundleId,createTime:rk(e.createTime),version:e.version}})}saveBundleMetadata(e,t){return rU(e).put({bundleId:t.id,createTime:rA(ra(t.createTime)),version:t.version})}getNamedQuery(e,t){return rB(e).get(t).next(e=>{if(e)return{name:e.name,query:rL(e.bundledQuery),readTime:rk(e.readTime)}})}saveNamedQuery(e,t){return rB(e).put({name:t.name,readTime:rA(ra(t.readTime)),bundledQuery:t.bundledQuery})}}function rU(e){return ej(e,"bundles")}function rB(e){return ej(e,"namedQueries")}/**
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
 */class rz{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){return new rz(e,t.uid||"")}getOverlay(e,t){return r$(e).get(rO(this.userId,t)).next(e=>e?rM(this.serializer,e):null)}getOverlays(e,t){let n=nu();return ea.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){let r=[];return n.forEach((n,i)=>{let s=new nG(t,i);r.push(this.ht(e,s))}),ea.waitFor(r)}removeOverlaysForBatchId(e,t,n){let r=new Set;t.forEach(e=>r.add(eE(e.getCollectionPath())));let i=[];return r.forEach(t=>{let r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(r$(e).j("collectionPathOverlayIndex",r))}),ea.waitFor(i)}getOverlaysForCollection(e,t,n){let r=nu(),i=eE(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return r$(e).U("collectionPathOverlayIndex",s).next(e=>{for(let t of e){let e=rM(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){let i;let s=nu(),a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return r$(e).J({index:"collectionGroupOverlayIndex",range:a},(e,t,n)=>{let a=rM(this.serializer,t);s.size()<r||a.largestBatchId===i?(s.set(a.getKey(),a),i=a.largestBatchId):n.done()}).next(()=>s)}ht(e,t){return r$(e).put(function(e,t,n){let[r,i,s]=rO(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:rw(e.ct,n.mutation)}}(this.serializer,this.userId,t))}}function r$(e){return ej(e,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class rG{Pt(e){return ej(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(e=>{let t=null==e?void 0:e.value;return t?e3.fromUint8Array(t):e3.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class rK{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(e7(e.integerValue));else if("doubleValue"in e){let n=e7(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),e_(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),"string"==typeof n&&(n=e9(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(te(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?t_(e)?this.dt(t,Number.MAX_SAFE_INTEGER):(this.wt(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.St(e.arrayValue,t),this.ft(t)):S()}Vt(e,t){this.dt(t,25),this.bt(e,t)}bt(e,t){t.Rt(e)}wt(e,t){let n=e.fields||{};for(let e of(this.dt(t,55),Object.keys(n)))this.Vt(e,t),this.Tt(n[e],t)}St(e,t){let n=e.values||[];for(let e of(this.dt(t,50),n))this.Tt(e,t)}yt(e,t){this.dt(t,37),j.fromName(e).path.forEach(e=>{this.dt(t,60),this.bt(e,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}function rQ(e){return Math.ceil((64-function(e){let t=0;for(let n=0;n<8;++n){let r=function(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}(255&e[n]);if(t+=r,8!==r)break}return t}(e))/8)}rK.Dt=new rK;class rj{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.vt(n.value),n=t.next();this.Ft()}Mt(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.xt(n.value),n=t.next();this.Ot()}Nt(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.vt(e);else if(e<2048)this.vt(960|e>>>6),this.vt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.vt(480|e>>>12),this.vt(128|63&e>>>6),this.vt(128|63&e);else{let e=t.codePointAt(0);this.vt(240|e>>>18),this.vt(128|63&e>>>12),this.vt(128|63&e>>>6),this.vt(128|63&e)}}this.Ft()}Lt(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.xt(e);else if(e<2048)this.xt(960|e>>>6),this.xt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.xt(480|e>>>12),this.xt(128|63&e>>>6),this.xt(128|63&e);else{let e=t.codePointAt(0);this.xt(240|e>>>18),this.xt(128|63&e>>>12),this.xt(128|63&e>>>6),this.xt(128|63&e)}}this.Ot()}Bt(e){let t=this.kt(e),n=rQ(t);this.qt(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}Qt(e){let t=this.kt(e),n=rQ(t);this.qt(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}Kt(){this.$t(255),this.$t(255)}Ut(){this.Wt(255),this.Wt(255)}reset(){this.position=0}seed(e){this.qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Gt(){return this.buffer.slice(0,this.position)}kt(e){let t=function(e){let t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}vt(e){let t=255&e;0===t?(this.$t(0),this.$t(255)):255===t?(this.$t(255),this.$t(0)):this.$t(t)}xt(e){let t=255&e;0===t?(this.Wt(0),this.Wt(255)):255===t?(this.Wt(255),this.Wt(0)):this.Wt(e)}Ft(){this.$t(0),this.$t(1)}Ot(){this.Wt(0),this.Wt(1)}$t(e){this.qt(1),this.buffer[this.position++]=e}Wt(e){this.qt(1),this.buffer[this.position++]=~e}qt(e){let t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);let r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class rW{constructor(e){this.zt=e}gt(e){this.zt.Ct(e)}Rt(e){this.zt.Nt(e)}At(e){this.zt.Bt(e)}Et(){this.zt.Kt()}}class rH{constructor(e){this.zt=e}gt(e){this.zt.Mt(e)}Rt(e){this.zt.Lt(e)}At(e){this.zt.Qt(e)}Et(){this.zt.Ut()}}class rJ{constructor(){this.zt=new rj,this.jt=new rW(this.zt),this.Ht=new rH(this.zt)}seed(e){this.zt.seed(e)}Jt(e){return 0===e?this.jt:this.Ht}Gt(){return this.zt.Gt()}reset(){this.zt.reset()}}/**
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
 */class rY{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Yt(){let e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new rY(this.indexId,this.documentKey,this.arrayValue,n)}}function rX(e,t){let n=e.indexId-t.indexId;return 0!==n?n:0!==(n=rZ(e.arrayValue,t.arrayValue))?n:0!==(n=rZ(e.directionalValue,t.directionalValue))?n:j.comparator(e.documentKey,t.documentKey)}function rZ(e,t){for(let n=0;n<e.length&&n<t.length;++n){let r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}/**
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
 */class r0{constructor(e){for(let t of(this.Zt=new e0((e,t)=>Q.comparator(e.field,t.field)),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Xt=e.orderBy,this.en=[],e.filters))t.isInequality()?this.Zt=this.Zt.add(t):this.en.push(t)}get tn(){return this.Zt.size>1}nn(e){if(e.collectionGroup===this.collectionId||S(),this.tn)return!1;let t=H(e);if(void 0!==t&&!this.rn(t))return!1;let n=J(e),r=new Set,i=0,s=0;for(;i<n.length&&this.rn(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Zt.size>0){let e=this.Zt.getIterator().getNext();if(!r.has(e.field.canonicalString())){let t=n[i];if(!this.sn(e,t)||!this.on(this.Xt[s++],t))return!1}++i}for(;i<n.length;++i){let e=n[i];if(s>=this.Xt.length||!this.on(this.Xt[s++],e))return!1}return!0}_n(){if(this.tn)return null;let e=new e0(Q.comparator),t=[];for(let n of this.en)if(!n.field.isKeyField()){if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new Y(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Y(n.field,0))}}for(let n of this.Xt)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Y(n.field,"asc"===n.dir?0:1)));return new W(W.UNKNOWN_ID,this.collectionId,t,X.empty())}rn(e){for(let t of this.en)if(this.sn(t,e))return!0;return!1}sn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;let n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}on(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}function r1(e){return e instanceof tk}function r2(e){return e instanceof tR&&tL(e)}function r5(e){return r1(e)||r2(e)||function(e){if(e instanceof tR&&tV(e)){for(let t of e.getFilters())if(!r1(t)&&!r2(t))return!1;return!0}return!1}(e)}function r4(e,t){return e instanceof tk||e instanceof tR||S(),t instanceof tk||t instanceof tR||S(),r3(e instanceof tk?t instanceof tk?tR.create([e,t],"and"):r8(e,t):t instanceof tk?r8(t,e):function(e,t){if(e.filters.length>0&&t.filters.length>0||S(),tF(e)&&tF(t))return tO(e,t.getFilters());let n=tV(e)?e:t,r=tV(e)?t:e,i=n.filters.map(e=>r4(e,r));return tR.create(i,"or")}(e,t))}function r8(e,t){if(tF(t))return tO(t,e.getFilters());{let n=t.filters.map(t=>r4(e,t));return tR.create(n,"or")}}function r3(e){if(e instanceof tk||e instanceof tR||S(),e instanceof tk)return e;let t=e.getFilters();if(1===t.length)return r3(t[0]);if(tM(e))return e;let n=t.map(e=>r3(e)),r=[];return n.forEach(t=>{t instanceof tk?r.push(t):t instanceof tR&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:tR.create(r,e.op)}/**
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
 */class r6{constructor(){this.an=new r9}addToCollectionParentIndex(e,t){return this.an.add(t),ea.resolve()}getCollectionParents(e,t){return ea.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return ea.resolve()}deleteFieldIndex(e,t){return ea.resolve()}deleteAllFieldIndexes(e){return ea.resolve()}createTargetIndexes(e,t){return ea.resolve()}getDocumentsMatchingTarget(e,t){return ea.resolve(null)}getIndexType(e,t){return ea.resolve(0)}getFieldIndexes(e,t){return ea.resolve([])}getNextCollectionGroupToUpdate(e){return ea.resolve(null)}getMinOffset(e,t){return ea.resolve(et.min())}getMinOffsetFromCollectionGroup(e,t){return ea.resolve(et.min())}updateCollectionGroup(e,t,n){return ea.resolve()}updateIndexEntries(e,t){return ea.resolve()}}class r9{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new e0(G.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new e0(G.comparator)).toArray()}}/**
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
 */let r7=new Uint8Array(0);class ie{constructor(e,t){this.databaseId=t,this.un=new r9,this.cn=new ni(e=>tW(e),(e,t)=>tH(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.un.has(t)){let n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.un.add(t)});let i={collectionId:n,parent:eE(r)};return it(e).put(i)}return ea.resolve()}getCollectionParents(e,t){let n=[],r=IDBKeyRange.bound([t,""],[t+"\0",""],!1,!0);return it(e).U(r).next(e=>{for(let r of e){if(r.collectionId!==t)break;n.push(eT(r.parent))}return n})}addFieldIndex(e,t){let n=ii(e),r={indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};delete r.indexId;let i=n.add(r);if(t.indexState){let n=is(e);return i.next(e=>{n.put(rP(e,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){let n=ii(e),r=is(e),i=ir(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){let t=ii(e),n=ir(e),r=is(e);return t.j().next(()=>n.j()).next(()=>r.j())}createTargetIndexes(e,t){return ea.forEach(this.ln(t),t=>this.getIndexType(e,t).next(n=>{if(0===n||1===n){let n=new r0(t)._n();if(null!=n)return this.addFieldIndex(e,n)}}))}getDocumentsMatchingTarget(e,t){let n=ir(e),r=!0,i=new Map;return ea.forEach(this.ln(t),t=>this.hn(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=nd(),r=[];return ea.forEach(i,(i,s)=>{_("IndexedDbIndexManager",`Using index id=${i.indexId}|cg=${i.collectionGroup}|f=${i.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")} to execute ${tW(t)}`);let a=function(e,t){let n=H(t);if(void 0===n)return null;for(let t of tY(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),o=function(e,t){let n=new Map;for(let r of J(t))for(let t of tY(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),l=function(e,t){let n=[],r=!0;for(let i of J(t)){let t=0===i.kind?tX(e,i.fieldPath,e.startAt):tZ(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new tx(n,r)}(s,i),u=function(e,t){let n=[],r=!0;for(let i of J(t)){let t=0===i.kind?tZ(e,i.fieldPath,e.endAt):tX(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new tx(n,r)}(s,i),c=this.Pn(i,s,l),h=this.Pn(i,s,u),d=this.In(i,s,o),f=this.Tn(i.indexId,a,c,l.inclusive,h,u.inclusive,d);return ea.forEach(f,i=>n.G(i,t.limit).next(t=>{t.forEach(t=>{let n=j.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return ea.resolve(null)})}ln(e){let t=this.cn.get(e);return t||(t=0===e.filters.length?[e]:(function(e){if(0===e.getFilters().length)return[];let t=function e(t){if(t instanceof tk||t instanceof tR||S(),t instanceof tk)return t;if(1===t.filters.length)return e(t.filters[0]);let n=t.filters.map(t=>e(t)),r=tR.create(n,t.op);return r5(r=r3(r))?r:(r instanceof tR||S(),tF(r)||S(),r.filters.length>1||S(),r.filters.reduce((e,t)=>r4(e,t)))}(/**
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
 */function e(t){var n,r;if(t instanceof tk||t instanceof tR||S(),t instanceof tk){if(t instanceof t$){let e=(null===(r=null===(n=t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>tk.create(t.field,"==",e)))||[];return tR.create(e,"or")}return t}let i=t.filters.map(t=>e(t));return tR.create(i,t.op)}(e));return r5(t)||S(),r1(t)||r2(t)?[t]:t.getFilters()})(tR.create(e.filters,"and")).map(t=>tj(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.cn.set(e,t)),t}Tn(e,t,n,r,i,s,a){let o=(null!=t?t.length:1)*Math.max(n.length,i.length),l=o/(null!=t?t.length:1),u=[];for(let c=0;c<o;++c){let o=t?this.En(t[c/l]):r7,h=this.dn(e,o,n[c%l],r),d=this.An(e,o,i[c%l],s),f=a.map(t=>this.dn(e,o,t,!0));u.push(...this.createRange(h,d,f))}return u}dn(e,t,n,r){let i=new rY(e,j.empty(),t,n);return r?i:i.Yt()}An(e,t,n,r){let i=new rY(e,j.empty(),t,n);return r?i.Yt():i}hn(e,t){let n=new r0(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(let r of e)n.nn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2,r=this.ln(t);return ea.forEach(r,t=>this.hn(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new e0(Q.comparator),n=!1;for(let r of e.filters)for(let e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(let n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>null!==t.limit&&r.length>1&&2===n?1:n)}Rn(e,t){let n=new rJ;for(let r of J(e)){let e=t.data.field(r.fieldPath);if(null==e)return null;let i=n.Jt(r.kind);rK.Dt.It(e,i)}return n.Gt()}En(e){let t=new rJ;return rK.Dt.It(e,t.Jt(0)),t.Gt()}Vn(e,t){let n=new rJ;return rK.Dt.It(tm(this.databaseId,t),n.Jt(function(e){let t=J(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Gt()}In(e,t,n){if(null===n)return[];let r=[];r.push(new rJ);let i=0;for(let s of J(e)){let e=n[i++];for(let n of r)if(this.mn(t,s.fieldPath)&&tp(e))r=this.fn(r,s,e);else{let t=n.Jt(s.kind);rK.Dt.It(e,t)}}return this.gn(r)}Pn(e,t,n){return this.In(e,t,n.position)}gn(e){let t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Gt();return t}fn(e,t,n){let r=[...e],i=[];for(let e of n.arrayValue.values||[])for(let n of r){let r=new rJ;r.seed(n.Gt()),rK.Dt.It(e,r.Jt(t.kind)),i.push(r)}return i}mn(e,t){return!!e.filters.find(e=>e instanceof tk&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){let n=ii(e),r=is(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(e=>{let t=[];return ea.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){let n=t?new X(t.sequenceNumber,new et(rk(t.readTime),new j(eT(t.documentKey)),t.largestBatchId)):X.empty(),r=e.fields.map(([e,t])=>new Y(Q.fromServerFormat(e),t));return new W(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{let n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:q(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){let r=ii(e),i=is(e);return this.pn(e).next(e=>r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>ea.forEach(t,t=>i.put(rP(t.indexId,this.uid,e,n)))))}updateIndexEntries(e,t){let n=new Map;return ea.forEach(t,(t,r)=>{let i=n.get(t.collectionGroup);return(i?ea.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),ea.forEach(i,n=>this.yn(e,t,n).next(t=>{let i=this.wn(r,n);return t.isEqual(i)?ea.resolve():this.Sn(e,r,n,t,i)}))))})}bn(e,t,n,r){return ir(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.Vn(n,t.key),documentKey:t.key.path.toArray()})}Dn(e,t,n,r){return ir(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.Vn(n,t.key),t.key.path.toArray()])}yn(e,t,n){let r=ir(e),i=new e0(rX);return r.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.Vn(n,t)])},(e,r)=>{i=i.add(new rY(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}wn(e,t){let n=new e0(rX),r=this.Rn(t,e);if(null==r)return n;let i=H(t);if(null!=i){let s=e.data.field(i.fieldPath);if(tp(s))for(let i of s.arrayValue.values||[])n=n.add(new rY(t.indexId,e.key,this.En(i),r))}else n=n.add(new rY(t.indexId,e.key,r7,r));return n}Sn(e,t,n,r,i){_("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);let s=[];return function(e,t,n,r,i){let s=e.getIterator(),a=t.getIterator(),o=e2(s),l=e2(a);for(;o||l;){let e=!1,t=!1;if(o&&l){let r=n(o,l);r<0?t=!0:r>0&&(e=!0)}else null!=o?t=!0:e=!0;e?(r(l),l=e2(a)):t?(i(o),o=e2(s)):(o=e2(s),l=e2(a))}}(r,i,rX,r=>{s.push(this.bn(e,t,n,r))},r=>{s.push(this.Dn(e,t,n,r))}),ea.waitFor(s)}pn(e){let t=1;return is(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>rX(e,t)).filter((e,t,n)=>!t||0!==rX(e,n[t-1]));let r=[];for(let i of(r.push(e),n)){let n=rX(i,e),s=rX(i,t);if(0===n)r[0]=e.Yt();else if(n>0&&s<0)r.push(i),r.push(i.Yt());else if(s>0)break}r.push(t);let i=[];for(let e=0;e<r.length;e+=2){if(this.Cn(r[e],r[e+1]))return[];let t=[r[e].indexId,this.uid,r[e].arrayValue,r[e].directionalValue,r7,[]],n=[r[e+1].indexId,this.uid,r[e+1].arrayValue,r[e+1].directionalValue,r7,[]];i.push(IDBKeyRange.bound(t,n))}return i}Cn(e,t){return rX(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ia)}getMinOffset(e,t){return ea.mapArray(this.ln(t),t=>this.hn(e,t).next(e=>e||S())).next(ia)}}function it(e){return ej(e,"collectionParents")}function ir(e){return ej(e,"indexEntries")}function ii(e){return ej(e,"indexConfiguration")}function is(e){return ej(e,"indexState")}function ia(e){0!==e.length||S();let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){let i=e[r].indexState.offset;0>en(i,t)&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new et(t.readTime,t.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */let io={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class il{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new il(e,il.DEFAULT_COLLECTION_PERCENTILE,il.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function iu(e,t,n){let r=e.store("mutations"),i=e.store("documentMutations"),s=[],a=IDBKeyRange.only(n.batchId),o=0,l=r.J({range:a},(e,t,n)=>(o++,n.delete()));s.push(l.next(()=>{1===o||S()}));let u=[];for(let e of n.mutations){var c,h;let r=(c=e.key.path,h=n.batchId,[t,eE(c),h]);s.push(i.delete(r)),u.push(e.key)}return ea.waitFor(s).next(()=>u)}function ic(e){let t;if(!e)return 0;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw S();t=e.noDocument}return JSON.stringify(t).length}/**
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
 */il.DEFAULT_COLLECTION_PERCENTILE=10,il.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,il.DEFAULT=new il(41943040,il.DEFAULT_COLLECTION_PERCENTILE,il.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),il.DISABLED=new il(-1,0,0);class ih{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.vn={}}static lt(e,t,n,r){return""!==e.uid||S(),new ih(e.isAuthenticated()?e.uid:"",t,n,r)}checkEmpty(e){let t=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return im(e).J({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){let i=ig(e),s=im(e);return s.add({}).next(a=>{"number"==typeof a||S();let o=new nz(a,t,n,r),l=function(e,t,n){let r=n.baseMutations.map(t=>rw(e.ct,t)),i=n.mutations.map(t=>rw(e.ct,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,o),u=[],c=new e0((e,t)=>q(e.canonicalString(),t.canonicalString()));for(let e of r){let t=[this.userId,eE(e.key.path),a];c=c.add(e.key.path.popLast()),u.push(s.put(l)),u.push(i.put(t,ex))}return c.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.vn[a]=o.keys()}),ea.waitFor(u).next(()=>o)})}lookupMutationBatch(e,t){return im(e).get(t).next(e=>e?(e.userId===this.userId||S(),rR(this.serializer,e)):null)}Fn(e,t){return this.vn[t]?ea.resolve(this.vn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){let n=e.keys();return this.vn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){let n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]),i=null;return im(e).J({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(t.batchId>=n||S(),i=rR(this.serializer,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=-1;return im(e).J({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return im(e).U("userMutationsIndex",t).next(e=>e.map(e=>rR(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){let n=[this.userId,eE(t.path)],r=IDBKeyRange.lowerBound(n),i=[];return ig(e).J({range:r},(n,r,s)=>{let[a,o,l]=n,u=eT(o);if(a===this.userId&&t.path.isEqual(u))return im(e).get(l).next(e=>{if(!e)throw S();e.userId===this.userId||S(),i.push(rR(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new e0(q),r=[];return t.forEach(t=>{let i=[this.userId,eE(t.path)],s=IDBKeyRange.lowerBound(i),a=ig(e).J({range:s},(e,r,i)=>{let[s,a,o]=e,l=eT(a);s===this.userId&&t.path.isEqual(l)?n=n.add(o):i.done()});r.push(a)}),ea.waitFor(r).next(()=>this.Mn(e,n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=[this.userId,eE(n)],s=IDBKeyRange.lowerBound(i),a=new e0(q);return ig(e).J({range:s},(e,t,i)=>{let[s,o,l]=e,u=eT(o);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(a=a.add(l)):i.done()}).next(()=>this.Mn(e,a))}Mn(e,t){let n=[],r=[];return t.forEach(t=>{r.push(im(e).get(t).next(e=>{if(null===e)throw S();e.userId===this.userId||S(),n.push(rR(this.serializer,e))}))}),ea.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return iu(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.xn(t.batchId)}),ea.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}xn(e){delete this.vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return ea.resolve();let n=IDBKeyRange.lowerBound([this.userId]),r=[];return ig(e).J({range:n},(e,t,n)=>{if(e[0]===this.userId){let t=eT(e[1]);r.push(t)}else n.done()}).next(()=>{0===r.length||S()})})}containsKey(e,t){return id(e,this.userId,t)}On(e){return ip(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function id(e,t,n){let r=[t,eE(n.path)],i=r[1],s=IDBKeyRange.lowerBound(r),a=!1;return ig(e).J({range:s,H:!0},(e,n,r)=>{let[s,o,l]=e;s===t&&o===i&&(a=!0),r.done()}).next(()=>a)}function im(e){return ej(e,"mutations")}function ig(e){return ej(e,"documentMutations")}function ip(e){return ej(e,"mutationQueues")}/**
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
 */class iy{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new iy(0)}static Bn(){return new iy(-1)}}/**
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
 */class iw{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.kn(e).next(t=>{let n=new iy(t.highestTargetId);return t.highestTargetId=n.next(),this.qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.kn(e).next(e=>z.fromTimestamp(new B(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.kn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.kn(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.qn(e,r)))}addTargetData(e,t){return this.Qn(e,t).next(()=>this.kn(e).next(n=>(n.targetCount+=1,this.Kn(t,n),this.qn(e,n))))}updateTargetData(e,t){return this.Qn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>iv(e).delete(t.targetId)).next(()=>this.kn(e)).next(t=>(t.targetCount>0||S(),t.targetCount-=1,this.qn(e,t)))}removeTargets(e,t,n){let r=0,i=[];return iv(e).J((s,a)=>{let o=rF(a);o.sequenceNumber<=t&&null===n.get(o.targetId)&&(r++,i.push(this.removeTargetData(e,o)))}).next(()=>ea.waitFor(i)).next(()=>r)}forEachTarget(e,t){return iv(e).J((e,n)=>{t(rF(n))})}kn(e){return iI(e).get("targetGlobalKey").next(e=>(null!==e||S(),e))}qn(e,t){return iI(e).put("targetGlobalKey",t)}Qn(e,t){return iv(e).put(rV(this.serializer,t))}Kn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.kn(e).next(e=>e.targetCount)}getTargetData(e,t){let n=tW(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]),i=null;return iv(e).J({range:r,index:"queryTargetsIndex"},(e,n,r)=>{let s=rF(n);tH(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){let r=[],i=i_(e);return t.forEach(t=>{let s=eE(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),ea.waitFor(r)}removeMatchingKeys(e,t,n){let r=i_(e);return ea.forEach(t,t=>{let i=eE(t.path);return ea.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){let n=i_(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){let n=IDBKeyRange.bound([t],[t+1],!1,!0),r=i_(e),i=nd();return r.J({range:n,H:!0},(e,t,n)=>{let r=new j(eT(e[1]));i=i.add(r)}).next(()=>i)}containsKey(e,t){let n=eE(t.path),r=IDBKeyRange.bound([n],[n+"\0"],!1,!0),i=0;return i_(e).J({index:"documentTargetsIndex",H:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}ot(e,t){return iv(e).get(t).next(e=>e?rF(e):null)}}function iv(e){return ej(e,"targets")}function iI(e){return ej(e,"targetGlobal")}function i_(e){return ej(e,"targetDocuments")}/**
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
 */function ib([e,t],[n,r]){let i=q(e,n);return 0===i?q(t,r):i}class iE{constructor(e){this.$n=e,this.buffer=new e0(ib),this.Un=0}Wn(){return++this.Un}Gn(e){let t=[e,this.Wn()];if(this.buffer.size<this.$n)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>ib(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iT{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.zn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.jn(6e4)}stop(){this.zn&&(this.zn.cancel(),this.zn=null)}get started(){return null!==this.zn}jn(e){_("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.zn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.zn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ed(e)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await es(e)}await this.jn(3e5)})}}class iS{constructor(e,t){this.Hn=e,this.params=t}calculateTargetCount(e,t){return this.Hn.Jn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return ea.resolve(ev.oe);let n=new iE(t);return this.Hn.forEachTarget(e,e=>n.Gn(e.sequenceNumber)).next(()=>this.Hn.Yn(e,e=>n.Gn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Hn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Hn.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector","Garbage collection skipped; disabled"),ea.resolve(io)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),io):this.Zn(e,t))}getCacheSize(e){return this.Hn.getCacheSize(e)}Zn(e,t){let n,r,i,s,a,o,l;let c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),v()<=u.in.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-c}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(o-a)+"ms\n"+`	Removed ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-c}ms`),ea.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
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
 */class ix{constructor(e,t){this.db=e,this.garbageCollector=new iS(this,t)}Jn(e){let t=this.Xn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Xn(e){let t=0;return this.Yn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Yn(e,t){return this.er(e,(e,n)=>t(n))}addReference(e,t,n){return iD(e,n)}removeReference(e,t,n){return iD(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return iD(e,t)}tr(e,t){let n;return n=!1,ip(e).Y(r=>id(e,r,t).next(e=>(e&&(n=!0),ea.resolve(!e)))).next(()=>n)}removeOrphanedDocuments(e,t){let n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[],i=0;return this.er(e,(s,a)=>{if(a<=t){let t=this.tr(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,z.min()),i_(e).delete([0,eE(s.path)])))});r.push(t)}}).next(()=>ea.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return iD(e,t)}er(e,t){let n=i_(e),r,i=ev.oe;return n.J({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:a})=>{0===e?(i!==ev.oe&&t(new j(eT(r)),i),i=a,r=s):i=ev.oe}).next(()=>{i!==ev.oe&&t(new j(eT(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function iD(e,t){var n;return i_(e).put((n=e.currentSequenceNumber,{targetId:0,path:eE(t.path),sequenceNumber:n}))}/**
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
 */class iN{constructor(){this.changes=new ni(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tS.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?ea.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iC{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return iR(e).put(n)}removeEntry(e,t,n){return iR(e).delete(function(e,t){let n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],rC(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.nr(e,n)))}getEntry(e,t){let n=tS.newInvalidDocument(t);return iR(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(iF(t))},(e,r)=>{n=this.rr(t,r)}).next(()=>n)}ir(e,t){let n={size:0,document:tS.newInvalidDocument(t)};return iR(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(iF(t))},(e,r)=>{n={document:this.rr(t,r),size:ic(r)}}).next(()=>n)}getEntries(e,t){let n=ns;return this.sr(e,t,(e,t)=>{let r=this.rr(e,t);n=n.insert(e,r)}).next(()=>n)}_r(e,t){let n=ns,r=new eY(j.comparator);return this.sr(e,t,(e,t)=>{let i=this.rr(e,t);n=n.insert(e,i),r=r.insert(e,ic(t))}).next(()=>({documents:n,ar:r}))}sr(e,t,n){if(t.isEmpty())return ea.resolve();let r=new e0(iL);t.forEach(e=>r=r.add(e));let i=IDBKeyRange.bound(iF(r.first()),iF(r.last())),s=r.getIterator(),a=s.getNext();return iR(e).J({index:"documentKeyIndex",range:i},(e,t,r)=>{let i=j.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;a&&0>iL(a,i);)n(a,null),a=s.getNext();a&&a.isEqual(i)&&(n(a,t),a=s.hasNext()?s.getNext():null),a?r.$(iF(a)):r.done()}).next(()=>{for(;a;)n(a,null),a=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n,r,i){let s=t.path,a=[s.popLast().toArray(),s.lastSegment(),rC(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return iR(e).U(IDBKeyRange.bound(a,o,!0)).next(e=>{null==i||i.incrementDocumentReadCount(e.length);let n=ns;for(let i of e){let e=this.rr(j.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(nt(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let i=ns,s=iV(t,n),a=iV(t,et.max());return iR(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,a,!0)},(e,t,n)=>{let s=this.rr(j.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);(i=i.insert(s.key,s)).size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new iA(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return ik(e).get("remoteDocumentGlobalKey").next(e=>(e||S(),e))}nr(e,t){return ik(e).put("remoteDocumentGlobalKey",t)}rr(e,t){if(t){let e=function(e,t){let n;if(t.document)n=ry(e.ct,t.document,!!t.hasCommittedMutations);else if(t.noDocument){let e=j.fromSegments(t.noDocument.path),r=rk(t.noDocument.readTime);n=tS.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return S();{let e=j.fromSegments(t.unknownDocument.path),r=rk(t.unknownDocument.version);n=tS.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){let t=new B(e[0],e[1]);return z.fromTimestamp(t)}(t.readTime)),n}(this.serializer,t);if(!(e.isNoDocument()&&e.version.isEqual(z.min())))return e}return tS.newInvalidDocument(e)}}class iA extends iN{constructor(e,t){super(),this.ur=e,this.trackRemovals=t,this.cr=new ni(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){let t=[],n=0,r=new e0((e,t)=>q(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{let a=this.cr.get(i);if(t.push(this.ur.removeEntry(e,i,a.readTime)),s.isValidDocument()){let o=rN(this.ur.serializer,s);r=r.add(i.path.popLast());let l=ic(o);n+=l-a.size,t.push(this.ur.addEntry(e,i,o))}else if(n-=a.size,this.trackRemovals){let n=rN(this.ur.serializer,s.convertToNoDocument(z.min()));t.push(this.ur.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.ur.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.ur.updateMetadata(e,n)),ea.waitFor(t)}getFromCache(e,t){return this.ur.ir(e,t).next(e=>(this.cr.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.ur._r(e,t).next(({documents:e,ar:t})=>(t.forEach((t,n)=>{this.cr.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function ik(e){return ej(e,"remoteDocumentGlobal")}function iR(e){return ej(e,"remoteDocumentsV14")}function iF(e){let t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function iV(e,t){let n=t.documentKey.path.toArray();return[e,rC(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function iL(e,t){let n=e.path.toArray(),r=t.path.toArray(),i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=q(n[e],r[e]))return i;return(i=q(n.length,r.length))||(i=q(n[n.length-2],r[r.length-2]))||q(n[n.length-1],r[r.length-1])}/**
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
 *//**
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
 */class iM{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class iO{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&nF(n.mutation,e,e5.empty(),B.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,nd()).next(()=>t))}getLocalViewOfDocuments(e,t,n=nd()){let r=nu();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=no();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=nu();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,nd()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=ns,s=nu(),a=nu();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof nM)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),nF(a.mutation,t,a.mutation.getFieldMask(),B.now())):s.set(t.key,e5.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new iM(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=nu(),r=new eY((e,t)=>e-t),i=nd();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||e5.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||nd()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=nu();l.forEach(e=>{if(!i.has(e)){let r=nR(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return ea.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return j.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):t5(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):ea.resolve(nu()),a=-1,o=i;return s.next(t=>ea.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?ea.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,nd())).next(e=>({batchId:a,changes:nl(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(e=>{let t=no();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=no();return this.indexManager.getCollectionParents(e,i).next(a=>ea.forEach(a,a=>{let o=new t0(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,tS.newInvalidDocument(r)))});let n=no();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&nF(s.mutation,r,e5.empty(),B.now()),nt(t,r)&&(n=n.insert(e,r))}),n})}}/**
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
 */class iP{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return ea.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,{id:t.id,version:t.version,createTime:ra(t.createTime)}),ea.resolve()}getNamedQuery(e,t){return ea.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,{name:t.name,query:rL(t.bundledQuery),readTime:ra(t.readTime)}),ea.resolve()}}/**
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
 */class iq{constructor(){this.overlays=new eY(j.comparator),this.Pr=new Map}getOverlay(e,t){return ea.resolve(this.overlays.get(t))}getOverlays(e,t){let n=nu();return ea.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ht(e,t,r)}),ea.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.Pr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Pr.delete(n)),ea.resolve()}getOverlaysForCollection(e,t,n){let r=nu(),i=t.length+1,s=new j(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ea.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new eY((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=nu(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=nu(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return ea.resolve(a)}ht(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.Pr.get(r.largestBatchId).delete(n.key);this.Pr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new nG(t,n));let i=this.Pr.get(t);void 0===i&&(i=nd(),this.Pr.set(t,i)),this.Pr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class iU{constructor(){this.sessionToken=e3.EMPTY_BYTE_STRING}getSessionToken(e){return ea.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ea.resolve()}}/**
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
 */class iB{constructor(){this.Ir=new e0(iz.Tr),this.Er=new e0(iz.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){let n=new iz(e,t);this.Ir=this.Ir.add(n),this.Er=this.Er.add(n)}Ar(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Rr(new iz(e,t))}Vr(e,t){e.forEach(e=>this.removeReference(e,t))}mr(e){let t=new j(new G([])),n=new iz(t,e),r=new iz(t,e+1),i=[];return this.Er.forEachInRange([n,r],e=>{this.Rr(e),i.push(e.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){let t=new j(new G([])),n=new iz(t,e),r=new iz(t,e+1),i=nd();return this.Er.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new iz(e,0),n=this.Ir.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class iz{constructor(e,t){this.key=e,this.yr=t}static Tr(e,t){return j.comparator(e.key,t.key)||q(e.yr,t.yr)}static dr(e,t){return q(e.yr,t.yr)||j.comparator(e.key,t.key)}}/**
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
 */class i${constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new e0(iz.Tr)}checkEmpty(e){return ea.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new nz(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.Sr=this.Sr.add(new iz(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return ea.resolve(s)}lookupMutationBatch(e,t){return ea.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Dr(t+1),r=n<0?0:n;return ea.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ea.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(e){return ea.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new iz(t,0),r=new iz(t,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([n,r],e=>{let t=this.br(e.yr);i.push(t)}),ea.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new e0(q);return t.forEach(e=>{let t=new iz(e,0),r=new iz(e,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([t,r],e=>{n=n.add(e.yr)})}),ea.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;j.isDocumentKey(i)||(i=i.child(""));let s=new iz(new j(i),0),a=new e0(q);return this.Sr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.yr)),!0)},s),ea.resolve(this.Cr(a))}Cr(e){let t=[];return e.forEach(e=>{let n=this.br(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.vr(t.batchId,"removed")||S(),this.mutationQueue.shift();let n=this.Sr;return ea.forEach(t.mutations,r=>{let i=new iz(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Sr=n})}xn(e){}containsKey(e,t){let n=new iz(t,0),r=this.Sr.firstAfterOrEqual(n);return ea.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ea.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}br(e){let t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class iG{constructor(e){this.Fr=e,this.docs=new eY(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Fr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return ea.resolve(n?n.document.mutableCopy():tS.newInvalidDocument(t))}getEntries(e,t){let n=ns;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():tS.newInvalidDocument(e))}),ea.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=ns,s=t.path,a=new j(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=en(ee(a),n)||(r.has(a.key)||nt(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return ea.resolve(i)}getAllFromCollectionGroup(e,t,n,r){S()}Mr(e,t){return ea.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new iK(this)}getSize(e){return ea.resolve(this.size)}}class iK extends iN{constructor(e){super(),this.ur=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.ur.addEntry(e,r)):this.ur.removeEntry(n)}),ea.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
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
 */class iQ{constructor(e){this.persistence=e,this.Or=new ni(e=>tW(e),tH),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new iB,this.targetCount=0,this.Br=iy.Ln()}forEachTarget(e,t){return this.Or.forEach((e,n)=>t(n)),ea.resolve()}getLastRemoteSnapshotVersion(e){return ea.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ea.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),ea.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Nr&&(this.Nr=t),ea.resolve()}Qn(e){this.Or.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Br=new iy(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,ea.resolve()}updateTargetData(e,t){return this.Qn(t),ea.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Lr.mr(t.targetId),this.targetCount-=1,ea.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Or.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Or.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),ea.waitFor(i).next(()=>r)}getTargetCount(e){return ea.resolve(this.targetCount)}getTargetData(e,t){let n=this.Or.get(t)||null;return ea.resolve(n)}addMatchingKeys(e,t,n){return this.Lr.Ar(t,n),ea.resolve()}removeMatchingKeys(e,t,n){this.Lr.Vr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),ea.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Lr.mr(t),ea.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Lr.pr(t);return ea.resolve(n)}containsKey(e,t){return ea.resolve(this.Lr.containsKey(t))}}/**
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
 */class ij{constructor(e,t){this.kr={},this.overlays={},this.qr=new ev(0),this.Qr=!1,this.Qr=!0,this.Kr=new iU,this.referenceDelegate=e(this),this.$r=new iQ(this),this.indexManager=new r6,this.remoteDocumentCache=new iG(e=>this.referenceDelegate.Ur(e)),this.serializer=new rD(t),this.Wr=new iP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iq,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.kr[e.toKey()];return n||(n=new i$(t,this.referenceDelegate),this.kr[e.toKey()]=n),n}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,t,n){_("MemoryPersistence","Starting transaction:",e);let r=new iW(this.qr.next());return this.referenceDelegate.Gr(),n(r).next(e=>this.referenceDelegate.zr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}jr(e,t){return ea.or(Object.values(this.kr).map(n=>()=>n.containsKey(e,t)))}}class iW extends ei{constructor(e){super(),this.currentSequenceNumber=e}}class iH{constructor(e){this.persistence=e,this.Hr=new iB,this.Jr=null}static Yr(e){return new iH(e)}get Zr(){if(this.Jr)return this.Jr;throw S()}addReference(e,t,n){return this.Hr.addReference(n,t),this.Zr.delete(n.toString()),ea.resolve()}removeReference(e,t,n){return this.Hr.removeReference(n,t),this.Zr.add(n.toString()),ea.resolve()}markPotentiallyOrphaned(e,t){return this.Zr.add(t.toString()),ea.resolve()}removeTarget(e,t){this.Hr.mr(t.targetId).forEach(e=>this.Zr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Zr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Gr(){this.Jr=new Set}zr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ea.forEach(this.Zr,n=>{let r=j.fromPath(n);return this.Xr(e,r).next(e=>{e||t.removeEntry(r,z.min())})}).next(()=>(this.Jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Xr(e,t).next(e=>{e?this.Zr.delete(t.toString()):this.Zr.add(t.toString())})}Ur(e){return 0}Xr(e,t){return ea.or([()=>ea.resolve(this.Hr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.jr(e,t)])}}/**
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
 */class iJ{constructor(e){this.serializer=e}O(e,t,n,r){let i=new eo("createOrUpgrade",t);n<1&&r>=1&&(!function(e){e.createObjectStore("owner")}(e),e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",eS,{unique:!0}),e.createObjectStore("documentMutations"),iY(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=ea.resolve();return n<3&&r>=3&&(0!==n&&(e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal"),iY(e)),s=s.next(()=>(function(e){let t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:z.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)})(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>i.store("mutations").U().next(t=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",eS,{unique:!0});let n=i.store("mutations"),r=t.map(e=>n.put(e));return ea.waitFor(r)}))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.ti(i))),n<6&&r>=6&&(s=s.next(()=>((function(e){e.createObjectStore("remoteDocumentGlobal")})(e),this.ni(i)))),n<7&&r>=7&&(s=s.next(()=>this.ri(i))),n<8&&r>=8&&(s=s.next(()=>this.ii(e,i))),n<9&&r>=9&&(s=s.next(()=>{e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})),n<10&&r>=10&&(s=s.next(()=>this.si(i))),n<11&&r>=11&&(s=s.next(()=>{(function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){let t=e.createObjectStore("documentOverlays",{keyPath:eP});t.createIndex("collectionPathOverlayIndex",eq,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",eU,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>(function(e){let t=e.createObjectStore("remoteDocumentsV14",{keyPath:eD});t.createIndex("documentKeyIndex",eN),t.createIndex("collectionGroupIndex",eC)})(e)).next(()=>this.oi(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>this._i(e,i))),n<15&&r>=15&&(s=s.next(()=>{e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:eV}).createIndex("sequenceNumberIndex",eL,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:eM}).createIndex("documentKeyIndex",eO,{unique:!1})})),n<16&&r>=16&&(s=s.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&r>=17&&(s=s.next(()=>{!function(e){e.createObjectStore("globals",{keyPath:"name"})}(e)})),s}ni(e){let t=0;return e.store("remoteDocuments").J((e,n)=>{t+=ic(n)}).next(()=>{let n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ti(e){let t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(t=>ea.forEach(t,t=>{let r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",r).next(n=>ea.forEach(n,n=>{n.userId===t.userId||S();let r=rR(this.serializer,n);return iu(e,t.userId,r).next(()=>{})}))}))}ri(e){let t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{let r=[];return n.J((n,i)=>{let s=new G(n),a=[0,eE(s)];r.push(t.get(a).next(n=>n?ea.resolve():t.put({targetId:0,path:eE(s),sequenceNumber:e.highestListenSequenceNumber})))}).next(()=>ea.waitFor(r))})}ii(e,t){e.createObjectStore("collectionParents",{keyPath:eF});let n=t.store("collectionParents"),r=new r9,i=e=>{if(r.add(e)){let t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:eE(r)})}};return t.store("remoteDocuments").J({H:!0},(e,t)=>i(new G(e).popLast())).next(()=>t.store("documentMutations").J({H:!0},([e,t,n],r)=>i(eT(t).popLast())))}si(e){let t=e.store("targets");return t.J((e,n)=>{let r=rF(n),i=rV(this.serializer,r);return t.put(i)})}oi(e,t){let n=t.store("remoteDocuments"),r=[];return n.J((e,n)=>{let i=t.store("remoteDocumentsV14"),s=(n.document?new j(G.fromString(n.document.name).popFirst(5)):n.noDocument?j.fromSegments(n.noDocument.path):n.unknownDocument?j.fromSegments(n.unknownDocument.path):S()).path.toArray(),a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>ea.waitFor(r))}_i(e,t){let n=t.store("mutations"),r=new iC(this.serializer),i=new ij(iH.Yr,this.serializer.ct);return n.U().next(e=>{let n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:nd();rR(this.serializer,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),ea.forEach(n,(e,n)=>{let s=new p(n),a=rz.lt(this.serializer,s),o=i.getIndexManager(s);return new iO(r,ih.lt(s,this.serializer,o,i.referenceDelegate),a,o).recalculateAndSaveOverlaysForDocumentKeys(new eQ(t,ev.oe),e).next()})})}}function iY(e){e.createObjectStore("targetDocuments",{keyPath:ek}).createIndex("documentTargetsIndex",eR,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",eA,{unique:!0}),e.createObjectStore("targetGlobal")}let iX="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class iZ{constructor(e,t,n,r,i,s,a,o,l,u,c=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ai=i,this.window=s,this.document=a,this.ui=l,this.ci=u,this.li=c,this.qr=null,this.Qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.hi=null,this.inForeground=!1,this.Pi=null,this.Ii=null,this.Ti=Number.NEGATIVE_INFINITY,this.Ei=e=>Promise.resolve(),!iZ.D())throw new N(D.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ix(this,r),this.di=t+"main",this.serializer=new rD(o),this.Ai=new el(this.di,this.li,new iJ(this.serializer)),this.Kr=new rG,this.$r=new iw(this.referenceDelegate,this.serializer),this.remoteDocumentCache=new iC(this.serializer),this.Wr=new rq,this.window&&this.window.localStorage?this.Ri=this.window.localStorage:(this.Ri=null,!1===u&&b("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Vi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new N(D.FAILED_PRECONDITION,iX);return this.mi(),this.fi(),this.gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.$r.getHighestSequenceNumber(e))}).then(e=>{this.qr=new ev(e,this.ui)}).then(()=>{this.Qr=!0}).catch(e=>(this.Ai&&this.Ai.close(),Promise.reject(e)))}pi(e){return this.Ei=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ai.L(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ai.enqueueAndForget(async()=>{this.started&&await this.Vi()}))}Vi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>i1(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.yi(e).next(e=>{e||(this.isPrimary=!1,this.ai.enqueueRetryable(()=>this.Ei(!1)))})}).next(()=>this.wi(e)).next(t=>this.isPrimary&&!t?this.Si(e).next(()=>!1):!!t&&this.bi(e).next(()=>!0))).catch(e=>{if(ed(e))return _("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ai.enqueueRetryable(()=>this.Ei(e)),this.isPrimary=e})}yi(e){return i0(e).get("owner").next(e=>ea.resolve(this.Di(e)))}Ci(e){return i1(e).delete(this.clientId)}async vi(){if(this.isPrimary&&!this.Fi(this.Ti,18e5)){this.Ti=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{let t=ej(e,"clientMetadata");return t.U().next(e=>{let n=this.Mi(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return ea.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Ri)for(let t of e)this.Ri.removeItem(this.xi(t.clientId))}}gi(){this.Ii=this.ai.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Vi().then(()=>this.vi()).then(()=>this.gi()))}Di(e){return!!e&&e.ownerId===this.clientId}wi(e){return this.ci?ea.resolve(!0):i0(e).get("owner").next(t=>{if(null!==t&&this.Fi(t.leaseTimestampMs,5e3)&&!this.Oi(t.ownerId)){if(this.Di(t)&&this.networkEnabled)return!0;if(!this.Di(t)){if(!t.allowTabSynchronization)throw new N(D.FAILED_PRECONDITION,iX);return!1}}return!(!this.networkEnabled||!this.inForeground)||i1(e).U().next(e=>void 0===this.Mi(e,5e3).find(e=>{if(this.clientId!==e.clientId){let t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&_("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Qr=!1,this.Ni(),this.Ii&&(this.Ii.cancel(),this.Ii=null),this.Li(),this.Bi(),await this.Ai.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{let t=new eQ(e,ev.oe);return this.Si(t).next(()=>this.Ci(t))}),this.Ai.close(),this.ki()}Mi(e,t){return e.filter(e=>this.Fi(e.updateTimeMs,t)&&!this.Oi(e.clientId))}qi(){return this.runTransaction("getActiveClients","readonly",e=>i1(e).U().next(e=>this.Mi(e,18e5).map(e=>e.clientId)))}get started(){return this.Qr}getGlobalsCache(){return this.Kr}getMutationQueue(e,t){return ih.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ie(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return rz.lt(this.serializer,e)}getBundleCache(){return this.Wr}runTransaction(e,t,n){var r;let i;_("IndexedDbPersistence","Starting transaction:",e);let s=17===(r=this.li)?eK:16===r?eG:15===r?eG:14===r?e$:13===r?e$:12===r?ez:11===r?eB:void S();return this.Ai.runTransaction(e,"readonly"===t?"readonly":"readwrite",s,r=>(i=new eQ(r,this.qr?this.qr.next():ev.oe),"readwrite-primary"===t?this.yi(i).next(e=>!!e||this.wi(i)).next(t=>{if(!t)throw b(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ai.enqueueRetryable(()=>this.Ei(!1)),new N(D.FAILED_PRECONDITION,er);return n(i)}).next(e=>this.bi(i).next(()=>e)):this.Qi(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}Qi(e){return i0(e).get("owner").next(e=>{if(null!==e&&this.Fi(e.leaseTimestampMs,5e3)&&!this.Oi(e.ownerId)&&!this.Di(e)&&!(this.ci||this.allowTabSynchronization&&e.allowTabSynchronization))throw new N(D.FAILED_PRECONDITION,iX)})}bi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return i0(e).put("owner",t)}static D(){return el.D()}Si(e){let t=i0(e);return t.get("owner").next(e=>this.Di(e)?(_("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):ea.resolve())}Fi(e,t){let n=Date.now();return!(e<n-t)&&(!(e>n)||(b(`Detected an update time that is in the future: ${e} > ${n}`),!1))}mi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Pi=()=>{this.ai.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Vi()))},this.document.addEventListener("visibilitychange",this.Pi),this.inForeground="visible"===this.document.visibilityState)}Li(){this.Pi&&(this.document.removeEventListener("visibilitychange",this.Pi),this.Pi=null)}fi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.hi=()=>{this.Ni();let e=/(?:Version|Mobile)\/1[456]/;(0,c.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ai.enterRestrictedMode(!0),this.ai.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.hi))}Bi(){this.hi&&(this.window.removeEventListener("pagehide",this.hi),this.hi=null)}Oi(e){var t;try{let n=null!==(null===(t=this.Ri)||void 0===t?void 0:t.getItem(this.xi(e)));return _("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return b("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ni(){if(this.Ri)try{this.Ri.setItem(this.xi(this.clientId),String(Date.now()))}catch(e){b("Failed to set zombie client id.",e)}}ki(){if(this.Ri)try{this.Ri.removeItem(this.xi(this.clientId))}catch(e){}}xi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function i0(e){return ej(e,"owner")}function i1(e){return ej(e,"clientMetadata")}function i2(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"}/**
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
 */class i5{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ki=n,this.$i=r}static Ui(e,t){let n=nd(),r=nd();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new i5(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class i4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class i8{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=(0,c.G6)()?8:eu((0,c.z$)())>0?6:4}initialize(e,t){this.Hi=e,this.indexManager=t,this.Wi=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.Ji(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Yi(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new i4;return this.Zi(e,t,n).next(r=>{if(i.result=r,this.Gi)return this.Xi(e,t,n,r.size)})}).next(()=>i.result)}Xi(e,t,n,r){return n.documentReadCount<this.zi?(v()<=u.in.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",ne(t),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),ea.resolve()):(v()<=u.in.DEBUG&&_("QueryEngine","Query:",ne(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ji*r?(v()<=u.in.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",ne(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,t8(t))):ea.resolve())}Ji(e,t){if(t2(t))return ea.resolve(null);let n=t8(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=t8(t=t6(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=nd(...r);return this.Hi.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.es(t,r);return this.ts(t,s,i,n.readTime)?this.Ji(e,t6(t,null,"F")):this.ns(e,s,t,n)}))})))}Yi(e,t,n,r){return t2(t)||r.isEqual(z.min())?ea.resolve(null):this.Hi.getDocuments(e,n).next(i=>{let s=this.es(t,i);return this.ts(t,s,n,r)?ea.resolve(null):(v()<=u.in.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ne(t)),this.ns(e,s,t,Z(r,-1)).next(e=>e))})}es(e,t){let n=new e0(nr(e));return t.forEach((t,r)=>{nt(e,r)&&(n=n.add(r))}),n}ts(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Zi(e,t,n){return v()<=u.in.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",ne(t)),this.Hi.getDocumentsMatchingQuery(e,t,et.min(),n)}ns(e,t,n,r){return this.Hi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
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
 */class i3{constructor(e,t,n,r){this.persistence=e,this.rs=t,this.serializer=r,this.ss=new eY(q),this.os=new ni(e=>tW(e),tH),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(n)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iO(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ss))}}async function i6(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.cs(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=nd();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({ls:e,removedBatchIds:i,addedBatchIds:s}))})})}function i9(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.$r.getLastRemoteSnapshotVersion(t))}function i7(e,t,n){let r=nd(),i=nd();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=ns;return n.forEach((n,s)=>{let a=e.get(n);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(z.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):_("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),{hs:r,Ps:i}})}function se(e,t){return e.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return e.$r.getTargetData(n,t).next(i=>i?(r=i,ea.resolve(r)):e.$r.allocateTargetId(n).next(i=>(r=new rx(t,i,"TargetPurposeListen",n.currentSequenceNumber),e.$r.addTargetData(n,r).next(()=>r))))}).then(n=>{let r=e.ss.get(n.targetId);return(null===r||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.ss=e.ss.insert(n.targetId,n),e.os.set(t,n.targetId)),n})}async function st(e,t,n){let r=e.ss.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!ed(e))throw e;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.ss=e.ss.remove(t),e.os.delete(r.target)}function sn(e,t,n){let r=z.min(),i=nd();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.os.get(n);return void 0!==r?ea.resolve(e.ss.get(r)):e.$r.getTargetData(t,n)})(e,s,t8(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.$r.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.rs.getDocumentsMatchingQuery(s,t,n?r:z.min(),n?i:nd())).next(n=>(ss(e,nn(t),n),{documents:n,Is:i})))}function sr(e,t){let n=e.$r,r=e.ss.get(t);return r?Promise.resolve(r.target):e.persistence.runTransaction("Get target data","readonly",e=>n.ot(e,t).next(e=>e?e.target:null))}function si(e,t){let n=e._s.get(t)||z.min();return e.persistence.runTransaction("Get new document changes","readonly",r=>e.us.getAllFromCollectionGroup(r,t,Z(n,-1),Number.MAX_SAFE_INTEGER)).then(n=>(ss(e,t,n),n))}function ss(e,t,n){let r=e._s.get(t)||z.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e._s.set(t,r)}async function sa(e,t,n,r){let i=nd(),s=ns;for(let e of n){let n=t.Ts(e.metadata.name);e.document&&(i=i.add(n));let r=t.Es(e);r.setReadTime(t.ds(e.metadata.readTime)),s=s.insert(n,r)}let a=e.us.newChangeBuffer({trackRemovals:!0}),o=await se(e,t8(t1(G.fromString(`__bundle__/docs/${r}`))));return e.persistence.runTransaction("Apply bundle documents","readwrite",t=>i7(t,a,s).next(e=>(a.apply(t),e)).next(n=>e.$r.removeMatchingKeysForTargetId(t,o.targetId).next(()=>e.$r.addMatchingKeys(t,i,o.targetId)).next(()=>e.localDocuments.getLocalViewOfDocuments(t,n.hs,n.Ps)).next(()=>n.hs)))}async function so(e,t,n=nd()){let r=await se(e,t8(rL(t.bundledQuery)));return e.persistence.runTransaction("Save named query","readwrite",i=>{let s=ra(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return e.Wr.saveNamedQuery(i,t);let a=r.withResumeToken(e3.EMPTY_BYTE_STRING,s);return e.ss=e.ss.insert(a.targetId,a),e.$r.updateTargetData(i,a).next(()=>e.$r.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>e.$r.addMatchingKeys(i,n,r.targetId)).next(()=>e.Wr.saveNamedQuery(i,t))})}function sl(e,t){return`firestore_clients_${e}_${t}`}function su(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function sc(e,t){return`firestore_targets_${e}_${t}`}class sh{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static As(e,t,n){let r=JSON.parse(n),i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(i=new N(r.error.code,r.error.message)),s?new sh(e,t,r.state,i):(b("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Rs(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class sd{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static As(e,t){let n=JSON.parse(t),r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code)&&(r=new N(n.error.code,n.error.message)),i?new sd(e,n.state,r):(b("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Rs(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class sf{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static As(e,t){let n=JSON.parse(t),r="object"==typeof n&&n.activeTargetIds instanceof Array,i=nf;for(let e=0;r&&e<n.activeTargetIds.length;++e)r=eb(n.activeTargetIds[e]),i=i.add(n.activeTargetIds[e]);return r?new sf(e,i):(b("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class sm{constructor(e,t){this.clientId=e,this.onlineState=t}static As(e){let t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new sm(t.clientId,t.onlineState):(b("SharedClientState",`Failed to parse online state: ${e}`),null)}}class sg{constructor(){this.activeTargetIds=nf}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class sp{constructor(e,t,n,r,i){var s,a,o;this.window=e,this.ai=t,this.persistenceKey=n,this.gs=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ps=this.ys.bind(this),this.ws=new eY(q),this.started=!1,this.Ss=[];let l=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.bs=sl(this.persistenceKey,this.gs),this.Ds=(s=this.persistenceKey,`firestore_sequence_number_${s}`),this.ws=this.ws.insert(this.gs,new sg),this.Cs=RegExp(`^firestore_clients_${l}_([^_]*)$`),this.vs=RegExp(`^firestore_mutations_${l}_(\\d+)(?:_(.*))?$`),this.Fs=RegExp(`^firestore_targets_${l}_(\\d+)$`),this.Ms=(a=this.persistenceKey,`firestore_online_state_${a}`),this.xs=(o=this.persistenceKey,`firestore_bundle_loaded_v2_${o}`),this.window.addEventListener("storage",this.ps)}static D(e){return!(!e||!e.localStorage)}async start(){for(let e of(await this.syncEngine.qi())){if(e===this.gs)continue;let t=this.getItem(sl(this.persistenceKey,e));if(t){let n=sf.As(e,t);n&&(this.ws=this.ws.insert(n.clientId,n))}}this.Os();let e=this.storage.getItem(this.Ms);if(e){let t=this.Ns(e);t&&this.Ls(t)}for(let e of this.Ss)this.ys(e);this.Ss=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ds,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Bs(this.ws)}isActiveQueryTarget(e){let t=!1;return this.ws.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.ks(e,"pending")}updateMutationState(e,t,n){this.ks(e,t,n),this.qs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){let n=this.storage.getItem(sc(this.persistenceKey,e));if(n){let r=sd.As(e,n);r&&(t=r.state)}}return this.Qs.Vs(e),this.Os(),t}removeLocalQueryTarget(e){this.Qs.fs(e),this.Os()}isLocalQueryTarget(e){return this.Qs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(sc(this.persistenceKey,e))}updateQueryState(e,t,n){this.Ks(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.qs(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.$s(e)}notifyBundleLoaded(e){this.Us(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ps),this.removeItem(this.bs),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return _("SharedClientState","READ",e,t),t}setItem(e,t){_("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){_("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ys(e){if(e.storageArea===this.storage){if(_("SharedClientState","EVENT",e.key,e.newValue),e.key===this.bs)return void b("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ai.enqueueRetryable(async()=>{if(this.started){if(null!==e.key){if(this.Cs.test(e.key)){if(null==e.newValue){let t=this.Ws(e.key);return this.Gs(t,null)}{let t=this.zs(e.key,e.newValue);if(t)return this.Gs(t.clientId,t)}}else if(this.vs.test(e.key)){if(null!==e.newValue){let t=this.js(e.key,e.newValue);if(t)return this.Hs(t)}}else if(this.Fs.test(e.key)){if(null!==e.newValue){let t=this.Js(e.key,e.newValue);if(t)return this.Ys(t)}}else if(e.key===this.Ms){if(null!==e.newValue){let t=this.Ns(e.newValue);if(t)return this.Ls(t)}}else if(e.key===this.Ds){let t=function(e){let t=ev.oe;if(null!=e)try{let n=JSON.parse(e);"number"==typeof n||S(),t=n}catch(e){b("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(e.newValue);t!==ev.oe&&this.sequenceNumberHandler(t)}else if(e.key===this.xs){let t=this.Zs(e.newValue);await Promise.all(t.map(e=>this.syncEngine.Xs(e)))}}}else this.Ss.push(e)})}}get Qs(){return this.ws.get(this.gs)}Os(){this.setItem(this.bs,this.Qs.Rs())}ks(e,t,n){let r=new sh(this.currentUser,e,t,n),i=su(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Rs())}qs(e){let t=su(this.persistenceKey,this.currentUser,e);this.removeItem(t)}$s(e){let t={clientId:this.gs,onlineState:e};this.storage.setItem(this.Ms,JSON.stringify(t))}Ks(e,t,n){let r=sc(this.persistenceKey,e),i=new sd(e,t,n);this.setItem(r,i.Rs())}Us(e){let t=JSON.stringify(Array.from(e));this.setItem(this.xs,t)}Ws(e){let t=this.Cs.exec(e);return t?t[1]:null}zs(e,t){let n=this.Ws(e);return sf.As(n,t)}js(e,t){let n=this.vs.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return sh.As(new p(i),r,t)}Js(e,t){let n=Number(this.Fs.exec(e)[1]);return sd.As(n,t)}Ns(e){return sm.As(e)}Zs(e){return JSON.parse(e)}async Hs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.eo(e.batchId,e.state,e.error);_("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Ys(e){return this.syncEngine.no(e.targetId,e.state,e.error)}Gs(e,t){let n=t?this.ws.insert(e,t):this.ws.remove(e),r=this.Bs(this.ws),i=this.Bs(n),s=[],a=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||a.push(e)}),this.syncEngine.ro(s,a).then(()=>{this.ws=n})}Ls(e){this.ws.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Bs(e){let t=nf;return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class sy{constructor(){this.io=new sg,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,t,n){this.so[e]=t}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new sg,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sw{oo(e){}shutdown(){}}/**
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
 */class sv{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){for(let e of(_("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.lo))e(0)}co(){for(let e of(_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.lo))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let sI=null;function s_(){return null===sI?sI=268435456+Math.round(2147483648*Math.random()):sI++,"0x"+sI.toString(16)}/**
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
 */let sb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sE{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
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
 */let sT="WebChannelConnection";class sS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.bo=t+"://"+e.host,this.Do=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get vo(){return!1}Fo(e,t,n,r,i){let s=s_(),a=this.Mo(e,t.toUriEncodedString());_("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(o,r,i),this.Oo(e,a,o,n).then(t=>(_("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw E("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}No(e,t,n,r,i,s){return this.Fo(e,t,n,r,i)}xo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+y}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Mo(e,t){let n=sb[e];return`${this.bo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,t,n,r){let i=s_();return new Promise((s,a)=>{let o=new d.JJ;o.setWithCredentials(!0),o.listenOnce(d.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case d.jK.NO_ERROR:let t=o.getResponseJson();_(sT,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case d.jK.TIMEOUT:_(sT,`RPC '${e}' ${i} timed out`),a(new N(D.DEADLINE_EXCEEDED,"Request time out"));break;case d.jK.HTTP_ERROR:let n=o.getStatus();if(_(sT,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(t)>=0?t:D.UNKNOWN}(t.status);a(new N(e,t.message))}else a(new N(D.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new N(D.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{_(sT,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);_(sT,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}Lo(e,t,n){let i=s_(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,d.UE)(),o=(0,d.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new d.zI({})),this.xo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let c=s.join("");_(sT,`Creating RPC '${e}' stream ${i}: ${c}`,l);let h=a.createWebChannel(c,l),f=!1,m=!1,g=new sE({Po:t=>{m?_(sT,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(f||(_(sT,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),_(sT,`RPC '${e}' stream ${i} sending:`,t),h.send(t))},Io:()=>h.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(h,d.ii.EventType.OPEN,()=>{m||(_(sT,`RPC '${e}' stream ${i} transport opened.`),g.po())}),p(h,d.ii.EventType.CLOSE,()=>{m||(m=!0,_(sT,`RPC '${e}' stream ${i} transport closed`),g.wo())}),p(h,d.ii.EventType.ERROR,t=>{m||(m=!0,E(sT,`RPC '${e}' stream ${i} transport errored:`,t),g.wo(new N(D.UNAVAILABLE,"The operation could not be completed")))}),p(h,d.ii.EventType.MESSAGE,t=>{var n;if(!m){let s=t.data[0];s||S();let a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){_(sT,`RPC '${e}' stream ${i} received error:`,a);let t=a.status,n=function(e){let t=r[e];if(void 0!==t)return nj(t)}(t),s=a.message;void 0===n&&(n=D.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),m=!0,g.wo(new N(n,s)),h.close()}else _(sT,`RPC '${e}' stream ${i} received:`,s),g.So(s)}}),p(o,d.ju.STAT_EVENT,t=>{t.stat===d.kN.PROXY?_(sT,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===d.kN.NOPROXY&&_(sT,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.yo()},0),g}}/**
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
 *//**
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
 */function sx(){return"undefined"!=typeof window?window:null}function sD(){return"undefined"!=typeof document?document:null}/**
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
 */function sN(e){return new rn(e,!0)}/**
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
 */class sC{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ai=e,this.timerId=t,this.Bo=n,this.ko=r,this.qo=i,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();let t=Math.floor(this.Qo+this.Go()),n=Math.max(0,Date.now()-this.$o),r=Math.max(0,t-n);r>0&&_("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Qo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,r,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){null!==this.Ko&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){null!==this.Ko&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
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
 */class sA{constructor(e,t,n,r,i,s,a,o){this.ai=e,this.jo=n,this.Ho=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new sC(e,t)}t_(){return 1===this.state||5===this.state||this.n_()}n_(){return 2===this.state||3===this.state}start(){this.Xo=0,4!==this.state?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&null===this.Yo&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,t){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,4!==e?this.e_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(b(t.toString()),b("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):t&&t.code===D.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(t)}c_(){}auth(){this.state=1;let e=this.l_(this.Jo),t=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Jo===t&&this.h_(e,n)},t=>{e(()=>{let e=new N(D.UNKNOWN,"Fetching auth token failed: "+t.message);return this.P_(e)})})}h_(e,t){let n=this.l_(this.Jo);this.stream=this.I_(e,t),this.stream.To(()=>{n(()=>this.listener.To())}),this.stream.Ao(()=>{n(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(e=>{n(()=>this.P_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.Xo?this.T_(e):this.onNext(e))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return t=>{this.ai.enqueueAndForget(()=>this.Jo===e?t():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sk extends sA{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}I_(e,t){return this.connection.Lo("Listen",e,t)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:S(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||S(),e3.fromBase64String(i||"")):(void 0===i||i instanceof m||i instanceof Uint8Array||S(),e3.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new n4(s,a,o,l&&new N(void 0===l.code?D.UNKNOWN:nj(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=rh(e,r.document.name),s=ra(r.document.updateTime),a=r.document.createTime?ra(r.document.createTime):z.min(),o=new tT({mapValue:{fields:r.document.fields}}),l=tS.newFoundDocument(i,s,a,o);n=new n2(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=rh(e,r.document),s=r.readTime?ra(r.readTime):z.min(),a=tS.newNoDocument(i,s);n=new n2([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=rh(e,r.document);n=new n2([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return S();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new nK(r,i);n=new n5(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return z.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?z.min():t.readTime?ra(t.readTime):z.min()}(e);return this.listener.E_(t,n)}d_(e){let t={};t.database=rm(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=tJ(r)?{documents:rI(e,r)}:{query:r_(e,r)._t}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=rs(e,t.resumeToken);let r=rr(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(z.min())>0){n.readTime=ri(e,t.snapshotVersion.toTimestamp());let r=rr(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return S()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.__(t)}A_(e){let t={};t.database=rm(this.serializer),t.removeTarget=e,this.__(t)}}class sR extends sA{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,t){return this.connection.Lo("Write",e,t)}T_(e){return e.streamToken||S(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&S(),this.listener.m_()}onNext(e){var t,n;e.streamToken||S(),this.lastStreamToken=e.streamToken,this.e_.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||S(),t.map(e=>{let t;return(t=e.updateTime?ra(e.updateTime):ra(n)).isEqual(z.min())&&(t=ra(n)),new nN(t,e.transformResults||[])})):[]),i=ra(e.commitTime);return this.listener.f_(i,r)}g_(){let e={};e.database=rm(this.serializer),this.__(e)}V_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>rw(this.serializer,e))};this.__(t)}}/**
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
 */class sF extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.p_=!1}y_(){if(this.p_)throw new N(D.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,t,n,r){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Fo(e,rl(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new N(D.UNKNOWN,e.toString())})}No(e,t,n,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.No(e,rl(t,n),r,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new N(D.UNKNOWN,e.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class sV{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){0===this.w_&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){"Online"===this.state?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,"Online"===e&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(b(t),this.b_=!1):_("OnlineStateTracker",t)}M_(){null!==this.S_&&(this.S_.cancel(),this.S_=null)}}/**
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
 */class sL{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=i,this.B_.oo(e=>{n.enqueueAndForget(async()=>{sG(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.N_.add(4),await sO(e),e.k_.set("Unknown"),e.N_.delete(4),await sM(e)}(this))})}),this.k_=new sV(n,r)}}async function sM(e){if(sG(e))for(let t of e.L_)await t(!0)}async function sO(e){for(let t of e.L_)await t(!1)}function sP(e,t){e.O_.has(t.targetId)||(e.O_.set(t.targetId,t),s$(e)?sz(e):s3(e).n_()&&sU(e,t))}function sq(e,t){let n=s3(e);e.O_.delete(t),n.n_()&&sB(e,t),0===e.O_.size&&(n.n_()?n.s_():sG(e)&&e.k_.set("Unknown"))}function sU(e,t){if(e.q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(z.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}s3(e).d_(t)}function sB(e,t){e.q_.xe(t),s3(e).A_(t)}function sz(e){e.q_=new n3({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.O_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),s3(e).start(),e.k_.D_()}function s$(e){return sG(e)&&!s3(e).t_()&&e.O_.size>0}function sG(e){return 0===e.N_.size}async function sK(e){e.k_.set("Online")}async function sQ(e){e.O_.forEach((t,n)=>{sU(e,t)})}async function sj(e,t){e.q_=void 0,s$(e)?(e.k_.F_(t),sz(e)):e.k_.set("Unknown")}async function sW(e,t,n){if(e.k_.set("Online"),t instanceof n4&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.O_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.O_.delete(r),e.q_.removeTarget(r))}(e,t)}catch(n){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await sH(e,n)}else if(t instanceof n2?e.q_.Ke(t):t instanceof n5?e.q_.He(t):e.q_.We(t),!n.isEqual(z.min()))try{let t=await i9(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.q_.rt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.O_.get(r);i&&e.O_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.O_.get(t);if(!r)return;e.O_.set(t,r.withResumeToken(e3.EMPTY_BYTE_STRING,r.snapshotVersion)),sB(e,t);let i=new rx(r.target,t,n,r.sequenceNumber);sU(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){_("RemoteStore","Failed to raise snapshot:",t),await sH(e,t)}}async function sH(e,t,n){if(!ed(t))throw t;e.N_.add(1),await sO(e),e.k_.set("Offline"),n||(n=()=>i9(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),e.N_.delete(1),await sM(e)})}function sJ(e,t){return t().catch(n=>sH(e,n,t))}async function sY(e){let t=s6(e),n=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;sG(e)&&e.x_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.x_.length&&t.s_();break}n=r.batchId,function(e,t){e.x_.push(t);let n=s6(e);n.n_()&&n.R_&&n.V_(t.mutations)}(e,r)}catch(t){await sH(e,t)}sX(e)&&sZ(e)}function sX(e){return sG(e)&&!s6(e).t_()&&e.x_.length>0}function sZ(e){s6(e).start()}async function s0(e){s6(e).g_()}async function s1(e){let t=s6(e);for(let n of e.x_)t.V_(n.mutations)}async function s2(e,t,n){let r=e.x_.shift(),i=n$.from(r,t,n);await sJ(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await sY(e)}async function s5(e,t){t&&s6(e).R_&&await async function(e,t){var n;if(nQ(n=t.code)&&n!==D.ABORTED){let n=e.x_.shift();s6(e).i_(),await sJ(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await sY(e)}}(e,t),sX(e)&&sZ(e)}async function s4(e,t){e.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");let n=sG(e);e.N_.add(3),await sO(e),n&&e.k_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.N_.delete(3),await sM(e)}async function s8(e,t){t?(e.N_.delete(2),await sM(e)):t||(e.N_.add(2),await sO(e),e.k_.set("Unknown"))}function s3(e){var t,n,r;return e.Q_||(e.Q_=(t=e.datastore,n=e.asyncQueue,r={To:sK.bind(null,e),Ao:sQ.bind(null,e),Vo:sj.bind(null,e),E_:sW.bind(null,e)},t.y_(),new sk(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.L_.push(async t=>{t?(e.Q_.i_(),s$(e)?sz(e):e.k_.set("Unknown")):(await e.Q_.stop(),e.q_=void 0)})),e.Q_}function s6(e){var t,n,r;return e.K_||(e.K_=(t=e.datastore,n=e.asyncQueue,r={To:()=>Promise.resolve(),Ao:s0.bind(null,e),Vo:s5.bind(null,e),m_:s1.bind(null,e),f_:s2.bind(null,e)},t.y_(),new sR(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.L_.push(async t=>{t?(e.K_.i_(),await sY(e)):(await e.K_.stop(),e.x_.length>0&&(_("RemoteStore",`Stopping write stream with ${e.x_.length} pending writes`),e.x_=[]))})),e.K_}/**
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
 */class s9{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new C,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new s9(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new N(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function s7(e,t){if(b("AsyncQueue",`${t}: ${e}`),ed(e))return new N(D.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class ae{constructor(e){this.comparator=e?(t,n)=>e(t,n)||j.comparator(t.key,n.key):(e,t)=>j.comparator(e.key,t.key),this.keyedMap=no(),this.sortedSet=new eY(this.comparator)}static emptySet(e){return new ae(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ae)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new ae;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class at{constructor(){this.U_=new eY(j.comparator)}track(e){let t=e.doc.key,n=this.U_.get(t);n?0!==e.type&&3===n.type?this.U_=this.U_.insert(t,e):3===e.type&&1!==n.type?this.U_=this.U_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.U_=this.U_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.U_=this.U_.remove(t):1===e.type&&2===n.type?this.U_=this.U_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):S():this.U_=this.U_.insert(t,e)}W_(){let e=[];return this.U_.inorderTraversal((t,n)=>{e.push(n)}),e}}class an{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new an(e,t,ae.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&t9(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
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
 */class ar{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class ai{constructor(){this.queries=as(),this.onlineState="Unknown",this.J_=new Set}terminate(){!function(e,t){let n=e.queries;e.queries=as(),n.forEach((e,n)=>{for(let e of n.z_)e.onError(t)})}(this,new N(D.ABORTED,"Firestore shutting down"))}}function as(){return new ni(e=>t7(e),t9)}async function aa(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.j_()&&t.H_()&&(n=2):(i=new ar,n=t.H_()?0:1);try{switch(n){case 0:i.G_=await e.onListen(r,!0);break;case 1:i.G_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(n){let e=s7(n,`Initialization of query '${ne(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.z_.push(t),t.Y_(e.onlineState),i.G_&&t.Z_(i.G_)&&ac(e)}async function ao(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let e=i.z_.indexOf(t);e>=0&&(i.z_.splice(e,1),0===i.z_.length?r=t.H_()?0:1:!i.j_()&&t.H_()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function al(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.z_)e.Z_(r)&&(n=!0);i.G_=r}}n&&ac(e)}function au(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.z_)e.onError(n);e.queries.delete(t)}function ac(e){e.J_.forEach(e=>{e.next()})}(a=s||(s={})).X_="default",a.Cache="cache";class ah{constructor(e,t,n){this.query=e,this.ea=t,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=n||{}}Z_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new an(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ta?this.ra(e)&&(this.ea.next(e),t=!0):this.ia(e,this.onlineState)&&(this.sa(e),t=!0),this.na=e,t}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let t=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),t=!0),t}ia(e,t){return!(e.fromCache&&this.H_())||(!this.options.oa||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ra(e){if(e.docChanges.length>0)return!0;let t=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}sa(e){e=an.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==s.Cache}}/**
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
 */class ad{constructor(e,t){this._a=e,this.byteLength=t}aa(){return"metadata"in this._a}}/**
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
 */class af{constructor(e){this.serializer=e}Ts(e){return rh(this.serializer,e)}Es(e){return e.metadata.exists?ry(this.serializer,e.document,!1):tS.newNoDocument(this.Ts(e.metadata.name),this.ds(e.metadata.readTime))}ds(e){return ra(e)}}class am{constructor(e,t,n){this.ua=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=ag(e)}ca(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e._a.namedQuery)this.queries.push(e._a.namedQuery);else if(e._a.documentMetadata){this.documents.push({metadata:e._a.documentMetadata}),e._a.documentMetadata.exists||++t;let n=G.fromString(e._a.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e._a.document&&(this.documents[this.documents.length-1].document=e._a.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}la(e){let t=new Map,n=new af(this.serializer);for(let r of e)if(r.metadata.queries){let e=n.Ts(r.metadata.name);for(let n of r.metadata.queries){let r=(t.get(n)||nd()).add(e);t.set(n,r)}}return t}async complete(){let e=await sa(this.localStore,new af(this.serializer),this.documents,this.ua.id),t=this.la(this.documents);for(let e of this.queries)await so(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,ha:this.collectionGroups,Pa:e}}}function ag(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}/**
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
 */class ap{constructor(e){this.key=e}}class ay{constructor(e){this.key=e}}class aw{constructor(e,t){this.query=e,this.Ia=t,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=nd(),this.mutatedKeys=nd(),this.da=nr(e),this.Aa=new ae(this.da)}get Ra(){return this.Ia}Va(e,t){let n=t?t.ma:new at,r=t?t.Aa:this.Aa,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),c=nt(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.fa(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.da(c,o)>0||l&&0>this.da(c,l))&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Aa:s,ma:n,ts:a,mutatedKeys:i}}fa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;let s=e.ma.W_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return n(e)-n(t)})(e.type,t.type)||this.da(e.doc,t.doc)),this.ga(n),r=null!=r&&r;let a=t&&!r?this.pa():[],o=0===this.Ea.size&&this.current&&!r?1:0,l=o!==this.Ta;return(this.Ta=o,0!==s.length||l)?{snapshot:new an(this.query,e.Aa,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),ya:a}:{ya:a}}Y_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new at,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(e=>this.Ia=this.Ia.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ia=this.Ia.delete(e)),this.current=e.current)}pa(){if(!this.current)return[];let e=this.Ea;this.Ea=nd(),this.Aa.forEach(e=>{this.wa(e.key)&&(this.Ea=this.Ea.add(e.key))});let t=[];return e.forEach(e=>{this.Ea.has(e)||t.push(new ay(e))}),this.Ea.forEach(n=>{e.has(n)||t.push(new ap(n))}),t}Sa(e){this.Ia=e.Is,this.Ea=nd();let t=this.Va(e.documents);return this.applyChanges(t,!0)}ba(){return an.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,0===this.Ta,this.hasCachedResults)}}class av{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class aI{constructor(e){this.key=e,this.Da=!1}}class a_{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ca={},this.va=new ni(e=>t7(e),t9),this.Fa=new Map,this.Ma=new Set,this.xa=new eY(j.comparator),this.Oa=new Map,this.Na=new iB,this.La={},this.Ba=new Map,this.ka=iy.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return!0===this.qa}}async function ab(e,t,n=!0){let r;let i=aZ(e),s=i.va.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.ba()):r=await aT(i,t,n,!0),r}async function aE(e,t){let n=aZ(e);await aT(n,t,!0,!1)}async function aT(e,t,n,r){let i;let s=await se(e.localStore,t8(t)),a=s.targetId,o=n?e.sharedClientState.addLocalQueryTarget(a):"not-current";return r&&(i=await aS(e,t,a,"current"===o,s.resumeToken)),e.isPrimaryClient&&n&&sP(e.remoteStore,s),i}async function aS(e,t,n,r,i){e.Qa=(t,n,r)=>(async function(e,t,n,r){let i=t.view.Va(n);i.ts&&(i=await sn(e.localStore,t.query,!1).then(({documents:e})=>t.view.Va(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return aq(e,t.targetId,o.ya),o.snapshot})(e,t,n,r);let s=await sn(e.localStore,t,!0),a=new aw(t,s.Is),o=a.Va(s.documents),l=n1.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);aq(e,n,u.ya);let c=new av(t,n,a);return e.va.set(t,c),e.Fa.has(n)?e.Fa.get(n).push(t):e.Fa.set(n,[t]),u.snapshot}async function ax(e,t,n){let r=e.va.get(t),i=e.Fa.get(r.targetId);if(i.length>1)return e.Fa.set(r.targetId,i.filter(e=>!t9(e,t))),void e.va.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await st(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&sq(e.remoteStore,r.targetId),aO(e,r.targetId)}).catch(es)):(aO(e,r.targetId),await st(e.localStore,r.targetId,!0))}async function aD(e,t){let n=e.va.get(t),r=e.Fa.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),sq(e.remoteStore,n.targetId))}async function aN(e,t,n){let r=a0(e);try{var i;let e;let s=await function(e,t){let n,r;let i=B.now(),s=t.reduce((e,t)=>e.add(t.key),nd());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=ns,l=nd();return e.us.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=nw(r.transform,e||null);null!=i&&(null===n&&(n=tT.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new nM(e.key,t,function e(t){let n=[];return eH(t.fields,(t,r)=>{let i=new Q([t]);if(tv(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new e5(n)}(t.value.mapValue),nC.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:nl(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(e=r.La[r.currentUser.toKey()])||(e=new eY(q)),e=e.insert(i,n),r.La[r.currentUser.toKey()]=e,await aB(r,s.changes),await sY(r.remoteStore)}catch(t){let e=s7(t,"Failed to persist write");n.reject(e)}}async function aC(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.ss;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{let s=e.us.newChangeBuffer({trackRemovals:!0});r=e.ss;let a=[];t.targetChanges.forEach((s,o)=>{var l;let u=r.get(o);if(!u)return;a.push(e.$r.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.$r.addMatchingKeys(i,s.addedDocuments,o)));let c=u.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?c=c.withResumeToken(e3.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,n)),r=r.insert(o,c),l=c,(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&a.push(e.$r.updateTargetData(i,c))});let o=ns,l=nd();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),a.push(i7(i,s,t.documentUpdates).next(e=>{o=e.hs,l=e.Ps})),!n.isEqual(z.min())){let t=e.$r.getLastRemoteSnapshotVersion(i).next(t=>e.$r.setTargetsMetadata(i,i.currentSequenceNumber,n));a.push(t)}return ea.waitFor(a).next(()=>s.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,o,l)).next(()=>o)}).then(t=>(e.ss=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Oa.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||S(),t.addedDocuments.size>0?r.Da=!0:t.modifiedDocuments.size>0?r.Da||S():t.removedDocuments.size>0&&(r.Da||S(),r.Da=!1))}),await aB(e,n,t)}catch(e){await es(e)}}function aA(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.va.forEach((e,n)=>{let r=n.view.Y_(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.z_)e.Y_(t)&&(n=!0)}),n&&ac(r),i.length&&e.Ca.E_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function ak(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Oa.get(t),i=r&&r.key;if(i){let n=new eY(j.comparator);n=n.insert(i,tS.newNoDocument(i,z.min()));let r=nd().add(i),s=new n0(z.min(),new Map,new eY(q),n,r);await aC(e,s),e.xa=e.xa.remove(i),e.Oa.delete(t),aU(e)}else await st(e.localStore,t,!1).then(()=>aO(e,t,n)).catch(es)}async function aR(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.us.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=ea.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||S(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=nd();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});aM(e,r,null),aL(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await aB(e,i)}catch(e){await es(e)}}async function aF(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||S(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});aM(e,t,n),aL(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await aB(e,i)}catch(e){await es(e)}}async function aV(e,t){var n;sG(e.remoteStore)||_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{let r=await (n=e.localStore).persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>n.mutationQueue.getHighestUnacknowledgedBatchId(e));if(-1===r)return void t.resolve();let i=e.Ba.get(r)||[];i.push(t),e.Ba.set(r,i)}catch(n){let e=s7(n,"Initialization of waitForPendingWrites() operation failed");t.reject(e)}}function aL(e,t){(e.Ba.get(t)||[]).forEach(e=>{e.resolve()}),e.Ba.delete(t)}function aM(e,t,n){let r=e.La[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.La[e.currentUser.toKey()]=r}}function aO(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.Fa.get(t)))e.va.delete(r),n&&e.Ca.Ka(r,n);e.Fa.delete(t),e.isPrimaryClient&&e.Na.mr(t).forEach(t=>{e.Na.containsKey(t)||aP(e,t)})}function aP(e,t){e.Ma.delete(t.path.canonicalString());let n=e.xa.get(t);null!==n&&(sq(e.remoteStore,n),e.xa=e.xa.remove(t),e.Oa.delete(n),aU(e))}function aq(e,t,n){for(let r of n)r instanceof ap?(e.Na.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.xa.get(n)||e.Ma.has(r)||(_("SyncEngine","New document in limbo: "+n),e.Ma.add(r),aU(e))}(e,r)):r instanceof ay?(_("SyncEngine","Document no longer in limbo: "+r.key),e.Na.removeReference(r.key,t),e.Na.containsKey(r.key)||aP(e,r.key)):S()}function aU(e){for(;e.Ma.size>0&&e.xa.size<e.maxConcurrentLimboResolutions;){let t=e.Ma.values().next().value;e.Ma.delete(t);let n=new j(G.fromString(t)),r=e.ka.next();e.Oa.set(r,new aI(n)),e.xa=e.xa.insert(n,r),sP(e.remoteStore,new rx(t8(t1(n.path)),r,"TargetPurposeLimboResolution",ev.oe))}}async function aB(e,t,n){let r=[],i=[],s=[];e.va.isEmpty()||(e.va.forEach((a,o)=>{s.push(e.Qa(o,t,n).then(t=>{var s;if((t||n)&&e.isPrimaryClient){let r=t?!t.fromCache:null===(s=null==n?void 0:n.targetChanges.get(o.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(o.targetId,r?"current":"not-current")}if(t){r.push(t);let e=i5.Ui(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Ca.E_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>ea.forEach(t,t=>ea.forEach(t.Ki,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>ea.forEach(t.$i,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!ed(e))throw e;_("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.ss.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.ss=e.ss.insert(t,i)}}}(e.localStore,i))}async function az(e,t){var n;if(!e.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());let r=await i6(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.Ba.forEach(e=>{e.forEach(e=>{e.reject(new N(D.CANCELLED,n))})}),e.Ba.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await aB(e,r.ls)}}function a$(e,t){let n=e.Oa.get(t);if(n&&n.Da)return nd().add(n.key);{let n=nd(),r=e.Fa.get(t);if(!r)return n;for(let t of r){let r=e.va.get(t);n=n.unionWith(r.view.Ra)}return n}}async function aG(e,t){let n=await sn(e.localStore,t.query,!0),r=t.view.Sa(n);return e.isPrimaryClient&&aq(e,t.targetId,r.ya),r}async function aK(e,t){return si(e.localStore,t).then(t=>aB(e,t))}async function aQ(e,t,n,r){let i=await function(e,t){let n=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",r=>n.Fn(r,t).next(t=>t?e.localDocuments.getDocuments(r,t):ea.resolve(null)))}(e.localStore,t);null!==i?("pending"===n?await sY(e.remoteStore):"acknowledged"===n||"rejected"===n?(aM(e,t,r||null),aL(e,t),function(e,t){e.mutationQueue.xn(t)}(e.localStore,t)):S(),await aB(e,i)):_("SyncEngine","Cannot apply mutation batch with id: "+t)}async function aj(e,t){if(aZ(e),a0(e),!0===t&&!0!==e.qa){let t=e.sharedClientState.getAllActiveQueryTargets(),n=await aW(e,t.toArray());for(let t of(e.qa=!0,await s8(e.remoteStore,!0),n))sP(e.remoteStore,t)}else if(!1===t&&!1!==e.qa){let t=[],n=Promise.resolve();e.Fa.forEach((r,i)=>{e.sharedClientState.isLocalQueryTarget(i)?t.push(i):n=n.then(()=>(aO(e,i),st(e.localStore,i,!0))),sq(e.remoteStore,i)}),await n,await aW(e,t),e.Oa.forEach((t,n)=>{sq(e.remoteStore,n)}),e.Na.gr(),e.Oa=new Map,e.xa=new eY(j.comparator),e.qa=!1,await s8(e.remoteStore,!1)}}async function aW(e,t,n){let r=[],i=[];for(let n of t){let t;let s=e.Fa.get(n);if(s&&0!==s.length)for(let n of(t=await se(e.localStore,t8(s[0])),s)){let t=e.va.get(n),r=await aG(e,t);r.snapshot&&i.push(r.snapshot)}else{let r=await sr(e.localStore,n);t=await se(e.localStore,r),await aS(e,aH(r),n,!1,t.resumeToken)}r.push(t)}return e.Ca.E_(i),r}function aH(e){var t,n,r,i;return t=e.path,n=e.collectionGroup,r=e.orderBy,i=e.filters,new t0(t,n,r,i,e.limit,"F",e.startAt,e.endAt)}function aJ(e){return e.localStore.persistence.qi()}async function aY(e,t,n,r){if(e.qa)return void _("SyncEngine","Ignoring unexpected query state notification.");let i=e.Fa.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{let r=await si(e.localStore,nn(i[0])),s=n0.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,e3.EMPTY_BYTE_STRING);await aB(e,r,s);break}case"rejected":await st(e.localStore,t,!0),aO(e,t,r);break;default:S()}}async function aX(e,t,n){let r=aZ(e);if(r.qa){for(let e of t){if(r.Fa.has(e)&&r.sharedClientState.isActiveQueryTarget(e)){_("SyncEngine","Adding an already active target "+e);continue}let t=await sr(r.localStore,e),n=await se(r.localStore,t);await aS(r,aH(t),n.targetId,!1,n.resumeToken),sP(r.remoteStore,n)}for(let e of n)r.Fa.has(e)&&await st(r.localStore,e,!1).then(()=>{sq(r.remoteStore,e),aO(r,e)}).catch(es)}}function aZ(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=aC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=a$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ak.bind(null,e),e.Ca.E_=al.bind(null,e.eventManager),e.Ca.Ka=au.bind(null,e.eventManager),e}function a0(e){return e.remoteStore.remoteSyncer.applySuccessfulWrite=aR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aF.bind(null,e),e}class a1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=sN(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new i3(t,new i8,e.initialUser,this.serializer)}createPersistence(e){return new ij(iH.Yr,this.serializer)}createSharedClientState(e){return new sy}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class a2 extends a1{constructor(e,t,n){super(),this.Ua=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ua.initialize(this,e),await a0(this.Ua.syncEngine),await sY(this.Ua.remoteStore),await this.persistence.pi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){var t;return t=this.persistence,new i3(t,new i8,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){return new iT(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){let n=new ew(t,this.persistence);return new ey(e.asyncQueue,n)}createPersistence(e){let t=i2(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?il.withCacheSize(this.cacheSizeBytes):il.DEFAULT;return new iZ(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,sx(),sD(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new sy}}class a5 extends a2{constructor(e,t){super(e,t,!1),this.Ua=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.Ua.syncEngine;this.sharedClientState instanceof sp&&(this.sharedClientState.syncEngine={eo:aQ.bind(null,t),no:aY.bind(null,t),ro:aX.bind(null,t),qi:aJ.bind(null,t),Xs:aK.bind(null,t)},await this.sharedClientState.start()),await this.persistence.pi(async e=>{await aj(this.Ua.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){let t=sx();if(!sp.D(t))throw new N(D.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let n=i2(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new sp(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class a4{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>aA(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=az.bind(null,this.syncEngine),await s8(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ai}createDatastore(e){let t=sN(e.databaseInfo.databaseId),n=new sS(e.databaseInfo);return new sF(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new sL(t,this.datastore,e.asyncQueue,e=>aA(this.syncEngine,e,0),sv.D()?new sv:new sw)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new a_(e,t,n,r,i,s);return a&&(o.qa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){_("RemoteStore","RemoteStore shutting down."),e.N_.add(5),await sO(e),e.B_.shutdown(),e.k_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}/**
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
 */function a8(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){let r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class a3{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):b("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class a6{constructor(e,t){this.za=e,this.serializer=t,this.metadata=new C,this.buffer=new Uint8Array,this.ja=new TextDecoder("utf-8"),this.Ha().then(e=>{e&&e.aa()?this.metadata.resolve(e._a.metadata):this.metadata.reject(Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null==e?void 0:e._a)}`))},e=>this.metadata.reject(e))}close(){return this.za.cancel()}async getMetadata(){return this.metadata.promise}async $a(){return await this.getMetadata(),this.Ha()}async Ha(){let e=await this.Ja();if(null===e)return null;let t=this.ja.decode(e),n=Number(t);return isNaN(n)&&this.Ya(`length string (${t}) is not valid number`),new ad(JSON.parse(await this.Za(n)),e.length+n)}Xa(){return this.buffer.findIndex(e=>123===e)}async Ja(){for(;0>this.Xa()&&!await this.eu(););if(0===this.buffer.length)return null;let e=this.Xa();e<0&&this.Ya("Reached the end of bundle when a length string is expected.");let t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Za(e){for(;this.buffer.length<e;)await this.eu()&&this.Ya("Reached the end of bundle when more is expected.");let t=this.ja.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Ya(e){throw this.za.cancel(),Error(`Invalid bundle format: ${e}`)}async eu(){let e=await this.za.read();if(!e.done){let t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class a9{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new N(D.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;let t=await async function(e,t){let n={documents:t.map(t=>rc(e.serializer,t))},r=await e.No("BatchGetDocuments",e.serializer.databaseId,G.emptyPath(),n,t.length),i=new Map;r.forEach(t=>{var n;let r=(n=e.serializer,"found"in t?function(e,t){t.found||S(),t.found.name,t.found.updateTime;let n=rh(e,t.found.name),r=ra(t.found.updateTime),i=t.found.createTime?ra(t.found.createTime):z.min(),s=new tT({mapValue:{fields:t.found.fields}});return tS.newFoundDocument(n,r,i,s)}(n,t):"missing"in t?function(e,t){t.missing||S(),t.readTime||S();let n=rh(e,t.missing),r=ra(t.readTime);return tS.newNoDocument(n,r)}(n,t):S());i.set(r.key.toString(),r)});let s=[];return t.forEach(e=>{let t=i.get(e.toString());t||S(),s.push(t)}),s}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastTransactionError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new nU(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{let n=j.fromPath(t);this.mutations.push(new nB(n,this.precondition(n)))}),await async function(e,t){let n={writes:t.map(t=>rw(e.serializer,t))};await e.Fo("Commit",e.serializer.databaseId,G.emptyPath(),n)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw S();t=z.min()}let n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new N(D.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(z.min())?nC.exists(!1):nC.updateTime(t):nC.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(z.min()))throw new N(D.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return nC.updateTime(t)}return nC.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class a7{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.tu=n.maxAttempts,this.e_=new sC(this.asyncQueue,"transaction_retry")}nu(){this.tu-=1,this.ru()}ru(){this.e_.Wo(async()=>{let e=new a9(this.datastore),t=this.iu(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.su(e)}))}).catch(e=>{this.su(e)})})}iu(e){try{let t=this.updateFunction(e);return!eI(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}su(e){this.tu>0&&this.ou(e)?(this.tu-=1,this.asyncQueue.enqueueAndForget(()=>(this.ru(),Promise.resolve()))):this.deferred.reject(e)}ou(e){if("FirebaseError"===e.name){let t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!nQ(t)}return!1}}/**
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
 */class oe{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=p.UNAUTHENTICATED,this.clientId=P.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{_("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(_("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new C;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=s7(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function ot(e,t){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await i6(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function on(e,t){e.asyncQueue.verifyOperationInProgress();let n=await oi(e);_("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>s4(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>s4(t.remoteStore,n)),e._onlineComponents=t}function or(e){return"FirebaseError"===e.name?e.code===D.FAILED_PRECONDITION||e.code===D.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function oi(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await ot(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!or(t))throw t;E("Error using user provided cache. Falling back to memory cache: "+t),await ot(e,new a1)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await ot(e,new a1)}return e._offlineComponents}async function os(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await on(e,e._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await on(e,new a4))),e._onlineComponents}function oa(e){return oi(e).then(e=>e.persistence)}function oo(e){return oi(e).then(e=>e.localStore)}function ol(e){return os(e).then(e=>e.remoteStore)}function ou(e){return os(e).then(e=>e.syncEngine)}async function oc(e){let t=await os(e),n=t.eventManager;return n.onListen=ab.bind(null,t.syncEngine),n.onUnlisten=ax.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=aE.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=aD.bind(null,t.syncEngine),n}function oh(e,t,n={}){let r=new C;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new a3({next:s=>{t.enqueueAndForget(()=>ao(e,a));let o=s.docs.has(n);!o&&s.fromCache?i.reject(new N(D.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&r&&"server"===r.source?i.reject(new N(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new ah(t1(n.path),s,{includeMetadataChanges:!0,oa:!0});return aa(e,a)})(await oc(e),e.asyncQueue,t,n,r)),r.promise}function od(e,t,n={}){let r=new C;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new ah(n,new a3({next:n=>{t.enqueueAndForget(()=>ao(e,s)),n.fromCache&&"server"===r.source?i.reject(new N(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),{includeMetadataChanges:!0,oa:!0});return aa(e,s)})(await oc(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function of(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */let om=new Map;/**
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
 */function og(e,t,n){if(!n)throw new N(D.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function op(e,t,n,r){if(!0===t&&!0===r)throw new N(D.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function oy(e){if(!j.isDocumentKey(e))throw new N(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ow(e){if(j.isDocumentKey(e))throw new N(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ov(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":S()}function oI(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new N(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=ov(e);throw new N(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function o_(e,t){if(t<=0)throw new N(D.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
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
 */class ob{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new N(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new N(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}op("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=of(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new N(D.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new N(D.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new N(D.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oE{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ob({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new N(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ob(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new k;switch(e.type){case"firstParty":return new L(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new N(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=om.get(e);t&&(_("ComponentProvider","Removing Datastore"),om.delete(e),t.terminate())}(this),Promise.resolve()}}function oT(e,t,n,r={}){var i;let s=(e=oI(e,oE))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&E("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=p.MOCK_USER;else{t=(0,c.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new N(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new p(s)}e._authCredentials=new R(new A(t,n))}}/**
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
 */class oS{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new oS(this.firestore,e,this._query)}}class ox{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oD(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ox(this.firestore,e,this._key)}}class oD extends oS{constructor(e,t,n){super(e,t,t1(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new ox(this.firestore,null,new j(e))}withConverter(e){return new oD(this.firestore,e,this._path)}}function oN(e,t,...n){if(e=(0,c.m9)(e),og("collection","path",t),e instanceof oE){let r=G.fromString(t,...n);return ow(r),new oD(e,null,r)}{if(!(e instanceof ox||e instanceof oD))throw new N(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(G.fromString(t,...n));return ow(r),new oD(e.firestore,null,r)}}function oC(e,t){if(e=oI(e,oE),og("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new N(D.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new oS(e,null,new t0(G.emptyPath(),t))}function oA(e,t,...n){if(e=(0,c.m9)(e),1==arguments.length&&(t=P.newId()),og("doc","path",t),e instanceof oE){let r=G.fromString(t,...n);return oy(r),new ox(e,null,new j(r))}{if(!(e instanceof ox||e instanceof oD))throw new N(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(G.fromString(t,...n));return oy(r),new ox(e.firestore,e instanceof oD?e.converter:null,new j(r))}}function ok(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),(e instanceof ox||e instanceof oD)&&(t instanceof ox||t instanceof oD)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function oR(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),e instanceof oS&&t instanceof oS&&e.firestore===t.firestore&&t9(e._query,t._query)&&e.converter===t.converter}/**
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
 */class oF{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new sC(this,"async_queue_retry"),this.Tu=()=>{let e=sD();e&&_("AsyncQueue","Visibility state changed to "+e.visibilityState),this.e_.zo()};let e=sD();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;let t=sD();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});let t=new C;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(0!==this.au.length){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!ed(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){let t=this._u.then(()=>(this.hu=!0,e().catch(e=>{let t;throw this.lu=e,this.hu=!1,b("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.hu=!1,e))));return this._u=t,t}enqueueAfterDelay(e,t,n){this.Eu(),this.Iu.indexOf(e)>-1&&(t=0);let r=s9.createAndSchedule(this,e,t,n,e=>this.Ru(e));return this.cu.push(r),r}Eu(){this.lu&&S()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(let t of this.cu)if(t.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{for(let t of(this.cu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.cu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){let t=this.cu.indexOf(e);this.cu.splice(t,1)}}function oV(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class oL{constructor(){this._progressObserver={},this._taskCompletionResolver=new C,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */let oM=-1;class oO extends oE{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new oF,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oU(this),this._firestoreClient.terminate()}}function oP(e,t){let n="object"==typeof e?e:(0,o.getApp)(),r=(0,o._getProvider)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=(0,c.P0)("firestore");e&&oT(r,...e)}return r}function oq(e){return e._firestoreClient||oU(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function oU(e){var t,n,r,i;let s=e._freezeSettings(),a=(i=e._databaseId,new ti(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,of(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new oe(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}function oB(e,t){oJ(e=oI(e,oO));let n=oq(e);if(n._uninitializedComponentsProvider)throw new N(D.FAILED_PRECONDITION,"SDK cache is already specified.");E("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let r=e._freezeSettings(),i=new a4;return o$(n,i,new a2(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function oz(e){oJ(e=oI(e,oO));let t=oq(e);if(t._uninitializedComponentsProvider)throw new N(D.FAILED_PRECONDITION,"SDK cache is already specified.");E("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let n=e._freezeSettings(),r=new a4;return o$(t,r,new a5(r,n.cacheSizeBytes))}function o$(e,t,n){let r=new C;return e.asyncQueue.enqueue(async()=>{try{await ot(e,n),await on(e,t),r.resolve()}catch(e){if(!or(e))throw e;E("Error enabling indexeddb cache. Falling back to memory cache: "+e),r.reject(e)}}).then(()=>r.promise)}function oG(e){if(e._initialized&&!e._terminated)throw new N(D.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");let t=new C;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!el.D())return Promise.resolve();await el.delete(e+"main")}(i2(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function oK(e){return function(e){let t=new C;return e.asyncQueue.enqueueAndForget(async()=>aV(await ou(e),t)),t.promise}(oq(e=oI(e,oO)))}function oQ(e){var t;return(t=oq(e=oI(e,oO))).asyncQueue.enqueue(async()=>{let e=await oa(t),n=await ol(t);return e.setNetworkEnabled(!0),n.N_.delete(0),sM(n)})}function oj(e){var t;return(t=oq(e=oI(e,oO))).asyncQueue.enqueue(async()=>{let e=await oa(t),n=await ol(t);return e.setNetworkEnabled(!1),async function(e){e.N_.add(0),await sO(e),e.k_.set("Offline")}(n)})}function oW(e,t){let n=oq(e=oI(e,oO)),r=new oL;return function(e,t,n,r){var i;let s=(i=sN(t),new a6(function(e,t){if(e instanceof Uint8Array)return a8(e,void 0);if(e instanceof ArrayBuffer)return a8(new Uint8Array(e),void 0);if(e instanceof ReadableStream)return e.getReader();throw Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}("string"==typeof n?nW().encode(n):n),i));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,n){(async function(e,t,n){try{var r;let i=await t.getMetadata();if(await function(e,t){let n=ra(t.createTime);return e.persistence.runTransaction("hasNewerBundle","readonly",n=>e.Wr.getBundleMetadata(n,t.id)).then(e=>!!e&&e.createTime.compareTo(n)>=0)}(e.localStore,i))return await t.close(),n._completeWith({taskState:"Success",documentsLoaded:i.totalDocuments,bytesLoaded:i.totalBytes,totalDocuments:i.totalDocuments,totalBytes:i.totalBytes}),Promise.resolve(new Set);n._updateProgress(ag(i));let s=new am(i,e.localStore,t.serializer),a=await t.$a();for(;a;){let e=await s.ca(a);e&&n._updateProgress(e),a=await t.$a()}let o=await s.complete();return await aB(e,o.Pa,void 0),await (r=e.localStore).persistence.runTransaction("Save bundle","readwrite",e=>r.Wr.saveBundleMetadata(e,i)),n._completeWith(o.progress),Promise.resolve(o.ha)}catch(e){return E("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}})(e,t,n).then(t=>{e.sharedClientState.notifyBundleLoaded(t)})}(await ou(e),s,r)})}(n,e._databaseId,t,r),r}function oH(e,t){var n;return(n=oq(e=oI(e,oO))).asyncQueue.enqueue(async()=>{var e;return(e=await oo(n)).persistence.runTransaction("Get named query","readonly",n=>e.Wr.getNamedQuery(n,t))}).then(t=>t?new oS(e,null,t.query):null)}function oJ(e){if(e._initialized||e._terminated)throw new N(D.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class oY{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oY(e3.fromBase64String(e))}catch(e){throw new N(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new oY(e3.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class oX{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new N(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Q(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class oZ{constructor(e){this._methodName=e}}/**
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
 */class o0{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
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
 */let o1=/^__.*__$/;class o2{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new nM(e,this.data,this.fieldMask,t,this.fieldTransforms):new nL(e,this.data,t,this.fieldTransforms)}}class o5{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new nM(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function o4(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class o8{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.pu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new o8(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.wu({path:n,bu:!1});return r.Du(e),r}Cu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.wu({path:n,bu:!1});return r.pu(),r}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return lg(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(0===e.length)throw this.Fu("Document fields must not be empty");if(o4(this.yu)&&o1.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class o3{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||sN(e)}Ou(e,t,n,r=!1){return new o8({yu:e,methodName:t,xu:n,path:Q.emptyPath(),bu:!1,Mu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function o6(e){let t=e._freezeSettings(),n=sN(e._databaseId);return new o3(e._databaseId,!!t.ignoreUndefinedProperties,n)}function o9(e,t,n,r,i,s={}){let a,o;let l=e.Ou(s.merge||s.mergeFields?2:0,t,n,i);lh("Data must be an object, but it was:",l,r);let u=lu(r,l);if(s.merge)a=new e5(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=ld(t,r,n);if(!l.contains(i))throw new N(D.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);lp(e,i)||e.push(i)}a=new e5(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new o2(new tT(u),a,o)}class o7 extends oZ{_toFieldTransform(e){if(2!==e.yu)throw 1===e.yu?e.Fu(`${this._methodName}() can only appear at the top level of your update data`):e.Fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof o7}}function le(e,t,n){return new o8({yu:3,xu:t.settings.xu,methodName:e._methodName,bu:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class lt extends oZ{_toFieldTransform(e){return new nD(e.path,new nv)}isEqual(e){return e instanceof lt}}class ln extends oZ{constructor(e,t){super(e),this.Nu=t}_toFieldTransform(e){let t=le(this,e,!0),n=new nI(this.Nu.map(e=>ll(e,t)));return new nD(e.path,n)}isEqual(e){return e instanceof ln&&(0,c.vZ)(this.Nu,e.Nu)}}class lr extends oZ{constructor(e,t){super(e),this.Nu=t}_toFieldTransform(e){let t=le(this,e,!0),n=new nb(this.Nu.map(e=>ll(e,t)));return new nD(e.path,n)}isEqual(e){return e instanceof lr&&(0,c.vZ)(this.Nu,e.Nu)}}class li extends oZ{constructor(e,t){super(e),this.Lu=t}_toFieldTransform(e){let t=new nT(e.serializer,np(e.serializer,this.Lu));return new nD(e.path,t)}isEqual(e){return e instanceof li&&this.Lu===e.Lu}}function ls(e,t,n,r){let i=e.Ou(1,t,n);lh("Data must be an object, but it was:",i,r);let s=[],a=tT.empty();return eH(r,(e,r)=>{let o=lm(t,e,n);r=(0,c.m9)(r);let l=i.Cu(o);if(r instanceof o7)s.push(o);else{let e=ll(r,l);null!=e&&(s.push(o),a.set(o,e))}}),new o5(a,new e5(s),i.fieldTransforms)}function la(e,t,n,r,i,s){let a=e.Ou(1,t,n),o=[ld(t,r,n)],l=[i];if(s.length%2!=0)throw new N(D.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(ld(t,s[e])),l.push(s[e+1]);let u=[],h=tT.empty();for(let e=o.length-1;e>=0;--e)if(!lp(u,o[e])){let t=o[e],n=l[e];n=(0,c.m9)(n);let r=a.Cu(t);if(n instanceof o7)u.push(t);else{let e=ll(n,r);null!=e&&(u.push(t),h.set(t,e))}}return new o5(h,new e5(u),a.fieldTransforms)}function lo(e,t,n,r=!1){return ll(n,e.Ou(r?4:3,t))}function ll(e,t){if(lc(e=(0,c.m9)(e)))return lh("Unsupported field value:",t,e),lu(e,t);if(e instanceof oZ)return function(e,t){if(!o4(t.yu))throw t.Fu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Fu(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.bu&&4!==t.yu)throw t.Fu("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=ll(i,t.vu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return np(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=B.fromDate(e);return{timestampValue:ri(t.serializer,n)}}if(e instanceof B){let n=new B(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ri(t.serializer,n)}}if(e instanceof o0)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof oY)return{bytesValue:rs(t.serializer,e._byteString)};if(e instanceof ox){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Fu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ro(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Fu(`Unsupported field value: ${ov(e)}`)}(e,t)}function lu(e,t){let n={};return eJ(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):eH(e,(e,r)=>{let i=ll(r,t.Su(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function lc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof B||e instanceof o0||e instanceof oY||e instanceof ox||e instanceof oZ)}function lh(e,t,n){if(!lc(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=ov(n);throw"an object"===r?t.Fu(e+" a custom object"):t.Fu(e+" "+r)}}function ld(e,t,n){if((t=(0,c.m9)(t))instanceof oX)return t._internalPath;if("string"==typeof t)return lm(e,t);throw lg("Field path arguments must be of type string or ",e,!1,void 0,n)}let lf=RegExp("[~\\*/\\[\\]]");function lm(e,t,n){if(t.search(lf)>=0)throw lg(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new oX(...t.split("."))._internalPath}catch(r){throw lg(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function lg(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new N(D.INVALID_ARGUMENT,o+e+l)}function lp(e,t){return e.some(e=>e.isEqual(t))}/**
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
 */class ly{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ox(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new lw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(lv("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class lw extends ly{data(){return super.data()}}function lv(e,t){return"string"==typeof t?lm(e,t):t instanceof oX?t._internalPath:t._delegate._internalPath}/**
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
 */function lI(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new N(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class l_{}class lb extends l_{}function lE(e,t,...n){let r=[];for(let i of(t instanceof l_&&r.push(t),function(e){let t=e.filter(e=>e instanceof lx).length,n=e.filter(e=>e instanceof lT).length;if(t>1||t>0&&n>0)throw new N(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}class lT extends lb{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new lT(e,t,n)}_apply(e){let t=this._parse(e);return lB(e._query,t),new oS(e.firestore,e.converter,t3(e._query,t))}_parse(e){let t=o6(e.firestore);return function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new N(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){lU(a,s);let t=[];for(let n of a)t.push(lq(r,e,n));o={arrayValue:{values:t}}}else o=lq(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||lU(a,s),o=lo(n,t,a,"in"===s||"not-in"===s);return tk.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function lS(e,t,n){let r=lv("where",e);return lT._create(r,t,n)}class lx extends l_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new lx(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:tR.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;for(let e of t.getFlattenedFilters())lB(n,e),n=t3(n,e)}(e._query,t),new oS(e.firestore,e.converter,t3(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class lD extends lb{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new lD(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new N(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new N(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new tC(t,n)}(e._query,this._field,this._direction);return new oS(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new t0(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function lN(e,t="asc"){let n=lv("orderBy",e);return lD._create(n,t)}class lC extends lb{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new lC(e,t,n)}_apply(e){return new oS(e.firestore,e.converter,t6(e._query,this._limit,this._limitType))}}function lA(e){return o_("limit",e),lC._create("limit",e,"F")}function lk(e){return o_("limitToLast",e),lC._create("limitToLast",e,"L")}class lR extends lb{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new lR(e,t,n)}_apply(e){var t;let n=lP(e,this.type,this._docOrFields,this._inclusive);return new oS(e.firestore,e.converter,new t0((t=e._query).path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,n,t.endAt))}}function lF(...e){return lR._create("startAt",e,!0)}function lV(...e){return lR._create("startAfter",e,!1)}class lL extends lb{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new lL(e,t,n)}_apply(e){var t;let n=lP(e,this.type,this._docOrFields,this._inclusive);return new oS(e.firestore,e.converter,new t0((t=e._query).path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,n))}}function lM(...e){return lL._create("endBefore",e,!1)}function lO(...e){return lL._create("endAt",e,!0)}function lP(e,t,n,r){if(n[0]=(0,c.m9)(n[0]),n[0]instanceof ly)return function(e,t,n,r,i){if(!r)throw new N(D.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);let s=[];for(let n of t4(e))if(n.field.isKeyField())s.push(tm(t,r.key));else{let e=r.data.field(n.field);if(tt(e))throw new N(D.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){let e=n.field.canonicalString();throw new N(D.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new tx(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{let i=o6(e.firestore);return function(e,t,n,r,i,s){let a=e.explicitOrderBy;if(i.length>a.length)throw new N(D.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let o=[];for(let s=0;s<i.length;s++){let l=i[s];if(a[s].field.isKeyField()){if("string"!=typeof l)throw new N(D.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof l}`);if(!t5(e)&&-1!==l.indexOf("/"))throw new N(D.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${l}' contains a slash.`);let n=e.path.child(G.fromString(l));if(!j.isDocumentKey(n))throw new N(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);let i=new j(n);o.push(tm(t,i))}else{let e=lo(n,r,l);o.push(e)}}return new tx(o,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function lq(e,t,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new N(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!t5(t)&&-1!==n.indexOf("/"))throw new N(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(G.fromString(n));if(!j.isDocumentKey(r))throw new N(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return tm(e,new j(r))}if(n instanceof ox)return tm(e,n._key);throw new N(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ov(n)}.`)}function lU(e,t){if(!Array.isArray(e)||0===e.length)throw new N(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lB(e,t){let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new N(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class lz{convertValue(e,t="none"){switch(tl(e)){case 0:return null;case 1:return e.booleanValue;case 2:return e7(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(te(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw S()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return eH(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new o0(e7(e.latitude),e7(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=tn(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(tr(e));default:return null}}convertTimestamp(e){let t=e9(e);return new B(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=G.fromString(e);rS(n)||S();let r=new ts(n.get(1),n.get(3)),i=new j(n.popFirst(5));return r.isEqual(t)||b(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function l$(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}class lG extends lz{constructor(e){super(),this.firestore=e}convertBytes(e){return new oY(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new ox(this.firestore,null,t)}}/**
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
 */class lK{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lQ extends ly{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new lj(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(lv("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class lj extends lQ{data(e={}){return super.data(e)}}class lW{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new lK(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new lj(this._firestore,this._userDataWriter,n.key,n,new lK(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new lj(e._firestore,e._userDataWriter,n.doc.key,n.doc,new lK(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new lj(e._firestore,e._userDataWriter,t.doc.key,t.doc,new lK(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function lH(e,t){return e instanceof lQ&&t instanceof lQ?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof lW&&t instanceof lW&&e._firestore===t._firestore&&oR(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}/**
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
 */function lJ(e){e=oI(e,ox);let t=oI(e.firestore,oO);return oh(oq(t),e._key).then(n=>ue(t,e,n))}class lY extends lz{constructor(e){super(),this.firestore=e}convertBytes(e){return new oY(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new ox(this.firestore,null,t)}}function lX(e){e=oI(e,ox);let t=oI(e.firestore,oO),n=oq(t),r=new lY(t);return(function(e,t){let n=new C;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await e.persistence.runTransaction("read document","readonly",n=>e.localDocuments.getDocument(n,t));r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new N(D.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(r){let e=s7(r,`Failed to get document '${t} from cache`);n.reject(e)}})(await oo(e),t,n)),n.promise})(n,e._key).then(n=>new lQ(t,r,e._key,n,new lK(null!==n&&n.hasLocalMutations,!0),e.converter))}function lZ(e){e=oI(e,ox);let t=oI(e.firestore,oO);return oh(oq(t),e._key,{source:"server"}).then(n=>ue(t,e,n))}function l0(e){e=oI(e,oS);let t=oI(e.firestore,oO),n=oq(t),r=new lY(t);return lI(e._query),od(n,e._query).then(n=>new lW(t,r,e,n))}function l1(e){e=oI(e,oS);let t=oI(e.firestore,oO),n=oq(t),r=new lY(t);return(function(e,t){let n=new C;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await sn(e,t,!0),i=new aw(t,r.Is),s=i.Va(r.documents),a=i.applyChanges(s,!1);n.resolve(a.snapshot)}catch(r){let e=s7(r,`Failed to execute query '${t} against cache`);n.reject(e)}})(await oo(e),t,n)),n.promise})(n,e._query).then(n=>new lW(t,r,e,n))}function l2(e){e=oI(e,oS);let t=oI(e.firestore,oO),n=oq(t),r=new lY(t);return od(n,e._query,{source:"server"}).then(n=>new lW(t,r,e,n))}function l5(e,t,n){e=oI(e,ox);let r=oI(e.firestore,oO),i=l$(e.converter,t,n);return l7(r,[o9(o6(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,nC.none())])}function l4(e,t,n,...r){e=oI(e,ox);let i=oI(e.firestore,oO),s=o6(i);return l7(i,[("string"==typeof(t=(0,c.m9)(t))||t instanceof oX?la(s,"updateDoc",e._key,t,n,r):ls(s,"updateDoc",e._key,t)).toMutation(e._key,nC.exists(!0))])}function l8(e){return l7(oI(e.firestore,oO),[new nU(e._key,nC.none())])}function l3(e,t){let n=oI(e.firestore,oO),r=oA(e),i=l$(e.converter,t);return l7(n,[o9(o6(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,nC.exists(!1))]).then(()=>r)}function l6(e,...t){var n,r,i;let s,a,o;e=(0,c.m9)(e);let l={includeMetadataChanges:!1,source:"default"},u=0;"object"!=typeof t[0]||oV(t[u])||(l=t[u],u++);let h={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(oV(t[u])){let e=t[u];t[u]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[u+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[u+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof ox)a=oI(e.firestore,oO),o=t1(e._key.path),s={next:n=>{t[u]&&t[u](ue(a,e,n))},error:t[u+1],complete:t[u+2]};else{let n=oI(e,oS);a=oI(n.firestore,oO),o=n._query;let r=new lY(a);s={next:e=>{t[u]&&t[u](new lW(a,r,n,e))},error:t[u+1],complete:t[u+2]},lI(e._query)}return function(e,t,n,r){let i=new a3(r),s=new ah(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>aa(await oc(e),s)),()=>{i.Ga(),e.asyncQueue.enqueueAndForget(async()=>ao(await oc(e),s))}}(oq(a),o,h,s)}function l9(e,t){return function(e,t){let n=new a3(t);return e.asyncQueue.enqueueAndForget(async()=>{(await oc(e)).J_.add(n),n.next()}),()=>{n.Ga(),e.asyncQueue.enqueueAndForget(async()=>(function(e,t){e.J_.delete(t)})(await oc(e),n))}}(oq(e=oI(e,oO)),oV(t)?t:{next:t})}function l7(e,t){return function(e,t){let n=new C;return e.asyncQueue.enqueueAndForget(async()=>aN(await ou(e),t,n)),n.promise}(oq(e),t)}function ue(e,t,n){let r=n.docs.get(t._key),i=new lY(e);return new lQ(e,i,t._key,r,new lK(n.hasPendingWrites,n.fromCache),t.converter)}/**
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
 */let ut={maxAttempts:5};/**
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
 */class un{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=o6(e)}set(e,t,n){this._verifyNotCommitted();let r=ur(e,this._firestore),i=l$(r.converter,t,n),s=o9(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,nC.none())),this}update(e,t,n,...r){let i;this._verifyNotCommitted();let s=ur(e,this._firestore);return i="string"==typeof(t=(0,c.m9)(t))||t instanceof oX?la(this._dataReader,"WriteBatch.update",s._key,t,n,r):ls(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,nC.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=ur(e,this._firestore);return this._mutations=this._mutations.concat(new nU(t._key,nC.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new N(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ur(e,t){if((e=(0,c.m9)(e)).firestore!==t)throw new N(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
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
 *//**
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
 */class ui extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=o6(e)}get(e){let t=ur(e,this._firestore),n=new lG(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return S();let r=e[0];if(r.isFoundDocument())return new ly(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new ly(this._firestore,n,t._key,null,t.converter);throw S()})}set(e,t,n){let r=ur(e,this._firestore),i=l$(r.converter,t,n),s=o9(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){let i;let s=ur(e,this._firestore);return i="string"==typeof(t=(0,c.m9)(t))||t instanceof oX?la(this._dataReader,"Transaction.update",s._key,t,n,r):ls(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){let t=ur(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=ur(e,this._firestore),n=new lY(this._firestore);return super.get(e).then(e=>new lQ(this._firestore,n,t._key,e._document,new lK(!1,!1),t.converter))}}function us(e,t,n){e=oI(e,oO);let r=Object.assign(Object.assign({},ut),n);return!function(e){if(e.maxAttempts<1)throw new N(D.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){let r=new C;return e.asyncQueue.enqueueAndForget(async()=>{let i=await os(e).then(e=>e.datastore);new a7(e.asyncQueue,i,n,t,r).nu()}),r.promise}(oq(e),n=>t(new ui(e,n)),r)}/**
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
 */function ua(){return new o7("deleteField")}function uo(){return new lt("serverTimestamp")}function ul(...e){return new ln("arrayUnion",e)}function uu(...e){return new lr("arrayRemove",e)}function uc(e){return new li("increment",e)}new WeakMap,function(e=!0){y=o.SDK_VERSION,(0,o._registerComponent)(new l.wA("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new oO(new F(t.getProvider("auth-internal")),new O(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new N(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ts(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,o.registerVersion)(g,"4.6.5",void 0),(0,o.registerVersion)(g,"4.6.5","esm2017")}()}}]);
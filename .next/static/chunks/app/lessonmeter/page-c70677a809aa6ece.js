(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[568],{4712:function(e,t,r){Promise.resolve().then(r.bind(r,8525))},927:function(e,t,r){"use strict";r.d(t,{db:function(){return i}});var a=r(5236),n=r(9842);r(9910);let s=(0,a.ZF)({apiKey:"AIzaSyBm2kvj7NwBTu4sGOwdGIgyaHPD5u0tEro",authDomain:"studentsys-6f1dd.firebaseapp.com",projectId:"studentsys-6f1dd",storageBucket:"studentsys-6f1dd.appspot.com",messagingSenderId:"860882784124",appId:"1:860882784124:web:3f19aeb4a50235b3971ef9",measurementId:"G-6SSWW8F5RZ"}),i=(0,n.ad)(s)},8525:function(e,t,r){"use strict";r.r(t);var a=r(7437),n=r(2265),s=r(9842),i=r(927),l=r(9690);let o={tyt:["T\xfcrk\xe7e","Matematik","Fizik","Kimya","Biyoloji","Tarih","Coğrafya","Felsefe","Din","Geometri"],ayt:["Matematik","Biyoloji","Kimya","Fizik","Geometri"]};t.default=()=>{let[e,t]=(0,n.useState)([]),[r,c]=(0,n.useState)([]),[d,u]=(0,n.useState)("tyt"),[m,p]=(0,n.useState)(""),[b,y]=(0,n.useState)(null),h=async e=>{let t=(0,s.hJ)(i.db,e);return(await (0,s.PL)(t)).docs.map(e=>({id:e.id,name:e.data().name,topics:e.data().topics}))},f=async(e,t)=>{let r=(0,s.hJ)(i.db,e);(await (0,s.PL)(r)).docs.some(e=>e.data().name===t)||await (0,s.pl)((0,s.JU)(i.db,e,t),{id:t,name:t,topics:{}})},x=async()=>{for(let e of o[d])await f(d,e);let e=await h(d);"tyt"===d?t(e):c(e)},g=async(e,t,r,a)=>{let n=(0,s.JU)(i.db,e,t),l=(await (0,s.QT)(n)).data();l.topics[r]=a,await (0,s.r7)(n,{topics:l.topics})},j=async()=>{if(b&&m.trim()){let e=(0,s.JU)(i.db,d,b),r=(await (0,s.QT)(e)).data(),a={...r.topics,[m.trim()]:!1};r.topics=a,await (0,s.r7)(e,{topics:r.topics}),p(""),y(null);let n=await h(d);"tyt"===d?t(n):c(n),alert("Konu başarıyla eklendi!")}else alert("L\xfctfen ge\xe7erli bir konu adı girin.")};(0,n.useEffect)(()=>{x()},[d]);let w=(e,r,a,n)=>{g(e,r,a,n),"tyt"===e?t(e=>e.map(e=>e.id===r?{...e,topics:{...e.topics,[a]:n}}:e)):c(e=>e.map(e=>e.id===r?{...e,topics:{...e.topics,[a]:n}}:e))},v=async(e,r,a)=>{if(window.confirm("Bu konuyu silmek istediğinizden emin misiniz?")){let n=(0,s.JU)(i.db,e,r),l=(await (0,s.QT)(n)).data();delete l.topics[a],await (0,s.r7)(n,{topics:l.topics});let o=await h(e);"tyt"===e?t(o):c(o)}},N=(e,t)=>{let r=[];for(let n=0;n<e.length;n+=2)r.push((0,a.jsxs)("div",{className:"flex mb-6",children:[e[n]&&(0,a.jsxs)("div",{className:"w-1/2 pr-2",children:[(0,a.jsx)("h3",{className:"text-lg font-medium mb-2",children:e[n].name}),(0,a.jsxs)("table",{className:"min-w-full bg-white shadow-lg rounded-lg overflow-hidden",children:[(0,a.jsx)("thead",{className:"bg-gray-200",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"py-2 px-4 border-b border-gray-300 text-left",children:"Konu"}),(0,a.jsx)("th",{className:"py-2 px-4 border-b border-gray-300 text-left",children:"Durum"}),(0,a.jsx)("th",{className:"py-2 px-4 border-b border-gray-300 text-left",children:"Sil"})]})}),(0,a.jsx)("tbody",{children:Object.entries(e[n].topics).map(r=>{let[s,i]=r;return(0,a.jsxs)("tr",{onClick:()=>w(t,e[n].id,s,!i),className:"cursor-pointer ".concat(i?"bg-green-100 text-green-600 line-through":"bg-red-100 text-red-600"),children:[(0,a.jsx)("td",{className:"py-2 px-4 border-b border-gray-300",children:s}),(0,a.jsx)("td",{className:"py-2 px-4 border-b border-gray-300",children:i?"Tamamlandı":"Tamamlanmadı"}),(0,a.jsx)("td",{className:"py-2 px-4 border-b border-gray-300",children:(0,a.jsx)(l.YK6,{className:"text-red-600 cursor-pointer",onClick:r=>{r.stopPropagation(),v(t,e[n].id,s)}})})]},s)})})]})]}),e[n+1]&&(0,a.jsxs)("div",{className:"w-1/2 pl-2",children:[(0,a.jsx)("h3",{className:"text-lg font-medium mb-2",children:e[n+1].name}),(0,a.jsxs)("table",{className:"min-w-full bg-white shadow-lg rounded-lg overflow-hidden",children:[(0,a.jsx)("thead",{className:"bg-gray-200",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"py-2 px-4 border-b border-gray-300 text-left",children:"Konu"}),(0,a.jsx)("th",{className:"py-2 px-4 border-b border-gray-300 text-left",children:"Durum"}),(0,a.jsx)("th",{className:"py-2 px-4 border-b border-gray-300 text-left",children:"Sil"})]})}),(0,a.jsx)("tbody",{children:Object.entries(e[n+1].topics).map(r=>{let[s,i]=r;return(0,a.jsxs)("tr",{onClick:()=>w(t,e[n+1].id,s,!i),className:"cursor-pointer ".concat(i?"bg-green-100 text-green-600 line-through":"bg-red-100 text-red-600"),children:[(0,a.jsx)("td",{className:"py-2 px-4 border-b border-gray-300",children:s}),(0,a.jsx)("td",{className:"py-2 px-4 border-b border-gray-300",children:i?"Tamamlandı":"Tamamlanmadı"}),(0,a.jsx)("td",{className:"py-2 px-4 border-b border-gray-300",children:(0,a.jsx)(l.YK6,{className:"text-red-600 cursor-pointer",onClick:r=>{r.stopPropagation(),v(t,e[n+1].id,s)}})})]},s)})})]})]})]},n));return r};return(0,a.jsxs)("div",{className:"w-11/12 py-10 m-auto",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold mb-6",children:"Konumetre"}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("button",{className:"px-4 py-2 mr-2 rounded-xl ".concat("tyt"===d?"bg-blue-500 text-white":"bg-gray-200"),onClick:()=>u("tyt"),children:"TYT"}),(0,a.jsx)("button",{className:"px-4 py-2 rounded-xl ".concat("ayt"===d?"bg-blue-500 text-white":"bg-gray-200"),onClick:()=>u("ayt"),children:"AYT"})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsxs)("select",{className:"border rounded-lg p-2 mr-2",value:b||"",onChange:e=>y(e.target.value),children:[(0,a.jsx)("option",{value:"",children:"Konu Eklemek İ\xe7in Ders Se\xe7in"}),o[d].map(e=>(0,a.jsx)("option",{value:e,children:e},e))]}),(0,a.jsx)("input",{className:"border rounded-lg p-2 mr-2",type:"text",value:m,onChange:e=>p(e.target.value),placeholder:"Yeni konu adı"}),(0,a.jsx)("button",{className:"bg-[#00C399] text-white px-4 py-2 rounded-lg",onClick:j,children:"Konu Ekle"})]}),"tyt"===d?N(e,"tyt"):N(r,"ayt")]})}},1810:function(e,t,r){"use strict";r.d(t,{w_:function(){return d}});var a=r(2265),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=a.createContext&&a.createContext(n),i=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var a,n;a=t,n=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e){return t=>a.createElement(u,l({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>a.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function u(e){var t=t=>{var r,{attr:n,size:s,title:o}=e,d=function(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,i),u=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,d,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==s?a.createElement(s.Consumer,null,e=>t(e)):t(n)}}},function(e){e.O(0,[358,259,153,971,23,744],function(){return e(e.s=4712)}),_N_E=e.O()}]);
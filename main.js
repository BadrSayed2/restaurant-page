(()=>{"use strict";var e={863:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(81),r=t.n(o),a=t(645),c=t.n(a)()(r());c.push([e.id,"* {\n  box-sizing: border-box;\n}\n\n.nav {\n  width: 98vw;\n  height: 200px;\n  background-color: maroon;\n  display: flex;\n  justify-content: center;\n  align-items: end;\n}\n\n.cell {\n  font-size: 30px;\n  border: 0;\n  color: white;\n  padding: 10px;\n  background-color: #925;\n}\n",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=r(f,o);o.byIndex=i,n.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e={nav_cell_name:"home",make_Dom:function(e){const n=document.createElement("h1");n.textContent="Fried chicken as never made before",content.appendChild(n);const t=document.createElement("div");t.textContent="our fried chicken is special ,don't belive ????! just come get a taste",content.appendChild(t)}},n=function(){let e=[{name:"zinger",description:"big fried-chicken sandwich"},{name:"mid-box",description:"four pieces with fries"},{name:"big-box",description:"four peices with fries and cola"}];return{nav_cell_name:"menu",make_Dom:function(n){let t=e.length;for(let n=0;n<t;n++){const t=document.createElement("div");content.appendChild(t);const o=document.createElement("h2");o.textContent=e[n].name,t.appendChild(o);const r=document.createElement("p");r.textContent=e[n].description,t.appendChild(r)}}}}(),o={nav_cell_name:"about",make_Dom:function(e){const n=document.createElement("p");n.textContent="we are the best fried chicken in your town , your nation &the entire world",content.appendChild(n)}};var r=t(379),a=t.n(r),c=t(795),i=t.n(c),s=t(569),d=t.n(s),l=t(565),u=t.n(l),p=t(216),f=t.n(p),m=t(589),v=t.n(m),h=t(863),b={};b.styleTagTransform=v(),b.setAttributes=u(),b.insert=d().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=f(),a()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;const y=function(){const e=[],n=()=>{content.innerHTML=""},t=function(){const o=document.createElement("div");let r=e.length;for(let a=0;a<r;a++){const r=document.createElement("button");r.textContent=e[a].nav_cell_name,r.setAttribute("type","button"),r.classList.add("cell"),r.addEventListener("click",n),r.addEventListener("click",t),r.addEventListener("click",e[a].make_Dom),o.appendChild(r)}content.appendChild(o)};return{add_cell:n=>{e.push(n)},make_nav_Dom:t}}();document.querySelector("#content"),y.add_cell(e),y.add_cell(n),y.add_cell(o),y.make_nav_Dom()})()})();
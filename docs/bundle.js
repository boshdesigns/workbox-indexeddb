!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(9)},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3);const r="xp_db",s="xp_store",a="users_xp_score";function o(){}function c(e){return e()}function i(){return Object.create(null)}function l(e){e.forEach(c)}function u(e){return"function"==typeof e}function d(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function g(e,t,n){const r=t.subscribe(n);e.$$.on_destroy.push(r.unsubscribe?()=>r.unsubscribe():r)}new Set;function f(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode.removeChild(e)}function h(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function b(){return $(" ")}function y(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function x(e,t){t=""+t,e.data!==t&&(e.data=t)}let _;function w(e){_=e}const k=[],j=Promise.resolve();let N=!1;const S=[],E=[],I=[];function O(){N||(N=!0,j.then(T))}function M(e){E.push(e)}function T(){const e=new Set;do{for(;k.length;){const e=k.shift();w(e),B(e.$$)}for(;S.length;)S.shift()();for(;E.length;){const t=E.pop();e.has(t)||(t(),e.add(t))}}while(k.length);for(;I.length;)I.pop()();N=!1}function B(e){e.fragment&&(e.update(e.dirty),l(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(M))}let L;function V(){L={remaining:0,callbacks:[]}}function C(){L.remaining||l(L.callbacks)}function P(e){L.callbacks.push(e)}let H;function A(e,t,n){const{fragment:r,on_mount:s,on_destroy:a,after_render:o}=e.$$;r.m(t,n),M(()=>{const t=s.map(c).filter(u);a?a.push(...t):l(t),e.$$.on_mount=[]}),o.forEach(M)}function W(e,t){e.$$&&(l(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function D(e,t,n,r,s,a){const c=_;w(e);const u=t.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:o,not_equal:s,bound:i(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(c?c.$$.context:[]),callbacks:i(),dirty:null};let g=!1;var f;d.ctx=n?n(e,u,(t,n)=>{d.ctx&&s(d.ctx[t],d.ctx[t]=n)&&(d.bound[t]&&d.bound[t](n),g&&function(e,t){e.$$.dirty||(k.push(e),O(),e.$$.dirty=i()),e.$$.dirty[t]=!0}(e,t))}):u,d.update(),g=!0,l(d.before_render),d.fragment=r(d.ctx),t.target&&(t.hydrate?d.fragment.l((f=t.target,Array.from(f.childNodes))):d.fragment.c(),t.intro&&e.$$.fragment.i&&e.$$.fragment.i(),A(e,t.target,t.anchor),T()),w(c)}"undefined"!=typeof HTMLElement&&(H=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){W(this,!0),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class q{$destroy(){W(this,!0),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function U(e,t=o){let n;const r=[];function s(t){if(d(e,t)){if(e=t,!n)return;r.forEach(e=>e[1]()),r.forEach(t=>t[0](e))}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=o){const i=[a,c];return r.push(i),1===r.length&&(n=t(s)||o),a(e),()=>{const e=r.indexOf(i);-1!==e&&r.splice(e,1),0===r.length&&n()}}}}const G=U(0);class Q{constructor(e="keyval-store",t="keyval"){this.storeName=t,this._dbp=new Promise((n,r)=>{const s=indexedDB.open(e,1);s.onerror=(()=>r(s.error)),s.onsuccess=(()=>n(s.result)),s.onupgradeneeded=(()=>{s.result.createObjectStore(t)})})}_withIDBStore(e,t){return this._dbp.then(n=>new Promise((r,s)=>{const a=n.transaction(this.storeName,e);a.oncomplete=(()=>r()),a.onabort=a.onerror=(()=>s(a.error)),t(a.objectStore(this.storeName))}))}}let X;function Y(){return X||(X=new Q),X}const z=new Q(r,s);function F(e){!function(e,t,n=Y()){n._withIDBStore("readwrite",n=>{n.put(t,e)})}(a,e,z)}(function(e,t=Y()){let n;return t._withIDBStore("readonly",t=>{n=t.get(e)}).then(()=>n.result)})(a,z).then(function(e){let t=e;void 0!==t?G.set(parseInt(t)):G.set(0)});n(4);function J(e){var t,n,r,s,a;return{c(){var o,c,i,l;t=v("button"),n=$("Click to Gain "),r=$(e.value),s=$("!"),t.className="experience-box svelte-17g6747",o=t,c="click",i=e.increment,o.addEventListener(c,i,l),a=(()=>o.removeEventListener(c,i,l))},m(e,a){m(e,t,a),f(t,n),f(t,r),f(t,s)},p(e,t){e.value&&x(r,t.value)},i:o,o:o,d(e){e&&p(t),a()}}}function K(e,t,n){let r;g(e,G,e=>{n("$count",r=e)});let{value:s}=t;return e.$set=(e=>{"value"in e&&n("value",s=e.value)}),{value:s,increment:function(){G.update(e=>e+s),F(r)}}}var R=class extends q{constructor(e){super(),D(this,e,K,J,d,["value"])}};n(5);function Z(e){var t,n,r,s,a;return{c(){t=v("section"),(n=v("div")).textContent="Your XP points -",r=b(),s=v("div"),a=$(e.$count),n.className="users-xp__text svelte-9b18vh",s.className="users-xp__count svelte-9b18vh",t.className="users-xp svelte-9b18vh"},m(e,o){m(e,t,o),f(t,n),f(t,r),f(t,s),f(s,a)},p(e,t){e.$count&&x(a,t.$count)},i:o,o:o,d(e){e&&p(t)}}}function ee(e,t,n){let r;return g(e,G,e=>{n("$count",r=e)}),{$count:r}}var te=class extends q{constructor(e){super(),D(this,e,ee,Z,d,[])}};n(6);function ne(e){var t,n,r,s,a,c,i=new te({});return{c(){t=v("header"),n=v("div"),r=v("h1"),s=$(re),a=b(),i.$$.fragment.c(),r.className="svelte-gsag4y",n.className="grid grid--container",t.className="svelte-gsag4y"},m(e,o){m(e,t,o),f(t,n),f(n,r),f(r,s),f(n,a),A(i,n,null),c=!0},p:o,i(e){c||(i.$$.fragment.i(e),c=!0)},o(e){i.$$.fragment.o(e),c=!1},d(e){e&&p(t),i.$destroy()}}}let re="PWA Test";var se=class extends q{constructor(e){super(),D(this,e,null,ne,d,[])}};n(7);function ae(e){var t,n;return{c(){t=v("section"),(n=v("img")).src=oe,n.alt=ce,n.className="svelte-c4fd7a",t.className="placeholder-image svelte-c4fd7a"},m(e,r){m(e,t,r),f(t,n)},p:o,i:o,o:o,d(e){e&&p(t)}}}let oe="assets/images/placeholder-bg.jpg",ce="This is a Ben10 placeholder image";var ie=class extends q{constructor(e){super(),D(this,e,null,ae,d,[])}};n(8);function le(e,t,n){const r=Object.create(e);return r.src=t[n],r}function ue(e,t,n){const r=Object.create(e);return r.src=t[n],r}function de(e){var t;return{c(){(t=v("img")).src=e.src,t.alt="test",t.className="svelte-a4rpnu"},m(e,n){m(e,t,n)},p:o,d(e){e&&p(t)}}}function ge(e){var t;return{c(){(t=v("img")).src=e.src,t.alt="test"},m(e,n){m(e,t,n)},p:o,d(e){e&&p(t)}}}function fe(e){for(var t,n,r,s=e.imageValues,a=[],c=0;c<s.length;c+=1)a[c]=de(ue(e,s,c));var i=e.otherImages,l=[];for(c=0;c<i.length;c+=1)l[c]=ge(le(e,i,c));return{c(){t=v("div");for(var e=0;e<a.length;e+=1)a[e].c();n=b(),r=v("section");for(e=0;e<l.length;e+=1)l[e].c();t.className="images svelte-a4rpnu",r.className="bigbois"},m(e,s){m(e,t,s);for(var o=0;o<a.length;o+=1)a[o].m(t,null);m(e,n,s),m(e,r,s);for(o=0;o<l.length;o+=1)l[o].m(r,null)},p(e,n){if(e.imageValues){s=n.imageValues;for(var o=0;o<s.length;o+=1){const r=ue(n,s,o);a[o]?a[o].p(e,r):(a[o]=de(r),a[o].c(),a[o].m(t,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=s.length}if(e.otherImages){i=n.otherImages;for(o=0;o<i.length;o+=1){const t=le(n,i,o);l[o]?l[o].p(e,t):(l[o]=ge(t),l[o].c(),l[o].m(r,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=i.length}},i:o,o:o,d(e){e&&p(t),h(a,e),e&&(p(n),p(r)),h(l,e)}}}function me(e){return{imageValues:["assets/images/characters/cannonbolt_enhanced.png","assets/images/characters/cannonbolt.png","assets/images/characters/diamondhead_enhanced.png","assets/images/characters/diamondhead.png","assets/images/characters/four_arms_enhanced.png","assets/images/characters/four_arms.png","assets/images/characters/grey_matter_enhanced.png","assets/images/characters/grey_matter.png","assets/images/characters/heatblast_enhanced.png","assets/images/characters/heatblast.png","assets/images/characters/hex.png","assets/images/characters/overflow.png","assets/images/characters/overflow_enhanced.png","assets/images/characters/shock_rock_enhanced.png","assets/images/characters/shockrock.png","assets/images/characters/stinkfly_enhanced.png","assets/images/characters/stinkfly.png","assets/images/characters/upgrade.png","assets/images/characters/wildvine_enhanced.png","assets/images/characters/wildvine.png","assets/images/characters/xlr8_enhanced.png","assets/images/characters/xlr8.png"],otherImages:["assets/images/large-image-1.jpg","assets/images/large-image-2.jpg","assets/images/large-image-3.jpg","assets/images/large-image-4.jpg","assets/images/large-image-5.jpg"]}}var pe=class extends q{constructor(e){super(),D(this,e,me,fe,d,[])}};function he(e,t,n){const r=Object.create(e);return r.xp=t[n],r}function ve(e){var t,n=new R({props:{value:e.xp}});return{c(){n.$$.fragment.c()},m(e,r){A(n,e,r),t=!0},p(e,t){var r={};e.xpValues&&(r.value=t.xp),n.$set(r)},i(e){t||(n.$$.fragment.i(e),t=!0)},o(e){n.$$.fragment.o(e),t=!1},d(e){n.$destroy(e)}}}function $e(e){for(var t,n,r,s,a,o,c,i=new se({}),l=new ie({}),u=e.xpValues,d=[],g=0;g<u.length;g+=1)d[g]=ve(he(e,u,g));function $(e,t,n){d[e]&&(t&&P(()=>{d[e].d(t),d[e]=null}),d[e].o(n))}var x=new pe({});return{c(){i.$$.fragment.c(),t=b(),l.$$.fragment.c(),n=b(),r=v("main"),s=v("div"),a=v("div");for(var e=0;e<d.length;e+=1)d[e].c();o=b(),x.$$.fragment.c(),a.className="grid__blocks",s.className="grid grid--container",y(r,"role","main")},m(e,u){A(i,e,u),m(e,t,u),A(l,e,u),m(e,n,u),m(e,r,u),f(r,s),f(s,a);for(var g=0;g<d.length;g+=1)d[g].m(a,null);f(r,o),A(x,r,null),c=!0},p(e,t){if(e.xpValues){u=t.xpValues;for(var n=0;n<u.length;n+=1){const r=he(t,u,n);d[n]?(d[n].p(e,r),d[n].i(1)):(d[n]=ve(r),d[n].c(),d[n].i(1),d[n].m(a,null))}for(V();n<d.length;n+=1)$(n,1,1);C()}},i(e){if(!c){i.$$.fragment.i(e),l.$$.fragment.i(e);for(var t=0;t<u.length;t+=1)d[t].i();x.$$.fragment.i(e),c=!0}},o(e){i.$$.fragment.o(e),l.$$.fragment.o(e),d=d.filter(Boolean);for(let e=0;e<d.length;e+=1)$(e,0);x.$$.fragment.o(e),c=!1},d(e){i.$destroy(e),e&&p(t),l.$destroy(e),e&&(p(n),p(r)),h(d,e),x.$destroy()}}}function be(e){return{xpValues:[5,10,20]}}var ye=class extends q{constructor(e){super(),D(this,e,be,$e,d,[])}};"serviceWorker"in navigator&&window.addEventListener("load",function(){console.log("loaded");try{navigator.serviceWorker.register("/sandbox-pwa/sw.js",{scope:"/sandbox-pwa/"}).then(function(){"storage"in navigator&&"estimate"in navigator.storage?navigator.storage.estimate().then(e=>{var t=document.getElementById("storage-quota"),n=parseInt(e.usage)/1e6,r=parseInt(e.quota)/1e6;t.innerHTML=`Storage Quota: This site data is using: ${n} out of the devices total usable space of: ${r} mb`}):document.getElementById("storage-quota").innerHTML="Sorry pal! Can't use storage quota"}),navigator.serviceWorker.ready.then(function(e){console.log("Service worker successfully registered on scope",e.scope)});var e,t=document.getElementById("app-mode");window.matchMedia("(display-mode: standalone)").matches?t.innerHTML="Viewing mode: WebApp":!0===window.navigator.standalone?t.innerHTML="Viewing mode: WebApp":t.innerHTML="Viewing mode: Desktop";var n=document.getElementById("user-prompt"),r=document.getElementById("user-click");window.addEventListener("beforeinstallprompt",t=>{console.log("beforeinstallprompt event",t),t.preventDefault(),e=t,n.style.display="block"}),r.addEventListener("click",t=>{n.style.display="none",e.prompt(),e.userChoice.then(t=>{"accepted"===t.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),e=null})})}catch(e){console.log("ServiceWorker registration failed. Sorry about that.",e)}});const xe=new ye({target:document.body});window.app=xe;t.default=xe}]);
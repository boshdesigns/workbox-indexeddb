!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(8)},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(1),n(2),n(3);function r(){}function o(t){return t()}function c(){return Object.create(null)}function s(t){t.forEach(o)}function u(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}new Set;function a(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function p(){return $(" ")}function m(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function h(t,e){e=""+e,t.data!==e&&(t.data=e)}let g;function v(t){g=t}const b=[],y=Promise.resolve();let x=!1;const _=[],k=[],w=[];function N(){x||(x=!0,y.then(O))}function j(t){k.push(t)}function O(){const t=new Set;do{for(;b.length;){const t=b.shift();v(t),S(t.$$)}for(;_.length;)_.shift()();for(;k.length;){const e=k.pop();t.has(e)||(e(),t.add(e))}}while(b.length);for(;w.length;)w.pop()();x=!1}function S(t){t.fragment&&(t.update(t.dirty),s(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(j))}let E;function C(){E={remaining:0,callbacks:[]}}function P(){E.remaining||s(E.callbacks)}function M(t){E.callbacks.push(t)}let T;function A(t,e,n){const{fragment:r,on_mount:c,on_destroy:i,after_render:a}=t.$$;r.m(e,n),j(()=>{const e=c.map(o).filter(u);i?i.push(...e):s(e),t.$$.on_mount=[]}),a.forEach(j)}function V(t,e){t.$$&&(s(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function L(t,e,n,o,u,i){const a=g;v(t);const l=e.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:r,not_equal:u,bound:c(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(a?a.$$.context:[]),callbacks:c(),dirty:null};let d=!1;var $;f.ctx=n?n(t,l,(e,n)=>{f.ctx&&u(f.ctx[e],f.ctx[e]=n)&&(f.bound[e]&&f.bound[e](n),d&&function(t,e){t.$$.dirty||(b.push(t),N(),t.$$.dirty=c()),t.$$.dirty[e]=!0}(t,e))}):l,f.update(),d=!0,s(f.before_render),f.fragment=o(f.ctx),e.target&&(e.hydrate?f.fragment.l(($=e.target,Array.from($.childNodes))):f.fragment.c(),e.intro&&t.$$.fragment.i&&t.$$.fragment.i(),A(t,e.target,e.anchor),O()),v(a)}"undefined"!=typeof HTMLElement&&(T=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){V(this,!0),this.$destroy=r}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class W{$destroy(){V(this,!0),this.$destroy=r}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function B(t,e=r){let n;const o=[];function c(e){if(i(t,e)){if(t=e,!n)return;o.forEach(t=>t[1]()),o.forEach(e=>e[0](t))}}return{set:c,update:function(e){c(e(t))},subscribe:function(s,u=r){const i=[s,u];return o.push(i),1===o.length&&(n=e(c)||r),s(t),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&n()}}}}const q=B(0);n(4);function H(t){var e,n,o,c,s;return{c(){var r,u,i,a;e=d("button"),n=$("Click to Gain "),o=$(t.value),c=$("!"),e.className="experience-box svelte-17g6747",r=e,u="click",i=t.increment,r.addEventListener(u,i,a),s=(()=>r.removeEventListener(u,i,a))},m(t,r){l(t,e,r),a(e,n),a(e,o),a(e,c)},p(t,e){t.value&&h(o,e.value)},i:r,o:r,d(t){t&&f(e),s()}}}function G(t,e,n){let{value:r}=e;return t.$set=(t=>{"value"in t&&n("value",r=t.value)}),{value:r,increment:function(){q.update(t=>t+r)}}}var X=class extends W{constructor(t){super(),L(this,t,G,H,i,["value"])}};n(5);function Y(t){var e,n,o,c,s;return{c(){e=d("section"),(n=d("div")).textContent="Your XP points -",o=p(),c=d("div"),s=$(t.$count),n.className="users-xp__text svelte-9b18vh",c.className="users-xp__count svelte-9b18vh",e.className="users-xp svelte-9b18vh"},m(t,r){l(t,e,r),a(e,n),a(e,o),a(e,c),a(c,s)},p(t,e){t.$count&&h(s,e.$count)},i:r,o:r,d(t){t&&f(e)}}}function z(t,e,n){let r;return function(t,e,n){const r=e.subscribe(n);t.$$.on_destroy.push(r.unsubscribe?()=>r.unsubscribe():r)}(t,q,t=>{n("$count",r=t)}),{$count:r}}var D=class extends W{constructor(t){super(),L(this,t,z,Y,i,[])}};n(6);function F(t){var e,n,o,c,s,u,i=new D({});return{c(){e=d("header"),n=d("div"),o=d("h1"),c=$(I),s=p(),i.$$.fragment.c(),o.className="svelte-gsag4y",n.className="grid grid--container",e.className="svelte-gsag4y"},m(t,r){l(t,e,r),a(e,n),a(n,o),a(o,c),a(n,s),A(i,n,null),u=!0},p:r,i(t){u||(i.$$.fragment.i(t),u=!0)},o(t){i.$$.fragment.o(t),u=!1},d(t){t&&f(e),i.$destroy()}}}let I="PWA Test";var J=class extends W{constructor(t){super(),L(this,t,null,F,i,[])}};n(7);function K(t){var e,n;return{c(){e=d("section"),(n=d("img")).src=Q,n.alt=R,n.className="svelte-c4fd7a",e.className="placeholder-image svelte-c4fd7a"},m(t,r){l(t,e,r),a(e,n)},p:r,i:r,o:r,d(t){t&&f(e)}}}let Q="assets/placeholder-bg.jpg",R="This is a Ben10 placeholder image";var U=class extends W{constructor(t){super(),L(this,t,null,K,i,[])}};function Z(t,e,n){const r=Object.create(t);return r.xp=e[n],r}function tt(t){var e,n=new X({props:{value:t.xp}});return{c(){n.$$.fragment.c()},m(t,r){A(n,t,r),e=!0},p(t,e){var r={};t.xpValues&&(r.value=e.xp),n.$set(r)},i(t){e||(n.$$.fragment.i(t),e=!0)},o(t){n.$$.fragment.o(t),e=!1},d(t){n.$destroy(t)}}}function et(t){for(var e,n,r,o,c,s,u=new J({}),i=new U({}),$=t.xpValues,h=[],g=0;g<$.length;g+=1)h[g]=tt(Z(t,$,g));function v(t,e,n){h[t]&&(e&&M(()=>{h[t].d(e),h[t]=null}),h[t].o(n))}return{c(){u.$$.fragment.c(),e=p(),i.$$.fragment.c(),n=p(),r=d("main"),o=d("div"),c=d("div");for(var t=0;t<h.length;t+=1)h[t].c();c.className="grid__blocks",o.className="grid grid--container",m(r,"role","main")},m(t,f){A(u,t,f),l(t,e,f),A(i,t,f),l(t,n,f),l(t,r,f),a(r,o),a(o,c);for(var d=0;d<h.length;d+=1)h[d].m(c,null);s=!0},p(t,e){if(t.xpValues){$=e.xpValues;for(var n=0;n<$.length;n+=1){const r=Z(e,$,n);h[n]?(h[n].p(t,r),h[n].i(1)):(h[n]=tt(r),h[n].c(),h[n].i(1),h[n].m(c,null))}for(C();n<h.length;n+=1)v(n,1,1);P()}},i(t){if(!s){u.$$.fragment.i(t),i.$$.fragment.i(t);for(var e=0;e<$.length;e+=1)h[e].i();s=!0}},o(t){u.$$.fragment.o(t),i.$$.fragment.o(t),h=h.filter(Boolean);for(let t=0;t<h.length;t+=1)v(t,0);s=!1},d(t){u.$destroy(t),t&&f(e),i.$destroy(t),t&&(f(n),f(r)),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(h,t)}}}function nt(t){return{xpValues:[5,10,20]}}var rt=class extends W{constructor(t){super(),L(this,t,nt,et,i,[])}};if("serviceWorker"in navigator)try{navigator.serviceWorker.register("./sw.js")}catch(t){console.log("ServiceWorker registration failed. Sorry about that.",t)}else document.querySelector(".alert").removeAttribute("hidden");const ot=new rt({target:document.body});window.app=ot;e.default=ot}]);
(function(){"use strict";var n={456:function(n,e,t){var i=t(9242),r=t(3396),o=t(7139);const c={class:"container"};function a(n,e,t,i,a,u){const s=(0,r.up)("OneCard");return(0,r.wg)(),(0,r.iD)("div",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.options,((n,e)=>((0,r.wg)(),(0,r.j4)(s,{image:n,key:n,onClick:n=>u.expend(e),class:(0,o.C_)({active:a.activeItemIndex===e}),isActive:a.activeItemIndex===e},null,8,["image","onClick","class","isActive"])))),128))])}function u(n,e,t,i,c,a){return(0,r.wg)(),(0,r.iD)("div",{class:"slide",style:(0,o.j5)({backgroundImage:`url(${t.image.link})`}),onClick:e[0]||(e[0]=e=>n.$emit("click"))},[(0,r._)("h3",{class:(0,o.C_)(["slide__h3",{active:t.isActive}])},(0,o.zw)(t.image.name),3)],4)}var s={name:"OneCard",props:{image:{type:Object,default:null},isActive:{type:Boolean}},emits:["click"]},l=t(89);const f=(0,l.Z)(s,[["render",u]]);var d=f,v={name:"App",components:{OneCard:d},data(){return{options:[],activeItemIndex:null}},async created(){try{const n=await fetch("/data.json"),e=await n.json();this.options=e.car}catch(n){console.log(n.name)}},methods:{expend(n){this.activeItemIndex=n}}};const p=(0,l.Z)(v,[["render",a]]);var m=p;(0,i.ri)(m).mount("#app")}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return n[i](o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,i,r,o){if(!i){var c=1/0;for(l=0;l<n.length;l++){i=n[l][0],r=n[l][1],o=n[l][2];for(var a=!0,u=0;u<i.length;u++)(!1&o||c>=o)&&Object.keys(t.O).every((function(n){return t.O[n](i[u])}))?i.splice(u--,1):(a=!1,o<c&&(c=o));if(a){n.splice(l--,1);var s=r();void 0!==s&&(e=s)}}return e}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[i,r,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,i){var r,o,c=i[0],a=i[1],u=i[2],s=0;if(c.some((function(e){return 0!==n[e]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(u)var l=u(t)}for(e&&e(i);s<c.length;s++)o=c[s],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(l)},i=self["webpackChunkslider"]=self["webpackChunkslider"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(456)}));i=t.O(i)})();
//# sourceMappingURL=app.aa4d5f62.js.map
(function(){var e={5520:function(e,t,n){"use strict";var o=n(9242),r=n(3396);const i={class:"nav-bar"},u={class:"nav-links"},a={class:"login-link"},s=(0,r._)("i",{class:"fa-solid fa-cart-shopping"},null,-1);function l(e,t,n,o,l,c){const d=(0,r.up)("router-link"),f=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",i,[(0,r._)("div",u,[(0,r.Wm)(d,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Wm)(d,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),(0,r.Wm)(d,{to:"/products"},{default:(0,r.w5)((()=>[(0,r.Uk)("Products")])),_:1}),o.hasToken?((0,r.wg)(),(0,r.j4)(d,{key:0,to:"/manage"},{default:(0,r.w5)((()=>[(0,r.Uk)("Manage")])),_:1})):(0,r.kq)("",!0)]),(0,r._)("div",a,[(0,r.Wm)(d,{to:"/cart"},{default:(0,r.w5)((()=>[s])),_:1}),o.hasToken?((0,r.wg)(),(0,r.j4)(d,{key:0,onClick:o.logout,to:"/logout"},{default:(0,r.w5)((()=>[(0,r.Uk)("Logout")])),_:1},8,["onClick"])):((0,r.wg)(),(0,r.j4)(d,{key:1,to:"/login"},{default:(0,r.w5)((()=>[(0,r.Uk)("Login")])),_:1}))])]),(0,r.Wm)(f)],64)}var c=n(4870),d=n(4161),f={setup(){(0,r.bv)((async()=>{try{const e=await d.Z.get("https://e-shop.redglimmer.repl.co/");console.log("server response:",e.status)}catch(e){console.log(e)}}));const e=(0,c.iH)(localStorage.getItem("jwt")),t=async()=>{try{const t=localStorage.getItem("jwt"),n={Authorization:t};await d.Z.post("https://e-shop.redglimmer.repl.co/logout",{},{headers:n});localStorage.removeItem("jwt"),e.value=null}catch(t){console.log(t)}},n=(0,r.Fl)((()=>null!==e.value));return{jwt:e,hasToken:n,logout:t}}},p=n(89);const g=(0,p.Z)(f,[["render",l]]);var m=g,v=n(2483);const h=e=>((0,r.dD)("data-v-3a9757ab"),e=e(),(0,r.Cn)(),e),b={class:"home"},y=h((()=>(0,r._)("h1",null,"This is demo project of online shop.",-1))),w={class:"slideshow"},k={class:"slide-info"},_=["src"];function j(e,t,i,u,a,s){const l=(0,r.up)("Slide"),c=(0,r.up)("Carousel");return(0,r.wg)(),(0,r.iD)("div",b,[y,(0,r._)("div",w,[(0,r.Wm)(c,null,{default:(0,r.w5)((({currentSlide:e})=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.slides,((t,i)=>((0,r.wg)(),(0,r.j4)(l,{key:i},{default:(0,r.w5)((()=>[(0,r.wy)((0,r._)("div",k,[(0,r._)("img",{src:n(2715)(`./${t}.png`),alt:""},null,8,_)],512),[[o.F8,e===i+1]])])),_:2},1024)))),128))])),_:1})])])}const O={class:"carousel"};function S(e,t,n,o,i,u){return(0,r.wg)(),(0,r.iD)("div",O,[(0,r.WI)(e.$slots,"default",{currentSlide:o.currentSlide})])}var C={setup(){const e=(0,c.iH)(1),t=(0,c.iH)(null),n=()=>{e.value<t.value?e.value+=1:e.value=1};return(0,r.bv)((()=>{t.value=document.querySelectorAll(".slide").length,setInterval(n,3e3)})),{currentSlide:e}}};const T=(0,p.Z)(C,[["render",S]]);var x=T;const E={class:"slide"};function A(e,t,n,i,u,a){return(0,r.wg)(),(0,r.iD)("div",E,[(0,r.Wm)(o.uT,{name:"slide"},{default:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"default")])),_:3})])}var N={};const D=(0,p.Z)(N,[["render",A]]);var H=D,$={name:"Home",components:{Carousel:x,Slide:H},setup(){const e=["img1","img2","img3"];return{slides:e}}};const P=(0,p.Z)($,[["render",j],["__scopeId","data-v-3a9757ab"]]);var U=P;const W="/e-shop-site/",I=[{path:"/",redirect:{name:"Home"}},{path:W,name:"Home",component:U},{path:`${W}about`,name:"about",component:()=>n.e(443).then(n.bind(n,1422))},{path:`${W}products`,name:"products",component:()=>n.e(165).then(n.bind(n,4165))},{path:`${W}manage`,name:"manage",component:()=>n.e(94).then(n.bind(n,2094))},{path:`${W}cart`,name:"cart",component:()=>n.e(390).then(n.bind(n,1390))},{path:`${W}login`,name:"login",component:()=>n.e(701).then(n.bind(n,5701))},{path:`${W}register`,name:"register",component:()=>n.e(122).then(n.bind(n,2122))},{path:`${W}logout`,name:"logout",component:()=>n.e(68).then(n.bind(n,7068))}],L=(0,v.p7)({history:(0,v.PO)(W),routes:I});var F=L;(0,o.ri)(m).use(F).mount("#app")},2715:function(e,t,n){var o={"./about/profile1.png":8782,"./delivery.png":6323,"./img1.png":3142,"./img2.png":9598,"./img3.png":3146};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=2715},8782:function(e,t,n){"use strict";e.exports=n.p+"img/profile1.b6f85e13.png"},6323:function(e,t,n){"use strict";e.exports=n.p+"img/delivery.8321e3fc.png"},3142:function(e,t,n){"use strict";e.exports=n.p+"img/img1.074d30f6.png"},9598:function(e,t,n){"use strict";e.exports=n.p+"img/img2.804ba768.png"},3146:function(e,t,n){"use strict";e.exports=n.p+"img/img3.1c21b4b3.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var u=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var a=!0,s=0;s<o.length;s++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(a=!1,i<u&&(u=i));if(a){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{68:"80c65ddf",94:"dd079817",122:"3744e215",165:"1bbb0546",390:"43559aa8",443:"12bd4123",701:"072340a1"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{68:"a7e1252f",94:"a821ded8",122:"124f3f68",165:"14f540dd",390:"4df2755d",443:"8c14d85e",701:"858aea0d"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="e-shop:";n.l=function(o,r,i,u){if(e[o])e[o].push(r);else{var a,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[r];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/e-shop-site/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var u=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=u,s.request=a,i.parentNode&&i.parentNode.removeChild(i),r(s)}};return i.onerror=i.onload=u,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){r=u[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var u=n.miniCssF(o),a=n.p+u;if(t(u,a))return r();e(o,a,null,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={68:1,94:1,122:1,165:1,390:1,443:1,701:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var u=n.p+n.u(t),a=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}};n.l(u,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,u=o[0],a=o[1],s=o[2],l=0;if(u.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(s)var c=s(n)}for(t&&t(o);l<u.length;l++)i=u[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunke_shop"]=self["webpackChunke_shop"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5520)}));o=n.O(o)})();
//# sourceMappingURL=app.4be41b33.js.map
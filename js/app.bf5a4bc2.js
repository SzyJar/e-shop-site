(function(){var e={7416:function(e,t,n){"use strict";var o=n(9242),r=n(3396);const a={class:"nav-bar"},i={class:"nav-links"},s={class:"login-link"},c=(0,r._)("i",{class:"fa-solid fa-cart-shopping"},null,-1);function l(e,t,n,o,l,u){const d=(0,r.up)("router-link"),p=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",a,[(0,r._)("div",i,[(0,r.Wm)(d,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Wm)(d,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),(0,r.Wm)(d,{to:"/products"},{default:(0,r.w5)((()=>[(0,r.Uk)("Products")])),_:1}),o.hasToken?((0,r.wg)(),(0,r.j4)(d,{key:0,to:"/manage"},{default:(0,r.w5)((()=>[(0,r.Uk)("Manage")])),_:1})):(0,r.kq)("",!0)]),(0,r._)("div",s,[(0,r.Wm)(d,{to:"/cart"},{default:(0,r.w5)((()=>[c])),_:1}),o.hasToken?((0,r.wg)(),(0,r.j4)(d,{key:0,onClick:o.logout,to:"/logout"},{default:(0,r.w5)((()=>[(0,r.Uk)("Logout")])),_:1},8,["onClick"])):((0,r.wg)(),(0,r.j4)(d,{key:1,to:"/login"},{default:(0,r.w5)((()=>[(0,r.Uk)("Login")])),_:1}))])]),(0,r.Wm)(p)],64)}var u=n(4870),d=n(4161),p={setup(){(0,r.bv)((async()=>{try{const e=await d.Z.get("https://e-shop.redglimmer.repl.co/");console.log("server response:",e.status)}catch(e){console.log(e)}}));const e=(0,u.iH)(localStorage.getItem("jwt")),t=async()=>{try{const t=localStorage.getItem("jwt"),n={Authorization:t};localStorage.removeItem("jwt"),e.value=null;await d.Z.post("https://e-shop.redglimmer.repl.co/logout",{},{headers:n})}catch(t){console.log(t)}},n=(0,r.Fl)((()=>null!==e.value));return{jwt:e,hasToken:n,logout:t}}},f=n(89);const m=(0,f.Z)(p,[["render",l]]);var g=m,v=n(2483);const h=e=>((0,r.dD)("data-v-6f380baa"),e=e(),(0,r.Cn)(),e),b={class:"home"},w=h((()=>(0,r._)("h1",null,"This is demo project of online shop.",-1))),y={class:"slideshow"},k=["src"],_=h((()=>(0,r._)("h1",null,null,-1))),D={class:"featured"};function C(e,t,a,i,s,c){const l=(0,r.up)("Products");return(0,r.wg)(),(0,r.iD)("div",b,[w,(0,r._)("div",y,[(0,r.Wm)(o.uT,{name:i.transitionName,mode:"out-in"},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.iD)("div",{key:i.currentSlide,class:"slide-info"},[(0,r._)("img",{src:n(2715)(`./${i.slides[i.currentSlide]}.png`),alt:""},null,8,k)]))])),_:1},8,["name"])]),_,(0,r._)("div",D,[(0,r.Wm)(l,{header:"Take a look at our featured products!",size:"3"})])])}var S=n(2959),O={name:"Home",components:{Products:S["default"]},setup(){const e=["img1","img2","img3"],t=(0,u.iH)(0),n=(0,u.iH)("slide"),o=()=>{setInterval((()=>{t.value=(t.value+1)%e.length}),4e3)};return(0,r.bv)(o),{slides:e,currentSlide:t,transitionName:n}}};const j=(0,f.Z)(O,[["render",C],["__scopeId","data-v-6f380baa"]]);var N=j;const T=[{path:"/",name:"home",component:N},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,1679))},{path:"/products",name:"products",component:()=>Promise.resolve().then(n.bind(n,2959))},{path:"/manage",name:"manage",component:()=>n.e(702).then(n.bind(n,3702))},{path:"/cart",name:"cart",component:()=>n.e(453).then(n.bind(n,8453))},{path:"/login",name:"login",component:()=>n.e(701).then(n.bind(n,5701))},{path:"/register",name:"register",component:()=>n.e(122).then(n.bind(n,2122))},{path:"/logout",name:"logout",component:()=>n.e(68).then(n.bind(n,7068))},{path:"/:catchAll(.*)",name:"404",component:()=>n.e(228).then(n.bind(n,3228))}],I=(0,v.p7)({history:(0,v.PO)("/e-shop-site/"),mode:"hash",routes:T});var x=I;(0,o.ri)(g).use(x).mount("#app")},2959:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var o=n(3396),r=n(7139);const a=e=>((0,o.dD)("data-v-5829f6f2"),e=e(),(0,o.Cn)(),e),i={class:"container"},s={key:1,class:"products"},c=["onClick"],l=["src"],u={key:1,class:"img"},d=a((()=>(0,o._)("p",null,"No image",-1))),p=[d],f={key:2},m={key:3},g={key:2};function v(e,t,n,a,d,v){const h=(0,o.up)("Details"),b=(0,o.up)("LoadingSpinner");return(0,o.wg)(),(0,o.iD)("div",i,[a.detailsOn?((0,o.wg)(),(0,o.j4)(h,{key:0,onClose:a.detailsClose,details:a.productDetails},null,8,["onClose","details"])):(0,o.kq)("",!0),(0,o._)("h1",null,(0,r.zw)(n.header||"Choose from the variety of our products!"),1),0!==a.products.length?((0,o.wg)(),(0,o.iD)("div",s,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.products,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{onClick:t=>a.showDetails(e),class:"product",key:t},[(0,o._)("h2",null,(0,r.zw)(e.name),1),e.image?((0,o.wg)(),(0,o.iD)("img",{key:0,class:"img",src:e.image},null,8,l)):((0,o.wg)(),(0,o.iD)("div",u,p)),e.description?((0,o.wg)(),(0,o.iD)("p",f,(0,r.zw)(e.description),1)):(0,o.kq)("",!0),e.price?((0,o.wg)(),(0,o.iD)("p",m,"Price: "+(0,r.zw)(e.price.toFixed(2))+" Caps",1)):(0,o.kq)("",!0)],8,c)))),128))])):((0,o.wg)(),(0,o.iD)("div",g,[(0,o.Wm)(b)]))])}n(7658);var h=n(4870),b=n(4161);const w=(0,o._)("div",{class:"loading-circle"},[(0,o._)("div",{class:"spinner"})],-1),y=(0,o._)("p",null,"Retrieving product list from server",-1);function k(e,t){return(0,o.wg)(),(0,o.iD)(o.HY,null,[w,y],64)}var _=n(89);const D={},C=(0,_.Z)(D,[["render",k]]);var S=C,O=n(9242);const j=e=>((0,o.dD)("data-v-3f90be06"),e=e(),(0,o.Cn)(),e),N=["src"],T={key:1,class:"img"},I=j((()=>(0,o._)("p",null,"No image",-1))),x=[I],z={key:2},H={key:3},A=j((()=>(0,o._)("b",null,"Manufactured by:",-1))),E={key:4},P=j((()=>(0,o._)("b",null,"Released on:",-1))),U={key:5},L=j((()=>(0,o._)("b",null,"Price:",-1)));function q(e,t,n,a,i,s){return(0,o.wg)(),(0,o.iD)("div",{class:"backdrop",onClick:t[2]||(t[2]=(...e)=>a.close&&a.close(...e))},[(0,o._)("div",{class:"product",onClick:t[1]||(t[1]=(0,O.iM)((()=>{}),["stop"]))},[(0,o._)("h2",null,(0,r.zw)(n.details.name),1),n.details.image?((0,o.wg)(),(0,o.iD)("img",{key:0,class:"img",src:n.details.image},null,8,N)):((0,o.wg)(),(0,o.iD)("div",T,x)),n.details.description?((0,o.wg)(),(0,o.iD)("p",z,(0,r.zw)(n.details.description),1)):(0,o.kq)("",!0),n.details.company?((0,o.wg)(),(0,o.iD)("p",H,[A,(0,o.Uk)(" "+(0,r.zw)(n.details.company),1)])):(0,o.kq)("",!0),n.details.releaseDate?((0,o.wg)(),(0,o.iD)("p",E,[P,(0,o.Uk)(" "+(0,r.zw)(new Date(n.details.releaseDate).toLocaleDateString()),1)])):(0,o.kq)("",!0),n.details.price?((0,o.wg)(),(0,o.iD)("p",U,[L,(0,o.Uk)(" "+(0,r.zw)(n.details.price.toFixed(2))+" Caps",1)])):(0,o.kq)("",!0),(0,o._)("button",{onClick:t[0]||(t[0]=(...e)=>a.addItem&&a.addItem(...e)),class:(0,r.C_)(a.inCart?"cursor-block":"")},(0,r.zw)(a.inCart?"Already in cart":"Add to cart"),3)])])}var F={props:["details"],setup(e,{emit:t}){const n=()=>{t("close")},r=(0,h.iH)(!1);(0,o.bv)((()=>{const t=localStorage.getItem("cart"),n=JSON.parse(t)||[];n[0]&&n.some((t=>t.name===e.details.name))&&(r.value=!0)}));const a=(0,h.iH)(),i=()=>{const n=localStorage.getItem("cart");try{const o=JSON.parse(n)||[];o[0]&&o.some((t=>t.name===e.details.name))||(o.push(e.details),localStorage.setItem("cart",JSON.stringify(o)),a.value=o),t("close")}catch(o){console.log(o),localStorage.removeItem("cart")}};return{inCart:r,close:n,addItem:i}}};const W=(0,_.Z)(F,[["render",q],["__scopeId","data-v-3f90be06"]]);var Z=W,M={components:{LoadingSpinner:S,Details:Z},props:["size","header"],setup(e){const t=(0,h.iH)(null);e.size&&(t.value=parseInt(e.size));const n=(0,h.iH)([]),r=async()=>{try{const e=await b.Z.get("https://e-shop.redglimmer.repl.co/product");e.data.forEach((e=>{t.value?t.value>n.value.length&&n.value.push(e):n.value.push(e)}))}catch(e){console.log(e),setTimeout(r,4e3)}};(0,o.bv)((async()=>{await r()}));const a=(0,h.iH)(!1),i=(0,h.iH)({name:"",image:"",description:"",releaseDate:"",company:"",price:""}),s=e=>{i.value={name:e.name,image:e.image,description:e.description,releaseDate:e.releaseDate,company:e.company,price:e.price},a.value=!0},c=()=>{a.value=!1};return{products:n,detailsOn:a,productDetails:i,showDetails:s,detailsClose:c}}};const B=(0,_.Z)(M,[["render",v],["__scopeId","data-v-5829f6f2"]]);var J=B},2715:function(e,t,n){var o={"./about/profile1.png":8782,"./delivery.png":6323,"./img1.png":3142,"./img2.png":9598,"./img3.png":3146};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=2715},8782:function(e,t,n){"use strict";e.exports=n.p+"img/profile1.b6f85e13.png"},6323:function(e,t,n){"use strict";e.exports=n.p+"img/delivery.8321e3fc.png"},3142:function(e,t,n){"use strict";e.exports=n.p+"img/img1.074d30f6.png"},9598:function(e,t,n){"use strict";e.exports=n.p+"img/img2.804ba768.png"},3146:function(e,t,n){"use strict";e.exports=n.p+"img/img3.1c21b4b3.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{68:"30d5f1a3",122:"5e23bceb",228:"79819a07",443:"204ee2fd",453:"c7be1bec",701:"dfa7ace8",702:"65918318"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{68:"a7e1252f",122:"124f3f68",228:"cd4222b1",443:"cd7aac26",453:"e814ba98",701:"858aea0d",702:"43dc651b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="e-shop:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[r];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/e-shop-site/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode&&a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return r();e(o,s,null,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={68:1,122:1,228:1,443:1,453:1,701:1,702:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],c=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(t&&t(o);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunke_shop"]=self["webpackChunke_shop"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7416)}));o=n.O(o)})();
//# sourceMappingURL=app.bf5a4bc2.js.map
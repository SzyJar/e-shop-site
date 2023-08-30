"use strict";(self["webpackChunke_shop"]=self["webpackChunke_shop"]||[]).push([[472],{3472:function(e,t,l){l.r(t),l.d(t,{default:function(){return P}});var a=l(3396),r=l(9242),n=l(7139);const o=e=>((0,a.dD)("data-v-0dea79b0"),e=e(),(0,a.Cn)(),e),u={class:"manage"},p={class:"form"},d=o((()=>(0,a._)("h1",null,"Add a new product to the database",-1))),i=o((()=>(0,a._)("label",null,"Name:",-1))),s={key:0,class:"error"},c=o((()=>(0,a._)("h1",null,"Additional product data (optional)",-1))),m=o((()=>(0,a._)("label",null,"Price:",-1))),h=o((()=>(0,a._)("label",null,"Image link:",-1))),_=o((()=>(0,a._)("label",null,"Description:",-1))),v=o((()=>(0,a._)("label",null,"Release date:",-1))),g=o((()=>(0,a._)("label",null,"Producer:",-1))),y=o((()=>(0,a._)("div",{class:"submit"},[(0,a._)("button",null,"SUBMIT")],-1))),b={class:"preview-container"},w=o((()=>(0,a._)("h1",null,"Preview your product",-1))),f={class:"preview"},D={class:"image"},k=["src"];function S(e,t,o,S,U,q){const x=(0,a.up)("Details");return(0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",p,[(0,a._)("form",{onSubmit:t[6]||(t[6]=(0,r.iM)(((...e)=>S.handleSubmit&&S.handleSubmit(...e)),["prevent"]))},[d,i,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>S.name=e),maxlength:"30",required:"",placeholder:"Enter product name (required)"},null,512),[[r.nr,S.name]]),S.nameError?((0,a.wg)(),(0,a.iD)("div",s,(0,n.zw)(S.nameError),1)):(0,a.kq)("",!0),c,m,(0,a.wy)((0,a._)("input",{type:"number",step:"0.01","onUpdate:modelValue":t[1]||(t[1]=e=>S.product.price=e),placeholder:"0.00"},null,512),[[r.nr,S.product.price]]),h,(0,a.wy)((0,a._)("input",{type:"url","onUpdate:modelValue":t[2]||(t[2]=e=>S.product.image=e),placeholder:"https://images.unsplash.com/photo-1573376670774-4427757f7963"},null,512),[[r.nr,S.product.image]]),_,(0,a.wy)((0,a._)("textarea",{id:"description","onUpdate:modelValue":t[3]||(t[3]=e=>S.product.description=e),placeholder:"Enter some information about the product"},null,512),[[r.nr,S.product.description]]),v,(0,a.wy)((0,a._)("input",{type:"date","onUpdate:modelValue":t[4]||(t[4]=e=>S.product.releaseDate=e)},null,512),[[r.nr,S.product.releaseDate]]),g,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=e=>S.product.company=e),placeholder:"Enter company name"},null,512),[[r.nr,S.product.company]]),y],32)]),(0,a._)("div",b,[w,(0,a._)("div",f,[(0,a.Wm)(x,{details:S.product,preview:!0},null,8,["details"])])]),(0,a._)("div",D,[(0,a._)("img",{src:l(6323),alt:"Delivery Image"},null,8,k)])])}l(7658);var U=l(4870),q=l(4161),x=l(4343),E={components:{Details:x.Z},setup(){const e=(0,U.iH)(""),t=(0,U.iH)({name:null,price:null,company:null,releaseDate:null,image:null,description:null});t.value.name=(0,a.Fl)({get:()=>e.value,set:e=>e});const l=(0,U.iH)(null),r=(0,a.FN)(),n=r.appContext.config.globalProperties.$router,o=async()=>{try{const l=localStorage.getItem("jwt"),a={Authorization:l};await q.Z.post(`https://e-shop.redglimmer.repl.co/product/${e.value}`,t.value,{headers:a});n.push({name:"products"})}catch(a){a.request?409===a.request.status?l.value="Product already exist":401===a.request.status&&(localStorage.removeItem("jwt"),l.value="You are not authorized, please log in or register",setTimeout(n.push({name:"login"}),1e3)):(console.log(a),l.value="")}};return{name:e,product:t,nameError:l,handleSubmit:o}}},I=l(89);const V=(0,I.Z)(E,[["render",S],["__scopeId","data-v-0dea79b0"]]);var P=V}}]);
//# sourceMappingURL=472.d036a993.js.map
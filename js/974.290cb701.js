"use strict";(self["webpackChunke_shop"]=self["webpackChunke_shop"]||[]).push([[974],{1974:function(e,t,l){l.r(t),l.d(t,{default:function(){return q}});var a=l(3396),r=l(9242),n=l(7139);const o=e=>((0,a.dD)("data-v-76998722"),e=e(),(0,a.Cn)(),e),u={class:"manage"},p=o((()=>(0,a._)("h1",null,"Add a new product to the database",-1))),d=o((()=>(0,a._)("label",null,"Name:",-1))),i={key:0,class:"error"},c=o((()=>(0,a._)("h1",null,"Additional product data (optional)",-1))),s=o((()=>(0,a._)("label",null,"Price:",-1))),m=o((()=>(0,a._)("label",null,"Image link:",-1))),h=o((()=>(0,a._)("label",null,"Description:",-1))),_=o((()=>(0,a._)("label",null,"Release date:",-1))),g=o((()=>(0,a._)("label",null,"Producer:",-1))),y=o((()=>(0,a._)("div",{class:"submit"},[(0,a._)("button",null,"SUBMIT")],-1))),b={class:"image"},v=["src"];function w(e,t,o,w,f,D){return(0,a.wg)(),(0,a.iD)("div",u,[p,(0,a._)("form",{onSubmit:t[6]||(t[6]=(0,r.iM)(((...e)=>w.handleSubmit&&w.handleSubmit(...e)),["prevent"]))},[d,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>w.name=e),maxlength:"30",required:"",placeholder:"Enter product name (required)"},null,512),[[r.nr,w.name]]),w.nameError?((0,a.wg)(),(0,a.iD)("div",i,(0,n.zw)(w.nameError),1)):(0,a.kq)("",!0),c,s,(0,a.wy)((0,a._)("input",{type:"number",step:"0.01","onUpdate:modelValue":t[1]||(t[1]=e=>w.product.price=e),placeholder:"0.00"},null,512),[[r.nr,w.product.price]]),m,(0,a.wy)((0,a._)("input",{type:"url","onUpdate:modelValue":t[2]||(t[2]=e=>w.product.image=e),placeholder:"https://images.unsplash.com/photo-1573376670774-4427757f7963"},null,512),[[r.nr,w.product.image]]),h,(0,a.wy)((0,a._)("textarea",{id:"description","onUpdate:modelValue":t[3]||(t[3]=e=>w.product.description=e),placeholder:"Enter some information about the product"},null,512),[[r.nr,w.product.description]]),_,(0,a.wy)((0,a._)("input",{type:"date","onUpdate:modelValue":t[4]||(t[4]=e=>w.product.releaseDate=e)},null,512),[[r.nr,w.product.releaseDate]]),g,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=e=>w.product.company=e),placeholder:"Enter company name"},null,512),[[r.nr,w.product.company]]),y],32),(0,a._)("div",b,[(0,a._)("img",{src:l(6323),alt:"Delivery Image"},null,8,v)])])}l(7658);var f=l(4870),D=l(4161),k={setup(){const e=(0,f.iH)(""),t=(0,f.iH)({price:null,company:null,releaseDate:null,image:null,description:null}),l=(0,f.iH)(null),r=(0,a.FN)(),n=r.appContext.config.globalProperties.$router,o=async()=>{try{const l=localStorage.getItem("jwt"),a={Authorization:l};await D.Z.post(`https://e-shop.redglimmer.repl.co/product/${e.value}`,t.value,{headers:a});n.push({name:"products"})}catch(a){a.request?409===a.request.status?l.value="Product already exist":401===a.request.status&&(localStorage.removeItem("jwt"),l.value="You are not authorized, please log in or register",setTimeout(n.push({name:"login"}),1e3)):(console.log(a),l.value="")}};return{name:e,product:t,nameError:l,handleSubmit:o}}},S=l(89);const U=(0,S.Z)(k,[["render",w],["__scopeId","data-v-76998722"]]);var q=U}}]);
//# sourceMappingURL=974.290cb701.js.map
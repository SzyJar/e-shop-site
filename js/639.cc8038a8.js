"use strict";(self["webpackChunke_shop"]=self["webpackChunke_shop"]||[]).push([[639],{6639:function(e,r,s){s.r(r),s.d(r,{default:function(){return H}});var a=s(3396),t=s(9242),o=s(7139);const l=e=>((0,a.dD)("data-v-12379baa"),e=e(),(0,a.Cn)(),e),u={key:0,class:"login"},n=l((()=>(0,a._)("h1",null,"Register new Account",-1))),d=l((()=>(0,a._)("label",null,"Name:",-1))),i={key:0,class:"error"},c=l((()=>(0,a._)("label",null,"Password:",-1))),p={key:1,class:"error"},w=l((()=>(0,a._)("label",null,"Repeat password:",-1))),v={key:2,class:"error"},m=l((()=>(0,a._)("div",{class:"submit"},[(0,a._)("button",null,"Register")],-1))),g={class:"submit"},h=l((()=>(0,a._)("button",null,"Use existing Account instead",-1))),_={key:1,class:"success"},b=l((()=>(0,a._)("h1",null,"Successfully Registered!",-1))),y=l((()=>(0,a._)("p",null,"You are now ready to manage products!",-1))),k=[b,y];function D(e,r,s,l,b,y){const D=(0,a.up)("router-link");return l.jwt?((0,a.wg)(),(0,a.iD)("div",_,k)):((0,a.wg)(),(0,a.iD)("div",u,[n,(0,a._)("form",{onSubmit:r[3]||(r[3]=(0,t.iM)(((...e)=>l.handleSubmit&&l.handleSubmit(...e)),["prevent"]))},[d,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>l.userData.name=e),maxlength:"30",required:""},null,512),[[t.nr,l.userData.name]]),l.userError?((0,a.wg)(),(0,a.iD)("div",i,(0,o.zw)(l.userError),1)):(0,a.kq)("",!0),c,(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":r[1]||(r[1]=e=>l.userData.password=e),required:""},null,512),[[t.nr,l.userData.password]]),l.passwordError?((0,a.wg)(),(0,a.iD)("div",p,(0,o.zw)(l.passwordError),1)):(0,a.kq)("",!0),w,(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":r[2]||(r[2]=e=>l.repeatPassword=e),required:""},null,512),[[t.nr,l.repeatPassword]]),l.passwordError?((0,a.wg)(),(0,a.iD)("div",v,(0,o.zw)(l.passwordError),1)):(0,a.kq)("",!0),m],32),(0,a._)("div",g,[(0,a.Wm)(D,{to:"/login"},{default:(0,a.w5)((()=>[h])),_:1})])]))}var f=s(4870),q=s(4161),E={setup(){const e=(0,f.iH)({name:"",password:""}),r=(0,f.iH)(localStorage.getItem("jwt")),s=(0,f.iH)(""),a=(0,f.iH)(""),t=(0,f.iH)(""),o=async()=>{try{const r=await q.Z.post("https://e-shop.redglimmer.repl.co/signup",e.value);localStorage.setItem("jwt",JSON.parse(r.request.response).accessToken),location.reload()}catch(r){r.request?409===r.request.status&&(t.value="Username already exists",a.value=""):(console.log(r),a.value="An error has occurred",t.value="An error has occurred")}},l=()=>{e.value.password.length<8?a.value="Passwords should be at least 8 characters long":e.value.password!==s.value?a.value="Password does not match":(a.value=null,o())};return{userData:e,passwordError:a,repeatPassword:s,userError:t,jwt:r,handleSubmit:l}}},S=s(89);const P=(0,S.Z)(E,[["render",D],["__scopeId","data-v-12379baa"]]);var H=P}}]);
//# sourceMappingURL=639.cc8038a8.js.map
import{u as c,c as f,w as m,o as n,a as t,b as a,H as p,d as o,t as l,g,B as _,e as b,n as w,f as h}from"./app-26ecd550.js";import{_ as k}from"./GuestLayout-e9b5d359.js";import{_ as v,a as y,b as V}from"./TextInput-bd26cd28.js";import{_ as x}from"./PrimaryButton-61fe9c93.js";import"./index-99a0f9d6.js";import"./SwitchDarkMode-d8a1dc47.js";const B={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},$={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},N=["onSubmit"],S={class:"flex items-center justify-end mt-4"},D={__name:"ForgotPassword",props:{status:String},setup(r){const e=c({email:""}),d=()=>{e.post(route("password.email"))};return(s,i)=>(n(),f(k,null,{default:m(()=>[t(a(p),{title:s.lang().label.password_forgot},null,8,["title"]),o("div",B,l(s.lang().label.forgot_password),1),r.status?(n(),g("div",$,l(r.status),1)):_("",!0),o("form",{onSubmit:h(d,["prevent"])},[o("div",null,[t(v,{for:"email",value:s.lang().label.email},null,8,["value"]),t(y,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:a(e).email,"onUpdate:modelValue":i[0]||(i[0]=u=>a(e).email=u),required:"",autofocus:"",autocomplete:"username",placeholder:s.lang().placeholder.email},null,8,["modelValue","placeholder"]),t(V,{class:"mt-2",message:a(e).errors.email},null,8,["message"])]),o("div",S,[t(x,{class:w({"opacity-25":a(e).processing}),disabled:a(e).processing},{default:m(()=>[b(l(a(e).processing?s.lang().button.forgot_password+"...":s.lang().button.forgot_password),1)]),_:1},8,["class","disabled"])])],40,N)]),_:1}))}};export{D as default};

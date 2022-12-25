import{O as I,x as j,Q as b,R as V,g,a as r,b as d,w as c,F as k,o as i,H as B,d as s,h as m,v as h,e as D,t as o,c as w,D as P,A as N,C as U}from"./app-26ecd550.js";import{_ as A,a as E}from"./AuthenticatedLayout-5bd31b61.js";import{a as F}from"./TextInput-bd26cd28.js";import{_ as x}from"./PrimaryButton-61fe9c93.js";import{_ as H}from"./SelectInput-027eaa7f.js";import{_ as $}from"./DangerButton-8cef36c0.js";import{r as O,a as _,_ as G,b as L}from"./Pagination-898bc216.js";import M from"./Create-e38030e9.js";import Q from"./Edit-237b1d75.js";import R from"./Delete-d1efa0a5.js";import T from"./DeleteBulk-57c9d13c.js";import{_ as q}from"./Checkbox-539d614c.js";import"./index-99a0f9d6.js";import"./SecondaryButton-8f0495a8.js";const z={class:"space-y-4"},J={class:"px-4 sm:px-0"},K={class:"rounded-lg overflow-hidden w-fit"},W={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},X={class:"flex justify-between p-2"},Y={class:"flex space-x-2"},Z={class:"overflow-x-auto scrollbar-table"},ee={class:"w-full"},se={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},te={class:"dark:bg-gray-900/50 text-left"},ae={class:"px-2 py-4 text-center"},le=s("th",{class:"px-2 py-4 text-center"},"#",-1),re={class:"flex justify-between items-center"},oe={class:"flex justify-between items-center"},ne=s("span",null,"Guard",-1),de={class:"flex justify-between items-center"},ie={class:"flex justify-between items-center"},pe=s("th",{class:"px-2 py-4 sr-only"},"Action",-1),ce={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},me=["value"],ue={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},fe={class:"whitespace-nowrap py-4 px-2 sm:py-3"},he={class:"whitespace-nowrap py-4 px-2 sm:py-3"},_e={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ye={class:"whitespace-nowrap py-4 px-2 sm:py-3"},be={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ge={class:"flex justify-center items-center"},we={class:"rounded-md overflow-hidden"},ve={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},Ae={__name:"Index",props:{title:String,filters:Object,permissions:Object,breadcrumbs:Object,perPage:Number},setup(u){const n=u,e=I({params:{search:n.filters.search,field:n.filters.field,order:n.filters.order,perPage:n.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,permission:null,dataSet:[{label:"10",value:10},{label:"20",value:20},{label:"50",value:50},{label:"100",value:100}]}),f=l=>{e.params.field=l,e.params.order=e.params.order==="asc"?"desc":"asc"};j(()=>b.exports._.cloneDeep(e.params),b.exports.debounce(()=>{let l=b.exports.pickBy(e.params);V.Inertia.get(route("permission.index"),l,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const C=l=>{var t;l.target.checked===!1?e.selectedId=[]:(t=n.permissions)==null||t.data.forEach(p=>{e.selectedId.push(p.id)})},S=()=>{var l;((l=n.permissions)==null?void 0:l.data.length)==e.selectedId.length?e.multipleSelect=!0:e.multipleSelect=!1};return(l,t)=>{const p=N("tooltip");return i(),g(k,null,[r(d(B),{title:n.title},null,8,["title"]),r(A,null,{default:c(()=>[r(E,{title:u.title,breadcrumbs:u.breadcrumbs},null,8,["title","breadcrumbs"]),s("div",z,[s("div",J,[s("div",K,[m(r(x,{class:"rounded-none",onClick:t[0]||(t[0]=a=>e.createOpen=!0)},{default:c(()=>[D(o(l.lang().button.add),1)]),_:1},512),[[h,l.can(["create permission"])]]),r(M,{show:e.createOpen,onClose:t[1]||(t[1]=a=>e.createOpen=!1)},null,8,["show"]),r(Q,{show:e.editOpen,onClose:t[2]||(t[2]=a=>e.editOpen=!1),permission:e.permission},null,8,["show","permission"]),r(R,{show:e.deleteOpen,onClose:t[3]||(t[3]=a=>e.deleteOpen=!1),permission:e.permission},null,8,["show","permission"]),r(T,{show:e.deleteBulkOpen,onClose:t[4]||(t[4]=a=>(e.deleteBulkOpen=!1,e.multipleSelect=!1,e.selectedId=[])),selectedId:e.selectedId},null,8,["show","selectedId"])])]),s("div",W,[s("div",X,[s("div",Y,[r(H,{modelValue:e.params.perPage,"onUpdate:modelValue":t[5]||(t[5]=a=>e.params.perPage=a),dataSet:e.dataSet},null,8,["modelValue","dataSet"]),m((i(),w($,{onClick:t[6]||(t[6]=a=>e.deleteBulkOpen=!0),class:"px-3 py-1.5"},{default:c(()=>[r(d(O),{class:"w-5 h-5"})]),_:1})),[[h,e.selectedId.length!=0&&l.can(["delete permission"])],[p,l.lang().tooltip.delete_selected]])]),r(F,{modelValue:e.params.search,"onUpdate:modelValue":t[7]||(t[7]=a=>e.params.search=a),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:l.lang().placeholder.search},null,8,["modelValue","placeholder"])]),s("div",Z,[s("table",ee,[s("thead",se,[s("tr",te,[s("th",ae,[r(q,{checked:e.multipleSelect,"onUpdate:checked":t[8]||(t[8]=a=>e.multipleSelect=a),onChange:C},null,8,["checked"])]),le,s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[9]||(t[9]=a=>f("name"))},[s("div",re,[s("span",null,o(l.lang().label.name),1),r(d(_),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[10]||(t[10]=a=>f("guard"))},[s("div",oe,[ne,r(d(_),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[11]||(t[11]=a=>f("created_at"))},[s("div",de,[s("span",null,o(l.lang().label.created),1),r(d(_),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[12]||(t[12]=a=>f("updated_at"))},[s("div",ie,[s("span",null,o(l.lang().label.updated),1),r(d(_),{class:"w-4 h-4"})])]),pe])]),s("tbody",null,[(i(!0),g(k,null,P(u.permissions.data,(a,v)=>(i(),g("tr",{key:v,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[s("td",ce,[m(s("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",onChange:S,value:a.id,"onUpdate:modelValue":t[13]||(t[13]=y=>e.selectedId=y)},null,40,me),[[U,e.selectedId]])]),s("td",ue,o(++v),1),s("td",fe,o(a.name),1),s("td",he,o(a.guard_name),1),s("td",_e,o(a.created_at),1),s("td",ye,o(a.updated_at),1),s("td",be,[s("div",ge,[s("div",we,[m((i(),w(x,{type:"button",onClick:y=>(e.editOpen=!0,e.permission=a),class:"px-2 py-1.5 rounded-none"},{default:c(()=>[r(d(L),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[h,l.can(["update permission"])],[p,l.lang().tooltip.edit]]),m((i(),w($,{type:"button",onClick:y=>(e.deleteOpen=!0,e.permission=a),class:"px-2 py-1.5 rounded-none"},{default:c(()=>[r(d(O),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[h,l.can(["delete permission"])],[p,l.lang().tooltip.delete]])])])])]))),128))])])]),s("div",ve,[r(G,{links:n.permissions,filters:e.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{Ae as default};

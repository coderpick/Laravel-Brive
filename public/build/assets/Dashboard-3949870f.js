import{_ as c,a as u,r as b,b as n,c as g,d as h}from"./AuthenticatedLayout-52a44165.js";import{f as m,a as s,u as l,w as d,F as f,o as p,X as _,b as e,t as r,g as a}from"./app-11bf830f.js";import"./index-73ed916b.js";const v={class:"space-y-4"},x={class:"text-white dark:text-gray-100 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4 overflow-hidden shadow-sm"},w={class:"rounded-t-none sm:rounded-t-lg px-4 py-6 flex justify-between bg-blue-600/70 dark:bg-blue-500/80 items-center overflow-hidden"},k={class:"flex flex-col"},y={class:"text-4xl font-bold"},j={class:"text-md md:text-lg uppercase"},N={class:"bg-blue-600 dark:bg-blue-600/80 rounded-b-none sm:rounded-b-lg p-2 overflow-hidden hover:bg-blue-600/90 dark:hover:bg-blue-600/70"},$={class:"rounded-t-none sm:rounded-t-lg px-4 py-6 flex justify-between bg-green-600/70 dark:bg-green-500/80 items-center overflow-hidden"},D={class:"flex flex-col"},B={class:"text-4xl font-bold"},F={class:"text-md md:text-lg uppercase"},V={class:"bg-green-600 dark:bg-green-600/80 rounded-b-none sm:rounded-b-lg p-2 overflow-hidden hover:bg-green-600/90 dark:hover:bg-green-600/70"},C={class:"rounded-t-none sm:rounded-t-lg px-4 py-6 flex justify-between bg-amber-600/70 dark:bg-amber-500/80 items-center overflow-hidden"},E={class:"flex flex-col"},S={class:"text-4xl font-bold"},X={class:"text-md md:text-lg uppercase"},q={class:"bg-amber-600 dark:bg-amber-600/80 rounded-b-none sm:rounded-b-lg p-2 overflow-hidden hover:bg-amber-600/90 dark:hover:bg-amber-600/70"},I={__name:"Dashboard",props:{users:Number,roles:Number,permissions:Number},setup(i){const t=i;return(o,z)=>(p(),m(f,null,[s(l(_),{title:"Dashboard"}),s(c,null,{default:d(()=>[s(u,{title:"Dashboard",breadcrumbs:[]}),e("div",v,[e("div",x,[e("div",null,[e("div",w,[e("div",k,[e("p",y,r(t.users),1),e("p",j,r(o.lang().label.user),1)]),e("div",null,[s(l(b),{class:"w-16 h-auto"})])]),e("div",N,[s(l(a),{href:o.route("user.index"),class:"flex justify-between items-center"},{default:d(()=>[e("p",null,r(o.lang().label.more),1),s(l(n),{class:"w-5 h-5"})]),_:1},8,["href"])])]),e("div",null,[e("div",$,[e("div",D,[e("p",B,r(t.roles),1),e("p",F,r(o.lang().label.role),1)]),e("div",null,[s(l(g),{class:"w-16 h-auto"})])]),e("div",V,[s(l(a),{href:o.route("role.index"),class:"flex justify-between items-center"},{default:d(()=>[e("p",null,r(o.lang().label.more),1),s(l(n),{class:"w-5 h-5"})]),_:1},8,["href"])])]),e("div",null,[e("div",C,[e("div",E,[e("p",S,r(t.permissions),1),e("p",X,r(o.lang().label.permission),1)]),e("div",null,[s(l(h),{class:"w-16 h-auto"})])]),e("div",q,[s(l(a),{href:o.route("permission.index"),class:"flex justify-between items-center"},{default:d(()=>[e("p",null,r(o.lang().label.more),1),s(l(n),{class:"w-5 h-5"})]),_:1},8,["href"])])])])])]),_:1})],64))}};export{I as default};
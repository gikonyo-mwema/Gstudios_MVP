(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6374],{2529:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[ref]/advisors/security",function(){return l(15100)}])},15100:function(e,t,l){"use strict";l.r(t);var i=l(52322),s=l(2784),n=l(99959),r=l(56929),a=l(36199),u=l(98032),c=l(38660),f=l(11170),d=l(96849),o=l(14698),v=l(52903),h=l(14528),p=l(6117),m=l(61030);let _=()=>{var e;let t=(0,h.Vm)(),{preset:l,id:m}=(0,n.UO)(),[_,L]=(0,s.useState)([{level:a.l.ERROR,filters:[]},{level:a.l.WARN,filters:[]},{level:a.l.INFO,filters:[]}]),[b,x]=(0,s.useState)(null!=l?l:a.l.ERROR),[g,j]=(0,s.useState)(null),{data:E,isLoading:R,isRefetching:N,refetch:O}=(0,v.U)({projectRef:null==t?void 0:t.ref}),T=[],S=(0,s.useMemo)(()=>[...null!=E?E:[],...T].filter(e=>e.categories.includes("SECURITY")),[E]);(0,s.useEffect)(()=>{var e;m&&j(null!==(e=S.find(e=>e.cache_key===m))&&void 0!==e?e:null)},[m,S]);let w=(null===(e=_.find(e=>e.level===b))||void 0===e?void 0:e.filters)||[],k=S.filter(e=>e.level===b).filter(e=>w.length>0?w.includes(e.name):e),y=u.EV.filter(e=>S.some(t=>t.name===e.name&&t.level===b)).map(e=>({name:e.title,value:e.name}));return(0,i.jsxs)("div",{className:"h-full flex flex-col",children:[(0,i.jsx)(o.ph,{className:"py-4 px-6 !mb-0",title:"Security Advisor",docsUrl:"https://supabase.com/docs/guides/database/database-linter"}),(0,i.jsx)(r.Z,{activeLints:S,isLoading:R,currentTab:b,setCurrentTab:x,setSelectedLint:j}),(0,i.jsx)(f.Z,{filterOptions:y,activeLints:S,currentTab:b,filters:_,setFilters:L}),(0,i.jsx)(p.O,{loading:N}),(0,i.jsx)(c.Z,{filteredLints:k,currentTab:b,selectedLint:g,setSelectedLint:j,isLoading:R}),(0,i.jsx)(d.Z,{hideDbInspectCTA:!0,isLoading:R,isRefetching:N,refetch:()=>{O()}})]})};_.getLayout=e=>(0,i.jsx)(m.Z,{title:"Linter",children:e}),t.default=_}},function(e){e.O(0,[667,9678,8183,8421,3844,9785,7263,9818,9595,5191,7127,9104,6917,7309,9229,3832,8475,626,496,1273,8020,7298,4754,9774,2888,179],function(){return e(e.s=2529)}),_N_E=e.O()}]);
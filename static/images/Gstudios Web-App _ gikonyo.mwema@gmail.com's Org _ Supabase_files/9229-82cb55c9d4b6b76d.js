"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9229],{89160:function(e,t,r){r.d(t,{v:function(){return R}});var s=r(52322),a=r(2784),n=r(61786),o=r(32079),l=r(99959),i=r(34002),c=r(39097),d=r.n(c),u=r(5632),p=r(62202),f=r(750),h=r(61373),x=r(34503),m=r(33286),b=r(97305),g=r(70854),j=r(2515),v=function(e){return(0,s.jsx)(j.Z,{icon:g.Z,...e})},y=r(48228),N=r(31696);async function w(e){let{message:t,pathname:r,projectRef:s,organizationSlug:a}=e,{data:n,error:o}=await (0,N.v_)("/platform/feedback/send",{body:{message:t,category:"Feedback",tags:["dashboard-feedback"],projectRef:s,organizationSlug:a,pathname:r}});return o&&(0,N.S3)(o),n}let k=function(){let{onError:e,...t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,y.D)(e=>w(e),{async onError(t,r,s){void 0===e?p.ZP.error("Failed to submit feedback: ".concat(t.message)):e(t,r,s)},...t})};var Z=r(82667),C=r(20364);let z=e=>{let t="image/png",r=atob(e.substr("data:".concat(t,";base64,").length)),s=[];for(let e=0;e<r.length;e+=1024){let t=r.slice(e,e+1024),a=Array(t.length);for(let e=0;e<t.length;e++)a[e]=t.charCodeAt(e);let n=new Uint8Array(a);s.push(n)}return new Blob(s,{type:t})},S=async(e,t)=>{let r=(0,C.eI)("https://obuldanrptloktxcffvn.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9idWxkYW5ycHRsb2t0eGNmZnZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyNjkzMjYsImV4cCI6MjAwNzg0NTMyNn0.1S6qpBbHtEmGuMsIx5UOhRiFd4YbVv-yLTrLk6tVGmM",{auth:{persistSession:!1,autoRefreshToken:!1,multiTab:!1,detectSessionInUrl:!1,localStorage:{getItem:e=>void 0,setItem:(e,t)=>{},removeItem:e=>{}}}}),s=z(t),a="".concat(e||"no-project","/").concat((0,Z.k$)(),".png"),{data:n,error:o}=await r.storage.from("feedback-attachments").upload(a,s,{cacheControl:"3600"});if(o){console.error("Failed to upload:",o);return}if(n){let{data:e}=await r.storage.from("feedback-attachments").createSignedUrls([n.path],31536e4);return null==e?void 0:e[0].signedUrl}};var I=e=>{let{onClose:t,feedback:r,setFeedback:n,screenshot:c,setScreenshot:g}=e,j="feedback_content",y="screenshot",N=(0,u.useRouter)(),{ref:w,slug:C}=(0,l.UO)(),I=(0,a.useRef)(null),R=(0,a.useRef)(),[_,F]=(0,a.useState)(!1),[E,U]=(0,a.useState)(!1),{mutate:P}=k({onSuccess:()=>{n(""),g(void 0),localStorage.removeItem(j),localStorage.removeItem(y),p.ZP.success("Feedback sent. Thank you!\n\nPlease be aware that we do not provide responses to feedback. If you require assistance or a reply, consider submitting a support ticket."),F(!1)},onError:e=>{p.ZP.error("Failed to submit feedback: ".concat(e.message)),F(!1)}});(0,a.useEffect)(()=>{let e=localStorage.getItem(j);e&&n(e);let t=localStorage.getItem(y);t&&g(t)},[]),(0,a.useEffect)(()=>{localStorage.setItem(j,r)},[r]),(0,a.useEffect)(()=>{c&&localStorage.setItem(y,c)},[c]),(0,a.useEffect)(()=>{var e;null==I||null===(e=I.current)||void 0===e||e.focus()},[I]);let O=async()=>{U(!0),await (0,Z.Vs)(100),(0,i.YM)(document.body,{filter:function(e){var t;return!((null!==(t=null==e?void 0:e.children)&&void 0!==t?t:[]).length>0)||"feedback-widget"!==e.children[0].id}}).then(e=>{localStorage.setItem(y,e),g(e)}).catch(e=>p.ZP.error("Failed to capture screenshot")).finally(()=>{U(!1)})},J=async e=>{e.persist();let[t]=e.target.files||e.dataTransfer.items,r=new FileReader;r.onload=function(e){var t;let r=null===(t=e.target)||void 0===t?void 0:t.result;"string"==typeof r&&(g(r),localStorage.setItem(y,r))},r.readAsDataURL(t),e.target.value=""},T=async()=>{if(0===r.length&&void 0!==c)return p.ZP.error("Please include a message in your feedback.");if(r.length>0){F(!0);let e=c?await S(w,c):void 0;P({projectRef:w,organizationSlug:C,message:void 0!==e?"".concat(r,"\n\nAttachments:\n").concat(e):r,pathname:N.asPath})}return t()};return(0,s.jsxs)("div",{id:"feedback-widget",className:"text-area-text-sm",children:[(0,s.jsx)(f.Z.TextArea,{className:"w-80 p-3",size:"small",placeholder:"Ideas on how to improve this page. Use the Support Form for technical issues.",rows:5,value:r,onChange:function(e){n(e.target.value)}}),(0,s.jsx)("div",{className:"w-full h-px bg-border"}),(0,s.jsxs)("div",{className:"w-80 space-y-3 px-3 py-2 pb-4",children:[(0,s.jsxs)("div",{className:"flex justify-between space-x-2",children:[(0,s.jsx)(o.z,{type:"default",onClick:t,children:"Cancel"}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(o.z,{type:"default",onClick:()=>{n(""),g(void 0),localStorage.removeItem(j),localStorage.removeItem(y)},children:"Clear"}),void 0!==c?(0,s.jsx)("div",{style:{backgroundImage:'url("'.concat(c,'")')},onClick:()=>{let e=z(c),t=URL.createObjectURL(e);window.open(t,"_blank")},className:"cursor-pointer rounded h-[26px] w-[30px] border border-control relative bg-cover bg-center bg-no-repeat",children:(0,s.jsx)("button",{className:"cursor-pointer rounded-full bg-red-900 h-3 w-3 flex items-center justify-center absolute -top-1 -right-1",onClick:e=>{e.stopPropagation(),g(void 0)},children:(0,s.jsx)(h.Z,{size:8,strokeWidth:3})})}):(0,s.jsxs)(x.h_,{children:[(0,s.jsx)(x.$F,{asChild:!0,children:(0,s.jsx)(o.z,{type:"default",disabled:E,loading:E,className:"px-2 py-1.5",children:(0,s.jsx)(m.Z,{size:14})})}),(0,s.jsxs)(x.AW,{side:"bottom",align:"end",children:[(0,s.jsxs)(x.Xi,{className:"flex gap-2",onSelect:()=>{R.current&&R.current.click()},children:[(0,s.jsx)(b.Z,{size:14}),"Upload screenshot"]},"upload-screenshot"),(0,s.jsxs)(x.Xi,{className:"flex gap-2",onSelect:()=>O(),children:[(0,s.jsx)(v,{size:14}),"Capture screenshot"]},"capture-screenshot")]})]}),(0,s.jsx)("input",{type:"file",ref:R,className:"hidden",accept:"image/png",onChange:J}),(0,s.jsx)(o.z,{disabled:_,loading:_,onClick:T,children:"Send feedback"})]})]}),(0,s.jsxs)("p",{className:"text-xs text-foreground-light",children:["Have a technical issue? Contact"," ",(0,s.jsx)(d(),{href:"/support/new",children:(0,s.jsx)("span",{className:"cursor-pointer text-brand transition-colors hover:text-brand-600",children:"Supabase support"})})," ","or"," ",(0,s.jsx)("a",{href:"https://supabase.com/docs",target:"_blank",rel:"noreferrer",children:(0,s.jsx)("span",{className:"cursor-pointer text-brand transition-colors hover:text-brand-600",children:"browse our docs"})}),"."]})]})]})},R=()=>{let[e,t]=(0,a.useState)(!1),[r,l]=(0,a.useState)(""),[i,c]=(0,a.useState)();return(0,s.jsxs)(n.J2,{modal:!1,open:e,onOpenChange:e=>{t(e),e||c(void 0)},children:[(0,s.jsx)(n.xo,{asChild:!0,children:(0,s.jsx)(o.z,{asChild:!0,onClick:function(){t(e=>!e)},type:"outline",children:(0,s.jsx)("span",{className:"hidden md:flex",children:"Feedback"})})}),(0,s.jsx)(n.yk,{side:"bottom",align:"end",className:"w-full p-0",children:(0,s.jsx)(I,{onClose:function(){l(""),c(void 0),t(!1)},feedback:r,setFeedback:l,screenshot:i,setScreenshot:c})})]})}},87886:function(e,t,r){r.d(t,{Z:function(){return w}});var s=r(52322),a=r(24990),n=r(38421),o=r.n(n),l=r(39097),i=r.n(l),c=r(5632),d=r(38183),u=r(61786),p=r(32079),f=r(66855),h=r(34509),x=r(31036);r(2784);var m=r(44485),b=r(2515),g=function(e){return(0,s.jsx)(b.Z,{icon:m.Z,...e})},j=r(4191),v=r(10012),y=r(55271),N=function(e){return(0,s.jsx)(b.Z,{icon:y.Z,...e})},w=()=>{let e=(0,c.useRouter)(),t=e.query.ref;return(0,s.jsxs)(u.J2,{children:[(0,s.jsxs)(a.fC,{delayDuration:0,children:[(0,s.jsx)(u.xo,{asChild:!0,children:(0,s.jsx)(a.xz,{asChild:!0,children:(0,s.jsx)("div",{className:"relative flex items-center",children:(0,s.jsx)(p.z,{id:"help-popover-button",type:"text",className:"px-1",icon:(0,s.jsx)(f.Z,{size:16,strokeWidth:1.5,className:"text-foreground-light"})})})})}),(0,s.jsx)(a.h_,{children:(0,s.jsxs)(a.VY,{side:"bottom",children:[(0,s.jsx)(a.Eh,{className:"radix-tooltip-arrow"}),(0,s.jsx)("div",{className:"rounded bg-alternative py-1 px-2 leading-none shadow space-y-2 border border-background",children:(0,s.jsx)("p",{className:"text-xs text-foreground",children:"Help"})})]})})]}),(0,s.jsxs)(u.yk,{className:"w-[400px] space-y-4 p-0 py-5",align:"end",side:"bottom",children:[(0,s.jsxs)("div",{className:"mb-5 space-y-4 px-5",children:[(0,s.jsx)("h5",{className:"text-foreground",children:"Need help with your project?"}),(0,s.jsx)("p",{className:"text-sm text-foreground-lighter",children:"For issues with your project hosted on supabase.com, or other inquiries about our hosted services."}),(0,s.jsxs)("div",{className:"space-x-1",children:[(0,s.jsx)(p.z,{asChild:!0,type:"default",icon:(0,s.jsx)(h.Z,{}),children:(0,s.jsx)(i(),{href:"https://supabase.com/docs/guides/platform/troubleshooting",target:"_blank",rel:"noreferrer",children:"Troubleshooting"})}),(0,s.jsx)(p.z,{asChild:!0,type:"text",size:"tiny",icon:(0,s.jsx)(x.Z,{}),children:(0,s.jsx)(i(),{href:"https://supabase.com/docs/",target:"_blank",rel:"noreferrer",children:"Docs"})}),(0,s.jsx)(p.z,{asChild:!0,type:"text",size:"tiny",icon:(0,s.jsx)(g,{}),children:(0,s.jsx)(i(),{href:"https://status.supabase.com/",target:"_blank",rel:"noreferrer",children:"Supabase Status"})})]}),(0,s.jsx)("p",{className:"text-sm text-foreground-lighter",children:"Expected response time is based on your billing plan. Projects on paid plans are prioritized."}),(0,s.jsx)("div",{children:(0,s.jsx)(p.z,{asChild:!0,type:"default",icon:(0,s.jsx)(j.Z,{}),children:(0,s.jsx)(i(),{href:"/support/new".concat(t?"?ref=".concat(t):""),children:"Contact Support"})})})]}),(0,s.jsx)(v.Z.Separator,{}),(0,s.jsxs)("div",{className:"mb-4 space-y-2",children:[(0,s.jsxs)("div",{className:"mb-4 px-5",children:[(0,s.jsx)("h5",{className:"mb-2",children:"Reach out to the community"}),(0,s.jsx)("p",{className:"text-sm text-foreground-lighter",children:"For other support, including questions on our client libraries, advice, or best practices."})]}),(0,s.jsx)("div",{className:"px-5",children:(0,s.jsx)("div",{className:"relative space-y-2 overflow-hidden rounded px-5 py-4 pb-12 shadow-md",style:{background:"#404EED"},children:(0,s.jsxs)("a",{href:"https://discord.supabase.com",target:"_blank",rel:"noreferrer",className:"dark block cursor-pointer",children:[(0,s.jsx)(o(),{className:"absolute left-0 top-0 opacity-50",src:"".concat(e.basePath,"/img/support/discord-bg-small.jpg"),layout:"fill",objectFit:"cover",alt:"discord illustration header"}),(0,s.jsx)(p.z,{type:"secondary",icon:(0,s.jsx)(d.Z,{src:"".concat(e.basePath,"/img/discord-icon.svg"),className:"h-4 w-4"}),children:(0,s.jsx)("span",{style:{color:"#404EED"},children:"Join Discord server"})})]})})}),(0,s.jsx)("div",{className:"px-5",children:(0,s.jsx)("div",{className:"relative space-y-2 overflow-hidden rounded px-5 py-4 pb-12 shadow-md",children:(0,s.jsxs)("a",{href:"https://github.com/supabase/supabase/discussions",target:"_blank",rel:"noreferrer",className:"block cursor-pointer",children:[(0,s.jsx)(o(),{className:"absolute left-0 top-0 opacity-50",src:"".concat(e.basePath,"/img/support/github-bg.jpg?v-1"),layout:"fill",objectFit:"cover",alt:"discord illustration header"}),(0,s.jsx)(p.z,{type:"secondary",icon:(0,s.jsx)(N,{}),children:"GitHub Discussions"})]})})})]})]})]})}},31036:function(e,t,r){var s=r(52322);r(2784);var a=r(32513),n=r(2515);t.Z=function(e){return(0,s.jsx)(n.Z,{icon:a.Z,...e})}},52905:function(e,t,r){var s=r(52322);r(2784);var a=r(65),n=r(2515);t.Z=function(e){return(0,s.jsx)(n.Z,{icon:a.Z,...e})}},66855:function(e,t,r){var s=r(52322);r(2784);var a=r(19119),n=r(2515);t.Z=function(e){return(0,s.jsx)(n.Z,{icon:a.Z,...e})}},33286:function(e,t,r){var s=r(52322);r(2784);var a=r(73661),n=r(2515);t.Z=function(e){return(0,s.jsx)(n.Z,{icon:a.Z,...e})}},97305:function(e,t,r){var s=r(52322);r(2784);var a=r(77563),n=r(2515);t.Z=function(e){return(0,s.jsx)(n.Z,{icon:a.Z,...e})}},10012:function(e,t,r){var s=r(52322),a=r(13844);r(2784);var n=r(46318),o=r(61373);function l(e){let{align:t="center",ariaLabel:r,arrow:o=!1,children:l,className:i,defaultOpen:c=!1,modal:d,onOpenChange:u,open:p,overlay:f,side:h="bottom",sideOffset:x=6,style:m,header:b,footer:g,size:j="content",disabled:v}=e,y=(0,n.Z)("popover"),N=[y.content,y.size[j]];return i&&N.push(i),(0,s.jsxs)(a.fC,{defaultOpen:c,modal:d,onOpenChange:u,open:p,children:[(0,s.jsx)(a.xz,{disabled:v,className:y.trigger,"aria-label":r,children:l}),(0,s.jsx)(a.h_,{children:(0,s.jsxs)(a.VY,{sideOffset:x,side:h,align:t,className:N.join(" "),style:m,children:[o&&(0,s.jsx)(a.Eh,{offset:10}),b&&(0,s.jsx)("div",{className:y.header,children:b}),f,g&&(0,s.jsx)("div",{className:y.footer,children:g})]})})]})}l.Separator=function(){let e=(0,n.Z)("popover");return(0,s.jsx)("div",{className:e.separator})},l.Close=function(){let e=(0,n.Z)("popover");return(0,s.jsx)(a.x8,{className:e.close,children:(0,s.jsx)(o.Z,{size:14,strokeWidth:2})})},t.Z=l},81076:function(e,t,r){r.d(t,{C:function(){return l}});var s=r(52322),a=r(10929);r(2784);var n=r(54383);let o=(0,a.j)("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-opacity-10",{variants:{variant:{default:"bg-surface-200 text-foreground-light border border-strong",warning:"bg-warning text-warning-600 border border-warning-500",success:"bg-brand text-brand-600 border border-brand-500",destructive:"bg-destructive text-destructive-600 border border-destructive-500",brand:"bg-brand text-brand-600 border border-brand-500",secondary:"bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",outline:"bg-transparent text border border-foreground-muted"},size:{small:"px-2.5 py-0.5 text-xs",large:"px-3 py-0.5 rounded-full text-sm"},dot:{true:"-ml-0.5 mr-1.5 h-2 w-2 rounded-full"}},defaultVariants:{variant:"default",size:"small"}});function l(e){let{className:t,variant:r="default",size:a,dot:l=!1,children:i,...c}=e;return(0,s.jsxs)("div",{className:(0,n.cn)(o({variant:r,size:a}),t),...c,children:[l&&(0,s.jsx)("svg",{className:o({dot:l}),fill:"currentColor",viewBox:"0 0 8 8",children:(0,s.jsx)("circle",{cx:"4",cy:"4",r:"3"})}),i]})}},34503:function(e,t,r){r.d(t,{$F:function(){return u},AW:function(){return g},Ju:function(){return N},KM:function(){return k},Ph:function(){return h},Qk:function(){return p},TG:function(){return b},VD:function(){return w},Xi:function(){return j},_x:function(){return x},bO:function(){return v},cq:function(){return f},h_:function(){return d},kt:function(){return m},qB:function(){return y}});var s=r(52322),a=r(46653),n=r(91179),o=r(76141),l=r(7968),i=r(2784),c=r(54383);let d=a.fC,u=a.xz,p=a.ZA,f=a.Uv,h=a.Tr,x=a.Ee,m=i.forwardRef((e,t)=>{let{className:r,inset:o,children:l,...i}=e;return(0,s.jsxs)(a.fF,{ref:t,className:(0,c.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-xs outline-none focus:bg-overlay-hover data-[state=open]:bg-overlay-hover data-[state=open]:text-strong",o&&"pl-8",r),...i,children:[l,(0,s.jsx)(n.Z,{className:"h-4 w-4 !ml-auto"})]})});m.displayName=a.fF.displayName;let b=i.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.tu,{ref:t,className:(0,c.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-overlay bg-overlay p-1 text-foreground-light shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...n})});b.displayName=a.tu.displayName;let g=i.forwardRef((e,t)=>{let{className:r,sideOffset:n=4,...o}=e;return(0,s.jsx)(a.Uv,{children:(0,s.jsx)(a.VY,{ref:t,sideOffset:n,className:(0,c.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-overlay bg-overlay p-1 text-foreground-light shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-64",r),...o})})});g.displayName=a.VY.displayName;let j=i.forwardRef((e,t)=>{let{className:r,inset:n,...o}=e;return(0,s.jsx)(a.ck,{ref:t,className:(0,c.cn)("relative flex select-none items-center rounded-sm px-2 py-1.5 text-xs outline-none transition-colors focus:bg-overlay-hover focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 cursor-pointer",n&&"pl-8",r),...o})});j.displayName=a.ck.displayName;let v=i.forwardRef((e,t)=>{let{className:r,children:n,checked:l,...i}=e;return(0,s.jsxs)(a.oC,{ref:t,className:(0,c.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-xs outline-none transition-colors focus:bg-overlay-hover focus:text-strong data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),checked:l,...i,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(a.wU,{children:(0,s.jsx)(o.Z,{className:"h-4 w-4"})})}),n]})});v.displayName=a.oC.displayName;let y=i.forwardRef((e,t)=>{let{className:r,children:n,...o}=e;return(0,s.jsxs)(a.Rk,{ref:t,className:(0,c.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-xs outline-none transition-colors focus:bg-overlay-hover focus:text-strong data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...o,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(a.wU,{children:(0,s.jsx)(l.Z,{className:"h-2 w-2 fill-current"})})}),n]})});y.displayName=a.Rk.displayName;let N=i.forwardRef((e,t)=>{let{className:r,inset:n,...o}=e;return(0,s.jsx)(a.__,{ref:t,className:(0,c.cn)("px-2 py-1.5 text-xs text-foreground-light",n&&"pl-8",r),...o})});N.displayName=a.__.displayName;let w=i.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.Z0,{ref:t,className:(0,c.cn)("-mx-1 my-1 h-px bg-border-overlay",r),...n})});w.displayName=a.Z0.displayName;let k=e=>{let{className:t,...r}=e;return(0,s.jsx)("span",{className:(0,c.cn)("ml-auto text-xs tracking-widest opacity-60",t),...r})};k.displayName="DropdownMenuShortcut"}}]);
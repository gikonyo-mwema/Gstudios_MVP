"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1273],{33635:function(e,t,n){n.d(t,{$E:function(){return c},h8:function(){return o},kM:function(){return d}});var s=n(36492),a=n(85945),r=n(31696),l=n(2784),i=n(7161);async function o(e,t){let{projectRef:n}=e;if(!n)throw Error("projectRef is required");let{data:s,error:a}=await (0,r.U2)("/platform/auth/{ref}/config",{params:{path:{ref:n}},signal:t});return a&&(0,r.S3)(a),s}let c=function(e){let{projectRef:t}=e,{enabled:n=!0,...a}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,s.a)(i.o.authConfig(t),e=>{let{signal:n}=e;return o({projectRef:t},n)},{enabled:n&&void 0!==t,...a})},d=e=>{let{projectRef:t}=e,n=(0,a.NL)();return(0,l.useCallback)(()=>{t&&n.prefetchQuery(i.o.authConfig(t),e=>{let{signal:n}=e;return o({projectRef:t},n)})},[n,t])}},7161:function(e,t,n){n.d(t,{o:function(){return s}});let s={users:(e,t)=>["auth",e,"users",...t?[t]:[]],authConfig:e=>["auth",e,"config"],accessToken:()=>["access-token"]}},56937:function(e,t,n){n.d(t,{H:function(){return r},a:function(){return l}});var s=n(52322),a=n(61373);let r=e=>{let{name:t}=e;return(0,s.jsx)("div",{className:"text-typography-body-light [[data-theme*=dark]_&]:text-typography-body-dark flex cursor-not-allowed items-center space-x-2 rounded bg-gray-600 py-0.5 px-2 text-sm",children:(0,s.jsx)("span",{className:"opacity-50",children:t})})},l=e=>{let{name:t,handleRemove:n}=e;return(0,s.jsxs)("div",{className:"text-typography-body-light [[data-theme*=dark]_&]:text-typography-body-dark flex items-center space-x-2 rounded bg-surface-300 py-0.5 px-2 text-sm",onClick:e=>e.preventDefault(),children:[(0,s.jsx)("span",{children:t}),(0,s.jsx)(a.Z,{size:12,className:"cursor-pointer opacity-50 transition hover:opacity-100",onClick:e=>{e.preventDefault(),e.stopPropagation(),n()}})]})}},18954:function(e,t,n){n.d(t,{Z:function(){return N}});var s=n(52322),a=n(6277),r=n(90882),l=n.n(r),i=n(34498),o=n.n(i),c=n(67304),d=n.n(c),u=n(2784),p=n(61786),h=n(43687),x=n(750),f=n(89682),m=n(19869),v=n(90488),b=n(31654),j=n(39459),g=n(56937);function N(e){let{options:t,value:n,label:r,error:i,descriptionText:c,placeholder:N,searchPlaceholder:y="Search for option",emptyMessage:k,disabled:w,allowDuplicateSelection:C=!1,onChange:_=()=>{}}=e,Z=(0,u.useRef)(null),[z,L]=(0,u.useState)(!1),[E,S]=(0,u.useState)(n||[]),[O,B]=(0,u.useState)(""),[R,W]=(0,u.useState)(128),P=n||E;(0,u.useEffect)(()=>{W(Z.current?Z.current.offsetWidth:R)},[Z.current]),(0,u.useEffect)(()=>{z||B("")},[z]);let T="".concat(R,"px"),A=o()(t,["disabled"],["desc"]),F=O.length>0?l()(A,e=>!e.disabled&&e.name.includes(O)):l()(A,{disabled:!1}),G=e=>void 0!==(P||[]).find(t=>t===e.value),D=e=>{let t=E.filter((t,n)=>n!==e);S(t),_(t)},H=e=>{let n=G(e),s=C?[...P.concat([e.value])]:n?[...d()(P,e.value)]:[...P.concat([e.value])],a=t.filter(e=>e.disabled).map(e=>e.name),r=C?s.concat(a):[...new Set(s.concat(a))];S(r),_(r)};return(0,s.jsxs)("div",{className:"form-group ".concat(w?"pointer-events-none opacity-50":""),children:[r&&(0,s.jsx)("label",{className:"!w-full",children:r}),(0,s.jsx)("div",{className:["form-control form-control--multi-select","border border-strong bg-control","multi-select relative block w-full space-x-1 overflow-auto rounded","".concat(void 0!==i?"border-red-800 bg-red-100":"")].join(" "),ref:Z,children:(0,s.jsxs)(p.J2,{open:z,onOpenChange:L,modal:!1,children:[(0,s.jsx)(p.xo,{asChild:!0,children:(0,s.jsxs)("div",{className:["flex w-full flex-wrap items-start gap-1.5 p-1.5 cursor-pointer","".concat(0===P.length?"h-9":"")].join(" "),onClick:()=>L(!0),children:[0===P.length&&N&&(0,s.jsx)("div",{className:"px-2 text-sm text-foreground-light h-full flex items-center",children:N}),P.map((e,t)=>{var n;let a="".concat(e,"-").concat(t),r=A.find(t=>t.value===e),l=null!==(n=null==r?void 0:r.disabled)&&void 0!==n&&n;return r?l?(0,s.jsx)(g.H,{name:e},a):(0,s.jsx)(g.a,{name:e,handleRemove:()=>C?D(t):H(r)},a):(0,s.jsx)(s.Fragment,{})}),(0,s.jsx)("div",{className:"absolute inset-y-0 right-0 pl-3 pr-2 flex space-x-1 items-center cursor-pointer ",children:(0,s.jsx)(h.Z,{size:16,strokeWidth:2,className:"text-foreground-lighter"})})]})}),(0,s.jsxs)(p.yk,{className:"p-0",side:"bottom",align:"start",style:{width:T,marginLeft:"-5px"},children:[(0,s.jsx)(x.Z,{className:"[&>div>div>div>input]:!rounded-b-none [&>div>div>div>input]:!pl-9",icon:(0,s.jsx)(f.Z,{size:16}),placeholder:y,value:O,onChange:e=>B(e.target.value)}),(0,s.jsx)(m.x,{className:(0,a.default)("p-1",F.length>5?"h-[225px]":""),children:F.length>=1?F.map(e=>{let t=!!(!C&&P&&P.find(t=>t===e.value));return(0,s.jsxs)("div",{onClick:()=>H(e),className:["text-typography-body-light [[data-theme*=dark]_&]:text-typography-body-dark","group flex cursor-pointer items-center justify-between transition","space-x-1 rounded bg-transparent p-2 px-4 text-sm hover:bg-overlay-hover","".concat(t?" [[data-theme*=dark]_&]:bg-green-600 [[data-theme*=dark]_&]:bg-opacity-25":"")].join(" "),children:[(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)("p",{children:e.name}),void 0!==e.description&&(0,s.jsx)("p",{className:"opacity-50",children:e.description})]}),t&&(0,s.jsx)(v.Z,{size:16,strokeWidth:3,className:"cursor-pointer transition ".concat(t?"text-brand":"")}),C&&(0,s.jsxs)("div",{className:"flex items-center opacity-0 group-hover:opacity-100 transition space-x-1",children:[(0,s.jsx)(b.Z,{size:14}),(0,s.jsx)("p",{className:"text-sm",children:"Add value"})]})]},"multiselect-option-".concat(e.id))}):0===t.length?(0,s.jsx)("div",{className:"flex h-full w-full flex-col border-default items-center justify-center border border-dashed p-3",children:k||(0,s.jsxs)("div",{className:"flex w-full items-center space-x-2",children:[(0,s.jsx)(j.Z,{strokeWidth:1.5,size:18,className:"text-foreground-light"}),(0,s.jsx)("p",{className:"text-sm text-foreground-light",children:"No options available"})]})}):(0,s.jsx)("div",{className:"flex h-full w-full flex-col border-default items-center justify-center border border-dashed p-3",children:k||(0,s.jsx)("div",{className:"flex w-full items-center space-x-2",children:(0,s.jsx)("p",{className:"text-sm text-foreground-light",children:"No options found"})})})})]})]})}),c&&(0,s.jsx)("span",{className:"form-text text-muted mt-2 text-sm",children:c}),i&&(0,s.jsx)("span",{className:"text-red-900 text-sm mt-2",children:i})]})}},12934:function(e,t,n){n.d(t,{Z:function(){return d}});var s=n(52322),a=n(2784),r=n(25001),l=n(46318),i=n(70780);let o=(0,a.createContext)({parentCallback:e=>{},parentSize:""});function c(e){let{className:t,id:n="",name:a="",label:r,afterLabel:c,beforeLabel:d,description:u,checked:p,value:h,onChange:x,onBlur:f,size:m="medium",disabled:v=!1,...b}=e,{formContextOnChange:j,values:g,handleBlur:N}=(0,i.G)(),y=(0,l.Z)("checkbox");return(0,s.jsx)(o.Consumer,{children:e=>{let{parentCallback:l,parentSize:i}=e,o=n||a||(r?r.toLowerCase().replace(/^[^A-Z0-9]+/gi,"").replace(/ /g,"-"):void 0);m=i||m;let k=a||o,w=null!=p?p:void 0,C=[y.container];return t&&C.push(t),g&&void 0===p&&(w=g[n||a]),(0,s.jsxs)("div",{className:C.join(" "),children:[(0,s.jsx)("input",{id:o,name:k,type:"checkbox",className:[y.base,y.size[m]].join(" "),onChange:function(e){l&&l(e),x&&x(e),j&&j(e)},onBlur:function(e){N&&setTimeout(()=>{N(e)},100),f&&f(e)},checked:w,value:h||o,disabled:v,...b}),(0,s.jsxs)("label",{className:[y.label.base,y.label[m]].join(" "),htmlFor:o,children:[(0,s.jsxs)("span",{children:[d&&(0,s.jsx)("span",{className:[y.label_before.base,y.label_before[m]].join(" "),children:d}),r,c&&(0,s.jsx)("span",{className:[y.label_after.base,y.label_after[m]].join(" "),children:c})]}),u&&(0,s.jsx)("p",{className:[y.description.base,y.description[m]].join(" "),children:u})]})]})}})}c.Group=function(e){let{id:t,layout:n="vertical",error:a,descriptionText:i,label:d,afterLabel:u,beforeLabel:p,labelOptional:h,children:x,className:f,options:m,onChange:v,size:b="medium"}=e,j=(0,l.Z)("checkbox");return(0,s.jsx)(r.l,{label:d,afterLabel:u,beforeLabel:p,labelOptional:h,layout:n,id:t,error:a,descriptionText:i,className:f,size:b,children:(0,s.jsx)(o.Provider,{value:{parentCallback:e=>{v&&v(e)},parentSize:b},children:(0,s.jsx)("div",{className:j.group,children:m?m.map(e=>(0,s.jsx)(c,{id:e.id,value:e.value,label:e.label,beforeLabel:e.beforeLabel,afterLabel:e.afterLabel,checked:e.checked,name:e.name,description:e.description,defaultChecked:e.defaultChecked},e.id)):x})})})};var d=c},89682:function(e,t,n){var s=n(52322);n(2784);var a=n(32465),r=n(2515);t.Z=function(e){return(0,s.jsx)(r.Z,{icon:a.Z,...e})}},62284:function(e,t,n){n.d(t,{Z:function(){return v}});var s=n(52322),a=n(46653),r=n(35676),l=n.n(r),i=n(2784),o=n(25001),c=n(71653),d=n(67440),u=n(46318),p=n(54383),h=n(70780),x=n(90488);let f=(0,i.createContext)({onChange:e=>{},selected:void 0});function m(e){let{children:t,className:n,buttonClassName:r,descriptionText:x,error:m,icon:v,id:b="",name:j="",label:g,labelOptional:N,layout:y,value:k,onChange:w,onFocus:C,onBlur:_,style:Z,size:z="medium",defaultValue:L,validation:E,disabled:S,optionsWidth:O}=e,[B,R]=(0,i.useState)(void 0),[W,P]=(0,i.useState)({}),T=(0,u.Z)("listbox"),A=(0,i.useRef)(null),{formContextOnChange:F,values:G,errors:D,handleBlur:H,touched:M,fieldLevelValidation:q}=(0,h.G)();G&&!k&&(k=G[b||j],L=G[b||j]),m||(D&&!m&&(m=D[b||j]),m=M&&M[b||j]?m:void 0),(0,i.useEffect)(()=>{void 0!==k&&R(k)},[k]),(0,i.useEffect)(()=>{function e(){var e;document.documentElement.style.setProperty("--width-listbox","".concat(O||(null===(e=A.current)||void 0===e?void 0:e.offsetWidth),"px"))}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),(0,i.useEffect)(()=>{var e;let n=l()(t);function s(e){return n.find(t=>t.props.value===e)}if(k){R(k);let e=s(k);P((null==e?void 0:e.props)?e.props:void 0);return}if(B){let e=s(B);P((null==e?void 0:e.props)?e.props:void 0);return}if(L){R(L);let e=s(B);P((null==e?void 0:e.props)?e.props:void 0);return}P(null===(e=n[0])||void 0===e?void 0:e.props)},[B]);let J=[T.container,T.base,r],Q=[T.addOnBefore];return m&&J.push(T.variants.error),m||J.push(T.variants.standard),v&&Q.push(T.with_icon),z&&J.push(T.size[z]),S&&J.push(T.disabled),(0,s.jsx)(o.l,{label:g,labelOptional:N,layout:y,id:b,error:m,descriptionText:x,className:n,style:Z,size:z,children:(0,s.jsxs)(a.fC,{children:[(0,s.jsx)(a.xz,{asChild:!0,disabled:S,children:(0,s.jsxs)("button",{"data-size":z,ref:A,className:(0,p.cn)(J),onBlur:function(e){H&&H(e),_&&_(e)},onFocus:C,name:j,id:b,children:[(0,s.jsxs)("span",{className:(0,p.cn)(Q),children:[v&&(0,s.jsx)(d.Z,{size:z,icon:v}),(null==W?void 0:W.addOnBefore)&&(0,s.jsx)(W.addOnBefore,{}),(0,s.jsx)("span",{className:T.label,children:null==W?void 0:W.label})]}),(0,s.jsx)("span",{className:T.chevron_container,children:(0,s.jsx)("svg",{className:T.chevron,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})})}),m&&(0,s.jsx)("div",{className:T.actions_container,children:m&&(0,s.jsx)(c.Z,{size:z})})]})}),(0,s.jsx)(a.VY,{sideOffset:6,loop:!0,side:"bottom",align:"center",className:T.options_container,children:(0,s.jsx)("div",{children:(0,s.jsx)(f.Provider,{value:{onChange:function(e){w&&w(e),R(e);let t={};t.target={type:"select",name:j,id:b,value:e,checked:void 0},F&&F(t),E&&q(b,E(e))},selected:B},children:t})})})]})})}m.Option=function(e){let{id:t,value:n,label:r,disabled:l=!1,children:i,className:o="",addOnBefore:c}=e,d=(0,u.Z)("listbox");return(0,s.jsx)(f.Consumer,{children:e=>{let{onChange:r,selected:u}=e,h=u===n;return(0,s.jsxs)(a.ck,{className:(0,p.cn)(d.option,h?d.option_active:" ",l?d.option_disabled:" ",o),onSelect:()=>l?{}:r(n),children:[(0,s.jsxs)("div",{className:d.option_inner,children:[c&&c({active:h,selected:u}),(0,s.jsx)("span",{children:"function"==typeof i?i({active:h,selected:u}):i})]}),h?(0,s.jsx)("span",{className:(0,p.cn)(d.option_check,h?d.option_check_active:""),children:(0,s.jsx)(x.Z,{className:d.option_check_icon,"aria-hidden":"true"})}):null]},t)}})};var v=m}}]);
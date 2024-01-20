(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[400],{9396:function(e,t,n){"use strict";var r=n(6314);t.Z=void 0;var a=r(n(984)),o=n(7437);t.Z=(0,a.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},9051:function(e,t,n){Promise.resolve().then(n.bind(n,486))},5838:function(e,t,n){"use strict";n.r(t),n.d(t,{ApiProvider:function(){return s},queryClient:function(){return i}});var r=n(7437),a=n(5721),o=n(8038);let i=new a.S,s=e=>{let{children:t}=e;return(0,r.jsx)(o.aH,{client:i,children:t})}},4936:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});let r=n(2173).Z.create({baseURL:"http://192.168.178.54:5002/api"})},4136:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var r=n(3188),a=n(4936);let o=(0,r.r)({queryKey:["units"],fetcher:e=>a.L.get("knowledge/".concat(e.knowledgeBaseId,"/units")).then(e=>e.data)})},486:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var r=n(7437),a=n(2265);let o=a.forwardRef(function({title:e,titleId:t,...n},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{d:"M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"}))});var i=n(1991),s=n(9396),l=n(4856),d=n(4136),c=n(4033),u=n(1332),m=n(4252);let p=e=>Object.assign((0,m.xD)(m.M.useMutation,e,"mutations"),{getKey:()=>e.mutationKey,getOptions:()=>e,mutationFn:e.mutationFn});var h=n(4936),x=n(5838);let g=p({mutationFn:async e=>(0,h.L)({url:"knowledge/".concat(e.knowledgeBaseId,"/units/").concat(e.unitId),method:"PUT",data:e.newVersion}).then(e=>e.data),onSuccess:()=>{x.queryClient.invalidateQueries({queryKey:["units"]})}});var b=function(e){let{isModalOpen:t,unitId:n,knowledgeBaseId:o,setIsModalOpen:i}=e,{mutate:s}=g(),[l,d]=(0,a.useState)(""),[c,u]=(0,a.useState)(""),[m,p]=(0,a.useState)();return(0,r.jsx)(r.Fragment,{children:t&&(0,r.jsx)("div",{className:"fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center p-4",children:(0,r.jsxs)("div",{className:"border border-black bg-white rounded-lg p-4 max-w-lg w-full",children:[(0,r.jsx)("h2",{className:"text-lg text-gray-700",children:"Neue Version hinzuf\xfcgen"}),(0,r.jsxs)("form",{children:[(0,r.jsx)("label",{htmlFor:"versionName",className:"block text-sm font-medium text-gray-500",children:"Versionsname"}),(0,r.jsx)("input",{type:"text",name:"versionName",id:"versionName",className:"mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",placeholder:"Geben Sie den Versionsnamen ein",onChange:e=>d(e.target.value)}),(0,r.jsx)("label",{htmlFor:"versionDescription",className:"block text-sm font-medium text-gray-500",children:"Beschreibung"}),(0,r.jsx)("textarea",{name:"versionDescription",id:"versionDescription",className:"mt-1 block w-full px-3 py-2 bg-gray-100 border text-gray-800 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",placeholder:"Beschreibung der Version",onChange:e=>u(e.target.value)}),(0,r.jsx)("label",{htmlFor:"pdfUpload",className:"block text-sm font-medium text-gray-500",children:"PDF hochladen"}),(0,r.jsx)("input",{type:"file",name:"pdfUpload",id:"pdfUpload",accept:".pdf",className:"mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",onChange:e=>p(e.target.files[0])}),(0,r.jsxs)("div",{className:"mt-4 flex justify-end",children:[(0,r.jsx)("button",{type:"button",className:"mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none",onClick:()=>i(!1),children:"Abbrechen"}),(0,r.jsx)("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none",onClick:()=>{let e=new FormData;e.append("doc",m),e.append("kunit_vers_desc",c),e.append("kunit_vers_name",l),e.append("user_id","igor"),s({unitId:n,knowledgeBaseId:o,newVersion:e})},children:"Speichern"})]})]})]})})})},v=n(791),f=n(3428),y=n(7042),w=n(98),j=n(5600),S=n(9975),k=n(8909),N=n(8915),Z=n(6078),z=n(8702),C=n(6520),I=n(5702);function $(e){return(0,I.Z)("MuiButton",e)}let B=(0,C.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),F=a.createContext({}),R=a.createContext(void 0),M=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],O=e=>{let{color:t,disableElevation:n,fullWidth:r,size:a,variant:o,classes:i}=e,s={root:["root",o,`${o}${(0,z.Z)(t)}`,`size${(0,z.Z)(a)}`,`${o}Size${(0,z.Z)(a)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,z.Z)(a)}`],endIcon:["endIcon",`iconSize${(0,z.Z)(a)}`]},l=(0,j.Z)(s,$,i);return(0,f.Z)({},i,l)},V=e=>(0,f.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),_=(0,k.ZP)(Z.Z,{shouldForwardProp:e=>(0,k.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,z.Z)(n.color)}`],t[`size${(0,z.Z)(n.size)}`],t[`${n.variant}Size${(0,z.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var n,r;let a="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],o="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,f.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,f.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,S.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,S.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,S.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:o,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,f.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${B.focusVisible}`]:(0,f.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${B.disabled}`]:(0,f.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,S.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(r=e.palette).getContrastText)?void 0:n.call(r,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:a,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${B.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${B.disabled}`]:{boxShadow:"none"}}),E=(0,k.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,z.Z)(n.size)}`]]}})(({ownerState:e})=>(0,f.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},V(e))),D=(0,k.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,z.Z)(n.size)}`]]}})(({ownerState:e})=>(0,f.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},V(e))),L=a.forwardRef(function(e,t){let n=a.useContext(F),o=a.useContext(R),i=(0,w.Z)(n,e),s=(0,N.Z)({props:i,name:"MuiButton"}),{children:l,color:d="primary",component:c="button",className:u,disabled:m=!1,disableElevation:p=!1,disableFocusRipple:h=!1,endIcon:x,focusVisibleClassName:g,fullWidth:b=!1,size:j="medium",startIcon:S,type:k,variant:Z="text"}=s,z=(0,v.Z)(s,M),C=(0,f.Z)({},s,{color:d,component:c,disabled:m,disableElevation:p,disableFocusRipple:h,fullWidth:b,size:j,type:k,variant:Z}),I=O(C),$=S&&(0,r.jsx)(E,{className:I.startIcon,ownerState:C,children:S}),B=x&&(0,r.jsx)(D,{className:I.endIcon,ownerState:C,children:x});return(0,r.jsxs)(_,(0,f.Z)({ownerState:C,className:(0,y.Z)(n.className,I.root,u,o||""),component:c,disabled:m,focusRipple:!h,focusVisibleClassName:(0,y.Z)(I.focusVisible,g),ref:t,type:k},z,{classes:I,children:[$,l,B]}))});var U=n(7079),P=n(5795),q=n(9872),T=n(3701),W=n(6988),A=n(4147),K=n(666),G=n(9279),H=n(2653);let Q=p({mutationFn:async e=>(0,h.L)({url:"knowledge/".concat(e.knowledgeBaseId,"/units"),method:"POST",data:e.newUnit}).then(e=>e.data),onSuccess:()=>{x.queryClient.invalidateQueries({queryKey:["units"]})}});var J=function(e){let{isModalOpen:t,unitId:n,knowledgeBaseId:o,setIsModalOpen:i}=e,{mutate:s}=Q(),[l,d]=(0,a.useState)(""),[c,u]=(0,a.useState)(""),[m,p]=(0,a.useState)(""),[h,x]=(0,a.useState)(""),[g,b]=(0,a.useState)();return(0,r.jsx)(r.Fragment,{children:t&&(0,r.jsx)("div",{className:"fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center p-4",children:(0,r.jsxs)("div",{className:"border border-black bg-white rounded-lg p-4 max-w-lg w-full",children:[(0,r.jsx)("h2",{className:"text-lg text-gray-700",children:"Neue Unit hinzuf\xfcgen"}),(0,r.jsxs)("form",{children:[(0,r.jsx)("label",{htmlFor:"unitName",className:"block text-sm font-medium text-gray-500",children:"Unitname"}),(0,r.jsx)("input",{type:"text",name:"unitName",id:"unitName",className:"mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",placeholder:"Geben Sie den Unitnamen ein",onChange:e=>d(e.target.value)}),(0,r.jsx)("label",{htmlFor:"versionDescription",className:"block text-sm font-medium text-gray-500",children:"Beschreibung"}),(0,r.jsx)("textarea",{name:"versionDescription",id:"versionDescription",className:"mt-1 block w-full px-3 py-2 bg-gray-100 border text-gray-800 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",placeholder:"Beschreibung der Unit",onChange:e=>u(e.target.value)}),(0,r.jsx)("label",{htmlFor:"unitName",className:"block text-sm font-medium text-gray-500",children:"Versionname"}),(0,r.jsx)("input",{type:"text",name:"unitName",id:"unitName",className:"mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",placeholder:"Geben Sie den Versionsnamen ein",onChange:e=>p(e.target.value)}),(0,r.jsx)("label",{htmlFor:"versionDescription",className:"block text-sm font-medium text-gray-500",children:"Versionbeschreibung"}),(0,r.jsx)("textarea",{name:"versionDescription",id:"versionDescription",className:"mt-1 block w-full px-3 py-2 bg-gray-100 border text-gray-800 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",placeholder:"Beschreibung der Version",onChange:e=>x(e.target.value)}),(0,r.jsx)("label",{htmlFor:"pdfUpload",className:"block text-sm font-medium text-gray-500",children:"PDF hochladen"}),(0,r.jsx)("input",{type:"file",name:"pdfUpload",id:"pdfUpload",accept:".pdf",className:"mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",onChange:e=>b(e.target.files[0])}),(0,r.jsxs)("div",{className:"mt-4 flex justify-end",children:[(0,r.jsx)("button",{type:"button",className:"mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none",onClick:()=>i(!1),children:"Abbrechen"}),(0,r.jsx)("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none",onClick:()=>{let e=new FormData;e.append("doc",g),e.append("kunit_name",l),e.append("kunit_desc",c),e.append("kunit_vers_name",m),e.append("kunit_vers_desc",h),e.append("user_id","igor"),s({knowledgeBaseId:o,newUnit:e})},children:"Speichern"})]})]})]})})})};function X(){let{knowledgebaseid:e}=(0,c.useParams)(),{isLoading:t,data:n}=(0,d.u)({variables:{knowledgeBaseId:e}}),[m,p]=(0,a.useState)([]),[h,x]=(0,a.useState)(-1),[g,v]=(0,a.useState)(!1),[f,y]=(0,a.useState)(!1),[w,j]=(0,a.useState)(""),S=(0,c.useRouter)();(0,a.useEffect)(()=>{t||p(k())},[n]);let k=()=>!t&&n?null==n?void 0:n.map(e=>({id:e.id,name:e.name,uploadedOn:e.creation_date,type:"folder"})):[],N=e=>{e===h?x(-1):x(e)},Z=e=>{N(e),v(!0),j(n[e].id)},z=t=>{S.push("/units/".concat(t,"?knowledgebaseid=").concat(e))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex items-center mb-2 space-x-2",children:[(0,r.jsx)(L,{onClick:()=>y(!0),className:"bg-green-500 hover:bg-green-700 text-white",startIcon:(0,r.jsx)(s.Z,{}),children:"New"}),(0,r.jsx)(U.Z,{variant:"h4",component:"div",children:"Units"})]}),(0,r.jsx)(P.Z,{component:q.Z,children:(0,r.jsxs)(T.Z,{children:[(0,r.jsx)(W.Z,{children:(0,r.jsxs)(A.Z,{children:[(0,r.jsx)(K.Z,{children:"Name"}),(0,r.jsx)(K.Z,{children:"Uploaded on"}),(0,r.jsx)(K.Z,{children:"Last Version"}),(0,r.jsx)(K.Z,{align:"right",children:"Actions"})]})}),(0,r.jsx)(G.Z,{children:m.map((e,t)=>(0,r.jsxs)(A.Z,{hover:!0,children:[(0,r.jsx)(K.Z,{className:"hover:cursor-pointer",component:"th",onClick:()=>"folder"===e.type&&z(n[t].id),scope:"row",children:(0,r.jsxs)("div",{className:"flex items-center",children:["folder"===e.type?(0,r.jsx)(i.Z,{}):(0,r.jsx)(u.Z,{}),(0,r.jsx)("span",{style:{marginLeft:"4px"},children:e.name})]})}),(0,r.jsx)(K.Z,{children:e.uploadedOn}),(0,r.jsx)(K.Z,{children:null==n?void 0:n.filter(t=>t.id==e.id)[0].versions[(null==n?void 0:n.filter(t=>t.id==e.id)[0].versions.length)-1].name}),(0,r.jsxs)(K.Z,{align:"right",children:[(0,r.jsx)(H.Z,{"aria-label":"more",onClick:()=>N(t),children:(0,r.jsx)(l.Z,{})}),h===t&&(0,r.jsx)("div",{id:"dropdownDots",className:"z-40 origin-top-right border absolute right-0 mt-2 w-22 rounded-md shadow-lg bg-white ring-1 ring-gray-300 ring-opacity-5 divide-y divide-gray-100 focus:outline-none",children:(0,r.jsx)("ul",{className:"py-2 text-sm text-gray-700","aria-labelledby":"dropdownMenuIconButton",children:(0,r.jsx)("li",{className:"flex px-4 py-2 hover:bg-gray-100 items-center justify-end space-x-2",children:(0,r.jsxs)("div",{className:"hover:bg-gray-100 flex items-center justify-center space-x-2 p",onClick:()=>Z(t),children:[(0,r.jsx)(o,{className:"h-4 w-4 text-gray-700"}),(0,r.jsx)(U.Z,{children:"Neue Version"})]})})})})]})]},t))})]})}),(0,r.jsx)(b,{isModalOpen:g,setIsModalOpen:v,unitId:w,knowledgeBaseId:e}),(0,r.jsx)(J,{isModalOpen:f,setIsModalOpen:y,unitId:w,knowledgeBaseId:e})]})}}},function(e){e.O(0,[221,201,115,971,938,744],function(){return e(e.s=9051)}),_N_E=e.O()}]);
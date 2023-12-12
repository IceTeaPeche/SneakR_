"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[490],{44485:(z,P,s)=>{s.d(P,{f:()=>a});const a=({data:M})=>{try{return Object.keys(M).reduce((O,u)=>{const h=M[u][0];return O[u]={id:h,defaultMessage:h},O},{})}catch{return{}}}},10490:(z,P,s)=>{s.r(P),s.d(P,{SingleSignOn:()=>V,default:()=>ns});var a=s(74081),M=s(27997),O=s(9941),u=s(27875),h=s(48102),W=s(74758),S=s(10701),v=s(32370),T=s(23298),C=s(74577),j=s(2548),I=s(5627),m=s(78955),y=s(97232),n=s(47665),x=s(59082),N=s(6078),Y=s(61020),E=s(59461),H=s(73314),B=s(12847),J=s(27279),$=s(61815),w=s(74919),U=s(47184),Q=s(43433),R=s(47853),q=s(44485),is=s(40464),ls=s(64797),ds=s(85811),rs=s(30594),_s=s(15816),Es=s(97442),cs=s(13576),gs=s(87830),Ds=s(364),Ms=s(71563),Os=s(49204),ms=s(75719),Ps=s(29206),us=s(98934),hs=s(8175);const ss={fieldsToPick:[],formErrors:{},initialData:{},isLoading:!0,modifiedData:{},showHeaderButtonLoader:!1,showHeaderLoader:!0},es=(e,t)=>(0,$.ZP)(e,o=>{switch(t.type){case"GET_DATA_SUCCEEDED":{o.isLoading=!1,o.showHeaderLoader=!1,o.initialData=U(t.data,e.fieldsToPick),o.modifiedData=U(t.data,e.fieldsToPick);break}case"ON_CANCEL":{o.modifiedData=e.initialData,o.formErrors={};break}case"ON_CHANGE":{t.keys.includes("username")&&!t.value?Q(o.modifiedData,t.keys.split("."),null):Q(o.modifiedData,t.keys.split("."),t.value);break}case"ON_SUBMIT":{o.showHeaderButtonLoader=!0;break}case"ON_SUBMIT_SUCCEEDED":{o.initialData=U(t.data,e.fieldsToPick),o.modifiedData=U(t.data,e.fieldsToPick),o.showHeaderButtonLoader=!1;break}case"SET_ERRORS":{o.formErrors=t.errors,o.showHeaderButtonLoader=!1;break}default:return o}}),as=async(e,t)=>{let o=null;try{await t.validate(e,{abortEarly:!1})}catch(c){c instanceof R.p8&&(o=(0,n.CJ)(c))}return o},ts=(e,t,o)=>{const[{formErrors:c,initialData:k,isLoading:g,modifiedData:A,showHeaderButtonLoader:F,showHeaderLoader:f},l]=J.useReducer(es,{...ss,fieldsToPick:o}),d=(0,n.lm)(),{lockApp:b,unlockApp:p}=(0,n.o1)(),{get:G,put:Z}=(0,n.kY)();return J.useEffect(()=>{(async()=>{try{const{data:{data:r}}=await G("/admin/providers/options");l({type:"GET_DATA_SUCCEEDED",data:r,fieldsToPick:o})}catch{d({type:"warning",message:{id:"notification.error"}})}})()},[]),[{formErrors:c,initialData:k,isLoading:g,modifiedData:A,showHeaderButtonLoader:F,showHeaderLoader:f},l,{handleCancel:()=>{l({type:"ON_CANCEL"})},handleChange:({target:{name:L,value:r}})=>{l({type:"ON_CHANGE",keys:L,value:r})},handleSubmit:async L=>{L.preventDefault();const r=await as(A,e);if(l({type:"SET_ERRORS",errors:r||{}}),!r)try{b(),l({type:"ON_SUBMIT"});const _=w(A,["confirmPassword","registrationToken"]);_.roles&&(_.roles=_.roles.map(X=>X.id)),_.ssoLockedRoles&&(_.ssoLockedRoles=[...new Set(_.ssoLockedRoles)]);const{data:{data:D}}=await Z("/admin/providers/options",_);t(D),l({type:"ON_SUBMIT_SUCCEEDED",data:D}),d({type:"success",message:{id:"notification.success.saved"}})}catch(_){const D=_?.response?.payload??{data:{}};D?.data&&typeof D.data=="string"?d({type:"warning",message:D.data}):d({type:"warning",message:D.message});const X=(0,q.f)(D);l({type:"SET_ERRORS",errors:X})}finally{p()}},setField:(L,r)=>{l({type:"ON_CHANGE",keys:L,value:r})}}]},os=R.Ry().shape({autoRegister:R.Xg().required(n.I0.required),defaultRole:R.nK().when("autoRegister",(e,t)=>e?t.required(n.I0.required):t.nullable()),ssoLockedRoles:R.IX().nullable().of(R.nK().when("ssoLockedRoles",(e,t)=>e?t.required(n.I0.required):t.nullable()))}),V=()=>{(0,n.go)();const{formatMessage:e}=(0,Y.Z)(),t=(0,E.v9)(B.s),{isLoading:o,allowedActions:{canUpdate:c,canReadRoles:k}}=(0,n.ss)({...t.settings.sso,readRoles:t.settings.roles.read}),[{formErrors:g,initialData:A,isLoading:F,modifiedData:f,showHeaderButtonLoader:l},,{handleChange:d,handleSubmit:b}]=ts(os,()=>{},["autoRegister","defaultRole","ssoLockedRoles"]),{roles:p,isLoading:G}=(0,H.u)(void 0,{enabled:k}),Z=o||G||F;return(0,a.jsxs)(M.A,{children:[(0,a.jsx)(n.SL,{name:"SSO"}),(0,a.jsx)(O.o,{tabIndex:-1,children:(0,a.jsxs)("form",{onSubmit:b,children:[(0,a.jsx)(u.T,{primaryAction:(0,a.jsx)(h.z,{"data-testid":"save-button",disabled:N(A,f),loading:l,startIcon:(0,a.jsx)(x.Z,{}),type:"submit",size:"L",children:e({id:"global.save",defaultMessage:"Save"})}),title:e({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:e({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),(0,a.jsx)(W.D,{children:Z?(0,a.jsx)(n.dO,{}):(0,a.jsxs)(S.k,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:[(0,a.jsx)(v.Z,{variant:"delta",as:"h2",children:e({id:"global.settings",defaultMessage:"Settings"})}),(0,a.jsxs)(T.r,{gap:4,children:[(0,a.jsx)(C.P,{col:6,m:6,s:12,children:(0,a.jsx)(j.s,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!c,checked:f.autoRegister,hint:e({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:e({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:e({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:e({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:i=>{d({target:{name:"autoRegister",value:i.target.checked}})}})}),(0,a.jsx)(C.P,{col:6,m:6,s:12,children:(0,a.jsx)(I.P,{disabled:!c,hint:e({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:g.defaultRole?e({id:g.defaultRole.id,defaultMessage:g.defaultRole.id}):"",label:e({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:i=>{d({target:{name:"defaultRole",value:i}})},placeholder:e({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:f.defaultRole,children:p.map(({id:i,name:K})=>(0,a.jsx)(m.W,{value:i.toString(),children:K},i))})}),(0,a.jsx)(C.P,{col:6,m:6,s:12,children:(0,a.jsx)(y.NU,{disabled:!c,hint:e({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:g.ssoLockedRoles?e({id:g.ssoLockedRoles.id,defaultMessage:g.ssoLockedRoles.id}):"",label:e({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:i=>{d({target:{name:"ssoLockedRoles",value:i}})},placeholder:e({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>{d({target:{name:"ssoLockedRoles"}})},value:f.ssoLockedRoles||[],withTags:!0,children:p.map(({id:i,name:K})=>(0,a.jsx)(y.ML,{value:i.toString(),children:K},i))})})]})]})})]})})]})},ns=()=>{const e=(0,E.v9)(B.s);return(0,a.jsx)(n.O4,{permissions:e.settings.sso.main,children:(0,a.jsx)(V,{})})}},73314:(z,P,s)=>{s.d(P,{u:()=>h});var a=s(27279),M=s(47665),O=s(61020),u=s(40464);const h=(W={},S={})=>{const{id:v="",...T}=W,{get:C}=(0,M.kY)(),{locale:j}=(0,O.Z)(),I=(0,M.Xe)(j,{sensitivity:"base"}),{data:m,error:y,isError:n,isLoading:x,refetch:N}=(0,u.useQuery)(["roles",v,T],async()=>{const{data:E}=await C(`/admin/roles/${v??""}`,{params:T});return E},S);return{roles:a.useMemo(()=>{let E=[];return m&&(Array.isArray(m.data)?E=m.data:E=[m.data]),[...E].sort((H,B)=>I.compare(H.name,B.name))},[m,I]),error:y,isError:n,isLoading:x,refetch:N}}}}]);

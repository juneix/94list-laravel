import{g as V,j as y}from"./request-40fd0d0c.js";import{E as b}from"./el-overlay-fc1bf69f.js";import{E as w,a as E}from"./el-form-item-fd71e1d8.js";import{E as I}from"./el-input-b13a7281.js";import{d as T,A as C,o as F,a as x,w as n,e as P,l as t,f as a,k as p,D as M}from"./index-33ed1e89.js";import{u as R}from"./AccountManagement-db8fb63f.js";import{g as B,c as D}from"./admin-758ddfa7.js";import"./el-text-36debf42.js";import"./focus-trap-a70a58ba.js";const U={class:"dialog-footer"},K=T({__name:"AddAccount",setup(N){const i=R(),{addAccountForm:e,addAccountFormRef:u,addAccountFormVisible:s}=C(i),f=async d=>{if(d&&await d.validate(()=>{})){e.value.addPending=!0;const o=await B({cookie:e.value.cookie.trim()}).catch(()=>{e.value.checkedInfo=!1,e.value.username="",e.value.vipType=""})??"failed";e.value.addPending=!1,o!=="failed"&&(i.closeAddDialog(),V.success("添加成功"),await i.getAccounts())}},g={cookie:[{required:!0,message:"请输入账户Cookie",trigger:"blur"}]},v=new Map([[0,"普通用户"],[1,"普通会员"],[2,"超级会员"]]),_=async()=>{if(!u.value||!await u.value.validate(()=>{}))return;e.value.checkPending=!0;const d=await D({cookie:e.value.cookie.trim()})??"failed";if(e.value.checkPending=!1,d==="failed")return;const{data:o}=d;e.value.checkedInfo=!0,e.value.username=o.baidu_name,e.value.vipType=v.get(o.vip_type)??"普通用户"};return(d,o)=>{const r=I,c=w,k=E,m=y,A=b;return F(),x(A,{modelValue:a(s),"onUpdate:modelValue":o[5]||(o[5]=l=>M(s)?s.value=l:null),title:"添加代理账号",width:"60%"},{footer:n(()=>[P("span",U,[t(m,{onClick:o[3]||(o[3]=l=>a(i).closeAddDialog())},{default:n(()=>[p("取消")]),_:1}),t(m,{type:"primary",onClick:_,disabled:a(e).checkedInfo,loading:a(e).checkPending},{default:n(()=>[p(" 获取账户信息 ")]),_:1},8,["disabled","loading"]),t(m,{type:"primary",onClick:o[4]||(o[4]=l=>f(a(u))),disabled:!a(e).checkedInfo,loading:a(e).addPending},{default:n(()=>[p(" 添加 ")]),_:1},8,["disabled","loading"])])]),default:n(()=>[t(k,{ref_key:"addAccountFormRef",ref:u,model:a(e),rules:g,"label-width":"200px"},{default:n(()=>[t(c,{label:"账户Cookie",prop:"cookie"},{default:n(()=>[t(r,{type:"textarea",modelValue:a(e).cookie,"onUpdate:modelValue":o[0]||(o[0]=l=>a(e).cookie=l),rows:"5"},null,8,["modelValue"])]),_:1}),t(c,{label:"账号名称",prop:"username"},{default:n(()=>[t(r,{modelValue:a(e).username,"onUpdate:modelValue":o[1]||(o[1]=l=>a(e).username=l),disabled:""},null,8,["modelValue"])]),_:1}),t(c,{label:"账号等级",prop:"vipType"},{default:n(()=>[t(r,{modelValue:a(e).vipType,"onUpdate:modelValue":o[2]||(o[2]=l=>a(e).vipType=l),disabled:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}});export{K as default};
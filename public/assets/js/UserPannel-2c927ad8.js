import{d as V,r as t,l as T,s as D,a as j,o as I,c as U,b as f,u as g,F as x,e as G,f as v,_}from"./index-cfb0db5c.js";import{d as M,a as N,b as z,c as B}from"./user-37e66b78.js";import{E as r}from"./request-0f502e21.js";const q=V("UserPannel",()=>{const d=t({announce:"",announceSwitch:!1,debug:!1,haveAccount:!1,havePassword:!1,haveLogin:!1,userAgent:"",ishttps:document.location.protocol==="https:",pending:!1}),m=async()=>{d.value.pending=!0;const e=await M()??"failed";d.value.pending=!1,e.toString()!=="failed"&&(Object.assign(d.value,{...e.data,announce:e.data.announce.replace(/\[NextLine\]/g,"<br>")}),D(e.data.haveLogin?"1":"0"))},a=t({url:"",pwd:"",password:"",dir:"/",bd_user_id:null,pending:!1}),p=t(null),l=t([]),o=t({randsk:"",shareid:0,uk:0,sign:"",timestamp:0}),u=t([]),w=t(null),F=async(e,s)=>{a.value.dir=e,await h(s)},k=()=>{const e=a.value.dir.split("/");e.pop();const s=e.join("/");return s===""?"/":s},h=async(e="0",s=!1)=>{const i=await N({url:a.value.url,pwd:a.value.pwd,dir:a.value.dir,password:a.value.password})??"failed";if(i.toString()==="failed")return;const{message:c,data:n}=i;return r.success(c),Object.assign(o.value,{randsk:n.randsk,shareid:n.shareid,uk:n.uk}),l.value=n.list,a.value.dir!==null&&a.value.dir!==""&&a.value.dir!=="/"?l.value=[{isdir:"1",path:k(),server_filename:"..",size:"0",server_mtime:s?l.value[0].server_mtime:e},...n.list]:l.value=n.list,"success"},L=async()=>{const e=await z({uk:o.value.uk,shareid:o.value.shareid,password:a.value.password})??"failed";if(e.toString()==="failed")return;const{message:s,data:i}=e;r.success(s),Object.assign(o.value,i)},b=async e=>{const s=await B({fs_ids:Array.isArray(e)?e:[e],...o.value,password:a.value.password,bd_user_id:a.value.bd_user_id}).catch(async c=>{const{message:n}=c;n.includes("当前签名已过期")?(r.error(n),r.info("自动重新获取中..."),await P(p.value)):n.includes("您没有权限指定下载的用户")&&(D("0"),r.error("登陆已过期,请重新登陆"),location.reload())})??"failed";if(!s||s==="failed")return;const{data:i}=s;r.success("解析成功"),y.value=i,S.value=!0},P=async e=>{e&&await e.validate(()=>{})&&(a.value.pending=!0,await h("0",!0),await L(),a.value.pending=!1)},E=async()=>{a.value.pending=!0;let e=!1;if(u.value=u.value.filter(i=>{var n;if(e)return!1;const c=i.isdir=="1";return c&&(e=!0,r.error("暂不支持下载文件夹"),(n=w.value)==null||n.clearSelection()),!c}),e){a.value.pending=!1;return}const s=u.value.map(i=>i.fs_id);await b(s),a.value.pending=!1},y=t([]),S=t(!1),O=t([]),A=t(!1),C=t(T()),R=t(null);return{getConfig:m,getDir:F,getFileList:h,getFileSign:L,freshFileList:P,downloadFile:b,downloadFiles:E,clientConfig:d,getFileListForm:a,getFileListFormRef:p,filelist:l,requestParams:o,selectedRows:u,fileListTableRef:w,dlinkList:y,downloadDialogVisible:S,selectDownloadFiles:O,aria2ConfigForm:C,aria2ConfigDialogVisible:A,aria2ConfigFormRef:R,saveAria2Config:async e=>{e&&await e.validate(()=>{})&&(localStorage.setItem("aria2_config",JSON.stringify(C.value)),r.success("保存成功"),A.value=!1)}}}),J=j({__name:"UserPannel",setup(d){const m=v(()=>_(()=>import("./announceDialog-ac7ca81f.js"),["assets/js/announceDialog-ac7ca81f.js","assets/js/base-c9f2c081.js","assets/js/request-0f502e21.js","assets/js/index-cfb0db5c.js","assets/css/index-e5387e95.css","assets/css/base-34dba8e3.css","assets/js/el-overlay-0f3d8dc9.js","assets/js/vnode-525b2b91.js","assets/js/focus-trap-1d767087.js","assets/js/isNil-c75b1b34.js","assets/js/scroll-ed2e5869.js","assets/js/index-1ff9f628.js","assets/css/el-overlay-49152403.css","assets/js/user-37e66b78.js"])),a=v(()=>_(()=>import("./getFileListForm-f665e927.js"),["assets/js/getFileListForm-f665e927.js","assets/js/base-c9f2c081.js","assets/js/request-0f502e21.js","assets/js/index-cfb0db5c.js","assets/css/index-e5387e95.css","assets/css/base-34dba8e3.css","assets/js/el-loading-de45b7e3.js","assets/css/el-loading-d0f2d079.css","assets/js/el-card-3e676af9.js","assets/css/el-card-208b2445.css","assets/js/el-form-item-56a0a280.js","assets/js/use-form-item-3237c7a3.js","assets/js/_initCloneObject-43c7484e.js","assets/css/el-form-item-7d5af5e1.css","assets/js/el-button-9a48fdeb.js","assets/js/index-1ff9f628.js","assets/css/el-button-2cb60ae5.css","assets/js/el-input-ee51bd68.js","assets/js/isNil-c75b1b34.js","assets/css/el-input-45b6b5ba.css","assets/js/copy-d313c8e7.js","assets/js/_commonjsHelpers-725317a4.js","assets/js/user-37e66b78.js","assets/css/getFileListForm-5d45f733.css"])),p=v(()=>_(()=>import("./showFileList-4b8d528f.js"),["assets/js/showFileList-4b8d528f.js","assets/js/base-c9f2c081.js","assets/js/request-0f502e21.js","assets/js/index-cfb0db5c.js","assets/css/index-e5387e95.css","assets/css/base-34dba8e3.css","assets/js/el-loading-de45b7e3.js","assets/css/el-loading-d0f2d079.css","assets/js/el-card-3e676af9.js","assets/css/el-card-208b2445.css","assets/js/el-table-column-d7158ead.js","assets/js/el-popper-26f2a682.js","assets/js/_initCloneObject-43c7484e.js","assets/js/isNil-c75b1b34.js","assets/js/use-form-item-3237c7a3.js","assets/js/focus-trap-1d767087.js","assets/css/el-popper-9e0bc416.css","assets/js/_commonjsHelpers-725317a4.js","assets/css/el-table-column-838a2945.css","assets/js/el-space-da67ed7a.js","assets/js/vnode-525b2b91.js","assets/css/el-space-417b6673.css","assets/js/user-37e66b78.js"])),l=v(()=>_(()=>import("./downloadDialog-a1cca191.js"),["assets/js/downloadDialog-a1cca191.js","assets/js/base-c9f2c081.js","assets/js/request-0f502e21.js","assets/js/index-cfb0db5c.js","assets/css/index-e5387e95.css","assets/css/base-34dba8e3.css","assets/js/el-overlay-0f3d8dc9.js","assets/js/vnode-525b2b91.js","assets/js/focus-trap-1d767087.js","assets/js/isNil-c75b1b34.js","assets/js/scroll-ed2e5869.js","assets/js/index-1ff9f628.js","assets/css/el-overlay-49152403.css","assets/js/el-table-column-d7158ead.js","assets/js/el-popper-26f2a682.js","assets/js/_initCloneObject-43c7484e.js","assets/js/use-form-item-3237c7a3.js","assets/css/el-popper-9e0bc416.css","assets/js/_commonjsHelpers-725317a4.js","assets/css/el-table-column-838a2945.css","assets/js/el-space-da67ed7a.js","assets/css/el-space-417b6673.css","assets/js/el-button-9a48fdeb.js","assets/css/el-button-2cb60ae5.css","assets/js/el-text-549ab175.js","assets/css/el-text-557ef0ff.css","assets/js/copy-d313c8e7.js","assets/js/user-37e66b78.js","assets/css/downloadDialog-abec4f6c.css"])),o=v(()=>_(()=>import("./aria2ConfigDialog-5cc1c6e9.js"),["assets/js/aria2ConfigDialog-5cc1c6e9.js","assets/js/base-c9f2c081.js","assets/js/request-0f502e21.js","assets/js/index-cfb0db5c.js","assets/css/index-e5387e95.css","assets/css/base-34dba8e3.css","assets/js/el-overlay-0f3d8dc9.js","assets/js/vnode-525b2b91.js","assets/js/focus-trap-1d767087.js","assets/js/isNil-c75b1b34.js","assets/js/scroll-ed2e5869.js","assets/js/index-1ff9f628.js","assets/css/el-overlay-49152403.css","assets/js/el-form-item-56a0a280.js","assets/js/use-form-item-3237c7a3.js","assets/js/_initCloneObject-43c7484e.js","assets/css/el-form-item-7d5af5e1.css","assets/js/el-button-9a48fdeb.js","assets/css/el-button-2cb60ae5.css","assets/js/el-input-ee51bd68.js","assets/css/el-input-45b6b5ba.css","assets/js/user-37e66b78.js"])),u=q();return I(u.getConfig),(w,F)=>(G(),U(x,null,[f(g(m)),f(g(a)),f(g(p)),f(g(l)),f(g(o))],64))}});const X=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));export{X as U,q as u};
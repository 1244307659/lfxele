(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fedeada"],{a55b:function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"loginWrap"},[s("header",[s("router-link",{attrs:{to:"/home"}},[s("i",{staticClass:"el-icon-arrow-left"})]),s("div",[e._v("密码登录")])],1),s("div",{staticClass:"form"},[s("section",{staticClass:"input_c"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"账号"},domProps:{value:e.username},on:{input:function(a){a.target.composing||(e.username=a.target.value)}}})]),s("section",{staticClass:"input_c"},["checkbox"===(e.value?"text":"password")?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"密码",type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{change:function(a){var s=e.password,t=a.target,o=!!t.checked;if(Array.isArray(s)){var r=null,n=e._i(s,r);t.checked?n<0&&(e.password=s.concat([r])):n>-1&&(e.password=s.slice(0,n).concat(s.slice(n+1)))}else e.password=o}}}):"radio"===(e.value?"text":"password")?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"密码",type:"radio"},domProps:{checked:e._q(e.password,null)},on:{change:function(a){e.password=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"密码",type:e.value?"text":"password"},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}}),s("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#909399"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),s("section",{staticClass:"input_c"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.capCode,expression:"capCode"}],attrs:{type:"text",placeholder:"验证码"},domProps:{value:e.capCode},on:{input:function(a){a.target.composing||(e.capCode=a.target.value)}}}),s("div",[s("img",{attrs:{src:e.capUrl,alt:""}}),s("div",{on:{click:e.changeCap}},[s("p",[e._v("看不清")]),s("p",[e._v("换一张")])])])])]),s("p",{staticClass:"tips"},[e._v(" 温馨提示：未注册过的账号，登录时将自动注册 ")]),s("p",{staticClass:"tips"},[e._v(" 注册过的用户可凭账号密码登录 ")]),s("div",{staticClass:"loginBtn",on:{click:function(a){return e.loginAction(e.username)}}},[e._v("登录")]),s("router-link",{attrs:{to:"/forget"}},[e._v("重置密码?")])],1)},o=[],r={name:"Login",data:function(){return{value:"false",username:"",password:"",capCode:"",capUrl:""}},created:function(){this.requestCode()},methods:{loginAction:function(e){var a=this;this.axios.post("/v2/login",{username:this.username,password:this.password,captcha_code:this.capCode}).then((function(e){console.log(e),void 0!=e.username?(a.$router.push("/profile"),localStorage.setItem("username",e.username),localStorage.setItem("userid",e.user_id)):"密码错误"==e.message?alert("密码错误"):"验证码不正确"==e.message&&alert("验证码不正确")})).catch((function(e){}))},requestCode:function(){var e=this;this.axios.post("/v1/captchas").then((function(a){e.capUrl=a.code})).catch((function(e){}))},changeCap:function(){this.requestCode()}}},n=r,i=(s("d6db"),s("2877")),c=Object(i["a"])(n,t,o,!1,null,null,null);a["default"]=c.exports},d6db:function(e,a,s){"use strict";var t=s("e67a"),o=s.n(t);o.a},e67a:function(e,a,s){}}]);
//# sourceMappingURL=chunk-6fedeada.1432daa0.js.map
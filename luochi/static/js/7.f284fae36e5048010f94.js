webpackJsonp([7],{"87lM":function(n,t,e){var o=e("slD3");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e("rjj0")("f3eba760",o,!0)},Hm15:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n.login-container[data-v-70d2a273] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background-color: #2d3a4b;\n  background-image: url(https://pan.baidu.com/static/images/16new/bg1.jpg);\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: background-image 2s;\n  -webkit-transition: background-image 2s;\n}\n.login-container .login-form[data-v-70d2a273] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    width: 520px;\n    padding: 35px 35px 15px 35px;\n    margin: 120px auto;\n}\n.login-container .tips[data-v-70d2a273] {\n    font-size: 14px;\n    color: #fff;\n    margin-bottom: 10px;\n}\n.login-container .tips span[data-v-70d2a273]:first-of-type {\n      margin-right: 16px;\n}\n.login-container .svg-container[data-v-70d2a273] {\n    padding: 6px 5px 6px 15px;\n    color: #889aa4;\n    vertical-align: middle;\n    width: 30px;\n    display: inline-block;\n}\n.login-container .svg-container_login[data-v-70d2a273] {\n      font-size: 20px;\n}\n.login-container .title[data-v-70d2a273] {\n    font-size: 26px;\n    font-weight: 400;\n    color: #eee;\n    margin: 0px auto 40px auto;\n    text-align: center;\n    font-weight: bold;\n}\n.login-container .show-pwd[data-v-70d2a273] {\n    position: absolute;\n    right: 10px;\n    top: 7px;\n    font-size: 16px;\n    color: #889aa4;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n",""])},"T+/8":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"login",data:function(){return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:function(n,t,e){["admin","editor","123"].indexOf(t.trim())>=0?e():e(new Error("请输入正确的用户名"))}}],password:[{required:!0,trigger:"blur",validator:function(n,t,e){t.length<5?e(new Error("密码不能小于5位")):e()}}]},loading:!1,pwdType:"password",bgNum:0,bgList:["https://pan.baidu.com/static/images/16new/bg3.jpg","https://pan.baidu.com/static/images/16new/bg2.jpg","https://pan.baidu.com/static/images/16new/bg1.jpg","https://pan.baidu.com/static/images/16new/bg4.jpg"]}},mounted:function(){var n=this;setInterval(function(){n.bgNum>=n.bgList.length-1?n.bgNum=0:n.bgNum++},5e3)},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var n=this;this.$refs.loginForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;n.loading=!0,n.$store.dispatch("Login",n.loginForm).then(function(){n.loading=!1,location.href="index.html"}).catch(function(){n.loading=!1})})}}},i={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"login-container",style:{"background-image":"url("+this.bgList[this.bgNum]+")"}},[e("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{autoComplete:"on",model:n.loginForm,rules:n.loginRules,"label-position":"left"}},[e("h3",{staticClass:"title"},[n._v("中国黄金贵州锦丰")]),n._v(" "),e("el-form-item",{attrs:{prop:"username"}},[e("span",{staticClass:"svg-container svg-container_login"},[e("svg-icon",{attrs:{"icon-class":"user"}})],1),n._v(" "),e("el-input",{attrs:{name:"username",type:"text",autoComplete:"on",placeholder:"用户名"},model:{value:n.loginForm.username,callback:function(t){n.$set(n.loginForm,"username",t)},expression:"loginForm.username"}})],1),n._v(" "),e("el-form-item",{attrs:{prop:"password"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"password"}})],1),n._v(" "),e("el-input",{attrs:{name:"password",type:n.pwdType,autoComplete:"on",placeholder:"密码"},nativeOn:{keyup:function(t){if(!("button"in t)&&n._k(t.keyCode,"enter",13,t.key))return null;n.handleLogin(t)}},model:{value:n.loginForm.password,callback:function(t){n.$set(n.loginForm,"password",t)},expression:"loginForm.password"}}),n._v(" "),e("span",{staticClass:"show-pwd",on:{click:n.showPwd}},[e("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),n._v(" "),e("el-form-item",[e("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:n.loading},nativeOn:{click:function(t){t.preventDefault(),n.handleLogin(t)}}},[n._v("\n              登 录\n            ")])],1)],1)],1)},staticRenderFns:[]};var a=e("VU/8")(o,i,!1,function(n){e("87lM"),e("g11D")},"data-v-70d2a273",null);t.default=a.exports},g11D:function(n,t,e){var o=e("Hm15");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e("rjj0")("5b96dc70",o,!0)},slD3:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"/* reset element-ui css */\n.login-container .el-input {\n  display: inline-block;\n  height: 47px;\n  width: 85%;\n}\n.login-container .el-input input {\n    background: transparent;\n    border: 0px;\n    -webkit-appearance: none;\n    border-radius: 0px;\n    padding: 12px 5px 12px 15px;\n    color: #eee;\n    height: 47px;\n}\n.login-container .el-input input:-webkit-autofill {\n      -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;\n}\n.login-container .el-form-item {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  color: #454545;\n}\n",""])}});
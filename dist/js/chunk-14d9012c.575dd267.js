(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14d9012c"],{"12c2":function(t,e,n){"use strict";var r=n("8b33"),i=n.n(r);i.a},1859:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error",class:{textCenter:t.isCenter},style:{visibility:t.msg?"visible":"hidden"}},[t._v(t._s(t.msg))])},i=[],a={name:"FormError",props:{isCenter:{type:Boolean,default:!1},msg:{type:String,default:"错误消息"}}},s=a,o=(n("51d1"),n("2877")),u=Object(o["a"])(s,r,i,!1,null,"7fadbc0a",null);e["a"]=u.exports},"3d9c":function(t,e,n){"use strict";var r=n("5704"),i=n.n(r);i.a},4181:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-center"},[t._t("default")],2)},i=[],a={name:"Center"},s=a,o=(n("12c2"),n("2877")),u=Object(o["a"])(s,r,i,!1,null,"69034e90",null);e["a"]=u.exports},"51d1":function(t,e,n){"use strict";var r=n("b2bf"),i=n.n(r);i.a},5704:function(t,e,n){},"8b33":function(t,e,n){},b2bf:function(t,e,n){},b8b8:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Center",[n("div",{staticClass:"form"},[n("div",{staticClass:"form-item"},[n("div",{staticClass:"item-title"},[t._v("昵称:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.nickname,expression:"userInfo.nickname"}],attrs:{type:"text"},domProps:{value:t.userInfo.nickname},on:{input:[function(e){e.target.composing||t.$set(t.userInfo,"nickname",e.target.value)},function(e){return t.vaildateEmpty("nickname","昵称不能为空")}]}}),n("FormError",{attrs:{msg:t.error.nickname}})],1),n("div",{staticClass:"form-item"},[n("div",{staticClass:"item-title"},[t._v("账号:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.loginId,expression:"userInfo.loginId"}],attrs:{type:"text"},domProps:{value:t.userInfo.loginId},on:{input:[function(e){e.target.composing||t.$set(t.userInfo,"loginId",e.target.value)},function(e){return t.vaildateEmpty("loginId","账号不能为空")}]}}),n("FormError",{attrs:{msg:t.error.loginId}})],1),n("div",{staticClass:"form-item"},[n("div",{staticClass:"item-title"},[t._v("密码:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.loginPwd,expression:"userInfo.loginPwd"}],attrs:{type:"password"},domProps:{value:t.userInfo.loginPwd},on:{input:[function(e){e.target.composing||t.$set(t.userInfo,"loginPwd",e.target.value)},function(e){return t.vaildateEmpty("loginPwd","密码不能为空")}]}}),n("FormError",{attrs:{msg:t.error.loginPwd}})],1),n("div",{staticClass:"form-item"},[n("div",{staticClass:"item-title"},[t._v("重复密码:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.pwdAgain,expression:"userInfo.pwdAgain"}],attrs:{type:"password"},domProps:{value:t.userInfo.pwdAgain},on:{input:[function(e){e.target.composing||t.$set(t.userInfo,"pwdAgain",e.target.value)},function(e){return t.vaildatePwdAgain()}]}}),n("FormError",{attrs:{msg:t.error.pwdAgain}})],1),n("div",{staticClass:"form-item"},[n("button",{staticClass:"loginBtn",on:{click:function(e){return t.submitFrom()}}},[t._v("注册")])])])])},i=[],a=(n("96cf"),n("1da1")),s=n("4181"),o=n("1859"),u=n("6e4f"),l={name:"registered",data:function(){return{userInfo:{loginId:"",loginPwd:"",pwdAgain:"",nickName:""},error:{loginId:"",loginPwd:"",pwdAgain:"",nickname:""}}},components:{Center:s["a"],FormError:o["a"]},methods:{vaildateEmpty:function(t,e){return this.userInfo[t]?(this.error[t]="",!0):(this.error[t]=e,!1)},vaildatePwdAgain:function(){var t=this.vaildateEmpty("pwdAgain","重复密码不能为空");if(t)return this.userInfo.loginPwd===this.userInfo.pwdAgain||(this.error.pwdAgain="两次密码不一致",!1)},submitFrom:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.vaildateEmpty("nickname","昵称不能为空")&t.vaildateEmpty("loginId","账号不能为空")&t.vaildateEmpty("loginPwd","密码不能为空")&t.vaildatePwdAgain())){e.next=5;break}return e.next=3,Object(u["c"])(t.userInfo);case 3:n=e.sent,n.data?(alert("注册成功"),t.$router.push({name:"login"})):t.error.loginId=n.msg;case 5:case"end":return e.stop()}}),e)})))()}}},c=l,d=(n("3d9c"),n("2877")),m=Object(d["a"])(c,r,i,!1,null,"7f6de24b",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-14d9012c.575dd267.js.map
webpackJsonp([4],{"7JJK":function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.body {\r\n  background-color: #f4f4f4;\r\n  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,\r\n    Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,\r\n    sans-serif;\r\n  margin-top: 0px;\r\n  padding: 0px;\n}\n#app {\r\n  padding: 0px;\r\n  margin-top: 0px;\n}\ndiv {\r\n  background-color: white;\r\n  width: 100%;\r\n  padding: 8px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\n}\n.font-red {\r\n  color: red;\n}\n.font-green {\r\n  color: #81db7b;\n}\nb {\r\n  margin: 1%;\n}\np {\r\n  margin-left: 1%;\r\n  text-indent: 20px;\r\n  line-height: normal;\n}\ntable {\r\n  border: 1px solid #ccc;\r\n  width: 95%;\r\n  margin: 2%;\r\n  padding: 0;\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n  table-layout: fixed;\r\n  font-size: small;\n}\ntable thead {\r\n  background-color: #f4f4f4;\n}\ntable tr {\r\n  border: 1px solid #ddd;\r\n  padding: 5px;\n}\n.list-table th,\r\n.list-table td {\r\n  padding: 10px;\r\n  text-align: left;\r\n  border: 1px solid #ccc;\n}\n.detail-table {\r\n  margin: 0px;\r\n  width: 100%;\r\n  border: 0px;\r\n  table-layout: auto;\n}\n.detail-table th {\r\n  padding: 10px;\r\n  text-align: left;\r\n  background-color: white;\r\n  border: 0px;\n}\n.detail-table td {\r\n  padding: 5px;\r\n  text-align: left;\r\n  border: 1px solid #ccc;\n}\n.detail-table .table-td {\r\n  padding: 0px;\r\n  border-left: 0px;\r\n  border-right: 0px;\n}\ntable th {\r\n  text-transform: uppercase;\r\n  font-size: 12px;\r\n  letter-spacing: 1px;\n}\n.text-hidden {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\n}\n.d-img {\r\n  position: relative;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  border: 1px solid #f5f5f5;\r\n  margin-left: 10px;\r\n  width: 35%;\n}\n.d-img > img {\r\n  max-width: 100%;\r\n  max-height: 100px;\r\n  vertical-align: middle;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin: 0 auto;\n}\r\n",""])},AuNh:function(t,n,e){var r=e("gSSv");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("29430068",r,!0)},LPW7:function(t,n,e){var r=e("vFX4");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("4f5a9e9a",r,!0)},MVMl:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("table",{staticClass:"full-width list-table"},[t._m(0),t._v(" "),e("tr",[e("td",[t._v("共"+t._s(t.total.allNum)+"台")]),t._v(" "),e("td",{staticClass:"font-green"},[t._v(t._s(t.total.excellent)+"台")]),t._v(" "),e("td",{staticClass:"font-green"},[t._v(t._s(t.total.good)+"台")]),t._v(" "),e("td",{staticClass:"font-green"},[t._v(t._s(t.total.average)+"台")]),t._v(" "),e("td",{staticClass:"font-red"},[t._v(t._s(t.total.poor)+"台")])])])])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("th",{staticStyle:{width:"25%"}}),t._v(" "),e("th",[t._v("优秀")]),t._v(" "),e("th",[t._v("良好")]),t._v(" "),e("th",[t._v("及格")]),t._v(" "),e("th",[t._v("不及格")])])])}]};var a=e("VU/8")({props:["total"],data:function(){return{}}},r,!1,function(t){e("bXTb")},null,null).exports,i=e("6BN9"),l=e.n(i),o=e("WIY8"),s=e.n(o),c={props:["data"],data:function(){return{up:l.a,down:s.a}},methods:{getDevice:function(t){var n=this.$el.querySelector(t);document.body.scrollTop=n.offsetTop,document.documentElement.scrollTop=n.offsetTop}}},d={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("table",{staticClass:"full-width list-table"},[t._m(0),t._v(" "),t._l(t.data,function(n){return e("tr",{class:n.realTimeScore>60?"":"font-red"},[e("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(n.sort))]),t._v(" "),e("td",[t._v(t._s(n.equipmentName))]),t._v(" "),e("td",[t._v(t._s(n.temperature))]),t._v(" "),e("td",[t._v("\n        "+t._s(n.realTimeScore)+"\n        "),e("img",{staticClass:"di-item-ico-table",attrs:{src:n.realTimeScore-n.startScore<0?t.down:t.up}})]),t._v(" "),e("td",[t._v(t._s(n.startScore))]),t._v(" "),e("td",[t._v(t._s(n.percent)+" %")])])})],2)])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("th",[t._v("序号")]),t._v(" "),e("th",[t._v("设备名称")]),t._v(" "),e("th",[t._v("温度")]),t._v(" "),e("th",[t._v("分数")]),t._v(" "),e("th",[t._v("原始分数")]),t._v(" "),e("th",[t._v("百分比")])])])}]};var v=e("VU/8")(c,d,!1,function(t){e("LPW7")},null,null).exports,p={props:["data"],data:function(){return{up:l.a,down:s.a}}},f={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",t._l(t.data,function(n){return e("div",[e("table",{staticClass:"full-width detail-table"},[e("thead",[e("th",{attrs:{colspan:"2"}},[t._v("\n          "+t._s(n.sort)+".设备名称: "+t._s(n.equipmentName)+"\n          "),e("span",{staticClass:"font-red"},[t._v("\n            "+t._s(n.realTimeScore)+"\n            "),e("img",{staticClass:"di-item-ico-table",attrs:{src:n.realTimeScore-n.startScore<0?t.down:t.up}})])])]),t._v(" "),e("tr",[e("td",{staticClass:"d-img",attrs:{rowspan:"6"}},[e("img",{attrs:{src:"http://47.101.57.230/img/"+n.sort+".jpg"}})]),t._v(" "),e("td",{staticClass:"table-td"},[e("table",{staticClass:"full-width detail-table"},[e("tr",[e("td",[t._v("\n                分数:\n                "),e("span",{class:n.realTimeScore>60?"font-green":"font-red"},[t._v(t._s(n.realTimeScore))])])]),t._v(" "),e("tr",[e("td",[t._v("\n                原始分数:\n                "),e("span",{staticClass:"font-green"},[t._v(t._s(n.startScore))])])]),t._v(" "),e("tr",[e("td",[t._v("\n                百分比:\n                "),e("span",{staticClass:"font-red"},[t._v(t._s(n.percent)+" %")])])]),t._v(" "),e("tr",[e("td",[e("span",{staticStyle:{float:"left"}},[t._v("\n                  温度:\n                  "),e("span",{staticClass:"font-red"},[t._v(t._s(n.temperature))])]),t._v(" "),e("span",{staticStyle:{float:"right"}},[t._v("\n                  正常温度:\n                  "),e("span",{staticClass:"font-green"},[t._v(t._s(n.temperature))])])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"background-color":"yellow"}},[e("span",[t._v("问题建议: "+t._s(n.problem))])])])])])])])])}))},staticRenderFns:[]};var _=e("VU/8")(p,f,!1,function(t){e("AuNh")},null,null).exports,u=(e("0xDb"),e("x99H")),g={data:function(){return{title:this.dayFormat()+"报告",devices:{data:null,kData:null,warningList:[]},beltlineName:"",report:{excellent:0,good:0,average:0,poor:0,all:0}}},components:{dataTableOfPhone:a,deviceTableOfPhone:v,deviceDetailsTableOfPhone:_},watch:{$route:function(t){this.init()}},mounted:function(){this.init()},methods:{init:function(){this.id=this.$route.query.id,this.getListData()},getListData:function(){var t=this;Object(u.e)().then(function(n){t.list=n.data,t.list.forEach(function(n,e){n.id===t.id&&(t.beltlineName=n.proLineName)})}),this.getProlineRealtime(this.id)},getProlineRealtime:function(t){var n=this,e={proLineId:t,isAll:!1};Object(u.f)(e).then(function(t){n.devices.data=t.data;var e=t.data.warningList;e.sort(function(t,n){return t.sort-n.sort}),e.forEach(function(t,e,r){r[e].percent=((t.realTimeScore-t.startScore)/t.startScore*100).toFixed(0),r[e].beltlineName=n.beltlineName}),console.log(e),n.warningList=e},function(){n.devices.data=null})},getProlineKData:function(t,n){var e=this,r={proLineId:t};Object(u.d)(r).then(function(t){e.$set(e.devices,"kData",t.data)})},dayFormat:function(){var t=new Date;return t.getMonth()+1+"月"+t.getDate()+"日"}},computed:{total:function(){var t=0,n=0,e=0,r=0,a=0,i=0;if(null==this.devices.data||null==this.devices.data.warningList)return{allNum:t,normal:n,poor:e,excellent:r,good:a,average:i};t=this.devices.data.warningList.length;for(var l=0;l<this.devices.data.warningList.length;l++){var o=this.devices.data.warningList[l];o.realTimeScore>=60?(n++,o.realTimeScore<=70?i++:o.realTimeScore>70&&o.realTimeScore<90?a++:o.realTimeScore>=90&&r++):e++}return{allNum:t,normal:n,poor:e,excellent:r,good:a,average:i}}}},m={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"body"},[e("div",[e("b",[t._v(t._s(t.beltlineName)+t._s(t.title))])]),t._v(" "),e("div",[e("b",[t._v("总结")]),t._v(" "),e("p",[t._v("\n      截止目前为止，"+t._s(t.beltlineName)+"总共设备"+t._s(t.total.allNum)+"台，运行正常\n      "),e("span",{staticClass:"font-green"},[t._v(t._s(t.total.normal))]),t._v("个，异常\n      "),e("span",{staticClass:"font-red"},[t._v(t._s(t.total.poor))]),t._v("个。\n    ")])]),t._v(" "),e("div",[e("b",[t._v("数据")]),t._v(" "),e("data-table-of-phone",{attrs:{total:t.total}})],1),t._v(" "),e("div",[e("b",[t._v("设备列表")]),t._v(" "),e("device-table-of-phone",{attrs:{data:t.warningList}})],1),t._v(" "),e("device-details-table-of-phone",{attrs:{data:t.warningList}})],1)},staticRenderFns:[]};var h=e("VU/8")(g,m,!1,function(t){e("dbqS")},null,null);n.default=h.exports},bXTb:function(t,n,e){var r=e("hLEw");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("59abb7e8",r,!0)},dbqS:function(t,n,e){var r=e("7JJK");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("7cccfe34",r,!0)},gSSv:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.di-item-ico-table{width: 10px;\n}\r\n",""])},hLEw:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},vFX4:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.di-item-ico-table{width: 10px;\n}\r\n",""])}});
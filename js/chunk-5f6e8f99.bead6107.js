(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f6e8f99"],{2642:function(t,e,a){"use strict";a.d(e,"n",(function(){return s})),a.d(e,"m",(function(){return n})),a.d(e,"r",(function(){return i})),a.d(e,"l",(function(){return o})),a.d(e,"q",(function(){return c})),a.d(e,"j",(function(){return u})),a.d(e,"h",(function(){return l})),a.d(e,"b",(function(){return d})),a.d(e,"c",(function(){return p})),a.d(e,"o",(function(){return m})),a.d(e,"f",(function(){return h})),a.d(e,"g",(function(){return f})),a.d(e,"i",(function(){return g})),a.d(e,"k",(function(){return S})),a.d(e,"e",(function(){return b})),a.d(e,"a",(function(){return k})),a.d(e,"d",(function(){return v})),a.d(e,"p",(function(){return y}));var r=a("66df"),s=function(t,e,a){return r["a"].request({url:"/api/standardValues/getSopTagFilteByEquipment?qc1soptagId=".concat(t,"&qc2soptagId=").concat(e,"&qcIndex=").concat(a),method:"get"})},n=function(t){return r["a"].request({url:"/api/testprocess/getSopByQcIndex?qcIndex=".concat(t),method:"get"})},i=function(t){return r["a"].request({url:"/api/testprocess/setProductLineSnBySop",method:"post",data:t})},o=function(){return r["a"].request({url:"/api/testprocess/getLineSn",method:"get"})},c=function(t){return r["a"].request({url:"/api/testprocess/removeTask?id=".concat(t),method:"get"})},u=function(){return r["a"].request({url:"/api/equipment/getAllEquipmentFunctype",method:"get"})},l=function(t,e,a){return r["a"].request({url:"/api/testprocess/findSopByPage?pageIndex=".concat(t,"&pageSize=").concat(e,"&qc=").concat(a),method:"get"})},d=function(t){return r["a"].request({url:"/api/testprocess/addSop",method:"post",data:t})},p=function(t){return r["a"].request({url:"/api/testprocess/editSop",method:"post",data:t})},m=function(t){return r["a"].request({url:"/api/testprocess/removeSop?sopId=".concat(t),method:"get"})},h=function(t){return r["a"].request({url:"/api/testprocess/findAllItemParam?qcIndex=".concat(t),method:"get"})},f=function(t){return r["a"].request({url:"/api/testprocess/findSopByKey?funcTypeId=".concat(t),method:"get"})},g=function(t){return r["a"].request({url:"/api/testprocess/findSopItemBySop?sopid=".concat(t),method:"get"})},S=function(t){return r["a"].request({url:"/api/testprocess/GetItemParamAddByItemId?itemId=".concat(t),method:"get"})},b=function(t){return r["a"].request({url:"/api/testprocess/EditSopItemPlcAdd",method:"post",data:t})},k=function(t){return r["a"].request({url:"/api/testprocess/AddItemParamPlcAdd",method:"post",data:t})},v=function(t){return r["a"].request({url:"/api/testprocess/EditSopItemParamAdd",method:"post",data:t})},y=function(t){return r["a"].request({url:"/api/testprocess/RemoveSopItemParamAdd?id=".concat(t),method:"get"})}},"51d1":function(t,e,a){"use strict";var r=a("8377"),s=a.n(r);s.a},"7c11":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n}));var r=[{value:"JS-9-1.11",label:"JS-9-1.11",children:[{value:"A型",label:"A型",children:null},{value:"B型",label:"B型",children:null}]},{value:"JS-9-1.268",label:"JS-9-1.268",children:[{value:"R型电机",label:"R型电机",children:null}]},{value:"JS-9-1.142",label:"JS-9-1.142",children:[{value:"B型",label:"B型",children:null},{value:"M型",label:"M型",children:null}]},{value:"JS-9-1.444",label:"JS-9-1.444",children:[{value:"A型",label:"A型",children:null}]}],s=[{value:"JS-9-1.146",label:"JS-9-1.146",children:[{value:"SS型",label:"SS型",children:null},{value:"A型",label:"A型",children:null},{value:"B型",label:"B型",children:null},{value:"123",label:"123",children:null},{value:"C型",label:"C型",children:null},{value:"D型",label:"D型",children:null},{value:"DD型",label:"DD型",children:null}]},{value:"JS-9-1.380",label:"JS-9-1.380",children:[{value:"SS型",label:"SS型",children:null},{value:"A型",label:"A型",children:null}]},{value:"JS-9-1.249",label:"JS-9-1.249",children:[{value:"S型",label:"S型",children:null}]},{value:"JS-9-1.224",label:"JS-9-1.224",children:[{value:"A型",label:"A型",children:null}]},{value:"JS-9-1.229",label:"JS-9-1.229",children:[{value:"A型",label:"A型",children:null}]},{value:"JS-9-1.445",label:"JS-9-1.445",children:[{value:"B型",label:"B型",children:null}]},{value:"JS-9-1.234",label:"JS-9-1.234",children:[{value:"10型",label:"10型",children:null}]}],n=[{id:1,typeName:"综合检测"},{id:2,typeName:"静音检测"},{id:3,typeName:"外观检测"}]},8377:function(t,e,a){},bd82:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dooya-container"},[a("Card",[a("Row",{attrs:{gutter:20}},[a("Col",{attrs:{xl:8,sm:16,xs:16}},[a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.formRule,"label-width":80}},[a("FormItem",{attrs:{label:"工作时间",prop:"workTime"}},[a("TimePicker",{staticStyle:{width:"240px"},attrs:{disabled:t.distributed,format:"HH:mm",type:"timerange",steps:[1,30],placement:"bottom-end",placeholder:"请选择"},on:{"on-change":t.timeOnChange,"on-clear":t.timeClear},model:{value:t.formData.workTimeStorage,callback:function(e){t.$set(t.formData,"workTimeStorage",e)},expression:"formData.workTimeStorage"}})],1),a("FormItem",{attrs:{label:"型号",prop:"productClass"}},[a("Input",{attrs:{disabled:t.distributed,placeholder:"请输入"},model:{value:t.formData.productClass,callback:function(e){t.$set(t.formData,"productClass","string"===typeof e?e.trim():e)},expression:"formData.productClass"}})],1),a("FormItem",{attrs:{label:"数量",prop:"taskCount"}},[a("Input",{staticClass:"input-number",attrs:{disabled:t.distributed,placeholder:"请输入",type:"number"},on:{"on-keypress":t.taskCountOnPress,"on-keyup":t.taskCountOnUp},model:{value:t.formData.taskCount,callback:function(e){t.$set(t.formData,"taskCount","string"===typeof e?e.trim():e)},expression:"formData.taskCount"}})],1),a("FormItem",{attrs:{label:"SOP1",prop:"qc1SopId"}},[a("Cascader",{staticStyle:{width:"240px"},attrs:{data:t.qc1List,disabled:t.distributed,trigger:"hover",placeholder:"综合测试的SOP"},on:{"on-change":t.selectOnChangeQC1},model:{value:t.formData.qc1Select,callback:function(e){t.$set(t.formData,"qc1Select",e)},expression:"formData.qc1Select"}})],1),a("FormItem",{attrs:{label:"SOP2",prop:"qc2SopId"}},[a("Cascader",{staticStyle:{width:"240px"},attrs:{data:t.qc2List,disabled:t.distributed,trigger:"hover",placeholder:"静音检测的SOP"},on:{"on-change":t.selectOnChangeQC2},model:{value:t.formData.qc2Select,callback:function(e){t.$set(t.formData,"qc2Select",e)},expression:"formData.qc2Select"}})],1),a("FormItem",[a("Button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary",disabled:t.distributed},on:{click:t.sopSubmit}},[t._v("派发")]),a("Button",{attrs:{type:"error",disabled:!t.distributed},on:{click:t.sopRemove}},[t._v("删除")])],1)],1)],1),a("Col",{attrs:{xl:4,sm:8,xs:8}},[a("div",[t.distributed?a("div",{staticClass:"result"},[a("Tag",{attrs:{color:"success"}},[t._v("派发成功")])],1):t._e(),t.distributed?a("div",{staticClass:"result"},[t._v("\n          sn码："+t._s(t.formCopy.sn)+"\n        ")]):t._e(),t.distributed?a("div",{staticClass:"result"},[t._v("\n          型号："+t._s(t.formCopy.productClass)+"\n        ")]):t._e(),t.distributed?a("div",{staticClass:"result"},[t._v("\n          数量："+t._s(t.formCopy.taskCount)+"件\n        ")]):a("div",{staticClass:"result"},[a("Tag",{attrs:{color:"error"}},[t._v("未派发任务")])],1)])]),a("Col",{attrs:{xl:12,sm:24,xs:24}},[0!==t.formData.workTime.length&&0!==t.todayTask.length?a("Row",{staticClass:"task",staticStyle:{padding:"0 10px"},attrs:{gutter:20}},t._l(t.todayTask,(function(e,r){return a("Col",{key:r,attrs:{span:12}},[a("div",{staticClass:"task-block"},[a("Col",{attrs:{span:10}},[a("div",{staticClass:"task-block-time"},[t._v("\n            "+t._s(e.startTime)+"-"+t._s(e.endTime)+"\n          ")]),a("div",[a("Checkbox",{attrs:{disabled:t.distributed},model:{value:e.work,callback:function(a){t.$set(e,"work",a)},expression:"task.work"}},[t._v("工作")])],1)]),a("Col",{attrs:{span:6}},[a("div",{staticClass:"task-block-task-title"},[t.distributed?a("span",[t._v("\n              任务量\n            ")]):t._e()]),a("div",{staticClass:"task-block-task-number"},[t.distributed?a("span",[t._v(" "+t._s(e.workTask)+"件 ")]):t._e()])]),a("Col",{attrs:{span:8}},[a("Tag",{staticStyle:{"margin-top":"15px"},attrs:{size:"large",color:e.work?"primary":"success"}},[t._v(t._s(e.work?"工作时间":"休息时间"))])],1)],1)])})),1):t._e()],1)],1),t.spinShow?a("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)},s=[],n=(a("28a5"),a("ac6a"),a("6b54"),a("96cf"),a("3b8d")),i=a("7c11"),o=a("c66f"),c=a("0c70"),u=a("2642"),l={data:function(){return{qc1List:[],qc2List:[],qcIndex:"1",snCodeList:[],todayTask:[],formData:{workTime:[],workTimeStorage:[],productClass:"",taskCount:"",qc1Select:[],qc2Select:[],qc1SopId:"",qc1SopTagId:"",qc2SopId:"",qc2SopTagId:"",rest:[]},formRule:{workTime:[{required:!0,message:"请选择工作时间",trigger:"change"}],productClass:[{required:!0,message:"型号不能为空",trigger:"change"},{type:"string",max:20,message:"型号过长",trigger:"change"}],taskCount:[{required:!0,message:"数量不能为空",trigger:"change"},{type:"string",max:4,message:"数量过多",trigger:"change"}],qc1SopId:[{required:!0,message:"请选择SOP1",trigger:"change"}],qc2SopId:[{required:!0,message:"请选择SOP2",trigger:"change"}]},formCopy:{},distributed:!1,spinShow:!1,processId:""}},created:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.getData(),this.isMock){t.next=16;break}return t.next=4,Object(u["n"])("","","1");case 4:if(t.t0=t.sent.data.data,t.t0){t.next=7;break}t.t0=[];case 7:return this.qc1List=t.t0,t.next=10,Object(u["n"])("","","2");case 10:if(t.t1=t.sent.data.data,t.t1){t.next=13;break}t.t1=[];case 13:this.qc2List=t.t1,t.next=18;break;case 16:this.qc1List=i["a"],this.qc2List=i["b"];case 18:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getData:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.spinShow=!0,this.isMock){t.next=9;break}return t.next=4,Object(u["l"])();case 4:e=t.sent,this.distributed=null!==e.data.data,this.distributed?(this.processId=e.data.data.id,this.formCopy=e.data.data,this.formData={workTimeStorage:[this.formCopy.startTime,this.formCopy.endTime],productClass:this.formCopy.productClass,taskCount:this.formCopy.taskCount.toString(),qc1Select:[this.formCopy.qc1SopId.toString(),this.formCopy.qc1SopTagId],qc2Select:[this.formCopy.qc2SopId.toString(),this.formCopy.qc2SopTagId]},this.timeOnChange(this.formData.workTimeStorage),this.todayTask.forEach((function(t,r){a.$set(t,"workTask",e.data.data.workingTimeTask[r]),a.$set(t,"work",0!==e.data.data.workingTimeTask[r])}))):(null!==localStorage.getItem("taskDistribution")&&(this.formData=JSON.parse(Object(c["a"])(this,"taskDistribution"))),null!==localStorage.getItem("todayTask")&&(this.todayTask=JSON.parse(Object(c["a"])(this,"todayTask"))),this.timeOnChange(this.formData.workTimeStorage)),t.next=16;break;case 9:null!==localStorage.getItem("taskDistribution")&&(this.formData=JSON.parse(Object(c["a"])(this,"taskDistribution"))),null!==localStorage.getItem("todayTask")&&(this.todayTask=JSON.parse(Object(c["a"])(this,"todayTask"))),this.timeOnChange(this.formData.workTimeStorage),this.distributed="true"===localStorage.getItem("distributed"),this.formData.createTime=Object(o["a"])(new Date),this.formData.sn=1001,this.formCopy=JSON.parse(JSON.stringify(this.formData));case 16:this.spinShow=!1;case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),selectOnChangeQC1:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.formData.qc1SopId=e[0]||"",this.formData.qc1SopTagId=e[1]||"",t.next=4,Object(u["n"])(this.formData.qc1SopTagId,"","2");case 4:if(t.t0=t.sent.data.data,t.t0){t.next=7;break}t.t0=[];case 7:this.qc2List=t.t0;case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),selectOnChangeQC2:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.formData.qc2SopId=e[0]||"",this.formData.qc2SopTagId=e[1]||"",t.next=4,Object(u["n"])("",this.formData.qc2SopTagId,"1");case 4:if(t.t0=t.sent.data.data,t.t0){t.next=7;break}t.t0=[];case 7:this.qc1List=t.t0;case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),timeOnChange:function(t){if(this.formData.workTime=""!==t[0]?t.join(","):"",0!==this.formData.workTimeStorage.length){var e=parseInt(this.formData.workTimeStorage[0]),a="00"===this.formData.workTimeStorage[0].substring(3)?0:.5,r=e+a,s=parseInt(this.formData.workTimeStorage[1]),n="00"===this.formData.workTimeStorage[1].substring(3)?0:.5,i=s+n;this.todayTask=[];for(var o=r,c=0;o<i;o+=.5,c++)this.todayTask.push({startTime:(r+.5*c)%1===0?parseInt(r+.5*c)+":00":parseInt(r+.5*c)+":30",endTime:(r+.5*c+.5)%1===0?parseInt(r+.5*c+.5)+":00":parseInt(r+.5*c+.5)+":30",work:!0})}},timeClear:function(){this.formData.workTimeStorage=[]},taskCountOnPress:function(t){"e"!==t.key&&"E"!==t.key&&"."!==t.key&&"-"!==t.key||t.preventDefault()},taskCountOnUp:function(t){"0"===t.srcElement.value.slice(0,1)&&"0"===t.key&&(t.srcElement.value=parseInt(t.srcElement.value))},snCodeOnChange:function(t){void 0!==t&&(this.formData.qc1SopTagId=t.split(",")[0],this.formData.qc2SopTagId=t.split(",")[1])},sopSubmit:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$refs.formData.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var r,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=23;break}if(r=JSON.parse(JSON.stringify(e.formData)),r.startTime=Object(o["a"])(new Date)+" "+e.formData.workTime.split(",")[0],r.endTime=Object(o["a"])(new Date)+" "+e.formData.workTime.split(",")[1],s=[],e.todayTask.forEach((function(t,e){t.work||s.push(e+1)})),r.rest=s,e.spinShow=!0,localStorage.setItem("taskDistribution",JSON.stringify(e.formData)),e.isMock){t.next=16;break}return t.next=12,Object(u["r"])(r);case 12:n=t.sent,200===n.data.status&&(e.spinShow=!0,e.$refs.formData.resetFields(),e.$Message.success("派发成功，SN码为".concat(n.data.data.sn)),e.processId=n.data.data.id,localStorage.setItem("todayTask",JSON.stringify(e.todayTask)),e.getData()),t.next=22;break;case 16:e.distributed=!0,e.$refs.formData.resetFields(),e.$Message.success("派发成功，SN码为1001"),localStorage.setItem("todayTask",JSON.stringify(e.todayTask)),localStorage.setItem("distributed",e.distributed),e.getData();case 22:e.spinShow=!1;case 23:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),sopRemove:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.isMock){t.next=8;break}return this.spinShow=!0,t.next=4,Object(u["q"])(this.processId);case 4:e=t.sent,200===e.data.status?(this.$Message.success("删除成功"),this.getData()):this.spinShow=!1,t.next=11;break;case 8:this.$Message.success("删除成功"),this.distributed=!1,localStorage.setItem("distributed",this.distributed);case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},d=l,p=(a("51d1"),a("2877")),m=Object(p["a"])(d,r,s,!1,null,"bf6ce942",null);e["default"]=m.exports},c66f:function(t,e,a){"use strict";function r(t){var e=t.getFullYear(),a=t.getMonth()+1,r=t.getDate();return a<10&&(a="0"+a),r<10&&(r="0"+r),e+"-"+a+"-"+r}a.d(e,"a",(function(){return r}))}}]);
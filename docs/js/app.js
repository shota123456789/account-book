(function(t){function e(e){for(var n,i,l=e[0],r=e[1],c=e[2],d=0,m=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,l=1;l<a.length;l++){var r=a[l];0!==s[r]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/account-book/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),s=a("7496"),o=a("40dc"),i=a("8336"),l=a("a523"),r=a("132d"),c=a("f6c4"),u=a("2fa4"),d=a("2a7f"),m=function(){var t=this,e=t._self._c;return e(s["a"],[e(o["a"],{attrs:{app:"",color:"green",dark:""}},[e(d["a"],[t._v(t._s(t.appName))]),e(u["a"]),e(i["a"],{attrs:{icon:"",to:"/"}},[e(r["a"],[t._v("mdi-file-table-outline")])],1),e(i["a"],{attrs:{icon:"",to:"/settings"}},[e(r["a"],[t._v("mdi-cog")])],1)],1),e(c["a"],[e(l["a"],{attrs:{fluid:""}},[e("router-view")],1)],1)],1)},g=[],p=a("2f62"),h={name:"App",computed:Object(p["d"])({appName:t=>t.settings.appName}),beforeCreate(){this.$store.dispatch("loadSettings")}},f=h,b=a("2877"),v=Object(b["a"])(f,m,g,!1,null,null,null),y=v.exports,k=a("8c4f"),x=a("b0af"),D=a("99d9"),_=a("cc20"),I=a("62ad"),w=a("8fea"),M=a("2e4b"),O=a("e449"),S=a("8654"),A=function(){var t=this,e=t._self._c;return e("div",[e(x["a"],[e(D["c"],[e(I["a"],{attrs:{cols:"8"}},[e(O["a"],{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.yearMonth,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){t.yearMonth=e},"update:return-value":function(e){t.yearMonth=e}},scopedSlots:t._u([{key:"activator",fn:function({on:a}){return[e(S["a"],t._g({attrs:{"prepend-icon":"mdi-calendar",readonly:"","hide-details":""},model:{value:t.yearMonth,callback:function(e){t.yearMonth=e},expression:"yearMonth"}},a))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[e(M["a"],{attrs:{type:"month",color:"green",locale:"ja-jp","no-title":"",scrollable:""},model:{value:t.yearMonth,callback:function(e){t.yearMonth=e},expression:"yearMonth"}},[e(u["a"]),e(i["a"],{attrs:{text:"",color:"grey"},on:{click:function(e){t.menu=!1}}},[t._v("キャンセル")]),e(i["a"],{attrs:{text:"",color:"primary"},on:{click:t.onSelectMonth}},[t._v("選択")])],1)],1)],1),e(u["a"]),e(I["a"],{staticClass:"text-right",attrs:{cols:"4"}},[e(i["a"],{attrs:{dark:"",color:"green"},on:{click:t.onClickAdd}},[e(r["a"],[t._v("mdi-plus")])],1)],1),e(I["a"],{attrs:{cols:"12"}},[e(S["a"],{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),e(w["a"],{staticClass:"text-no-wrap",attrs:{headers:t.tableHeaders,items:t.tableData,search:t.search,"footer-props":t.footerProps,loading:t.loading,"sort-by":"date","sort-desc":!0,"items-per-page":30,"mobile-breakpoint":"0"},scopedSlots:t._u([{key:"item.date",fn:function({item:e}){return[t._v(" "+t._s(parseInt(e.date.slice(-2))+"日")+" ")]}},{key:"item.tags",fn:function({item:a}){return[a.tags?e("div",t._l(a.tags.split(","),(function(a,n){return e(_["a"],{key:n,staticClass:"mr-2"},[t._v(" "+t._s(a)+" ")])})),1):t._e()]}},{key:"item.income",fn:function({item:e}){return[t._v(" "+t._s(t.separate(e.income))+" ")]}},{key:"item.outgo",fn:function({item:e}){return[t._v(" "+t._s(t.separate(e.outgo))+" ")]}},{key:"item.actions",fn:function({item:a}){return[e(r["a"],{staticClass:"mr-2",on:{click:function(e){return t.onClickEdit(a)}}},[t._v("mdi-pencil")]),e(r["a"],{on:{click:function(e){return t.onClickDelete(a)}}},[t._v("mdi-delete")])]}}])})],1),e("ItemDialog",{ref:"itemDialog"}),e("DeleteDialog",{ref:"deleteDialog"})],1)},C=[],j=a("169a"),T=a("ce7e"),$=a("4bd4"),R=a("67b6"),N=a("43a6"),P=a("b974"),Y=function(){var t=this,e=t._self._c;return e(j["a"],{attrs:{scrollable:"",persistent:"","max-width":"500px",eager:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e(x["a"],[e(D["c"],[t._v(t._s(t.titleText))]),e(T["a"]),e(D["b"],[e($["a"],{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(O["a"],{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function({on:a}){return[e(S["a"],t._g({attrs:{"prepend-icon":"mdi-calendar",readonly:"","hide-details":""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},a))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[e(M["a"],{attrs:{color:"green",locale:"ja-jp","day-format":t=>new Date(t).getDate(),"no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[e(u["a"]),e(i["a"],{attrs:{text:"",color:"grey"},on:{click:function(e){t.menu=!1}}},[t._v("キャンセル")]),e(i["a"],{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("選択")])],1)],1),e(S["a"],{attrs:{label:"タイトル",counter:20,rules:t.titleRules},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}}),e(N["a"],{attrs:{row:"","hide-details":""},on:{change:t.onChangeInout},model:{value:t.inout,callback:function(e){t.inout=e},expression:"inout"}},[e(R["a"],{attrs:{label:"収入",value:"income"}}),e(R["a"],{attrs:{label:"支出",value:"outgo"}})],1),e(P["a"],{attrs:{label:"カテゴリ",items:t.categoryItems,"hide-details":""},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}}),e(P["a"],{attrs:{label:"タグ",items:t.tagItems,multiple:"",chips:"",rules:[t.tagRule]},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}}),e(S["a"],{attrs:{label:"金額",prefix:"￥",pattern:"[0-9]*",rules:t.amountRules},model:{value:t.amount,callback:function(e){t.amount=t._n(e)},expression:"amount"}}),e(S["a"],{attrs:{label:"メモ",counter:50,rules:[t.memoRule]},model:{value:t.memo,callback:function(e){t.memo=e},expression:"memo"}})],1)],1),e(T["a"]),e(D["a"],[e(u["a"]),e(i["a"],{attrs:{color:"grey darken-1",text:"",disabled:t.loading},on:{click:t.onClickClose}},[t._v(" キャンセル ")]),e(i["a"],{attrs:{color:"blue darken-1",text:"",disabled:!t.valid,loading:t.loading},on:{click:t.onClickAction}},[t._v(" "+t._s(t.actionText)+" ")])],1)],1)],1)},U=[],F={name:"ItemDialog",data(){return{show:!1,valid:!1,menu:!1,loading:!1,actionType:"add",id:"",date:"",title:"",inout:"",category:"",tags:[],amount:0,memo:"",categoryItems:[],beforeYM:"",titleRules:[t=>t.trim().length>0||"タイトルは必須です",t=>t.length<=20||"20文字以内で入力してください"],tagRule:t=>t.length<=5||"タグは5種類以内で選択してください",amountRules:[t=>t>=0||"金額は0以上で入力してください",t=>Number.isInteger(t)||"整数で入力してください"],memoRule:t=>t.length<=50||"メモは50文字以内で入力してください"}},computed:{...Object(p["c"])(["incomeItems","outgoItems","tagItems"]),titleText(){return"add"===this.actionType?"データ追加":"データ編集"},actionText(){return"add"===this.actionType?"追加":"更新"}},methods:{...Object(p["b"])(["addAbData","updateAbData"]),open(t,e){this.show=!0,this.actionType=t,this.resetForm(e),"edit"===t&&(this.beforeYM=e.date.slice(0,7))},onClickClose(){this.show=!1},onClickAction(){const t={date:this.date,title:this.title,category:this.category,tags:this.tags.join(","),memo:this.memo,income:null,outgo:null};t[this.inout]=this.amount||0,"add"===this.actionType?(t.id=Math.random().toString(36).slice(-8),this.addAbData({item:t})):(t.id=this.id,this.updateAbData({beforeYM:this.beforeYM,item:t})),this.show=!1},onChangeInout(){"income"===this.inout?this.categoryItems=this.incomeItems:this.categoryItems=this.outgoItems,this.category=this.categoryItems[0]},resetForm(t={}){const e=new Date,a=e.getFullYear(),n=("0"+(e.getMonth()+1)).slice(-2),s=("0"+e.getDate()).slice(-2);this.id=t.id||"",this.date=t.date||`${a}-${n}-${s}`,this.title=t.title||"",this.inout=null!=t.income?"income":"outgo","income"===this.inout?(this.categoryItems=this.incomeItems,this.amount=t.income||0):(this.categoryItems=this.outgoItems,this.amount=t.outgo||0),this.category=t.category||this.categoryItems[0],this.tags=t.tags?t.tags.split(","):[],this.memo=t.memo||"",this.$refs.form.resetValidation()}}},H=F,J=Object(b["a"])(H,Y,U,!1,null,null,null),V=J.exports,E=function(){var t=this,e=t._self._c;return e(j["a"],{attrs:{persistent:"","max-width":"290"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e(x["a"],[e(D["c"]),e(D["b"],{staticClass:"black--text"},[t._v(" 「"+t._s(t.item.title)+"」を削除しますか？ ")]),e(D["a"],[e(u["a"]),e(i["a"],{attrs:{color:"grey",text:"",disabled:t.loading},on:{click:t.onClickClose}},[t._v("キャンセル")]),e(i["a"],{attrs:{color:"red",text:"",loading:t.loading},on:{click:t.onClickDelete}},[t._v("削除")])],1)],1)],1)},G=[],L={name:"DeleteDialog",data(){return{show:!1,loading:!1,item:{}}},methods:{...Object(p["b"])(["deleteAbData"]),open(t){this.show=!0,this.item=t},onClickClose(){this.show=!1},onClickDelete(){this.deleteAbData({item:this.item}),this.show=!1}}},q=L,z=Object(b["a"])(q,E,G,!1,null,null,null),B=z.exports,K={name:"Home",components:{ItemDialog:V,DeleteDialog:B},data(){const t=new Date,e=t.getFullYear(),a=("0"+(t.getMonth()+1)).slice(-2);return{loading:!1,menu:!1,search:"",yearMonth:`${e}-${a}`,tableData:[]}},computed:{...Object(p["d"])({abData:t=>t.abData}),tableHeaders(){return[{text:"日付",value:"date",align:"end"},{text:"タイトル",value:"title",sortable:!1},{text:"カテゴリ",value:"category",sortable:!1},{text:"タグ",value:"tags",sortable:!1},{text:"収入",value:"income",align:"end"},{text:"支出",value:"outgo",align:"end"},{text:"メモ",value:"memo",sortable:!1},{text:"操作",value:"actions",sortable:!1}]},footerProps(){return{itemsPerPageText:"",itemsPerPageOptions:[]}}},methods:{...Object(p["b"])(["fetchAbData"]),updateTable(){const t=this.yearMonth,e=this.abData[t];e?this.tableData=e:(this.fetchAbData({yearMonth:t}),this.tableData=this.abData[t])},separate(t){return null!==t?t.toString().replace(/(\d)(?=(\d{3})+$)/g,"$1,"):null},onSelectMonth(){this.$refs.menu.save(this.yearMonth),this.updateTable()},onClickAdd(){this.$refs.itemDialog.open("add")},onClickEdit(t){this.$refs.itemDialog.open("edit",t)},onClickDelete(t){this.$refs.deleteDialog.open(t)}},created(){this.updateTable()}},Q=K,W=Object(b["a"])(Q,A,C,!1,null,null,null),X=W.exports,Z=a("0fd9"),tt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-wrapper"},[e("p",[t._v("※設定はこのデバイスのみに保存されます。")]),e($["a"],{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("h3",[t._v("アプリ設定")]),e(S["a"],{attrs:{label:"アプリ名",counter:30,rules:[t.appNameRule]},model:{value:t.settings.appName,callback:function(e){t.$set(t.settings,"appName",e)},expression:"settings.appName"}}),e(S["a"],{attrs:{label:"API URL",counter:150,rules:[t.stringRule]},model:{value:t.settings.apiUrl,callback:function(e){t.$set(t.settings,"apiUrl",e)},expression:"settings.apiUrl"}}),e(S["a"],{attrs:{label:"Auth Token",counter:150,rules:[t.stringRule]},model:{value:t.settings.authToken,callback:function(e){t.$set(t.settings,"authToken",e)},expression:"settings.authToken"}}),e("h3",[t._v("カテゴリ／タグ設定")]),e("p",[t._v("カンマ（ , ）区切りで入力してください。")]),e(S["a"],{attrs:{label:"収入カテゴリ",counter:150,rules:[t.stringRule,...t.categoryRules]},model:{value:t.settings.strIncomeItems,callback:function(e){t.$set(t.settings,"strIncomeItems",e)},expression:"settings.strIncomeItems"}}),e(S["a"],{attrs:{label:"支出カテゴリ",counter:150,rules:[t.stringRule,...t.categoryRules]},model:{value:t.settings.strOutgoItems,callback:function(e){t.$set(t.settings,"strOutgoItems",e)},expression:"settings.strOutgoItems"}}),e(S["a"],{attrs:{label:"タグ",counter:150,rules:[t.stringRule,t.tagRule]},model:{value:t.settings.strTagItems,callback:function(e){t.$set(t.settings,"strTagItems",e)},expression:"settings.strTagItems"}}),e(Z["a"],{staticClass:"mt-4"},[e(u["a"]),e(i["a"],{attrs:{color:"primary",disabled:!t.valid},on:{click:t.onClickSave}},[t._v("保存")])],1)],1)],1)},et=[],at=(a("13d5"),{name:"Settings",data(){const t=t=>t.split(",").map(t=>t.trim()).filter(t=>0!==t.length),e=e=>t(e).reduce((t,e)=>Math.max(t,e.length),0);return{valid:!1,settings:{...this.$store.state.settings},appNameRule:t=>t.length<=30||"30文字以内で入力してください",stringRule:t=>t.length<=150||"150文字以内で入力してください",categoryRules:[e=>0!==t(e).length||"カテゴリは1つ以上必要です",t=>e(t)<=4||"各カテゴリは4文字以内で入力してください"],tagRule:t=>e(t)<=4||"各タグは4文字以内で入力してください"}},methods:{onClickSave(){this.$store.dispatch("saveSettings",{settings:this.settings})}}}),nt=at,st=(a("81c0"),Object(b["a"])(nt,tt,et,!1,null,null,null)),ot=st.exports;n["a"].use(k["a"]);const it=[{path:"/",name:"Home",component:X},{path:"/settings",name:"Settings",component:ot}],lt=new k["a"]({routes:it});var rt=lt;n["a"].use(p["a"]);const ct={abData:{},settings:{appName:"GAS 家計簿",apiUrl:"",authToken:"",strIncomeItems:"給料, ボーナス, 繰越",strOutgoItems:"食費, 趣味, 交通費, 買い物, 交際費, 生活費, 住宅, 通信, 車, 税金",strTagItems:"固定費, カード"}},ut={setAbData(t,{yearMonth:e,list:a}){t.abData[e]=a},addAbData(t,{item:e}){const a=e.date.slice(0,7),n=t.abData[a];n&&n.push(e)},updateAbData(t,{yearMonth:e,item:a}){const n=t.abData[e];if(n){const t=n.findIndex(t=>t.id===a.id);n.splice(t,1,a)}},deleteAbData(t,{yearMonth:e,id:a}){const n=t.abData[e];if(n){const t=n.findIndex(t=>t.id===a);n.splice(t,1)}},saveSettings(t,{settings:e}){t.settings={...e},document.title=t.settings.appName,localStorage.setItem("settings",JSON.stringify(e))},loadSettings(t){const e=JSON.parse(localStorage.getItem("settings"));e&&(t.settings=Object.assign(t.settings,e)),document.title=t.settings.appName}},dt={fetchAbData({commit:t},{yearMonth:e}){const a=[{id:"a34109ed",date:e+"-01",title:"支出サンプル",category:"買い物",tags:"タグ1",income:null,outgo:2e3,memo:"メモ"},{id:"7c8fa764",date:e+"-02",title:"収入サンプル",category:"給料",tags:"タグ1,タグ2",income:2e3,outgo:null,memo:"メモ"}];t("setAbData",{yearMonth:e,list:a})},addAbData({commit:t},{item:e}){t("addAbData",{item:e})},updateAbData({commit:t},{beforeYM:e,item:a}){const n=a.date.slice(0,7);if(n===e)return void t("updateAbData",{yearMonth:n,item:a});const s=a.id;t("deleteAbData",{yearMonth:e,id:s}),t("addAbData",{item:a})},deleteAbData({commit:t},{item:e}){const a=e.date.slice(0,7),n=e.id;t("deleteAbData",{yearMonth:a,id:n})},saveSettings({commit:t},{settings:e}){t("saveSettings",{settings:e})},loadSettings({commit:t}){t("loadSettings")}},mt=t=>t.split(",").map(t=>t.trim()).filter(t=>0!==t.length),gt={incomeItems(t){return mt(t.settings.strIncomeItems)},outgoItems(t){return mt(t.settings.strOutgoItems)},tagItems(t){return mt(t.settings.strTagItems)}},pt=new p["a"].Store({state:ct,mutations:ut,actions:dt,getters:gt});var ht=pt,ft=a("f309");n["a"].use(ft["a"]);var bt=new ft["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:rt,store:ht,vuetify:bt,render:t=>t(y)}).$mount("#app")},"6fb8":function(t,e,a){},"81c0":function(t,e,a){"use strict";a("6fb8")}});
webpackJsonp([1],{"+H76":function(t,e,i){"use strict";function n(t){i("xID/")}var a=i("92qP"),s=(i.n(a),i("vVLd")),o=i.n(s),r=i("gIRg"),c=i("VU/8"),l=n,d=c(o.a,r.a,!1,l,null,null);e.default=d.exports},"6tjH":function(t,e){},"92qP":function(t,e){},F0GL:function(t,e){},IEMU:function(t,e){},NHnr:function(t,e,i){"use strict";function n(t){i("6tjH")}function a(t){i("cqFv")}function s(t){i("XtsB")}function o(t){i("gxlN")}function r(t){i("zICc")}function c(t){i("IEMU")}function l(t){i("F0GL")}Object.defineProperty(e,"__esModule",{value:!0});var d=i("7+uW"),u=i("v5o6"),h=i.n(u),v={name:"app",computed:{},components:{}},f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view",{staticClass:"router-view"})],1)},m=[],p={render:f,staticRenderFns:m},_=p,g=i("VU/8"),b=n,w=g(v,_,!1,b,null,null),C=w.exports,x=i("1eSk"),k=i("piuB"),S=(k.b,Number,String,String,String,String,Boolean,Function,String,Boolean,Number,{name:"tab",mixins:[k.b],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String],preventDefault:Boolean,scrollThreshold:{type:Number,default:4}},computed:{barLeft:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return this.currentIndex*(100/t)+"%"}},barRight:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return(t-this.currentIndex-1)*(100/t)+"%"}},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var t={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?t.backgroundColor="transparent":t.backgroundColor=this.barActiveColor||this.activeColor,t},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}},scrollable:function(){return this.number>this.scrollThreshold}},watch:{currentIndex:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t,e),this.hasReady&&this.scrollToActiveTab()}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}},methods:{scrollToActiveTab:function(){var t=this;if(this.scrollable&&this.$children&&this.$children.length){var e=this.$children[this.currentIndex].$el,i=0,n=function n(){var a=t.$refs.nav;a.scrollLeft+=(e.offsetLeft-(a.offsetWidth-e.offsetWidth)/2-a.scrollLeft)/15,++i<15&&window.requestAnimationFrame(n)};window.requestAnimationFrame(n)}}}}),y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-warp"},[i("div",{staticClass:"vux-tab-container"},[i("div",{ref:"nav",staticClass:"vux-tab",class:[{"vux-tab-no-animate":!t.animate},{scrollable:t.scrollable}]},[t._t("default"),t._v(" "),t.animate?i("div",{staticClass:"vux-tab-ink-bar",class:t.barClass,style:t.barStyle},[t.customBarWidth?i("span",{staticClass:"vux-tab-bar-inner",style:t.innerBarStyle}):t._e()]):t._e()],2)])])},B=[],$={render:y,staticRenderFns:B},L=$,D=i("VU/8"),T=a,O=D(S,L,!1,T,null,null),N=O.exports,F=(k.a,String,Boolean,String,String,String,{name:"tab-item",mixins:[k.a],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:"#f74c31"},badgeColor:{type:String,default:"#fff"},badgeLabel:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}),R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-item",class:[t.currentSelected?t.activeClass:"",{"vux-tab-selected":t.currentSelected,"vux-tab-disabled":t.disabled}],style:t.style,on:{click:t.onItemClick}},[t._t("default"),t._v(" "),void 0!==t.badgeLabel&&""!==t.badgeLabel?i("span",{staticClass:"vux-tab-item-badge",style:{background:t.badgeBackground,color:t.badgeColor}},[t._v("\n  "+t._s(t.badgeLabel))]):t._e()],2)},I=[],W={render:R,staticRenderFns:I},M=W,V=i("VU/8"),A=V(F,M,!1,null,null,null),H=A.exports,j={data:function(){return{isLoading:!0,hasContent:!1,state:["0","1","2"],goods:[],stateActive:""}},created:function(){this.createdDate(0)},mounted:function(){},methods:{createdDate:function(t){var e=this;this.isLoading=!0,this.stateActive=this.state[t],this.$http.get("/api/getGoodList?status="+this.stateActive).then(function(t){e.goods=t.data.data,e.isLoading=!1,e.goods.length&&(e.hasContent=!0)}).catch(function(t){console.log(t)})}},computed:{},components:{Tab:N,TabItem:H}},E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"fixed-tab"},[i("tab",{attrs:{"line-width":1,"custom-bar-width":"60px"}},[i("tab-item",{attrs:{selected:""},on:{"on-item-click":t.createdDate}},[t._v("热拍中")]),t._v(" "),i("tab-item",{on:{"on-item-click":t.createdDate}},[t._v("预拍")]),t._v(" "),i("tab-item",{on:{"on-item-click":t.createdDate}},[t._v("已拍结")])],1)],1),t._v(" "),t.hasContent?i("div",{staticClass:"goods-list"},t._l(t.goods,function(e,n){return i("router-link",{key:n,staticClass:"goods-item",attrs:{to:"/detail/"+e.id}},[i("div",{staticClass:"goods-item-head"},[i("img",{attrs:{src:e.pic_url,width:"100%"}}),t._v(" "),i("div",{staticClass:"countDown"},["0"===t.stateActive?i("span",{staticClass:"countDownTit"},[t._v("距结束：\n            "),i("clocker",{attrs:{time:new Date(1e3*e.end_time).toLocaleDateString(),format:"%D 天 %H 时 %M 分 %S 秒 "}})],1):t._e(),t._v(" "),"1"===t.stateActive?i("span",{staticClass:"countDownTit"},[t._v("距开始：\n  "),i("clocker",{attrs:{time:new Date(1e3*e.start_time).toLocaleDateString(),format:"%D 天 %H 时 %M 分 %S 秒"}})],1):t._e(),t._v(" "),"2"===t.stateActive?i("span",{staticClass:"countDownTit"},[t._v("已拍结")]):t._e()])]),t._v(" "),i("div",{staticClass:"goods-item-footer"},[i("div",{staticClass:"goods-item-info vux-1px-b"},[i("h3",{staticClass:"text-justify"},[i("span",{staticClass:"text-default"},[t._v(t._s(e.author))]),i("small",{staticClass:"text-muted f12 fwn"},[t._v(t._s(e.type))])]),t._v(" "),i("p",[t._v(t._s(e.title))])]),t._v(" "),i("div",{staticClass:"goods-item-price"},[i("div",{staticClass:"item vux-1px-r"},["2"===t.stateActive?i("span",{staticClass:"text-muted f14"},[t._v("成交价：")]):i("span",{staticClass:"text-muted f14"},[t._v("当前价：")]),i("span",{staticClass:"text-red"},[t._v("¥\n          "),i("countup",{staticClass:"demo1",attrs:{"start-val":e.start_price,"end-val":e.last_price,duration:1}})],1)]),t._v(" "),i("div",{staticClass:"item"},[i("span",{staticClass:"text-muted f14"},[t._v("起拍价：")]),i("span",{staticClass:"text-info"},[t._v("¥"+t._s(e.start_price))])])])])])})):i("div",{staticClass:"no-content"},[t._v("\n    暂无内容\n  ")]),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("loading",{model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}})],1)])},U=[],q={render:E,staticRenderFns:U},P=q,G=i("VU/8"),z=s,J=G(j,P,!1,z,"data-v-d3c9b790",null),Q=J.exports,X={data:function(){return{isLoading:!0,detail:{last_price:0},id:"",doStart:!1,startPrice:0,incr_price:0}},beforeCreate:function(){var t=this;this.isLoading=!0,this.$http.get("/api/getgoodInfo?id="+this.$route.params.id).then(function(e){t.detail=e.data.data,document.title=t.detail.title,t.isLoading=!1}).catch(function(t){console.log(t)})},created:function(){},mounted:function(){},methods:{},computed:{isNum:function(){return parseInt(this.detail.incr_price)}},components:{}},Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"goods-item"},[i("div",{staticClass:"goods-item-head"},[i("router-link",{staticClass:"backIcion",attrs:{to:"/"}},[i("svg",{staticClass:"vux-x-icon vux-x-icon-ios-arrow-back",attrs:{type:"ios-arrow-back",size:"30",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 512 512"}},[i("path",{attrs:{d:"M352 128.4L319.7 96 160 256l159.7 160 32.3-32.4L224.7 256z"}})])]),t._v(" "),i("img",{attrs:{src:t.detail.pic_url,width:"100%"}}),t._v(" "),i("div",{staticClass:"countDown"},[0===t.detail.status?i("span",{staticClass:"countDownTit"},[t._v("距结束：\n            "),i("clocker",{attrs:{time:new Date(1e3*t.detail.end_time).toLocaleDateString(),format:"%D 天 %H 时 %M 分 %S 秒 "}})],1):t._e(),t._v(" "),1===t.detail.status?i("span",{staticClass:"countDownTit"},[t._v("距开始：\n  "),i("clocker",{attrs:{time:new Date(1e3*t.detail.start_time).toLocaleDateString(),format:"%D 天 %H 时 %M 分 %S 秒"}})],1):t._e(),t._v(" "),2===t.detail.status?i("span",{staticClass:"countDownTit"},[t._v("已拍结")]):t._e()])],1),t._v(" "),i("div",{staticClass:"goods-item-footer"},[i("div",{staticClass:"goods-item-info vux-1px-b"},[i("h3",{staticClass:"text-justify"},[i("span",[t._v(t._s(t.detail.author))]),i("small",{staticClass:"text-muted f12 fwn"},[t._v(t._s(t.detail.type))])]),t._v(" "),i("p",[t._v(t._s(t.detail.title))])]),t._v(" "),i("div",{staticClass:"goods-item-price"},[i("div",{staticClass:"item vux-1px-r"},[i("span",{staticClass:"text-info"},[t._v("¥"+t._s(t.detail.incr_price))]),t._v(" "),i("br"),i("span",{staticClass:"text-muted f13"},[t._v("加价")])]),t._v(" "),i("div",{staticClass:"item vux-1px-r"},[i("span",{staticClass:"text-red"},[t._v("¥\n         "),i("countup",{attrs:{"end-val":t.detail.last_price,duration:.5}})],1),t._v(" "),i("br"),i("span",{staticClass:"text-muted f13"},[t._v("当前价")])]),t._v(" "),i("div",{staticClass:"item"},[i("span",{staticClass:"text-info"},[t._v("¥"+t._s(t.detail.start_price))]),t._v(" "),i("br"),i("span",{staticClass:"text-muted f13"},[t._v("起拍价")])])])])]),t._v(" "),i("div",{staticClass:"goods-detail"},[i("div",{staticClass:"goods-detail-content",domProps:{innerHTML:t._s(t.detail.description)}})]),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("loading",{model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}})],1)])},K=[],Z={render:Y,staticRenderFns:K},tt=Z,et=i("VU/8"),it=o,nt=et(X,tt,!1,it,"data-v-288e3ec6",null),at=nt.exports,st=i("+H76");d.a.use(x.a);var ot=new x.a({mode:"history",scrollBehavior:function(t,e,i){return i||{x:0,y:0}},routes:[{path:"*",name:"noPage",component:st.default},{path:"/",name:"home",component:Q},{path:"/detail/:id",name:"detail",component:at}]}),rt=i("NYxO");d.a.use(rt.a);var ct={isLoading:!1,direction:"forward"},lt=new rt.a.Store({state:ct,mutations:{updateLoadingStatus:function(t,e){t.isLoading=e.isLoading}},action:{}}),dt=(i("erWL"),i("9JMe")),ut=i("yD8N"),ht=i("63CM"),vt=i("EbL4"),ft=i.n(vt),mt=(String,Boolean,Number,Number,Number,Number,Object,{name:"countup",mounted:function(){var t=this;this.$nextTick(function(){t._countup=new ft.a(t.$el,t.startVal,t.endVal,t.decimals,t.duration,t.options),t.start&&t._countup.start()})},props:{tag:{type:String,default:"span"},start:{type:Boolean,default:!0},startVal:{type:Number,default:0},endVal:{type:Number,required:!0},decimals:{type:Number,default:0},duration:{type:Number,default:2},options:{type:Object,default:function(){return{}}}},render:function(t){return t(this.tag,{},[this.startVal])},watch:{start:function(t){t&&this._countup.start()},endVal:function(t){this._countup.update(t)}}}),pt=i("VU/8"),_t=pt(mt,null,!1,null,null,null),gt=_t.exports,bt=i("QUsI"),wt="%D 天 %H 小时 %M 分 %S 秒";wt="%D 天 %H 小时 %M 分 %S 秒";var Ct=(String,Number,String,"%D 天 %H 小时 %M 分 %S 秒");Ct="%D 天 %H 小时 %M 分 %S 秒";var xt={name:"clocker",mounted:function(){var t=this;this.$nextTick(function(){t.slot=t.$el.querySelector(".vux-clocker-tpl"),t.slotString=t.slot.innerHTML,""!==t.slotString&&(t.showTimeString=!1),t.render()})},methods:{render:function(){var t=this;this.time&&(this.clocker=new bt.a(this.time).on("tick",function(e){t.update(e),t.$emit("on-tick",e)}).on("finish",function(){t.timeString="00:00:00",t.$emit("on-finish")}).start())},update:function(t){if(this.showTimeString)this.timeString=t.strftime(this.format);else{var e=t.strftime(this.slotString);e!==this.cacheSlotString&&(this.slot.innerHTML=this.cacheSlotString=e)}}},props:{time:[String,Number],format:{type:String,default:Ct}},watch:{time:function(){this.clocker&&this.clocker.remove(),this.render()}},data:function(){return{showTimeString:!0,timeString:"",slotString:"",cacheSlotString:""}},beforeDestroy:function(){this.clocker&&(this.clocker.remove(),this.clocker=null)}},kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"inline-block"}},[t.showTimeString?i("span",[t._v(t._s(t.timeString))]):t._e(),t._v(" "),i("div",{staticClass:"vux-clocker-tpl"},[t._t("default")],2)])},St=[],yt={render:kt,staticRenderFns:St},Bt=yt,$t=i("VU/8"),Lt=$t(xt,Bt,!1,null,null,null),Dt=Lt.exports,Tt=(Boolean,String,String,String,{name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}}),Ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading"},[i("div",{staticClass:"weui-mask_transparent"}),t._v(" "),i("div",{staticClass:"weui-toast",style:{position:t.position}},[i("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),i("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},Nt=[],Ft={render:Ot,staticRenderFns:Nt},Rt=Ft,It=i("VU/8"),Wt=r,Mt=It(Tt,Rt,!1,Wt,null,null),Vt=Mt.exports,At=i("BEQ0"),Ht=i.n(At),jt=(Object,String,String,Object,{name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return Ht()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}),Et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[i("transition",{attrs:{name:t.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault",void 0,e.key,void 0))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),t.shouldOverWriteTitle?t._e():i("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[i("transition",{attrs:{name:t.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),t.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[t._t("overwrite-title")],2):t._e(),t._v(" "),i("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault",void 0,e.key,void 0))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},Ut=[],qt={render:Et,staticRenderFns:Ut},Pt=qt,Gt=i("VU/8"),zt=c,Jt=Gt(jt,Pt,!1,zt,null,null),Qt=Jt.exports,Xt=i("0FxO"),Yt=(Boolean,Boolean,Boolean,String,String,Boolean,String,Object,Array,{name:"x-button",props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean,link:[String,Object],gradients:{type:Array,validator:function(t){return 2===t.length}}},methods:{onClick:function(){!this.disabled&&Object(Xt.a)(this.link,this.$router)}},computed:{noBorder:function(){return Array.isArray(this.gradients)},buttonStyle:function(){if(this.gradients)return{background:"linear-gradient(90deg, "+this.gradients[0]+", "+this.gradients[1]+")",color:"#FFFFFF"}},classes:function(){return[{"weui-btn_disabled":!this.plain&&this.disabled,"weui-btn_plain-disabled":this.plain&&this.disabled,"weui-btn_mini":this.mini,"vux-x-button-no-border":this.noBorder},this.plain?"":"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}),Kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"weui-btn",class:t.classes,style:t.buttonStyle,attrs:{disabled:t.disabled,type:t.actionType},on:{click:t.onClick}},[t.showLoading?i("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),t._t("default",[t._v(t._s(t.text))])],2)},Zt=[],te={render:Kt,staticRenderFns:Zt},ee=te,ie=i("VU/8"),ne=l,ae=ie(Yt,ee,!1,ne,null,null),se=ae.exports;Object(dt.sync)(lt,ot),d.a.use(ut.a),d.a.directive("transfer-dom",ht.a),d.a.component("countup",gt),d.a.component("clocker",Dt),d.a.component("loading",Vt),d.a.component("x-header",Qt),d.a.component("x-button",se),d.a.directive("title",{inserted:function(t,e){document.title=t.dataset.title}}),h.a.attach(document.body),d.a.config.productionTip=!1,new d.a({router:ot,store:lt,render:function(t){return t(C)}}).$mount("#app-box")},XtsB:function(t,e){},cqFv:function(t,e){},erWL:function(t,e){},gIRg:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("404")])])}],s={render:n,staticRenderFns:a};e.a=s},gxlN:function(t,e){},vVLd:function(t,e){},"xID/":function(t,e){},zICc:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.38f0ae44453c34a29332.js.map
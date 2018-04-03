import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/common.css'

//  把router功能放到vuex的state中 例：store.state.route.path
import { sync } from 'vuex-router-sync'
sync(store, router)

// AjaxPlugin 插件依赖于 axios，组件内使用this.$http 调用
import { AjaxPlugin,TransferDom,Countup,Clocker,Loading,XHeader,XButton} from 'vux'
Vue.use(AjaxPlugin)
Vue.directive('transfer-dom', TransferDom)
Vue.component('countup', Countup)
Vue.component('clocker', Clocker)
Vue.component('loading', Loading)
Vue.component('x-header', XHeader)
Vue.component('x-button', XButton)
// 用于消除click移动浏览器上物理点击与事件触发之间的300毫秒延迟
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

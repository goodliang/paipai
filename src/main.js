import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import store from './store'

//  把router功能放到vuex的state中 例：store.state.route.path
import { sync } from 'vuex-router-sync'
sync(store, router)

// AjaxPlugin 插件依赖于 axios，组件内使用this.$http 调用
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)

//loading
router.beforeEach(function(to, from, next) {
  store.commit('updateLoadingStatus', { isLoading: true })
  next()
})

router.afterEach(function(to) {
  store.commit('updateLoadingStatus', { isLoading: false })
})

// 用于消除click移动浏览器上物理点击与事件触发之间的300毫秒延迟
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

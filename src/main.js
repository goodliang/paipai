// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import store from './store'

// AjaxPlugin 插件依赖于 axios，组件内使用this.$http 调用
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)

router.beforeEach(function(to, from, next) {
  store.commit('updateLoadingStatus', { isLoading: true })
  next()
})

router.afterEach(function(to) {
  store.commit('updateLoadingStatus', { isLoading: false })
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

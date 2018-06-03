import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/common.css'
import footerBar from '@/components/footer'
//  把router功能放到vuex的state中 例：store.state.route.path
import { sync } from 'vuex-router-sync'
sync(store, router)

Vue.component('footer-bar', footerBar)


// 微信JSDK
import { WechatPlugin } from 'vux'
Vue.use(WechatPlugin)

import { AjaxPlugin, TransferDom, Card, Toast, ToastPlugin, Countup, Clocker, Loading, XHeader, XButton, Actionsheet, Group, CellBox, Cell, XInput, Popup, LoadMore, ButtonTab, ButtonTabItem } from 'vux'

// AjaxPlugin 插件依赖于 axios，组件内使用this.$http 调用
Vue.use(AjaxPlugin)

Vue.use(ToastPlugin)
Vue.component('toast', Toast)
Vue.component('card', Card)
Vue.component('actionsheet', Actionsheet)
Vue.directive('transfer-dom', TransferDom)
Vue.component('countup', Countup)
Vue.component('clocker', Clocker)
Vue.component('loading', Loading)
Vue.component('x-header', XHeader)
Vue.component('x-button', XButton)
Vue.component('cell-box', CellBox)
Vue.component('cell', Cell)
Vue.component('group', Group)
Vue.component('x-input', XInput)
Vue.component('popup', Popup)
Vue.component('load-more', LoadMore)
Vue.component('button-tab', ButtonTab)
Vue.component('button-tab-item', ButtonTabItem)


if (window.__wxjs_environment) {
  router.beforeEach((to, from, next) => {
    let title = '弘真艺拍'
    title = to.meta && to.meta.title ? to.meta.title + ' - ' + title : title;
    document.title = title;
    
    if (store.state.token) {
      next()
    } else {
      if (to.query.token) {
        store.commit('addToken', to.query.token);
        next()
      } else {
        wx.miniProgram.navigateTo({ url: '/pages/login/login?return_url=' + decodeURIComponent(to.fullPath) })
      }
    }
  })
}

Vue.prototype.$http.interceptors.request.use(
  config => {
    if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token。废弃cookie
      config.headers.Authorization = `${store.state.token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });
Vue.prototype.$http.interceptors.response.use(
  response => {
    if (response.data.errno == 4002) { //未登录为4002,4002时清除token，跳转到登录页
      store.commit('addToken', '');
      wx.miniProgram.navigateTo({ url: '/pages/login/login?return_url=' + encodeURIComponent(router.currentRoute.fullPath) })
    }
    return response
  },
  error => {
    return Promise.reject(error)
  });

// 用于消除click移动浏览器上物理点击与事件触发之间的300毫秒延迟
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

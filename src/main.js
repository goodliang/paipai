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

Vue.component('footer-bar',footerBar)
// AjaxPlugin 插件依赖于 axios，组件内使用this.$http 调用

// 微信JSDK
import { WechatPlugin } from 'vux'
Vue.use(WechatPlugin)

// cookie
Vue.use(require('vue-cookies'))

import { AjaxPlugin,TransferDom,Card,Toast,Countup,Clocker,Loading,XHeader,XButton,Actionsheet,Group,CellBox,Cell,XInput,Popup,LoadMore} from 'vux'


Vue.use(AjaxPlugin)
Vue.component('toast', Toast)
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
//title
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

//检测登录
router.beforeEach((to, from, next) => {
  if(!store.state.user.id && to.path != '/author'){
    // 第一次进入项目
    window.$cookies.set('beforeLoginUrl', to.fullPath) // 保存用户进入的url
    next('/author')
    return false
  }
  next()
})

// 登录后跳转方法
Vue.prototype.goBeforeLoginUrl = () => {
  let url = window.$cookies.get('beforeLoginUrl')
  if(!url || url.indexOf('/author') != -1){
    router.push('/index')
  }else{
    if(url == '/'){
      url = '/index'
    }
    router.push(url)
    window.$cookies.set('beforeLoginUrl', '')
  }
}

// 用于消除click移动浏览器上物理点击与事件触发之间的300毫秒延迟
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

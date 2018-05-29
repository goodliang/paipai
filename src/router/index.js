import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/index'
import detail from '@/views/detail'
import noPage from '@/views/404'
import payPromise from '@/views/pay_promise'
import infoView from '@/views/infoView'
import author from '@/components/author'
// 个人中心
import myOrder from '@/views/myOrder'
import waitPay from '@/views/waitPay'
import addressList from '@/views/addressList'
import address from '@/views/address'
import vip from '@/views/vip'
import rule from '@/views/rule'

// 栏目
import price from '@/views/price'
import info from '@/views/info'
import found from '@/views/found'
import userCenter from '@/views/userCenter'

Vue.use(Router)


export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [{
      path: '/author',
      name: 'author',
      component: author
    },
    {
      path: '/index',
      name: 'home',
      component: home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/pay_promise/:money/:good_id',
      name: 'payPromise',
      component: payPromise
    },
    {
      path: '/price',
      name: 'price',
      component: price
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/found',
      name: 'found',
      component: found
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: userCenter
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: myOrder
    },
    {
      path: '/waitPay',
      name: 'waitPay',
      component: waitPay
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/addressList',
      name: 'addressList',
      component: addressList
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    },
    {
      path: '/rule',
      name: 'rule',
      component: rule
    },
    {
      path: '/infoView/:id',
      name: 'infoView',
      component: infoView
    }, {
      path: '*',
      name: 'noPage',
      component: noPage
    },

  ]
})

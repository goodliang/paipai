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
import paySuccess from '@/views/pay_success'
import moreHistory from '@/views/more_history'

import promisepaySuccess from '@/views/promise_pay_success'



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
      component: userCenter,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: myOrder,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/waitPay',
      name: 'waitPay',
      component: waitPay,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/address',
      name: 'address',
      component: address,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/addressList',
      name: 'addressList',
      component: addressList,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      }
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
    },
     {
      path: '/moreHistory/:id',
      name: 'moreHistory',
      component: moreHistory
    },
    {
      path: '/promise_success/:id',
      name: 'paySuccess',
      component: paySuccess
    },
       {
      path: '/promise_pay_success/:id',
      name: 'promisepaySuccess',
      component: promisepaySuccess
    },
    {
      path: '*',
      name: 'noPage',
      component: noPage
    },

  ]
})

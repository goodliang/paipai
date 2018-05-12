import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/index'
import detail from '@/views/detail'
import noPage from '@/views/404'
<<<<<<< HEAD
import payPromise from '@/views/pay_promise'
=======
import infoView from '@/views/infoView'
// 个人中心
import myOrder from '@/views/myOrder'
import waitPay from '@/views/waitPay'
import address from '@/views/address'
import vip from '@/views/vip'
import rule from '@/views/rule'

// 栏目
import price from '@/views/price'
import info from '@/views/info'
import found from '@/views/found'
import userCenter from '@/views/userCenter'
>>>>>>> 40978c215125ffd3f97ca8bb66dd982b1899df3b

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
      path: '*',
      name: 'noPage',
      component: noPage
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
<<<<<<< HEAD
    },    
    {
      path: '/pay_promise/:id',
      name: 'payPromise',
      component: payPromise
=======
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
>>>>>>> 40978c215125ffd3f97ca8bb66dd982b1899df3b
    }

  ]
})

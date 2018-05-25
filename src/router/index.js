import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/index'
import detail from '@/views/detail'
import noPage from '@/views/404'

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
      component: noPage,
      meta: {
        title: '找不到页面了'
      }
    },
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: ''
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ]
})

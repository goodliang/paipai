import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '@/views/index'


export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: home
    }
  ]
})

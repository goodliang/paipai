import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/index'
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
    component: noPage
  }, {
    path: '/',
    name: 'home',
    component: home
  }, ]
})

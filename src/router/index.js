import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloFromVux from '@/components/HelloFromVux'

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
    path: '/',
    name: 'HelloFromVux',
    component: HelloFromVux
  }]
})

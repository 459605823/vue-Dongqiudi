import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Archive from '@/pages/archive/archive'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/archive/:id',
      name: 'Archive',
      component: Archive
    }
  ]
})

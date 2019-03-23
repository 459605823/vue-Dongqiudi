import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Archive from '@/pages/archive/archive'
import Match from '@/pages/matches/match'

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
    }, {
      path: '/match',
      name: 'Match',
      component: Match
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

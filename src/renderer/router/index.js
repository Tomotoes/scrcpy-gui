import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Layout from '../views/Layout'

const routerMap = [{
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  name: 'Dashboard',
  hidden: true,
  children: [{
    path: 'dashboard',
    component: () => import('@/views/Dashboard')
  }]
}]

export default new Router({
  routes: routerMap
})

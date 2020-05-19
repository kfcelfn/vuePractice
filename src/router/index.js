import Vue from 'vue'
import VueRouter from 'vue-router'
import * as routerAlias from './assembly'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: routerAlias.Home
  },
  {
    path: '/about',
    name: 'About',
    component: routerAlias.About
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

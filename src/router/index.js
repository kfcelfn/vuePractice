import Vue from 'vue'
import VueRouter from 'vue-router'
import * as routerAlias from './assembly'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    name:'home', 
    component: routerAlias.Home,
    props: route => ({query: route.query})
  },
]

const router = new VueRouter({
  linkActiveClass:'active', //全局设置选中的class名字。
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('token')
  
//   if( !token && to.fullPath !== '/login' ){
//     next('/login')
//   }else{
//     next()
//   }
// })

export default router

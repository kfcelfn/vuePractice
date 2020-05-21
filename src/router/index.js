import Vue from 'vue'
import VueRouter from 'vue-router'
import * as routerAlias from './assembly'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    name:'login', 
    component: routerAlias.Login,
  },
  { 
    path: '/register', 
    name:'register', 
    component: routerAlias.Register,
  },
  { 
    path: '/home', 
    name:'home', 
    component: routerAlias.Home,
  },
]

const router = new VueRouter({
  linkActiveClass:'active', //全局设置选中的class名字。
  mode: 'history',
  routes
})

// 全局路由守卫
// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('token')
  
//   if( !token && to.fullPath !== '/login' ){
//     next('/login')
//   }else{
//     next()
//   }
// })

export default router

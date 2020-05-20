import Vue from 'vue'
import VueRouter from 'vue-router'
import * as routerAlias from './assembly'

Vue.use(VueRouter)

const routes = [
  // 里面name,可以作为一个标识符，跳转的时候可以使用到,使用了这种方式，必须使用params传递       this.$router.push( {name: 'home' , params:{cid: 2}})
  { 
    path: '/', 
    name:'home', 
    component: routerAlias.Home,
    props: route => ({query: route.query})
  },
  { 
    path: '/about/:id', 
    name: 'about', 
    component: routerAlias.About ,
    props: true,
  },
  { 
    path: '/login', 
    name:'login', 
    component: routerAlias.Login
  },
  { 
    path: '/page', 
    name: 'page', 
    component: routerAlias.Page,
    children: [
      {
        path: '/page/detail/:id', 
        name: 'detail', 
        component: routerAlias.Detail ,
        props: true,
      }
    ],
    redirect: '/page/detail/1'
  }
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

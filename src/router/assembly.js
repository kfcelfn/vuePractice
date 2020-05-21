const Home = () => import(/* webpackChunkName: "home" */ '@/views/home')
const About = () => import(/* webpackChunkName: "about" */ '@/views/about')
const Page = () => import(/* webpackChunkName: "page" */ '@/views/page')
const Detail = () => import(/* webpackChunkName: "detail" */ '@/views/detail')
const Login = () => import(/* webpackChunkName: "login" */ '@/views/login')

export {
  Home,
  About,
  Page,
  Detail,
  Login,
}
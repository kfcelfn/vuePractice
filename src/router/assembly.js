const Home = () => import(/* webpackChunkName: "home" */ '@/views/home')
const Login = () => import(/* webpackChunkName: "login" */ '@/views/login')

export {
  Home,
  Login,
}
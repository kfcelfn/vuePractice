const Home = () => import(/* webpackChunkName: "home" */ '@/views/home')
const Login = () => import(/* webpackChunkName: "login" */ '@/views/login')
const Register = () => import(/* webpackChunkName: "login" */ '@/views/register')

export {
  Home,
  Login,
  Register,
}
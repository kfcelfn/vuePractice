import { Message } from 'element-ui'
import { loginUser } from '@/services/login'
import { LOGIN_USER } from '@/constants/actionTypes'
import router from '@/router';

const actions = {
  async [LOGIN_USER] ({ commit }, payload) {
    const res = await loginUser(payload)

    if(res.status == 200){
      Message.success('登录成功')
      router.push({name: 'home'})
      localStorage.setItem('username', payload.username)
      commit('LOGIN_SET_USERNAME', payload.username)
    }else{
      Message.error('账户或密码错误')
    } 
  }
}

export default actions
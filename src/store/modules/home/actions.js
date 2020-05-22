import { Message } from 'element-ui'
import { getUser, deleteUser, addUser, editUser } from '@/services/home'
import { HOME_GET_USER, HOME_DELETE_USER, HOME_ADD_USER, HOME_EDIT_USER } from '@/constants/actionTypes'

const actions = {
  //渲染全部数据
  async [HOME_GET_USER] ({ commit }) {
    const res = await getUser()
    commit('HOME_SET_DATA', res.users)
  },
  //删除
  async [HOME_DELETE_USER] ({ dispatch }, payload) {
    const res = await deleteUser(payload)

    if( res.status == 200){
      Message.success('删除成功')
      dispatch('HOME_GET_USER')
    } 
  },
  //添加
  async [HOME_ADD_USER] ({ dispatch }, payload) {
    const res = await addUser(payload)

    if( res.status == 200){
      Message.success('添加成功')
      dispatch('HOME_GET_USER')
    }
  },
  //修改
  async [HOME_EDIT_USER] ({ dispatch }, payload) {
    const res = await editUser(payload)
    
    if( res.status == 200){
      Message.success('修改成功')
      dispatch('HOME_GET_USER')
    }
  },
}

export default actions
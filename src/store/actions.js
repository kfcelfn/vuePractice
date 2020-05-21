import Axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';
import api from '@/services/api';
import router from '@/router';
import * as TYPES from './mutation-types';

const actions = {
  //模态框显示隐藏
  'FETCH_DIALOGVISIBLE' ({ commit }, payload) {
    commit(TYPES.FETCH_EDIT_DIALOGVISIBLE, payload)
  },
  //查询所有数据
  'FETCH_GET_DATA' ({ commit }) {
    Axios.get(api.getUser)
      .then(res => commit(TYPES.FETCH_EDIT_DATA, res.data.users))
  },
  //删除
  'FETCH_DELETE_DATA' ({ dispatch }, payload) {
    Axios.post(api.deleteUser, qs.stringify(payload))
      .then(res => {
        if(res.data.status == 200){
          Message.success('删除成功')
          dispatch('FETCH_GET_DATA')
        }
      })
  },
  //添加
  'FETCH_ADD_DATA' ({ dispatch }, payload) {
    Axios.post(api.addUser, qs.stringify(payload))
      .then(res => {
        if(res.data.status == 200){
          Message.success('添加成功')
          dispatch('FETCH_GET_DATA')
        }
      })
  },
  //修改
  'FETCH_EDIT_DATA' ({ dispatch }, payload) {
    Axios.post(api.editUser, qs.stringify(payload))
      .then(res => {
        if(res.data.status == 200){
          Message.success('修改成功')
          dispatch('FETCH_GET_DATA')
        }
      })
  },
  //登录
  'FETCH_LOGIN' ({ commit }, payload) {
    return Axios.post(api.loginUser, qs.stringify(payload))
      .then(res => {
        commit('SET_USERNAME', payload.username)
        return res
      })
  },
  //注册
  'FETCH_REGISTER' (context, payload) {
    console.log(context)
    Axios.post(api.registerUser, qs.stringify(payload))
      .then(res => {
        if(res.data.status == 200){
          Message.success('注册成功')
          router.push({name: 'login'})
        }
      })
  },
}
export default actions
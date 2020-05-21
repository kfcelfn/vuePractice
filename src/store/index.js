import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';
import qs from 'qs'
import api from '@/services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    dialogVisible: false
  },

  mutations: {
    //修改data
    'FETCH_EDIT_DATA' (state, option) {
      state.data = option
    },
    
    //模态框
    'FETCH_EDIT_DIALOGVISIBLE' (state, option) {
      state.dialogVisible = !option
    }
  },

  actions: {
    //模态框
    'FETCH_DIALOGVISIBLE' ({ commit }, payload) {
      commit('FETCH_EDIT_DIALOGVISIBLE', payload)
    },
    //查询所有数据
    'FETCH_GET_DATA' ({ commit }) {
      Axios.get(api.getUser)
        .then( res => {
          commit('FETCH_EDIT_DATA', res.data.users)
        })
    },
    //删除
    'FETCH_DELETE_DATA' ({ commit }, payload) {
      console.log(commit)
      return Axios.post(api.deleteUser, qs.stringify(payload))
        .then( res => {
          return res
        })
    },
    //添加
    'FETCH_ADD_DATA' ({ commit }, payload) {
      console.log(commit)
      return Axios.post(api.addUser, qs.stringify(payload))
        .then( res => {
          return res
        })
    },
    //修改
    'FETCH_EDIT_DATA' ({ commit }, payload) {
      console.log(commit)
      return Axios.post(api.editUser, qs.stringify(payload))
        .then( res => {
          return res
        })
    },
    //注册
    'FETCH_REGISTER' ({ commit }, payload) {
      console.log(commit)
      return Axios.post(api.registerUser, qs.stringify(payload))
        .then( res => {
          return res
        })
    },
    //登录
    'FETCH_LOGIN' ({ commit }, payload) {
      console.log(commit)
      return Axios.post(api.loginUser, qs.stringify(payload))
        .then( res => {
          return res
        })
    },
  }
})

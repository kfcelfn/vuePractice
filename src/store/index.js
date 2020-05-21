import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
// import { EDIT_NAME } from '@/constants/mutationTypes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '铁柱',
    age: 100,
    count: 1,
    data: []
  },

  // state 只能在这改变， 相当于react 的 reducer
  // 只能改同步的代码，不能改异步的。
  mutations: {
    // 修改name
    'EDIT_NAME' (state) {
      state.name = '小白'
    },
    // 加 减
    'FETCH_COUNT' (state, option) {
      state.count = option ?  ++state.count : --state.count
    },
    //修改data
    'FETCH_EDIT_DATA' (state, option) {
      state.data = option
    },
  },
  //写异步代码的 Action 提交的是 mutation，而不是直接变更状态。
  actions: {
    'FETCH_GET_DATA' ({ commit }) {
      // console.log(context) 是一个对象 里面有dispatch，commit，state 等 平常可以解构出来
      Axios.get('https://blogs.zdldove.top/Home/Apis/listWithPage')
        .then( res => {
          // FETCH_DATA是mutations里 方法名
          commit('FETCH_EDIT_DATA', res.data.result)
        })
    }
  },
  modules: {
  }
})

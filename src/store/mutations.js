import * as TYPES from './mutation-types';

const  mutations = {
  //查询所有数据
  [TYPES.FETCH_EDIT_DATA] (state, option) {
    state.data = option
  },
  //模态框显示隐藏
  [TYPES.FETCH_EDIT_DIALOGVISIBLE] (state, option) {
    state.dialogVisible = !option
  },
  //保存用户名
  [TYPES.SET_USERNAME] (state, option){
    state.username = option
  }
}

export default mutations
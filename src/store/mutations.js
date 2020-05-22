import { EDIT_NAME, FETCH_COUNT, FETCH_EDIT_DATA  } from '@/constants/actionTypes'

const mutations = {
  // 修改name
  [EDIT_NAME] (state) {
    state.name = '小白'
  },
  // 加 减
  [FETCH_COUNT] (state, option) {
    state.count = option ?  ++state.count : --state.count
  },
  //修改data
  [FETCH_EDIT_DATA] (state, option) {
    state.data = option
  },
}

export default mutations
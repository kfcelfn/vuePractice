import { FETCH_EDIT_DATA  } from '@/constants/actionTypes'

const mutations = {
  //修改data
  [FETCH_EDIT_DATA] (state, option) {
    state.data = option
  },
}

export default mutations
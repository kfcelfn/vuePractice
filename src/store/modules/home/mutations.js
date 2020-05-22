import { HOME_SET_DATA } from '@/constants/actionTypes'

const mutations = {
  [HOME_SET_DATA] (state, payload) {
    state.data = payload
  }
}

export default mutations
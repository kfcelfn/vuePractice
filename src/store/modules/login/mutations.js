import { LOGIN_SET_USERNAME } from '@/constants/actionTypes'

const mutations = {
  [LOGIN_SET_USERNAME] (state, payload) {
    state.username = payload
  }
}

export default mutations
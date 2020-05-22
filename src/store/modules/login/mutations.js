const mutations = {
  'EDIT_NAME' (state) {
    state.name = 'login'
  },
  
  'FETCH_EDIT_DATA' (state, payload) {
    state.data = payload
  }
}

export default mutations
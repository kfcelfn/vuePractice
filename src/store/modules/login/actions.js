import Axios from 'axios'

const actions = {
  async 'FETCH_GET_DATA' ({ commit }) {
    const res = await  Axios.get('https://blogs.zdldove.top/Home/Apis/listWithPage')

    commit('FETCH_EDIT_DATA', res.data.result)
  } 
}

export default actions
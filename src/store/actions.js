import { listWith, loginUser } from '@/services/home'
import { FETCH_GET_DATA } from '@/constants/actionTypes'

const actions = {
  async [FETCH_GET_DATA] (context, payload) {
    console.log(context)
    const res = await loginUser(payload)
    console.log( res ) 

    const ress = await listWith()
    context.commit('FETCH_EDIT_DATA', ress.result.list)
          
  }
}

export default actions
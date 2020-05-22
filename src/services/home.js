import { get, post } from '@/utils/request'
import api from './api'

export const listWith = () =>  get(api.listWithPage)
export const loginUser = option =>  post(api.login, option)

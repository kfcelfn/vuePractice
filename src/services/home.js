import { post } from '@/utils/request'
import api from './api'
export const loginUser = option =>  post(api.login, option)

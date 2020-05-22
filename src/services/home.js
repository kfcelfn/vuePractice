import { get, post } from '@/utils/request'
import api from './api'

export const getUser = () =>  get(api.getUser)
export const deleteUser = option =>  post(api.deleteUser, option)
export const addUser = option =>  post(api.addUser, option)
export const editUser = option =>  post(api.editUser, option)

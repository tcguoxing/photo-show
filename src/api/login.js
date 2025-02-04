import request from './request'

export function login(params) {
  return request.post('/user/login', params)
}

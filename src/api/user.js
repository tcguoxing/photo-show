import request from './request'

export function login(params) {
  return request.post('/user/login', params)
}

export function register(params) {
  return request.post('/user/register', params)
}


import { request } from '../lib/request'

export function fetchProducts() {
  return request({
    method: 'GET',
    path: '/products'
  })
}

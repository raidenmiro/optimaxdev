import { request } from '../lib/request'
import type { CartResponse, ProductResponse } from './schema'

export function fetchProductsApi() {
  return request<ProductResponse>({
    method: 'GET',
    path: 'products'
  })
}

export function fetchCartApi() {
  return request<CartResponse>({
    method: 'GET',
    path: 'cart'
  })
}

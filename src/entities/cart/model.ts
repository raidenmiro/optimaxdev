import { createEntityAdapter } from '@reduxjs/toolkit'

import { compareByDate } from './lib'

export interface CartItemEntity {
  uid: string
  productId: string
  quantity: number
  total: number
  createAt: Date
  updatedAt: Date
}

export const cartAdapter = createEntityAdapter<CartItemEntity>({
  selectId: (cart) => cart.uid,
  sortComparer: (a, b) => compareByDate(a.createAt, b.createAt)
})

import { createEntityAdapter } from '@reduxjs/toolkit'

import type { CartEntity } from '~/shared/api/schema'

import { compareByDate } from './lib'

export const cartAdapter = createEntityAdapter<CartEntity>({
  selectId: (cart) => cart.id,
  sortComparer: (a, b) => compareByDate(a.createAt, b.createAt)
})

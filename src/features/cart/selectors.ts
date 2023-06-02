import { createSelector } from '@reduxjs/toolkit'

import { cartAdapter } from '~/entities/cart/model'
import type { RootState } from '~/shared/lib/redux-std/store'

// base selector for cart instance
const everyThingStore = (state: RootState) => state.cart

export const entity = cartAdapter.getSelectors()

export const isReceived = createSelector(
  everyThingStore,
  (state) => state.isLoading
)

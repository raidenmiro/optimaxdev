import { configureStore } from '@reduxjs/toolkit'

import { cart } from '~/features/cart'
import { products } from '~/features/products'

export const store = configureStore({
  reducer: {
    [products.name]: products.reducer,
    [cart.name]: cart.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

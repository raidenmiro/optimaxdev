import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { cartAdapter } from '~/entities/cart/model'

import { fetchAllSuccess } from './actions'
import type {
  AddOneParams,
  ChangeQuantityParams,
  DeleteOneParams
} from './types'

const REDUCER_PATH = 'cart'

const initialState = cartAdapter.getInitialState({
  isLoading: false
})

export const CartSlice = createSlice({
  name: REDUCER_PATH,
  initialState,
  reducers: {
    addOne: (state, action: PayloadAction<AddOneParams>) => {
      cartAdapter.addOne(state, action.payload.body)
    },
    deleteOne: (state, action: PayloadAction<DeleteOneParams>) => {
      cartAdapter.removeOne(state, action.payload.cartItemId)
    },
    changeQuantity: (state, action: PayloadAction<ChangeQuantityParams>) => {
      const nextQuantity = action.payload.quantity
      const cartItemId = action.payload.cartItemId

      if (nextQuantity > 0) {
        cartAdapter.updateOne(state, {
          id: cartItemId,
          changes: {
            quantity: nextQuantity
          }
        })

        return
      }

      cartAdapter.removeOne(state, cartItemId)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllSuccess, (state, action) => {
      cartAdapter.setAll(state, action.payload)
    })
  }
})

export const cart = { reducer: CartSlice.reducer, name: CartSlice.name }
export const actions = CartSlice.actions

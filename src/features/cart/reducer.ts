import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { cartAdapter } from '~/entities/cart/model'

import type {
  AddOneParams,
  ChangeQuantityParams,
  DeleteOneParams
} from './types'

export const name = 'entities/cart'
const initialState = Object.assign(cartAdapter.getInitialState(), {
  isLoading: false
})

export const CartSlice = createSlice({
  name,
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
  }
})

export const reducer = CartSlice.reducer
export const actions = CartSlice.actions

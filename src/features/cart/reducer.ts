import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

import { cartAdapter } from '~/entities/cart/model'
import type { CartEntity } from '~/shared/api/schema'

import { fetchAllSuccess } from './actions'
import type {
  AddToBugParams,
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
    addOne: (state, action: PayloadAction<AddToBugParams>) => {
      const { productId, price } = action.payload

      const nextItem: CartEntity = {
        productId,
        id: nanoid(),
        quantity: 1,
        total: price,
        createAt: new Date(),
        updatedAt: new Date()
      }

      cartAdapter.setOne(state, nextItem)
    },
    deleteOne: (state, action: PayloadAction<DeleteOneParams>) => {
      const itemId = action.payload.cartItemId
      cartAdapter.removeOne(state, itemId)
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

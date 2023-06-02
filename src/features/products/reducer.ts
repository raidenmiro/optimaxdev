import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { productsAdapter } from '~/entities/products/model'

import { fetchAllSuccess } from './actions'

export const REDUCER_PATH = 'products'

const initialState = productsAdapter.getInitialState({
  isLoading: false
})

export const productsSlice = createSlice({
  name: REDUCER_PATH,
  initialState,
  reducers: {
    updateLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllSuccess, (state, action) => {
      const products = action.payload.products
      productsAdapter.addMany(state, products)
    })
  }
})

export const actions = productsSlice.actions
export const products = {
  reducer: productsSlice.reducer,
  name: productsSlice.name
}

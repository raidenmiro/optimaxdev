import { createAction } from '@reduxjs/toolkit'

import type { CartItemEntity } from '~/entities/cart/model'

import { CartFetchActions } from './types'

export const fetchAll = createAction(CartFetchActions.Requested)
export const fetchAllSuccess = createAction<CartItemEntity[]>(
  CartFetchActions.Succeeded
)
export const fetchAllFailed = createAction(CartFetchActions.Failed)

import { createAction } from '@reduxjs/toolkit'

import type { CartEntity } from '~/shared/api/schema'

import { CartFetchActions } from './types'

export const fetchAll = createAction(CartFetchActions.Requested)
export const fetchAllSuccess = createAction<CartEntity[]>(
  CartFetchActions.Succeeded
)
export const fetchAllFailed = createAction<{ failure: string }>(
  CartFetchActions.Failed
)

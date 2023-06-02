import { createAction } from '@reduxjs/toolkit'

import type { ProductResponse } from '~/shared/api/schema'

import { ProductsActions } from './types'

export const fetchAll = createAction(ProductsActions.Requested)
export const fetchAllSuccess = createAction<ProductResponse>(
  ProductsActions.Succeeded
)
export const fetchAllFailed = createAction(ProductsActions.Failed)

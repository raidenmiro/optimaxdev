import { createAction } from '@reduxjs/toolkit'

import type { ProductEntity } from '~/shared/api/schema'

import { ProductsActions } from './types'

export const fetchAll = createAction(ProductsActions.Requested)
export const fetchAllSuccess = createAction<ProductEntity[]>(
  ProductsActions.Succeeded
)
export const fetchAllFailed = createAction<{ failure: string }>(
  ProductsActions.Failed
)

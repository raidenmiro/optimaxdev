import { createSelector } from '@reduxjs/toolkit'

import { productsAdapter } from '~/entities/products/model'
import type { RootState } from '~/shared/lib/redux-std/store'

export const productEntities = productsAdapter.getSelectors()
const everyThing = (state: RootState) => state.products

export const all = createSelector(everyThing, (state) =>
  productEntities.selectAll(state)
)
export const details = createSelector(
  everyThing,
  (_: unknown, id: string) => id,
  productEntities.selectById
)

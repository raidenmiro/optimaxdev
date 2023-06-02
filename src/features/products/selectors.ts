import { createSelector } from '@reduxjs/toolkit'

import { productsAdapter } from '~/entities/products/model'
import type { RootState } from '~/shared/lib/redux-std/store'

const entities = productsAdapter.getSelectors()
const everyThing = (state: RootState) => state.products

export const all = createSelector(everyThing, (state) =>
  entities.selectAll(state)
)

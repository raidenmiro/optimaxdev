import { createEntityAdapter } from '@reduxjs/toolkit'

import type { ProductEntity } from '~/shared/api/schema'

export const productsAdapter = createEntityAdapter<ProductEntity>({
  selectId: (product) => product.id
})

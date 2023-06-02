import { createSelector } from '@reduxjs/toolkit'

import { cartAdapter } from '~/entities/cart/model'
import { floatFix } from '~/shared/lib/arithmetic'
import type { RootState } from '~/shared/lib/redux-std/store'

import { productEntities } from '../products/selectors'

const everyThingStore = (state: RootState) => state.cart

const entity = cartAdapter.getSelectors()
export const isReceived = createSelector(
  everyThingStore,
  (state) => state.isLoading
)

export const all = createSelector(everyThingStore, (state) =>
  entity.selectAll(state)
)

export const quantity = createSelector(everyThingStore, (state) =>
  entity.selectAll(state).reduce((acc, item) => acc + item.quantity, 0)
)

const productsStore = (state: RootState) => state.products

export const totalById = createSelector(
  (state: RootState) => ({ cart: state.cart, products: state.products }),
  (_: unknown, id: string) => id,
  ({ cart, products }, id) => {
    const cartItem = entity.selectById(cart, id)

    if (!cartItem) {
      return 0
    }

    const productItem = productEntities.selectById(products, cartItem.productId)

    return productItem ? floatFix(productItem.price * cartItem.quantity) : 0
  }
)

export const total = createSelector(
  everyThingStore,
  productsStore,
  (carts, products) => {
    const all = entity.selectAll(carts)

    let total = 0
    for (const cartItem of all) {
      const product = products.entities[cartItem.productId]

      if (product) {
        total += product.price * cartItem.quantity
      }
    }

    return floatFix(total)
  }
)

export const isExistToCart = createSelector(
  everyThingStore,
  (_: unknown, cartItemId: string) => cartItemId,
  (state, cartItemId) => {
    const all = entity.selectAll(state)
    return all.some((item) => item.productId === cartItemId)
  }
)

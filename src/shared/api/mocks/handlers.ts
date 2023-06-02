import { rest, setupWorker } from 'msw'
import { nanoid } from 'nanoid'

import type { CartEntity, ProductEntity } from '../schema'
import { promotionsGet, quantityGet } from './generators'

export const handlers = [
  rest.get('/products', async (_, res, ctx) => {
    const json = await import('../../../../public/data/products.json')

    const normalizedProducts = json.body.map<ProductEntity>((body) => ({
      ...body,
      id: 'id' in body ? (body.id as string) : nanoid(),
      promotions: promotionsGet()
    }))

    return res(
      ctx.json({
        body: normalizedProducts
      })
    )
  }),

  rest.get('/cart', async (_, res, ctx) => {
    const json = await import('../../../../public/data/cart.json')

    const normalizedCarts = json.body.map<CartEntity>((body) => ({
      ...body,
      id: 'id' in body ? (body.id as string) : nanoid(),
      createAt: new Date(body.createAt),
      updatedAt: new Date(body.updatedAt),
      quantity: quantityGet()
    }))

    return res(
      ctx.json({
        body: normalizedCarts
      })
    )
  })
]

export const worker = setupWorker(...handlers)

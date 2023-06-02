import { rest, setupWorker } from 'msw'
import { nanoid } from 'nanoid'
import type { Stats } from 'node:fs'
import fs from 'node:fs/promises'
import path from 'node:path'

import { mergePaths } from '~/shared/lib/merge-path'

import type { ProductEntity, ProductResponse } from '../schema'
import { maxGet, promotionsGet } from './generators'

const paths = mergePaths('../../../../public', {
  products: () => 'products.json'
})

type ProductsJson = Omit<ProductResponse, 'id' | 'promotions' | 'stockQuantity'>

export const handlers = [
  rest.get('/products', async (_, res, ctx) => {
    const cartPath = path.resolve(__dirname, paths.products())

    const [{ products }, stat] = await Promise.all<[ProductsJson, Stats]>([
      JSON.parse(await fs.readFile(cartPath, 'utf-8')),
      await fs.stat(cartPath)
    ])

    const normalizedProducts = products.map<ProductEntity>((body) => ({
      ...body,
      id: nanoid(),
      stockQuantity: maxGet(),
      promotions: promotionsGet()
    }))

    return res(
      ctx.status(200),
      ctx.json({
        products: normalizedProducts,
        updatedAt: new Date(stat.mtime)
      })
    )
  })
]

export const worker = setupWorker(...handlers)

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { nanoid } from 'nanoid'
import type { Stats } from 'node:fs'
import fs from 'node:fs/promises'
import path from 'node:path'

import { mergePaths } from '~/shared/lib/merge-path'

import type { Product } from '../schema'

const paths = mergePaths('../../../../public', {
  products: () => 'products.json'
})

export const handlers = [
  rest.get('/products', async (_, res, ctx) => {
    const cartPath = path.resolve(__dirname, paths.products())

    const [{ products }, stat] = await Promise.all<
      [Omit<Product, 'id'>, Stats]
    >([
      JSON.parse(await fs.readFile(cartPath, 'utf-8')),
      await fs.stat(cartPath)
    ])

    const normalizedProducts = products.map((body) => ({
      ...body,
      id: nanoid()
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

export const server = setupServer(...handlers)

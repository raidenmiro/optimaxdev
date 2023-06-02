export interface ProductEntity {
  id: string
  name: string
  price: number
  description: string
  promotions: string[]
  image: string
}

export interface ProductResponse {
  body: ProductEntity[]
  currency: string
}

export interface CartEntity {
  id: string
  productId: string
  quantity: number
  total: number
  createAt: Date
  updatedAt: Date
}

export interface CartResponse {
  body: CartEntity[]
}

export interface ProductEntity {
  id: string
  name: string
  price: number
  promotions: string[]
  stockQuantity: number
  image: string
  category: string
}

export interface ProductResponse {
  products: ProductEntity[]
  currency: string
}

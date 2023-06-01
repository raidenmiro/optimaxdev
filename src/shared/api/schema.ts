export interface ProductEntity {
  id: string
  name: string
  price: number
  quantity: number
  promotions: string[]
  stockQuantity: number
}

export interface Product {
  products: ProductEntity[]
}

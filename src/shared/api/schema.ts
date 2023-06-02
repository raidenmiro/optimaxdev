export interface ProductEntity {
  id: string
  name: string
  price: number
  quantity: number
  promotions: string[]
  stockQuantity: number
  image: string
  category: string
}

export interface Product {
  products: ProductEntity[]
  currency: string
}

export interface ProductEntity {
  id: string
  name: string
  price: number
  quantity: number
}

export interface Product {
  products: ProductEntity[]
}

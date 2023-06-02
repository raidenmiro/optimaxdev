export interface AddToBugParams {
  productId: string
  price: number
}

export interface DeleteOneParams {
  cartItemId: string
}

export interface ChangeQuantityParams {
  cartItemId: string
  quantity: number
}

export enum CartFetchActions {
  Requested = 'CART/FETCH_REQUESTED',
  Succeeded = 'CART/FETCH_SUCCEEDED',
  Failed = 'CART/FETCH_FAILED'
}

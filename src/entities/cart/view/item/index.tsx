import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { cartActions, cartSelectors } from '~/features/cart'
import { productsSelector } from '~/features/products'
import type { CartEntity } from '~/shared/api/schema'
import type { RootState } from '~/shared/lib/redux-std/store'
import { Checkbox } from '~/shared/view/checkbox'
import { View } from '~/shared/view/generic'

import { CartSample, Quantity } from '..'
import s from './index.module.css'

interface CartItemProps {
  id: string
  cart: CartEntity
}

export function CartItem({ id, cart }: CartItemProps) {
  const dispatch = useDispatch()

  const item = useSelector((state: RootState) =>
    productsSelector.details(state, id)
  )

  const total = useSelector((state: RootState) =>
    cartSelectors.totalById(state, cart.id)
  )

  const changeQuantity = useCallback(
    (n: number) => {
      dispatch(cartActions.changeQuantity({ quantity: n, cartItemId: cart.id }))
    },
    [cart.id, dispatch]
  )

  if (!item) {
    return null
  }

  const totalFormatted = `${total}${CURRENCY_SYMBOL}`

  return (
    <View className={s.container}>
      <Checkbox checked={true} />
      <View className={s.sample}>
        <CartSample
          id={cart.id}
          image={item.image}
          promotions={item.promotions}
          name={item.name}
        />
      </View>
      <View className={s.footer}>
        <View>{totalFormatted}</View>
        <Quantity
          className={s.quantity}
          quantity={cart.quantity}
          changeQuantity={changeQuantity}
        />
      </View>
    </View>
  )
}

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CartItem } from '~/entities/cart/view/item'
import { Card } from '~/shared/view/card'
import { View } from '~/shared/view/generic'

import { cartActions, cartSelectors } from '../..'
import s from './index.module.css'

export function CartList() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cartActions.fetchAll())
  }, [dispatch])

  return (
    <View className={s.paper}>
      <View as="h1">Cart of goods</View>
      <Content />
    </View>
  )
}

function Content() {
  const cart = useSelector(cartSelectors.all)

  if (cart.length === 0) {
    return (
      <Card.Body className={s.sample}>
        <div>empty cart</div>
      </Card.Body>
    )
  }

  return (
    <Card.Body className={s.sample}>
      {cart.map((item) => (
        <CartItem key={item.id} cart={item} id={item.productId} />
      ))}
    </Card.Body>
  )
}

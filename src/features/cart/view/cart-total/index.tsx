import { useSelector } from 'react-redux'

import { CartSummary } from '~/entities/cart/view/summary'
import { Button } from '~/shared/view/button'
import { View } from '~/shared/view/generic'

import { cartSelectors } from '../..'
import s from './index.module.css'

export function CartTotal() {
  const quantity = useSelector(cartSelectors.quantity)
  const total = useSelector(cartSelectors.total)

  return (
    <View className={s.total}>
      <CartSummary quantity={quantity} total={total} />
      <Button>Pay</Button>
    </View>
  )
}

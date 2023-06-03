import cc from 'classcat'

import { View } from '~/shared/view/generic'

import s from './index.module.css'

interface SummaryProps {
  total: number
  quantity: number
}

export function CartSummary({ total, quantity }: SummaryProps) {
  const totalFormatted = `${total}${CURRENCY_SYMBOL}`

  return (
    <View className={s.card}>
      <View className={cc([s.card_row, s.card_header, s.card_divider])}>
        <View>Total</View>
        <View>{totalFormatted}</View>
      </View>
      <View>
        <View className={s.card_row}>
          <View>Items</View>
          <View>{quantity}</View>
        </View>
        <View className={s.card_row}>
          <View>Shipping Cost</View>
          <View>Free</View>
        </View>
      </View>
    </View>
  )
}

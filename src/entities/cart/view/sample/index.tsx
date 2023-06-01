import { Badge } from '~/shared/view/badge'
import { View } from '~/shared/view/generic'

import s from './index.module.css'

export function CartSample() {
  return (
    <View className={s.cart_item}>
      <View className={s.cart_preview}>
        <View as="img" src="" alt="" />
      </View>
      <View className={s.cart_info}>
        <View as="h2">T-shirt Unisex</View>
        <View as="span">23% Stocks remaining</View>
        <View className={s.cart_stocks}>
          <Badge label="Shopping discount" />
        </View>
      </View>
    </View>
  )
}

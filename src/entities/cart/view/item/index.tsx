import cc from 'classcat'

import type { ProductEntity } from '~/shared/api/schema'
import type { MergeTypes } from '~/shared/lib/types'
import { Checkbox } from '~/shared/view/checkbox'
import { View } from '~/shared/view/generic'

import { CartSample, Quantity } from '..'
import s from './index.module.css'

export function CartItem({
  name,
  quantity,
  stockQuantity,
  category,
  promotions,
  currency,
  image,
  price
}: MergeTypes<ProductEntity, { currency: string; quantity: number }>) {
  const formattedPrice = `${price}${currency}`

  return (
    <View className={s.container}>
      <View className={s.column}>
        <Checkbox />
      </View>

      <View className={s.column}>
        <CartSample
          category={category}
          image={image}
          promotions={promotions}
          name={name}
        />
      </View>

      <View className={s.column}>
        <Quantity maxQuantity={stockQuantity} quantity={quantity} />
      </View>

      <View className={cc([s.total, s.column])}>
        <View as="span">{formattedPrice}</View>
        <View as="span" className="sr-only">
          {currency}
        </View>
      </View>
    </View>
  )
}

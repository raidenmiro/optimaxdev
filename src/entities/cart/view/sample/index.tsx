import type { ProductEntity } from '~/shared/api/schema'
import { Badge } from '~/shared/view/badge'
import { View } from '~/shared/view/generic'

import s from './index.module.css'

export type CartSampleProps = Pick<
  ProductEntity,
  'name' | 'image' | 'category' | 'promotions'
>

export function CartSample({
  name,
  image,
  category,
  promotions
}: CartSampleProps) {
  return (
    <View className={s.cart_item}>
      <View className={s.cart_preview}>
        <View as="img" src={image} alt="preview product" />
      </View>
      <View className={s.cart_info}>
        <View as="h2">{name}</View>
        <View as="span">{category}</View>
        <View className={s.cart_stocks}>
          {promotions.map((promotion) => (
            <Badge key={promotion} label={promotion} />
          ))}
        </View>
      </View>
    </View>
  )
}

import { useDispatch } from 'react-redux'

import { cartActions } from '~/features/cart'
import type { ProductEntity } from '~/shared/api/schema'
import { ActionIcon } from '~/shared/view/action-icon'
import { Badge } from '~/shared/view/badge'
import { View } from '~/shared/view/generic'

import s from './index.module.css'

export type CartSampleProps = Pick<
  ProductEntity,
  'name' | 'image' | 'promotions' | 'id'
>

export function CartSample({ name, image, promotions, id }: CartSampleProps) {
  const dispatch = useDispatch()

  const deleteItemCart = () => {
    dispatch(cartActions.deleteOne({ cartItemId: id }))
  }

  return (
    <View className={s.cart_item}>
      <View className={s.cart_preview}>
        <View as="img" src={image} alt="preview product" />
      </View>
      <View className={s.cart_info}>
        <View as="h2">{name}</View>
        <View className={s.cart_action}>
          <View className={s.cart_stocks}>
            {promotions.map((promotion) => (
              <Badge key={promotion} label={promotion} />
            ))}
          </View>
          <ActionIcon path="sprite/trash" onPress={deleteItemCart} />
        </View>
      </View>
    </View>
  )
}

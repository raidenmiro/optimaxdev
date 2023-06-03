import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import { useSelector } from 'react-redux'

import { cartSelectors } from '~/features/cart'
import type { ProductEntity } from '~/shared/api/schema'
import type { RootState } from '~/shared/lib/redux-std/store'
import { Button } from '~/shared/view/button'
import { View } from '~/shared/view/generic'

import s from './index.module.css'

interface CardProps {
  product: ProductEntity
  onPay(slug: string, price: number): void
}

export function CartCard({ product, onPay }: CardProps) {
  const checkExistToCart = useSelector((state: RootState) =>
    cartSelectors.isExistToCart(state, product.id)
  )

  return (
    <View as="article" className={s.card}>
      <View className={s.preview}>
        <AspectRatio.Root ratio={1}>
          <img className="Image" src={product.image} alt="Product preview" />
        </AspectRatio.Root>
      </View>
      <View className={s.content}>
        <View className={s.title}>
          {String(product.price).concat(CURRENCY_SYMBOL)}
        </View>
        <View className={s.description}>{product.description}</View>
      </View>
      <Button
        disabled={checkExistToCart}
        onClick={() => onPay(product.id, product.price)}>
        Add to bug
      </Button>
    </View>
  )
}

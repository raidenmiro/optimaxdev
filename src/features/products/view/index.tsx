import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GoodsRow } from '~/entities/products/view/row'
import { cartActions } from '~/features/cart'
import { View } from '~/shared/view/generic'

import { productsActions, productsSelector } from '..'

export function GoodsList() {
  const dispatch = useDispatch()
  const products = useSelector(productsSelector.all)

  const addToBug = useCallback(
    (id: string, price: number) => {
      dispatch(cartActions.addOne({ productId: id, price }))
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(productsActions.fetchAll())
  }, [dispatch])

  if (products.length === 0) {
    return null
  }

  return (
    <View>
      <View as="h1">Might come in handy</View>
      <GoodsRow products={products} onPay={addToBug} />
    </View>
  )
}

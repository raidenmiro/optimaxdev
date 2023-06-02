import { all } from 'redux-saga/effects'

import { watchCartEffects } from '~/features/cart/sagas'
import { watchProductsEffects } from '~/features/products/sagas'

export function* rootSaga() {
  yield all([watchProductsEffects(), watchCartEffects()])
}

import { call, put, takeLatest } from 'redux-saga/effects'

import { fetchCartApi } from '~/shared/api'
import type { CartResponse } from '~/shared/api/schema'

import { cartActions } from '..'

function* fetchCart() {
  try {
    const { body }: CartResponse = yield call(fetchCartApi)
    yield put(cartActions.fetchAllSuccess(body))
  } catch (error) {
    if (error instanceof Error) {
      yield put(cartActions.fetchAllFailed({ failure: error.message }))
    }
  }
}

export function* watchCartEffects() {
  yield takeLatest(cartActions.fetchAll.type, fetchCart)
}

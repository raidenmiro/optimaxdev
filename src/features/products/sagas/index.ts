import { call, put, takeLatest } from 'redux-saga/effects'

import { fetchProductsApi } from '~/shared/api'
import type { ProductResponse } from '~/shared/api/schema'

import { productsActions } from '..'

function* fetchProducts() {
  try {
    const { body }: ProductResponse = yield call(fetchProductsApi)
    yield put(productsActions.fetchAllSuccess(body))
  } catch (error) {
    if (error instanceof Error) {
      yield put(productsActions.fetchAllFailed({ failure: error.message }))
    }
  }
}

export function* watchProductsEffects() {
  yield takeLatest(productsActions.fetchAll, fetchProducts)
}

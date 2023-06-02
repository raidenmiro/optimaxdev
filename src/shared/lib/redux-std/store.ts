import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { cart } from '~/features/cart'
import { products } from '~/features/products'

import { rootSaga } from './root-saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    [products.name]: products.reducer,
    [cart.name]: cart.reducer
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware
  ],
  devTools: import.meta.env.MODE !== 'production'
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

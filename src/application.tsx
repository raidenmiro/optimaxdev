import 'keen-slider/keen-slider.min.css'
import './base/index.css'

import { Provider as ReduxProvider } from 'react-redux'

import { CartList } from './features/cart/view/cart-list'
import { CartTotal } from './features/cart/view/cart-total'
import { GoodsList } from './features/products/view'
import { Layout } from './shared/layouts/base'
import { store } from './shared/lib/redux-std/store'

export function Application() {
  return (
    <ReduxProvider store={store}>
      <Layout>
        <Layout.Cart>
          <CartList />
        </Layout.Cart>
        <Layout.Summary>
          <CartTotal />
        </Layout.Summary>
        <Layout.Goods>
          <GoodsList />
        </Layout.Goods>
      </Layout>
    </ReduxProvider>
  )
}

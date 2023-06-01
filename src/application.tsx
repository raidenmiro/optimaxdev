import './base/index.css'

import { Provider as ReduxProvider } from 'react-redux'

import { Page } from './pages'
import { store } from './shared/lib/redux-std/store'

export function Application() {
  return (
    <ReduxProvider store={store}>
      <Page />
    </ReduxProvider>
  )
}

import * as fetchActions from './actions'
import { actions } from './reducer'

// public api
export { cart } from './reducer'
export * as cartSelectors from './selectors'
export const cartActions = Object.assign(actions, fetchActions)

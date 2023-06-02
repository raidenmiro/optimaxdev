import * as fetchActions from './actions'
import { actions } from './reducer'

// public api
export { products } from './reducer'

export const productsActions = Object.assign(actions, fetchActions)

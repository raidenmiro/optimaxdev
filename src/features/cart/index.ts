import { fetchAll, fetchAllFailed, fetchAllSuccess } from './actions'
import { actions, name, reducer } from './reducer'

export * as cartSelectors from './selectors'

// public api
export const cart = {
  name,
  reducer
}

export const cartActions = Object.assign(actions, {
  fetchAll,
  fetchAllSuccess,
  fetchAllFailed
})

import { createAction } from '@reduxjs/toolkit'

import { CartFetchActions } from './types'

export const fetchAll = createAction(CartFetchActions.Requested)
export const fetchAllSuccess = createAction(CartFetchActions.Succeeded)
export const fetchAllFailed = createAction(CartFetchActions.Failed)

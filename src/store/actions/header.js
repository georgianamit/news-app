import * as types from '../../constants/action-types'

export const enableHeaderSticky = () => (dispatch, getState) => {
  const state = getState()
  if (state.header.isSticky) return
  dispatch({
    type: types.ENABLE_HEADER_STICKY,
  })
}

export const disableHeaderSticky = () => (dispatch, getState) => {
  const state = getState()
  if (!state.header.isSticky) return
  dispatch({
    type: types.DISABLE_HEADER_STICKY,
  })
}

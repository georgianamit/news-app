import axios from 'axios'

import { API_ROOT, API_KEY } from '../../constants'
import * as types from '../../constants/action-types'
import { timeoutPromise } from '../../utils'

export const fetchLatestNewsRequest = (page) => ({
  type: types.FETCH_LATEST_NEWS_REQUEST,
  page,
})

export const fetchLatestNewsSuccess = (response) => ({
  type: types.FETCH_LATEST_NEWS_SUCCESS,
  response,
})

export const fetchLatestNewsError = (error) => ({
  type: types.FETCH_LATEST_NEWS_ERROR,
  error,
})

export const infiniteLoadingStart = () => ({
  type: types.INFINITE_LOADING_START,
})

export const fetchLatestNews = (page) => async (dispatch, getState) => {
  // const _page = page || getState().articles.nextPage || 1
  // dispatch(fetchLatestNewsRequest(_page))

  try {
    const response = await axios(`${API_ROOT}/top-headlines?apiKey=${API_KEY}`, {
      params: {
        country: 'in',
      },
    })
    dispatch(fetchLatestNewsSuccess(response.data))
  } catch (e) {
    dispatch(fetchLatestNewsError(e))
  }
}

export const loadMoreHandler = () => async (dispatch) => {
  dispatch(infiniteLoadingStart())
  await timeoutPromise(2000)
  return dispatch(fetchLatestNews())
}

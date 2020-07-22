import axios from 'axios'

import { API_ROOT, API_KEY } from '../../constants'
import * as types from '../../constants/action-types'
import { timeoutPromise } from '../../utils'

export const fetchSideBarTopNewsRequest = (page) => ({
  type: types.FETCH_SIDE_BAR_TOP_NEWS_REQUEST,
  page,
})

export const fetchSideBarTopNewsSuccess = (response) => ({
  type: types.FETCH_SIDE_BAR_TOP_NEWS_SUCCESS,
  response,
})

export const fetchSideBarTopNewsError = (error) => ({
  type: types.FETCH_SIDE_BAR_TOP_NEWS_ERROR,
  error,
})

export const infiniteLoadingStart = () => ({
  type: types.INFINITE_LOADING_START,
})

export const fetchSideBarTopNews = (category) => async (dispatch, getState) => {
  // const _page = page || getState().articles.nextPage || 1
  // dispatch(fetchArticlesRequest(_page))
  try {
    const response = await axios(`${API_ROOT}/everything?apiKey=${API_KEY}`, {
      params: {
        sources: 'abc-news',
        sortBy: 'popularity',
      },
    })
    dispatch(fetchSideBarTopNewsSuccess(response.data))
  } catch (e) {
    dispatch(fetchSideBarTopNewsError(e))
  }
}

export const loadMoreHandler = () => async (dispatch) => {
  dispatch(infiniteLoadingStart())
  await timeoutPromise(2000)
  return dispatch(fetchSideBarTopNews())
}

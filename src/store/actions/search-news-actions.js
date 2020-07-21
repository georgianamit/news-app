import axios from 'axios'

import { API_ROOT, API_KEY } from '../../constants'
import * as types from '../../constants/action-types'
import { timeoutPromise } from '../../utils'

export const fetchSearchNewsRequest = (page) => ({
  type: types.FETCH_SEARCH_NEWS_REQUEST,
  page,
})

export const fetchSearchNewsSuccess = (response) => ({
  type: types.FETCH_SEARCH_NEWS_SUCCESS,
  response,
})

export const fetchSearchNewsError = (error) => ({
  type: types.FETCH_SEARCH_NEWS_ERROR,
  error,
})

export const infiniteLoadingStart = () => ({
  type: types.INFINITE_LOADING_START,
})

export const fetchSearchNews = (searchTerm) => async (dispatch, getState) => {
  // const _page = page || getState().articles.nextPage || 1
  // dispatch(fetchArticlesRequest(_page))
  console.log(searchTerm + 'its there')
  try {
    const response = await axios(`${API_ROOT}/everything?apiKey=${API_KEY}`, {
      params: {
        q: searchTerm,
      },
    })
    dispatch(fetchSearchNewsSuccess(response.data))
  } catch (e) {
    dispatch(fetchSearchNewsError(e))
  }
}

export const loadMoreHandler = () => async (dispatch) => {
  dispatch(infiniteLoadingStart())
  await timeoutPromise(2000)
  return dispatch(fetchSearchNews())
}

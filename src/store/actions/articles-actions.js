import axios from 'axios'

import { API_ROOT, API_KEY } from '../../constants'
import * as types from '../../constants/action-types'
import { timeoutPromise } from '../../utils'

export const fetchArticlesRequest = (page) => ({
  type: types.FETCH_ARTICLES_REQUEST,
  page,
})

export const fetchArticlesSuccess = (response) => ({
  type: types.FETCH_ARTICLES_SUCCESS,
  response,
})

export const fetchArticlesError = (error) => ({
  type: types.FETCH_ARTICLES_ERROR,
  error,
})

export const infiniteLoadingStart = () => ({
  type: types.INFINITE_LOADING_START,
})

export const fetchArticles = (category) => async (dispatch, getState) => {
  // const _page = page || getState().articles.nextPage || 1
  // dispatch(fetchArticlesRequest(_page))
  try {
    const response = await axios(`${API_ROOT}/top-headlines?apiKey=${API_KEY}`, {
      params: {
        country: 'in',
        category: category,
      },
    })
    dispatch(fetchArticlesSuccess(response.data))
  } catch (e) {
    dispatch(fetchArticlesError(e))
  }
}

export const loadMoreHandler = () => async (dispatch) => {
  dispatch(infiniteLoadingStart())
  await timeoutPromise(2000)
  return dispatch(fetchArticles())
}

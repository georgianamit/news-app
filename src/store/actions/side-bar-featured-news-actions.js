import axios from 'axios'

import { API_ROOT, API_KEY } from '../../constants'
import * as types from '../../constants/action-types'
import { timeoutPromise } from '../../utils'

export const fetchSideBarFeaturedNewsRequest = (page) => ({
  type: types.FETCH_SIDE_BAR_FEATURED_NEWS_REQUEST,
  page,
})

export const fetchSideBarFeaturedNewsSuccess = (response) => ({
  type: types.FETCH_SIDE_BAR_FEATURED_NEWS_SUCCESS,
  response,
})

export const fetchSideBarFeaturedNewsError = (error) => ({
  type: types.FETCH_SIDE_BAR_FEATURED_NEWS_ERROR,
  error,
})

export const infiniteLoadingStart = () => ({
  type: types.INFINITE_LOADING_START,
})

export const fetchSideBarFeaturedNews = (category) => async (dispatch, getState) => {
  // const _page = page || getState().articles.nextPage || 1
  // dispatch(fetchArticlesRequest(_page))
  console.log(category + 'its there')
  try {
    const response = await axios(`${API_ROOT}/top-headlines?apiKey=${API_KEY}`, {
      params: {
        country: 'in',
        category: category,
      },
    })
    dispatch(fetchSideBarFeaturedNewsSuccess(response.data))
  } catch (e) {
    dispatch(fetchSideBarFeaturedNewsError(e))
  }
}

export const loadMoreHandler = () => async (dispatch) => {
  dispatch(infiniteLoadingStart())
  await timeoutPromise(2000)
  return dispatch(fetchSideBarFeaturedNews()) //todo explain why need to return
}

import { combineReducers } from 'redux'
import articles from './articles-reducer'
import latestNewsReducer from './latest-news-reducer'
import sideBarTopNewsReducer from './side-bar-top-news-reducer'
import sideBarFeaturedNewsReducer from './side-bar-featured-news-reducer'
import searchNewsReducer from './search-news-reducer'

const rootReducer = combineReducers({
  latestNews: latestNewsReducer,
  sideBarFeaturedNews: sideBarFeaturedNewsReducer,
  sideBarTopNews: sideBarTopNewsReducer,
  searchNews: searchNewsReducer,
  articles,
})

export default rootReducer

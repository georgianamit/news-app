import { combineReducers } from 'redux'
import header from './header'
import articles from './articles-reducer'
import latestNewsReducer from './latest-news-reducer'
import sideBarTopNewsReducer from './side-bar-top-news-reducer'
import sideBarFeaturedNewsReducer from './side-bar-featured-news-reducer'

const rootReducer = combineReducers({
  header,
  latestNews: latestNewsReducer,
  sideBarFeaturedNews: sideBarFeaturedNewsReducer,
  sideBarTopNews: sideBarTopNewsReducer,
  articles,
})

export default rootReducer

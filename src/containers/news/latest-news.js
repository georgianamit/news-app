import React from 'react'
import { connect } from 'react-redux'

import NewsList from '../../components/latest-news/news-list'
import { loadMoreHandler } from '../../store/actions/articles-actions'

const LatestNews = (props) => <NewsList {...props} />

const mapStateToProps = (state) => {
  const { latestNews } = state
  return {
    items: latestNews.items,
    isFetching: latestNews.isFetching,
    nextPage: latestNews.nextPage,
  }
}

export default connect(mapStateToProps, { loadMoreHandler })(LatestNews)

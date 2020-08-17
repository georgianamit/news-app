import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import NewsList from '../../components/latest-news/news-list'
import { loadMoreHandler } from '../../store/actions/articles-actions'
import { fetchLatestNews } from '../../store/actions/latest-news-actions'

const LatestNews = (props) => {
  const { fetchLatestNews } = props
  useEffect(() => {
    fetchLatestNews()
  }, [])
  return <NewsList {...props} />
}
const mapStateToProps = (state) => {
  const { latestNews } = state
  return {
    items: latestNews.items,
    isFetching: latestNews.isFetching,
    nextPage: latestNews.nextPage,
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchLatestNews: () => dispatch(fetchLatestNews()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LatestNews)

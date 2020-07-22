import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import ArticleList from '../components/articles/article-list'
import { fetchSearchNews } from '../store/actions/search-news-actions'

const SearchListContainer = (props) => {
  const { fetchSearchNews, match } = props
  useEffect(() => {
    fetchSearchNews(match.params)
  }, [match.params])
  return <ArticleList {...props} />
}

const mapStateToProps = (state) => {
  const { searchNews } = state
  return {
    items: searchNews.items,
    isFetching: searchNews.isFetching,
    nextPage: searchNews.nextPage,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchSearchNews: (searchTerm) => dispatch(fetchSearchNews(searchTerm)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchListContainer)

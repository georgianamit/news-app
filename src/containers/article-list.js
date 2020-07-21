import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import ArticleList from '../components/articles/article-list'
import { fetchArticles } from '../store/actions/articles-actions'

// class ArticleListContainer extends React.Component {
//   componentDidMount() {
//     console.log(this.props.category)
//     this.props.fetchArticles(this.props.category)
//   }

//   render() {
//     return <ArticleList {...this.props} />
//   }
// }

const ArticleListContainer = (props) => {
  const { category, fetchArticles } = props
  useEffect(() => {
    console.log(category)
    fetchArticles(category)
  }, [category])
  return <ArticleList {...props} />
}

const mapStateToProps = (state) => {
  const { articles } = state
  return {
    items: articles.items,
    isFetching: articles.isFetching,
    nextPage: articles.nextPage,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: (category) => dispatch(fetchArticles(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListContainer)

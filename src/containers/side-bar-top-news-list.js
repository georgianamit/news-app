import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchSideBarTopNews } from '../store/actions/side-bar-top-news-actions'
import SideBarNewsList from '../components/side-bar-news/side-bar-news-list'

// class ArticleListContainer extends React.Component {
//   componentDidMount() {
//     console.log(this.props.category)
//     this.props.fetchArticles(this.props.category)
//   }

//   render() {
//     return <ArticleList {...this.props} />
//   }
// }

const SideBarTopNewsContainer = (props) => {
  const { category, fetchSideBarTopNews } = props
  useEffect(() => {
    console.log(category)
    fetchSideBarTopNews(category)
  }, [category])
  return <SideBarNewsList {...props} />
}

const mapStateToProps = (state) => {
  const { sideBarTopNews } = state
  return {
    items: sideBarTopNews.items,
    isFetching: sideBarTopNews.isFetching,
    nextPage: sideBarTopNews.nextPage,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchSideBarTopNews: (category) => dispatch(fetchSideBarTopNews(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBarTopNewsContainer)

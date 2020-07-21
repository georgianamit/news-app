import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchSideBarFeaturedNews } from '../store/actions/side-bar-featured-news-actions'
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

const SideBarFeaturedNewsContainer = (props) => {
  const { category, fetchSideBarFeaturedNews } = props
  useEffect(() => {
    console.log(category)
    fetchSideBarFeaturedNews(category)
  }, [category])
  return <SideBarNewsList {...props} />
}

const mapStateToProps = (state) => {
  const { sideBarFeaturedNews } = state
  return {
    items: sideBarFeaturedNews.items,
    isFetching: sideBarFeaturedNews.isFetching,
    nextPage: sideBarFeaturedNews.nextPage,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchSideBarFeaturedNews: (category) => dispatch(fetchSideBarFeaturedNews(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBarFeaturedNewsContainer)

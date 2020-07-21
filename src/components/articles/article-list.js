import PropTypes from 'prop-types'
import React, { Component } from 'react'
// import InfiniteScroll from 'redux-infinite-scroll'

import ArticleListItem from './article-item'

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isFetching: PropTypes.bool,
  loadMoreHandler: PropTypes.func,
}

const defaultProps = {
  items: [],
  nextPage: true,
}

class ArticleList extends Component {
  render() {
    const { items } = this.props
    return items.map((item) => {
      let { id, title, description, content, tag, url, urlToImage, publishedAt, author } = item
      return (
        <ArticleListItem
          key={id}
          id={id}
          title={title}
          tag={tag}
          content={content}
          url={url}
          urlToImage={urlToImage}
          publishedAt={publishedAt}
        />
      )
    })
  }
  // render() {
  //   const { isFetching, nextPage, loadMoreHandler } = this.props
  //   return (
  //     <InfiniteScroll
  //       children={this.renderChildren()}
  //       loadMore={loadMoreHandler}
  //       loadingMore={isFetching}
  //       hasMore={Boolean(nextPage)}
  //       holderType="section"
  //       className="blog_listing large_img"
  //       elementIsScrollable={false}
  //     />
  //   )
  // }
}

ArticleList.propTypes = propTypes
ArticleList.defaultProps = defaultProps

export default ArticleList

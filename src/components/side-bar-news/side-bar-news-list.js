import PropTypes from 'prop-types'
import React, { Component } from 'react'
// import InfiniteScroll from 'redux-infinite-scroll'

import SideBarNewsItem from './side-bar-news-item'

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isFetching: PropTypes.bool,
  loadMoreHandler: PropTypes.func,
}

const defaultProps = {
  items: [],
  nextPage: true,
}

class SideBarNewsList extends Component {
  render() {
    const { items } = this.props
    return items.map((item) => {
      let { id, title, description, content, tag, url, urlToImage, publishedAt, author } = item
      return (
        <SideBarNewsItem
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

SideBarNewsList.propTypes = propTypes
SideBarNewsList.defaultProps = defaultProps

export default SideBarNewsList

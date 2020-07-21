import PropTypes from 'prop-types'
import React, { Component } from 'react'
// import InfiniteScroll from 'redux-infinite-scroll'

import NewsItem from './news-item'

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isFetching: PropTypes.bool,
  loadMoreHandler: PropTypes.func,
}

const defaultProps = {
  items: [],
  nextPage: true,
}

class NewsList extends Component {
  render() {
    let { items } = this.props
    items = items.filter((item, i) => i <= 3)
    const renderNewsItems = items.map((item) => {
      let { id, title, description, content, tag, publishedAt, url, urlToImage, author } = item
      return (
        <NewsItem
          key={id}
          id={id}
          title={title}
          tag={tag}
          content={content}
          url={url}
          urlToImage={urlToImage}
          publishedAt={publishedAt}
          author={author}
        />
      )
    })

    return (
      <section class="banner-sec mb-4">
        <div class="container">
          <div class="row">{renderNewsItems} </div>
        </div>
      </section>
    )
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

NewsList.propTypes = propTypes
NewsList.defaultProps = defaultProps

export default NewsList

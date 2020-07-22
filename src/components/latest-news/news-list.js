import PropTypes from 'prop-types'
import React, { Component } from 'react'

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
      let { id, title, description, content, publishedAt, url, urlToImage, author } = item
      return (
        <NewsItem
          key={id}
          id={id}
          title={title}
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
}

NewsList.propTypes = propTypes
NewsList.defaultProps = defaultProps

export default NewsList

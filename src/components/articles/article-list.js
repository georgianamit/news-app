import PropTypes from 'prop-types'
import React, { Component } from 'react'

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
      let { id, title, description, content, url, urlToImage, publishedAt, author } = item
      return (
        <ArticleListItem
          key={id}
          id={id}
          title={title}
          content={content}
          url={url}
          urlToImage={urlToImage}
          publishedAt={publishedAt}
        />
      )
    })
  }
}

ArticleList.propTypes = propTypes
ArticleList.defaultProps = defaultProps

export default ArticleList

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

    return items.length ? (
      items.map((item) => {
        let { id, title, content, url, urlToImage, publishedAt } = item
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
    ) : (
      <h1 className="text-center">No News To Display!</h1>
    )
  }
}

ArticleList.propTypes = propTypes
ArticleList.defaultProps = defaultProps

export default ArticleList

import PropTypes from 'prop-types'
import React, { Component } from 'react'

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
      let { id, title, description, content, url, urlToImage, publishedAt, author } = item
      return (
        <SideBarNewsItem
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

SideBarNewsList.propTypes = propTypes
SideBarNewsList.defaultProps = defaultProps

export default SideBarNewsList

import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
const propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  publishedAt: PropTypes.string,
  author: PropTypes.string,
}

const defaultProps = {}

const NewsItem = ({ id, title, description, content, url, urlToImage, publishedAt, author }) => (
  <div class="col-md-3">
    <div class="card">
      <img class="img-fluid" src={urlToImage} alt={title} />
      <div class="card-img-overlay">
        <span class="badge badge-pill badge-danger">News</span>
      </div>
      <div class="card-body">
        <div class="news-title">
          <h2 class=" title-small">
            <Link>{title}</Link>
          </h2>
        </div>
        <p class="card-text">
          <small class="text-time">
            <em>{new Date(publishedAt).toDateString()}</em>
          </small>
        </p>
      </div>
    </div>
  </div>
)

NewsItem.propTypes = propTypes
NewsItem.defaultProps = defaultProps

export default NewsItem

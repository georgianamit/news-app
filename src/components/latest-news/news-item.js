import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom'

const propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string,
  imageLink: PropTypes.string,
  tag: PropTypes.string,
  time: PropTypes.string,
}

const defaultProps = {}

const NewsItem = ({ id, title, description, content, url, urlToImage, tag, publishedAt, author }) => (
  <div class="col-md-3">
    <div class="card">
      <img class="img-fluid" src={urlToImage} alt={title} />
      <div class="card-img-overlay">
        <span class="badge badge-pill badge-danger">News</span>
      </div>
      <div class="card-body">
        <div class="news-title">
          <h2 class=" title-small">
            <a href="#">{title}</a>
          </h2>
        </div>
        <p class="card-text">
          <small class="text-time">
            <em>{publishedAt}</em>
          </small>
        </p>
      </div>
    </div>
  </div>
)

NewsItem.propTypes = propTypes
NewsItem.defaultProps = defaultProps

export default NewsItem

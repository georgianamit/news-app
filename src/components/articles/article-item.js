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

const ArticleListItem = ({ id, title, description, content, url, urlToImage, tag, publishedAt, author }) => (
  <div className="card mb-4">
    <div className="row no-gutters">
      <div className="col-4">
        <img src={urlToImage} className="img-fluid" alt={title} />
      </div>
      <div className="col">
        <div className="card-block px-2">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
          <a href="#" class="btn btn-primary">
            more..
          </a>
        </div>
      </div>
    </div>
  </div>
)

ArticleListItem.propTypes = propTypes
ArticleListItem.defaultProps = defaultProps

export default ArticleListItem

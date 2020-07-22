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

const SideBarNewsItem = ({ id, title, description, content, url, urlToImage, publishedAt, author }) => (
  <div className="card mb-2">
    <div className="row no-gutters">
      <div className="col-4">
        <img src={urlToImage} className="img-fluid" alt={title} />
      </div>
      <div className="col">
        <div className="card-block px-2">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  </div>
)

SideBarNewsItem.propTypes = propTypes
SideBarNewsItem.defaultProps = defaultProps

export default SideBarNewsItem

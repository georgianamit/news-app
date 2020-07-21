import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

const defaultProps = {
  items: [],
}

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

const HeaderNav = ({ items }) => (
  <section class="top-nav">
    <nav class="navbar navbar-expand-lg py-2">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="exCollapsingNavbar2">
          <ul class="nav navbar-nav ">
            {items.map((item, index) => (
              <li class="nav-item" key={item.id}>
                <Link to={item.path} className="nav-link">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <form class="ml-auto">
            <div class="search">
              <input type="text" class="form-control" placeholder="Search" />
              <button type="submit" class="btn btn-search">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </section>
)

HeaderNav.propTypes = propTypes
HeaderNav.defaultProps = defaultProps

export default HeaderNav

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import BrandHeader from './brand-header'
import HeaderNav from './nav-header'

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

const defaultProps = {
  items: [],
}

class Header extends Component {
  render() {
    const { items } = this.props
    return (
      <header>
        <BrandHeader />
        <HeaderNav items={items} />
      </header>
    )
  }
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header

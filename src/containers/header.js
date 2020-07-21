import React from 'react'
import { connect } from 'react-redux'

import Header from '../components/layout/header/'
import { enableHeaderSticky, disableHeaderSticky } from '../store/actions'

const HeaderContaine = (props) => <Header {...props} />

const mapStateToProps = (state) => {
  const { header } = state
  return {
    isSticky: header.isSticky,
  }
}

export default connect(mapStateToProps, {
  enableHeaderSticky,
  disableHeaderSticky,
})(HeaderContaine)

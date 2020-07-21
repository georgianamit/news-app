import React, { useEffect, useState } from 'react'
import config from '../config'
import Header from '../components/layout/header/'

const HeaderContainer = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const { history } = props
  const handleChange = (e) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
  }
  useEffect(() => {
    history.push(`/${searchTerm}`)
  }, [searchTerm])

  return <Header {...props} handleChange={handleChange} items={config.header.nav} />
}

export default HeaderContainer

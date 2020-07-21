import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import SideBarTopNewsContainer from '../side-bar-top-news-list'
import SideBarFeaturedNewsContainer from '../side-bar-featured-news-list'

// class ArticleListContainer extends React.Component {
//   componentDidMount() {
//     console.log(this.props.category)
//     this.props.fetchArticles(this.props.category)
//   }

//   render() {
//     return <ArticleList {...this.props} />
//   }
// }

const SideBarNews = (props) => {
  return (
    <Tabs defaultActiveKey="top" id="uncontrolled-tab-example">
      <Tab eventKey="top" title="Top">
        <SideBarTopNewsContainer {...props} category="technology" />
      </Tab>
      <Tab eventKey="featured" title="Featured">
        <SideBarFeaturedNewsContainer {...props} category="sports" />
      </Tab>
    </Tabs>
  )
}

export default SideBarNews

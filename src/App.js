import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import config from './config'
import Header from './containers/header'
import NotFound from './components/layout/not-found'
import LatestNews from './containers/news/latest-news'
import { Provider } from 'react-redux'
import store from './store'
import './App.scss'
import { fetchLatestNews } from './store/actions/latest-news-actions'
import GeneralNews from './containers/news/general-news'
import BusinessNews from './containers/news/business-news'
import EntertainmentNews from './containers/news/entertainment-news'
import HealthNews from './containers/news/health-news'
import ScienceNews from './containers/news/science-news'
import SportsNews from './containers/news/sports-news'
import TechnologyNews from './containers/news/technology-news'
import SideBarNews from './containers/news/side-bar-news'

class App extends Component {
  componentDidMount() {
    store.dispatch(fetchLatestNews())
  }
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <Router>
            <Header items={config.header.nav} />
            <LatestNews />
            <div class="container">
              <div class="row">
                <div class="col-md-8">
                  <Switch>
                    <Route path="/" exact component={GeneralNews} />
                    <Route path="/business" exact component={BusinessNews} />
                    <Route path="/entertainment" exact component={EntertainmentNews} />
                    <Route path="/health" exact component={HealthNews} />
                    <Route path="/science" exact component={ScienceNews} />
                    <Route path="/sports" exact component={SportsNews} />
                    <Route path="/technology" exact component={TechnologyNews} />
                    <Route path="*" component={NotFound} />
                  </Switch>
                </div>
                <div className="col-md-4">
                  <SideBarNews />
                </div>
              </div>
            </div>
          </Router>
        </Provider>
      </div>
    )
  }
}

export default App

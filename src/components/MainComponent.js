import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { NEWS, FI_NEWS } from '../shared/news'
import { EVENTS } from '../shared/events'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Events from './Events'
import Profile from './Profile.js'
import Subscription from './Subscription'


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      news: NEWS,
      finews: FI_NEWS,
      events: EVENTS,
      modalIsOpen: false
    }
  }

    toggleModal = () => {
      this.setState({
        modalIsOpen: !this.state.modalIsOpen
      })
    }
    render() {

      return(
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={() => <Home news={this.state.news.articles} finews={this.state.finews.Demo.value} />} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/events' component={() => <Events events={this.state.events.data} />} />
          </Switch>
          <Subscription isOpen={this.state.modalIsOpen} toggleModal={this.toggleModal} />
          <Footer toggleModal={this.toggleModal} />
        </div>
      )
    }
}

export default Main
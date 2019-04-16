import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bookmark } from '../redux/actionCreators'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Events from './Events'
import Profile from './Profile.js'
import Subscription from './Subscription'

const mapStateToProps = (state) => {
  return {
    news: state.news,
    finews: state.finews,
    events: state.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    bookmark: (eventId) => dispatch(bookmark(eventId))
  }
}
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
            <Route exact path='/' component={() => <Home news={this.props.news.articles} finews={this.props.finews.Demo.value} />} />
            <Route exact path='/profile' component={() => <Profile events={this.props.events.bookmarks} />} />
            <Route exact path='/events' component={() => <Events events={this.props.events.events.data} bookmark={this.props.events.bookmark} />} />
          </Switch>
          <Subscription isOpen={this.state.modalIsOpen} toggleModal={this.toggleModal} />
          <Footer toggleModal={this.toggleModal} />
        </div>
      )
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bookmark, fetchFiNews, fetchEvents } from '../redux/actionCreators'
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
    bookmark: (eventId) => dispatch(bookmark(eventId)),
    fetchFiNews: () => dispatch(fetchFiNews()),
    fetchEvents: () => dispatch(fetchEvents())
  }
}
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }
  }

  componentDidMount() {
    this.props.fetchFiNews()
    this.props.fetchEvents()
  }

    toggleModal = () => {
      this.setState({
        modalIsOpen: !this.state.modalIsOpen
      })
    }
    render() {
      const HomePage = () => {
        return(
          <Home
            news={this.props.news.articles}
            finews={this.props.finews.finews.filter(n => n.image !== null)}
            finewsLoading={this.props.finews.isLoading}
            finewsErrMess={this.props.finews.errMess}
          />
        )
      }
      return(
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/profile' component={() => <Profile events={this.props.events.bookmarks} />} />
            <Route exact path='/events' component={() => <Events
              events={this.props.events.events.filter(e => e.name.en)}
              eventsLoading={this.props.events.isLoading}
              eventsErrMess={this.props.events.errMess}
              bookmark={this.props.events.bookmark}
            />} />
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
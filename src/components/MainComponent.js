import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar, NavbarBrand } from 'reactstrap'
import { NEWS } from '../../shared/news'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Login from './LoginComponent'
import Home from './HomeComponent'
import Subscription from './Subscription'


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: NEWS,
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
                <Home news={this.state.news.articles}/>
                <Switch>
                    <Route path='/login' component={() => <Login />} />
                </Switch>
                <Subscription isOpen={this.state.modalIsOpen} toggleModal={this.toggleModal} />
                <Footer toggleModal={this.toggleModal} />
            </div>
        )
    }
}

export default Main
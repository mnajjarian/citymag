import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar, NavbarBrand } from 'reactstrap'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Login from './LoginComponent'


const Main = () => {
    return(
        <div>
            <Header />
            <Switch>
                <Route path='/login' component={() => <Login />} />
            </Switch>
            <Footer />
        </div>
    )
}

export default Main
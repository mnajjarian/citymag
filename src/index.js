import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/MainComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap-social/bootstrap-social.css'
import './index.css'

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
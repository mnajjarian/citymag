import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/MainComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap-social/bootstrap-social.css'
import './index.scss'

const App = () => {
  return(
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
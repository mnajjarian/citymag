import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/MainComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const App = () => {
    return(
        <div>
            <Main />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
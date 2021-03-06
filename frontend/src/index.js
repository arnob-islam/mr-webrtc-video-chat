import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './Redux/Provider/CombineReducers'
const store = createStore(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <React.Fragment>
        <Provider store={store} >
            <Router >
                <App />
            </Router>
        </Provider>
    </React.Fragment>,
    document.getElementById("root")
)
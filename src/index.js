import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App.js'
import './styles/app.css'
import configureStore from './store/configureStore'

const store = configureStore();

render (
    <Provider store={ store }>
        <div className="app">
            <App />
        </div>
    </Provider>,
    document.querySelector('#root')
);
import React, { Component } from 'react'
import { render } from 'react-dom'
import WelcomeHome from './view/welcome-home'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'

render (
    <Provider store={store}>
            <WelcomeHome />
      </Provider>,
    document.getElementById('root')
)
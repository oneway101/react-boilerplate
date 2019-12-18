import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import Root from './components'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Root/>
    </Router>
  </Provider>,
  document.getElementById('app')
);

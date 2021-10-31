import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import Login from '@/containers/Login'
import Index from '@/containers/Index'
import PrivateRouter from '@/components/PrivateRouter'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <PrivateRouter path="/" component={Index}></PrivateRouter>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Index from '@/containers/Index'
import Login from '@/containers/Login'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route path="/login" component={Login}></Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}

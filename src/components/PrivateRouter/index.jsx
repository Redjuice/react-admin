import React, { Component } from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

@connect((state) => ({ isLogin: state.login.isLogin }))
@withRouter
class PrivateRouter extends Component {
  render() {
    const { isLogin, component: Component, ...rest } = this.props
    return (
      <Route
        {...rest}
        render={(props) =>
          isLogin ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    )
  }
}

export default PrivateRouter

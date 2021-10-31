import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect((state) => ({ isLogin: state.login.isLogin }))
class Login extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return <div>Login</div>
  }
}

export default Login

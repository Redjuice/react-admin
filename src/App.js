import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount() {
    console.log(process.env.REACT_APP_API_ROOT)
  }
  render() {
    return <div>App..</div>
  }
}

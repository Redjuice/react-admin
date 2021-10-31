import React, { Component } from 'react'
// import axios from 'axios'
import { loginApi } from '@/apis'

export default class Index extends Component {
  async componentDidMount() {
    const { data } = await loginApi({ username: 'admin', password: 'admin' })
    console.log(data)
  }
  render() {
    return <div>Index</div>
  }
}

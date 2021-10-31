import React, { Component } from 'react'
import { Switch, Redirect } from 'react-router-dom'
import PrivateRouter from '@/components/PrivateRouter'
import Components from './utils' // 实现前端工程自动化
export default class MyContent extends Component {
  componentDidMount() {}
  render() {
    return (
      <Switch>
        {Components.map((item) => {
          return (
            <PrivateRouter
              exact
              key={item.path}
              path={item.path}
              component={item.component}
            />
          )
        })}
        <Redirect to="/home" />
      </Switch>
    )
  }
}

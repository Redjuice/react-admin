import React, { Component } from 'react'
import { Switch, Redirect } from 'react-router-dom'
import PrivateRouter from '@/components/PrivateRouter'
import Home from '@/containers/Home'
import Category from '@/containers/Product/Category'
import List from '@/containers/Product/Manage/List'
import Add from '@/containers/Product/Manage/Add'
import User from '@/containers/User'
import Role from '@/containers/Role'
import Bar from '@/containers/Charts/Bar'
import Line from '@/containers/Charts/Line'
import Pie from '@/containers/Charts/Pie'

class MyContent extends Component {
  render() {
    return (
      <Switch>
        <PrivateRouter path="/home" component={Home} />
        <PrivateRouter path="/product/category" component={Category} />
        <PrivateRouter path="/product/manage/list" component={List} />
        <PrivateRouter path="/product/manage/add" component={Add} />
        <PrivateRouter path="/user" component={User} />
        <PrivateRouter path="/role" component={Role} />
        <PrivateRouter path="/charts/bar" component={Bar} />
        <PrivateRouter path="/charts/line" component={Line} />
        <PrivateRouter path="/charts/pie" component={Pie} />
        <Redirect to="/home" />
      </Switch>
    )
  }
}
export default MyContent

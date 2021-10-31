import React, { Component } from 'react'
import { Layout } from 'antd'
import MyHeader from './MyHeader'
import MySider from './MySider'
import MyContent from './MyContent'
import './index.less'
const { Header, Sider, Content } = Layout
export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Sider>
          <MySider />
        </Sider>
        <Layout>
          <Header>
            <MyHeader />
          </Header>
          <Content>
            <MyContent />
          </Content>
        </Layout>
      </Layout>
    )
  }
}

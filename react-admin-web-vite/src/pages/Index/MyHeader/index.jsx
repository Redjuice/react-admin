import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { deleteUserAndToken } from '@/redux/actions/login'
import './index.less'

class MyHearder extends Component {
  logout = () => {
    Modal.confirm({
      title: '确认退出?',
      icon: <ExclamationCircleOutlined />,
      content: '若退出需要重新登录',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        this.props.deleteUserAndToken()
      }
    })
  }

  render() {
    return (
      <div className="header" data-component="header">
        <span className="text">欢迎，{this.props.user.username}</span>
        <Button type="link" onClick={this.logout}>
          退出登录
        </Button>
      </div>
    )
  }
}

export default connect((state) => ({ user: state.login.user }), {
  deleteUserAndToken
})(MyHearder)

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { title } from '@/config'
// import { loginApi } from '@/apis'
import { saveUserAndToken } from '@/redux/actions/login'
import './index.less'

@connect((state) => ({ isLogin: state.login.isLogin }), {
  saveUserAndToken
})
class Login extends Component {
  login = async (values) => {
    console.log(values);
    // TODO: 因为需要服务器, 这边先使用mock数据
    const data = {
      user: {
        _id: '60d1342029ac623e1cbba92a',
        username: 'admin',
        create_time: 1624323104488,
        role: { menus: [] }
      },
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDEzNDIwMjlhYzYyM2UxY2JiYTkyYSIsImlhdCI6MTYzNTk5MjgxNSwiZXhwIjoxNjM2NTk3NjE1fQ.hi6jSeJ3zl1swNYzS4RI7GDTCY4Z67cVcEYOYRzAaIY'
    }
    const { user, token } = data
    this.props.saveUserAndToken({ user, token }) // 保存数据到redux
    message.info('登录成功')
    this.props.history.replace('/')

    // const { status, msg, data } = await loginApi(values)
    // if (status === 0) {
    //   const { user, token } = data
    //   this.props.saveUserAndToken({ user, token }) // 保存数据到redux
    //   message.info('登录成功')
    //   this.props.history.replace('/')
    // } else {
    //   message.warn(msg)
    // }
  }

  validator = (_, value) => {
    const length = value && value.length
    const pwdReg = /^[a-zA-Z0-9_]+$/
    if (!value) {
      return Promise.reject(new Error('必须输入密码'))
    } else if (length < 4) {
      return Promise.reject(new Error('密码必须大于 4 位'))
    } else if (length > 12) {
      return Promise.reject(new Error('密码必须小于 12 位'))
    } else if (!pwdReg.test(value)) {
      return Promise.reject(new Error('密码必须是英文、数组或下划线组成'))
    } else {
      return Promise.resolve()
    }
  }

  render() {
    const { isLogin } = this.props
    // TODO: 待处理
    if (isLogin) return <Redirect to="/home" />
    return (
      <div className="login" data-component="login">
        <section className="login-content">
          <div className="title">{title}</div>
          <Form onFinish={this.login} className="login-form">
            <Form.Item
              name="username"
              rules={[
                { required: true, whitespace: true, message: '必须输入用户名' },
                { min: 4, message: '用户名必须大于 4 位' },
                { max: 12, message: '用户名必须小于 12 位' },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message: '用户名必须是英文、数组或下划线组成'
                }
              ]}
            >
              <Input
                prefix={<UserOutlined className="login-form-icon" />}
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item name="password" rules={[{ validator: this.validator }]}>
              <Input
                prefix={<LockOutlined className="login-form-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}

export default Login

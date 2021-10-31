import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu } from 'antd'
import * as Icon from '@ant-design/icons'
import menuList from '@/routers'
import { title } from '@/config'
import logo from '@/assets/logo.png'
import './index.less'

const { SubMenu } = Menu

@connect((state) => ({ userInfo: state.login }))
@withRouter
class MySider extends Component {
  state = {
    selectedKeys: [],
    openKeys: []
  }

  componentDidMount() {
    let pathname = this.props.location.pathname
    if (pathname === '/') pathname = '/home'
    const menuKey = pathname.split('/')
    switch (menuKey.length) {
      case 2: // 一级目录
        this.setState({
          selectedKeys: [pathname]
        })
        break
      case 4: // 三级目录
        this.setState({
          selectedKeys: [pathname],
          openKeys: [
            menuKey.slice(0, 2).join('/'),
            menuKey.slice(0, 3).join('/')
          ]
        })
        break
      default:
        this.setState({
          selectedKeys: [pathname],
          openKeys: [pathname.substr(0, pathname.lastIndexOf('/'))]
        })
    }
  }

  openMenu = (openKeys) => {
    if (openKeys.length === 0 || openKeys.length === 1) {
      this.setState({
        openKeys
      })
      return
    }
    const latestOpenKey = openKeys[openKeys.length - 1]
    if (latestOpenKey.includes(openKeys[0])) {
      this.setState({
        openKeys
      })
    } else {
      this.setState({
        openKeys: [latestOpenKey]
      })
    }
  }

  renderMenu = ({ title, path, icon }) => {
    const element = React.createElement(Icon[icon], {}, null)
    return (
      <Menu.Item key={path} icon={element}>
        <NavLink to={path}>
          <span>{title}</span>
        </NavLink>
      </Menu.Item>
    )
  }

  renderSubMenu = ({ title, path, icon, children }) => {
    const element = React.createElement(Icon[icon], {}, null)
    return (
      <SubMenu key={path} icon={element} title={title}>
        {children &&
          children.map((item) => {
            return item.children && item.children.length
              ? this.renderSubMenu(item)
              : this.renderMenu(item)
          })}
      </SubMenu>
    )
  }

  render() {
    const { selectedKeys, openKeys } = this.state
    return (
      <div className="sider" data-component="sider">
        <NavLink to="/home" className="sider-header">
          <img src={logo} alt="logo" />
          <h1>{title}</h1>
        </NavLink>
        <Menu
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onOpenChange={this.openMenu}
          onClick={({ key }) => this.setState({ selectedKeys: [key] })}
          theme="dark"
          mode="inline"
        >
          {menuList &&
            menuList.map((item) => {
              return item.children && item.children.length
                ? this.renderSubMenu(item)
                : this.renderMenu(item)
            })}
        </Menu>
      </div>
    )
  }
}

export default MySider

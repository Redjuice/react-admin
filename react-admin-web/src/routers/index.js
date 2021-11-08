/*
 * 导航菜单配置
 */
const menuList = [
  {
    title: '首页',
    key: '/home',
    path: '/home',
    icon: 'HomeOutlined'
  },
  {
    title: '商品',
    key: '/product',
    path: '/product',
    icon: 'AppstoreOutlined',
    children: [
      {
        title: '商品分类管理',
        key: '/product/category',
        path: '/product/category',
        icon: 'OrderedListOutlined'
      },
      {
        title: '商品管理',
        key: '/product/manage',
        path: '/product/manage',
        icon: 'ToolOutlined',
        children: [
          {
            title: '列表',
            key: '/product/manage/list',
            path: '/product/manage/list',
            icon: 'UnorderedListOutlined'
          },
          {
            title: '新增',
            key: '/product/manage/add',
            path: '/product/manage/add',
            icon: 'AppstoreAddOutlined'
          }
        ]
      }
    ]
  },
  {
    title: '用户管理',
    key: '/user',
    path: '/user',
    icon: 'UserOutlined'
  },
  {
    title: '角色管理',
    key: '/role',
    path: '/role',
    icon: 'SafetyOutlined'
  },
  {
    title: '图形图表',
    key: '/charts',
    path: '/charts',
    icon: 'AreaChartOutlined',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar',
        path: '/charts/bar',
        icon: 'BarChartOutlined'
      },
      {
        title: '折线图',
        key: '/charts/line',
        path: '/charts/line',
        icon: 'LineChartOutlined'
      },
      {
        title: '饼图',
        key: '/charts/pie',
        path: '/charts/pie',
        icon: 'PieChartOutlined'
      }
    ]
  }
]

export default menuList

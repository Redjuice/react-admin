/*
 * 导航菜单配置
 */
const menuList = [
  {
    title: '首页',
    path: '/home',
    icon: 'HomeOutlined'
  },
  {
    title: '商品',
    path: '/product',
    icon: 'AppstoreOutlined',
    children: [
      {
        title: '商品分类管理',
        path: '/product/category',
        icon: 'OrderedListOutlined'
      },
      {
        title: '商品管理',
        path: '/product/manage',
        icon: 'ToolOutlined',
        children: [
          {
            title: '列表',
            path: '/product/manage/list',
            icon: 'UnorderedListOutlined'
          },
          {
            title: '新增',
            path: '/product/manage/add',
            icon: 'AppstoreAddOutlined'
          }
        ]
      }
    ]
  },
  {
    title: '用户管理',
    path: '/user',
    icon: 'UserOutlined'
  },
  {
    title: '角色管理',
    path: '/role',
    icon: 'SafetyOutlined'
  },
  {
    title: '图形图表',
    path: '/charts',
    icon: 'AreaChartOutlined',
    children: [
      {
        title: '柱形图',
        path: '/charts/bar',
        icon: 'BarChartOutlined'
      },
      {
        title: '折线图',
        path: '/charts/line',
        icon: 'LineChartOutlined'
      },
      {
        title: '饼图',
        path: '/charts/pie',
        icon: 'PieChartOutlined'
      }
    ]
  }
]

export default menuList

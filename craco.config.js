const CracoLessPlugin = require('craco-less')
const path = require('path')
module.exports = {
  babel: {
    plugins: [
      // 配置 babel-plugin-import, 解决 AntDesign 按需加载
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: 'css'
        },
        'antd'
      ],
      // 配置 @babel/plugin-proposal-decorators, 提供装饰器语法
      ['@babel/plugin-proposal-decorators', { legacy: true }]
    ]
  },
  webpack: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // craco 提供的插件
  plugins: [
    // 配置 less
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}

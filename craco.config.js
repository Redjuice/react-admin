const CracoLessPlugin = require('craco-less')
const path = require('path')
const { proxyURL, devPort } = require('./src/config')

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
      ]
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
  ],
  devServer: {
    host: 'localhost',
    port: devPort,
    open: true,
    // 前端配置代理访问后端(解决谷歌浏览器开发环境不携带cookie以及跨域问题)
    proxy: {
      '/api': {
        target: proxyURL,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        cookieDomainRewrite: 'localhost'
      }
    }
  }
}

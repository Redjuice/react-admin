const { createProxyMiddleware } = require('http-proxy-middleware')
const { proxyURL, apiVersion } = require('./config')
console.log(proxyURL, apiVersion, process.env.REACT_APP_API_ROOT)
module.exports = function (app) {
  app.use(
    createProxyMiddleware([apiVersion], {
      target: proxyURL, //配置你要请求的服务器地址
      changeOrigin: true,
      pathRewrite: {
        [`${apiVersion}`]: ''
      }
    })
  )
}

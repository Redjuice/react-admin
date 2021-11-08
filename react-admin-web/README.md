# react-admin
基于 React + craco + antd 实现的后台模板

### 1. 目录
```
├─ .vscode                   // 工作区的配置文件
├─ public                    // 模板存放目录
│  ├─ favicon.ico            // 网站图标
│  └─ index.html             // 模板html文件
├─ src                       // 项目
│  ├─ apis                   // api文件
│  ├─ assets                 // 静态资源
│  ├─ components             // 组件
│  ├─ config                 // 配置文件
│  ├─ layouts                // 布局组件
│  ├─ pages                  // 页面
│  ├─ redux                  // 布局组件
│  ├─ routers                // 路由
│  ├─ styles                 // 样式
│  ├─ utils                  // 工具函数
│  ├─ App.js                 // APP组件
│  ├─ index.js               // 项目入口
│  └─ setupProxy.js          // Proxy配置
├─ .env                      // 全局默认环境变量
├─ .env.development          // dev环境变量
├─ .env.test                 // test环境变量
├─ .env.production           // prod环境变量
├─ .eslintrc                 // eslint配置文件
├─ .gitignore                // git忽略上传文件
├─ .prettierrc               // prettier配置文件
├─ craco.config.js           // craco配置文件
├─ jsconfig.json             // js项目配置
├─ package-lock.json         // package版本依赖
├─ package.json              // 项目描述
├─ README.md                 // 工程文档说明
├─ yarn.lock                 // yarn版本依赖
```

### 2. 搭建步骤

#### 2.1 初始化项目
```
# 全局安装
npm install -g create-react-app
# 构建一个my-app的项目
npx create-react-app my-app
cd my-app
# 启动编译当前的React项目，并自动打开 http://localhost:3000/
npm start
```

#### 2.2 配置commitizen和antd组件库
```
# Commitizen的安装和使用
教程: https://www.jianshu.com/p/d264f88d13a4

# Antd的安装和配置
教程: https://ant.design/docs/react/use-with-create-react-app-cn
```

#### 2.3 配置craco
```
# 根目录新建craco.config.js
文档: https://github.com/gsoft-inc/craco

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

```

#### 2.4 配置jsconfig
```
# 解决配置别名后不提示路径的问题
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```

#### 2.5 配置eslint + prettier
```
yarn add  prettier
yarn add  eslint-plugin-prettier

# 新建.eslintrc文件
{
  "extends": [
    "react-app"
    // "plugin:prettier/recommended"
  ],
  "plugins": ["prettier"],
  "rules": {
    "no-unused-vars": 2
  }
}

# 新建.prettierrc文件
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none"
}

# 新建.vscode/settings.json, 保存自动格式化
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true
}

```

#### 2.6 styles + less模块化
```
# 全局样式类名处理(styles文件夹)

# 使用CSS属性选择器和less的嵌套语法来简单实现隔离
# 组件
function App() {
  return (
    <div className="container" data-component="app">
      <div className="content">内容区域</div>
    </div>
  );
}

# less
[data-component=app].container {
  .content {
    padding: 20px;
  }
}
```

#### 2.7 全局config配置
```
# 全局config配置(config文件夹)
```

#### 2.8 axios + proxy
```
# axios(utils/http.js)

# proxy(setupProxy.js)
const { createProxyMiddleware } = require('http-proxy-middleware')
const { proxyURL, apiVersion } = require('./config')

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
```

#### 2.9 登录

#### 2.10 路由

#### 2.11 权限

### 3. 待处理

- [ ] styleint, 实现 css 格式化
- [ ] 命令行新建容器组件, UI 组件
- [ ] 菜单折叠
- [ ] 动态切换菜单类型
- [ ] 面包屑
- [ ] layoutList, layoutFrom, layoutDetail 组件
- [ ] 路由, 权限优化

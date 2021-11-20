# react-admin

基于 React + vite + antd 实现的后台模板

### 1. 目录

```
├─ .vscode                   // 工作区的配置文件
├─ src                       // 项目
│  ├─ apis                   // api文件
│  ├─ assets                 // 静态资源
│  ├─ components             // 组件
│  ├─ config                 // 配置文件
│  ├─ layouts                // 布局组件
│  ├─ pages                  // 页面
│  ├─ redux                  // Redux
│  ├─ routers                // 路由
│  ├─ styles                 // 样式
│  ├─ utils                  // 工具函数
│  ├─ App.jsx                // APP组件
│  ├─ main.jsx               // 项目入口
├─ index.html                // 模板html文件
├─ .env                      // 全局默认环境变量
├─ .env.development          // dev环境变量
├─ .env.test                 // test环境变量
├─ .env.production           // prod环境变量
├─ .eslintrc                 // eslint配置文件
├─ .gitignore                // git忽略上传文件
├─ .prettierrc               // prettier配置文件
├─ vite.config               // vite配置文件
├─ jsconfig.json             // js项目配置
├─ package.json              // 项目描述
├─ package-lock.json         // package版本依赖
├─ yarn.lock                 // yarn版本依赖
├─ README.md                 // 工程文档说明
```

### 2. 搭建步骤

#### 2.1 初始化项目

```
# 构建一个vite项目
yarn create vite
# 依赖安装
yarn
# 启动编译当前的React项目，并自动打开 http://localhost:3000/
npm dev
```

#### 2.2 配置 commitizen 和 antd 组件库

```
# Commitizen的安装和使用
教程: https://www.jianshu.com/p/d264f88d13a4

# Antd的安装和配置
教程: https://ant.design/docs/react/introduce-cn
```

#### 2.3 配置 vite

```
// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import styleImport from 'vite-plugin-style-import'
import { resolve } from 'path'
import { readFileSync } from 'fs'
import lessToJS from 'less-vars-to-js'
import configs from './src/config'
// less-vars-to-js将less样式转化为json键值对的形式
const themeVariables = lessToJS(
  readFileSync(resolve(__dirname, './src/styles/variables.less'), 'utf8')
)

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  const { VITE_APP_API_ROOT } = process.env

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [
      react(),
      // 配置 vite-plugin-style-import, 解决 AntDesign 按需加载
      styleImport({
        libs: [
          {
            libraryName: 'antd',
            esModule: true,
            resolveStyle: (name) => `antd/es/${name}/style`
          }
        ]
      })
    ],
    css: {
      // 指定传递给 CSS 预处理器的选项
      preprocessorOptions: {
        less: {
          javascriptEnabled: true, // 支持内联JavaScript
          modifyVars: themeVariables // 重写less变量，定制Antd样式
        }
      }
    },
    resolve: {
      // 别名
      alias: {
        '@': resolve(__dirname, 'src') // src路径
      }
    },
    server: {
      port: configs.devPort,
      open: configs.devOpen,
      proxy: {
        '/api': {
          target: VITE_APP_API_ROOT, //配置你要请求的服务器地址
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  })
}
```

#### 2.4 配置 jsconfig

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

#### 2.5 配置 eslint + prettier

```
# vsCode安装插件
eslint + prettier

# 安装依赖
yarn add @babel/eslint-parser @babel/preset-react
eslint eslint-config-prettier eslint-config-react
eslint-plugin-prettier eslint-plugin-react
prettier npm-run-all -D

# 新建.eslintrc文件
{
  "parser": "@babel/eslint-parser",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  // 指定ESLint可以解析JSX语法
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "requireConfigFile" : false,
    "ecmaFeatures": {
      "jsx": true
    },
    "babelOptions": {
      "presets": ["@babel/preset-react"]
    }
  },
  //自动发现React的版本，从而进行规范react代码
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  // 在这里添加需要覆盖的规则
  "rules": {}
}

# 新建.prettierrc文件
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none",
  "endOfLine": "auto"
}

# 新建.vscode/settings.json, 保存自动格式化
{
  "eslint.format.enable": true,
  "eslint.alwaysShowStatus": true,
  "eslint.validate": ["javascript", "javascriptreact", "jsx", "html"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true
}

# package.json
"scripts": {
  "eslint:fix": "eslint --fix --ext .js,.jsx src",
  "prettier:fix": "prettier --write ./src/*.{less,js,jsx,json}",
  "format:all": "npm-run-all -s prettier:fix eslint:fix"
},
```

#### 2.6 styles + less 模块化

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

#### 2.7 全局 config 配置

```
# 全局config配置(config文件夹)
```

#### 2.8 axios + proxy

```
# axios(utils/http.js)
```

#### 2.9 登录

#### 2.10 路由

#### 2.11 权限

### 3. 待处理

#### 3.1 开发规范

- [ ] styleint, 实现 css 格式化
- [ ] pre-commit

#### 3.2 开发

- [ ] 命令行新建组件
- [ ] 动态切换菜单类型
- [ ] 菜单折叠
- [ ] 面包屑
- [ ] 添加 PWA
- [ ] 发布相关
- [ ] Easy Mock

#### 3.3 路由&权限

- [ ] 路由, 权限优化
- [ ] 动态切换菜单类型
- [ ] 路由懒加载的封装

#### 3.4 工具方法

- [ ] 工具方法
- [ ] 自定义公共 hooks

#### 3.5 组件

- [ ] layoutList, layoutFrom, layoutDetail 组件
- [ ] 上传图片裁剪
- [ ] 上传图片
- [ ] 上传图片拖拽
- [ ] 上传视频
- [ ] 分页
- [ ] 图表
- [ ] 导入
- [ ] 富文本

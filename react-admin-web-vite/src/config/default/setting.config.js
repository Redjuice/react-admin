/**
 * @description 导出默认通用配置
 */

// 获取baseurl
function getBaseUrL() {
  let api;
  // typeof可以用来检查一个没有声明的变量，而不报错。
  // http://javascript.ruanyifeng.com/grammar/types.html#toc1
  if (
    typeof window != "undefined" &&
    window.location.hostname === "localhost"
  ) {
    api = `${import.meta.env.VITE_APP_API_VERSION}`;
  } else {
    api =
      import.meta.env &&
      `${import.meta.env.VITE_APP_API_ROOT}${
        import.meta.env.VITE_APP_API_VERSION
      }`;
  }
  return api;
}

const setting = {
  // 默认的接口地址
  baseURL: getBaseUrL(),
  // API版本
  apiVersion: import.meta.env && `${import.meta.env.VITE_APP_API_VERSION}`,
  // 代理地址
  proxyURL: import.meta.env && `${import.meta.env.VITE_APP_API_ROOT}`,
  // 图片上传地址
  uploadUrl: getBaseUrL() + "common/upload",
  // 开发环境端口号
  devPort: "9999",
  // 开发环境启动时自动在浏览器中打开应用程序
  devOpen: true,
  // 标题 （包括页面的标题 浏览器的标题）
  title: "壳牌管理系统",
  // 路由模式，可选值为 history 或 hash
  routerMode: "history",
  // 不经过token校验的路由
  routesWhiteList: ["/login", "/register", "/404", "/403"],
  // 加载时显示文字
  loadingText: "正在加载中...",
  // token在localStorage、sessionStorage、cookie存储的key的名称
  tokenName: "accessToken",
  // 用户信息在localStorage、sessionStorage、cookie存储的key的名称
  userName: "accessUser",
  // token存储位置localStorage sessionStorage cookie
  storage: "localStorage",
  // 上传图片限制大小(MB)
  imageSize: 10,
  // 上传视频限制大小(MB)
  videoSize: 100,
  // 表格显示条数
  pageSize: 20,
};

export default setting;

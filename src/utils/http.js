import axios from 'axios';
import { message } from 'antd';
import { baseURL, requestTimeout, withCredentials, contentType } from '@/config';
import NProgress from 'nprogress';
import store from '@/redux/store';
import { deleteUserAndToken } from '@/redux/actions/login';
import 'nprogress/nprogress.css';

// axios配置
let config = {
  baseURL,
  timeout: requestTimeout, // Timeout
  withCredentials, // Check cross-site Access-Control
  headers: {
    'Content-Type': contentType,
  },
};

const _axios = axios.create(config);
// 请求拦截器
_axios.interceptors.request.use(
  config => {
    // 进度条开始
    NProgress.start();
    // 从redux中获取之前保存的token
    let token = store.getState()?.login?.token;
    // 如果token存在，就设置到请求头中
    if (token) config.headers.Authorization = `bearer ${token}`;
    // 弱化传参格式要求, 并兼容老数据
    if (config.method.toLowerCase() === 'post') {
      config.data = config.data || config.params;
    } else {
      config.params = config.data || config.params;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// 响应拦截器
_axios.interceptors.response.use(
  response => {
    // 进度条结束
    NProgress.done();
    // 请求成功
    return response.data;
  },
  error => {
    // 进度条结束
    NProgress.done();
    // token有问题
    if (error.response.status === 401) {
      const { status, msg } = error.response.data;
      if (status === 2) {
        // 提示消息
        message.error(`${msg}，请重新登录`);
        // 分发删除用户信息的action
        store.dispatch(deleteUserAndToken());
      }
    } else {
      // 请求如果失败，提示错误
      message.error(error.message);
    }
    return Promise.reject(error.response.data);
  },
);

export default _axios;

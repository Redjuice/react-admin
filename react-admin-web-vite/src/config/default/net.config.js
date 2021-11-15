/**
 * @description 导出默认网络配置
 **/
const network = {
  // 配后端数据的接收方式application/json;charset=UTF-8 或 application/x-www-form-urlencoded;charset=UTF-8
  contentType: 'application/json;charset=UTF-8',
  // 当前请求为跨域类型时是否在请求中协带cookie
  withCredentials: true,
  // 消息框消失时间
  messageDuration: 2000,
  // 最长请求时间
  requestTimeout: 10000,
  // 操作正常code，支持String、Array、int多种类型
  successCode: [200, 0],
};
export default network;

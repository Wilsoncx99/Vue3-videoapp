import axios from 'axios';
// 创建axios实例
const service = axios.create({
  baseURL: '',
  timeout: 60000 // 请求超时时间
});

service.interceptors.request.use(config => {
  return config;
}, error => {
  Promise.reject(error);
});

// http response 拦截器
service.interceptors.response.use(
  response => {
    // 拦截响应，做统一处理
    // 文件导出响应处理
    const data = response.data;
    console.log(data)
    return Promise.resolve(data.robj);
});
export default service;

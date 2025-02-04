// request.js
import axios from 'axios';

// 创建一个 axios 实例
const instance = axios.create({
  baseURL: 'https://your-api-domain.com/api', // 你的 API 基础地址
  timeout: 10000, // 请求超时时间
});

// 请求拦截器：在请求发送之前添加 token
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // 从 localStorage 中获取 token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // 添加 token 到请求头
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器：处理响应数据
instance.interceptors.response.use(
  (response) => {
    return response.data; // 直接返回响应数据
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 处理未授权的情况
          console.error('Unauthorized');
          break;
        case 404:
          // 处理未找到资源的情况
          console.error('Resource not found');
          break;
        default:
          console.error('An error occurred');
      }
    }
    return Promise.reject(error);
  }
);

// 封装常用的 HTTP 方法
const request = {
  get: (url, params) => instance.get(url, { params }),
  post: (url, data) => instance.post(url, data),
  put: (url, data) => instance.put(url, data),
  delete: (url) => instance.delete(url),
};

export default request;
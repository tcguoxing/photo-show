// request.js

// 配置基础 URL 和默认的请求头
const BASE_URL = ''; // 替换为你的 API 基础地址
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

// 设置默认的 token（如果需要）
let token = '';

// 设置 token 的函数
export const setToken = (newToken) => {
  token = newToken;
};

// 封装通用请求函数
const makeRequest = async (endpoint, method = 'GET', data = null) => {
  try {
    // 构造完整的 URL
    const url = `${BASE_URL}${endpoint}`;

    // 构造请求头
    const headers = { ...DEFAULT_HEADERS };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    // 构造请求选项
    const options = {
      method,
      headers,
    };

    // 如果是 POST 或 PUT 请求，添加请求体
    if (data && (method === 'POST' || method === 'PUT')) {
      options.body = JSON.stringify(data);
    }

    // 发送请求
    const response = await fetch(url, options);

    // 检查响应状态
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 解析响应数据
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
};

// 提供 GET 请求的便捷方法
export const get = (endpoint) => makeRequest(endpoint, 'GET');

// 提供 POST 请求的便捷方法
export const post = (endpoint, data) => makeRequest(endpoint, 'POST', data);

// 提供 PUT 请求的便捷方法
export const put = (endpoint, data) => makeRequest(endpoint, 'PUT', data);

// 提供 DELETE 请求的便捷方法
export const del = (endpoint) => makeRequest(endpoint, 'DELETE');
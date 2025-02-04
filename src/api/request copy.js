import Vue from 'vue';
import axios from 'axios';
import VabProgress from 'nprogress';
import errorCode from './errorCode';
import {getAccessToken} from '../auth';
import {useBaseUrl} from '../path';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500; // 默认的
};
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.NODE_ENV === 'development' ? process.env.VUE_APP_BASE_API : useBaseUrl(''),
  // baseURL: '/oa-dev',
  // 超时
  timeout: 30000,
});

let isReFreshPadding = true;

VabProgress.configure({showSpinner: false});

// request拦截器
service.interceptors.request.use(config => {
  VabProgress.start();
  const {isShowMessage} = config;
  if (isShowMessage) {
    service.interceptors.isShowMessage = isShowMessage;
  } else {
    service.interceptors.isShowMessage = true;
  }
  // console.log("service.interceptors: ", service.interceptors);
  const isToken = (config.headers || {}).isToken === false;
  const token = getAccessToken();
  if (token && !isToken) {
    config.headers['Authorization'] = 'Bearer ' + token; // token
  }
  return config;
}, Promise.reject);

function redirectLoginUrl(cb) {
  if (location.pathname !== '/login' && typeof cb === 'function') {
    cb();
  }
}

// 响应拦截器
service.interceptors.response.use(res => {
  VabProgress.done();
  const status = Number(res.status) || 200;
  const message = errorCode[status] || res.data.msg || errorCode['default'];
  if (status === 401) {
    if (isReFreshPadding) {
      isReFreshPadding = false;
      Vue.prototype.$msgbox.confirm(message, '系统提示', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        const {store} = window.$mainApp;
        store.dispatch('users/logout').then((path) => {
          if (path) {
            redirectLoginUrl(() => {
              location.href = path;
            });
          } else {
            isReFreshPadding = true;
            redirectLoginUrl(() => {
              location.reload();
            });
          }
        }, () => {
          isReFreshPadding = true;
          redirectLoginUrl(() => {
            location.href = '/login';
          });
        });
      });
    }
  } else if (status === 500) {
    // eslint-disable-next-line
    console.log('500 res: ', res);
    Vue.prototype.$message({
      message: message,
      type: 'error',
    });
    return Promise.reject(new Error(message));
  } else if (status !== 200 || res.data.code === 1) {
    // eslint-disable-next-line
    console.log('no 200 res: ', res);
    Vue.prototype.$message({
      message: message,
      type: 'error',
    });
    return Promise.reject(new Error(message));
  } else if (res.config.type === 'raw') {
    return res;
  } else {
    return res.data;
  }
}, error => {
  VabProgress.done();
  // eslint-disable-next-line
  console.log('error.response.data.path: ', error.response.data.path);
  // eslint-disable-next-line
  console.log('error.response: ', error.response);
  let {msg} = error;
  if (!msg) {
    msg = '系统内部异常';
  } else if (msg === 'Network Error') {
    msg = '数据接口连接异常';
  } else if (msg.includes('timeout')) {
    msg = '系统接口请求超时';
  } else if (msg.includes('Request failed with status code')) {
    msg = '系统接口' + msg.substr(msg.length - 3) + '异常';
  }
  // 不是消息类型的情况下才弹出弹窗；
  if (error.response && error.response.data && error.response.data.path.indexOf('genform/historyMessageList/filter/list') > -1) { /* empty */ } else {
    Vue.prototype.$message({
      message: msg,
      type: 'error',
      duration: 5 * 1000,
    });
  }
  return Promise.reject(new Error(error));
});

export const request = service;

export function praseStrEmpty(str) {
  if (!str || str === 'undefined' || str === 'null') {
    return '0';
  }
  return str;
}

export default service;

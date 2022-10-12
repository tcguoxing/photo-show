import axios from "axios";
// 这是一个网站学到的封装，网址为：https://www.cnblogs.com/panax/p/10942889.html

// 创建一个axios实例
var instance = axios.create({ timeout: 1000 * 12 });// 创建一个axios实例
// 设置一个post请求头
instance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencode";

// 拦截器 interceptor
instance.interceptors.request.use(
  (config) => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token;
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码;
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    const token = store.state.token; // store莫非是vue中的状态管理器
    token && (config.headers.Authorization = token);
    return config;
  },
  (error) => Promise.error(error)
);

// 响应拦截器，我的理解是响应返回后的解决内容。
instance.interceptors.response.use(
  // 请求成功
  (res) => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
  // 请求失败
  (error) => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      store.commit("changeNetwork", false);
    }
  }
);

import axios from "axios";
import { ElMessage } from "element-plus";

const instance = axios.create();
// Override timeout default for the library
// Now all requests using this instance will wait 2.5 seconds before timing out
instance.defaults.timeout = 20000;

instance.defaults.baseURL = import.meta.env.DEV ? "/api" : "";
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.status) {
      return response.data;
    } else {
      return Promise.reject(response);
    }
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    ElMessage.error("服务器正在维护，请稍后再试！");
    return Promise.reject(error);
  }
);

export default instance;

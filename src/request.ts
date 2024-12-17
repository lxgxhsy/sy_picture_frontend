import axios from 'axios'
import { message } from 'ant-design-vue'

//创建Axios 实例
const myAxios = axios.create({
  baseURL: 'http://localhost:8123',
  timeout: 60000,
  withCredentials: true, //可以携带cookie
})

//全局响应拦截器

myAxios.interceptors.response.use(
  function (config) {
    return config
  },

  function (error) {
    return Promise.reject(error)
  },
)

// 全局响应拦截器

myAxios.interceptors.request.use(function (response) {
  const { data } = response
  //未登录
  if (data.code === 40010) {
    //不是获取用户信息的请求，并且用户目前不是已经在用户登录页面，则跳转到登录页面
    if (
      !response.request.responseURL.includes('user/get/login') &&
      !window.location.pathname.includes('/user/login')
    ) {
      message.warning('请先登录')
      window.location.href = `/user/login?redirect=${window.location.href}`
    }
  }
})
export default myAxios

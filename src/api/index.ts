import axios from 'axios'

// axios.defaults.timeout = 2000 // default 1000
// axios.defaults.baseURL = '//www.qq.com'

export default (): void => {
  axios.interceptors.request.use(
    config => {
      return config
    },
    err => {
      return Promise.reject(err)
    }
  )

  // http response 拦截器
  axios.interceptors.response.use(
    response => {
      // 这里规定请求状态和返回，否则拦截做统一提示
      if (response.statusText === 'OK' || +response.status === 200) {
        return response.data
      } else {
        console.error('request error', response)
      }
    },
    err => {
      return Promise.reject(err)
    }
  )
}

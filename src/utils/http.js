//axios基础的封装

import axios from 'axios';
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import {useUserStore} from '@/stores/user'
import router from '../router';
const httpInstance = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000

})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  //1.从pinia获取token数据                                      
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
 httpInstance.interceptors.response.use(res => res.data, e => {
  const userStore = useUserStore()
  //统一错误提示
  ElMessage({
    type: 'warning', 
    message: e.response.data.message
    
  })

  if(e.response.status == 401){
    userStore.clearUserInfo()
    router.push('/login')
  }


    return Promise.reject(e)
  })
// eslint-disable-next-line no-undef
export default httpInstance
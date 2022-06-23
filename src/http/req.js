// 二次封装axios
import axios from "axios";
// 引入设置token的方法
import { getToken } from "@/utils/setToken";
// 导入elui的弹窗提示
import { Message } from "element-ui";
const service = axios.create({
    // baseURL 会自动加在请求地址上
    baseURL:'/api',
    // 请求指定的超时毫秒数 超时请求就会中断
    timeout:3000
})
// 请求拦截器
service.interceptors.request.use((cfg) => {
    // 在请求之前做一些事情
    // 获取并设置token
    cfg.headers['token'] = getToken('token')//将token携带到请求头上
    return cfg
},(err) => {
    return Promise.reject(err)
})
// 响应拦截器
service.interceptors.response.use((res) => {
    // 对响应的数据做一些事情
    let {status,message} = res.data
    if(status !== 200){
        Message({message:message || 'error',type:'warning'})
    }
    return res
},(err) => {
    return Promise.reject(err)
})

export default service
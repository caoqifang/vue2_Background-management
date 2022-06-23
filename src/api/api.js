// 将对应的接口封装成api来调用
// 导入二次封装的axios
import http  from "@/http/req";

// 登陆接口
export function login(data){
    return http({
        method:'post',
        url:'/login',
        data
    })
}
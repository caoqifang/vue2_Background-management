// 将对应的接口封装成api来调用
// 导入二次封装的axios
import http from "@/http/req";
// 导入qs模块 转换数据
import qs from 'qs'
// 登陆接口
export function login(data) {
    return http({
        method: 'post',
        url: '/login',
        data
    })
}

// 学生列表查询接口
export function students(params) {
    return http({
        method: 'get',
        url: '/students',
        params
    })
}

// 数据删除接口
export function del(id) {
    return http({
        method: 'delete',
        url: `/students/${id}`,
    })
}

// // 信息列表新增接口
// export function addInfo(data) {
//     data = qs.stringify(data)
//     // let obj = {}
//     return http({
//         method: 'post',
//         url: '/info',
//         data
//     })
// }
////////////////////上下两个已经模块化///////////////////
// // 信息列表修改接口
// export function updataInfo(data) {
//     data = qs.stringify(data)
//     // let obj = {}
//     return http({
//         method: 'put',
//         url: '/info',
//         data
//     })
// }
// 信息列表的新增和修改接口
export function info(type,data){
    data = qs.stringify(data)
    let obj = {method:type,url:'/info',data}
    return http(obj)
}
// 信息列表查询接口
export function getInfo() {
    // let obj = {}
    return http({
        method: 'get',
        url: '/info',
    })
}

// 信息列表删除接口
export function infoDel(id) {
    return http({
        method: 'delete',
        url: `/info/${id}`,
    })
}   

// 数据概览的接口
export function dataView(){
    return http({
        method:'get',
        url:'/dataview'
    })
}
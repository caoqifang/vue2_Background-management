// 封装 tkoen
// 存储
export function setToken(tokenKey,token){
    return localStorage.setItem(tokenKey,token)
}
// 读取
export function getToken(tokenKey){
    return localStorage.setItem(tokenKey)
}
// 移出
export function removeToken(tokenKey){
    return localStorage.removeItem(tokenKey)
}
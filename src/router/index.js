import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/setToken'
// 导入分模块的路由配置文件
import home from './modules/home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 路由重定向
    redirect:'/login',
    component:()=>import('@/components/Login'),
  },
  {
    path: '/login',
    name:'Login',
    component:()=>import('@/components/Login'),
  },
  // 使用...将元素一一放入数组中
  ...home,
  // 404路由
  {
    path: '*',
    name:'NotFount',
    component:()=>import('@/components/NotFount.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

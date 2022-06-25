import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/setToken'
// 导入分模块的路由配置文件
import home from './modules/home'
import dataAnalysis from './modules/dataAnalysis'
import user from './modules/user'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 路由重定向
    redirect: '/login',
    name: '首页',
    hidden: true,
    component: () => import('@/components/Login'),
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/components/Login'),
  },
  // 使用...将元素一一放入数组中
  ...home,
  ...dataAnalysis,
  ...user,
  // 404路由
  {
    path: '*',
    name: 'NotFount',
    hidden: true,
    component: () => import('@/components/NotFount.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 全局前置守卫
router.beforeEach((to, form, next) => {
  // console.log(to);
  if (!getToken('token')) {
    if (to.path !== '/login') {
      // this.$message.error('未登录 请登录');
      // this.$message({ message: "删除成功", type: "success" });
      next('/login')
    } else next()
  } next()
  // if(to.meta.isLogin){
  //   if(getToken('token')){
  //     next();
  //   }else{
  //     next('/');
  //     // 未登录 请登录
  //     this.$message.error('未登录 请登录');
  //   }
  // }else{
  //   next()
  // }
})
export default router

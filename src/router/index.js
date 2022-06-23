import Vue from 'vue'
import VueRouter from 'vue-router'

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
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
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

// 首页路由 懒加载
const routes =[
    {
        path:'/home',
        component:()=>import('@/views/Home.vue')
    },
]
export default routes
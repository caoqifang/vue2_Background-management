// 学生管理页
const routes = [
    {
        path: '/users',
        name: '用户中心',
        iconClass: 'fa fa-user',
        component: () => import('@/views/Home.vue'),
        children: [
            {
                path: '/users/user',
                name: '权限管理',
                iconClass: 'fa fa-user',
                component: () => import('@/views/users/User'),
            },
        ]
    },
]
export default routes
// 首页路由 懒加载
// 学生管理页
const routes = [
    {
        path: '/home',
        name: '学生管理',
        iconClass: 'fa fa-users',
        redirect:'/home/student',
        component: () => import('@/views/Home.vue'),
        children: [
            {
                path: '/home/student',
                name: '学生列表',
                iconClass: 'fa fa-list',
                component: () => import('@/views/students/studentList'),
            },
            {
                path: '/home/info',
                name: '信息列表',
                iconClass: 'fa fa-list-alt',
                component: () => import('@/views/students/infoList'),
            },
            {
                path: '/home/infos',
                name: '信息管理',
                iconClass: 'fa fa-list-alt',
                component: () => import('@/views/students/infoLists'),
            },
            {
                path: '/home/student',
                name: '作业列表',
                iconClass: 'fa fa-list-ul',
                component: () => import('@/views/students/WorkList'),
            },
            {
                path: '/home/works',
                name: '作业管理',
                iconClass: 'fa fa-th-list',
                component: () => import('@/views/students/WorkMent'),
            }
        ]
    },
]
export default routes
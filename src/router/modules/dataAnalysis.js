// 数据分析页
const routes = [
    {
        path: '/data',
        name: '数据分析',
        iconClass: 'fa fa-users',
        component: () => import('@/views/Home.vue'),
        children: [
            {
                path: '/data/dataview',
                name: '数据概览',
                iconClass: 'fa fa-fa-chart',
                component: () => import('@/views/dataAnalysis/DataView'),
            },
            {
                path: '/data/mapview',
                name: '地图概览',
                iconClass: 'fa fa-line-chart',
                component: () => import('@/views/dataAnalysis/MapView'),
            },
            {
                path: '/data/travel',
                name: '旅游地图',
                iconClass: 'fa fa-line-chart',
                component: () => import('@/views/dataAnalysis/TravelMap'),
            },
            {
                path: '/data/score',
                name: '分数地图',
                iconClass: 'fa fa-line-chart',
                component: () => import('@/views/dataAnalysis/ScoreMap')
            },
        ]
    },
]
export default routes
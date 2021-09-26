export default [
    {
        path: '/',
        component: '../layouts/base-layout',
        routes: [
            {
                path: '/',
                redirect: '/home',
            },
            {
                name: '首页',
                icon: 'home',
                path: '/home',
                component: './home',
            },
            {
                name: '新闻',
                icon: 'news',
                path: '/news',
                component: './news',
            },
            {
                name: '设置',
                icon: 'setting',
                path: '/setting',
                component: './setting',
            },
        ]
    }
]
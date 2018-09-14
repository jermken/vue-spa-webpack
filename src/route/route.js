import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "homePage" */ '../pages/home/home.vue')
const My = () => import(/* webpackChunkName: "myPage" */ '../pages/my/my.vue')
const MyChild1 = () => import(/* webpackChunkName: "myPage" */ '../pages/my/myChild1.vue')
const MyChild2 = () => import(/* webpackChunkName: "myPage" */ '../pages/my/MyChild2.vue')

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { 
        path: '/my',
        component: My,
        redirect: '/my/mychild1',
        children: [
            {
                path: 'mychild1',
                component: MyChild1
            },
            {
                path: 'mychild2',
                component: MyChild2
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router
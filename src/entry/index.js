import Vue from 'vue'
import App from '../pages/app.vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/home.vue'
import My from '../pages/my/my.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/my', component: My }
]
const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    router,
    render: (h) => {
        return h(App)
    }
}).$mount('#app')

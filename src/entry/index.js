import Vue from 'vue'
import App from '../pages/app.vue'
import VueRouter from 'vue-router'
import router from '../route/route.js'

Vue.use(VueRouter)

new Vue({
    router,
    render: (h) => {
        return h(App)
    }
}).$mount('#app')

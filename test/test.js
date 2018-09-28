import Vue from 'vue'
import App from '../src/pages/app.vue'

Vue.config.productionTip = false

describe('App.vue 测试', () => {
    describe('#demo1', () => {
        it('标题应该为 this is a vue unit test demo', () => {
            const instance = new Vue({
                render: h => h(App),
                components: { App }
            }).$mount()

            document.body.appendChild(instance.$el)

            let h1 = instance.$el.querySelector('.title')
            expect(h1.textContent).to.equal('this is a vue unit test demo')
        })
    })
})

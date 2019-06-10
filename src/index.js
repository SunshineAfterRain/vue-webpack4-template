import Vue from 'vue'
import App from './app.vue'
import router from './router'

let app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
import Vue from 'vue'
import Router from 'vue-router'
import pages from '../pages'

Vue.use(Router)

const routes = [
    {
        path: '/home',
        component: pages.home
    },
    {  
        path: '*', redirect: "/home"
    },
]

export default new Router({
    routes
})

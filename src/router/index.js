import Vue from 'vue'
import Router from 'vue-router'
import home from '../Home.vue'
import main from '../components/Main.vue'
import mypage from '../components/Mypage.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: main

        },
        {
            path: '/home/:username',
            iconCls: 'el-icon-message',
            name:'home',
            component: home

        },
        {
            path: '/home/mypage',
            iconCls: 'el-icon-menu',
            name:'mypage',
            component: mypage

        },
    ]
})

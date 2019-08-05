import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Parallex from '../components/Parallex'
import Login from '../components/login/Login'
import Singup from '../components/login/signup'
import Forum from '../components/forum/Forum'
import Read from '../components/forum/read'
import Create from '../components/forum/create'
import Logout from '../components/login/logout'
import QuizApp from '../components/quizApp'
import StartPage from '../components/quiz/startPage.vue'
import QuizAppCustom from '../components/quizAppCustom'
import StartPageCustom from '../components/quizCustom/startPageCustom.vue'
import QuizAppFixed from '../components/quizAppFixed'
import StartPageFixed from '../components/quizFixed/startPageFixed.vue'
import Test from '../components/ranking/test'
import MyHistory from '../components/ranking/myHistory'
import Rank from '../components/ranking/ranking'
import CreateCategory from '../components/category/CreateCategory'

const routes = [{
        path: '/',
        component: Parallex
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/logout',
        component: Logout
    },
    {
        path: '/signup',
        component: Singup
    },
    {
        path: '/category',
        component: CreateCategory
    },
    {
        path: '/forum',
        component: Forum,
        name: 'forum'
    },
    {
        path: '/ask',
        component: Create
    },
    {
        path: '/question/:slug',
        component: Read,
        name: 'read'
    },
    {
        path: '/quizApp',
        component: QuizApp,
        name: 'quizApp'
    },
    {
        path: '/startPage',
        component: StartPage,
        name: 'startPage'
    },
    {
        path: '/quizAppCustom',
        component: QuizAppCustom,
        name: 'quizAppCustom'
    },
    {
        path: '/startPageCustom',
        component: StartPageCustom,
        name: 'startPageCustom'
    },
    {
        path: '/quizAppFixed',
        component: QuizAppFixed,
        name: 'quizAppFixed'
    },
    {
        path: '/startPageFixed',
        component: StartPageFixed,
        name: 'startPageFixed'
    },
    {
        path: '/test',
        component: Test,
        name: 'test'
    },
    {
        path: '/myHistory',
        component: MyHistory,
        name: 'myHistory'
    },
    {
        path: '/rank',
        component: Rank,
        name: 'rank'
    },
    
    
]



const router = new VueRouter({
    routes, // short for `routes: routes`,
    hashbang: false,
    mode: 'history'
})


export default router
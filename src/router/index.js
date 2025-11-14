import { createWebHistory, createRouter } from "vue-router";
import MyHome from '../components/MyHome'
import UserRegistration from '../components/UserRegistration'
import UserLogin from '../components/UserLogin'
import TimeSheet from '../components/TimeSheet'

const routes=[
    {
        path: '/',
        name: 'home',
        component: MyHome
    },
    {
        path: '/register',
        name: 'register',
        component: UserRegistration
    },
    {
        path: '/login',
        name: 'login',
        component: UserLogin
    }
    ,
    {
        path: '/ts',
        name: 'timesheet',
        component: TimeSheet
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
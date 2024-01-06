import { createRouter, createWebHistory } from 'vue-router'

import EmployeePage from './components/Employee.vue';
import LoginPage from './components/LoginPage.vue';
import AttendanceForm from './components/AttendanceForm';
import AdminPage from './components/AdminPage';
import HomePage from './components/Home.vue';
import ResponsePage from './components/Response.vue';
import UserProfile from './components/UserProfile.vue';
import DaysPresent from './components/DaysPresent.vue';
import SignIn from './components/Signup.vue';
import AttendanceSheet from './components/AttendanceSheet.vue'


const routes = [
    {
        name: 'LoginPage',
        component: LoginPage,
        path: '/login'
    },
    {
        name: 'AttendanceForm',
        component: AttendanceForm,
        path: '/attendance-form'
    },

    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'ResponsePage',
        component: ResponsePage,
        path: '/response'
    },
    {
        name: 'Signin',
        component: SignIn,
        path: '/register'
    },


    {
        path: '/admin-panel',
        component: AdminPage,
        children: [
            {
                path: '/employee',
                component: EmployeePage,
                name: 'EmployeePage'
            },
            {
                path: '/attendance-sheet',
                component: AttendanceSheet,
                name: 'AttendanceSheet'
            },

            {
                name: 'UserProfile1',
                component: UserProfile,
                path: '/employee/:id',
                props: true
            },
            {
                path: '/employee/attendance/:employeeid',
                component: DaysPresent,
                name: 'DaysPresent'
            },
        ],
    },


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
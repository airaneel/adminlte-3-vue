import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

import rdhmain from '@/modules/main/rdhMain.vue';
import rdhLogin from '@/modules/rdhLogin/login.vue';
import Register from '@/modules/register/register.vue';

import Dashboard from '@/pages/dashboard/dashboard.vue';
import Profile from '@/pages/profile/profile.vue';
import ForgotPassword from '@/modules/forgot-password/forgot-password.vue';
import RecoverPassword from '@/modules/recover-password/recover-password.vue';
import SubMenu from '@/pages/main-menu/sub-menu/sub-menu.vue';
import Blank from '@/pages/blank/blank.vue';
import Cookies from 'js-cookie';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Main',
        component: rdhmain,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'profile',
                name: 'Profile',
                component: Profile,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'blank',
                name: 'Blank',
                component: Blank,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'sub-menu-1',
                name: 'Sub Menu 1',
                component: SubMenu,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'sub-menu-2',
                name: 'Sub Menu 2',
                component: Blank,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '',
                name: 'Dashboard',
                component: Dashboard,
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: rdhLogin,
        meta: {
            requiresUnauth: true
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            requiresUnauth: true
        }
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword,
        meta: {
            requiresUnauth: true
        }
    },
    {
        path: '/recover-password',
        name: 'RecoverPassword',
        component: RecoverPassword,
        meta: {
            requiresUnauth: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    let storedAuthentication = Cookies.get('accessToken');



    if (to.meta.requiresAuth && !storedAuthentication) {
        return next('/login');
    }

    if (to.meta.requiresUnauth && storedAuthentication) {
        return next('/');
    }

    return next();
});

export default router;


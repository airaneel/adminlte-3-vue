import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import Cookies from 'js-cookie';
import { faCircle, faTachometerAlt, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';



export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/pages/main.vue'),
        meta: {
            title: 'RDH',
            ruName: 'Главная',
            requiresAuth: true
        },
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import('@/pages/dashboard/dashboard.vue'),
                meta: {
                    title: 'RDH - Панель управления',
                    ruName: 'Дешборд',
                    requiresAuth: true,
                    icon: faTachometerAlt
                }
            },
            {
                path: '/regru',
                name: 'Regru',
                component: () => import('@/pages/regru.vue'),
                meta: {
                    title: 'RDH - Регистрационные удостоверения',
                    ruName: 'РУ',
                    requiresAuth: true,
                    icon: faCircle as IconDefinition
                }
            },
            {
                path: 'profile',
                name: 'Profile',
                component: () => import('@/pages/profile/profile.vue'),
                meta: {
                    ruName: "Профиль",
                    requiresAuth: true,
                    icon: faUser as IconDefinition
                }
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/login.vue'),
        meta: {
            title: 'Войти',
            requiresUnauth: true
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/modules/register/register.vue'  ),
        meta: {
            requiresUnauth: true
        }
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: () => import('@/modules/forgot-password/forgot-password.vue'  ),
        meta: {
            requiresUnauth: true
        }
    },
    {
        path: '/recover-password',
        name: 'RecoverPassword',
        component: () => import('@/modules/recover-password/recover-password.vue'  ),
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

    if (to.meta.title) {
        document.title = to.meta.title as string;
    }

    if (to.meta.requiresUnauth && storedAuthentication) {
        return next('/');
    }

    return next();
});

export default router;


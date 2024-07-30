import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import Cookies from 'js-cookie';
import { faCircle, faPortrait, faTachometerAlt, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faMonero } from '@fortawesome/free-brands-svg-icons';



export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: "/dashboard",
        name: 'Main',
        component: () => import('@/pages/mainView.vue'),
        meta: {
            title: 'RDH',
            ruName: 'Главная',
            requiresAuth: true
        },
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import('@/pages/dashboard/dashboardView.vue'),
                meta: {
                    title: 'RDH - Панель управления',
                    ruName: 'Дешборд',
                    requiresAuth: true,
                    icon: faTachometerAlt,
                    isActive: true,
                }
            },
            {
                path: '/regru',
                name: 'Regru',
                component: () => import('@/pages/regruView.vue'),
                meta: {
                    title: 'RDH - Бюрократ',
                    ruName: 'Бюрократ',
                    requiresAuth: true,
                    icon: faCircle as IconDefinition,
                    isActive: true,
                }
            },
            {
                path: '/projects',
                name: 'Projects',
                component: () => import('@/pages/gantView.vue'),
                meta: {
                    title: 'RDH - Проекты',
                    ruName: 'Проекты',
                    requiresAuth: true,
                    icon: faPortrait as IconDefinition,
                    isActive: false,
                }
            },
            {
                path: '/bablogo',
                name: 'Bablogo',
                component: () => import('@/pages/bablogoView.vue'),
                meta: {
                    title: 'RDH - ФинПлан',
                    ruName: 'ФинПлан',
                    requiresAuth: true,
                    icon: faMonero as IconDefinition,
                    isActive: false,
                }
            },
            {
                path: 'profile',
                name: 'Profile',
                component: () => import('@/pages/profile/profile.vue'),
                meta: {
                    ruName: "Профиль",
                    requiresAuth: true,
                    icon: faUser as IconDefinition,
                    isActive: false,
                }
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/loginView.vue'),
        meta: {
            title: 'Войти',
            requiresUnauth: true
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, _from, next) => {
    const storedAuthentication = Cookies.get('accessToken');



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


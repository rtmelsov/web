import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/about',
        name: 'About',
        component: () => import('./../pages/about.vue')
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('./../pages/contacts.vue')
    },
    {
        path: '/experience',
        name: 'experience',
        component: () => import('./../pages/experience.vue')
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('./../pages/projects.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('./../pages/about.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/professors',
      name: 'professors',
      component: () => import('../views/professors/index.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/professors/edit.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/professors/create.vue')
    },
    {
      path: '/signatures',
      name: 'signatures',
      component: () => import('../views/signatures/index.vue')
    },
    {
      path: '/graphics',
      name: 'graphics',
      component: () => import('../views/signatures/graphic.vue')
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/signatures/report.vue')
    }
  ]
})

router.beforeEach( async (to) => {
  const publicPages = ['/login', '/register']
  const authRequired = !publicPages.includes(to.path)
  const auth = useAuthStore()
  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath
    return '/login'
  }
})

export default router

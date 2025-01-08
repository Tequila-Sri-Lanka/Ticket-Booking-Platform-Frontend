import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const routes = [
    {
      path: "/signin",
      name: "signin",
      component: () => import('../views/loginPage.vue'),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import('../views/signUpPage.vue'),
    },
    {
      path: "/",
      name: "HomePageVue",
      component: () => import('../views/homepage.vue'),
    },
  ]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const userAuthStore = useAuthStore()
  if (!userAuthStore.isAuthenticated && to.path !== '/signin') {
    next('/signin')
  } else if (userAuthStore.isAuthenticated && to.path === '/signin') {
    next('/')
  } else {
    next()
  }
})

export default router

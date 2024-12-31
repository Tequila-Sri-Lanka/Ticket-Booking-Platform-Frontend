import LoginPage from '@/views/loginPage.vue'
 import SignUpPage from '@/views/signUpPage.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    
    },
    {
      path: '/signup',
      name: 'signup',
       component:SignUpPage,

    
    },
  ],
})

export default router

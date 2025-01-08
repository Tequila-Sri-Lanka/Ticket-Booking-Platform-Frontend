import Homepage from '@/views/Homepage.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/signin",
      name: "signin",
      component: LoginPage,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpPage,
    },
    {
      path: "/homepage",
      name: "HomePageVue",
      component: Homepage,
    },
  ],
});

export default router

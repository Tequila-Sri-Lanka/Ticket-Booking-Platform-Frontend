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
  const userAuthStore = useAuthStore();
 if (
    !userAuthStore.isAuthenticated &&
   !["/signin", "/signup"].includes(to.path)
  ) {
   next("/signin");
   useAuthStore.logout();
  
  } else if (
    userAuthStore.isAuthenticated &&
    ["/signin", "/signup"].includes(to.path)
  ) {
    next("/");
  } else {
    next();
  }
});

export default router

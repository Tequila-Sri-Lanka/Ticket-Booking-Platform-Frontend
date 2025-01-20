import { defineStore } from "pinia";
import SignInSignUpService from "@/service/SignInSignUpService";
import { cloneDeep } from "lodash";
import { ApiStatus } from "@/consts/const";
import { computed, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const initialUser = {
    username: null,
    email: null,
    token: null,
    contact: null,
    role: null,
  };

  const userDetails = ref({
    data: cloneDeep(initialUser),
    status: ApiStatus.INIT,
    error: null,
  });

  const isAuthenticated = computed(() => !!userDetails.value.data.token);
  const login = async (credentials) => {
    console.log("auth cred", credentials)
    try {
      const response = await SignInSignUpService.signIn(credentials);
      if (response?.token) {
        userDetails.value.data = {
          ...response.user,
          token: response.token,
        };
        localStorage.setItem(
          "user_details",
          JSON.stringify(userDetails.value.data)
        );
        routesStore.initializeRoutes();
      }
    } catch (error) {
      userDetails.value.error = error.message || "Login failed";
    }
  };

    const signUp = async (userDetailsInput) => {
      try {
        userDetails.value.status = ApiStatus.LOADING;
        const response = await SignInSignUpService.signUp(userDetailsInput);
        if (response?.success) {
          console.log("Sign-up successful. Please log in.");
          userDetails.value.status = ApiStatus.SUCCESS;
        }
      } catch (error) {
        userDetails.value.status = ApiStatus.ERROR;
        userDetails.value.error = error.message || "Sign-up failed";
      }
    };

  const setUser = (user) => {
    userDetails.value.data = { ...user };
    localStorage.setItem(
      "user_details",
      JSON.stringify(userDetails.value.data)
    );
    routesStore.initializeRoutes();
  };

  const getUser = () => userDetails.value;

  const setToken = (newToken) => {
    userDetails.value.data.token = newToken;
    localStorage.setItem("auth_token", newToken);
  };

  const logout = () => {
    localStorage.removeItem("user_details");
    localStorage.removeItem("auth_token");
    userDetails.value = {
      data: cloneDeep(initialUser),
      status: ApiStatus.INIT,
      error: null,
    };
  };

  return { userDetails, isAuthenticated, login ,signUp,setUser,getUser,logout,setToken};
});

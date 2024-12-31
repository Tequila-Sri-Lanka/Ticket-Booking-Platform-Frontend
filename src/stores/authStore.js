

import { defineStore } from "pinia";
import SignInSignUpService from "@/service/SignInSignUpService"; 

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    user: null,
  }),
  actions: {
    async login(credentials) {
      try {
        // Call the login function from SignInSignUpService
        const response = await SignInSignUpService.signIn(credentials);

        if (response.token) {
          this.isAuthenticated = true;
          // Optionally, save the token or user data to localStorage or Pinia state
          localStorage.setItem("authToken", response.token);
          this.user = response.user;
        }
      } catch (error) {
        console.error("Login failed:", error);
        this.isAuthenticated = false;
      }
    },

    async signUp(userDetails) {
      try {
        const response = await SignInSignUpService.signUp(userDetails);
        // Handle the sign-up response as needed
      } catch (error) {
        console.error("Sign-Up failed:", error);
      }
    },
  },
});

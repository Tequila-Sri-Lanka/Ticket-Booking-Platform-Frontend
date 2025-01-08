import { defineStore } from "pinia"
import SignInSignUpService from "@/service/SignInSignUpService"

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    user: null,
    token: null,
    roles: [],
    profile: {
      name: "",
      email: "",
      avatar: "",
    },
    sessionExpiration: null,
    loading: false,
    error: null,
    redirectPath: "/",
  }),
  actions: {
    async login(credentials) {
      this.loading = true
      try {
        const response = await SignInSignUpService.signIn(credentials)

        if (response.token) {
          this.isAuthenticated = true
          this.token = response.token
          this.user = response.user
          this.roles = response.user.roles || []
          this.profile = {
            name: response.user.name,
            email: response.user.email,
            avatar: response.user.avatar || "",
          }
          localStorage.setItem("authToken", response.token)
        }
      } catch (error) {
        console.error("Login failed:", error)
        this.isAuthenticated = false
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async signUp(userDetails) {
      this.loading = true
      try {
        const response = await SignInSignUpService.signUp(userDetails)
        //sign-up success controll
      } catch (error) {
        console.error("Sign-Up failed:", error)
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    logout() {
      this.isAuthenticated = false
      this.token = null
      this.user = null
      this.roles = []
      this.profile = { name: "", email: "", avatar: "" }
      localStorage.removeItem("authToken")
    },
  },
})

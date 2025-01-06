<template>
  <div id="gbtn" ref="googleLoginBtn"></div>
</template>

<script>
import { useAuthStore } from "@/stores/authStore"; 
export default {
  mounted() {
    const gClientId =
      "965754081860-emujf40ikcaldba96qpkm5mil5l3b9g5.apps.googleusercontent.com";
    window.google.accounts.id.initialize({
      client_id: gClientId,
      callback: this.handleCredentialResponse,
      auto_select: true,
    });

    window.google.accounts.id.renderButton(this.$refs.googleLoginBtn, {
      text: "signin_with",
      size: "large",
      width: "100%",
      theme: "outline",
      logo_alignment: "left",
    });
  },
  methods: {
    async handleCredentialResponse(response) {
      console.log(response.credential);

      if (response && response.credential) {
        try {
          const decodedToken = jwt_decode(response.credential);

          const email = decodedToken.email;
          const name = decodedToken.name;
          const givenName = decodedToken.given_name;

          console.log("Email:", email);
          console.log("Name:", name);
          console.log("Given Name:", givenName);

          const credentials = {
            name: name,
            nic: "google-user",
            userName: givenName,
            password: "google-user",
            email: email,
            mobile: "google-user",
          };

            try {
            const authStore = useAuthStore();
            await authStore.signUp(credentials);
            if (authStore.isAuthenticated) {
              console.log("Sign in successfully!");
            }
          } catch (error) {
            console.error("Sign up failed:", error.message);
          } finally {
            this.loading = false;
          }
        } catch (error) {
          console.error("Error decoding token", error);
        }
      } else {
        console.error("No credential received from Google.");
      }
    },
  },
};
</script>

<style scoped></style>

<template>
  <div class="main-container">
    <div class="left-side">
      <img class="themeImg" src="/src/assets/theme.jpg" alt="Theme Image" />
    </div>
    <div class="form-container">
      <form class="form" @submit.prevent="handleLogin">
        <div id="email" class="flex-column">
          <label>Email</label>
        </div>
        <div class="inputForm">

          <input
            placeholder="Enter your Email"
            class="input"
            type="email"
            v-model="email"
            required
          />
        </div>
        <div class="err-message" id="email-massage">{{ emailError }}</div>

       <div class="flex-column">
          <label>Password</label>
        </div>
        <div id="password" class="inputForm">
         
          <input
            :type="showPassword ? 'text' : 'password'"
            placeholder="Enter your Password"
            class="input"
            v-model="password"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            viewBox="0 0 24 24"
            height="20"
            class="eye-icon"
            @click="togglePasswordVisibility"
          >
            <path
              v-if="!showPassword"
              d="M12 5C7.58 5 3.73 7.11 2 12c1.73 4.89 5.58 7 10 7s8.27-2.11 10-7c-1.73-4.89-5.58-7-10-7zm0 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            />
            <path
              v-else
              d="M12 5c4.42 0 8.27 2.11 10 7-1.73 4.89-5.58 7-10 7s-8.27-2.11-10-7c1.73-4.89 5.58-7 10-7zm0 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-4.8 3.19l-1.46-1.46c.3-.19.61-.37.93-.53a10.075 10.075 0 005.33-5.33c.16-.32.34-.63.53-.93l1.46 1.46c-.88.69-1.84 1.29-2.84 1.75-1.03.49-2.13.86-3.25 1.04-1.15.18-2.32.28-3.49.28zm0 0"
            />
          </svg>
        </div>
        <div class="err-message" id="password-massage">{{ passwordError }}</div>

        <div class="flex-row">
          <div>
            <input type="checkbox" v-model="rememberMe" />
            <label>Remember me</label>
          </div>
          <span class="span">Forgot password?</span>
        </div>

        <button class="button-submit">Sign In</button>

        <p class="p">
          Don't have an account?
          <router-link to="/signup" class="span">Sign Up</router-link>
        </p>
        <p class="p line">Or With</p>

        <gbutton/>    </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import Gbutton from '@/components/Gbutton.vue';

export default {
  components: { Gbutton },
  setup() {
    const email = ref("");
    const password = ref("");
    const rememberMe = ref(false);
    const loading = ref(false);
    const emailError = ref("");
    const passwordError = ref("");
    const showPassword = ref(false); 
    const authStore = useAuthStore();

    const validateEmail = (email) => {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return regex.test(email);
    };

    const handleLogin = async () => {
      emailError.value = "";
      passwordError.value = "";

      if (!email.value || !validateEmail(email.value)) {
        emailError.value = "Please enter a valid email!";
        return;
      }

      if (!password.value || password.value.length < 6) {
        passwordError.value = "Password must be at least 6 characters!";
        return;
      }

      const credentials = {
        email: email.value,
        password: password.value,
        rememberMe: rememberMe.value,
      };

      try {
        loading.value = true;
        await authStore.login(credentials);
        if (authStore.isAuthenticated) {
          console.log("Logged in successfully!");
        }
      } catch (error) {
        console.error("Login failed:", error.message);
      } finally {
        loading.value = false;
      }
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    return {
      email,
      password,
      rememberMe,
      loading,
      emailError,
      passwordError,
      handleLogin,
      showPassword,
      togglePasswordVisibility,
    };
  },
};
</script>


<style scoped>
.err-message {
  color: rgb(105, 2, 2);
}
.blink-border {
  animation: blinkBorder 0.5s ease-in-out 3; /* Blink 3 times */
}

@keyframes blinkBorder {
  0% {
    border-color: red;
  }
  50% {
    border-color: transparent;
  }
  100% {
    border-color: red;
  }
}
.main-container {
  background: white;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.left-side {
  object-fit: cover;
}
.themeImg {
  height: 100vh;
}
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  backdrop-filter: blur(10px);
  padding: 30px;
  width: 450px;
  border-radius: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
::placeholder {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.form button {
  align-self: flex-end;
}
.flex-column > label {
  color: #151717;
  font-weight: 600;
}
.inputForm {
  border: 1.5px solid gray;
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;
}
.input {
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 80%;
  background-color: transparent;
}
.input:focus {
  outline: none;
  background-color: transparent;
}


.err-message {
  font-size: 12px;
  font-weight: 600;
}
.btn {
  padding: 10px 20px;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border: none;
  color: white;
}

.flex-row {
  display: flex;
  gap: 20px;
}
</style>

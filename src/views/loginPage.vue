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

        <div class="flex-row">
          <button class="btn google">
            <svg
              xml:space="preserve"
              style="enable-background: new 0 0 512 512"
              viewBox="0 0 512 512"
              y="0px"
              x="0px"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              width="20"
              version="1.1"
            >
              <path
                d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
	C103.821,274.792,107.225,292.797,113.47,309.408z"
                style="fill: #fbbb00"
              ></path>
              <path
                d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                style="fill: #518ef8"
              ></path>
              <path
                d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                style="fill: #28b446"
              ></path>
              <path
                d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
	C318.115,0,375.068,22.126,419.404,58.936z"
                style="fill: #f14336"
              ></path>
            </svg>

            Google</button
          ><button class="btn apple">
            <svg
              xml:space="preserve"
              style="enable-background: new 0 0 22.773 22.773"
              viewBox="0 0 22.773 22.773"
              y="0px"
              x="0px"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              id="Capa_1"
              width="20"
              height="20"
              version="1.1"
            >
              <g>
                <g>
                  <path
                    d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"
                  ></path>
                  <path
                    d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"
                  ></path>
                </g>
              </g>
            </svg>

            Apple
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";

export default {
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

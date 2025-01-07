<template>
  <div class="main-container">
    <div class="form-container">
      <form class="form" @submit.prevent="handleLogin">
        <div class="flex-column">
          <label>User Name </label>
        </div>
        <div id="u-name" class="inputForm">
          <input
            placeholder="Enter your User Name"
            class="input"
            type="text"
            v-model="username"
          />
        </div>
        <div class="err-message" id="u-name-massage"></div>
        <div class="flex-column">
          <label>Email </label>
        </div>
        <div id="email" class="inputForm">
          <input
            placeholder="Enter your Email"
            class="input"
            type="text"
            v-model="email"
          />
        </div>
        <div class="err-message" id="email-massage"></div>

        <div class="flex-column">
          <label>NIC </label>
        </div>
        <div id="nic" class="inputForm">
          <input
            placeholder="Enter your NIC"
            class="input"
            type="text"
            v-model="nic"
          />
        </div>
        <div class="err-message" id="nic-massage"></div>
        <div class="flex-column">
          <label>Mobile No </label>
        </div>
        <div id="mobile" class="inputForm">
          <input
            placeholder="Enter your Mobile Number"
            class="input"
            type="text"
            v-model="mobile"
          />
        </div>
        <div class="err-message" id="mobile-massage"></div>

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
        <div class="err-message" id="password-massage"></div>

        <button class="button-submit">Sign Up</button>
        <p class="p">
          Have an account?
          <router-link to="/signin" class="span">Sign In</router-link>
        </p>
        <p class="p line">Or With</p>
        <gbutton></gbutton>
      </form>
    </div>
    <div class="right-side">
      <img class="themeImg" src="/src/assets/theme.jpg" alt="" />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import Gbutton from "@/components/Gbutton.vue";

export default {
  components: { Gbutton },
  data() {
    return {
      username: "",
      email: "",
      nic: "",
      mobile: "",
      password: "",
      showPassword: false,
      loading: false,
    };
  },

  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },

    validateInputs() {
      const usernameInput = document.getElementById("u-name");
      const usernameMessage = document.getElementById("u-name-massage");
      const emailMessage = document.getElementById("email-massage");
      const nicMessage = document.getElementById("nic-massage");
      const mobileMessage = document.getElementById("mobile-massage");
      const passwordMessage = document.getElementById("password-massage");
      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      const nicInput = document.getElementById("nic");
      const mobileInput = document.getElementById("mobile");

      if (!this.username || this.username.trim().length === 0) {
        usernameInput.classList.add("blink-border");
        usernameMessage.textContent = "Please enter a valid username!";
        setTimeout(() => {
          usernameInput.classList.remove("blink-border");
          usernameMessage.textContent = "";
        }, 1500);
        return false;
      }
      if (!this.email || !this.validateEmail(this.email)) {
        emailInput.classList.add("blink-border");
        emailMessage.textContent = "Please enter a valid email!";
        setTimeout(() => {
          emailInput.classList.remove("blink-border");
          emailMessage.textContent = "";
        }, 1500);
        return false;
      }
      if (!this.nic || this.nic.trim().length === 0) {
        nicInput.classList.add("blink-border");
        nicMessage.textContent = "Please enter a valid NIC number!";
        setTimeout(() => {
          nicInput.classList.remove("blink-border");
          nicMessage.textContent = "";
        }, 1500);
        return false;
      }
      if (!this.mobile || !this.validateMobile(this.mobile)) {
        mobileInput.classList.add("blink-border");
        mobileMessage.textContent = "Please enter a valid mobile number!";
        setTimeout(() => {
          mobileInput.classList.remove("blink-border");
          mobileMessage.textContent = "";
        }, 1500);
        return false;
      }
      if (!this.password || this.password.length < 6) {
        passwordInput.classList.add("blink-border");
        passwordMessage.textContent =
          "Password must be at least 6 characters!!";
        setTimeout(() => {
          passwordInput.classList.remove("blink-border");
          passwordMessage.textContent = "";
        }, 1500);
        return false;
      }
      return true;
    },

    // Email validation
    validateEmail(email) {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return regex.test(email);
    },

    // Mobile number validation
    validateMobile(mobile) {
      const regex = /^[0-9]{10}$/;
      return regex.test(mobile);
    },

    // Handle the login process
    async handleLogin() {
      if (!this.validateInputs()) {
        return;
      }

      this.loading = true;
      const authStore = useAuthStore();

      const credentials = {
        name: this.username,
        nic: this.nic,
        userName: this.username,
        password: this.password,
        email: this.email,
        mobile: this.mobile,
      };

      try {
        await authStore.signUp(credentials);
        if (authStore.isAuthenticated) {
          console.log("Sign in successfully!");
        }
      } catch (error) {
        console.error("Sign up failed:", error.message);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

::placeholder {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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

.inputForm:focus-within {
  border: 1.5px solid #2d79f3;
  background-color: transparent;
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.flex-row > div > label {
  font-size: 14px;
  color: black;
  font-weight: 400;
}

.span {
  font-size: 14px;
  margin-left: 5px;
  color: #2d79f3;
  font-weight: 500;
  cursor: pointer;
}

.button-submit {
  margin: 20px 0 10px 0;
  background-color: #151717;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;
}

.p {
  text-align: center;
  color: black;
  font-size: 14px;
  margin: 5px 0;
}

.btn {
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 10px;
  border: 1px solid #ededef;
  background-color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.btn:hover {
  border: 1px solid #2d79f3;
}
.eye-icon {
  cursor: pointer;
  padding: 3px;
}
</style>

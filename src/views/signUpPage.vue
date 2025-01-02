<template>
  <div class="main-container">
    <div class="form-container">
      <form class="form" @submit.prevent="handleLogin">
        <div class="flex-column">
          <label>User Name </label>
        </div>
        <div id="u-name" class="inputForm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <g id="Layer_1">
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-3.87 0-7 2.13-7 4v2h14v-2c0-1.87-3.13-4-7-4z"
              />
            </g>
          </svg>

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            viewBox="0 0 32 32"
            height="20"
          >
            <g data-name="Layer 3" id="Layer_3">
              <path
                d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"
              ></path>
            </g>
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <g id="Layer_1">
              <path
                d="M22 4h-4V3c0-.553-.447-1-1-1H7c-.553 0-1 .447-1 1v1H2c-.553 0-1 .447-1 1v16c0 .553.447 1 1 1h20c.553 0 1-.447 1-1V5c0-.553-.447-1-1-1zm-5 0h-8V3h8v1zm4 16H3V6h18v14z"
              />
            </g>
          </svg>

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <g id="Layer_1">
              <path
                d="M18 0H6C4.89 0 4 0.89 4 2V22C4 23.1 4.89 24 6 24H18C19.1 24 20 23.1 20 22V2C20 0.89 19.1 0 18 0ZM6 2H18V22H6V2ZM12 21C11.45 21 11 20.55 11 20C11 19.45 11.45 19 12 19C12.55 19 13 19.45 13 20C13 20.55 12.55 21 12 21ZM16 4H8V5H16V4Z"
              />
            </g>
          </svg>

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            viewBox="-64 0 512 512"
            height="20"
          >
            <path
              d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"
            ></path>
            <path
              d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"
            ></path>
          </svg>
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
        <p class="p">Have an account? <router-link to="/signin" class="span">Sign In</router-link></p>
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
    <div class="right-side">
      <img class="themeImg" src="/src/assets/theme.jpg" alt="" />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";

export default {
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
        await authStore.signUp(credentials); // Assuming signUp() method exists in authStore
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

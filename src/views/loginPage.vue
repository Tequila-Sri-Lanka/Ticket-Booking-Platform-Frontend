<template>
  <div class="login-form-container">
    <div class="left-side">
      <img class="themeImg" src="/src/assets/theme.jpg" alt="Theme Image" />
    </div>
    <div class="form-container">
      <form class="form" @submit.prevent="handleLogin">
        <div class="login-header">
          <h2>{{ t('logins')}}</h2>
        </div>
        <section class="username-field-container mb-3">
          <FloatLabel variant="on">
            <InputText id="username" v-model="username" :invalid="v$.username.$error" />
            <label for="username">Enter your username</label>
          </FloatLabel>
        </section>

        <section class="password-field-container mb-2">
          <FloatLabel variant="on">
            <Password v-model="password" :feedback="false" toggleMask :invalid="v$.password.$error"/>
            <label for="password">Enter your password</label>
          </FloatLabel>
        </section>

        <div>
          <Checkbox v-model="rememberMe" binary class="mr-2" />
          <span >remember me</span>
        </div>
        <div class="mb-2">
          <span class="span forget-password" @click="forgetPassword">Forgot password?</span>
        </div>
        <Button
          label="LOGIN"
          icon="pi pi-lock"
          iconPos="right"
          class="mb-2"
          @click="handleLogin"
        ></Button>
        <button @click="changeLanguage('en')">English</button>
        <button @click="changeLanguage('fr')">Français</button>
        <div class="signup-section">
          <p>Don't have an account?</p>
          <router-link to="/signup" class="span">Sign Up</router-link>
        </div>
        <p class="p line">or</p>
        <gbutton />
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore"
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { useI18n } from 'vue-i18n'
import { useI18nStore } from '../stores/i18n'
import Gbutton from "@/components/Gbutton.vue"

const authStore = useAuthStore();
const { t } = useI18n();
const i18nStore = useI18nStore();

const username = ref(null);
const password = ref(null);
const rememberMe = ref(false);
const processing = ref(false);

const rules = {
  username: {required, email, $autoDirty: true},
  password: {required, $autoDirty: true}
}

const v$ = useVuelidate(rules, {
  username, password
})

function changeLanguage(locale) {
  i18nStore.setLocale(locale);
}

const handleLogin = async () => {
  const credentials = {
    username: username.value,
    password: password.value,
    rememberMe: rememberMe.value,
  };

  try {
    processing.value = true;
    await authStore.login(credentials);
    if (authStore.isAuthenticated) {
      console.log("Logged in successfully!");
    }
  } catch (error) {
    console.error("Login failed:", error.message);
  } finally {
    processing.value = false;
  }
};

</script>

<style lang="scss">
.login-form-container {
  display: grid;
  grid-template-columns: 1fr 1fr;

  .signup-section{
    display: flex;
    
    p{
      margin: 0;
    }
  }

  .login-header {
    font-weight: 700;
    text-align: center;
  }
  .p-inputtext,
  .p-password, .p-button {
    width: 100%;
    height: 3rem;
  }
  .p-button {
    width: 100%;
  }

  .forget-password {
    color: rgb(27, 27, 116);
  }

  .forget-password:hover {
    color: rgb(35, 35, 175);
    cursor: pointer;
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
  .login-form-container {
    background: white;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: #151717;
  }
  .login-login-form-container-left-side {
    object-fit: cover;
  }
  .left-side-image {
    height: 99vh;
  }
  .login-form-container-right-side {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form {
    display: flex;
    flex-direction: column;
    width: 50%;
    backdrop-filter: blur(10px);
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
}
</style>

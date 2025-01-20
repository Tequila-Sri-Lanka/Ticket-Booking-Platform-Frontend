<template>
  <div class="signup-form-container">
    <div class="form-container">
      <form class="form" @submit.prevent="handleSignup">
        <div class="signup-header">
          <h2>{{ $t("signup.title").toUpperCase() }}</h2>
        </div>
        <section class="username-field-container mb-3">
          <FloatLabel variant="on">
            <InputText id="username" v-model="username" :invalid="v$.username.$error" />
            <label for="username">{{ $t("signup.username.placeholder") }}</label>
          </FloatLabel>
        </section>
        <section class="email-field-container mb-3">
          <FloatLabel variant="on">
            <InputText id="email" v-model="email" :invalid="v$.email.$error" />
            <label for="email">{{ $t("signup.email.placeholder") }}</label>
          </FloatLabel>
        </section>
        <section class="nic-field-container mb-3">
          <FloatLabel variant="on">
            <InputText id="nic" v-model="nic" :invalid="v$.nic.$error" />
            <label for="nic">{{ $t("signup.nic.placeholder") }}</label>
          </FloatLabel>
        </section>
        <section class="mobile-field-container mb-3">
          <FloatLabel variant="on">
            <InputText id="mobile" v-model="mobile" :invalid="v$.mobile.$error" />
            <label for="mobile">{{ $t("signup.mobile.placeholder") }}</label>
          </FloatLabel>
        </section>
        <section class="password-field-container mb-2">
          <FloatLabel variant="on">
            <Password v-model="password" :feedback="false" toggleMask :invalid="v$.password.$error" />
            <label for="password">{{ $t("signup.password.placeholder") }}</label>
          </FloatLabel>
        </section>
        <Button
          :label="$t('signup.sign-up').toUpperCase()"
          icon="pi pi-lock"
          iconPos="right"
          class="mb-2"
          type="submit"
        ></Button>
        
        <div class="signup-section">
          <p>{{ $t("signup.have-account") }}</p>
          <router-link to="/signin" class="span">{{ $t("signup.login") }}</router-link>
        </div>
        <p class="p line">{{ $t("signup.or") }}</p>
        <gbutton />
      </form>
    </div>
    <div class="signup-signup-form-container-right-side">
      <img class="right-side-image" src="/src/assets/theme.jpg" alt="Theme Image" />
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { useVuelidate } from "@vuelidate/core";
import { required, email as emailValidator, numeric } from "@vuelidate/validators";
import Gbutton from "@/components/Gbutton.vue";

const authStore = useAuthStore();

const username = ref(null);
const email = ref(null);
const nic = ref(null);
const mobile = ref(null);
const password = ref(null);
const processing = ref(false);


const rules = {
  username: { required, $autoDirty: true },
  email: { required, email:emailValidator, $autoDirty: true },
  nic: { required, $autoDirty: true },
  mobile: { required, numeric, $autoDirty: true },
  password: { required, $autoDirty: true },
};

const v$ = useVuelidate(rules, {
  username,
  email,
  nic,
  mobile,
  password,
});

const handleSignup = async () => {
  const credentials = {
    username: username.value,
    email: email.value,
    nic: nic.value,
    mobile: mobile.value,
    password: password.value,
  };

 try {  processing.value = true;
        await authStore.signUp(credentials);
        if (authStore.isAuthenticated) {
          console.log("Sign in successfully!");
        }
      } catch (error) {
        console.error("Sign up failed:", error.message);
      } finally {
        processing.value = false;
      }

};
</script>

<style lang="scss">
.signup-form-container {
  display: grid;
  grid-template-columns: 1fr 1fr;

  .signup-section{
    display: flex;
    
    p{
      margin: 0;
    }
  }

  .signup-header {
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
    animation: blinkBorder 0.5s ease-in-out 3; 
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
  .signup-signup-form-container-right-side {
    object-fit: cover;
  }
  .right-side-image {
    height: 100vh;
  }
  .login-form-container-right-side {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form {
    display: flex;
    flex-direction: column; 
     gap: 10px;
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
  .form-container {
  display: flex;
  justify-content: center;
  align-items: center;
} 

}
</style>

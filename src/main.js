import "./assets/main.css"
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import '/node_modules/primeflex/primeflex.css'

import { createApp } from "vue"
import { createPinia } from "pinia"
import { createI18n } from "vue-i18n"

import App from "./App.vue"
import router from "./router"
import PrimeVue from 'primevue/config'
import si from "./locales/si.json"
import ta from "./locales/ta.json"
import en from "./locales/en.json"

import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Password from 'primevue/password'
import Dropdown from 'primevue/dropdown';

const i18n = createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: { si, ta, en },
  });

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(PrimeVue)

app.component('Button', Button)
app.component('InputText', InputText)
app.component('Checkbox', Checkbox)
app.component('FloatLabel', FloatLabel)
app.component('Password', Password)
app.component('Dropdown', Dropdown)

app.mount("#app")

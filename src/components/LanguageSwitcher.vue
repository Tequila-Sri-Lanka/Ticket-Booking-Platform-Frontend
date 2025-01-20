<template>
  <div class="language-selector">
    <div :style="{ position: 'relative' }">
      <Dropdown
        v-model="selectedLocale"
        :options="languages"
        optionLabel="label"
        placeholder="Language"
        class="w-full"
        @change="changeLocale"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useI18n } from "vue-i18n"

const { locale } = useI18n()
const selectedLocale = ref(locale.value)
const languages = ref([
  {
    label: "English",
    prefix: "en",
  },
  {
    label: "Sinhala",
    prefix: "si",
  },
  {
    label: "Tamil",
    prefix: "ta",
  },
])
const changeLocale = async (value) => {
  locale.value = selectedLocale.value.prefix
}
</script>

<style lang="scss">
.language-selector {
  position: absolute;
  right: 0;
  width: 125px;
  margin: 10px;
}
</style>

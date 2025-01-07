import { defineStore } from 'pinia';
import {  loadLocaleMessages } from '../i18n';
import i18n from '../i18n';

export const useI18nStore = defineStore('i18n', {
  state: () => ({
    locale: 'en',
  }),
  actions: {
    async setLocale(newLocale) {
      await loadLocaleMessages(newLocale);
      this.locale = newLocale;
      i18n.global.locale.value = newLocale;
    },
  },
});

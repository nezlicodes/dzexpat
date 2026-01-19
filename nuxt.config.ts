// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  css: ['~/assets/css/tailwind.css'],

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    langDir: 'locales',
    lazy: true,
    bundle: {
      optimizeTranslationDirective: false
    },
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json', dir: 'ltr' },
      { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.json', dir: 'ltr' },
      { code: 'ar', iso: 'ar-DZ', name: 'العربية', file: 'ar.json', dir: 'rtl' }
    ]
  }
})

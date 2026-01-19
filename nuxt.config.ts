// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  css: ['~/assets/css/tailwind.css'],

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },

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

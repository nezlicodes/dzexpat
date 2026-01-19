<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true
})

// Ensure <html lang="..."> is always present
const { locale, t } = useI18n()
const localePath = useLocalePath()

useHead({
  htmlAttrs: {
    lang: locale
  }
})
useHead(head)
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <AppHeader />

    <main>
      <slot />
    </main>

    <footer class="bg-primary text-white py-16">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <!-- Company Info -->
          <div>
            <div class="text-2xl font-heading font-bold mb-2">{{ t('app.title') }}</div>
            <div class="text-xs opacity-90 mb-6">{{ t('app.tagline') }}</div>
            <p class="text-sm opacity-90 leading-relaxed mb-6">{{ t('footer.description') }}</p>
            
            <!-- Social Links -->
            <div class="flex gap-4">
              <a href="#" class="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-colors">
                <span class="text-xs">Li</span>
              </a>
              <a href="#" class="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-colors">
                <span class="text-xs">Fb</span>
              </a>
              <a href="#" class="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-colors">
                <span class="text-xs">Ig</span>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-heading font-semibold mb-4">{{ t('footer.quickLinks') }}</h4>
            <div class="space-y-2">
              <div><NuxtLink :to="localePath('/')" class="text-sm opacity-90 hover:opacity-100 transition-opacity">{{ t('nav.home') }}</NuxtLink></div>
              <div><NuxtLink :to="localePath('/about')" class="text-sm opacity-90 hover:opacity-100 transition-opacity">{{ t('nav.about') }}</NuxtLink></div>
              <div><NuxtLink :to="localePath('/solutions')" class="text-sm opacity-90 hover:opacity-100 transition-opacity">{{ t('nav.solutions') }}</NuxtLink></div>
              <div><NuxtLink :to="localePath('/contact')" class="text-sm opacity-90 hover:opacity-100 transition-opacity">{{ t('nav.contact') }}</NuxtLink></div>
              <div class="mt-4">
                <span class="text-xs opacity-75">🇫🇷 FRANÇAIS</span><br>
                <span class="text-xs opacity-75">🇩🇿 العربية</span><br>
                <span class="text-xs opacity-75">🇬🇧 ENGLISH</span>
              </div>
            </div>
          </div>

          <!-- Follow Us -->
          <div>
            <h4 class="font-heading font-semibold mb-4">{{ t('footer.followUs') }}</h4>
            <div class="space-y-2">
              <div><a href="#" class="text-sm opacity-90 hover:opacity-100 transition-opacity">LinkedIn</a></div>
              <div><a href="#" class="text-sm opacity-90 hover:opacity-100 transition-opacity">Facebook</a></div>
              <div><a href="#" class="text-sm opacity-90 hover:opacity-100 transition-opacity">Instagram</a></div>
            </div>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="font-heading font-semibold mb-4">{{ t('footer.contact') }}</h4>
            <div class="space-y-2 text-sm opacity-90">
              <p>{{ t('footer.address') }}</p>
              <p class="mt-4">
                <a href="mailto:contact@dzexpat.com" class="hover:opacity-100 transition-opacity">contact@dzexpat.com</a>
              </p>
              <p>
                <a href="tel:+21321694307" class="hover:opacity-100 transition-opacity">+213 (0) 21 694 307</a>
              </p>
              <p>
                <a href="tel:+213799936950" class="hover:opacity-100 transition-opacity">+213 (0) 799 936 950</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-white border-opacity-20 pt-8 text-center">
          <p class="text-sm opacity-75">{{ t('footer.copyright') }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

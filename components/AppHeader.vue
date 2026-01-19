<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

const nav = computed(() => [
  { label: t('nav.home'), href: '/' },
  { label: t('nav.about'), href: '/about' },
  { label: t('nav.solutions'), href: '/solutions' },
  { label: t('nav.contact'), href: '/contact' }
])

const currentFlag = computed(() => {
  switch (locale.value) {
    case 'fr': return '🇫🇷'
    case 'ar': return '🇩🇿'
    default: return '🇬🇧'
  }
})

const currentLanguage = computed(() => {
  switch (locale.value) {
    case 'fr': return 'FRANÇAIS'
    case 'ar': return 'العربية'
    default: return 'ENGLISH'
  }
})
</script>

<template>
  <header class="bg-primary text-white">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between py-4">
        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="flex flex-col">
          <div class="text-2xl font-heading font-bold tracking-tight">{{ t('app.title') }}</div>
          <div class="text-xs opacity-90">{{ t('app.tagline') }}</div>
        </NuxtLink>

        <!-- Navigation -->
        <div class="flex items-center gap-8">
          <nav class="hidden md:flex items-center gap-6">
            <NuxtLink
              v-for="item in nav"
              :key="item.href"
              :to="localePath(item.href)"
              class="text-sm hover:text-gray-300 transition-colors font-medium"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>

          <!-- Language Selector -->
          <div class="flex items-center gap-2 text-sm">
            <span>{{ currentFlag }}</span>
            <LocaleSwitcher />
          </div>

          <!-- CTA Button -->
          <button class="hidden sm:block bg-primary-700 hover:bg-primary-800 px-4 py-2 text-sm font-heading font-semibold tracking-wide transition-colors">
            {{ t('nav.quote') }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

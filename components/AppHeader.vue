<script setup lang="ts">
type NavItem = { label: string; href: string; external?: boolean }

const props = defineProps<{
  title?: string
  nav?: NavItem[]
}>()

const { t } = useI18n()
const localePath = useLocalePath()

const nav = computed<NavItem[]>(() =>
  props.nav ?? [
    { label: t('nav.home'), href: '/' },
    { label: 'Nuxt', href: 'https://nuxt.com', external: true },
    { label: 'Tailwind', href: 'https://tailwindcss.com', external: true }
  ]
)
</script>

<template>
  <header class="border-b border-gray-200 bg-white">
    <div class="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
      <NuxtLink :to="localePath('/')" class="text-base font-semibold tracking-tight">
        {{ props.title ?? t('app.title') }}
      </NuxtLink>

      <div class="flex items-center gap-3">
        <nav class="hidden items-center gap-1 text-sm text-gray-600 sm:flex">
          <component
            :is="item.external ? 'a' : 'NuxtLink'"
            v-for="item in nav"
            :key="item.href"
            :href="item.external ? item.href : undefined"
            :to="item.external ? undefined : localePath(item.href)"
            class="rounded-md px-2 py-1 hover:bg-gray-100 hover:text-gray-900"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noreferrer' : undefined"
          >
            {{ item.label }}
          </component>
        </nav>

        <LocaleSwitcher />
      </div>
    </div>
  </header>
</template>

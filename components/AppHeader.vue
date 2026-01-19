<script setup lang="ts">
type NavItem = { label: string; href: string }

const props = defineProps<{
  title?: string
  nav?: NavItem[]
}>()

const nav = computed<NavItem[]>(() =>
  props.nav ?? [
    { label: 'Home', href: '/' },
    { label: 'Nuxt', href: 'https://nuxt.com' },
    { label: 'Tailwind', href: 'https://tailwindcss.com' }
  ]
)
</script>

<template>
  <header class="border-b border-gray-200 bg-white">
    <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
      <NuxtLink to="/" class="text-base font-semibold tracking-tight">
        {{ props.title ?? 'dz-expat' }}
      </NuxtLink>

      <nav class="flex items-center gap-4 text-sm text-gray-600">
        <component
          :is="item.href.startsWith('http') ? 'a' : NuxtLink"
          v-for="item in nav"
          :key="item.href"
          :href="item.href.startsWith('http') ? item.href : undefined"
          :to="item.href.startsWith('http') ? undefined : item.href"
          class="rounded-md px-2 py-1 hover:bg-gray-100 hover:text-gray-900"
          :target="item.href.startsWith('http') ? '_blank' : undefined"
          :rel="item.href.startsWith('http') ? 'noreferrer' : undefined"
        >
          {{ item.label }}
        </component>
      </nav>
    </div>
  </header>
</template>

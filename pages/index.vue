<script setup lang="ts">
const { t } = useI18n()

const features = computed(() => [
  { title: t('home.features.routing.title'), desc: t('home.features.routing.desc') },
  { title: t('home.features.layouts.title'), desc: t('home.features.layouts.desc') },
  { title: t('home.features.components.title'), desc: t('home.features.components.desc') }
])
</script>

<template>
  <section class="space-y-6">
    <div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h1 class="text-3xl font-bold tracking-tight">{{ t('home.welcome') }}</h1>
      <p class="mt-3 text-gray-600">
        {{ t('home.subtitle') }}
      </p>

      <div class="mt-6 flex flex-wrap gap-3">
        <a
          class="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
          href="https://nuxt.com/docs"
          target="_blank"
          rel="noreferrer"
        >
          Nuxt Docs
        </a>
        <a
          class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-gray-100"
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind Docs
        </a>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <div v-for="f in features" :key="f.title" class="rounded-xl border border-gray-200 bg-white p-6">
        <div class="text-base font-semibold">{{ f.title }}</div>
        <div class="mt-2 text-sm text-gray-600">{{ f.desc }}</div>
      </div>
    </div>
  </section>
</template>

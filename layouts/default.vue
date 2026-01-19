<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <AppHeader title="dz-expat" />

    <main class="mx-auto max-w-5xl px-6 py-10">
      <slot />
    </main>

    <footer class="border-t border-gray-200 bg-white">
      <div class="mx-auto max-w-5xl px-6 py-6 text-sm text-gray-500">
        <p>
          Built with <a class="underline" href="https://nuxt.com" target="_blank" rel="noreferrer">Nuxt</a>
          and <a class="underline" href="https://tailwindcss.com" target="_blank" rel="noreferrer">Tailwind</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

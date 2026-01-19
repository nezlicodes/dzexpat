<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const available = computed(() =>
  locales.value
    // locales can be strings or objects depending on config
    .map((l: any) => (typeof l === 'string' ? { code: l, name: l } : l))
)

function onChange(code: string) {
  // setLocale returns a promise in recent versions
  void setLocale(code)
}
</script>

<template>
  <label class="flex items-center gap-2 text-sm text-gray-600">
    <span class="sr-only">Language</span>
    <select
      class="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm hover:bg-gray-50"
      :value="locale"
      @change="onChange(($event.target as HTMLSelectElement).value)"
    >
      <option v-for="l in available" :key="l.code" :value="l.code">
        {{ l.name }}
      </option>
    </select>
  </label>
</template>

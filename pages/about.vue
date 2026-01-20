<script setup lang="ts">
const { t } = useI18n()
const { getTranslationArray, getTranslationObjectArray } = useTranslationArrays()

// Extract arrays from translations using the composable
const qualifications = computed(() => getTranslationArray('about.qualifications.items'))
const founderStory = computed(() => getTranslationArray('about.founderStory'))
const comfortTypes = computed(() => getTranslationObjectArray('about.comfortTypes'))

const stats = computed(() => [
  { number: '1+', label: t('about.stats.clients') },
  { number: '100+', label: t('about.stats.projects') },
  { number: '1+', label: t('about.stats.experience') },
  { number: '1+', label: t('about.stats.partnerships') }
])

// Helper functions to extract year and text from pipe-separated strings
function getQualificationYear(qualification: string): string {
  // Handle both object and string cases
  const text = typeof qualification === 'string' ? qualification : String(qualification)
  const parts = text.split('|')
  return parts[0] || ''
}

function getQualificationText(qualification: string): string {
  // Handle both object and string cases
  const text = typeof qualification === 'string' ? qualification : String(qualification)
  const parts = text.split('|')
  return parts[1] || qualification // fallback to original if no pipe found
}
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h1 class="text-5xl font-heading font-bold text-primary mb-6">{{ t('about.hero.title') }}</h1>
            <p class="text-xl text-gray-600 leading-relaxed">{{ t('about.hero.subtitle') }}</p>
          </div>
          
          <div class="bg-white rounded-lg p-8 lg:p-12 shadow-sm">
            <p class="text-lg text-gray-700 leading-relaxed">{{ t('about.hero.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Three Pillars Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <!-- Perfect Understanding -->
            <div class="text-center">
              <div class="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-heading font-bold text-primary mb-4">{{ t('about.pillars.understanding.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ t('about.pillars.understanding.subtitle') }}</p>
              <p class="text-gray-700 text-sm leading-relaxed">{{ t('about.pillars.understanding.description') }}</p>
            </div>

            <!-- Clear Management -->
            <div class="text-center">
              <div class="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-heading font-bold text-primary mb-4">{{ t('about.pillars.management.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ t('about.pillars.management.subtitle') }}</p>
              <p class="text-gray-700 text-sm leading-relaxed">{{ t('about.pillars.management.description') }}</p>
            </div>

            <!-- Partner Centralization -->
            <div class="text-center">
              <div class="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-heading font-bold text-primary mb-4">{{ t('about.pillars.centralization.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ t('about.pillars.centralization.subtitle') }}</p>
              <p class="text-gray-700 text-sm leading-relaxed">{{ t('about.pillars.centralization.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Qualifications Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 class="text-4xl font-heading font-bold text-primary mb-8">{{ t('about.qualifications.title') }}</h2>
              <div class="space-y-6">
                <div v-for="(qualification, index) in qualifications" :key="index" class="bg-white rounded-lg p-6 shadow-sm">
                  <div class="text-2xl font-heading font-bold text-primary mb-2">{{ String(index + 1).padStart(2, '0') }}.</div>
                  <div class="text-gray-700 leading-relaxed">
                    <div class="font-bold text-primary mb-2">{{ getQualificationYear(qualification) }}</div>
                    <div>{{ getQualificationText(qualification) }}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="lg:pl-8">
              <div class="bg-white rounded-lg p-8 shadow-sm">
                <img :src="`https://picsum.photos/400/300?random=1`" alt="Professional qualifications" class="w-full h-64 object-cover rounded-lg mb-6" />
                <div class="text-center">
                  <h3 class="text-xl font-heading font-bold text-primary mb-4">{{ t('about.qualifications.expertise') }}</h3>
                  <p class="text-gray-600">{{ t('about.qualifications.expertiseDesc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder Story Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <img :src="`https://picsum.photos/500/400?random=2`" alt="Founder" class="w-full h-80 object-cover rounded-lg shadow-lg" />
            </div>
            
            <div class="order-1 lg:order-2">
              <h2 class="text-4xl font-heading font-bold text-primary mb-8">{{ t('about.founder.title') }}</h2>
              
              <div class="space-y-6">
                <div v-for="(story, index) in founderStory" :key="index" class="border-l-4 border-primary pl-6">
                  <p class="text-gray-700 leading-relaxed">{{ story }}</p>
                </div>
              </div>
              
              <div class="mt-8 p-6 bg-gray-50 rounded-lg">
                <p class="text-lg font-medium text-primary italic">{{ t('about.founder.quote') }}</p>
                <p class="text-sm text-gray-600 mt-2">{{ t('about.founder.quoteAuthor') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comfort Types Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-heading font-bold text-primary mb-6">{{ t('about.comfort.title') }}</h2>
            <p class="text-xl text-gray-600">{{ t('about.comfort.subtitle') }}</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div v-for="(comfort, index) in comfortTypes" :key="index" class="bg-white rounded-lg p-8">
              <div class="flex items-start justify-between mb-6">
                <h3 class="text-xl font-heading font-bold text-primary flex-1">{{ comfort.title }}</h3>
                <button class="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                  <span class="text-lg font-bold">+</span>
                </button>
              </div>
              <p class="text-gray-700 leading-relaxed">{{ comfort.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-heading font-bold text-primary mb-4">{{ t('about.stats.title') }}</h2>
            <p class="text-gray-600">{{ t('about.stats.subtitle') }}</p>
          </div>
          
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="text-6xl font-heading font-bold text-primary mb-4">{{ stat.number }}</div>
              <div class="text-gray-600 font-medium">{{ stat.label }}</div>
            </div>
          </div>

          <!-- CTA -->
          <div class="bg-white rounded-lg border border-gray-200 p-8 lg:p-12 text-center">
            <h3 class="text-3xl font-heading font-bold text-primary mb-6">{{ t('about.cta.title') }}</h3>
            <p class="text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">{{ t('about.cta.description') }}</p>
            <a
              :href="`tel:${t('about.cta.phone')}`"
              class="inline-block bg-primary hover:bg-primary-600 text-white px-8 py-4 font-heading font-semibold text-lg tracking-wide transition-colors"
            >
              {{ t('about.cta.phone') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
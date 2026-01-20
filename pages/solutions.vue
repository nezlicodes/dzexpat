<script setup lang="ts">
const { t } = useI18n()
const { getTranslationArray, getTranslationObjectArray } = useTranslationArrays()

// Extract arrays from translations using the composable
const logisticsItems = computed(() => getTranslationArray('solutions.logistics.items'))
const administrativeItems = computed(() => getTranslationArray('solutions.administrative.items'))
const familyItems = computed(() => getTranslationArray('solutions.family.items'))
const interculturalItems = computed(() => getTranslationArray('solutions.intercultural.items'))
const comfortTypes = computed(() => getTranslationObjectArray('solutions.comfortTypes'))
const testimonialCompanies = computed(() => getTranslationObjectArray('solutions.testimonials'))
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl font-heading font-bold text-primary mb-6">{{ t('solutions.hero.title') }}</h1>
          <p class="text-xl text-gray-600 leading-relaxed mb-8">{{ t('solutions.hero.subtitle') }}</p>
          <p class="text-lg text-gray-700 leading-relaxed">{{ t('solutions.hero.description') }}</p>
        </div>
      </div>
    </section>

    <!-- Four Service Areas -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-heading font-bold text-primary mb-6">{{ t('solutions.services.title') }}</h2>
            <p class="text-xl text-gray-600">{{ t('solutions.services.subtitle') }}</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Logistics -->
            <div class="bg-white rounded-lg p-8 shadow-sm">
              <div class="text-center mb-8">
                <div class="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h.01a1 1 0 100-2H10zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h.01a1 1 0 100-2H10z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-heading font-bold text-primary mb-2">{{ t('solutions.logistics.title') }}</h3>
              </div>
              <div class="space-y-3">
                <div v-for="item in logisticsItems" :key="item" class="flex items-start">
                  <span class="text-primary mr-3 mt-1">-</span>
                  <span class="text-gray-700">{{ item }}</span>
                </div>
              </div>
            </div>

            <!-- Administrative -->
            <div class="bg-white rounded-lg p-8 shadow-sm">
              <div class="text-center mb-8">
                <div class="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-heading font-bold text-primary mb-2">{{ t('solutions.administrative.title') }}</h3>
              </div>
              <div class="space-y-3">
                <div v-for="item in administrativeItems" :key="item" class="flex items-start">
                  <span class="text-primary mr-3 mt-1">-</span>
                  <span class="text-gray-700">{{ item }}</span>
                </div>
              </div>
            </div>

            <!-- Family -->
            <div class="bg-white rounded-lg p-8 shadow-sm">
              <div class="text-center mb-8">
                <div class="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-heading font-bold text-primary mb-2">{{ t('solutions.family.title') }}</h3>
              </div>
              <div class="space-y-3">
                <div v-for="item in familyItems" :key="item" class="flex items-start">
                  <span class="text-primary mr-3 mt-1">-</span>
                  <span class="text-gray-700">{{ item }}</span>
                </div>
              </div>
            </div>

            <!-- Intercultural -->
            <div class="bg-white rounded-lg p-8 shadow-sm">
              <div class="text-center mb-8">
                <div class="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-heading font-bold text-primary mb-2">{{ t('solutions.intercultural.title') }}</h3>
              </div>
              <div class="space-y-3">
                <div v-for="item in interculturalItems" :key="item" class="flex items-start">
                  <span class="text-primary mr-3 mt-1">-</span>
                  <span class="text-gray-700">{{ item }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comfort Types Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-heading font-bold text-primary mb-6">{{ t('solutions.comfort.title') }}</h2>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div v-for="(comfort, index) in comfortTypes" :key="index" class="bg-gray-50 rounded-lg p-8">
              <h3 class="text-xl font-heading font-bold text-primary mb-2">{{ comfort.title }}</h3>
              <p class="text-gray-600 font-medium mb-6">{{ comfort.subtitle }}</p>
              
              <div class="space-y-2">
                <div v-for="item in comfort.items" :key="item" class="flex items-start">
                  <span class="text-primary mr-3">–</span>
                  <span class="text-gray-700 text-sm">{{ item }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-heading font-bold text-primary mb-6">{{ t('solutions.testimonialsTitle') }}</h2>
          </div>

          <div class="space-y-16">
            <div v-for="(company, index) in testimonialCompanies" :key="index" class="bg-white rounded-lg p-8 lg:p-12 shadow-sm text-center">
              <h3 class="text-2xl font-heading font-bold text-primary mb-6">{{ company.name }}</h3>
              <blockquote class="text-lg text-gray-700 italic mb-8 max-w-4xl mx-auto leading-relaxed">
                "{{ company.quote }}"
              </blockquote>
              
              <!-- Company logo placeholder -->
              <div class="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-sm text-gray-400">{{ company.logo === 'alstom' ? 'ALSTOM' : company.logo === 'saipem' ? 'SAIPEM' : 'TOTAL' }}</span>
              </div>
              
              <p class="font-medium text-primary">{{ company.author }}</p>
              <p class="text-sm text-gray-600">{{ company.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="bg-gray-50 rounded-lg p-8 lg:p-12 text-center">
            <h2 class="text-3xl font-heading font-bold text-primary mb-6">{{ t('solutions.cta.title') }}</h2>
            <p class="text-gray-700 mb-8 leading-relaxed">{{ t('solutions.cta.description') }}</p>
            <a
              :href="`tel:${t('solutions.cta.phone')}`"
              class="inline-block bg-primary hover:bg-primary-600 text-white px-8 py-4 font-heading font-semibold text-lg tracking-wide transition-colors"
            >
              {{ t('solutions.cta.phone') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
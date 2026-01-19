<script setup lang="ts">
const { t, tm } = useI18n()

const localePath = useLocalePath()

// Access arrays from translations using tm() and convert to strings
const needsItems = computed(() => {
  const items = tm('needs.items') as any[]
  return items.map(item => typeof item === 'string' ? item : item.body?.static || item.static || String(item))
})

const dzDreamStats = computed(() => {
  const items = tm('dzDream.stats') as any[]
  return items.map(item => typeof item === 'string' ? item : item.body?.static || item.static || String(item))
})

// Solutions arrays
const logisticsItems = computed(() => {
  const items = tm('solutions.logistics.items') as any[]
  return items.map(item => typeof item === 'string' ? item : item.body?.static || item.static || String(item))
})

const administrativeItems = computed(() => {
  const items = tm('solutions.administrative.items') as any[]
  return items.map(item => typeof item === 'string' ? item : item.body?.static || item.static || String(item))
})

const familyItems = computed(() => {
  const items = tm('solutions.family.items') as any[]
  return items.map(item => typeof item === 'string' ? item : item.body?.static || item.static || String(item))
})

const interculturalItems = computed(() => {
  const items = tm('solutions.intercultural.items') as any[]
  return items.map(item => typeof item === 'string' ? item : item.body?.static || item.static || String(item))
})

// Comfort arrays
const organizationItems = computed(() => {
  const items = tm('confort.organization.items') as any[]
  return items.map(item => typeof item === 'string' ? item : item.body?.static || item.static || String(item))
})

const lifeItems = computed(() => {
  const items = tm('confort.life.items') as any[]
  return items.map(item => typeof item === 'string' ? item : item.body?.static || item.static || String(item))
})

// Testimonials
const testimonialCompanies = computed(() => {
  const companies = tm('testimonials.companies') as any[]
  return companies.map(company => {
    if (typeof company === 'object' && company !== null) {
      return {
        name: typeof company.name === 'string' ? company.name : company.name?.body?.static || company.name?.static || String(company.name),
        quote: typeof company.quote === 'string' ? company.quote : company.quote?.body?.static || company.quote?.static || String(company.quote),
        author: typeof company.author === 'string' ? company.author : company.author?.body?.static || company.author?.static || String(company.author),
        position: typeof company.position === 'string' ? company.position : company.position?.body?.static || company.position?.static || String(company.position)
      }
    }
    return company
  })
})

// Stats for testimonials section
const stats = computed(() => [
  { number: '1+', label: t('testimonials.stats.clients') },
  { number: '100+', label: t('testimonials.stats.projects') },
  { number: '1+', label: t('testimonials.stats.experience') },
  { number: '1+', label: t('testimonials.stats.partners') }
])
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Section -->
    <section class="bg-primary min-h-[600px] flex items-center text-white relative overflow-hidden">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-2xl">
          <p class="text-lg mb-4 font-medium opacity-90">{{ t('hero.subtitle') }}</p>
          <h1 class="text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tight">
            {{ t('hero.title') }}
          </h1>
          <p class="text-lg leading-relaxed mb-8 opacity-90 max-w-xl">
            {{ t('hero.description') }}
          </p>
          <button class="bg-primary-700 hover:bg-primary-800 px-8 py-3 font-heading font-semibold text-sm tracking-wide transition-colors">
            {{ t('hero.cta') }}
          </button>
        </div>
      </div>
    </section>

    <!-- Needs Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="w-16 h-1 bg-primary mx-auto mb-8"></div>
          <h2 class="text-4xl font-heading font-bold text-primary mb-6">{{ t('needs.title') }}</h2>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-lg p-8 lg:p-12 shadow-sm mb-8">
            <p class="text-lg text-center text-primary font-medium mb-8">
              {{ t('needs.subtitle') }}
            </p>
          </div>
          
          <div class="space-y-4">
            <div v-for="(item, index) in needsItems" :key="index" class="flex items-start">
              <div class="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
              <p class="text-gray-700 leading-relaxed">{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-heading font-bold text-primary mb-6">{{ t('solutions.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ t('solutions.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Logistics -->
          <div class="bg-gray-50 rounded-lg p-8">
            <div class="w-12 h-12 bg-primary rounded mb-6 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h.01a1 1 0 100-2H10zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h.01a1 1 0 100-2H10z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-primary mb-6">{{ t('solutions.logistics.title') }}</h3>
            <div class="space-y-3">
              <div v-for="item in logisticsItems" :key="item" class="flex items-start">
                <span class="text-primary mr-3">-</span>
                <span class="text-gray-700 text-sm">{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- Administrative -->
          <div class="bg-gray-50 rounded-lg p-8">
            <div class="w-12 h-12 bg-primary rounded mb-6 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-primary mb-6">{{ t('solutions.administrative.title') }}</h3>
            <div class="space-y-3">
              <div v-for="item in administrativeItems" :key="item" class="flex items-start">
                <span class="text-primary mr-3">-</span>
                <span class="text-gray-700 text-sm">{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- Family -->
          <div class="bg-gray-50 rounded-lg p-8">
            <div class="w-12 h-12 bg-primary rounded mb-6 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-primary mb-6">{{ t('solutions.family.title') }}</h3>
            <div class="space-y-3">
              <div v-for="item in familyItems" :key="item" class="flex items-start">
                <span class="text-primary mr-3">-</span>
                <span class="text-gray-700 text-sm">{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- Intercultural -->
          <div class="bg-gray-50 rounded-lg p-8">
            <div class="w-12 h-12 bg-primary rounded mb-6 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-primary mb-6">{{ t('solutions.intercultural.title') }}</h3>
            <div class="space-y-3">
              <div v-for="item in interculturalItems" :key="item" class="flex items-start">
                <span class="text-primary mr-3">-</span>
                <span class="text-gray-700 text-sm">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DZ Dream Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="bg-white rounded-lg p-8">
            <div class="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span class="text-gray-400">Algeria Map Placeholder</span>
            </div>
          </div>
          
          <div>
            <h2 class="text-4xl font-heading font-bold text-primary mb-8">{{ t('dzDream.title') }}</h2>
            
            <div class="space-y-4 mb-8">
              <div v-for="stat in dzDreamStats" :key="stat" class="flex items-start">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p class="text-gray-700">{{ stat }}</p>
              </div>
            </div>
            
            <div class="space-y-4">
              <p class="text-gray-700 font-medium">{{ t('dzDream.growth') }}</p>
              <p class="text-gray-700 font-medium">{{ t('dzDream.debt') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Confort Section -->
    <section class="py-20 bg-gray-200">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-heading font-bold text-primary mb-12">{{ t('confort.title') }}</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Organizational Comfort -->
          <div class="bg-white rounded-lg p-8 lg:p-12">
            <div class="w-16 h-1 bg-primary mb-6"></div>
            <h3 class="text-2xl font-heading font-bold text-primary mb-4">{{ t('confort.organization.title') }}</h3>
            <p class="text-lg font-medium text-gray-700 mb-6">{{ t('confort.organization.subtitle') }}</p>
            
            <div class="space-y-3">
              <div v-for="item in organizationItems" :key="item" class="flex items-start">
                <span class="text-primary mr-3">–</span>
                <span class="text-gray-700">{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- Life Comfort -->
          <div class="bg-white rounded-lg p-8 lg:p-12">
            <div class="w-16 h-1 bg-primary mb-6"></div>
            <h3 class="text-2xl font-heading font-bold text-primary mb-4">{{ t('confort.life.title') }}</h3>
            <p class="text-lg font-medium text-gray-700 mb-6">{{ t('confort.life.subtitle') }}</p>
            
            <div class="space-y-3">
              <div v-for="item in lifeItems" :key="item" class="flex items-start">
                <span class="text-primary mr-3">–</span>
                <span class="text-gray-700">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ROI Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-heading font-bold text-primary mb-12">{{ t('roi.title') }}</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Perfect Understanding -->
          <div class="bg-white rounded-lg p-8">
            <div class="w-16 h-1 bg-primary mb-6"></div>
            <h3 class="text-lg font-heading font-bold text-primary mb-6 leading-tight">{{ t('roi.perfect.title') }}</h3>
            <p class="text-gray-700 mb-6 font-medium">{{ t('roi.perfect.description') }}</p>
            <p class="text-gray-600 text-sm leading-relaxed">{{ t('roi.perfect.details') }}</p>
          </div>

          <!-- Clear Management -->
          <div class="bg-white rounded-lg p-8">
            <div class="w-16 h-1 bg-primary mb-6"></div>
            <h3 class="text-lg font-heading font-bold text-primary mb-6 leading-tight">{{ t('roi.management.title') }}</h3>
            <p class="text-gray-700 mb-6 font-medium">{{ t('roi.management.description') }}</p>
            <p class="text-gray-600 text-sm leading-relaxed">{{ t('roi.management.details') }}</p>
          </div>

          <!-- Partner Centralization -->
          <div class="bg-white rounded-lg p-8">
            <div class="w-16 h-1 bg-primary mb-6"></div>
            <h3 class="text-lg font-heading font-bold text-primary mb-6 leading-tight">{{ t('roi.centralization.title') }}</h3>
            <p class="text-gray-700 mb-6 font-medium">{{ t('roi.centralization.description') }}</p>
            <p class="text-gray-600 text-sm leading-relaxed">{{ t('roi.centralization.details') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-200">
      <div class="container mx-auto px-6 lg:px-8">
        <!-- Stats -->
        <div class="mb-16">
          <h2 class="text-3xl font-heading font-bold text-primary mb-4">{{ t('testimonials.title') }}</h2>
          <p class="text-gray-600 mb-12">{{ t('testimonials.subtitle') }}</p>
          
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">{{ stat.number }}</div>
              <div class="text-sm text-gray-600">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Company Testimonials -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div v-for="company in testimonialCompanies" :key="company.name" class="bg-white rounded-lg p-6 text-center">
            <h4 class="text-lg font-heading font-bold text-primary mb-4">{{ company.name }}</h4>
            <p class="text-gray-700 mb-6 italic">"{{ company.quote }}"</p>
            
            <!-- Company logo placeholder -->
            <div class="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-xs text-gray-400">Logo</span>
            </div>
            
            <p class="font-medium text-primary">{{ company.author }}</p>
            <p class="text-sm text-gray-600">{{ company.position }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="bg-white rounded-lg p-8 lg:p-12">
          <div class="max-w-4xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div class="lg:col-span-2">
                <h2 class="text-3xl font-heading font-bold text-primary mb-6">{{ t('cta.title') }}</h2>
                <p class="text-gray-700 leading-relaxed">{{ t('cta.description') }}</p>
              </div>
              
              <div class="text-center lg:text-right">
                <a
                  :href="`tel:${t('cta.phone')}`"
                  class="inline-block bg-primary hover:bg-primary-600 text-white px-8 py-3 font-heading font-semibold text-sm tracking-wide transition-colors"
                >
                  {{ t('cta.phone') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

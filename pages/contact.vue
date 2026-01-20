<script setup lang="ts">
const { t, tm } = useI18n()

// Extract services array from translations
const services = computed(() => {
  try {
    const items = tm('contact.info.services') as any[]
    if (Array.isArray(items)) {
      return items.map((item, index) => {
        // Handle different possible formats
        if (typeof item === 'string') {
          return item
        }
        // Try to get the actual translation value using the index
        return t(`contact.info.services.${index}`)
      })
    }
    // Fallback: directly access array items by index
    return [
      t('contact.info.services.0'),
      t('contact.info.services.1'),
      t('contact.info.services.2'),
      t('contact.info.services.3')
    ]
  } catch (error) {
    console.error('Error loading services:', error)
    // Ultimate fallback
    return [
      'Complete expatriation planning and logistics',
      'Administrative assistance and legal compliance',
      'Housing and family integration services',
      'Ongoing support and consultation'
    ]
  }
})

// Form data
const form = ref({
  name: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)

// Handle form submission
const handleSubmit = async () => {
  isSubmitting.value = true
  // Add form submission logic here
  setTimeout(() => {
    isSubmitting.value = false
    // Reset form or show success message
  }, 1000)
}
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Section -->
    <section class="py-20 bg-primary text-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <p class="text-lg mb-4 font-medium opacity-90">{{ t('contact.hero.subtitle') }}</p>
          <h1 class="text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tight">
            {{ t('contact.hero.title') }}
          </h1>
          <p class="text-lg leading-relaxed opacity-90 max-w-3xl mx-auto">
            {{ t('contact.hero.description') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form and Details Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Left Column - Contact Form -->
            <div>
              <div class="text-left mb-8">
                <h2 class="text-4xl font-heading font-bold text-primary mb-4">{{ t('contact.form.title') }}</h2>
                <p class="text-lg text-gray-600">{{ t('contact.form.description') }}</p>
              </div>

              <div class="bg-white rounded-lg p-8 shadow-sm">
                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <div class="grid grid-cols-1 gap-6">
                    <!-- Name -->
                    <div>
                      <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                        {{ t('contact.form.name') }}
                      </label>
                      <input
                        v-model="form.name"
                        type="text"
                        id="name"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      />
                    </div>

                    <!-- Email -->
                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                        {{ t('contact.form.email') }}
                      </label>
                      <input
                        v-model="form.email"
                        type="email"
                        id="email"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      />
                    </div>

                    <!-- Company -->
                    <div>
                      <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                        {{ t('contact.form.company') }}
                      </label>
                      <input
                        v-model="form.company"
                        type="text"
                        id="company"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      />
                    </div>

                    <!-- Phone -->
                    <div>
                      <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                        {{ t('contact.form.phone') }}
                      </label>
                      <input
                        v-model="form.phone"
                        type="tel"
                        id="phone"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      />
                    </div>

                    <!-- Service Selection -->
                    <div>
                      <label for="service" class="block text-sm font-medium text-gray-700 mb-2">
                        {{ t('contact.form.service') }}
                      </label>
                      <select
                        v-model="form.service"
                        id="service"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      >
                        <option value="">{{ t('contact.form.service') }}</option>
                        <option value="logistics">{{ t('contact.form.services.logistics') }}</option>
                        <option value="administrative">{{ t('contact.form.services.administrative') }}</option>
                        <option value="family">{{ t('contact.form.services.family') }}</option>
                        <option value="intercultural">{{ t('contact.form.services.intercultural') }}</option>
                        <option value="consultation">{{ t('contact.form.services.consultation') }}</option>
                      </select>
                    </div>

                    <!-- Message -->
                    <div>
                      <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                        {{ t('contact.form.message') }}
                      </label>
                      <textarea
                        v-model="form.message"
                        id="message"
                        rows="4"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                      ></textarea>
                    </div>

                    <!-- Submit Button -->
                    <div>
                      <button
                        type="submit"
                        :disabled="isSubmitting"
                        class="w-full bg-primary hover:bg-primary-600 text-white px-8 py-3 font-heading font-semibold text-lg tracking-wide transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span v-if="!isSubmitting">{{ t('contact.form.submit') }}</span>
                        <span v-else>Sending...</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <!-- Right Column - Contact Details -->
            <div>
              <div class="text-left mb-8">
                <h2 class="text-4xl font-heading font-bold text-primary mb-4">{{ t('contact.details.title') }}</h2>
                <p class="text-lg text-gray-700 mb-8 leading-relaxed">{{ t('contact.info.description') }}</p>
              </div>

              <div class="bg-white rounded-lg p-8 shadow-sm mb-8">
                <div class="space-y-6">
                  <!-- Address -->
                  <div class="flex items-start">
                    <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-primary mb-1">{{ t('contact.details.address.title') }}</h4>
                      <p class="text-gray-600 text-sm">{{ t('contact.details.address.line1') }}</p>
                      <p class="text-gray-600 text-sm">{{ t('contact.details.address.line2') }}</p>
                    </div>
                  </div>

                  <!-- Phone -->
                  <div class="flex items-start">
                    <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-primary mb-1">{{ t('contact.details.phone.title') }}</h4>
                      <a :href="`tel:${t('contact.details.phone.number')}`" class="text-gray-600 text-sm hover:text-primary transition-colors">
                        {{ t('contact.details.phone.number') }}
                      </a>
                    </div>
                  </div>

                  <!-- Email -->
                  <div class="flex items-start">
                    <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-primary mb-1">{{ t('contact.details.email.title') }}</h4>
                      <a :href="`mailto:${t('contact.details.email.address')}`" class="text-gray-600 text-sm hover:text-primary transition-colors">
                        {{ t('contact.details.email.address') }}
                      </a>
                    </div>
                  </div>

                  <!-- Business Hours -->
                  <div class="flex items-start">
                    <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-primary mb-1">{{ t('contact.details.hours.title') }}</h4>
                      <p class="text-gray-600 text-sm">{{ t('contact.details.hours.weekdays') }}</p>
                      <p class="text-gray-600 text-sm">{{ t('contact.details.hours.weekend') }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Services List -->
              <div class="bg-white rounded-lg p-8 shadow-sm">
                <h3 class="text-xl font-heading font-bold text-primary mb-6">{{ t('contact.info.title') }}</h3>
                <div class="space-y-4">
                  <div v-for="(service, index) in services" :key="index" class="flex items-start">
                    <div class="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p class="text-gray-700 text-sm">{{ service }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary text-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl lg:text-4xl font-heading font-bold mb-6">{{ t('cta.title') }}</h2>
          <p class="text-lg leading-relaxed mb-8 opacity-90">{{ t('cta.description') }}</p>
          <a
            :href="`tel:${t('cta.phone')}`"
            class="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 font-heading font-semibold text-lg tracking-wide transition-colors"
          >
            {{ t('cta.phone') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
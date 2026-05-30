// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/devtools',
    'magic-regexp',
    '@formkit/auto-animate',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'dayjs-nuxt',
    '@nuxtjs/device',
    '@vercel/speed-insights'
  ],

  i18n: {
    defaultLocale: 'en',
  },
  
  vite: {
    optimizeDeps: {
      include: [
        'nuxt > @nuxt/devtools > @vitejs/devtools-kit/client',
        'nuxt > @nuxt/devtools > @vitejs/devtools/client/inject',
        'nuxt > @nuxt/devtools > @vue/devtools-core',
        'nuxt > @nuxt/devtools > @vue/devtools-kit',
        'nuxt > @nuxt/devtools > error-stack-parser-es',
        'nuxt > @nuxt/devtools > vite-plugin-vue-tracer/client/overlay',
      ]
    }
  }
})
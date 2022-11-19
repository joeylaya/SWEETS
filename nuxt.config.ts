export default defineNuxtConfig({
  modules: [
    'nuxt-windicss',
    '@nuxtjs/supabase',
    '@nuxt/content',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore']
      }
    ]
  ],
  content: {
    highlight: {
      theme: {
        default: 'material-lighter',
        dark: 'one-dark-pro',
        light: 'material-lighter'
      },
      preload: [ 'python' ]
    }
  },
  imports: {
    dirs: ['stores']
  },
  runtimeConfig: {
    public: {
      storageUrl: process.env.STORAGE_URL
    }
  }
})

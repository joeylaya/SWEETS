export default defineNuxtConfig({
  modules: [
    'nuxt-windicss',
    '@nuxtjs/supabase',
    [
      '@nuxt/content',
      {
        highlight: {
          theme: {
            default: 'material-lighter',
            dark: 'one-dark-pro',
            light: 'material-lighter'
          },
          preload: [ 'python' ]
        }
      }      
    ],
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore']
      }
    ]
  ],
  imports: {
    dirs: ['stores']
  },
  runtimeConfig: {
    public: {
      storageUrl: process.env.STORAGE_URL
    }
  },
  css: [
    '@/assets/app.css'
  ]
})

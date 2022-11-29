export default defineNuxtConfig({
  hooks: {
    'vite:extendConfig'(config, { isServer }) {
      if (isServer) {
        // Workaround for netlify issue
        // https://github.com/nuxt/framework/issues/6204
        config.build.rollupOptions.output.inlineDynamicImports = true
      }
    }
  },  
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

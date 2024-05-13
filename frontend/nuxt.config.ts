// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    plugins: [
      { src: '~/plugins/vue-stripe.js', ssr: false },
    ],
    env: {
      STRIPE_PK: process.env.STRIPE_PK,
    },
    public: {
      baseUrl: 'https://arthub-api-polished-breeze-902.fly.dev/api/v1/'
      // baseUrl: 'http://localhost:8000/api/v1/'
    }
  },
    modules: [
        // '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxt/ui',
        '@pinia-plugin-persistedstate/nuxt',
        'nuxt-icon',
    ],
    ui: {
      global: true,
      icons: ['heroicons', 'carbon']
    },
    pinia: {
      storesDirs: ['./stores/**'],
    },
    tailwindcss: {
        cssPath: '~/assets/css/input.css'
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    sourcemap: {
      server: true,
      client: true
    },
    colorMode: {
      preference: 'light'
    },
    devtools: {
      timeline: {
        enabled: true
      }
    },
    app: {
      head: {
        link: [
          { rel: "icon", type: "image/png", href: "/favicon.ico" }
        ]
    }
  },
})

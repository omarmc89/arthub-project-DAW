// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
      }
})

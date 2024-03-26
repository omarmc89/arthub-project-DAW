// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
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
      }
})

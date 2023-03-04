// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  typescript: {
    shim: false,
  },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
});

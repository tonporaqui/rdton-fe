// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-icon", "@nuxt/image",'@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  css: [
    '~/assets/styles/main.scss'
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    classSuffix: '',
  }
});

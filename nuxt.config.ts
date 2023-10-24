// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  components: {
    dirs: [],
  },

  modules: ["nuxt-primevue"],

  css: [
    "~/assets/stylesheets/main.scss",
    "primevue/resources/themes/lara-light-teal/theme.css",
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '~/assets/stylesheets/scss/_colors.scss' as *;
          @use '~/assets/stylesheets/scss/_breakpoints.scss' as *;`,
        },
      },
    },
  },

  primevue: {
    usePrimeVue: true,

    options: {
      ripple: true,
      inputStyle: "filled",
    },

    components: {
      prefix: "Prime",
      include: "*",
    },

    directives: {
      include: "*",
    },

    composables: {
      include: "*",
    },
  },

  app: {
    head: {
      title: "minible-dashboard",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});

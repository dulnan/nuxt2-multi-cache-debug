export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "debug-nuxt2-cache",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    '@nuxtjs/pwa',
    "nuxt-multi-cache",
  ],
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "es",
        name: "Español",
      },
      {
        code: "fr",
        name: "Français",
      },
    ],
    defaultLocale: "en",
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    parsePages: false,
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          welcome: "Welcome",
        },
        fr: {
          welcome: "Bienvenue",
        },
        es: {
          welcome: "Bienvenido",
        },
      },
    },
  },

  multiCache: {
    enabled: true,
    outputDir: "./cache",
    debug: true,
    server: {
      auth(req) {
        return true;
      },
    },
    pageCache: {
      enabled: true,
    },
    dataCache: {
      enabled: true,
    },

    componentCache: {
      enabled: true,
      lruOptions: {
        max: 1000,
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
      },
    },
  },
};

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Laura SIBILLE - UX Designer Portfolio',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: `UX RESEARCH / DESIGN - My name is Laura SIBILLE and I'm a user experience designer & researcher rooted in psychology. I strive to tell stories that humanize the head with the ♡.`,
      },
      {
        name: 'msapplication-TileColor',
        content: '#da532c',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css',
        integrity:
          'sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==',
        crossorigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/bootstrap-4-grid@3/css/grid.min.css',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/icons/favicon/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '180x180',
        href: '/img/icons/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/icons/favicon/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/img/icons/favicon/site.webmanifest',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-186822802-1',
      },
    ],
  ],

  styleResources: {
    scss: [
      '~/assets/scss/breakpoints.scss',
      '~/assets/scss/colors.scss',
      '~/assets/scss/typography.scss',
      '~/assets/scss/portfolio_layout.scss',
      '~/assets/scss/layout.scss',
      '~/assets/scss/animations.scss',
    ],
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics',
    'vue-scrollto/nuxt',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true,
        preserveLineBreaks: false,
        collapseWhitespace: true,
      },
    },
  },
}

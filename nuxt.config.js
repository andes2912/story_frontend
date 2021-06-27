export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  mode: 'spa',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Story of Andri Desmana',
    htmlAttrs: {
      lang: 'id'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Story of Andri Desmana - Andes2912' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/me.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css' },
      { rel: 'stylesheet', type: 'text/css', href:'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap'}

    ],
    script: [
      { src: "/bootstrap/bootstrap.min.js", async: "async", type: "text/javascript" },
      { src: "/bootstrap/jquery-3.5.1.slim.min.js", async: "async", type: "text/javascript" },
      { src: "/bootstrap/popper.min.js", async: "async", type: "text/javascript" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/bootstrap.min.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/vue-quill-editor.js", ssr: false }
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  axios: {
    baseURL: process.env.NODE_ENV === "production" ? "https://api.andridesmana.pw/api" : "http://127.0.0.1:8002/api"
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'token' },
          user: { url: 'profile', method: 'get', propertyName: 'user' },
          logout: false
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

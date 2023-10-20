// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/custom.css', '~/assets/scss/app.scss'],
  app: {
    head: {
      title: 'My Blog Portal',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: "description",
          content: "My blog portal contains generic article on green energy"
        },
        {
          name: "keywords",
          content: "blog, articles, portal, green energy"
        },
        {
          name: "og:title",
          content: "My Blog Portal"
        },
        {
          name: "og:description",
          content: "My blog portal contains generic article on green energy"
        },
        {
          name: "og:site_name",
          content: "My Blog Portal"
        },
        {
          name: "twitter:title",
          content: "My Blog Portal"
        },
        {
          name: "twitter:description",
          content: "My blog portal contains generic article on green energy"
        },
        {
          name: "og:image",
          content: "http://localhost:3000/imgs/logo.png"
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'
        }
      ],
      script: [
        {
          type: "text/javascript",
          src: "js/custom.js"
        }
      ]
    },
    pageTransition: {name: 'page', mode: 'out-in'},
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    secretKey: '',
    public: {
      apiBase: ''
    }
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Lalan | Nuxt.js Project',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon/favicon.png' },
        {
          rel: 'stylesheet',
          href: '/css/bootstrap.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/css/external.css'
        },
        {
          rel: 'stylesheet',
          href: '/css/style.css'
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i%7CPoppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i' },

      ],
      script: [
        // { src: '/js/jquery-2.2.4.min.js'},
        // { src: '/js/plugins.js'},
        // { src: '/js/functions.js'}
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      meta: [
        {
          name: 'description',
          content: 'Nuxt Js Project'
        }
      ]

    },
  },

  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ar', name: 'العربية', file: 'ar.json' }
    ]
  },
})
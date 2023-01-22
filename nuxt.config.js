import pkg from './package.json'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Creativity & Brand Experience Reimagined | ICON",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "p:domain_verify", content: "edb35027c7b02f730c5fbea295b14924" },
      { hid: 'og:image', property: 'og:image', content: "/icon.png" },
      {
        hid: "title",
        name: "title",
        content: "Creativity & Brand Experience Reimagined | ICON"
      },
      {
        hid: "description",
        name: "description",
        content:
          "A creative advertising, branding, and digital agency located in Dubai, U.A.E. provides professional services to help clients reach their marketing and business objectives."
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "marketing strategy, graphic design, brochure design, advertising agencies in dubai, advertising companies in dubai, branding agency dubai, digital marketing agency dubai, digital marketing companies dubai, event management companies in dubai, event companies in dubai, digital marketing, web design, seo company dubai, web development companies in dubai, web design company dubai, digital agency dubai, creative agency dubai, motion graphics, 3d rendering, social media strategy"
      }
    ],
    __dangerouslyDisableSanitizers: ["script"],
    script: [
      {
        hid: "gtm-script1",
        src: "https://www.googletagmanager.com/gtag/js?id=UA-118585551-1",
        defer: true
      },
      {
        hid: "gtm-script2",
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-118585551-1')
        `,
        type: "text/javascript",
        charset: "utf-8"
      },
      {
        hid: "gtm-script1",
        src: "https://www.googletagmanager.com/gtag/js?id=AW-965823247",
        defer: true
      },
      {
        hid: "gtm-script4",
        innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-965823247');
        `,
        type: "text/javascript",
        charset: "utf-8"
      }
    ]
  },

  version: pkg.version,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/style.css",
    "~/assets/css/fonts.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-tel-input"},
    { src: "~/plugins/vimeo-player", mode: "client" },
    { src: "~/plugins/vue-carousel", mode: "client" },
    { src: "~/plugins/vue-siema", mode: "client" },
    { src: "~/plugins/vue-scroll", mode: "client" },
    { src: "~/plugins/vue-progressive-image", mode: "client" },
    { src: "~/plugins/vue-gsap", mode: "client" },
    { src: "~/plugins/vue-smooth-scrollbar", mode: "client" },
    { src: "~/plugins/vue-masonry", mode: "client" }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    'nuxt-ssr-cache',
    '@nuxtjs/sitemap',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    middleware: ["visit"],
  },

  axios: {
    baseURL: 'https://drupal.icon-ad.com/api', // Used as fallback if no runtime config is provided
  },

  server: {
    port: 4600 // default: 3000
  },

  loading: {
    color: '#A97DEC',
    height: '5px'
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://icon-ad.com',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    routes: [
      '/',
      '/about',
      '/contact',
      '/branding',
      '/services',
      '/expertise',
      '/digital',
      '/projects',
      '/clients',
      '/ideas',
      '/ideas/top-5-digital-marketing-trends-to-get-ahead-of-in-2023',
      '/ideas/how-to-create-your-brand-persona',
      '/ideas/the-ultimate-guide-to-video-advertising-in-2023',
      '/ideas/7-ways-to-use-interactive-content-to-increase-conversion-rate-in-2022',
      '/ideas/the-importance-of-colors-in-marketing-and-advertising',
      '/ideas/how-to-develop-a-successful-social-media-strategy-in-5-simple-steps',
      '/ideas/why-is-it-important-to-follow-a-brand-style-guide-for-your-business',
      '/ideas/5-tips-to-hire-the-best-ecommerce-website-design-agency-in-dubai',
      '/ideas/top-5-tips-on-how-to-get-more-engagement-on-social-media',
      '/ideas/7-reasons-why-video-content-is-important-for-your-business',
      '/ideas/top-6-social-media-content-ideas-for-small-brands',
      '/ideas/how-to-increase-your-social-media-reach-in-2022-and-beyond',
      '/ideas/top-3-reasons-why-you-should-invest-in-best-automotive-marketing-agency-in-dubai',
      '/ideas/the-importance-of-design-in-your-marketing-efforts',
      '/ideas/top-5-reasons-why-visual-content-dominate-in-2022',
      '/ideas/3-creative-ways-to-draw-your-customers-attention-in-2022',
      '/ideas/7-tips-to-promote-luxury-brand-in-dubai-by-icon-advertising-agency',
      '/ideas/10-steps-to-build-your-brand-in-dubai-in-2022',
      '/ideas/6-Steps-to-Introduce-your-New-Business-on-Social Media',
      '/ideas/hire-the-best-facebook-marketing-agency-in-dubai',
      '/ideas/hiring-the-best-google-ads-ppc-agency-in-dubai-in-2022',
      '/ideas/eCommerce-SEO-Agency-in-Dubai-Best-SEO-Tips-for-Online-Store-in-2022',
      '/ideas/boost-your-sales-with-result-oriented-seo-services-in-dubai',
      '/ideas/10-tips-to-design-a-great-landing-page-in-2022',
      '/ideas/7-reasons-why-your-business-needs-Digital-marketing-than-ever-before',
      '/ideas/Top-5-Creative-advertising-ideas-to-use-in-2021',
      '/ideas/5-Creative-Automotive-Marketing-Strategies-and-ideas',
      '/ideas/Top-5-Social-Media-Platforms-to-Market-Your-Business-in-2021',
      '/ideas/Why-Facebook-Advertising-is-important-for-your-business-and-how-to-choose-the-right-agency',
      '/ideas/top-6-benefits-of-youtube-advertising-for-your-business-in-2021',
      '/ideas/10-tips-on-how-to-get-the-ideal-website-for-your-business-in-2022',
      '/ideas/digital-marketing-vs-traditional-marketing-which-one-you-should-choose',
      '/ideas/top-5-ppc-benefits-choosing-the-best-google-ads-agency-in-dubai',
      '/ideas/9-benefits-of-video-ads-for-brand-awareness',
      '/ideas/google-ads-vs-facebook-ads-which-one-you-should-choose',
      '/ideas/The-Benefits-of-Display-Advertising-for-Your-Brand',
      '/ideas/7-reasons-why-seo-is-beneficial-for-your-business-in-2022',
      '/ideas/Top-3-Digital-Mediums-to-Generate-Leads-in-2021',
      '/ideas/Hire-The-Right-Snapchat-Advertising-Agency-in-Dubai',
      '/ideas/selecting-the-best-tiktok-advertising-agency-in-dubai',
      '/ideas/are-you-looking-for-3d-modeling-agency-in-dubai',
      '/ideas/social-media-packages-in-dubai-step-by-step-guide',
      '/ideas/top-performance-marketing-agency-in-dubai-2022',
      '/ideas/6-Actionable-tips-to-improve-your-Social-media-performance-in-2022',
      '/ideas/9-Creative-Social-Media-Contest-Ideas-to-Use-in-2022',
      '/ideas/10-creative-advertising-ideas-to-use-in-2023-to-stay-ahead'
    ].map(route => ({
      url: route,
      changefreq: 'monthly',
      priority: 1,
      lastmodISO: new Date().toISOString().split('T')[0]
    }))
  },

  cache: {
    useHostPrefix: false,
    pages: [
      '/',
    ],
    store: {
      type: 'memory',
      max: 100,
      ttl: 60,
    },
  },


  gtm: {
    id: 'GTM-MV67C85', // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    }
  },


}

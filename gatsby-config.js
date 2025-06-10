module.exports = {
  siteMetadata: {
    siteUrl: "https://omeralmas.com",
    title: "Omer Almas",
    description: ``,
    twitterUsername: `@processton`,
    image: `/static/images/logo.jpg`,
  },
  plugins: [
    'gatsby-plugin-recaptcha',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        resolveSiteUrl: () =>
          process.env.GATSBY_WEB_URL || 'http://localhost:8000',
      },
    },
    {
      resolve: `gatsby-plugin-decap-cms`,
      options: {
        manualInit: true,
        modulePath: `${__dirname}/cms/cms.js`,
        enableIdentityWidget: true,
        htmlTitle: `Content Manager - Omer Almas`,
        htmlFavicon: `static/images/logo.jpg`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: `Json`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: `Images`,
      },
    },
    `gatsby-transformer-json`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Omer Almas`,
        short_name: `Omer Almas`,
        start_url: `/`,
        background_color: `#0c4773`,
        theme_color: `#0c4773`,
        display: `standalone`,
        icon: `static/images/logo.jpg`, 
      },
    },
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        specialChars: '/:',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.GATSBY_WEB_URL || 'http://localhost:8000',
        sitemap: (process.env.GATSBY_WEB_URL || 'http://localhost:8000') + '/sitemap-0.xml',
        policy: [{userAgent: '*', disallow: [
          
        ]}]
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: "gatsby-plugin-sitemap",
      excludes: [
        
      ]
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GATSBY_GOOGLE_GA || "GA-TRACKING_ID", // Google Analytics / GA
          process.env.GATSBY_GOOGLE_AW_CONVERSION_ID || "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          process.env.GATSBY_GOOGLE_DC_FLOODIGHT_ID || "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: process.env.GATSBY_GOOGLE_OPT_CONTAINER_ID || "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "https://www.googletagmanager.com",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
    "gatsby-plugin-postcss"
  ],
};

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.heedful.co`,
    title: `Heedful`,
    description: `A financial news aggregate covering market trends, stocks, technology and more.`,
    author: `Heedful`,
  },

  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.heedful.co",
        sitemap: "https://www.heedful.co/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Heedful`,
        short_name: `Heedful`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Sans`,
            variants: [`400`, `700`],
          },
          {
            family: `Source Serif Pro`,
            variants: [`600`],
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-source-mongodb",
      options: {
        connectionString: process.env.CONNEC_STRING,
        dbName: "cluster0",
        collection: [
          "intros",
          "links",
          "covids",
          "events",
          "markets",
          "podcasts",
          "politics",
          "ipos",
          "technologies",
          "tickers",
        ],

        extraParams: {
          ssl: true,
          retryWrites: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        whitelist: [
          "section-heading-container-light",
          "section-heading-container-light::before",
          "section-heading-container-light::after",
          "on-section-heading-light",
        ],
      },
    },
    // https://github.com/graysonhicks/gatsby-plugin-remote-images/issues/2
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "mongodbCluster0Markets",
        imagePath: "image_url",
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "mongodbCluster0Events",
        imagePath: "image_url",
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "mongodbCluster0Technologies",
        imagePath: "image_url",
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "mongodbCluster0Ipos",
        imagePath: "image_url",
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "mongodbCluster0Politics",
        imagePath: "image_url",
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "mongodbCluster0Covids",
        imagePath: "image_url",
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "mongodbCluster0Tickers",
        imagePath: "image_url",
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "mongodbCluster0Podcasts",
        imagePath: "image_url",
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "mongodbCluster0Intros",
        imagePath: "image_url",
      },
    },
  ],
}

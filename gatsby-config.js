module.exports = {
  pathPrefix: "/techtogether",
  siteMetadata: {
    siteUrl: "https://boston.techtogether.io",
    title: "TTB2021-virtual",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-150897843-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name:  `TechTogetherBoston`,
        short_name:  `TTB`,
        start_url: `/`,
        background_color: `#cea3fa`,
        theme_color: `#181d45`,
        display: `standalone`,
        icon:  `src/images/icon.png`,
      }
    }
  ],
};

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://albgarciam.github.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/icon-logo.svg",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};

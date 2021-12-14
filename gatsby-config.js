module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "landingpage",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#00BFA6",
        },
      },
    },
  ],
};

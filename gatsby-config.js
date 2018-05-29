module.exports = {
  siteMetadata: {
    title: `HankLiu's Website`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
  ],
};


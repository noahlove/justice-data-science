module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ],
        plugins: ['gatsby-remark-images'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/images`,
      },
    },
    {
      resolve: "smooth-doc",
      options: {
        name: "Data Humanities",
        description: "A place to explore problems and biases in modern data science",
        siteUrl: "https://datahumanities.com",
        author: 'Noah Love',
        sections: ['Review', 'Real and Complex Number Systems', 'Basic Topology', 'Numerical Sequences and Series'],
        twitterAccount: 'noahjameslove',
        githubRepositoryURL: 'https://github.com/noahlove/math-notes'
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158190143-5",
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },

  ],
};

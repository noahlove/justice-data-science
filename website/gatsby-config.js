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
        name: "Modern Analysis Notes",
        description: "A large collection of Modern Analysis Notes and Helpful descriptions",
        siteUrl: "https://example.com",
        author: 'Noah Love',
        sections: ['Review', 'Real and Complex Number Systems', 'Basic Topology', 'Numerical Sequences and Series'],
        twitterAccount: 'noahjameslove',
        githubRepositoryURL: 'https://github.com/noahlove/math-notes'
      },
    },
  ],
};

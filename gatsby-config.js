module.exports = {
  pathPrefix: "/gatsby-material-ui-business-starter",
  siteMetadata: {
    title: "Gatsby Material UI Business Starter",
    contact: {
      phone: "503-555-1111",
      email: "hi@foxandgeese.com",
    },
    menuLinks: [
      {
        name: "Products",
        link: "/products",
      },
      {
        name: "Team",
        link: "/team",
      },
    ],
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stylus",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: 'gatsby-plugin-tinacms',
      options: {
        sidebar: {
          hidden: process.env.NODE_ENV === "production",
          position: "displace",
        },
        plugins: [
          // We'll add some Tinacms plugins in the next step.
        ],
      },
    },
  ],
};

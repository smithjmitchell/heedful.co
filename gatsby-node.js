exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allMongodbCluster0Markets(limit: 5,
        sort: {fields: [mongodb_id], order: DESC}
        ) {
        edges {
          node {
            text
            source_name
            news_url
            title
            id
          }
        }
      }
      allMongodbCluster0Covids(limit: 4,
        sort: {fields: [mongodb_id], order: DESC}
        ) {
        edges {
          node {
            text
            source_name
            news_url
            title
            id
          }
        }
      }
      allMongodbCluster0Podcasts(limit: 3,
        sort: {fields: [mongodb_id], order: DESC}
        ) {
        edges {
          node {
            text
            source_name
            news_url
            title
            id
          }
        }
      }
      allMongodbCluster0Tickers(limit: 5,
        sort: {fields: [mongodb_id], order: DESC}
        ) {
        edges {
          node {
            text
            source_name
            news_url
            title
            id
          }
        }
      }
      allMongodbCluster0Technologies(limit: 4,
        sort: {fields: [mongodb_id], order: DESC}
        ) {
        edges {
          node {
            text
            source_name
            news_url
            title
            id
          }
        }
      }
      allMongodbCluster0Events(limit: 3,
        sort: {fields: [mongodb_id], order: DESC}
        ) {
        edges {
          node {
            text
            source_name
            news_url
            title
            id
          }
        }
      }
      allMongodbCluster0Intros(limit: 1,
        sort: {fields: [mongodb_id], order: DESC}
        ) {
        edges {
          node {
            text
            source_name
            news_url
            title
            id
          }
        }
      }
      allMongodbCluster0Ipos(limit: 4,
        sort: {fields: [mongodb_id], order: DESC}
        ) {
        edges {
          node {
            text
            source_name
            news_url
            title
            id
          }
        }
      }
      allMongodbCluster0Politics(limit: 5,
        sort: {fields: [mongodb_id], order: DESC}
        ) {
        edges {
          node {
            text
            source_name
            news_url
            title
            id
          }
        }
      }
    }
  `)

  for (const schema in results.data) {
    results.data[schema].edges.forEach(edge => {
      const product = edge.node

      createPage({
        path: `/discussion/${product.id}/`,
        component: require.resolve(`./src/templates/product-graphql.js`),
        context: {
          id: product.id,
        },
      })
    })
  }
}

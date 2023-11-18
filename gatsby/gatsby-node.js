// gatsby-node.js
const fetchArticleByCategory = path.resolve(`./src/pages/[...].js`);
allStrapiArticle.edges.forEach((edge) => {
  createPage({
    path: `/${edge.node.slug}/`,
    component: slash(fetchArticleByCategory),
    context: {
      id: edge.node.slug,
    },
  });
});

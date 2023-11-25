const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const postsRequest = await graphql(
    `
      {
        allStrapiArticle {
          nodes {
            id
          }
        }
      }
    `
  );

  if (postsRequest.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`, posts.errors);
    return;
  }

  const blogTemplate = path.resolve(`./src/templates/BlogPost.jsx`);
  const posts = postsRequest.data.allStrapiArticle.nodes;

  posts.forEach((post) => {
    createPage({
      path: `/post/${post.id}`,
      component: blogTemplate,
      context: {
        id: post.id,
      },
    });
  });
};

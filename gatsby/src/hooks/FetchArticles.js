import { graphql, useStaticQuery } from "gatsby";

const FetchArticles = () =>
  useStaticQuery(graphql`
    query fetchArticles {
      allStrapiArticle {
        nodes {
          id
          title
          cover {
            url
          }
          publishedAt
          tags {
            name
          }
        }
      }
    }
  `);

export default FetchArticles;

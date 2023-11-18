import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const TestPage = () => {
  const data = useStaticQuery(graphql`
    query staticSrvsrcpagestestJsxCombined {
      allStrapiArticle {
        nodes {
          id
          title
          publishedAt
          tags {
            name
          }
        }
      }
    }
  `);

  // // Fetch Tag by Name
  // const tagDetails = useStaticQuery(graphql`
  //   query {
  //     strapiTag(name: { eq: "" }) {
  //       id
  //       name
  //     }
  //   }
  // `);

  // // Fetch Articles by Tag ID
  // const blogList = useStaticQuery(graphql`
  //   query {
  //     strapiTag(id: { eq: "" }) {
  //       id
  //       name
  //       articles {
  //         title
  //         createdAt
  //         cover {
  //           url
  //         }
  //       }
  //     }
  //   }
  // `);

  // // Fetch Articles top 3 by Tag ID
  // const top3Blog = useStaticQuery(graphql`
  //   query {
  //     strapiArticle(tags: { elemMatch: { id: { eq: "" } } }) {
  //       id
  //       tags {
  //         name
  //         id
  //         updatedAt
  //       }
  //       title
  //       content {
  //         data {
  //           content
  //         }
  //       }
  //     }
  //   }
  // `);

  // // Fetch Articles by ID
  // const articlePageData = useStaticQuery(graphql`
  //   query {
  //     strapiArticle(id: { eq: "" }) {
  //       id
  //       tags {
  //         name
  //         id
  //         updatedAt
  //       }
  //       title
  //       content {
  //         data {
  //           content
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <main>
      {data.allStrapiArticle.nodes.map((article) => {
        return (
          <div>
            {article.id} <br />
            {article.title}
          </div>
        );
      })}
      <br />
      {data.allStrapiTag.nodes.map((article) => {
        return (
          <div>
            {article.id} <br />
            {article.name}
          </div>
        );
      })}
    </main>
  );
};

export default TestPage;

import * as React from "react";
import { MainLayout } from "../components/layouts";
import { BlogGrid, BlogGridItem } from "../components/category";
import { useStaticQuery, graphql } from "gatsby";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width: "100%",
  overflow: "auto",
};

const HowToPage = () => {
  const articles = useStaticQuery(graphql`
    query fetchHowToArticles {
      allStrapiArticle(
        filter: { tags: { elemMatch: { name: { eq: "How-To" } } } }
      ) {
        nodes {
          id
          title
          publishedAt
          tags {
            name
          }
          cover {
            url
          }
        }
      }
    }
  `);

  const posts = articles.allStrapiArticle.nodes.map((node) => ({
    id: node.id,
    title: node.title,
    date: node.publishedAt,
    cover: node.cover.url,
    tags: node.tags.map((tag) => tag.name),
  }));

  return (
    <main style={pageStyles}>
      <MainLayout>
        <div class="w-full h-fit min-h-screen">
          <BlogGrid>
            {posts.map((post) => (
              <BlogGridItem
                key={post.title}
                cover={post.cover}
                title={post.title}
                date={post.date}
                tags={post.tags}
              />
            ))}
          </BlogGrid>
        </div>
      </MainLayout>
    </main>
  );
};

export default HowToPage;

export const Head = () => <title>How-To | German III Blog</title>;

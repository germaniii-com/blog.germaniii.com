import * as React from "react";
import { MainLayout } from "../components/layouts";
import { BlogGrid, BlogGridItem } from "../components/category";
import { blogListPages } from "../constants";
import { navigate } from "gatsby";
import FetchArticles from "../hooks/FetchArticles";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width: "100%",
  overflow: "auto",
};

const CategoryPage = ({ params }) => {
  const pageName = params["*"];
  const articles = FetchArticles();
  const isValidPage = blogListPages.some(
    (blogItemName) => blogItemName.toLowerCase() === pageName.toLowerCase()
  );

  if (!isValidPage) {
    navigate("/");
    return;
  }

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

export default CategoryPage;

export const Head = () => <title>Blogs Page</title>;

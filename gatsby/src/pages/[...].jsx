import * as React from "react";
import { MainLayout } from "../components/layouts";
import { BlogGrid, BlogGridItem } from "../components/category";
import { blogListPages } from "../constants";
import { navigate } from "gatsby";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width: "100%",
  overflow: "auto",
};

const posts = [
  {
    title: "Setting up your Linux Desktop Environment",
    date: "October 23, 2023",
  },
  {
    title: "Formatting Drives with fdisk",
    date: "May 1, 2023",
  },
  {
    title: "Preserving configurations across distros",
    date: "June 5, 2022",
  },
  {
    title: "A day in the life of a software engineer",
    date: "December 6, 2022",
  },
  {
    title: "Why I switched from IDEs to the tmux + nvim",
    date: "December 20, 2021",
  },
  {
    title: "Learning how to Program",
    date: "October 23, 2023",
  },
  {
    title: "How to not hate CSS",
    date: "January 23, 2023",
  },
  {
    title: "Australia, a trip",
    date: "August 13, 2023",
  },
];

const CategoryPage = ({ params }) => {
  const pageName = params["*"];
  const isValidPage = blogListPages.some(
    (blogItemName) => blogItemName.toLowerCase() === pageName.toLowerCase()
  );

  if (!isValidPage) {
    navigate("/");
    return;
  }

  return (
    <main style={pageStyles}>
      <MainLayout>
        <div class="w-full h-fit min-h-screen">
          <BlogGrid>
            {posts.map((post) => (
              <BlogGridItem
                key={post.title}
                title={post.title}
                date={post.date}
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

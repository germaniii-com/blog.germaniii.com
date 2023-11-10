import * as React from "react";
import { MainLayout } from "../components/layouts";
import { BlogGrid, BlogGridItem } from "../components/category";
import { blogListPages } from "../constants";
import { navigate } from "gatsby";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width: "100%",
  "overflow-y": "auto",
};

const posts = [
  {
    date: "October 2023",
    title: "Setting up your Linux Desktop Environment",
    photo: "https://picsum.photos/300",
  },
  {
    date: "August 2023",
    title: "Formatting Drives with fdisk",
    photo: "https://picsum.photos/300",
  },
  {
    date: "May 2023",
    title: "Preserving configurations across distros",
    photo: "https://picsum.photos/300",
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
            <BlogGridItem title={`${pageName}`} date={`October 2023`} />
            <BlogGridItem title={`${pageName}`} date={`October 2023`} />
            <BlogGridItem title={`${pageName}`} date={`October 2023`} />
            <BlogGridItem title={`${pageName}`} date={`October 2023`} />
            <BlogGridItem title={`${pageName}`} date={`October 2023`} />
            <BlogGridItem title={`${pageName}`} date={`October 2023`} />
            <BlogGridItem title={`${pageName}`} date={`October 2023`} />
            <BlogGridItem title={`${pageName}`} date={`October 2023`} />
            <BlogGridItem title={`${pageName}`} date={`October 2023`} />
          </BlogGrid>
        </div>
      </MainLayout>
    </main>
  );
};

export default CategoryPage;

export const Head = () => <title>Blogs Page</title>;

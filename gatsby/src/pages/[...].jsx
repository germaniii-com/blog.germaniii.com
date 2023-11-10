import * as React from "react";
import MainLayout from "../components/layouts/MainLayout";
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

const IndexPage = ({ params }) => {
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
        <div class="w-full h-screen">
          This should be a blog list for {pageName}
        </div>
      </MainLayout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

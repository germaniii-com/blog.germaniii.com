import * as React from "react";
import MainLayout from "../components/layouts/MainLayout";
import FeaturedArticleSection from "../components/home/FeaturedArticleSection";
import TextPicSection from "../components/home/TextPicSection";

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

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <MainLayout>
        <div class="h-fit min-h-screen w-full flex justify-center">
          <div class="grid grid-rows-4 py-5 gap-y-5">
            <FeaturedArticleSection />
            <TextPicSection title="Technology" link="/tech" posts={posts} />
          </div>
        </div>
      </MainLayout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { graphql } from "gatsby";
import Markdown from "react-markdown";
import { strapiURL } from "../constants";
import dayjs from "dayjs";

export const pageQuery = graphql`
  query ($id: String!) {
    strapiArticle(id: { eq: $id }) {
      id
      title
      publishedAt
      description
      tags {
        name
      }
      cover {
        url
      }
      content {
        data {
          content
        }
      }
    }
  }
`;

const BlogPost = ({ data }) => {
  const { strapiArticle: post } = data;
  return (
    <main>
      <MainLayout>
        <div className="w-full h-fit min-h-screen">
          {data ? (
            <div className="m-3">
              <img
                className="rounded-lg w-full h-auto object-cover max-h-36 md:max-h-56"
                src={`${strapiURL}${post.cover.url}`}
                alt="coverpage"
              />{" "}
              <span className="text-primary font-black text-4xl">
                {post.title}
              </span>
              <span className="text-primary block text-sm italic">
                {dayjs(post.publishedAt)
                  .format("HH:MM (ddd) MM-DD-YYYY")
                  .toString()}
              </span>
              <span className="text-primary block text-md">
                {post.tags.map((tag) => tag.name).join(" | ")}
              </span>
              <br />
              <div className="max-w-md md:max-w-4xl">
                <Markdown className="text-primary prose md:prose-lg">
                  {post.content.data.content}
                </Markdown>
              </div>
            </div>
          ) : (
            <>Sorry this page is unavailable</>
          )}
        </div>
      </MainLayout>
    </main>
  );
};

export default BlogPost;

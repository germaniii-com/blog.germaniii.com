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
        <div class="w-full h-fit min-h-screen">
          {data ? (
            <div>
              <img
                class="w-full"
                src={`${strapiURL}${post.cover.url}`}
                alt="coverpage"
              />
              <span class="font-bold text-2xl">{post.title}</span>
              <span class="block text-xs">
                {dayjs(post.publishedAt)
                  .format("HH:MM (ddd) MM-DD-YYYY")
                  .toString()}
              </span>
              <br />
              <span class="block text-md">
                {post.tags.map((tag) => tag.name).join(" | ")}
              </span>
              <br />
              <br />
              <br />
              <div>
                <Markdown class="prose">{post.content.data.content}</Markdown>
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

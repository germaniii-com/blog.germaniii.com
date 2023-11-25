import * as React from "react";
import { MainLayout } from "../components/layouts";
import {
  FeaturedArticleSection,
  TextPicSection,
  PicTextSection,
} from "../components/home";
import { useStaticQuery, graphql } from "gatsby";
import { PAGES } from "../constants";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width: "100%",
  "overflow-y": "auto",
};

const IndexPage = () => {
  const articles = useStaticQuery(graphql`
    query fetchFeaturedArticles {
      allStrapiArticle {
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
    id: node?.id ?? "",
    title: node?.title ?? "",
    date: node?.publishedAt ?? "",
    cover: node?.cover.url ?? "",
    tags: node?.tags.map((tag) => tag.name) ?? [],
  }));

  const featuredHowTo = posts.filter((article) =>
    article.tags.some((tag) => tag.toLowerCase() === PAGES.HOWTO.toLowerCase())
  );

  const featuredTechnology = posts.filter((article) =>
    article.tags.some((tag) => tag.toLowerCase() === PAGES.TECH.toLowerCase())
  );

  const featuredTravel = posts.filter((article) =>
    article.tags.some((tag) => tag.toLowerCase() === PAGES.TRAVEL.toLowerCase())
  );

  return (
    <main style={pageStyles}>
      <MainLayout>
        <div class="h-fit min-h-screen w-full flex justify-center">
          <div class="grid grid-rows-4 py-5 gap-y-5">
            <FeaturedArticleSection post={posts[0]} />
            <PicTextSection
              title="How-To"
              link="/how-to"
              posts={featuredHowTo}
            />
            <TextPicSection
              title="Technology"
              link="/tech"
              posts={featuredTechnology}
            />
            <PicTextSection
              title="Travel"
              link="/travel"
              posts={featuredTravel}
            />
          </div>
        </div>
      </MainLayout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

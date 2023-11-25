import React from "react";
import { Link } from "gatsby";
import { strapiURL } from "../../constants";

const FeaturedArticleSection = ({ post }) => {
  return (
    <div class="self-center bg-primary text-white rounded-xl p-5 flex gap-y-5 flex-col-reverse md:flex-row md:gap-x-5">
      <div class="grid grid-rows-[1fr_auto_auto_auto] gap-y-1">
        <span class="text-md">Featured Articles</span>
        <span class="text-2xl font-bold">{post.title}</span>
        <p class="text-s pb-3 md:pb-1">
          {post.description.slice(0, 100).concat("...")}
        </p>
        <div class="w-fit h-fit rounded-full bg-accent text-white p-1.5 text-xs font-bold">
          <Link to={`/post/${post.id}`}>{"Read More"}</Link>
        </div>
      </div>
      <img class="self-center bg-accent" src={`${strapiURL}${post.cover}`} />
    </div>
  );
};

export default FeaturedArticleSection;

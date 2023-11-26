import React from "react";
import { Link } from "gatsby";
import { strapiURL } from "../../constants";

const FeaturedArticleSection = ({ post }) => {
  return (
    <div className="self-center bg-primary text-white rounded-xl p-5 flex gap-y-5 flex-col-reverse md:flex-row md:gap-x-5">
      <div className="grid grid-rows-[1fr_auto_auto_auto] gap-y-1">
        <span className="text-md">Featured Articles</span>
        <span className="text-2xl font-bold">{post.title}</span>
        <p className="text-s pb-3 md:pb-1">
          {post.description.slice(0, 100).concat("...")}
        </p>
        <div className="w-fit h-fit rounded-full bg-accent text-white p-1.5 text-xs font-bold">
          <Link to={`/post/${post.id}`}>{"Read More"}</Link>
        </div>
      </div>
      <div className="max-w-sm max-h-xs md:max-w-md md:max-h-sm">
        <img
          className="rounded-lg self-center bg-accent"
          src={`${strapiURL}${post.cover}`}
          alt="coverphoto"
        />
      </div>
    </div>
  );
};

export default FeaturedArticleSection;

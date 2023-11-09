import React from "react";
import { Link } from "gatsby";

const FeaturedArticleSection = () => {
  return (
    <div class="self-center text-primary rounded-xl p-5 flex gap-y-5 flex-col-reverse md:flex-row md:gap-x-5">
      <div class="grid grid-rows-[1fr_auto_auto_auto] gap-y-1">
        <span class="text-md">Featured Articles</span>
        <span class="text-2xl font-bold">{"Beginner's Guide to Linux"}</span>
        <p class="text-s pb-3 md:pb-1">
          {"As we know, Linux can be found in the Lorem Ipsum is simply dummy text of the printing and typesetting industry aklsdjaslkdjaslkasjdalksdjasdlajs"
            .slice(0, 100)
            .concat("...")}
        </p>
        <div class="w-fit h-fit rounded-full bg-primary text-white p-1.5 text-xs font-bold">
          <Link to="/">{"Read More"}</Link>
        </div>
      </div>
      <div class="self-center bg-accent">Picture</div>
    </div>
  );
};

export default FeaturedArticleSection;

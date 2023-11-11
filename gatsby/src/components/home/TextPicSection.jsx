import React from "react";
import { Link } from "gatsby";

const TextPicSection = ({ title, link, posts }) => {
  return (
    <div class="self-center text-primary rounded-xl p-5 flex gap-y-5 flex-col-reverse md:flex-row md:gap-x-5 shadow-lg md:shadow-none">
      <div class="flex-grow grid grid-rows-[1fr_auto] gap-y-6">
        <div class="flex flex-col gap-y-1">
          <span class="text-2xl font-bold self-end">{title}</span>
          <div class="w-fit h-fit rounded-full p-1.5 bg-accent text-white text-xs font-bold self-end">
            <Link to={link}>{"Browse"}</Link>
          </div>
        </div>
        <div class="w-full text-end">
          <ul class="grid grid-rows-3 gap-y-1">
            {posts.map((post) => (
              <li>
                <span class="block text-xs">{post.date}</span>
                <span class="block font-bold">{post.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div class="self-center bg-accent hidden md:block">Picture</div>
    </div>
  );
};

export default TextPicSection;

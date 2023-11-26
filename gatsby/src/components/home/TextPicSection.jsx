import React, { useState } from "react";
import { Link } from "gatsby";
import { strapiURL } from "../../constants";
import dayjs from "dayjs";

const TextPicSection = ({ title, link, posts }) => {
  const [hoveredPost, setHoveredPost] = useState(posts[0]);
  const displayImageURL = posts.find(
    (post) => post.id === hoveredPost.id
  ).cover;

  return (
    <div className="self-center text-primary rounded-xl p-5 flex gap-y-5 flex-col-reverse md:flex-row md:gap-x-5 shadow-lg md:shadow-none">
      <div className="flex-grow grid grid-rows-[1fr_auto] gap-y-6">
        <div className="flex flex-col gap-y-1">
          <span className="text-2xl font-bold self-end">{title}</span>
          <div className="w-fit h-fit rounded-full p-1.5 bg-accent text-white text-xs font-bold self-end">
            <Link to={link}>{"Browse"}</Link>
          </div>
        </div>
        <div className="w-full text-end">
          <ul className="grid grid-rows-3 gap-y-1">
            {posts.map((post) => (
              <li
                className="cursor-pointer"
                onMouseEnter={() => setHoveredPost(post)}
                key={post.id}
              >
                <span className="cursor-pointer block text-xs">
                  {dayjs(post.date).format("YYYY-MM-DD").toString()}
                </span>
                <Link to={`/post/${post.id}`}>
                  <span className="cursor-pointer block font-bold">
                    {post.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img
        className="self-center bg-accent hidden md:block"
        src={`${strapiURL}${displayImageURL}`}
        alt="coverphoto"
      />
    </div>
  );
};

export default TextPicSection;

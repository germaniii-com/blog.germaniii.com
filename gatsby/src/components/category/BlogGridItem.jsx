import React from "react";
import { strapiURL } from "../../constants";
import { Link } from "gatsby";

const BlogGridItem = ({ id, title, date, cover, tags }) => {
  return (
    <div className="md:aspect-square rounded-lg shadow-lg p-5 grid md:grid-rows-[auto_1fr] gap-3">
      <img src={`${strapiURL}${cover}`} alt="coverphoto" />
      <Link className="cursor-pointer" to={`/post/${id}`}>
        <div className="text-primary text-base font-bold">{title}</div>
        <div className="text-primary text-xs">{date}</div>
        <div className="text-primary text-xs">
          {tags.map((tag, index) =>
            index === tags.length - 1 ? ` ${tag}` : ` ${tag} |`
          )}
        </div>
      </Link>
    </div>
  );
};

export default BlogGridItem;

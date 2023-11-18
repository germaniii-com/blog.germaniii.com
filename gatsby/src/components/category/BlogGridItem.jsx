import React from "react";

const BlogGridItem = ({ title, date, cover, tags }) => {
  return (
    <div class="md:aspect-square rounded-lg shadow-lg p-5 grid md:grid-rows-[auto_1fr] gap-3">
      <img src={`http://localhost:1337${cover}`} />
      <div>
        <div class="text-primary text-base font-bold">{title}</div>
        <div class="text-primary text-xs">{date}</div>
        <div class="text-primary text-xs">
          {tags.map((tag, index) =>
            index == tags.length - 1 ? ` ${tag}` : ` ${tag} |`
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogGridItem;

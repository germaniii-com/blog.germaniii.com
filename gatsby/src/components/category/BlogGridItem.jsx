import React from "react";

const BlogGridItem = ({ title, date }) => {
  return (
    <div class="md:aspect-square rounded-lg shadow-lg p-5 grid md:grid-rows-[auto_1fr] gap-3">
      <div class="bg-gray hidden md:block">test</div>
      <div>
        <div class="text-primary text-base font-bold">{title}</div>
        <div class="text-primary text-xs">{date}</div>
      </div>
    </div>
  );
};

export default BlogGridItem;

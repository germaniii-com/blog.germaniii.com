import React from "react";

const BlogGridItem = ({ title, date }) => {
  return (
    <div class="rounded bg-accent p-5 flex flex-row md:flex-col">
      <div class="bg-zinc-200">Picture</div>
      <div>
        <div class="text-primary text-base font-bold">{title}</div>
        <div class="text-primary text-xs">{date}</div>
      </div>
    </div>
  );
};

export default BlogGridItem;

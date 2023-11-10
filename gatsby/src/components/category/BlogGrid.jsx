import React from "react";

const BlogGrid = ({ children }) => {
  return (
    <div class="self-center gap-5 m-5 grid grid-cols-1 md:grid-cols-3">
      {children}
    </div>
  );
};

export default BlogGrid;

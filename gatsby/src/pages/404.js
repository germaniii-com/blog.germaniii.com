import React from "react";

const NotFoundPage = () => {
  return (
    <main class="w-full h-screen">
      <div class="flex w-full h-full justify-center">
        <h1 class="self-center">Page not found</h1>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;

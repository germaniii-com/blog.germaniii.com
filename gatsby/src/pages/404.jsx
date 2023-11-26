import React from "react";

const NotFoundPage = () => {
  return (
    <main className="w-full h-screen">
      <div className="flex w-full h-full justify-center">
        <h1 className="self-center">Page not found</h1>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;

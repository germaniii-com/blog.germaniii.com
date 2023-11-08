import * as React from "react";
import MainLayout from "../components/layouts/MainLayout";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width: "100%",
  "overflow-y": "auto",
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <MainLayout>
        <div class="h-screen">This is the index page /</div>
      </MainLayout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

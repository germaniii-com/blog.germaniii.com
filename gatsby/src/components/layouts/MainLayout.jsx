import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const MainLayout = ({ children }) => {
  return (
    <div class="m-3">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

import React from "react";

const NavbarButton = ({ name }) => {
  const pathname =
    window.location.pathname.length === 1
      ? window.location.pathname
      : window.location.pathname.slice(1, window.location.pathname.length - 1);
  const currentPageStyle = "bg-primary text-white";
  const normalButtonStyle = "bg-white text-primary hover:text-primary-hover";
  const isCurrentPage =
    (pathname === "/" && name.toLowerCase() === "home") ||
    pathname.toLowerCase() === name.toLowerCase();

  return (
    <li
      className={`pointer inline-block p-2 md:p-3 rounded text-xs whitespace-nowrap md:text-base ${
        isCurrentPage ? currentPageStyle : normalButtonStyle
      }`}
    >
      {name}
    </li>
  );
};

export default NavbarButton;

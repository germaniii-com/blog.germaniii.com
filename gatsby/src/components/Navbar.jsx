import { Link } from "gatsby";
import React from "react";
import NavbarButton from "./NavbarButton";

const navbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "How-To",
    link: "/how-to",
  },
  {
    name: "Tech",
    link: "/tech",
  },
  {
    name: "Travel",
    link: "/travel",
  },
];

const Navbar = () => {
  const isSSR = window === undefined;

  return (
    <nav>
      <ul class="flex align-center justify-center space-x-5">
        {navbarLinks.map((link) => {
          return (
            <>
              <Link to={link.link}>
                {!isSSR && <NavbarButton name={link.name} />}
              </Link>
            </>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

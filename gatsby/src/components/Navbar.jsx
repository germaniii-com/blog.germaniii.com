import { Link } from "gatsby";
import React from "react";

const navbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "How-tos",
    link: "/how-tos",
  },
  {
    name: "Tech",
    link: "/tech",
  },
  {
    name: "Life",
    link: "/life",
  },
  {
    name: "Travel",
    link: "/travel",
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul class="flex align-center justify-center space-x-5">
        {navbarLinks.map((link) => {
          return (
            <>
              <Link to={link.link}>
                <li class="pointer block p-3 rounded text-primary hover:bg-primary hover:text-white">
                  {link.name}
                </li>
              </Link>
            </>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

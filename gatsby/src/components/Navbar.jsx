import { Link } from "gatsby";
import React from "react";
import NavbarButton from "./NavbarButton";
import { PAGES } from "../constants";

const navbarLinks = [
  {
    name: PAGES.HOME,
    link: `/`,
  },
  {
    name: PAGES.HOWTO,
    link: `/${PAGES.HOWTO.toLowerCase()}`,
  },
  {
    name: PAGES.TECH,
    link: `/${PAGES.TECH.toLowerCase()}`,
  },
  {
    name: PAGES.TRAVEL,
    link: `/${PAGES.TRAVEL.toLowerCase()}`,
  },
];

const Navbar = () => {
  const isSSR = typeof window === `undefined`;

  return (
    <nav>
      <ul class="flex align-center justify-center space-x-5">
        {navbarLinks.map((link) => {
          return (
            <div key={link.link}>
              <Link key={link.link} to={link.link}>
                {!isSSR && <NavbarButton key={link.link} name={link.name} />}
              </Link>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

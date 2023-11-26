import React from "react";
import { Link } from "gatsby";
import {
  SiYoutube,
  SiLinkedin,
  SiInstagram,
  SiGithub,
  SiGmail,
} from "react-icons/si";

const socialLinks = [
  {
    icon: (
      <SiGmail className="fill-primary w-3 md:group-hover:motion-safe:animate-bounce" />
    ),
    link: "mailto:germaniiifelisarta@gmail.com",
  },
  {
    icon: (
      <SiGithub className="fill-primary w-3 md:group-hover:motion-safe:animate-bounce" />
    ),
    link: "https://github.com/germaniii",
  },
  {
    icon: (
      <SiInstagram className="fill-primary w-3 md:group-hover:motion-safe:animate-bounce" />
    ),
    link: "https://instagram.com/germaniiifelisarta",
  },
  {
    icon: (
      <SiLinkedin className="fill-primary w-3 md:group-hover:motion-safe:animate-bounce" />
    ),
    link: "https://www.linkedin.com/in/german-iii-felisarta-648b9420b",
  },
  {
    icon: (
      <SiYoutube className="fill-primary w-3 md:group-hover:motion-safe:animate-bounce" />
    ),
    link: "https://www.youtube.com/channel/UCLdx8-LN-JAnrExazmhjmDA",
  },
];

const Footer = () => {
  return (
    <footer className="grid grid-cols-[1fr_auto] gap-x-3">
      <a
        className="text-primary text-md align-center"
        href="https://germaniii.com"
      >
        German III
      </a>
      <ul className="flex fill-primary align-center justify-center gap-x-5">
        {socialLinks.map((social) => (
          <div key={social.link} className="w-full h-full group">
            <Link key={social.link} to={social.link} className=" self-center">
              <li key={social.link}>{social.icon}</li>
            </Link>
          </div>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;

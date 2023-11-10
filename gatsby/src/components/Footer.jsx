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
      <SiGmail class="fill-primary w-3 md:group-hover:motion-safe:animate-bounce" />
    ),
    link: "mailto:germaniiifelisarta@gmail.com",
  },
  {
    icon: (
      <SiGithub class="fill-primary w-3 md:group-hover:motion-safe:animate-bounce" />
    ),
    link: "https://github.com/germaniii",
  },
  {
    icon: (
      <SiInstagram class="fill-primary w-3 md:group-hover:motion-safe:animate-bounce" />
    ),
    link: "https://instagram.com/germaniiifelisarta",
  },
  {
    icon: (
      <SiLinkedin class="fill-primary w-3 md:group-hover:motion-safe:animate-bounce" />
    ),
    link: "https://www.linkedin.com/in/german-iii-felisarta-648b9420b",
  },
  {
    icon: (
      <SiYoutube class="fill-primary w-3 md:group-hover:motion-safe:animate-bounce" />
    ),
    link: "https://www.youtube.com/channel/UCLdx8-LN-JAnrExazmhjmDA",
  },
];

const Footer = () => {
  return (
    <footer class="grid grid-cols-[1fr_auto] gap-x-3">
      <a class="text-primary text-md align-center" href="https://germaniii.com">
        German III
      </a>
      <ul class="flex fill-primary align-center justify-center gap-x-5">
        {socialLinks.map((social) => (
          <div class="w-full h-full group">
            <Link to={social.link} class=" self-center">
              <li>{social.icon}</li>
            </Link>
          </div>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;

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
    icon: <SiGmail class="fill-primary" />,
    link: "mailto:germaniiifelisarta@gmail.com",
  },
  {
    icon: <SiGithub class="fill-primary" />,
    link: "https://github.com/germaniii",
  },
  {
    icon: <SiInstagram class="fill-primary" />,
    link: "https://instagram.com/germaniiifelisarta",
  },
  {
    icon: <SiLinkedin class="fill-primary" />,
    link: "https://www.linkedin.com/in/german-iii-felisarta-648b9420b",
  },
  {
    icon: <SiYoutube class="fill-primary" />,
    link: "https://www.youtube.com/channel/UCLdx8-LN-JAnrExazmhjmDA",
  },
];

const Footer = () => {
  return (
    <footer class="grid grid-cols-[1fr_auto_1fr]">
      <a class="text-primary text-md align-center" href="https://germaniii.com">
        German III
      </a>
      <ul class="flex fill-primary align-center justify-center space-x-5">
        {socialLinks.map((social) => (
          <>
            <Link to={social.link} class="hover:motion-safe:animate-bounce">
              <li>{social.icon}</li>
            </Link>
          </>
        ))}
      </ul>
      <div class="text-primary text-xs align-center text-end">
        <Link to="/">© German III Felisarta</Link>
        <div class="hidden md:inline-block">. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;

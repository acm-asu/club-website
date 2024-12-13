import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa6";
import { IoLogoFreebsdDevil } from "react-icons/io";

//Edit any changes to the ACM at ASU URLs here
//Icons can be found at: https://react-icons.github.io/react-icons/
const socialMediaLinks = [
  {
    href: "https://thesoda.io/",
    icon: <CgWebsite className="hover:text-asu-red" />,
  },
  {
    href: "https://www.linkedin.com/company/acm-asu/",
    icon: <FaLinkedin className="hover:text-asu-red" />,
  },
  {
    href: "https://www.instagram.com/acm-asu/",
    icon: <RiInstagramFill className="hover:text-asu-red" />,
  },
  {
    href: "https://discord.gg/wCvWGzKe3m",
    icon: <FaDiscord className="hover:text-asu-red" />,
  },
  {
    href: "https://www.facebook.com/acm-at-asu/",
    icon: <FaFacebookSquare className="hover:text-asu-red" />,
  },
  {
    href: "https://github.com/acm-asu",
    icon: <FaGithub className="hover:text-asu-red" />,
  },
  {
    href: "https://asu.campuslabs.com/engage/organization/acm-asu",
    icon: <IoLogoFreebsdDevil className="hover:text-asu-red" />,
  },
];

export default function SocialMediaLinks() {
  return (
    <section className="social-media-links">
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          {link.icon}
        </a>
      ))}
    </section>
  );
}

import RoundedButton from "../Button/RiArrowButton";
import Statistics from "../Stats/Statistics";
import SocialMediaLinks from "../SocialMediaLinks";

const navLinks = [
  {
    name: "Info",
    id_href: "#info",
    cssClass: "nav-text-animation",
  },
  {
    name: "Team",
    id_href: "#team",
    cssClass: "nav-text-animation",
  },
  {
    name: "Events",
    id_href: "https://asu.campuslabs.com/engage/organization/acm-asu/events",
    cssClass: "nav-text-animation",
  },
  {
    name: "Leaderboard",
    id_href: "https://thesoda.io/leaderboard",
    cssClass: "nav-text-animation",
  }
];

export default function DesktopNav() {

  interface NavLink {
    name: string;
    id_href: string;
    cssClass: string;
  }

  const navLinks: NavLink[] = [
    {
      name: "Info",
      id_href: "#info",
      cssClass: "nav-text-animation",
    },
    {
      name: "Team",
      id_href: "#team",
      cssClass: "nav-text-animation",
    },
    {
      name: "Events",
      id_href: "https://asu.campuslabs.com/engage/organization/acm-asu/events",
      cssClass: "nav-text-animation",
    },
    {
      name: "Leaderboard",
      id_href: "https://thesoda.io/leaderboard",
      cssClass: "nav-text-animation",
    }
  ];

  const handleNavigation = (href: string): void => {
    if (href.startsWith("#")) {
      // Redirect to root and append the hash section
      window.location.href = `/${href}`;
    } else {
      // For external links, open them in a new tab
      window.open(href, "_blank");
    }
  };

  return (
    <section className="nav-container">
      <a href="/" className="flex gap-4 items-center">
        <img src="logo/Full_Dark_Mode.svg" className="w-28 aspect-square" />
      </a>
      <ul className="flex gap-14 items-center text-std-white font-bold">
        {navLinks.map((el) => (
          <li key={el.name}>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(el.id_href);
              }}
              className={`${el.cssClass}`}
            >
              {el.name}
            </a>
          </li>
        ))}
      </ul>
      <a href="https://asu.campuslabs.com/engage/organization/acm-asu">
        <RoundedButton name="Join" url="https://asu.campuslabs.com/engage/organization/acm-asu"/>
      </a>
    </section>
  );
}

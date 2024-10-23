import RoundedButton from "../Button/RiArrowButton";

const navLinks = [
  {
    name: "Info",
    id_href: "#info",
    cssClass: "nav-text-animation",
  },
  {
    name: "Sponsors",
    id_href: "#sponsors",
    cssClass: "nav-text-animation",
  },
  {
    name: "Team",
    id_href: "#team",
    cssClass: "nav-text-animation",
  },
  {
    name: "Events",
    id_href: "https://asu.campuslabs.com/engage/organization/soda/events",
    cssClass: "nav-text-animation",
  },
  {
    name: "HackSoDA24",
    id_href: "https://hack.thesoda.io",
    cssClass: "nav-text-animation",
  }
];

export default function DesktopNav() {

  const handleNavigation = (href) => {
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
        <img src="/logo/Compact_Dark_Mode.svg" className="w-20 aspect-square" />
      </a>
      <ul className="flex gap-14 items-center text-soda-white font-bold">
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
      <a href="https://forms.gle/8XdJKCBX9kXP6ge3A">
        <RoundedButton name="Join SoDA" url="https://forms.gle/8XdJKCBX9kXP6ge3A"/>
      </a>
    </section>
  );
}

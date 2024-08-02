import AllRightsReserved from "./AllRightsReserved.js";
import HorizontalLine from "./HorizontalLine.js";

export default function Footer() {
  return (
    <footer>
      <HorizontalLine />
      <section className="footer-container">
        <section className="col-span-2 max-md:col-span-2 max-md:p-2">
          <div className="flex flex-col max-md:flex-row justify-between h-full">
            <div className="flex gap-3 items-center max-sm:flex-row max-sm:items-center max-sm:hidden">
              <img src="/logo/soda-logo-white.png" className="w-8" />
              <span className="text-soda-white">Thesoda.io</span>
            </div>
          </div>
        </section>

        <section className="grid grid-rows-3 gap-2">
          <a href="#">
            <p className="text-soda-white text-[16px]">Organization</p>
          </a>
          {organization.map((el, i) => (
            <a href={el.source} key={i}>
              <p className="text-soda-gray text-[16px]">{el.name}</p>
            </a>
          ))}
        </section>

        <section className="grid grid-rows-3 gap-1">
          <a href="#">
            <p className="text-soda-white text-[16px]">Resources</p>
          </a>
          {resources.map((el, i) => (
            <a href={el.source} key={i}>
              <p className="text-soda-gray text-[16px]">{el.name}</p>
            </a>
          ))}
        </section>
      </section>
      <AllRightsReserved />
    </footer>
  );
}

const organization = [
  {
    name: "Get Involved",
    source: "/",
  },
  {
    name: "Projects",
    source: "/",
  },
  {
    name: "Documentations",
    source: "/",
  },
];

const resources = [
  {
    name: "Constitution",
    source: "/",
  },
  {
    name: "Privacy & Policy",
    source: "/",
  },
];
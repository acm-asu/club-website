const resources = [
  {
    name: "Contact",
    source: "https://asu.campuslabs.com/engage/organization/acm-asu",
  },
  {
    name: "Constitution",
    source:
        "https://asu.campuslabs.com/engage/organization/acm-asu"
  },
  {
    name: "Privacy & Policy",
    source: "/",
  },
];

export default function RightFooterGrid() {
  return (
    <section className="grid grid-rows-3 gap-1">
      <h5 className="text-std-white text-[16px]">Resources</h5>
      {resources.map((el, i) => (
        <a href={el.source} key={i}>
          <p className="text-std-gray text-[16px] hover:text-std-white">
            {el.name}
          </p>
        </a>
      ))}
    </section>
  );
}

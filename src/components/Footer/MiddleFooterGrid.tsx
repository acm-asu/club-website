const organization = [
  {
    name: "Get Involved",
    source: "https://asu.campuslabs.com/engage/organization/acm-asu",
  },
  {
    name: "Projects",
    source: "https://github.com/orgs/acm-asu/repositories",
  },
  {
    name: "News",
    source: "https://asu.campuslabs.com/engage/organization/acm-asu/news",
  },
  {
    name: "Gallery",
    source: "https://asu.campuslabs.com/engage/organization/acm-asu/gallery",
  },
];

export function MiddleFooterGrid() {
  return (
    <section className="grid grid-rows-3 gap-2">
      <h5 className="text-std-white text-[16px] ">Organization</h5>
      {organization.map((el, i) => (
        <a href={el.source} key={i}>
          <p className="text-std-gray hover:text-std-white text-[16px]">
            {el.name}
          </p>
        </a>
      ))}
    </section>
  );
}

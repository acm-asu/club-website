import React from "react";
import HorizontalLine from "./ui/HorizontalLine";

const perks = [
  {
    header: "Data",
    description:
        "Topics include: . Activities and resources facilitated by the ACM include forums, symposia, conferences, publications,literature, tools and programs. Relevant SIGs: .",
    imgURL: "/logo/Compact_Light_Mode.svg",
  },
  {
    header: "Algorithms",
    description:
        "Topics include: . Activities and resources facilitated by the ACM include forums, symposia, conferences, publications,literature, tools and programs. Relevant SIGs: .",
    imgURL: "/logo/Compact_Light_Mode.svg",
  },
  {
    header: "Security",
    description:
      "Topics include: . Activities and resources facilitated by the ACM include forums, symposia, conferences, publications,literature, tools and programs. Relevant SIGs: .",
    imgURL: "/logo/Compact_Light_Mode.svg",
  },
  {
    header: "Architecture",
    description:
        "Topics include: . Activities and resources facilitated by the ACM include forums, symposia, conferences, publications,literature, tools and programs. Relevant SIGs: .",
    imgURL: "/logo/Compact_Light_Mode.svg",
  },
  {
    header: "Networking",
    description:
        "Topics include: . Activities and resources facilitated by the ACM include forums, symposia, conferences, publications,literature, tools and programs. Relevant SIGs: .",
    imgURL: "/logo/Compact_Light_Mode.svg",
  },
  {
    header: "Embedded",
    description:
        "Topics include: . Activities and resources facilitated by the ACM include forums, symposia, conferences, publications,literature, tools and programs. Relevant SIGs: .",
    imgURL: "/logo/Compact_Light_Mode.svg",
  },
  {
    header: "Software",
    description:
        "Topics include: . Activities and resources facilitated by the ACM include forums, symposia, conferences, publications,literature, tools and programs. Relevant SIGs: .",
    imgURL: "/logo/Compact_Light_Mode.svg",
  },
  {
    header: "Distributed",
    description:
        "Topics include: . Activities and resources facilitated by the ACM include forums, symposia, conferences, publications,literature, tools and programs. Relevant SIGs: .",
    imgURL: "/logo/Compact_Light_Mode.svg",
  },
  {
    header: "Human-Computer Interaction",
    description:
        "Topics include: . Activities and resources facilitated by the ACM include forums, symposia, conferences, publications,literature, tools and programs. Relevant SIGs: .",
    imgURL: "/logo/Compact_Light_Mode.svg",
  },
  {
    header: "Artificial Intelligence",
    description:
        "Topics include: . Activities and resources facilitated by the ACM include forums, symposia, conferences, publications,literature, tools and programs. Relevant SIGs: .",
    imgURL: "/logo/Compact_Light_Mode.svg",
  },
  {
    header: "High-Performance Computing",
    description:
        "Topics include: . Activities and resources facilitated by the ACM include forums, symposia, conferences, publications,literature, tools and programs. Relevant SIGs: .",
    imgURL: "/logo/Compact_Light_Mode.svg",
  },
  {
    header: "Quantum Computing",
    description:
        "Topics include: . Activities and resources facilitated by the ACM include forums, symposia, conferences, publications,literature, tools and programs. Relevant SIGs: .",
    imgURL: "/logo/Compact_Light_Mode.svg",
  },
  {
    header: "Theory",
    description:
        "Topics include: . Activities and resources facilitated by the ACM include forums, symposia, conferences, publications,literature, tools and programs. Relevant SIGs: .",
    imgURL: "/logo/Compact_Light_Mode.svg",
  },
  {
    header: "Applied",
    description:
        "Topics include: . Activities and resources facilitated by the ACM include forums, symposia, conferences, publications,literature, tools and programs. Relevant SIGs: .",
    imgURL: "/logo/Compact_Light_Mode.svg",
  },
  {
    header: "Ethics",
    description:
        "Topics include: . Activities and resources facilitated by the ACM include forums, symposia, conferences, publications,literature, tools and programs. Relevant SIGs: .",
    imgURL: "/logo/Compact_Light_Mode.svg",
  },
  {
    header: "Emerging",
    description:
        "Topics include: . Activities and resources facilitated by the ACM include forums, symposia, conferences, publications,literature, tools and programs. Relevant SIGs: .",
    imgURL: "/logo/Compact_Light_Mode.svg",
  },
];

export default function AboutUs() {
  return (
    <main
      className="flex flex-col w-[70vw] max-md:w-[90vw] justify-center items-center mx-auto mb-20 max-md:mb-10"
      id="info"
    >
      <section className="text-center max-md:text-left">
        <h1 className="section-header-text">Explore your Interests</h1>
        <p className="hero-small-text px-24 max-lg:px-6 mx-auto max-md:hidden">
          ACM at ASU serves as a hub for special interests,
          <br/>
          connecting the ACM to students
          across the spectrum of ASU computing clubs,
          <br/>
          who partner with the ACM at ASU as Special Interest Groups (SIGs).
        </p>
        <p className="hero-small-text px-24 max-lg:px-6 mx-auto sm:hidden">
          ACM at ASU is one of the largest communities of students on campus, and is
          the largest engineering organization. We provide opportunities to
          collaborate on projects outside of the classroom, learn from
          university and industry professionals, and prepare for a career as a
          software developer.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 my-1">
        {perks.map((perk) => (
          <div className="bg-white rounded-2xl flex flex-col min-h-[300px] max-w-[300px] w-full">
            <img
              src={perk.imgURL}
              className="rounded-t-xl object-cover w-full h-48"
              alt={perk.header}
            />
            <div className="text-std-black px-4 py-3 text-left flex-1">
              <h4 className="font-semibold text-xl max-md:text-lg">
                {perk.header}
              </h4>
              <hr className="border-std-gray opacity-75 my-2 w-[60%]" />
              <p className="text-[14px] max-md:text-sm">{perk.description}</p>
            </div>
          </div>
        ))}

      </section>
    </main>
  );
}

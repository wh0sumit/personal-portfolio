interface Skills {
  category: string;
  skills: string[];
}

const Development: Skills[] = [
  {
    category: "Languages",
    skills: ["C & C++", "HTML & CSS", "JavaScript", "TypeScript", "PHP"],
  },
  {
    category: "Databases & Query Languages",
    skills: ["MySQL", "Mongo DB", "GraphQL (Query Language)", "SQL"],
  },
  {
    category: "Libraries & Frameworks",
    skills: [
      "Bootstrap",
      "Chakra UI",
      "Shadcn",
      "React & Redux",
      "Materialize",
      "Tailwind CSS",
      "SCSS",
      "NextJS",
    ],
  },

  {
    category: "Platforms",
    skills: ["Github", "Netlify", "Vercel", "Firebase", "Supabase"],
  },
  {
    category: "Tools",
    skills: ["Git", "Vite", "Postman", "StoryBook", "Postman", "Figma"],
  },
];

const Design: Skills[] = [
  {
    category: "Design",
    skills: [
      "UI Design",
      "UX Design & Research",
      "Design Systems",
      "Design Thinking",
    ],
  },
  {
    category: "Tools",
    skills: ["Figma"],
  },
  {
    category: "UX Pyschology Rules",
    skills: ["Hick's Law", "Fitt's Law", "Miller's Law", "Zeigarnik Effect"],
  },
];

const TechFlex = () => {
  return (
    <div className="tech-flex">
      <div className="mb-6">
        <h1 className="font-medium mb-2 text-neutral-700">
          Super Powers that I have
        </h1>

        <p className="text-neutral-500">
          I've worked with a range of technologies in the web development world.
          From design to development, here are a few things I've learned along
          the way.
        </p>
      </div>
      <div className="my-12">
        <h1 className="text-md font-medium mb-6 text-neutral-700">
          Development Skills I have acquired over the years :
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Development.map((item, index) => {
            return (
              <div
                key={index}
                className="border p-5 rounded-xl border-dashed hover:bg-neutral-50 transition-all duration-300"
              >
                <h1 className="text-md font-medium mb-6 ">{item.category}</h1>
                <div className="">
                  {item.skills.map((skill, index) => {
                    return (
                      <div className="mb-3 flex flex-col gap-2 text-neutral-500" key={index}>
                        <p>{skill}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>{" "}
      <div className="my-12">
        <h1 className="text-md font-medium mb-6 text-neutral-700">
          Design Skills I have acquired so far : (I'm still learning)
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Design.map((item, index) => {
            return (
              <div
                key={index}
                className="border p-5 rounded-xl border-dashed hover:bg-neutral-50 transition-all duration-300"
              >
                <h1 className="text-md font-medium mb-6 ">{item.category}</h1>
                <div className="">
                  {item.skills.map((skill, index) => {
                    return (
                      <div className="mb-3 flex flex-col gap-2 text-neutral-500">
                        <p>{skill}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechFlex;


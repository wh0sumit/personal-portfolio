import LinkText from "@/components/ui/link";
import Skills from "@/data/techstack.json";

interface Skills {
  category: string;
  skills: string[];
}

const Development: Skills[] = Skills.Development;
const Design: Skills[] = Skills.Design;

const OGs = [
  {
    name: "Wes Bos",
    link: "https://wesbos.com",
    description: "JavaScript, CSS, React, Node.js and Sublime Text",
  },
  {
    name: "Brad Traversy",
    link: "https://traversymedia.com",
    description: "JavaScript, CSS, React, Node.js and Sublime Text",
  },
  {
    name: "Kevin Powell",
    link: "https://www.kevinpowell.co",
    description: "CSS",
  },
  {
    name: "Florin Pop",
    link: "https://www.florin-pop.com",
    description: "JavaScript, CSS, React, Node.js and Sublime Text",
  },
  {
    name: "Dev Ed",
    link: "https://developedbyed.com",
    description: "JavaScript, CSS, React, Node.js and Sublime Text",
  },
  {
    name: "Akshay Saini",
    link: "https://www.youtube.com/channel/UC3N9i_KvKZYP4F84FPIzgPQ",
    description: "JavaScript, CSS, React, Node.js and Sublime Text",
  },
  {
    name: "Web Dev Simplified",
    link: "https://www.youtube.com/c/WebDevSimplified/featured",
    description: "JavaScript, CSS, React, Node.js and Sublime Text",
  },
  {
    name: "Fireship",
    link: "https://fireship.io",
    description: "JavaScript, CSS, React, Node.js and Sublime Text",
  },
  {
    name: "freeCodeCamp",
    link: "https://www.freecodecamp.org",
    description: "JavaScript, CSS, React, Node.js and Sublime Text",
  },
];

export const metadata = {
  title: "super powers that I have",
  description: "technical and design skills I have acquired over the years",
};

const TechFlex = () => {
  return (
    <div className="tech-flex">
      <div className="mb-6">
        <h1 className=" mb-2 text-neutral-200 text-xl font-semibold">
          Super Powers that I have
        </h1>

        <p className="text-neutral-500 text-xl font-semibold">
          I've worked with a range of technologies in the web development world.
          From design to development, here are a few things I've learned along
          the way.
        </p>
      </div>
      <div className="my-12">
        <h1 className="text-xl font-semibold text-neutral-200">
          Development skills I have acquired over the years :
        </h1>
        <p className="text-xl font-semibold text-neutral-500 mt-2 mb-6">
          I'm always learning new things and I try to keep this list updated, so
          it's not an exhaustive list.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Development.map((item, index) => {
            return (
              <div
                key={index}
                className="border p-5 rounded-xl border-dashed border-neutral-700 hover:bg-neutral-900 transition-all duration-300"
              >
                <h1 className="text-xl font-semibold mb-6 ">{item.category}</h1>
                <div className="">
                  {item.skills.map((skill, index) => {
                    return (
                      <div
                        className="mb-3 flex flex-col gap-2 text-neutral-500 font-semibold"
                        key={index}
                      >
                        <p className="font-semibold">{skill}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-xl text-neutral-500 mt-2 mb-6 font-semibold">
          Some People call me a{" "}
          <span className="text-neutral-200 font-semibold">
            Full Stack Developer
          </span>{" "}
          but I prefer to call myself a{" "}
          <span className="text-neutral-200 font-semibold">
            Frontend Engineer
          </span>{" "}
          because I love to work on the frontend side of things.
        </p>
        <div className="">
          <p className="text-xl text-neutral-200 mt-2 mb-6 font-semibold">
            Here are some OG's from whom I've learned a lot of things:
          </p>
          <div className="grid grid-cols-3 gap-3">
            {OGs.map((item, index) => {
              return (
                <LinkText
                  key={index}
                  href={item.link}
                  isExternal={true}
                  target="_blank"
                  className="inline-flex font-semibold "
                >
                  {item.name}
                </LinkText>
              );
            })}
          </div>
        </div>
      </div>{" "}
      <div className="my-12">
        <h1 className="text-xl font-semibold mb-6 text-neutral-200">
          Design skills I have acquired so far : (I'm still learning)
        </h1>
        <p className="text-xl text-neutral-500 mt-2 mb-6 font-semibold">
          I'm always learning new things and I try to keep this list updated, so
          it's not an exhaustive list.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Design.map((item, index) => {
            return (
              <div
                key={index}
                className="border p-5 rounded-xl border-dashed hover:bg-neutral-900 transition-all duration-300  border-neutral-700"
              >
                <h1 className="text-xl font-semibold mb-6 ">{item.category}</h1>
                <div className="">
                  {item.skills.map((skill, index) => {
                    return (
                      <div
                        className="mb-3 flex flex-col gap-2 text-neutral-500 font-semibold"
                        key={index}
                      >
                        <p className="font-semibold">{skill}</p>
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


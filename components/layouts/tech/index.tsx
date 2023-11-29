import LinkText from "@/components/ui/link";
import Tooltip from "@/components/ui/tooltip";
import * as SiIcons from "react-icons/si";

interface TechIKnow {
  name: string;
  description?: string;
  link?: string;
  icon?: React.ReactNode;
  isExternal: boolean;
}

const TechIKnow: TechIKnow[] = [
  {
    name: "React",
    description: "JavaScript library",
    icon: <SiIcons.SiReact />,
    link: "https://reactjs.org",
    isExternal: true,
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript",
    icon: <SiIcons.SiTypescript />,
    link: "https://www.typescriptlang.org",
    isExternal: true,
  },
  {
    name: "Next.js",
    description: "React framework",
    icon: <SiIcons.SiNextdotjs />,
    link: "https://nextjs.org",
    isExternal: true,
  },
  {
    name: "Tailwind CSS",
    description: "CSS framework",
    link: "https://tailwindcss.com",
    icon: <SiIcons.SiTailwindcss />,
    isExternal: true,
  },
  {
    name: "Figma",
    description: "design tool",
    link: "https://figma.com",
    icon: <SiIcons.SiFigma />,
    isExternal: true,
  },
  {
    name: "framer motion",
    link: "https://www.framer.com/motion/",
    description: "animation library",
    icon: <SiIcons.SiFramer />,
    isExternal: true,
  },
];

const TechStack: React.FC = () => {
  return (
    <div className="pb-6 my-10">
      <h1 className="text-md font-medium mb-6 text-neutral-700">
        Super cool tech stack i know about
        <span className="text-neutral-500/90 font-normal ml-4  hidden sm:inline-block">
          :hover on the icons:
        </span>
      </h1>

      <div className="grid grid-cols-6 gap-2 mb-6 ">
        {TechIKnow.map((item, index) => {
          return (
            <div key={index}>
              {item.icon ? (
                <Tooltip
                  text={item.name}
                  description={item.description}
                  position="top"
                >
                  <div className="p-3 rounded-full bg-neutral-50 my-3 cursor-pointer">
                    <div className="flex flex-col items-center justify-center text-2xl ">
                      {item.icon}
                    </div>
                  </div>
                </Tooltip>
              ) : (
                <h1 className="text-md font-medium mb-6 text-neutral-700">
                  {item.name}
                </h1>
              )}
            </div>
          );
        })}
      </div>

      <div>
        <p className="text-md text-neutral-500">
          This is not an exhaustive list.
        </p>
        <p className="text-md text-neutral-500 mb-6 mt-2">
          I'm always learning new things and I try to keep this list updated.
        </p>
      </div>
      <div className="text-md text-neutral-500">
        All the tech I know about is listed{" "}
        <LinkText className="mb-6" href="/tech-i-know" isExternal={false}>
          here
        </LinkText>
      </div>
    </div>
  );
};

export default TechStack;

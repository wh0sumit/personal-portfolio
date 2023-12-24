import { cn } from "@/lib/cn";
import LinkText from "@/components/ui/link";
import Image from "next/image";
import Seperator from "@/components/ui/seperator";

interface HeroProps {
  className?: string;
  attr?: React.HTMLAttributes<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={cn(className + "border-b border-dashed pb-6")}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
        <div className="col-span-2">
          <div>
            <div className="heading">
              <h1 className=" text-neutral-200 transition-all duration-300 text-5xl font-extrabold tracking-tighter">
                Sumit Singh{" "}
              </h1>
              <p className="font-semibold text-neutral-200 mt-2 text-xl transition-all duration-300">
                frontend (design) engineer
              </p>
            </div>
          </div>
          <Seperator />
          <div className="description  flex flex-col text-xl font-semibold text-neutral-500 ">
            <p>
              Crafting beautiful interfaces, components and experiences for the
              web with a focus on ux design and branding for the past 2 years.
            </p>

            <p className="mt-4 text-neutral-200">
              looking for a full-time role as a frontend engineer. <br />
            </p>
            <p className="mt-4">
              hire me → &nbsp;
              <LinkText
                href="https://linkedin.com/in/wh0sumit"
                target="_blank"
                isExternal={false}
                className="text-neutral-200 "
              >
                linkedin
              </LinkText>{" "}
            </p>
          </div>
        </div>
        <div className="col-span-2 hidden lg:block p-4">
          <Image
            src="/media/profile.jpg"
            width={500}
            height={500}
            className="outline-none
            hover:ring-8 ring-gradient-to-b from-neutral-400 to-neutral-800 ring-neutral-700 border-none hover:ring-offset-4 ring-offset-neutral-600 ring-opacity-50 cursor-pointer
            transition-all duration-300 rounded-xl h-full "
            alt="Sumit Singh"
            priority
          />
        </div>
      </div>
      <p className="text-xl font-semibold text-neutral-500 mt-8">
        In the past, I've worked on{" "}
        <LinkText
          href="https://www.dunolabs.in"
          target="_blank"
          className="text-neutral-200 decoration-purple-500 hover:decoration-purple-600 transition-all duration-300"
        >
          dunolabs
        </LinkText>{" "}
        (agency) and{" "}
        <LinkText
          href="https://www.foundersforge.club"
          target="_blank"
          className="text-neutral-200 decoration-purple-500 hover:decoration-purple-600 transition-all duration-300"
        >
          foundersforge
        </LinkText>{" "}
        (community) as a founder and frontend engineer.
      </p>
    </div>
  );
};

export default Hero;


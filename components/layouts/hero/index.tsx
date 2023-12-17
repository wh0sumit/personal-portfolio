import { cn } from "@/lib/cn";
import LinkText from "@/components/ui/link";
import Image from "next/image";

interface HeroProps {
  className?: string;
  attr?: React.HTMLAttributes<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={cn(className + "border-b border-dashed pb-6")}>
      <div className="flex gap-3 mb-8 items-end  ">
        <Image
          src="/media/profile.jpg"
          width={300}
          height={300}
          className="outline-none ring-1 hover:border-neutral-300
          ring-neutral-400 hover:ring-neutral-200 ring-offset-2 ring-opacity-50 cursor-pointer
          transition-all duration-300 rounded-xl w-1/4 "
          alt="Sumit Singh"
          priority
        />
      </div>
      <div className="mb-8">
        <div className="heading">
          <h1 className="cursor-pointer mt-2 text-neutral-200 transition-all duration-300 text-7xl font-extrabold tracking-tighter">
            Sumit Singh{" "}
          </h1>
          <p className="font-semibold text-neutral-200 mt-2 text-2xl transition-all duration-300">
            — frontend engineer & designer
          </p>
        </div>
      </div>

      <div className="description  flex  flex-col text-xl font-semibold text-neutral-500">
        <p className="mb-8">
          Crafting beautiful interfaces, components and experiences for the web
          with a focus on ux design and branding.
        </p>
        <p>
          In the past I've developed{" "}
          <LinkText
            href="https://www.invoicetor.vercel.app"
            target="_blank"
            className="text-neutral-200 decoration-purple-500 hover:decoration-purple-600 transition-all duration-300"
          >
            Invoicetor
          </LinkText>
          , a simple invoicing app for freelancers and small scale businesses &
          individuals.
        </p>

        <h1 className="mt-8">
          Email me at &nbsp;
          <LinkText
            href="mailto:wh0sumit.work@gmail.com"
            target="_blank"
            isExternal={true}
            className="text-neutral-200 "
          >
            wh0sumit.work@gmail.com
          </LinkText>
        </h1>
      </div>
    </div>
  );
};

export default Hero;


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
          width={100}
          height={100}
          className="outline-none ring-1 hover:border-orange-300
          ring-neutral-400 hover:ring-orange-200 ring-offset-2 ring-opacity-50 cursor-pointer
          hover:scale-95 transition-all duration-300 rounded-xl "
          alt="Sumit Singh"
          priority
        />
        <div className="heading">
          <h1 className="text-lg cursor-pointer font-medium mt-2 text-neutral-700 hover:text-neutral-500 transition-all duration-300">
            Sumit Singh{" "}
          </h1>

          <p className="text-sm text-orange-500 ">
            Frontend Engineer & Designer
          </p>
        </div>
      </div>

      <div className="description  flex  flex-col text-md text-neutral-500">
        <p className="mb-8">
          Crafting beautiful interfaces, components and experiences for the web
          with a focus on ux design and branding.
        </p>
        <p>
          In the past I've developed{" "}
          <LinkText href="https://www.invoicetor.vercel.app" target="_blank">
            Invoicetor
          </LinkText>
          , a simple invoicing app for freelancers and small scale businesses &
          individuals.
        </p>

        <h1 className=" text-md font-medium text-neutral-700 mt-6">
          Email me at &nbsp;
          <LinkText
            href="mailto:wh0sumit.work@gmail.com"
            target="_blank"
            isExternal={true}
          >
            wh0sumit.work@gmail.com
          </LinkText>
        </h1>
      </div>
    </div>
  );
};

export default Hero;

import { cn } from "@/lib/cn";
import Link, { LinkProps } from "next/link";
import { ArrowUpRight } from "lucide-react";

interface LinkTextProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
  target?: "_blank" | "_parent" | "_self" | "_top" | "none";
  isExternal?: boolean;
}

const LinkText: React.FunctionComponent<LinkTextProps> = ({
  className,
  target,
  isExternal,
  ...attr
}) => {
  if (isExternal === true) {
    return (
      <>
        <Link
          className={cn(
            "underline group inline-block decoration-purple-500 hover:decoration-purple-600 text-neutral-500  items-center",
            className
          )}
          {...attr}
          target={target}
        >
          <span>{attr?.children}</span>
          <ArrowUpRight
            className=" group-hover:text-neutral-500 hover:decoration-neutral-500/60 group-hover:translate-x-1 
            transition duration-300 ease-in-out transform ml-1 inline
            "
            size={16}
          />
        </Link>
      </>
    );
  }
  return (
    <>
      <Link
        className={cn(
          "underline decoration-purple-500 hover:decoration-purple-600 text-neutral-500",
          className
        )}
        {...attr}
        target={target}
      >
        <span>{attr?.children}</span>
      </Link>
    </>
  );
};

export default LinkText;


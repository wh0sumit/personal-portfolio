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
            "underline group inline-block decoration-orange-500/30 hover:decoration-orange-500/60 text-neutral-500",
            className
          )}
          {...attr}
          target={target}
        >
          <span>{attr?.children}</span>
          <ArrowUpRight
            className="inline group-hover:text-orange-500 hover:decoration-orange-500/60 group-hover:translate-x-1 
            transition duration-300 ease-in-out transform
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
          "underline decoration-orange-500/30 hover:decoration-orange-500/60 text-neutral-500",
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


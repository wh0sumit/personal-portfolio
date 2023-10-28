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
        <div className="group inline-block">
          <Link
            className={cn(
              "underline decoration-orange-500/30 text-neutral-500",
              className
            )}
            {...attr}
            target={target}
          >
            <span>{attr?.children}</span>
            <ArrowUpRight
              className="inline group-hover:text-orange-500 group-hover:translate-x-1 
            transition duration-300 ease-in-out transform
            "
              size={16}
            />
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <Link
        className={cn(
          "underline decoration-orange-500/30 text-neutral-500",
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


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
      <Link className={cn("underline", className)} {...attr} target={target}>
        <span>{attr?.children}</span>
        <ArrowUpRight className="inline ml-1" size={16} />
      </Link>
    );
  }
  return (
    <Link className={cn("underline", className)} {...attr} target={target}>
      <span>{attr?.children}</span>
    </Link>
  );
};

export default LinkText;


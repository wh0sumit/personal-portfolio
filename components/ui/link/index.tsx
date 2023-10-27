import { cn } from "@/lib/cn";
import Link, { LinkProps } from "next/link";
import { ArrowUpRight } from "lucide-react";

interface LinkTextProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
}

const LinkText: React.FunctionComponent<LinkTextProps> = ({
  className,
  target,
  ...attr
}) => {
  return (
    <Link className={cn("underline", className)} {...attr} target={target}>
      <span>{attr?.children}</span>
    </Link>
  );
};

export default LinkText;


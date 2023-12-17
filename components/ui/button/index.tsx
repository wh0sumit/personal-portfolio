import { cn } from "@/lib/cn";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-xl  bg-neutral-50 font-semibold text-sm hover:bg-neutral-100 hover:text-neutral-600 text-neutral-800 transition-colors border border-dashed duration-300",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;


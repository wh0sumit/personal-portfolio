import { cn } from "@/lib/cn";

interface HeroProps {
  children: React.ReactNode;
  className?: string;
  attr?: React.HTMLAttributes<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ children, ...props }) => {
  return (
    <div className={cn(props.className)} {...props.attr}>
      {children}
    </div>
  );
};

export default Hero;


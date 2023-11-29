import { cn } from "@/lib/cn";
import PageRoute from "../../ui/page-route";

interface ViewContainerProps {
  children: React.ReactNode;
  className?: string;
  attr?: React.HTMLAttributes<HTMLDivElement>;
}

/**
 * ViewContainer is a layout component that wraps the content in a container.
 * @param {React.ReactNode} children - The content to be wrapped.
 * @param {string} className - The class name to be applied to the container.
 * @param {React.HTMLAttributes<HTMLDivElement>} attr - The attributes to be applied to the container.
 * @returns {React.FC} - A React functional component.
 * */

const ViewContainer: React.FC<ViewContainerProps> = ({
  children,
  className,
  attr,
}) => (
  <>
    <PageRoute />
    <div
      className={cn(
        "px-4 mx-auto max-w-2xl sm:px-6 border-dashed border-b py-24",
        className,
      )}
      {...attr}
    >
      {children}
    </div>
  </>
);

export default ViewContainer;

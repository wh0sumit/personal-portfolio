"use client";

import { Undo2 } from "lucide-react";
import LinkText from "../link";
import { usePathname } from "next/navigation";

const PageRoute = () => {
  const pathname = usePathname();
  return (
    pathname !== "/" && (
      <div className=" top-[96px] left-[250px] fixed hidden lg:block text-neutral-500 font-semibold">
        <LinkText
          href={"/"}
          className="no-underline flex justify-center items-center"
        >
          <Undo2 className="inline mr-2 mb-1 text-neutral-500 " size={16} />
          home
        </LinkText>
      </div>
    )
  );
};

export default PageRoute;


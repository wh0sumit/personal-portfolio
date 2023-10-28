import React from "react";
import PageSize from "../ui/page-size";
import TimeAndLocation from "../ui/time-and-location";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <PageSize />
      <TimeAndLocation />
      {children}
    </>
  );
};

export default Layout;


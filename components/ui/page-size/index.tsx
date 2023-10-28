"use client";
import React, { useEffect } from "react";

const PageSize = () => {
  const [width, setWidth] = React.useState<number>(0);
  const [height, setHeight] = React.useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <p className="sm:visible bottom-8 left-8 fixed hidden sm:block font-mono text-xs text-orange-500">{`${width}X${height}`}</p>
    </>
  );
};

export default PageSize;


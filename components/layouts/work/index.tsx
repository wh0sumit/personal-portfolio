import React from "react";
import LinkText from "../../ui/link";

type WorkDetail = {
  title: string;
  description: string;
  link: string;
  isExternal?: boolean;
};

type WorkCategory = {
  name: string;
  details: WorkDetail[];
};

const WorkCategory: WorkCategory[] = [
  {
    name: "Founders Shit.",
    details: [
      {
        title: "Dunolabs",
        description: "Creative software agency based in India",
        link: "https://www.dunolabs.in",
        isExternal: true,
      },
      {
        title: "FF Community",
        description: "A community for first generation founders & builders ",
        link: "https://www.dunolabs.in",
        isExternal: true,
      },
    ],
  },
  {
    name: "Projects",
    details: [
      {
        title: "Invoicetor",
        description: "A simple invoicing web app for small scale businesses",
        link: "https://invoicetor.vercel.app",
        isExternal: true,
      },
      {
        title: "Propack",
        description: "Creative software agency based in India",
        link: "https://www.dunolabs.in",
        isExternal: true,
      },
    ],
  },
  {
    name: "Building",
    details: [
      {
        title: "Crafts",
        description: "Implementing interfaces and interactions.",
        link: "/crafts",
        isExternal: false,
      },
    ],
  },
];

const WorkItem: React.FC<WorkDetail> = ({
  title,
  description,
  link,
  isExternal,
}) => {
  return (
    <>
      <div className="mb-6 flex flex-col gap-2 text-neutral-500">
        <LinkText href={link} isExternal={isExternal}>
          {title}
        </LinkText>
        <p className="text-sm">{description}</p>
      </div>
    </>
  );
};

const Work: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-10">
        {WorkCategory.map((item, index) => {
          return (
            <div key={index}>
              <h1 className="text-md font-medium mb-6 text-neutral-700">
                {item.name}
              </h1>
              <div className="">
                {item.details.map((detail, index) => {
                  return (
                    <WorkItem
                      key={index}
                      title={detail.title}
                      description={detail.description}
                      link={detail.link}
                      isExternal={detail.isExternal}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Work;


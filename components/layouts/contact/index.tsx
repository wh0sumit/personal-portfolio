import LinkText from "@/components/ui/link";

interface ContactProps {
  contactType: string;
  contactLink: string;
}
interface ContactCategory {
  name: string;
  details: ContactProps[];
}

const ContactCategory: ContactCategory[] = [
  {
    name: "Twitter",
    details: [
      {
        contactType: "@wh0sumit",
        contactLink: "https://twitter.com/wh0sumit",
      },
    ],
  },
  {
    name: "LinkedIn",
    details: [
      {
        contactType: "Sumit Singh",
        contactLink: "https://www.linkedin.com/in/sumit-ghosh-1a2b3c4d/",
      },
    ],
  },
  {
    name: "GitHub",
    details: [
      {
        contactType: "wh0sumit",
        contactLink: "https://github.com/wh0sumit",
      },
    ],
  },
  {
    name: "Instagram",
    details: [
      {
        contactType: "@wh0sumit",
        contactLink: "https://www.instagram.com/wh0sumit/",
      },
    ],
  },
];

const Contact: React.FC = () => {
  return (
    <div>
      <h1 className="text-md font-medium text-neutral-700 mb-6">
        You can reach me out at:{" "}
        <LinkText
          href="mailto:wh0sumit.work@gmail.com"
          target="_blank"
          isExternal={true}
        >
          wh0sumit.work@gmail.com
        </LinkText>
      </h1>
      <h1 className="text-md font-medium text-neutral-700 mb-6">
        Or you can find me on socials :
      </h1>

      <div className="grid grid-cols-2 gap-3">
        {ContactCategory.map((item, index) => {
          return (
            <div key={index}>
              {item.details.map((detail, index) => {
                return (
                  <LinkText
                    href={detail.contactLink}
                    target="_blank"
                    isExternal={true}
                    className="text-md font-medium text-neutral-700"
                  >
                    {item.name}
                  </LinkText>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;


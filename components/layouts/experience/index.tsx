interface ExperienceProps {
  title: string;
  description: string;
  date: string;
  link?: string;
  isExternal?: boolean;
}

const Experience: React.FC = () => {
  return (
    <>
      <div>
        <h1 className="text-md font-medium pb-6 my-10 text-neutral-700">
          Experience I have
        </h1>
      </div>
    </>
  );
};

export default Experience;


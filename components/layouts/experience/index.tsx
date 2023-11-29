import LinkText from "@/components/ui/link";
import Seperator from "@/components/ui/seperator";
import ExperienceData from "@/data/experience.json"; // Corrected import statement

interface ExperienceProps {
  experienceTitle: string;
  experienceDescription: string[];
  experienceOrg: {
    name: string;
    link: string;
    websiteDisplayName: string;
  };
  experienceStatus: {
    startAt: string;
    endAt: string;
  };
}

interface ExperienceCategory {
  name: string;
  description?: string;
  details: ExperienceProps[];
}

const Experience: React.FC = () => {
  const ExperienceCategory: ExperienceCategory[] = ExperienceData;

  return (
    <div>
      <h1 className="text-md font-medium text-neutral-700">
        Experience I have acquired over the years : (I'm still learning)
      </h1>
      {ExperienceCategory.map((item, index) => {
        return (
          <div key={index} className="my-10">
            <div>
              <h1 className="text-md font-medium text-neutral-700">
                {item.name}
              </h1>
              <p className="text-md text-neutral-500 mt-2 mb-6">
                {item.description}
              </p>
            </div>
            <div className="experience-header">
              {item.details.map((detail, index) => (
                <div
                  className="border p-5 rounded-xl border-dashed my-3 hover:bg-neutral-50"
                  key={index}
                >
                  <div className="  transition-all duration-300 flex justify-between items-center flex-wrap gap-2">
                    <h1 className="text-md font-medium text-start sm:text-end">
                      {detail.experienceTitle}
                    </h1>
                    <div>
                      <h1 className="font-medium text-start sm:text-end">
                        {detail.experienceOrg.name}
                      </h1>
                      <div className="text-neutral-400 text-sm text-start sm:text-end">
                        {detail.experienceStatus.startAt} -{" "}
                        {detail.experienceStatus.endAt === "present" ? (
                          <span className="text-neutral-500">
                            {detail.experienceStatus.endAt}
                          </span>
                        ) : (
                          detail.experienceStatus.endAt
                        )}
                      </div>
                    </div>
                  </div>

                  <Seperator />

                  <ul className="experience-description mt-5 flex flex-col items-start justify-start gap-2 pl-3">
                    {detail.experienceDescription.map((description, index) => (
                      <li
                        className="font-normal text-zinc-500 text-md list-disc list list-outside"
                        key={index}
                      >
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      <Seperator />
    </div>
  );
};

export default Experience;

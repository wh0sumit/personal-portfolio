import Hero from "../components/layouts/hero";
import Work from "../components/layouts/work";
import LinkText from "../components/ui/link";

export default function Home() {
  return (
    <>
      <Hero className="border-b border-dashed pb-6">
        <div className="heading mb-8">
          <h1 className="text-lg font-medium mb-2 text-neutral-700">
            Sumit Singh{" "}
          </h1>
          {/* <p className="text-md text-neutral-500 ">
            Frontend Engineer & Designer
          </p> */}
        </div>

        <div className="description  flex  flex-col text-md text-neutral-500">
          <p className="mb-8">
            Crafting beautiful interfaces, components and experiences for the
            web with a focus on ux design and branding. Frontend Engineer at{" "}
            <LinkText href="https://www.dunolabs.in" isExternal={true}>
              Dunolabs
            </LinkText>
          </p>
          <p>
            In the past I've developed{" "}
            <LinkText href="https://www.invoicetor.vercel.app" target="_blank">
              Invoicetor
            </LinkText>
            , a simple invoicing app for freelancers and small scale businesses
            & individuals.
          </p>
        </div>
      </Hero>
      <Work />
    </>
  );
}


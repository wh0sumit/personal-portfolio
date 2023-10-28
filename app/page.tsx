import Experience from "../components/layouts/experience";
import Hero from "../components/layouts/hero";
import TechStack from "../components/layouts/tech";
import Work from "../components/layouts/work";
import PageSize from "../components/ui/page-size";
import TimeAndLocation from "../components/ui/time-and-location";

export default function Home() {
  return (
    <>
      <PageSize />
      <TimeAndLocation />
      <Hero />
      <Work />
      <TechStack />
      <Experience />
    </>
  );
}


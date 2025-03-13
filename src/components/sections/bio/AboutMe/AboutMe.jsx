import { AboutMeTitle, AboutMeSubtitle, AboutMeParagraphs, TechStack } from "./ui";

const AboutMeContainer = () => {
  return (
    <section className="wrapper flex flex-col custom-tablet:w-full lg:w-[calc(100vw-45vw)] lg:pl-[calc((100vw-45vw)-43%)] screen-md:pl-[calc((100vw-45vw)-41%)]">
      <header className="w-full h-auto">
        <AboutMeTitle />
      </header>
      <AboutMeSubtitle />
      <AboutMeParagraphs />
      <TechStack />
    </section>
  );
};

export default AboutMeContainer;

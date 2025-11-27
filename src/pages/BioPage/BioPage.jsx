import { BioPageWrapper } from "./BioPage.styled";
import { Hero, AboutMe, Contact } from "./components";

const BioPage = () => {
  return (
    <BioPageWrapper>
      <Hero />
      <AboutMe />
      <Contact />
    </BioPageWrapper>
  );
};

export default BioPage;

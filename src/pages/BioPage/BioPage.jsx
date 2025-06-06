import ThreeCanvas from "./three/ThreeCanvas";
import { BioPageWrapper } from "./BioPage.styled";
import { Hero, AboutMe, Contact } from "./components";

const BioPage = () => {
  return (
    <>
      <ThreeCanvas />
      <BioPageWrapper>
        <Hero />
        <AboutMe />
        <Contact />
      </BioPageWrapper>
    </>
  );
};

export default BioPage;

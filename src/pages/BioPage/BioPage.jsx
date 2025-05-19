import SceneCanvas from "./three/SceneCanvas";
import { BioPageWrapper } from "./BioPage.styled";
import { Hero, AboutMe, Contact } from "./components";

const BioPage = () => {
  return (
    <>
      <SceneCanvas />
      <BioPageWrapper>
        <Hero />
        <AboutMe />
        <Contact />
      </BioPageWrapper>
    </>
  );
};

export default BioPage;

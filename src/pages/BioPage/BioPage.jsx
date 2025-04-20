import { usePageStore } from "../../store/useStore";
import SceneCanvas from "./three/SceneCanvas";
import Loader from "../../components/Loader/Loader";
import {
  CoordinatesDisplay,
  AboutMeParagraphs,
  AboutMeSubtitle,
  AboutMeTitle,
  TechStack,
  ContactTitle,
  SocialLinks,
  FooterText,
} from "./components";
import { HeroContainer, AboutMeContainer, AboutMeContent, ContactContainer, ContactContent } from "./BioPage.styled";

const BioPage = () => {
  const isCanvasLoaded = usePageStore((state) => state.isCanvasLoaded);

  return (
    <>
      <SceneCanvas />
      {!isCanvasLoaded ? (
        <Loader />
      ) : (
        <>
          <HeroContainer>
            <CoordinatesDisplay />
          </HeroContainer>
          <AboutMeContainer>
            <AboutMeContent>
              <AboutMeTitle />
              <AboutMeSubtitle />
              <AboutMeParagraphs />
              <TechStack />
            </AboutMeContent>
          </AboutMeContainer>
          <ContactContainer>
            <ContactContent>
              <ContactTitle />
              <SocialLinks />
              <FooterText />
            </ContactContent>
          </ContactContainer>
        </>
      )}
    </>
  );
};

export default BioPage;

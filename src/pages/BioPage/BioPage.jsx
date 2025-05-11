import { useEffect, useState } from "react";
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
  TextureMask,
  ScrollToExplore,
} from "./components";
import { HeroContainer, AboutMeContainer, AboutMeContent, ContactContainer, ContactContent } from "./BioPage.styled";

const BioPage = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const isCanvasLoaded = usePageStore((state) => state.isCanvasLoaded);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
      document.body.style.overflow = "";
    }, 100);

    return () => clearTimeout(timer);
  }, []); // This effect runs once when the component mounts, set background to white, prevent scrolling to avoid black flashing background-color between page transition

  return (
    <>
      <SceneCanvas />
      {!isCanvasLoaded ? (
        <Loader />
      ) : (
        <>
          <HeroContainer $backgroundColor={isPageLoaded ? "transparent" : "white"}>
            <TextureMask />
            <CoordinatesDisplay />
            <ScrollToExplore />
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

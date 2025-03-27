import SceneCanvas from "./three/SceneCanvas";
import { CoordinatesDisplay, AboutMeParagraphs, AboutMeSubtitle, AboutMeTitle, TechStack, ContactTitle, SocialLinks, FooterText } from "./components";
import { HeroContainer, AboutMeContainer, AboutMeContent, ContactContainer, ContactContent } from "./BioPage.styled";

const BioPage = () => {
  return (
    <>
    <SceneCanvas />
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
  );
}

export default BioPage;

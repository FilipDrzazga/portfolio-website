import { AboutMeTitle, AboutMeSubtitle, AboutMeParagraphs, TechStack } from "./ui";
import { Container, Content } from "./styles/AboutMe.styled";

const AboutMeContainer = () => {
  return (
    <Container>
      <Content>
        <AboutMeTitle />
        <AboutMeSubtitle />
        <AboutMeParagraphs />
        <TechStack />
      </Content>
    </Container>
  );
};

export default AboutMeContainer;

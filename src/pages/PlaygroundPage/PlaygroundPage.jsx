import { Container } from "./PlaygroundPage.styled";
import { PlaygroundHero, PlaygroundList } from "./components";

const PlaygroundPage = () => {
  return (
    <Container>
      <PlaygroundHero />
      <PlaygroundList />
    </Container>
  );
};

export default PlaygroundPage;

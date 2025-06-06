import { PlaygroundPageWrapper } from "./PlaygroundPage.styled";
import ThreeCanvas from "./three/ThreeCanvas";
import { Hero, ShowcaseCard } from "./components";

const PlaygroundPage = () => {
  return (
    <PlaygroundPageWrapper>
      <Hero />
      <ThreeCanvas />
      <ShowcaseCard />
    </PlaygroundPageWrapper>
  );
};

export default PlaygroundPage;

import { PlaygroundPageWrapper } from "./PlaygroundPage.styled";
import SceneCanvas from "./three/SceneCanvas";
import { Hero, ShowcaseCard } from "./components";

const PlaygroundPage = () => {
  return (
    <PlaygroundPageWrapper>
      <Hero />
      <SceneCanvas />
      <ShowcaseCard />
    </PlaygroundPageWrapper>
  );
};

export default PlaygroundPage;

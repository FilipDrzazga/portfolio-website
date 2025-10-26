import { PlaygroundPageWrapper } from "./PlaygroundPage.styled";
import ThreeCanvas from "./three/ThreeCanvas";
import { Hero, ShowcaseCard } from "./components";

const PlaygroundPage = () => {
  return (
    <PlaygroundPageWrapper>
      <Hero />
      <ShowcaseCard />
      {/* <ThreeCanvas /> */}
    </PlaygroundPageWrapper>
  );
};

export default PlaygroundPage;

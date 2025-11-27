import { PlaygroundPageWrapper } from "./PlaygroundPage.styled";
import { Hero, ShowcaseCard } from "./components";

const PlaygroundPage = () => {
  return (
    <PlaygroundPageWrapper>
      <Hero />
      <ShowcaseCard />
    </PlaygroundPageWrapper>
  );
};

export default PlaygroundPage;

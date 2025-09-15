import { ShowcaseCardWrapper, Title } from "./ShowcaseCard.styled";
import { usePageStore } from "../../../../store/useStore";

const ShowcaseCard = () => {
  const playgroundAnimationName = usePageStore((state) => state.playgroundAnimationName);

  return (
    <ShowcaseCardWrapper>
      <Title>{playgroundAnimationName}</Title>
    </ShowcaseCardWrapper>
  );
};

export default ShowcaseCard;

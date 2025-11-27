import {
  CardDescriptionWrapper,
  ShowcaseCardWrapper,
  Title,
  Card,
  TechStack,
  CardImagePlaceholder,
  CardImageWrapper,
  CardImage,
  CardImagePlaceholderWrapper,
} from "./ShowcaseCard.styled";

const ShowcaseCard = () => {
  return (
    <ShowcaseCardWrapper>
      <Card>
        <CardDescriptionWrapper>
          <Title>Experimenting with normals and light behavior,</Title>
          <TechStack>GLSL (Shadertoy)</TechStack>
        </CardDescriptionWrapper>
        <CardImageWrapper>
          <CardImage src="SHADERTOY.0001.JPG" alt="Showcase Card Image" />
        </CardImageWrapper>
        <CardImagePlaceholderWrapper>
          <CardImagePlaceholder>SHADERTOY.0001.JPG</CardImagePlaceholder>
        </CardImagePlaceholderWrapper>
      </Card>
    </ShowcaseCardWrapper>
  );
};

export default ShowcaseCard;

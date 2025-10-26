import styled from "styled-components";

const ShowcaseCardWrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 1260px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  width: 100%;
  height: auto;
`;
const CardDescriptionWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.margins.paragraph};
`;
const Title = styled.h1`
  flex: 2;
  font-family: "JetBrainsMonoRegular", monospace;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => `${theme.fontSizes.paragraph}`};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.paragraph};
  text-align: left;
  font-weight: 400;
  text-align: left;
`;
const TechStack = styled.p`
  flex: 1;
  font-family: "JetBrainsMonoRegular", monospace;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => `${theme.fontSizes.paragraph}`};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.paragraph};
  text-align: left;
  font-weight: 400;
  opacity: 0.5;
  text-align: left;
`;
const CardImageWrapper = styled.div`
  width: 100%;
  height: 50vh;
  background-color: black;
  overflow: hidden;
`;
const CardImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
  aspect-ratio: 16 / 9;
`;
const CardImagePlaceholderWrapper = styled.div`
  width: 100%;
`;
const CardImagePlaceholder = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  font-family: "JetBrainsMonoRegular", monospace;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => `calc(${theme.fontSizes.paragraph} - 0.2rem)`};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.paragraph};
  opacity: 0.5;
`;

export {
  ShowcaseCardWrapper,
  Title,
  TechStack,
  Card,
  CardImage,
  CardImageWrapper,
  CardImagePlaceholderWrapper,
  CardImagePlaceholder,
  CardDescriptionWrapper,
};

import styled from "styled-components";

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: 11.5vh;
  z-index: 1;
`;
const Title = styled.h1`
  width: 100%;
  font-family: "InterRegular", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.h1Special};
  margin-bottom: ${({ theme }) => theme.margins.h1};
  line-height: 0.8;
  text-align: center;
`;
const Subtitle = styled.h2`
  width: 100%;
  font-family: "InterRegular", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  line-height: ${({ theme }) => theme.lineHeights.h2};
  font-weight: 400;
  letter-spacing: ${({ theme }) => theme.lettersSpacing.h2};
`;
const Location = styled.p`
  width: 100%;
  font-family: "JetBrainsMonoRegular", monospace;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.paragraph};
`;
const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.3;
  z-index: -1;
`;
const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 1100px;
  object-fit: cover;
  aspect-ratio: 16 / 9;
`;

export { HeroWrapper, Title, Subtitle, Location, ImageWrapper, Image };

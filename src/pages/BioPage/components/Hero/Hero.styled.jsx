import styled from "styled-components";

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: 11.5vh;
  z-index: 1;
`;
const TitleWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Title = styled.h1`
  width: 100%;
  height: auto;
  font-family: "InterRegular", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.h1Special};
  margin-bottom: ${({ theme }) => theme.margins.h1};
  line-height: 0.8;
  text-align: left;
`;
const Location = styled.p`
  width: 100%;
  font-family: "JetBrainsMonoRegular", monospace;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  letter-spacing: 0.4em;
  span {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    display: inline-block;
    font-family: "JetBrainsMonoBold", sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.paragraph};
    font-weight: 400;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const ContactWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Contact = styled.p`
  font-family: "JetBrainsMonoRegular", monospace;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.paragraph};
`;
const ContactLink = styled.a`
  align-self: flex-end;
  font-family: "JetBrainsMonoExtraBold", sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.paragraph};
  text-align: right;
`;
const Description = styled.p`
  width: 100%;
  max-width: 320px;
  margin-bottom: clamp(1rem, 10vw, 3rem);
  font-family: "JetBrainsMonoRegular", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.paragraph};
  font-weight: 400;
  text-align: left;
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 78%;
  max-width: 600px;
  height: 70%;
  max-height: 1100px;
  top: clamp(67%, 25vh, 75%);
  left: 17%;
  transform: translate(0%, -67%);
  opacity: 0.25;
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

export {
  HeroWrapper,
  TitleWrapper,
  Title,
  Description,
  Location,
  ContactWrapper,
  Contact,
  ContactLink,
  ImageWrapper,
  Image,
};

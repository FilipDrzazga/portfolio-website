import styled from "styled-components";
import { DEVICE } from "../../../../styles/theme";

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  // background-color: ${({ theme }) => theme.colors.primary};
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
const Title1 = styled.h1`
  width: 100%;
  height: auto;
  margin-bottom: clamp(-0.9rem, -2vw, -3rem);
  font-family: "InterExtraBold", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-weight: 700;
  text-align: left;
  line-height: 0.8;
  -webkit-text-size-adjust: 100%;
  @media ${DEVICE["768"]} {
    margin-bottom: clamp(-1.6rem, -1vw, -2rem);
  }
`;
const Title2 = styled.h1`
  width: 100%;
  height: auto;
  font-family: "InterExtraBold", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-weight: 700;
  text-align: left;
  line-height: 1.1;
  -webkit-text-size-adjust: 100%;
`;
const Location = styled.p`
  width: 100%;
  margin-top: -0.2rem;
  font-family: "JetBrainsMonoRegular", monospace;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  letter-spacing: 0.4em;
  margin-top: -0.4rem;
  padding-left: clamp(0rem, 1vw, 0.5rem);
  @media ${DEVICE["768"]} {
    letter-spacing: 0.8em;
    padding-left: clamp(0rem, 10vw, 0.5rem);
    margin-top: clamp(-0.8rem, -1vw, -2rem);
  }
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
    @media ${DEVICE["768"]} {
      left: 0;
      transform: translate(0%, 0%);
      width: 50%;
    }
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
  top: clamp(63%, 25vh, 75%);
  right: 0;
  transform: translate(0%, -67%);
  opacity: 0;
  z-index: -1;
  @media ${DEVICE["768"]} {
    top: clamp(65%, 30vh, 80%);
    right: -9.5%;
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
  Title1,
  Title2,
  Description,
  Location,
  ContactWrapper,
  Contact,
  ContactLink,
  ImageWrapper,
  Image,
};

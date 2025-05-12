import styled from "styled-components";
import { DEVICE } from "../../../../styles/theme";

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: auto;
//   padding: ${({ theme }) => theme.spacing.normal};
//   overflow: hidden;

const AboutMeWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.normal};
`
const Header = styled.header`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
z-index: -1;
  @media ${DEVICE.MOBILE_XS} {
    width: 90%;
  }
  @media ${DEVICE.MOBILE_S} {
    width: 100%;
  }
`;
const Title = styled.h1`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.normal};
  font-family: "Oswald-medium";
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  @media ${DEVICE.MOBILE_S} {
    height: 4rem;
    font-size: 4rem;
  }
`;
const Subtitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-family: "Oswald-medium";
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
  text-align: justify;
  text-justify: inter-word;
  text-align-last: center;
  @media ${DEVICE.MOBILE_XS} {
    width: 89%;
  }
  @media ${DEVICE.MOBILE_S} {
    width: 100%;
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
`;
const ParagraphsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  z-index: -1;
  @media ${DEVICE.MOBILE_XS} {
    width: 90%;
  }
  @media ${DEVICE.MOBILE_S} {
    width: 100%;
  }
`;
const Text = styled.p`
  font-family: "Oswald-regular";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  text-align: justify;
  text-justify: inter-word;
  @media ${DEVICE.MOBILE_S} {
    font-size: 0.8rem;
  }
`;
const TechStackContainer = styled.div`
  @media ${DEVICE.MOBILE_XS} {
    width: 90%;
  }
  @media ${DEVICE.MOBILE_S} {
    width: 100%;
  }
`;
const TechStack = styled.h3`
  font-family: "Oswald-medium";
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1rem;
  text-align: justify;
  text-justify: inter-word;
  @media ${DEVICE.MOBILE_S} {
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
`;

export { AboutMeWrapper, Header, Title, Subtitle, ParagraphsContainer, Text, TechStackContainer, TechStack };
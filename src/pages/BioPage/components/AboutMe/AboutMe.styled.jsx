import styled from "styled-components";
import { DEVICE } from "../../../../styles/theme";

const AboutMeWrapper = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.normal};
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
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
  font-family: "InterRegular";
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  @media ${DEVICE.MOBILE_S} {
    height: 4rem;
    font-size: 4rem;
  }
`;
const Subtitle = styled.h2`
  font-family: "JetBrainsMonoBold";
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.6;
  @media ${DEVICE.MOBILE_XS} {
    width: 89%;
  }
  @media ${DEVICE.MOBILE_S} {
    width: 100%;
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
`;
const ParagraphsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
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
  font-family: "JetBrainsMonoMedium";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.6;
  text-align: justify;
  text-justify: inter-word;
  @media ${DEVICE.MOBILE_S} {
    font-size: 0.8rem;
  }
`;
const TechStackWrapper = styled.div`
  @media ${DEVICE.MOBILE_XS} {
    width: 90%;
  }
  @media ${DEVICE.MOBILE_S} {
    width: 100%;
  }
`;
const TechStack = styled.h3`
  font-family: "JetBrainsMonoBold";
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.primary};
  @media ${DEVICE.MOBILE_S} {
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
`;

export { AboutMeWrapper, Header, Title, Subtitle, ParagraphsWrapper, Text, TechStackWrapper, TechStack };

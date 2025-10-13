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
  padding: ${({ theme }) => theme.spacing.pagePadding};
  @media ${DEVICE["768"]} {
    padding: ${({ theme }) => theme.spacing.xxl};
  }
  @media ${DEVICE["1024"]} {
    padding: ${({ theme }) => theme.spacing.xxxl};
  }
  @media ${DEVICE["1366"]} {
    padding: 20rem;
  }
  @media ${DEVICE["1728"]} {
    padding: 25rem;
  }
  @media ${DEVICE["1920"]} {
    padding: 35rem;
  }
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  z-index: -1;
  @media ${DEVICE["768"]} {
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
  }
`;
const Title = styled.h1`
  width: 100%;
  font-family: "InterRegular";
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.primary};
  @media ${DEVICE["768"]} {
    font-size: ${({ theme }) => theme.fontSizes.ipad};
  }
  @media ${DEVICE["1366"]} {
    font-size: 5rem;
  }
`;
const Subtitle = styled.h2`
  width: 100%;
  font-family: "JetBrainsMonoBold";
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  text-align: left;
  line-height: 1.4;
  @media ${DEVICE["768"]} {
    width: 80%;
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
  @media ${DEVICE["1366"]} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  @media ${DEVICE["1920"]} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};
    @media ${DEVICE["768"]} {
      width: 80%;
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
    @media ${DEVICE["1366"]} {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }
`;
const ParagraphsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  z-index: -1;
  @media ${DEVICE["412"]} {
    gap: 4rem;
  }
  @media ${DEVICE["768"]} {
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
  }
  @media ${DEVICE["768"]} {
    gap: 2.5rem;
  }
  @media ${DEVICE["820"]} {
    gap: 3rem;
  }
  @media ${DEVICE["1366"]} {
    gap: 3.5rem;
  }
`;
const Text = styled.p`
  font-family: "JetBrainsMonoMedium";
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.6;
  text-align: justify;
  text-justify: inter-word;
  @media ${DEVICE["412"]} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
  @media ${DEVICE["768"]} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  @media ${DEVICE["1366"]} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
  @media ${DEVICE["1920"]} {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
const TechStackWrapper = styled.div`
  @media ${DEVICE["768"]} {
    width: 100%;
  }
`;
const TechStack = styled.h3`
  font-family: "JetBrainsMonoBold";
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  @media ${DEVICE["768"]} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
  @media ${DEVICE["1366"]} {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  @media ${DEVICE["1920"]} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export { AboutMeWrapper, Header, Title, Subtitle, ParagraphsWrapper, Text, TechStackWrapper, TechStack };

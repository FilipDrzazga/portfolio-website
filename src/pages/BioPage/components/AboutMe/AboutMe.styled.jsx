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
`;
const Title = styled.h1`
  width: 100%;
  font-family: "InterRegular";
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
`;
const Subtitle = styled.h2`
  width: 100%;
  font-family: "JetBrainsMonoBold";
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
  text-align: left;
  line-height: 1.4;
  span {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};
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
`;
const Text = styled.p`
  font-family: "JetBrainsMonoMedium";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.6;
  text-align: justify;
  text-justify: inter-word;
  @media ${DEVICE["412"]} {
    font-size: ${({ theme }) => theme.fontSizes.smallPlus};
  }
`;
const TechStackWrapper = styled.div``;
const TechStack = styled.h3`
  font-family: "JetBrainsMonoBold";
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.primary};
`;

export { AboutMeWrapper, Header, Title, Subtitle, ParagraphsWrapper, Text, TechStackWrapper, TechStack };

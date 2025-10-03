import styled from "styled-components";
import { DEVICE } from "../../../../styles/theme";

const ContactWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.normal};
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.normal};
`;
const Subtitle = styled.h2`
  width: 100%;
  font-family: "JetBrainsMonoMedium";
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  text-justify: inter-word;
  @media ${DEVICE["412"]} {
    font-size: ${({ theme }) => theme.fontSizes.smallPlus};
  }
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
const Title = styled.h1`
  width: 100%;
  font-family: "InterRegular";
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  text-align: center;
  word-spacing: -0.1rem;
  a {
    text-decoration: none;
    color: inherit;
  }
`;
const SocialLinksWrapper = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.normal};
`;
const SocialLinksList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;
const SocialLinksListItem = styled.li`
  list-style: none;
`;
const SocialLinksLink = styled.a`
  font-family: "JetBrainsMonoMedium";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  @media ${DEVICE["412"]} {
    font-size: ${({ theme }) => theme.fontSizes.smallPlus};
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
const Footer = styled.footer`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.normal};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterText = styled.p`
  font-family: "JetBrainsMonoMedium";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  @media ${DEVICE["412"]} {
    font-size: ${({ theme }) => theme.fontSizes.smallPlus};
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export {
  ContactWrapper,
  Header,
  Title,
  Subtitle,
  SocialLinksWrapper,
  SocialLinksList,
  SocialLinksListItem,
  SocialLinksLink,
  Footer,
  FooterText,
};

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
  @media ${DEVICE.MOBILE_S} {
    font-size: 4rem;
    line-height: 4rem;
  }
`;
const Title = styled.h1`
  width: 100%;
  font-family: "InterRegular";
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  text-align: center;
  a {
    text-decoration: none;
    color: inherit;
  }
  @media ${DEVICE.MOBILE_S} {
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
`;
const SocialLinksWrapper = styled.div`
  width: 100%;
`;
const SocialLinksList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;
const SocialLinksListItem = styled.li`
  list-style: none;
`;
const SocialLinksLink = styled.a`
  font-family: "JetBrainsMonoMedium";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
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
  @media ${DEVICE.MOBILE_S} {
    font-size: 0.8rem;
  }
`;
const Footer = styled.footer`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterText = styled.p`
  font-family: "JetBrainsMonoMedium";
  font-size: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
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

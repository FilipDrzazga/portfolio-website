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
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;
const Subtitle = styled.h2`
  width: 98%;
  font-family: "Oswald-medium";
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1rem;
  text-align: justify;
  text-align-last: justify;
    @media ${DEVICE.MOBILE_S} {
    font-size: 4rem;
    line-height: 4rem;
  }
`;
const Title = styled.h1`
  font-family: "Oswald-medium";
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  word-spacing: -0.2rem;
  line-height: ${({ theme }) => theme.fontSizes.large};
  cursor: pointer;
    a {
    text-decoration: none;
    color: inherit;
  }
    @media ${DEVICE.MOBILE_S} {
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
`;
const SocialLinksContainer = styled.div`
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
  font-family: "Oswald-regular";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
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
  font-family: "Oswald-regular";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
`;



export {ContactWrapper, Header, Title, Subtitle, SocialLinksContainer,SocialLinksList,SocialLinksListItem, SocialLinksLink, Footer, FooterText};
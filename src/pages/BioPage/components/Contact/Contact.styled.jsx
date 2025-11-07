import styled from "styled-components";
import { DEVICE } from "../../../../styles/theme";

const ContactWrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 1260px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`;
const Subtitle = styled.p`
  width: 100%;
  font-family: "JetBrainsMonoRegular", monospace;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.paragraph};
  text-align: center;
  @media ${DEVICE["1920"]} {
    font-size: 1.125rem;
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
    @media ${DEVICE["1920"]} {
      font-size: 1.125rem;
    }
  }
`;
const Title = styled.h1`
  width: 100%;
  height: auto;
  margin-bottom: ${({ theme }) => theme.margins.h1};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  a {
    width: 100%;
    height: auto;
    font-size: 2.9rem;
    font-family: "InterBold", sans-serif;
    font-weight: 700;
    text-decoration: none;
    color: inherit;
    @media ${DEVICE["360"]} {
      font-size: 3rem;
    }
    @media ${DEVICE["375"]} {
      font-size: 3.1rem;
    }
    @media ${DEVICE["412"]} {
      font-size: 3.3rem;
    }
    @media ${DEVICE["430"]} {
      font-size: 4rem;
    }
    @media ${DEVICE["768"]} {
      font-size: 4.3rem;
    }
      @media ${DEVICE["1920"]} {
    font-size: 4.8rem;
  }
`;
const SocialLinksWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.margins.paragraph};
  @media ${DEVICE["1366"]} {
    margin-top: ${({ theme }) => `calc(${theme.margins.paragraph} + 1rem)`};
  }
  @media ${DEVICE["1728"]} {
    margin-top: ${({ theme }) => `calc(${theme.margins.paragraph} + 1.5rem)`};
  }
`;
const SocialLinksList = styled.ul`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${DEVICE["768"]} {
    width: 55%;
  }
  @media ${DEVICE["820"]} {
    width: 50%;
  }
  @media ${DEVICE["1024"]} {
    width: 40%;
  }
  @media ${DEVICE["1366"]} {
    width: 35%;
  }
  @media ${DEVICE["1440"]} {
    width: 32%;
  }
  @media ${DEVICE["1728"]} {
    width: 30%;
  }
  @media ${DEVICE["1920"]} {
    width: 33%;
  }
`;
const SocialLinksListItem = styled.li`
  list-style: none;
`;
const SocialLinksLink = styled.a`
  font-family: "JetBrainsMonoMedium", monospace;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.paragraph};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.margins.paragraph};
  text-decoration: none;
  @media ${DEVICE["1920"]} {
    font-size: 1.125rem;
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
    @media ${DEVICE["1920"]} {
      font-size: 1.125rem;
    }
  }
`;
const Footer = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%, 0%);
`;
const FooterText = styled.p`
  font-family: "JetBrainsMonoRegular", monospace;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.6rem;
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  text-align: center;
  @media ${DEVICE["1728"]} {
    font-size: 0.8rem;
  }
  span {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    display: inline-block;
    font-family: "JetBrainsMonoBold", sans-serif;
    font-size: 0.6rem;
    font-weight: 400;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    @media ${DEVICE["1728"]} {
      font-size: 0.8rem;
    }
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

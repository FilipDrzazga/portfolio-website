import styled from "styled-components";
import { DEVICE } from "../../../../styles/theme";

const AboutMeWrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 1260px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Title = styled.h1`
  width: 100%;
  font-family: "InterBold", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  margin-bottom: ${({ theme }) => theme.margins.h1};
  line-height: ${({ theme }) => theme.lineHeights.h1};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.h1};
  text-align: left;
  font-weight: 700;
`;
const Subtitle = styled.h2`
  width: 100%;
  max-width: 380px;
  font-family: "JetBrainsMonoRegular", monospace;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.75rem;
  margin-bottom: ${({ theme }) => theme.margins.h2};
  margin-left: 0.1rem;
  line-height: ${({ theme }) => theme.lineHeights.h2};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.h2};
  text-align: left;
  font-weight: 400;
  @media ${DEVICE["360"]} {
    font-size: 0.75rem;
  }
  @media ${DEVICE["390"]} {
    font-size: 0.8rem;
  }
  @media ${DEVICE["412"]} {
    font-size: 0.85rem;
  }
  @media ${DEVICE["430"]} {
    font-size: 1rem;
  }
  @media ${DEVICE["768"]} {
    max-width: 80%;
    font-size: 1.1rem;
  }
  @media ${DEVICE["820"]} {
    font-size: 1.2rem;
  }
  @media ${DEVICE["1024"]} {
    max-width: 60%;
  }
  @media ${DEVICE["1366"]} {
    max-width: 55%;
  }
  @media ${DEVICE["1440"]} {
    font-size: 1.2rem;
    max-width: 51%;
  }
  @media ${DEVICE["1920"]} {
    max-width: 55%;
    font-size: 1.4rem;
  }
  span {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    display: inline-block;
    font-family: "JetBrainsMonoBold", sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.h2};
    font-weight: 400;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    @media ${DEVICE["360"]} {
      font-size: 0.75rem;
    }
    @media ${DEVICE["390"]} {
      font-size: 0.8rem;
    }
    @media ${DEVICE["412"]} {
      font-size: 0.85rem;
    }
    @media ${DEVICE["430"]} {
      font-size: 1rem;
    }
    @media ${DEVICE["768"]} {
      font-size: 1.1rem;
    }
    @media ${DEVICE["820"]} {
      font-size: 1.2rem;
    }
    @media ${DEVICE["1920"]} {
      font-size: 1.4rem;
    }
  }
`;
const ParagraphsWrapper = styled.div`
  width: 100%;
  max-width: 1260px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: pre-wrap;
  word-break: normal;
  @media ${DEVICE["1024"]} {
    max-width: 80%;
    align-self: flex-start;
    text-align: left;
  }
  @media ${DEVICE["1366"]} {
    max-width: 80%;
  }
  @media ${DEVICE["1440"]} {
    max-width: 75%;
  }
`;
const Text = styled.p`
  font-family: "JetBrainsMonoRegular", monospace;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  margin-bottom: ${({ theme }) => theme.margins.paragraph};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.paragraph};
  @media ${DEVICE["768"]} {
    width: 80%;
  }
  @media ${DEVICE["1728"]} {
    width: 80%;
  }
  @media ${DEVICE["1920"]} {
    width: 70%;
    font-size: 1.125rem;
    margin-bottom: ${({ theme }) => `calc(${theme.margins.paragraph} + 0.5rem)`};
  }
`;
const TechStackWrapper = styled.div`
  width: 100%;
  max-width: 1260px;
  height: auto;
`;
const TechStack = styled.h3`
  font-family: "InterBold", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: ${({ theme }) => theme.margins.h2};
  font-size: 0.75rem;
  line-height: ${({ theme }) => theme.lineHeights.h2};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.h2};
  text-align: center;
  font-weight: 700;
  @media ${DEVICE["360"]} {
    font-size: 0.9rem;
  }
  @media ${DEVICE["412"]} {
    font-size: 0.95rem;
  }
  @media ${DEVICE["430"]} {
    font-size: 1rem;
  }
  @media ${DEVICE["768"]} {
    font-size: 1.1rem;
  }
  @media ${DEVICE["820"]} {
    font-size: 1.2rem;
  }
  @media ${DEVICE["1366"]} {
    font-size: 1.5rem;
  }
  @media ${DEVICE["1728"]} {
    width: 100%;
    text-align: left;
    text-align-last: center;
    font-size: ${({ theme }) => `calc(${theme.fontSizes.h2} - 0.6rem)`};
  }
`;

export { AboutMeWrapper, Header, Title, Subtitle, ParagraphsWrapper, Text, TechStackWrapper, TechStack };

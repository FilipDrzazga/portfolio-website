import styled from "styled-components";
import { DEVICE } from "../../../../styles/theme";

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 1260px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 12vh;
  z-index: 1;
  @media ${DEVICE["1366"]} {
    gap: 6rem;
  }
`;
const TitleWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media ${DEVICE["1366"]} {
    margin-top: 1.5rem;
  }
  @media ${DEVICE["1728"]} {
    margin-top: 3rem;
  }
`;
const Title1 = styled.h1`
  width: 100%;
  height: auto;
  margin-bottom: clamp(-0.7rem, -2vw, -3rem);
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
  @media ${DEVICE["1728"]} {
    font-size: ${({ theme }) => `calc(${theme.fontSizes.h1} + 1.0rem)`};
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
  @media ${DEVICE["1728"]} {
    font-size: ${({ theme }) => `calc(${theme.fontSizes.h1} + 1.0rem)`};
  }
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
  margin-left: 0.1rem;
  @media ${DEVICE["768"]} {
    letter-spacing: 0.8em;
    margin-top: clamp(-0.8rem, -1vw, -2rem);
  }
  @media ${DEVICE["1366"]} {
    font-size: ${({ theme }) => `calc(${theme.fontSizes.paragraph} - 0.3rem)`};
  }
  @media ${DEVICE["1728"]} {
    font-size: ${({ theme }) => `calc(${theme.fontSizes.paragraph} - 0.5rem)`};
  }
  @media ${DEVICE["1920"]} {
    font-size: ${({ theme }) => `calc(${theme.fontSizes.paragraph} - 0.8rem)`};
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
    @media ${DEVICE["1366"]} {
      font-size: ${({ theme }) => `calc(${theme.fontSizes.paragraph} - 0.3rem)`};
    }
    @media ${DEVICE["1728"]} {
      font-size: ${({ theme }) => `calc(${theme.fontSizes.paragraph} - 0.5rem)`};
    }
    @media ${DEVICE["1920"]} {
      font-size: ${({ theme }) => `calc(${theme.fontSizes.paragraph} - 0.8rem)`};
    }
  }
`;
const Description = styled.p`
  width: 100%;
  max-width: 400px;
  margin-bottom: 3.5rem;
  font-family: "JetBrainsMonoRegular", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.paragraph};
  font-weight: 400;
  text-align: left;
  @media ${DEVICE["360"]} {
    margin-bottom: 4.5rem;
  }
  @media ${DEVICE["390"]} {
    margin-bottom: 5.5rem;
  }
  @media ${DEVICE["1024"]} {
    max-width: 500px;
  }
  @media ${DEVICE["1366"]} {
    max-width: 550px;
    align-self: flex-end;
    margin-right: 20rem;
    text-align: right;
    font-size: ${({ theme }) => `calc(${theme.fontSizes.paragraph} - 0.3rem)`};
  }
  @media ${DEVICE["1728"]} {
    max-width: 700px;
    margin-right: 22rem;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 78%;
  max-width: 600px;
  height: 70%;
  max-height: 1100px;
  top: clamp(60%, 25vh, 75%);
  right: -10%;
  transform: translate(0%, -67%);
  opacity: 0;
  z-index: -1;
  @media ${DEVICE["375"]} {
    top: clamp(63%, 30vh, 75%);
  }
    @media ${DEVICE["390"]} {
    top: clamp(62%, 28vh, 75%);
  }
  @media ${DEVICE["768"]} {
    top: clamp(70%, 30vh, 80%);
    right: -9.5%;
  }
  @media ${DEVICE["1366"]} {
    max-width: 750px;
    height: 85%;
    top: clamp(70%, 35vh, 85%);
    right: -15%;
`;
const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 1100px;
  object-fit: cover;
  aspect-ratio: 16 / 9;
`;

export { HeroWrapper, TitleWrapper, Title1, Title2, Description, Location, ImageWrapper, Image };

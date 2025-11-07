import styled from "styled-components";
import { DEVICE } from "../../../../styles/theme";

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 1260px;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 10vh;
  z-index: 1;
  @media ${DEVICE["375"]} {
    padding-top: 4vh;
  }
  @media ${DEVICE["390"]} {
    padding-top: 6vh;
  }
  @media ${DEVICE["393"]} {
    padding-top: 7vh;
  }
  @media ${DEVICE["412"]} {
    padding-top: 8vh;
  }
  @media ${DEVICE["430"]} {
    padding-top: 9vh;
  }
`;
const TitleWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 1.12;
  @media ${DEVICE["375"]} {
    margin-top: 2.5rem;
  }
  @media ${DEVICE["1366"]} {
    line-height: 1.2;
  }
`;
const Title1 = styled.h1`
  width: 100%;
  height: auto;
  font-family: "InterBold", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-weight: 700;
  text-align: left;
  -webkit-text-size-adjust: 100%;
  @media ${DEVICE["1366"]} {
    margin-bottom: -0.6rem;
  }
  @media ${DEVICE["1920"]} {
    font-size: 3.5rem;
    line-height: auto;
    margin-bottom: -0.6rem;
  }
`;
const Title2 = styled.h1`
  width: 100%;
  height: auto;
  font-family: "InterBold", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-weight: 700;
  text-align: left;
  -webkit-text-size-adjust: 100%;
  @media ${DEVICE["1366"]} {
    margin-bottom: -0.6rem;
  }
  @media ${DEVICE["1920"]} {
    font-size: 3.5rem;
    line-height: auto;
    margin-bottom: -0.6rem;
  }
`;
const Title3 = styled.h1`
  width: 100%;
  height: auto;
  font-family: "InterBold", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-weight: 700;
  text-align: left;
  -webkit-text-size-adjust: 100%;
  @media ${DEVICE["1366"]} {
    margin-bottom: -0.6rem;
  }
  @media ${DEVICE["1920"]} {
    font-size: 3.5rem;
    line-height: auto;
  }
`;
const WorkStatusWrapper = styled.div`
  width: 100%;
  height: auto;
`;
const Status = styled.p`
  width: 100%;
  margin-bottom: 0.8rem;
  font-family: "JetBrainsMonoRegular", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.paragraph};
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
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
`;

const ImageWrapper = styled.div`
  align-self: flex-end;
  width: 180px;
  height: 320px;
  opacity: 0;
  z-index: -1;
  @media ${DEVICE["360"]} {
    width: clamp(200px, 60vw, 600px);
    height: clamp(300px, 120vw, 600px);
  }
  @media ${DEVICE["768"]} {
    width: clamp(200px, 45vw, 600px);
    height: clamp(300px, 90vw, 600px);
  }
  @media ${DEVICE["1024"]} {
    width: 450px;
    height: 800px;
  }
  @media ${DEVICE["1366"]} {
    width: 230px;
    height: 400px;
    margin-right: 10rem;
  }
  @media ${DEVICE["1440"]} {
    width: 280px;
    height: 480px;
    margin-right: 10rem;
  }
  @media ${DEVICE["1920"]} {
    width: 320px;
    height: 550px;
  }
`;
const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 1100px;
  object-fit: cover;
  aspect-ratio: 16 / 9;
`;

export { HeroWrapper, TitleWrapper, Title1, Title2, Title3, WorkStatusWrapper, Status, ImageWrapper, Image };

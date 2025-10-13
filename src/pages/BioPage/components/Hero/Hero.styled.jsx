import styled from "styled-components";
import { DEVICE } from "../../../../styles/theme";

const HeroWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  padding: ${({ theme }) => theme.spacing.pagePadding};

  @media ${DEVICE["360"]} {
    gap: 3rem;
  }
  @media ${DEVICE["375"]} {
    gap: 2.8rem;
  }
  @media ${DEVICE["390"]} {
    gap: 3.5rem;
  }
  @media ${DEVICE["412"]} {
    gap: 3.8rem;
  }
  @media ${DEVICE["430"]} {
    gap: 4rem;
  }
  @media ${DEVICE["768"]} {
    gap: 5.5rem;
  }
  @media ${DEVICE["1024"]} {
    gap: 6rem;
  }
  @media ${DEVICE["1366"]} {
    gap: 2.8rem;
  }
`;

const CoordinatesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 74%;
  @media ${DEVICE["768"]} {
    justify-content: center;
    gap: 5.3rem;
  }
  @media ${DEVICE["820"]} {
    gap: 6rem;
  }
  @media ${DEVICE["1024"]} {
    gap: 8.5rem;
  }
  @media ${DEVICE["1366"]} {
    width: 100%;
    gap: 10rem;
  }
`;
const CoordinatesText = styled.p`
  position: relative;
  font-family: "JetBrainsMonoMedium";
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary};

  @media ${DEVICE["412"]} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
  @media ${DEVICE["768"]} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  @media ${DEVICE["1366"]} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};

    @media ${DEVICE["412"]} {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
    @media ${DEVICE["768"]} {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
    @media ${DEVICE["1366"]} {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
`;
const ScrollTextWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;

  @media ${DEVICE["360"]} {
    margin-bottom: 2.5rem;
  }
  @media ${DEVICE["375"]} {
    margin-bottom: 2rem;
  }
  @media ${DEVICE["390"]} {
    margin-bottom: 3rem;
  }
  @media ${DEVICE["412"]} {
    margin-bottom: 3rem;
  }
  @media ${DEVICE["430"]} {
    margin-bottom: 3rem;
  }
  @media ${DEVICE["768"]} {
    margin-bottom: 3rem;
  }
  @media ${DEVICE["1024"]} {
    margin-bottom: 5rem;
  }
  @media ${DEVICE["1366"]} {
    margin-bottom: -1rem;
  }
`;
const ScrollText = styled.p`
  font-family: "JetBrainsMonoMedium";
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary};
  @media ${DEVICE["412"]} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
  @media ${DEVICE["768"]} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  @media ${DEVICE["1366"]} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};

    @media ${DEVICE["768"]} {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
    @media ${DEVICE["1366"]} {
      font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export { HeroWrapper, CoordinatesWrapper, CoordinatesText, ScrollTextWrapper, ScrollText };

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
  padding: ${({ theme }) => theme.spacing.normal};

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
  @media ${DEVICE["768"]} {
    gap: 4.5rem;
  }
`;

const CoordinatesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 74%;
`;
const CoordinatesText = styled.p`
  position: relative;
  font-family: "JetBrainsMonoMedium";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};

  @media ${DEVICE["412"]} {
    font-size: ${({ theme }) => theme.fontSizes.smallPlus};
  }
  @media ${DEVICE["768"]} {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};

    @media ${DEVICE["412"]} {
      font-size: ${({ theme }) => theme.fontSizes.smallPlus};
    }
    @media ${DEVICE["768"]} {
      font-size: ${({ theme }) => theme.fontSizes.medium};
    }
  }
`;
const ScrollTextWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;

  @media ${DEVICE["360"]} {
    margin-bottom: 3rem;
  }
  @media ${DEVICE["375"]} {
    margin-bottom: 2.2rem;
  }
  @media ${DEVICE["390"]} {
    margin-bottom: 3rem;
  }
  @media ${DEVICE["412"]} {
    margin-bottom: 3.8rem;
  }
  @media ${DEVICE["768"]} {
    margin-bottom: 2rem;
  }
`;
const ScrollText = styled.p`
  font-family: "JetBrainsMonoMedium";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  @media ${DEVICE["412"]} {
    font-size: ${({ theme }) => theme.fontSizes.smallPlus};
  }
  @media ${DEVICE["768"]} {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};

    @media ${DEVICE["768"]} {
      font-size: ${({ theme }) => theme.fontSizes.medium};
    }
  }
`;

export { HeroWrapper, CoordinatesWrapper, CoordinatesText, ScrollTextWrapper, ScrollText };

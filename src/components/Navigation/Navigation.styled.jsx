import styled from "styled-components";
import { Link } from "react-router";
import { DEVICE } from "../../styles/theme";

const NavigationWrapper = styled.nav`
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1000;
  padding: clamp(1rem, 5vw, 3rem); // same as global padding
  @media ${DEVICE["1366"]} {
    max-width: 1260px;
    padding: 0;
  }
  @media ${DEVICE["1440"]} {
    max-width: 1440px;
    padding: 0 8rem;
  }
  @media ${DEVICE["1728"]} {
    padding: 0 6rem;
  }
`;
const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1260px;
  height: 100%;
  color: ${({ theme }) => theme.colors.primary};
  list-style: none;
  @media ${DEVICE["1366"]} {
  }
`;
const NavigationItem = styled.li`
  cursor: pointer;
`;
const NavigationLink = styled(Link)`
  text-decoration: none;
  font-family: "JetBrainsMonoRegular", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.paragraph};
  @media ${DEVICE["1366"]} {
    font-size: ${({ theme }) => `calc(${theme.fontSizes.paragraph} - 0.4rem)`};
  }
  @media ${DEVICE["1728"]} {
    font-size: ${({ theme }) => `calc(${theme.fontSizes.paragraph} - 0.6rem)`};
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
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    @media ${DEVICE["1366"]} {
      font-size: ${({ theme }) => `calc(${theme.fontSizes.paragraph} - 0.3rem)`};
    }
    @media ${DEVICE["1728"]} {
      font-size: ${({ theme }) => `calc(${theme.fontSizes.paragraph} - 0.6rem)`};
    }
    @media ${DEVICE["1920"]} {
      font-size: ${({ theme }) => `calc(${theme.fontSizes.paragraph} - 0.8rem)`};
    }
  }
`;

export { NavigationWrapper, NavigationList, NavigationItem, NavigationLink };

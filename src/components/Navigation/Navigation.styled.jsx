import styled from "styled-components";
import { Link } from "react-router";
import { DEVICE } from "../../styles/theme";

const NavigationWrapper = styled.nav`
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: ${({ theme }) => theme.spacing.pagePadding};
`;
const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  font-family: "JetBrainsMonoMedium";
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary};
  list-style: none;
  @media ${DEVICE["412"]} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
  @media ${DEVICE["768"]} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  @media ${DEVICE["1366"]} {
    justify-content: center;
    gap: 10rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;
const NavigationItem = styled.li`
  margin: 0 1rem;
  cursor: pointer;
`;
const NavigationLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  span {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
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
      font-size: ${({ theme }) => theme.fontSizes.xs};
    }
  }
`;

export { NavigationWrapper, NavigationList, NavigationItem, NavigationLink };

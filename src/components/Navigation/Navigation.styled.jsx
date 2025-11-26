import styled from "styled-components";
import { Link } from "react-router";
import { DEVICE } from "../../styles/theme";

const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
const Button = styled.button`
  width: auto;
  height: auto;
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-family: "JetBrainsMonoBold", sans-serif;
  font-weight: 400;
  color: ${({ $isClicked, theme }) => (!$isClicked ? theme.colors.secondary : theme.colors.primary)};
  text-align: right;
  background: none;
  border: none;
  cursor: pointer;
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 10vh;
  right: 0;
  width: 100vw;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-left: clamp(1rem, 5vw, 3rem);
  padding-right: clamp(1rem, 5vw, 3rem);
  background-color: transparent;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
`;
const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  list-style: none;
  padding-bottom: 15vh;
`;
const NavigationItem = styled.li`
  width: auto;
  height: auto;
  cursor: pointer;
`;
const NavigationLink = styled(Link)`
  text-decoration: none;
  font-family: "JetBrainsMonoExtraBold", sans-serif;
  font-size: 82px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.paragraph};
  span {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    display: inline-block;
    font-family: "InterBold", sans-serif;
    font-size: 36px;
    font-weight: 700;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export { NavigationWrapper, Button, MenuWrapper, NavigationList, NavigationItem, NavigationLink };

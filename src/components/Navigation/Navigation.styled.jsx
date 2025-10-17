import styled from "styled-components";
import { Link } from "react-router";

const NavigationWrapper = styled.nav`
  width: 100%;
  max-width: 1440px;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: clamp(1rem, 5vw, 3rem); // same as global padding
`;
const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.primary};
  list-style: none;
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
  }
`;

export { NavigationWrapper, NavigationList, NavigationItem, NavigationLink };

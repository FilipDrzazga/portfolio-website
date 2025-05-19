import styled from "styled-components";

const NavigationWrapper = styled.nav`
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: ${({ theme }) => theme.spacing.normal};
`;
const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  font-family: "JetBrainsMonoMedium";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  list-style: none;
  margin: 0;
  padding: 0;
`;
const NavigationItem = styled.li`
  margin: 0 1rem;
  cursor: pointer;
`;
const NavigationLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export { NavigationWrapper, NavigationList, NavigationItem, NavigationLink };

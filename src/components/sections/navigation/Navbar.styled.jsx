import { Link } from "react-router";
import styled from "styled-components";
import { DEVICE } from "../../../styles/theme";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: clamp(10vh, 15vh, 20vh);
  padding: ${({ theme }) => theme.spacing.normal};
`;
const NavbarMask = styled.div`
  width: 100%;
  height: 20vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  backdrop-filter: blur(10px);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0) 100%);
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0) 100%);
`;
const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const ListItem = styled.li``;
const NavLink = styled(Link)`
  font-family: "Oswald-regular";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  outline: none;
  @media ${DEVICE.MOBILE_S} {
    font-size: 0.8rem;
  }
`;

export { NavbarContainer, NavbarMask, List, ListItem, NavLink };

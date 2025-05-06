import { Link } from "react-router";
import styled from "styled-components";
import { motion } from "motion/react";
import { DEVICE } from "../../styles/theme";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: clamp(5vh, 10vh, 15vh);
  padding: ${({ theme }) => theme.spacing.normal};
  z-index: 1;
`;
// const NavbarMask = styled.div`
//   width: 100%;
//   height: 20vh;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: -1;
//   backdrop-filter: blur(10px);
//   -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0) 100%);
//   mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0) 100%);
// `;
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
const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  .processing {
    position: absolute;
    top: 5%;
    left: 10%;
    font-family: "Oswald-regular";
    font-size: 0.5rem;
    color: #ff6961;
    pointer-events: none;
  }
  a {
    display: inline-block;
    font-family: "Oswald-regular";
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    outline: none;
    @media ${DEVICE.MOBILE_S} {
      font-size: 0.8rem;
    }
  }
  &[data-tabname="WORK"] {
    position: relative;
    width: 15%;
    pointer-events: none;
    cursor: not-allowed;
  }
`;
const NavLink = styled(motion(Link))`
  display: inline-block;
  @media ${DEVICE.MOBILE_S} {
    font-size: 0.8rem;
  }
`;

export { NavbarContainer, List, ListItem, NavLink };

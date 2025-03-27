import { usePageStore } from "../../store/useStore";
import { NAVIGATION_LINKS } from "../../utils/constants";
import { NavbarContainer, NavbarMask, List, ListItem, NavLink } from "./Navbar.styled";

const Navbar = () => {
  const isCanvasLoaded = usePageStore((state) => state.isCanvasLoaded);

  return (
    <NavbarContainer>
      <List>
        {NAVIGATION_LINKS.map((text, i) => (
          <ListItem key={i}>
            <NavLink to={`/${text.toLowerCase()}`}>{text}</NavLink>
          </ListItem>
        ))}
      </List>
      <NavbarMask />
    </NavbarContainer>
  );
};

export default Navbar;

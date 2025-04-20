import { usePageStore } from "../../store/useStore";
import { NAVIGATION_LINKS } from "../../utils/constants";
import { NavbarContainer, NavbarMask, List, ListItem, NavLink } from "./Navbar.styled";

const Navbar = () => {
  const isCanvasLoaded = usePageStore((state) => state.isCanvasLoaded);
  if (!isCanvasLoaded) return null;

  return (
    <NavbarContainer>
      <List>
        {NAVIGATION_LINKS.map((text, i) => (
          <ListItem key={i} data-tabname={text}>
            <NavLink to={`/${text.toLowerCase()}`}>{text}</NavLink>
          </ListItem>
        ))}
        <ListItem>
          <a href="mailto:filip.drzazga@gmail.com">LET&apos;S TALK</a>
        </ListItem>
      </List>
      <NavbarMask />
    </NavbarContainer>
  );
};

export default Navbar;

import { NAVIGATION_LINKS } from "../../utils/constants";
import { NavbarContainer, NavbarMask, List, ListItem, NavLink } from "./Navbar.styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <List>
        {NAVIGATION_LINKS.map((text, i) => (
          <ListItem key={i} data-progress={text}>
            <NavLink to={`/${text.toLowerCase()}`}>{text}</NavLink>
          </ListItem>
        ))}
      </List>
      <NavbarMask />
    </NavbarContainer>
  );
};

export default Navbar;

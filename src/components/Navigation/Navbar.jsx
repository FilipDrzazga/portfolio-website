import { motion } from "motion/react";
import { usePageStore } from "../../store/useStore";
import { NAVIGATION_LINKS } from "../../utils/constants";
import { NavbarContainer, NavbarMask, List, ListItem, NavLink } from "./Navbar.styled";

let hasAnimated = false;

const Navbar = () => {
  const isCanvasLoaded = usePageStore((state) => state.isCanvasLoaded);

  if (!isCanvasLoaded) return null;

  return (
    <NavbarContainer>
      <List>
        {NAVIGATION_LINKS.map((text, i) => (
          <ListItem key={i} data-tabname={text}>
            <NavLink
              initial={!hasAnimated && { y: -15 }}
              animate={!hasAnimated && { y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
              onAnimationComplete={() => (hasAnimated = true)}
              to={`/${text.toLowerCase()}`}
            >
              {text}
            </NavLink>
          </ListItem>
        ))}
        <ListItem>
          <motion.a
            href="mailto:filip.drzazga@gmail.com"
            initial={!hasAnimated && { y: -15 }}
            animate={!hasAnimated && { y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
            onAnimationComplete={() => (hasAnimated = true)}
          >
            LET&apos;S TALK
          </motion.a>
        </ListItem>
      </List>
      <NavbarMask />
    </NavbarContainer>
  );
};

export default Navbar;

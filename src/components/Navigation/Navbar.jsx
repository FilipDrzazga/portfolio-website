import { motion } from "motion/react";
import { usePageStore } from "../../store/useStore";
import { NAVIGATION_LINKS } from "../../utils/constants";
import { NavbarContainer, List, ListItem, NavLink } from "./Navbar.styled";

const Navbar = () => {
  const isCanvasLoaded = usePageStore((state) => state.isCanvasLoaded);

  if (!isCanvasLoaded) return null;

  return (
    <NavbarContainer>
      <List>
        {NAVIGATION_LINKS.map((text, i) => (
          <ListItem key={i} data-tabname={text}>
            <NavLink
              initial={{ y: -15 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
              to={`/${text.toLowerCase()}`}
            >
              {text}
            </NavLink>
            {text === "WORK" && (
              <motion.span
                className="processing"
                initial={{ y: 15 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
              >
                PROCESSING
              </motion.span>
            )}
          </ListItem>
        ))}
        <ListItem>
          <motion.a
            href="mailto:filip.drzazga@gmail.com"
            initial={{ y: -15 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
          >
            LET&apos;S TALK
          </motion.a>
        </ListItem>
      </List>
    </NavbarContainer>
  );
};

export default Navbar;

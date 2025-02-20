import { motion } from "motion/react";
import { NAVIGATION_LINKS, SPECIAL_SIGNS_ARR } from "../../utils/constants";

const ContainerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, staggerChildren: 0.1, delayChildren: 0.3 } },
};
const ItemVariants = {
  initial: { opacity: 0, "--after-opacity": 1 },
  animate: { opacity: 1, "--after-opacity": 0 },
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 navbar-mask-blur px-8 bg-transparent backdrop-blur-sm z-1">
      <ul className="flex justify-between items-center w-full h-full">
        {NAVIGATION_LINKS.map((text, i) => {
          return (
            <li
              key={i}
              data-tab-name={text}
              className="data-[tab-name=LET'S TALK] flex justify-center items-center w-auto h-6 tracking-wide"
            >
              <motion.a variants={ContainerVariants} initial="initial" animate="animate" className="text-tiny font-oswald-l">
                {text.split("").map((letter, j) => {
                  const getRandomSign = SPECIAL_SIGNS_ARR[Math.floor(Math.random() * SPECIAL_SIGNS_ARR.length)];
                  return (
                    <motion.span
                      key={j}
                      className="with-after-content relative"
                      variants={ItemVariants}
                      data-content={getRandomSign}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </motion.a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

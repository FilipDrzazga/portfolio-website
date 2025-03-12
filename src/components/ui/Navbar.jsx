import { Link } from "react-router";
import { motion, useScroll, useAnimate, useMotionValueEvent } from "motion/react";
import { useMediaQuery } from "react-responsive";
import { NAVIGATION_LINKS, SPECIAL_SIGNS_ARR } from "../../utils/constants";

const ContainerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.3 } },
};
const ItemVariants = {
  initial: { opacity: 0, "--after-opacity": 1 },
  animate: { opacity: 1, "--after-opacity": 0 },
};

const Navbar = () => {
  const [ref, animate] = useAnimate();
  const { scrollYProgress } = useScroll();
  const isScreen = useMediaQuery({ minWidth: 1024 });
  const isCustomRange = useMediaQuery({
    width: 1024,
    height: 1366,
  });

  useMotionValueEvent(scrollYProgress, "change", (latestScrollY) => {
    if (isScreen && !isCustomRange) return;
    if (latestScrollY === 1) {
      animate(ref.current, { color: "#d1d1d1", duration: 0.1 });
    } else {
      animate(ref.current, { color: "#1e1e1e", duration: 0.1 });
    }
  });

  return (
      <nav className="fixed top-0 left-0 flex justify-center items-center w-full h-25 custom-tablet:w-full lg:w-[calc(100vw-45vw)] lg:h-[10vh] lg:p-8 2xl:w-[calc(100vw-46vw)] navbar-mask-blur p-8 pt-0 bg-transparent backdrop-blur-sm z-1">
        <ul ref={ref} className="flex justify-between items-center w-full h-1/2 laptop:w-3/5">
          {NAVIGATION_LINKS.map((text, i) => {
            console.log(text);
            return (
              <motion.li
                key={i}
                data-tab-name={text}
                className="data-[tab-name=LET'S TALK] flex justify-center items-center w-auto h-6 tracking-wide cursor-pointer tablet-md:w-28 tablet-md:h-10 lg:w-auto lg:h-5 xl:h-6"
              >
                <motion.div
                  variants={ContainerVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Link className="text-tiny font-oswald-l mobile-md:text-xs tablet-md:text-sm lg:text-xs xl:text-tiny 2xl:text-sm screen-lg:text-xs" to={`/${text.toLowerCase()}`}>{text.split("").map((letter, j) => {
                  const getRandomSign = SPECIAL_SIGNS_ARR[Math.floor(Math.random() * SPECIAL_SIGNS_ARR.length)];
                  return (
                    <motion.span
                      key={j}
                      className="navbar-after-content relative"
                      variants={ItemVariants}
                      data-content={getRandomSign}
                    >
                      {letter}
                    </motion.span>
                  );
                })}</Link>
                </motion.div>
              </motion.li>
            );
          })}
        </ul>
      </nav>
  );
};

export default Navbar;

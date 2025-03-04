import { motion, useScroll,useAnimate, useMotionValueEvent} from "motion/react";
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
  const {scrollYProgress }= useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latestScrollY) => {
    if(latestScrollY === 1){
      animate(ref.current, {color: '#d1d1d1',duration: 0.1})
    }
    else{
      animate(ref.current,{color: '#1e1e1e', duration: 0.1})
    }
  });
  
  return (
    <nav className="fixed top-0 left-0 w-full h-16 navbar-mask-blur px-8 bg-transparent backdrop-blur-sm z-1">
      <ul ref={ref} className="flex justify-between items-center w-full h-full">
        {NAVIGATION_LINKS.map((text, i) => {
          return (
            <li
              key={i}
              data-tab-name={text}
              className="data-[tab-name=LET'S TALK] flex justify-center items-center w-auto h-6 tracking-wide tablet-md:w-28 tablet-md:h-10 lg:w-36 lg:h-12"
            >
              <motion.a variants={ContainerVariants} initial="initial" animate="animate" className="text-tiny font-oswald-l mobile-md:text-xs md:text-base tablet-md:text-lg lg:text-xl">
                {text.split("").map((letter, j) => {
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

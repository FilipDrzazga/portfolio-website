import { motion, useScroll, useTransform } from "motion/react";
import { useMediaQuery } from "react-responsive";
import { AVAILABILITY_TEXT, COORDINATES_ARR, SPECIAL_SIGNS_ARR } from "../../../utils/constants";

const ContainerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.3 } },
  fadeOnScroll: { opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } },
};
const ItemVariants = {
  initial: { opacity: 0, "--after-opacity": 1 },
  animate: { opacity: 1, "--after-opacity": 0 },
};

const CircleVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: { duration: 1, type: "spring", stiffness: 100, damping: 5, repeat: Infinity, repeatType: "reverse" },
  }
};

const CircleBorderVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: [0, 1, 0],
    transition: { duration: 1, repeat: Infinity, repeatDelay: 3.5 },
  }
};

const Bio = () => {
  const { scrollY } = useScroll();
  const isScreen = useMediaQuery({ minWidth: 1024 });
  const isCustomRange = useMediaQuery({
    width: 1024,
    height: 1366,
  });
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const y = useTransform(scrollY, [0, 110], [0, -15]);

  return (
    <section className="wrapper flex flex-col justify-end custom-tablet:w-full lg:w-[calc(100vw-45vw)] laptop:items-center">
      {isScreen && !isCustomRange && (
        <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex flex-col justify-center items-center gap-1">
          <div className="flex justify-center items-center gap-0.5"> 
          {AVAILABILITY_TEXT.map((text,i)=>(
            <motion.div className="flex justify-center items-center" variants={ContainerVariants} initial='initial' animate='animate' key={i}>{text.split('').map((letter,j)=>{
              const getRandomSign = SPECIAL_SIGNS_ARR[Math.floor(Math.random() * SPECIAL_SIGNS_ARR.length)];
              return (
                <motion.span
                variants={ItemVariants}
                key={j}
                className="relative coordinates-after-content font-oswald-l text-tiny text-black lg:text-xs xl:text-tiny 2xl:text-sm screen-lg:text-xs"
                data-content={getRandomSign}
                >{letter}</motion.span>
              )
            })}</motion.div>
          ))}
          </div>
          <div className="relative flex justify-center items-center w-4 h-4">
            <motion.div variants={CircleVariants} initial='initial' animate='animate' className="w-2 h-2 rounded-full bg-green"></motion.div>
            <motion.div variants={CircleBorderVariants} initial='initial' animate='animate' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-5 h-5 border border-green bg-transparent"></motion.div>
          </div>
        </div>
      )}
      <div className="relative flex justify-between w-full h-auto laptop:w-3/5">
        {COORDINATES_ARR.map((text, i) => (
          <motion.div
            key={i}
            style={{ opacity, y }}
            variants={ContainerVariants}
            initial="initial"
            animate="animate"
            className="flex laptop:justify-center laptop:items-center"
          >
            {text.split("").map((letter, j) => {
              const getRandomSign = SPECIAL_SIGNS_ARR[Math.floor(Math.random() * SPECIAL_SIGNS_ARR.length)];
              return (
                <motion.span
                  key={j}
                  className="coordinates-after-content relative font-oswald-r text-tiny text-black inline-block mobile-md:text-xs tablet-md:text-xs lg:font-oswald-l xl:text-tiny 2xl:text-sm screen-lg:text-xs"
                  variants={ItemVariants}
                  data-content={getRandomSign}
                >
                  {letter}
                </motion.span>
              );
            })}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Bio;

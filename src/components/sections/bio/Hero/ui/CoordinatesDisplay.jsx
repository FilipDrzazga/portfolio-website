import { motion } from "motion/react";
import { COORDINATES_ARR, SPECIAL_SIGNS_ARR } from "../../../../../utils/constants";

const ContainerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.3 } },
};

const ItemVariants = {
  initial: { opacity: 0, "--after-opacity": 1 },
  animate: { opacity: 1, "--after-opacity": 0 },
};

const CoordinatesDisplay = ({ opacity, y }) => {
  return (
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
  );
};

export default CoordinatesDisplay;

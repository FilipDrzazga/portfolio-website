import { motion } from "motion/react";
import { AVAILABILITY_TEXT, SPECIAL_SIGNS_ARR } from "../../../../../utils/constants";

const ContainerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.3 } },
};

const ItemVariants = {
  initial: { opacity: 0, "--after-opacity": 1 },
  animate: { opacity: 1, "--after-opacity": 0 },
};

const AvailabilityText = () => {
  return (
    <div className="flex justify-center items-center gap-0.5">
      {AVAILABILITY_TEXT.map((text, i) => (
        <motion.div className="flex justify-center items-center" variants={ContainerVariants} initial="initial" animate="animate" key={i}>
          {text.split("").map((letter, j) => {
            const getRandomSign = SPECIAL_SIGNS_ARR[Math.floor(Math.random() * SPECIAL_SIGNS_ARR.length)];
            return (
              <motion.span
                key={j}
                variants={ItemVariants}
                className="relative availability-after-content font-oswald-l text-tiny text-black lg:text-xs xl:text-tiny 2xl:text-sm screen-lg:text-xs"
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

export default AvailabilityText;

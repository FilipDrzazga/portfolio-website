import { motion } from "motion/react";

const CircleVariants = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { duration: 1, type: "spring", stiffness: 100, damping: 5, repeat: Infinity, repeatType: "reverse" } },
};

const CircleBorderVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: [0, 1, 0], transition: { duration: 1, repeat: Infinity, repeatDelay: 3.5 } },
};

const AvailabilityIndicator = () => {
  return (
    <div className="relative flex justify-center items-center w-4 h-4">
      <motion.div variants={CircleVariants} initial="initial" animate="animate" className="w-2 h-2 rounded-full bg-green"></motion.div>
      <motion.div variants={CircleBorderVariants} initial="initial" animate="animate" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-5 h-5 border border-green bg-transparent"></motion.div>
    </div>
  );
};

export default AvailabilityIndicator;

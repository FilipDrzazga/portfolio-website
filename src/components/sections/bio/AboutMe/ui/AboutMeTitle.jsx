import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { TITLE_TEXT_ARR } from "../../../../../utils/constants";

const ItemVariants = {
  initial: { y: "100%" },
  animate: (i) => ({ y: "0%", transition: { duration: 0.5, delay: i * 0.05 } }),
};

const AboutMeTitle = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: "all" });

  return (
    <motion.h1
      ref={ref}
      className="w-full h-auto flex flex-col font-oswald-m text-[2rem] text-black leading-7 tracking-tighter mobile-sm:text-4xl mobile-sm:leading-8 mobile-sm-plus:text-[2.5rem] mobile-sm-plus:leading-9 mobile-md:text-[2.7rem] mobile-md:leading-10 mobile-lg:text-[2.8rem] md:text-6xl md:leading-13 tablet-md:text-7xl tablet-md:leading-16 custom-tablet:text-8xl custom-tablet:leading-22 lg:text-5xl lg:leading-12 xl:text-6xl xl:leading-13"
    >
      {TITLE_TEXT_ARR.map((text, i) => (
        <p className="relative w-full overflow-hidden" key={i}>
          <span className="invisible">{text}</span>
          <motion.span
            custom={i}
            variants={ItemVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="absolute w-full left-0 -top-px"
          >
            {text}
          </motion.span>
        </p>
      ))}
    </motion.h1>
  );
};

export default AboutMeTitle;

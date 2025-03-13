import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CONTACT_TITLE_ARR } from "../../../../../utils/constants";

const ContactTitleVariants = {
  initial: { y: "100%" },
  animate: (i) => ({ y: "0%", transition: { duration: 0.5, delay: i * 0.05 } }),
};

const ContactTitle = () => {
  const titleRef = useRef();
  const isInViewTitle = useInView(titleRef, { once: true, amount: 0.4 });

  return (
    <motion.h2
      ref={titleRef}
      className="w-full h-auto flex flex-col font-oswald-m text-[2rem] text-white  tracking-tighter mobile-sm:text-4xl mobile-sm:leading-8 mobile-sm-plus:text-[2.5rem] mobile-sm-plus:leading-9 mobile-md:text-[2.7rem] mobile-md:leading-10 mobile-lg:text-[2.8rem] mobile-lg:leading-10 md:text-6xl md:leading-13 tablet-md:text-7xl tablet-md:leading-16 custom-tablet:flex-col custom-tablet:justify-start custom-tablet:items-start custom-tablet:text-8xl custom-tablet:leading-22 custom-tablet:text-white leading-7 lg:text-black lg:text-[2.5rem] lg:leading-11 lg:flex-row lg:flex-wrap lg:justify-center lg:items-center xl:text-[3.3rem] xl:leading-12"
    >
      {CONTACT_TITLE_ARR.map((text, i) => (
        <p className="relative w-full overflow-hidden lg:w-auto lg:mr-1" key={i}>
          <span className="invisible">{text}</span>
          <motion.span
            custom={i}
            variants={ContactTitleVariants}
            initial="initial"
            animate={isInViewTitle ? "animate" : "initial"}
            className="absolute w-full left-0 -top-px"
          >
            {text}
          </motion.span>
        </p>
      ))}
    </motion.h2>
  );
};

export default ContactTitle;

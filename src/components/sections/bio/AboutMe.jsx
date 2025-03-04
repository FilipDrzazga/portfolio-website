import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  TITLE_TEXT_ARR,
  SUBTITLE_TEXT_ARR,
  PARAGRAPH_TEXT1_ARR,
  PARAGRAPH_TEXT2_ARR,
  PARAGRAPH_TEXT3_ARR,
  PARAGRAPH_TEXT4_ARR,
  TECH_STACK,
} from "../../../utils/constants";

const ItemVariants = {
  initial: { y: "100%" },
  animate: (i) => ({ y: "0%", transition: { duration: 0.5, delay: i * 0.05 } }),
};

const AboutMe = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: "all" });

  return (
    <section className="wrapper h-auto flex flex-col">
      <header className="w-full h-auto">
        <motion.h1
          ref={ref}
          className="w-full h-auto flex flex-col font-oswald-m text-huge text-black leading-7 tracking-tighter mobile-sm:text-xl mobile-sm:leading-8 mobile-md:text-2xl mobile-md:leading-9"
        >
          {TITLE_TEXT_ARR.map((text, i) => (
            <p className="relative w-full overflow-hidden" key={i}>
              <span className="invisible">{text}</span>
              <motion.span
                custom={i}
                variants={ItemVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                viewport={{ once: true }}
                className="absolute w-full left-0 -top-px"
                key={i}
              >
                {text}
              </motion.span>
            </p>
          ))}
        </motion.h1>
      </header>
      <div className="w-full h-auto mt-10">
        {SUBTITLE_TEXT_ARR.map((text, i) => (
          <p key={i} className="font-oswald-r text-base text-black leading-4 mobile-sm:text-lg">
            {text}
          </p>
        ))}
      </div>
      <div className="flex flex-col w-full h-auto mt-8">
        <p className="font-oswald-l text-tiny text-black mobile-sm:text-xs mobile-md:text-sm">
          {PARAGRAPH_TEXT1_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
        <p className="mt-4 font-oswald-l text-tiny text-black mobile-sm:text-xs mobile-md:text-sm">
          {PARAGRAPH_TEXT2_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
        <p className="mt-4 font-oswald-l text-tiny text-black mobile-sm:text-xs mobile-md:text-sm">
          {PARAGRAPH_TEXT3_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
        <p className="mt-4 font-oswald-l text-tiny text-black mobile-sm:text-xs mobile-md:text-sm">
          {PARAGRAPH_TEXT4_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
      </div>
      <div className="flex flex-col w-full h-auto mt-10">
        {TECH_STACK.map((text, i) => (
          <p key={i} className="font-oswald-m text-base text-black leading-4 mobile-sm:text-lg">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;

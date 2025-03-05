import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { motion, useInView } from "motion/react";
import {
  TITLE_TEXT_ARR,
  SUBTITLE_TEXT_ARR,
  WIDE_SUBTITLE_TEXT_ARR,
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
  const isScreen = useMediaQuery({ minWidth: 411 });
  const isInView = useInView(ref, { once: true, amount: "all" });

  const SUBTITLE_ARR = isScreen ? WIDE_SUBTITLE_TEXT_ARR : SUBTITLE_TEXT_ARR;

  return (
    <section className="wrapper h-auto flex flex-col xl:w-[calc(100vw-45vw)]">
      <header className="w-full h-auto">
        <motion.h1
          ref={ref}
          className="w-full h-auto flex flex-col font-oswald-m text-3xl text-black leading-7 tracking-tighter mobile-sm:text-4xl mobile-sm:leading-8 mobile-md:text-[2.5rem] mobile-md:leading-9 md:text-6xl md:leading-13 tablet-md:text-7xl tablet-md:leading-16 lg:text-8xl lg:leading-21 xl:text-6xl xl:leading-13"
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
      <div className="text-justify flex flex-col w-full h-auto mt-10 md:w-4/5 md:mt-14 lg:mt-20 xl:mt-14 laptop:w-full">
        {SUBTITLE_ARR.map((text, i) => (
          <p
            key={i}
            className="font-oswald-r text-base text-black leading-4 mobile-sm:text-lg md:text-2xl md:leading-6 tablet-md:text-3xl tablet-md:leading-7 lg:text-4xl lg:leading-9 xl:text-2xl xl:leading-6 laptop:w-3/5"
          >
            {text}
          </p>
        ))}
      </div>
      <div className=" text-justify flex flex-col w-full h-auto mt-8 mobile-md:w-4/5 md:w-2/4 tablet-md:mt-10 tablet-md:w-2/4 xl:mt-6 xl:w-3/5 laptop:w-1/2">
        <p className="font-oswald-l text-tiny text-black mobile-sm:text-xs md:text-sm tablet-md:text-sm lg:text-xl xl:text-base laptop:text-sm">
          {PARAGRAPH_TEXT1_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
        <p className="mt-4 font-oswald-l text-tiny text-black mobile-sm:text-xs md:text-sm tablet-md:text-sm lg:text-xl xl:text-base laptop:text-sm">
          {PARAGRAPH_TEXT2_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
        <p className="mt-4 font-oswald-l text-tiny text-black mobile-sm:text-xs md:text-sm tablet-md:text-sm lg:text-xl xl:text-base laptop:text-sm">
          {PARAGRAPH_TEXT3_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
        <p className="mt-4 font-oswald-l text-tiny text-black mobile-sm:text-xs md:text-sm tablet-md:text-sm lg:text-xl xl:text-base laptop:text-sm">
          {PARAGRAPH_TEXT4_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
      </div>
      <div className="flex flex-col w-full h-auto mt-10 md:mt-14 lg:mt-20 xl:mt-14">
        {TECH_STACK.map((text, i) => (
          <p
            key={i}
            className="font-oswald-m text-base text-black leading-4 mobile-sm:text-lg md:text-2xl md:leading-6 tablet-md:text-3xl tablet-md:leading-7 lg:text-4xl lg:leading-9 xl:text-2xl xl:leading-6"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;

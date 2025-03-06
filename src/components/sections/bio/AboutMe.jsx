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
    <section className="wrapper flex flex-col custom-tablet:w-full lg:w-[calc(100vw-45vw)] lg:pl-[calc((100vw-45vw)-43%)] screen-md:pl-[calc((100vw-45vw)-41%)]">
      <header className="w-full h-auto">
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
      <div className="text-justify flex flex-col w-full h-auto mt-8 mobile-sm-plus:mt-10 md:mt-14 custom-tablet:mt-14 lg:mt-8 xl:mt-10 laptop:w-3/4 laptop:mt-14">
        {SUBTITLE_TEXT_ARR.map((text, i) => (
          <p
            key={i}
            className="font-oswald-r text-[0.93rem] text-black leading-4 mobile-sm:text-base mobile-sm-plus:text-lg mobile-sm-plus:leading-5 mobile-lg:text-xl md:text-2xl md:leading-6 tablet-md:text-3xl tablet-md:leading-7 custom-tablet:text-3xl custom-tablet:leading-7 lg:text-xl lg:leading-5 xl:text-2xl xl:leading-6"
          >
            {text}
          </p>
        ))}
      </div>
      <div className=" text-justify flex flex-col w-full h-auto mt-6 mobile-sm:w-[90%] mobile-md:w-4/5 mobile-lg:mt-8 mobile-lg:w-[90%] md:w-2/4 tablet-md:mt-10 tablet-md:w-2/4 custom-tablet:w-[43%] custom-tablet:mt-10 lg:mt-6 lg:w-[75%] xl:w-[67%] laptop:w-[60%] laptop:mt-8 2xl:w-[60%] screen-sm:w-[55%] screen-md:w-[50%]">
        <p className="font-oswald-l text-tiny text-black mobile-sm:text-xs mobile-lg:text-sm xl:text-sm">
          {PARAGRAPH_TEXT1_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
        <p className="mt-4 font-oswald-l text-tiny text-black mobile-sm:text-xs mobile-lg:text-sm xl:text-sm">
          {PARAGRAPH_TEXT2_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
        <p className="mt-4 font-oswald-l text-tiny text-black mobile-sm:text-xs mobile-lg:text-sm xl:text-sm">
          {PARAGRAPH_TEXT3_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
        <p className="mt-4 font-oswald-l text-tiny text-black mobile-sm:text-xs mobile-lg:text-sm xl:text-sm">
          {PARAGRAPH_TEXT4_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
      </div>
      <div className="flex flex-col w-full h-auto mt-8 mobile-sm-plus:mt-10 md:mt-14 lg:mt-8 custom-tablet:mt-14 xl:mt-10 laptop:mt-14">
        {TECH_STACK.map((text, i) => (
          <p
            key={i}
            className="font-oswald-r text-[0.93rem] text-black leading-4 mobile-sm:text-base mobile-sm-plus:text-lg mobile-sm-plus:leading-5 mobile-lg:text-xl md:text-2xl md:leading-6 tablet-md:text-3xl tablet-md:leading-7 custom-tablet:text-3xl custom-tablet:leading-7 lg:text-xl lg:leading-5 xl:text-2xl xl:leading-6"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;

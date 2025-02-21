import { motion } from "motion/react";
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
  initial: { top: '1.7rem'},
  animate:(j)=>( { top: '-1.9rem', transition:{duration:1.5, delay: j * Math.random() * 0.1} }),
};

const AboutMe = () => {
  return (
    <section className="container h-auto flex flex-col">
      <header className="w-full h-auto">
        <h1 className="w-full h-auto flex flex-col font-oswald-m text-huge text-black leading-small tracking-tighter">
          {TITLE_TEXT_ARR.map((text, i) => (
            <p className="relative overflow-hidden" key={i}>{text.split('').map((letter,j)=>{
              return(
                <motion.span custom={j} variants={ItemVariants} initial='initial' whileInView='animate' viewport={{ once: true }} key={j} className="relative inline-block title-after-content top-[var(--text-huge)]" data-content={letter}>
                  {letter}
                </motion.span>
              )
            })}</p>
          ))}
        </h1>
      </header>
      <div className="w-full h-auto mt-10">
        {SUBTITLE_TEXT_ARR.map((text, i) => (
          <p key={i} className="font-oswald-r text-small text-black leading-tiny">
            {text}
          </p>
        ))}
      </div>
      <div className="flex flex-col w-full h-auto mt-8">
        <p className="font-oswald-l text-tiny text-black">
          {PARAGRAPH_TEXT1_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
        <p className="mt-4 font-oswald-l text-tiny text-black">
          {PARAGRAPH_TEXT2_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
        <p className="mt-4 font-oswald-l text-tiny text-black">
          {PARAGRAPH_TEXT3_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
        <p className="mt-4 font-oswald-l text-tiny text-black">
          {PARAGRAPH_TEXT4_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
      </div>
      <div className="w-full h-auto mt-10 leading-tiny">
        {TECH_STACK.map((text, i) => (
          <p key={i} className="font-oswald-m text-small text-black">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;

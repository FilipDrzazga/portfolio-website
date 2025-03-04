import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CONTACT_TITLE_ARR, SOCIAL_LINKS, FOOTER_TEXT1_ARR, FOOTER_TEXT2_ARR, SPECIAL_SIGNS_ARR } from "../../../utils/constants";
// import { CONTACT_MOBILE, CONTACT_TABLET, CONTACT_DESKTOP } from "../../../assets/images/images";

const ContactTitleVariants = {
  initial: { y: "100%" },
  animate: (i) => ({ y: "0%", transition: { duration: 0.5, delay: i * 0.05 } }),
};
const FooterVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.3 } },
};
const FooterItemVariants = {
  initial: { opacity: 0, "--after-opacity": 1 },
  animate: { opacity: 1, "--after-opacity": 0 },
};

const Contact = () => {
  const titleRef = useRef();
  const footerRef = useRef();
  const isInViewTitle = useInView(titleRef, { once: true, amount: 0.4 });
  const isInViewFooter = useInView(footerRef, { once: true, amount: 0.4 });

  return (
    <section className="wrapper flex flex-col justify-between xl:w-[calc(100vw-45vw)] xl:justify-center xl:gap-10">
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <picture className="w-full h-full">
          <source srcSet={CONTACT_MOBILE} type="image/webp" media="(max-width: 480px)" />
          <source srcSet={CONTACT_TABLET} type="image/webp" media="(min-width: 768px)" />
          <source srcSet={CONTACT_DESKTOP} type="image/webp" media="(min-width: 1200px)" />
          <img className="w-full h-full object-cover" src={CONTACT_MOBILE} alt="A portrait of me" />
        </picture>
      </div> */}
      <header className="w-full h-auto mt-13 md:mt-16 xl:mt-0">
        <motion.h2
          ref={titleRef}
          className="w-full h-auto flex flex-col font-oswald-m text-3xl text-white leading-7 tracking-tighter mobile-sm:text-4xl mobile-sm:leading-8 mobile-md:text-[2.5rem] mobile-md:leading-9 md:text-6xl md:leading-13 tablet-md:text-7xl tablet-md:leading-16 lg:text-8xl lg:leading-21 xl:flex-row xl:flex-wrap xl:justify-center xl:items-center xl:text-black xl:text-[3.3rem] xl:leading-12 laptop:flex-row laptop:flex-wrap laptop:justify-center laptop:items-center"
        >
          {CONTACT_TITLE_ARR.map((text, i) => (
            <p className="relative w-full overflow-hidden xl:w-auto xl:mr-1" key={i}>
              <span className="invisible">{text}</span>
              <motion.span
                custom={i}
                variants={ContactTitleVariants}
                initial="initial"
                animate={isInViewTitle ? "animate" : "initial"}
                viewport={{ once: true }}
                className="absolute w-full left-0 -top-px"
                key={i}
              >
                {text}
              </motion.span>
            </p>
          ))}
        </motion.h2>
      </header>
      <div className="w-full h-auto mb-6 tablet-md:-mt-20 xl:mt-0">
        <ul className="flex justify-between w-full h-auto md:justify-evenly">
          {SOCIAL_LINKS.map((text, i) => (
            <li
              key={i}
              className="font-oswald-r text-base text-white mobile-sm:text-lg md:text-2xl tablet-md:text-2xl lg:text-3xl xl:font-oswald-l xl:text-sm xl:text-black laptop:text-sm"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
      <motion.footer
        ref={footerRef}
        variants={FooterItemVariants}
        className="flex flex-col justify-center items-center w-full h-auto mb-4 xl:absolute xl:bottom-3 xl:right-0 xl:mb-0"
      >
        {FOOTER_TEXT1_ARR.map((text, i) => (
          <motion.p
            key={i}
            variants={FooterVariants}
            initial="initial"
            animate={isInViewFooter ? "animate" : "initial"}
            className="-mb-1 font-oswald-l text-tiny text-black mobile-md:text-xs lg:text-sm xl:text-tiny"
          >
            {text.split("").map((letter, j) => {
              const getRandomSign = SPECIAL_SIGNS_ARR[Math.floor(Math.random() * SPECIAL_SIGNS_ARR.length)];
              return (
                <motion.span
                  key={j}
                  className="footer-after-content relative inline-block"
                  variants={FooterItemVariants}
                  data-content={getRandomSign}
                >
                  {letter}
                </motion.span>
              );
            })}
          </motion.p>
        ))}
        {FOOTER_TEXT2_ARR.map((text, i) => (
          <motion.p
            key={i}
            variants={FooterVariants}
            initial="initial"
            animate={isInViewFooter ? "animate" : "initial"}
            className="font-oswald-l text-tiny text-black mobile-md:text-xs lg:text-sm xl:text-tiny"
          >
            {text.split("").map((letter, j) => {
              const getRandomSign = SPECIAL_SIGNS_ARR[Math.floor(Math.random() * SPECIAL_SIGNS_ARR.length)];
              return (
                <motion.span
                  key={j}
                  className="footer-after-content relative inline-block"
                  variants={FooterItemVariants}
                  data-content={getRandomSign}
                >
                  {letter}
                </motion.span>
              );
            })}
          </motion.p>
        ))}
      </motion.footer>
    </section>
  );
};

export default Contact;

// 80 70 55

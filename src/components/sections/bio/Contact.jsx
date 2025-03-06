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
    <section className="wrapper flex flex-col justify-between custom-tablet:w-full custom-tablet:justify-evenly lg:w-[calc(100vw-45vw)] lg:justify-center lg:gap-10">
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <picture className="w-full h-full">
          <source srcSet={CONTACT_MOBILE} type="image/webp" media="(max-width: 480px)" />
          <source srcSet={CONTACT_TABLET} type="image/webp" media="(min-width: 768px)" />
          <source srcSet={CONTACT_DESKTOP} type="image/webp" media="(min-width: 1200px)" />
          <img className="w-full h-full object-cover" src={CONTACT_MOBILE} alt="A portrait of me" />
        </picture>
      </div> */}
      <header className="w-full h-auto mt-13 md:mt-16 custom-tablet:-mt-20 lg:mt-0 2xl:w-[90%] 2xl:mx-auto">
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
      <div className="w-full h-auto mb-6 tablet-md:-mt-20 custom-tablet:-mt-40 lg:mt-0">
        <ul className="flex justify-between w-full h-auto md:justify-evenly">
          {SOCIAL_LINKS.map((text, i) => (
            <li
              key={i}
              className="font-oswald-r text-base text-white cursor-pointer mobile-sm:text-lg md:text-2xl custom-tablet:font-oswald-r custom-tablet:text-white custom-tablet:text-3xl lg:font-oswald-l lg:text-black lg:text-base xl:text-sm laptop:text-sm"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
      <motion.footer
        ref={footerRef}
        variants={FooterItemVariants}
        className="flex flex-col justify-center items-center w-full h-auto lg:absolute lg:bottom-3 lg:right-0 lg:mb-0"
      >
        {FOOTER_TEXT1_ARR.map((text, i) => (
          <motion.p
            key={i}
            variants={FooterVariants}
            initial="initial"
            animate={isInViewFooter ? "animate" : "initial"}
            className="-mb-1 font-oswald-l text-tiny text-black mobile-md:text-xs lg:text-tiny"
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
            className="font-oswald-l text-tiny text-black mobile-md:text-xs lg:text-tiny"
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

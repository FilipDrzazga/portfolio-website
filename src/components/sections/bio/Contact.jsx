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
    <section className="wrapper flex flex-col justify-between">
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <picture className="w-full h-full">
          <source srcSet={CONTACT_MOBILE} type="image/webp" media="(max-width: 480px)" />
          <source srcSet={CONTACT_TABLET} type="image/webp" media="(min-width: 768px)" />
          <source srcSet={CONTACT_DESKTOP} type="image/webp" media="(min-width: 1200px)" />
          <img className="w-full h-full object-cover" src={CONTACT_MOBILE} alt="A portrait of me" />
        </picture>
      </div> */}
      <header className="w-full h-auto mt-6">
        <motion.h2 ref={titleRef} className="flex flex-col font-oswald-m text-huge text-white leading-7 tracking-tighter mobile-sm:text-xl mobile-sm:leading-8">
          {CONTACT_TITLE_ARR.map((text, i) => (
            <p className="relative w-full h-auto overflow-hidden" key={i}>
              <span className="invisible">{text}</span>
              <motion.span
                custom={i}
                variants={ContactTitleVariants}
                initial="initial"
                animate={isInViewTitle ? "animate" : "initial"}
                viewport={{ once: true }}
                className="absolute w-full left-0"
                key={i}
              >
                {text}
              </motion.span>
            </p>
          ))}
        </motion.h2>
      </header>
      <div className="w-full h-auto mb-6">
        <ul className="flex justify-between w-full h-auto">
          {SOCIAL_LINKS.map((text, i) => (
            <li key={i} className="font-oswald-r text-base text-white mobile-sm:text-lg">
              {text}
            </li>
          ))}
        </ul>
      </div>
      <motion.footer
        ref={footerRef}
        variants={FooterItemVariants}
        className="flex flex-col justify-center items-center w-full h-auto mb-4"
      >
        {FOOTER_TEXT1_ARR.map((text, i) => (
          <motion.p
            key={i}
            variants={FooterVariants}
            initial="initial"
            animate={isInViewFooter ? "animate" : "initial"}
            className="font-oswald-l text-tiny text-black"
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
            className="font-oswald-l text-tiny text-black"
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

import { motion } from "motion/react";
import { SPECIAL_SIGNS_ARR, FOOTER_TEXT1_ARR, FOOTER_TEXT2_ARR } from "../../../../../utils/constants";

const FooterVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.3 } },
};

const FooterItemVariants = {
  initial: { opacity: 0, "--after-opacity": 1 },
  animate: { opacity: 1, "--after-opacity": 0 },
};

const FooterText = ({ isInView }) => {
  // Ensure each array contains valid text values
  const footerTextsArray = [...FOOTER_TEXT1_ARR, ...FOOTER_TEXT2_ARR];

  return (
    <>
      {footerTextsArray.map((textItem, i) => (
        <motion.p
          key={i}
          variants={FooterVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="font-oswald-l text-tiny text-black mobile-md:text-xs lg:text-tiny"
        >
          {typeof textItem === "string"
            ? textItem.split("").map((letter, j) => {
                const getRandomSign =
                  SPECIAL_SIGNS_ARR[Math.floor(Math.random() * SPECIAL_SIGNS_ARR.length)];
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
              })
            : null}
        </motion.p>
      ))}
    </>
  );
};

export default FooterText;

import { motion, useScroll, useTransform } from "motion/react";
// import { BIO_MOBILE, BIO_TABLET, BIO_DESKTOP } from "../../../assets/images/images";
import { COORDINATES_ARR, SPECIAL_SIGNS_ARR } from "../../../utils/constants";

const ContainerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.3 } },
  fadeOnScroll: { opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } },
};
const ItemVariants = {
  initial: { opacity: 0, "--after-opacity": 1 },
  animate: { opacity: 1, "--after-opacity": 0 },
};

const Bio = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const y = useTransform(scrollY, [0, 110], [0, -15]);

  return (
    <section className="container flex flex-col justify-end">
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <picture className="w-full h-full">
          <source srcSet={BIO_MOBILE} type="image/webp" media="(max-width: 480px)" />
          <source srcSet={BIO_TABLET} type="image/webp" media="(min-width: 768px)" />
          <source srcSet={BIO_DESKTOP} type="image/webp" media="(min-width: 1200px)" />
          <img className="w-full h-full object-cover" src={BIO_MOBILE} alt="A portrait of me" />
        </picture>
      </div> */}
      <div className="relative flex justify-between w-full h-auto">
        {COORDINATES_ARR.map((text, i) => (
          <motion.div
            key={i}
            style={{ opacity, y }}
            variants={ContainerVariants}
            initial="initial"
            animate="animate"
            className="flex"
          >
            {text.split("").map((letter, j) => {
              const getRandomSign = SPECIAL_SIGNS_ARR[Math.floor(Math.random() * SPECIAL_SIGNS_ARR.length)];
              return (
                <motion.span
                  key={j}
                  className="coordinates-after-content relative font-oswald-r text-tiny text-black inline-block"
                  variants={ItemVariants}
                  data-content={getRandomSign}
                >
                  {letter}
                </motion.span>
              );
            })}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Bio;

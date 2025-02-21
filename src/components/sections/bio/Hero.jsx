import { motion} from "motion/react";
// import { BIO_MOBILE, BIO_TABLET, BIO_DESKTOP } from "../../../assets/images/images";
import { COORDINATES_ARR, SPECIAL_SIGNS_ARR } from "../../../utils/constants";

const ContainerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, staggerChildren: 0.1, delayChildren: 0.3 } },
};
const ItemVariants = {
  initial: { opacity: 0, "--after-opacity": 1 },
  animate: { opacity: 1, "--after-opacity": 0 },
};

const Bio = () => {
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
          <motion.div key={i} variants={ContainerVariants} initial="initial" animate="animate">
            {text.split("").map((letter, j) => {
              const getRandomSign = SPECIAL_SIGNS_ARR[Math.floor(Math.random() * SPECIAL_SIGNS_ARR.length)];
              return (
                <motion.span
                  key={j}
                  className="coordinates-after-content relative font-oswald-r text-tiny text-black"
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

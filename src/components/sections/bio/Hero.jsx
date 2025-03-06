import { motion, useScroll, useTransform } from "motion/react";
import { useMediaQuery } from "react-responsive";
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
  const isScreen = useMediaQuery({ minWidth: 1024 });
  const isCustomRange = useMediaQuery({
    width: 1024,
    height: 1366,
  });
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const y = useTransform(scrollY, [0, 110], [0, -15]);

  return (
    <section className="wrapper flex flex-col justify-end custom-tablet:w-full lg:w-[calc(100vw-45vw)] laptop:items-center">
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <picture className="w-full h-full">
          <source srcSet={BIO_MOBILE} type="image/webp" media="(max-width: 480px)" />
          <source srcSet={BIO_TABLET} type="image/webp" media="(min-width: 768px)" />
          <source srcSet={BIO_DESKTOP} type="image/webp" media="(min-width: 1200px)" />
          <img className="w-full h-full object-cover" src={BIO_MOBILE} alt="A portrait of me" />
        </picture>
      </div> */}
      {isScreen && !isCustomRange && (
        <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex flex-col justify-center items-center gap-1">
          <span className="font-oswald-l text-tiny text-black lg:text-xs xl:text-tiny 2xl:text-sm screen-lg:text-xs">
            OPEN TO NEW OPPORTUNITIES
          </span>
          <div className="w-2 h-2 rounded-full bg-green"></div>
        </div>
      )}
      <div className="relative flex justify-between w-full h-auto laptop:w-3/5">
        {COORDINATES_ARR.map((text, i) => (
          <motion.div
            key={i}
            style={{ opacity, y }}
            variants={ContainerVariants}
            initial="initial"
            animate="animate"
            className="flex laptop:justify-center laptop:items-center"
          >
            {text.split("").map((letter, j) => {
              const getRandomSign = SPECIAL_SIGNS_ARR[Math.floor(Math.random() * SPECIAL_SIGNS_ARR.length)];
              return (
                <motion.span
                  key={j}
                  className="coordinates-after-content relative font-oswald-r text-tiny text-black inline-block mobile-md:text-xs tablet-md:text-xs lg:font-oswald-l xl:text-tiny 2xl:text-sm screen-lg:text-xs"
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

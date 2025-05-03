/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { AnimatePresence } from "motion/react";
import { AnimatedContainer, AnimatedBackground, AnimatedTextContainer, AnimatedText } from "./AnimatedRoutes.styled";

const AnimatedContainerVariants = {
  initial: { scale: 1 },
  animate: { scale: 1, transition: { duration: 2, delay: 0.2, ease: "easeIn" } },
  exit: { scale: [1, 0.9, 0.9, 1], transition: { duration: 2, delay: 0.2, ease: "easeOut" } },
};
const AnimatedBackgroundVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
  exit: { opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
};
const AnimatedTextVariants = {
  initial: { y: 20 },
  animate: { y: 20, transition: { duration: 2, ease: "easeIn" } },
  exit: { y: [20, 0, 0, -20], transition: { duration: 2, ease: "easeOut" } },
};

const AnimatedRoutes = ({ children, locationPathName }) => {
  const locationName = useRef("PLAYGROUND"); // change when you add more pages
  const animationControls = useRef(null);

  useEffect(() => {
    let timer;
    locationName.current = locationPathName.split("/")[1].toUpperCase();

    if (animationControls.current && locationPathName !== locationName.current) {
      animationControls.current.style.overflow = "hidden";

      timer = setTimeout(() => {
        animationControls.current.style.overflow = "";
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [locationPathName]);

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <AnimatedContainer
        ref={animationControls}
        key={locationPathName}
        variants={AnimatedContainerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <AnimatedBackground variants={AnimatedBackgroundVariants} initial="initial" animate="animate" exit="exit">
          <AnimatedTextContainer>
            <AnimatedText variants={AnimatedTextVariants} initial="initial" animate="animate" exit="exit">
              {locationName.current}
            </AnimatedText>
          </AnimatedTextContainer>
        </AnimatedBackground>
        {children}
      </AnimatedContainer>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

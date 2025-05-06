/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "motion/react";
import { PageAnimatedContainer, AnimatedBackground, AnimatedTextContainer, AnimatedText } from "./AnimatedRoutes.styled";

const PageAnimatedContainerVariants = {
  initial: { opacity: 1 },
  animate: { opacity: 1, transition: { duration: 2, ease: "easeIn" } },
  exit: { opacity: [1, 0, 0, 0], transition: { duration: 4, ease: "easeOut" } },
};
const AnimatedBackgroundVariants = {
  initial: { opacity: 0.95, scale: 1 },
  animate: { opacity: 1, scale: [1, 0.9, 0.9], transition: { duration: 2, ease: "easeIn" } },
  exit: { opacity: 1, scale: [0.9, 0.9, 1], transition: { duration: 2, ease: "easeOut" } },
};
const AnimatedTextVariants = {
  initial: { y: 20 },
  animate: { y: 0, transition: { delay: 0.8, duration: 1, type: "spring", bounce: 0.5 } },
  exit: { y: -20, transition: { delay: 1, duration: 1, ease: "easeOut" } },
};

const AnimatedRoutes = ({ children, locationPathName }) => {
  const locationName = useRef("PLAYGROUND"); // change when you add more pages

  const pageAnimatedContainerRef = useRef(null);
  const [isPageTransitionStart, setIsPageTransitionStart] = useState(false);

  useEffect(() => {
    locationName.current = locationPathName.split("/")[1].toUpperCase();
    if (locationPathName !== locationName.current) {
      document.body.style.overflow = "hidden";
      setIsPageTransitionStart(true);
    }
  }, [locationPathName]);

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {isPageTransitionStart && (
          <AnimatedBackground
            variants={AnimatedBackgroundVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationComplete={() => {
              setIsPageTransitionStart(false);
              document.body.style.overflow = "auto";
            }}
          >
            <AnimatedTextContainer>
              <AnimatedText variants={AnimatedTextVariants} initial="initial" animate="animate" exit="exit">
                {locationName.current}
              </AnimatedText>
            </AnimatedTextContainer>
          </AnimatedBackground>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <PageAnimatedContainer
          ref={pageAnimatedContainerRef}
          key={locationPathName}
          variants={PageAnimatedContainerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </PageAnimatedContainer>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;

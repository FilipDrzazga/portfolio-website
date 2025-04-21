import { useTransform, useScroll } from "motion/react";
import { COORDINATES_ARR } from "../../../../utils/constants";
import { CoordinatesDisplayContainer, CoordinatesDisplayItem, CoordinatesDisplayItemSpan } from "./CoordinatesDisplay.styled";

let hasAnimated = false;

const CoordinatesDisplay = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, -100]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <CoordinatesDisplayContainer>
      {COORDINATES_ARR.map((coordinate, i) => (
        <CoordinatesDisplayItem style={{ opacity, y }} key={i}>
          <CoordinatesDisplayItemSpan
            initial={!hasAnimated ? { y: 15 } : undefined}
            animate={!hasAnimated ? { y: 0 } : undefined}
            transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
            onAnimationComplete={() => {
              hasAnimated = true;
            }}
            key={i}
          >
            {coordinate}
          </CoordinatesDisplayItemSpan>
        </CoordinatesDisplayItem>
      ))}
    </CoordinatesDisplayContainer>
  );
};

export default CoordinatesDisplay;

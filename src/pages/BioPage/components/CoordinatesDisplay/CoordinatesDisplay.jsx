import { useTransform, useScroll } from "motion/react";
import { COORDINATES_ARR } from "../../../../utils/constants";
import { CoordinatesDisplayContainer, CoordinatesDisplayItem, CoordinatesDisplayItemSpan } from "./CoordinatesDisplay.styled";

const CoordinatesDisplay = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, 100]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <CoordinatesDisplayContainer>
      {COORDINATES_ARR.map((coordinate, i) => (
        <CoordinatesDisplayItem style={{ opacity, y }} key={i}>
          <CoordinatesDisplayItemSpan
            initial={{ y: 15 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 1.8, ease: "easeOut", type: "spring" }}
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

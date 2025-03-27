import { useTransform, useScroll } from "motion/react";
import { COORDINATES_ARR } from "../../../../../utils/constants";
import { CoordinatesDisplayContainer, CoordinatesDisplayItem } from "../styles/CoordinatesDisplay.styled";

const CoordinatesDisplay = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, -100]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <CoordinatesDisplayContainer>
      {COORDINATES_ARR.map((coordinate, i) => (
        <CoordinatesDisplayItem style={{ opacity, y }} key={i}>
          <span key={i}>{coordinate}</span>
        </CoordinatesDisplayItem>
      ))}
    </CoordinatesDisplayContainer>
  );
};

export default CoordinatesDisplay;

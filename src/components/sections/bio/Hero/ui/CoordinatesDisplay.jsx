import { COORDINATES_ARR } from "../../../../../utils/constants";
import { CoordinatesDisplayContainer, CoordinatesDisplayItem } from "../styles/CoordinatesDisplay.styled";

const CoordinatesDisplay = () => {
  return (
    <CoordinatesDisplayContainer>
      {COORDINATES_ARR.map((coordinate, i) => (
        <CoordinatesDisplayItem key={i}>
          <span key={i}>{coordinate}</span>
        </CoordinatesDisplayItem>
      ))}
    </CoordinatesDisplayContainer>
  );
};

export default CoordinatesDisplay;

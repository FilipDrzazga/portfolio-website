import styled from "styled-components";
import { DEVICE } from "../../styles/theme";

const BioPageWrapper = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding-left: clamp(1rem, 5vw, 3rem);
  padding-right: clamp(1rem, 5vw, 3rem);
  overflow-x: hidden;
  @media ${DEVICE["1366"]} {
    padding-left: 8rem;
    padding-right: 8rem;
  }
`;

export { BioPageWrapper };

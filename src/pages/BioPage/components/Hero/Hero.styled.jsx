import styled from "styled-components";
import { DEVICE } from "../../../../styles/theme";

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  padding: ${({ theme }) => theme.spacing.normal};
`;
const TextureMask = styled.div`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  pointer-events: none;
  z-index: -1;
`;
const CoordinatesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 73%;
`;
const CoordinatesText = styled.p`
  font-family: "Oswald-regular";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
    @media ${DEVICE.MOBILE_S} {
      font-size: 0.8rem;
    }
`
const ScrollTextWrapper = styled.div`
  width: 100%;
  margin-bottom:2rem;
  text-align: center;
`;
const ScrollText = styled.span`
  font-family: "Oswald-regular";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  @media ${DEVICE.MOBILE_S} {
    font-size: 0.8rem;
  }
`;

export {HeroWrapper, TextureMask,CoordinatesWrapper, CoordinatesText, ScrollTextWrapper, ScrollText};
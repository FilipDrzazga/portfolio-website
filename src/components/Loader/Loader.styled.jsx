import styled from "styled-components";
import { motion } from "motion/react";
import { DEVICE } from "../../styles/theme";

const Container = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 1000;
`;
const Content = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
const PercentageAnimation = styled(motion.span)`
  font-family: "Oswald-medium";
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
  @media ${DEVICE.MOBILE_S} {
    font-size: 1.2rem;
  }
`;
const ProgressBar = styled(motion.div)`
  width: 50%;
  height: 0.2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  transform-origin: left;
`;

export { Container, Content, PercentageAnimation, ProgressBar };

import styled from "styled-components";
import { motion } from "motion/react";
import { DEVICE } from "../../styles/theme";

const PageAnimatedContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
`;
const AnimatedBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;
`;
const AnimatedTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;
const AnimatedText = styled(motion.span)`
  display: inline-block;
  font-family: "Oswald-medium";
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};

  @media ${DEVICE.MOBILE_S} {
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
`;

export { PageAnimatedContainer, AnimatedBackground, AnimatedTextContainer, AnimatedText };

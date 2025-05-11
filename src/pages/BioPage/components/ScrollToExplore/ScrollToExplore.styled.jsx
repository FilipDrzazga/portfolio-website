import styled from "styled-components";
import { motion } from "motion/react";
import { DEVICE } from "../../../../styles/theme";

const ScrollToExploreContainer = styled(motion.div)`
  width: 100%;
  text-align: center;
`;
const ScrollToExploreText = styled(motion.span)`
  font-family: "Oswald-regular";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  @media ${DEVICE.MOBILE_S} {
    font-size: 0.8rem;
  }
`;

export { ScrollToExploreContainer, ScrollToExploreText };

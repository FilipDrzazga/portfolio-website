import styled from "styled-components";
import { motion } from "motion/react";

const TextureMaskContainer = styled(motion.div)`
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100%;
  height: 70%;
  margin-bottom: 0.5rem;
  background-color: white;
  pointer-events: none;
  z-index: -1;
`;

export { TextureMaskContainer };

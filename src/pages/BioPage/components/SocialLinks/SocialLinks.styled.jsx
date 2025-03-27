import { motion } from "motion/react";
import styled from "styled-components";
import { DEVICE } from "../../../../styles/theme";

const SocialLinksContainer = styled.div`
  width: 100%;
`;
const SocialLinksList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;
const SocialLinksListItem = styled(motion.li)`
  list-style: none;
`;
const SocialLinksLink = styled(motion.a)`
  font-family: "Oswald-regular";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  @media ${DEVICE.MOBILE_S} {
    font-size: 0.8rem;
  }
`;

export { SocialLinksContainer, SocialLinksList, SocialLinksListItem, SocialLinksLink };

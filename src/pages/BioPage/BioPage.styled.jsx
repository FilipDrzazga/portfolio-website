import styled from "styled-components";
import { DEVICE } from "../../styles/theme";

const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.normal};
`;
const AboutMeContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: ${({ theme }) => theme.spacing.normal};
  overflow: hidden;
`;
const AboutMeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${DEVICE.MOBILE_S} {
    width: 85%;
  }
`;
const ContactContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.normal};
`;
const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { HeroContainer, AboutMeContainer, AboutMeContent, ContactContainer, ContactContent };
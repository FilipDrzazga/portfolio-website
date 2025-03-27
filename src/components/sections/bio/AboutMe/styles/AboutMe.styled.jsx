import styled from "styled-components";
import { DEVICE } from "../../../../../styles/theme";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: ${({ theme }) => theme.spacing.normal};
  overflow: hidden;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${DEVICE.MOBILE_S} {
    width: 85%;
  }
`;

export { Container, Content };

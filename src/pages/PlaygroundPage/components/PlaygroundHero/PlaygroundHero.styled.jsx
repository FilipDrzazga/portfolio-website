import styled from "styled-components";
import { DEVICE } from "../../../../styles/theme";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  width: 100%;
  height: auto;
  margin-top: 15vh;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  @media ${DEVICE.MOBILE_S} {
    width: 85%;
  }
`;
const Title = styled.h1`
  width: 100%;
  height: ${({ theme }) => theme.fontSizes.large};
  font-family: "Oswald-medium";
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  @media ${DEVICE.MOBILE_S} {
    height: 4rem;
    font-size: 4rem;
  }
`;
const Description = styled.p`
  width: 90%;
  font-family: "Oswald-regular";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  text-align: justify;
  text-justify: inter-word;
  @media ${DEVICE.MOBILE_S} {
    font-size: 0.8rem;
  }
`;

export { Header, Title, Description };

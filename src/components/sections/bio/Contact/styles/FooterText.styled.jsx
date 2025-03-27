import styled from "styled-components";

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 1rem;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.p`
  font-family: "Oswald-regular";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
`;

export { FooterContainer, Text };

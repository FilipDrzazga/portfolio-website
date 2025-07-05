import styled from "styled-components";

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 12vh;
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;
`;
const Title = styled.h1`
  width: 100%;
  font-family: "InterRegular";
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
`;
const Text = styled.p`
  font-family: "JetBrainsMonoMedium";
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.6;
  text-align: justify;
  text-justify: inter-word;
`;

export { HeroWrapper, Header, Title, Text };

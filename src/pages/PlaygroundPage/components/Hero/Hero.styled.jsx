import styled from "styled-components";

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 1260px;
  height: auto;
  padding-top: 12vh;
  z-index: 1;
`;
const Header = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({ theme }) => theme.margins.paragraph};
`;
const Title = styled.h1`
  width: 100%;
  font-family: "InterExtraBold", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  margin-bottom: ${({ theme }) => theme.margins.h1};
  line-height: ${({ theme }) => theme.lineHeights.h1};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.h1};
  text-align: left;
  font-weight: 400;
`;
const Text = styled.p`
  font-family: "JetBrainsMonoRegular", monospace;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  margin-bottom: ${({ theme }) => theme.margins.paragraph};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.paragraph};
`;

export { HeroWrapper, Header, Title, Text };

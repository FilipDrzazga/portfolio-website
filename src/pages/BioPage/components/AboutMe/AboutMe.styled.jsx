import styled from "styled-components";

const AboutMeWrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
const Subtitle = styled.h2`
  width: 100%;
  max-width: 380px;
  font-family: "JetBrainsMonoRegular", monospace;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  margin-bottom: ${({ theme }) => theme.margins.h2};
  line-height: ${({ theme }) => theme.lineHeights.h2};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.h2};
  text-align: left;
  font-weight: 400;
  opacity: 0.6;
  span {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    display: inline-block;
    font-family: "JetBrainsMonoBold", sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.h2};
    font-weight: 400;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const ParagraphsWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Text = styled.p`
  font-family: "JetBrainsMonoRegular", monospace;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  margin-bottom: ${({ theme }) => theme.margins.paragraph};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.paragraph};
`;
const TechStackWrapper = styled.div`
  width: 100%;
  height: auto;
`;
const TechStack = styled.h3`
  font-family: "InterBold", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: ${({ theme }) => theme.margins.h2};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  line-height: ${({ theme }) => theme.lineHeights.h2};
  letter-spacing: ${({ theme }) => theme.lettersSpacing.h2};
  text-align: center;
  font-weight: 400;
`;

export { AboutMeWrapper, Header, Title, Subtitle, ParagraphsWrapper, Text, TechStackWrapper, TechStack };

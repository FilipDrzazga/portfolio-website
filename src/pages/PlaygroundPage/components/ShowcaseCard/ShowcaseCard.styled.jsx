import styled from "styled-components";

const ShowcaseCardWrapper = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  width: 100%;
  font-family: "InterRegular";
  font-size: ${({ theme }) => theme.fontSizes.medium};
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

export { ShowcaseCardWrapper, Title, Text };

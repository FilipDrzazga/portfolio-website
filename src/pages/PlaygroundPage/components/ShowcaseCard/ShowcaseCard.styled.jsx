import styled from "styled-components";

const ShowcaseCardWrapper = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.normal};
`;
const Title = styled.h2`
  width: 100%;
  font-family: "JetBrainsMonoMedium";
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export { ShowcaseCardWrapper, Title };

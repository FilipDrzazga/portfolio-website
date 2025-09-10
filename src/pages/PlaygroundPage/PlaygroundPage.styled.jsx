import styled from "styled-components";

const PlaygroundPageWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24rem;
  padding: ${({ theme }) => theme.spacing.normal};
`;

export { PlaygroundPageWrapper };

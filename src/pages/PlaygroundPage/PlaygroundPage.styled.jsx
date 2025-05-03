import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
  padding: ${({ theme }) => theme.spacing.normal};
  background-color: white;
`;

export { Container };

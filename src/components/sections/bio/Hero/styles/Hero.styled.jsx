import styled from 'styled-components';

const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.normal};
`;

export { Container };